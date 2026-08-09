import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { prisma } from "@/lib/prisma";

export const metadata = { title: "New Arrivals — Brand Alley" };
export const dynamic = "force-dynamic";

export default async function NewArrivalsPage() {
  const products = await prisma.product.findMany({
    where: { isNew: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <>
      <PageHeader eyebrow="Just In" title="New Arrivals" description="Fresh off the rail, restocked weekly." />
      <ShopGrid products={products} />
    </>
  );
}
