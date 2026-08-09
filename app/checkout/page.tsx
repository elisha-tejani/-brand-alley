"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/format";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clear } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "CARD">("COD");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (items.length === 0) {
    return (
      <div className="max-w-[600px] mx-auto px-6 py-20 text-center">
        <h1 className="font-sans font-extrabold text-[22px] mb-3">Your cart is empty</h1>
        <Link href="/shop" className="underline text-[13.5px]">
          Go shopping
        </Link>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (paymentMethod === "CARD") {
      setError("Card payment isn't available yet — please select Cash on Delivery.");
      return;
    }

    setSubmitting(true);

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerName,
        email,
        phone,
        address,
        city,
        notes,
        paymentMethod,
        items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })),
      }),
    });

    const data = await res.json();
    setSubmitting(false);

    if (res.ok) {
      clear();
      router.push(`/order-confirmation/${data.id}`);
    } else {
      setError(data.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12 md:py-16">
      <h1 className="font-sans font-extrabold text-[24px] mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
              Full Name
            </label>
            <input
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
              />
            </div>
            <div>
              <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
                Phone
              </label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
              />
            </div>
          </div>

          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
              Address
            </label>
            <input
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
            />
          </div>

          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
              City
            </label>
            <input
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm"
            />
          </div>

          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">
              Delivery Notes (optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm resize-none"
            />
          </div>

          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-3">
              Payment Method
            </label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-3 border border-line rounded-sm px-4 py-3 cursor-pointer has-[:checked]:border-ink">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                <span className="text-[14px]">Cash on Delivery</span>
              </label>
              <label className="flex items-center gap-3 border border-line rounded-sm px-4 py-3 cursor-not-allowed opacity-50">
                <input type="radio" name="payment" disabled />
                <span className="text-[14px]">Card Payment — coming soon</span>
              </label>
            </div>
          </div>

          {error && <p className="text-red-600 text-[13px]">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-8 py-4 hover:bg-orange hover:text-ink transition-colors disabled:opacity-50 w-fit"
          >
            {submitting ? "Placing Order…" : "Place Order"}
          </button>
        </form>

        <div className="border border-line rounded-sm p-6 h-fit">
          <h2 className="font-sans font-semibold text-[15px] mb-4">Order Summary</h2>
          <div className="flex flex-col gap-3 mb-4">
            {items.map((item) => (
              <div key={item.productId} className="flex justify-between text-[13.5px]">
                <span className="text-clay">
                  {item.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between border-t border-line pt-4 font-sans font-bold text-[15px]">
            <span>Total</span>
            <span className="text-orange-deep">{formatPrice(subtotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
