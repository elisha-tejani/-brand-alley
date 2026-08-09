import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "Dresses — Brand Alley" };
export const dynamic = "force-dynamic";

export default async function DressesPage() {
  const products = await prisma.product.findMany({
    where: { category: "Dresses" },
    orderBy: { createdAt: "desc" },
  });
  return (
    <>
      <PageHeader eyebrow="Shop" title="Dresses" description="Fluid silhouettes, forever in style." />
      <ShopGrid products={products} />
    </>
  );
}
