import GarmentIcon from "./GarmentIcon";
import Backdrop from "./Backdrop";
import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product: p }: { product: Product }) {
  return (
    <div className="group">
      <Backdrop tone={p.tone} className="relative rounded-sm aspect-[3/4] mb-3">
        <button
          aria-label="Add to wishlist"
          className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-paper flex items-center justify-center text-[13px]"
        >
          ♡
        </button>
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <GarmentIcon
            index={p.icon}
            tone={p.tone === "orange" ? "ink" : "paper"}
            className="w-3/5 h-3/5 transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
          />
        </div>
      </Backdrop>
      <p className="text-[13.5px] font-medium leading-tight">{p.name}</p>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[11px] text-clay">{p.category}</span>
        <span className="font-sans font-bold text-[12.5px] text-orange-deep">{formatPrice(p.price)}</span>
      </div>
    </div>
  );
}
