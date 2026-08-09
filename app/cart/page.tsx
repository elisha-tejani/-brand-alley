"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";
import GarmentIcon from "@/components/GarmentIcon";
import Backdrop from "@/components/Backdrop";

export default function CartPage() {
  const { items, setQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-[720px] mx-auto px-6 py-20 text-center">
        <h1 className="font-sans font-extrabold text-[24px] mb-3">Your cart is empty</h1>
        <p className="text-clay text-[14px] mb-8">Find something you like and it&apos;ll show up here.</p>
        <Link
          href="/shop"
          className="inline-block bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 hover:bg-orange hover:text-ink transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-12 md:py-16">
      <h1 className="font-sans font-extrabold text-[24px] mb-8">Your Cart</h1>

      <div className="flex flex-col divide-y divide-line border-t border-b border-line mb-8">
        {items.map((item) => (
          <div key={item.productId} className="flex items-center gap-5 py-5">
            <div className="relative w-20 h-24 rounded-sm overflow-hidden bg-stone shrink-0">
              {item.image ? (
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              ) : (
                <Backdrop tone="ink" className="w-full h-full">
                  <div className="w-full h-full flex items-center justify-center">
                    <GarmentIcon index={0} tone="paper" className="w-3/5 h-3/5" />
                  </div>
                </Backdrop>
              )}
            </div>

            <div className="flex-1">
              <p className="text-[14px] font-medium">{item.name}</p>
              <p className="font-sans font-bold text-[13px] text-orange-deep mt-1">{formatPrice(item.price)}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(item.productId, item.quantity - 1)}
                className="w-7 h-7 border border-line rounded-sm hover:border-ink"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-6 text-center text-[13px]">{item.quantity}</span>
              <button
                onClick={() => setQuantity(item.productId, item.quantity + 1)}
                className="w-7 h-7 border border-line rounded-sm hover:border-ink"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(item.productId)}
              className="text-red-600 text-[12.5px] underline ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mb-8">
        <span className="font-sans font-semibold text-[15px]">Subtotal</span>
        <span className="font-sans font-bold text-[18px] text-orange-deep">{formatPrice(subtotal)}</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/checkout"
          className="w-full sm:w-auto text-center bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-8 py-4 hover:bg-orange hover:text-ink transition-colors"
        >
          Proceed to Checkout
        </Link>
        <Link href="/shop" className="text-[13px] underline text-clay">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
