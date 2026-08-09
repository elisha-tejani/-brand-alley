import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function OrderConfirmationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({ where: { id }, include: { items: true } });

  if (!order) notFound();

  return (
    <div className="max-w-[600px] mx-auto px-6 py-16 md:py-20 text-center">
      <div className="w-14 h-14 rounded-full bg-stone flex items-center justify-center mx-auto mb-6 text-[24px]">
        ✓
      </div>
      <h1 className="font-sans font-extrabold text-[26px] mb-2">Order Confirmed</h1>
      <p className="text-clay text-[14px] mb-8">
        Thanks, {order.customerName} — we&apos;ll call {order.phone} to confirm delivery details.
      </p>

      <div className="border border-line rounded-sm p-6 text-left mb-8">
        <div className="flex justify-between text-[12.5px] text-clay mb-4">
          <span>Order #{order.id.slice(-8).toUpperCase()}</span>
          <span>Cash on Delivery</span>
        </div>
        <div className="flex flex-col gap-2 mb-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-[13.5px]">
              <span>
                {item.productName} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between border-t border-line pt-4 font-sans font-bold text-[15px]">
          <span>Total</span>
          <span className="text-orange-deep">{formatPrice(order.subtotal)}</span>
        </div>
      </div>

      <Link
        href="/shop"
        className="inline-block bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 hover:bg-orange hover:text-ink transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
