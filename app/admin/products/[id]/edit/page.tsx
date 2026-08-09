import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/ProductForm";

export const dynamic = "force-dynamic";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id } });

  if (!product) notFound();

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <h1 className="font-sans font-extrabold text-[24px] mb-8">Edit Product</h1>
      <ProductForm product={product} />
    </div>
  );
}
