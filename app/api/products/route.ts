import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(products);
}

// Creating a product requires the admin session cookie — enforced by middleware
// for any request under /api/admin/*, but this route lives under /api/products
// so we check it directly instead.
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { name, description, price, category, subcategory, stock, featured, isNew, images } = body;

  if (!name || !category || typeof price !== "number") {
    return NextResponse.json({ error: "name, category, and price are required" }, { status: 400 });
  }

  const product = await prisma.product.create({
    data: {
      name,
      description: description || null,
      price,
      category,
      subcategory: subcategory || null,
      stock: stock ?? 0,
      featured: !!featured,
      isNew: !!isNew,
      images: Array.isArray(images) ? images : [],
    },
  });

  return NextResponse.json(product, { status: 201 });
}
