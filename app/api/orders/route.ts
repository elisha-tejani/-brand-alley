import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { customerName, email, phone, address, city, notes, paymentMethod, items } = body;

  if (!customerName || !email || !phone || !address || !city) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (paymentMethod !== "COD") {
    // Card payments aren't wired to a real gateway yet — see BACKEND_SETUP.md.
    return NextResponse.json({ error: "Card payment isn't available yet — please choose Cash on Delivery." }, { status: 400 });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
  }

  // Look up real, current prices and stock from the database — never trust
  // prices sent from the browser.
  const productIds = items.map((i: { productId: string }) => i.productId);
  const products = await prisma.product.findMany({ where: { id: { in: productIds } } });

  const orderItemsData: { productId: string; productName: string; price: number; quantity: number }[] = [];
  let subtotal = 0;

  for (const cartItem of items as { productId: string; quantity: number }[]) {
    const product = products.find((p) => p.id === cartItem.productId);
    if (!product) {
      return NextResponse.json({ error: `A product in your cart is no longer available.` }, { status: 400 });
    }
    if (product.stock < cartItem.quantity) {
      return NextResponse.json(
        { error: `Only ${product.stock} of "${product.name}" left in stock.` },
        { status: 400 }
      );
    }
    orderItemsData.push({
      productId: product.id,
      productName: product.name,
      price: product.price,
      quantity: cartItem.quantity,
    });
    subtotal += product.price * cartItem.quantity;
  }

  const order = await prisma.$transaction(async (tx) => {
    const created = await tx.order.create({
      data: {
        customerName,
        email,
        phone,
        address,
        city,
        notes: notes || null,
        paymentMethod: "COD",
        subtotal,
        items: { create: orderItemsData },
      },
      include: { items: true },
    });

    for (const item of orderItemsData) {
      await tx.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } },
      });
    }

    return created;
  });

  return NextResponse.json(order, { status: 201 });
}
