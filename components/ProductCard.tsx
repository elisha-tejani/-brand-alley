import Image from "next/image";
import type { Product } from "@prisma/client";
import GarmentIcon from "./GarmentIcon";
import Backdrop from "./Backdrop";
import { formatPrice } from "@/lib/format";

// Cycles through a few backdrop tones for products that don't have a photo
// uploaded yet, so the placeholder grid still looks varied.
const FALLBACK_TONES = ["ink", "orange", "clay", "blush", "sage"] as const;

export default function ProductCard({ product: p }: { product: Product }) {
  const hasPhoto = p.images.length > 0;
  const tone = FALLBACK_TONES[Math.abs(hashCode(p.id)) % FALLBACK_TONES.length];

  return (
    <a href={`/product/${p.id}`} className="group block">
      {hasPhoto ? (
        <div className="relative rounded-sm aspect-[3/4] mb-3 overflow-hidden bg-stone">
          <button
            aria-label="Add to wishlist"
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-paper flex items-center justify-center text-[13px]"
          >
            ♡
          </button>
          <Image
            src={p.images[0]}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 50vw, 20vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <Backdrop tone={tone} className="relative rounded-sm aspect-[3/4] mb-3">
          <button
            aria-label="Add to wishlist"
            className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-paper flex items-center justify-center text-[13px]"
          >
            ♡
          </button>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <GarmentIcon
              index={Math.abs(hashCode(p.id))}
              tone={tone === "orange" ? "ink" : "paper"}
              className="w-3/5 h-3/5 transition-transform duration-300 group-hover:scale-105 drop-shadow-lg"
            />
          </div>
        </Backdrop>
      )}
      <p className="text-[13.5px] font-medium leading-tight">{p.name}</p>
      <div className="flex items-center justify-between mt-1">
        <span className="text-[11px] text-clay">{p.category}</span>
        <span className="font-sans font-bold text-[12.5px] text-orange-deep">{formatPrice(p.price)}</span>
      </div>
    </a>
  );
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
