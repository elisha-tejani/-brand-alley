import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/data/products";

export const metadata = { title: "Dresses — Brand Alley" };

export default function DressesPage() {
  const filtered = products.filter((p) => p.category === "Dresses");
  return (
    <>
      <PageHeader eyebrow="Shop" title="Dresses" description="Fluid silhouettes, forever in style." />
      <ShopGrid products={filtered} />
    </>
  );
}
