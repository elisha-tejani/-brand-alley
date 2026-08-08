import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/data/products";

export const metadata = { title: "All Products — Brand Alley" };

export default function ShopPage() {
  return (
    <>
      <PageHeader eyebrow="Shop" title="All Products" description="Every piece, in one place." />
      <ShopGrid products={products} />
    </>
  );
}
