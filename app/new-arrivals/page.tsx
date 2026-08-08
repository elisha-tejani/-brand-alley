import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/data/products";

export const metadata = { title: "New Arrivals — Brand Alley" };

export default function NewArrivalsPage() {
  const filtered = products.filter((p) => p.isNew);
  return (
    <>
      <PageHeader eyebrow="Just In" title="New Arrivals" description="Fresh off the rail, restocked weekly." />
      <ShopGrid products={filtered} />
    </>
  );
}
