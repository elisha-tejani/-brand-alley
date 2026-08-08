import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { products } from "@/data/products";

export const metadata = { title: "Women — Brand Alley" };

export default function WomenPage() {
  return (
    <>
      <PageHeader eyebrow="Shop" title="Women" description="Considered clothing, made in small batches." />
      <ShopGrid products={products} />
    </>
  );
}
