import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Women — Brand Alley" };
export const dynamic = "force-dynamic";

export default async function WomenPage() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <>
      <PageHeader eyebrow="Shop" title="Women" description="Considered clothing, made in small batches." />
      <ShopGrid products={products} />
    </>
  );
}
