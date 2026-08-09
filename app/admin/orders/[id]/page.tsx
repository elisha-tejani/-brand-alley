import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";
import OrderStatusSelect from "@/components/admin/OrderStatusSelect";

export const dynamic = "force-dynamic";

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const order = await prisma.order.findUnique({ where: { id }, include: { items: true } });

  if (!order) notFound();

  return (
    <div className="max-w-[800px] mx-auto px-6 py-12">
      <Link href="/admin/orders" className="text-[13px] underline text-clay">
        ← All Orders
      </Link>

      <div className="flex items-center justify-between mt-4 mb-8">
        <h1 className="font-sans font-extrabold text-[22px]">Order #{order.id.slice(-8).toUpperCase()}</h1>
        <OrderStatusSelect orderId={order.id} currentStatus={order.status} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8 text-[13.5px]">
        <div>
          <h3 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay uppercase mb-2">Customer</h3>
          <p>{order.customerName}</p>
          <p className="text-clay">{order.email}</p>
          <p className="text-clay">{order.phone}</p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay uppercase mb-2">Delivery</h3>
          <p>{order.address}</p>
          <p className="text-clay">{order.city}</p>
          {order.notes && <p className="text-clay italic mt-1">&ldquo;{order.notes}&rdquo;</p>}
        </div>
      </div>

      <div className="border border-line rounded-sm p-5 mb-6">
        <h3 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay uppercase mb-4">Items</h3>
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

      <div className="flex gap-6 text-[13px] text-clay">
        <span>Payment: {order.paymentMethod}</span>
        <span>Payment status: {order.paymentStatus}</span>
        <span>Placed: {order.createdAt.toLocaleString()}</span>
      </div>
    </div>
  );
}
