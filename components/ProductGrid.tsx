import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="font-sans font-extrabold text-[22px] sm:text-[26px] tracking-wide">BEST OF BRAND ALLEY</h2>
        <a href="/shop" className="font-sans font-semibold text-[12px] tracking-wider border-b border-ink pb-0.5">
          VIEW ALL
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
