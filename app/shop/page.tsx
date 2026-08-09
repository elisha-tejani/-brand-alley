import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "All Products — Brand Alley" };
export const dynamic = "force-dynamic";

export default async function ShopPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <>
      <PageHeader eyebrow="Shop" title="All Products" description="Every piece, in one place." />
      <ShopGrid products={products} />
    </>
  );
}
