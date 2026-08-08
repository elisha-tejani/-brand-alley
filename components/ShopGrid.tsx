import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ShopGrid({
  products,
  emptyLabel = "No products in this category yet — check back soon.",
}: {
  products: Product[];
  emptyLabel?: string;
}) {
  if (products.length === 0) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <p className="text-clay text-[14px]">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
