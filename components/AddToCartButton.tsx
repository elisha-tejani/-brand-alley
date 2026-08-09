"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({
  productId,
  name,
  price,
  image,
  stock,
}: {
  productId: string;
  name: string;
  price: number;
  image: string | null;
  stock: number;
}) {
  const { addItem } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem({ productId, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        onClick={handleAdd}
        disabled={stock === 0}
        className="bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-8 py-4 hover:bg-orange hover:text-ink transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {stock === 0 ? "Out of Stock" : added ? "Added ✓" : "Add to Cart"}
      </button>
      {added && (
        <button onClick={() => router.push("/cart")} className="text-[13px] underline text-clay">
          View Cart
        </button>
      )}
    </div>
  );
}
