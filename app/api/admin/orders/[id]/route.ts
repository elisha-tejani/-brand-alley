import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Middleware/proxy already protects everything under /api/admin/*.

const VALID_STATUSES = ["PENDING", "CONFIRMED", "SHIPPED", "DELIVERED", "CANCELLED"];
const VALID_PAYMENT_STATUSES = ["PENDING", "PAID", "FAILED"];

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status, paymentStatus } = body;

    if (status !== undefined && !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: `Invalid status: ${status}` }, { status: 400 });
    }
    if (paymentStatus !== undefined && !VALID_PAYMENT_STATUSES.includes(paymentStatus)) {
      return NextResponse.json({ error: `Invalid payment status: ${paymentStatus}` }, { status: 400 });
    }

    const order = await prisma.order.update({
      where: { id },
      data: {
        ...(status !== undefined && { status }),
        ...(paymentStatus !== undefined && { paymentStatus }),
      },
    });

    return NextResponse.json(order);
  } catch (err) {
    console.error("Failed to update order:", err);
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 });
  }
}
