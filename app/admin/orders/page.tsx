import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";

export const dynamic = "force-dynamic";

const STATUS_STYLES: Record<string, string> = {
  PENDING: "bg-stone text-ink",
  CONFIRMED: "bg-blue-100 text-blue-800",
  SHIPPED: "bg-amber-100 text-amber-800",
  DELIVERED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-800",
};

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sans font-extrabold text-[24px]">Orders</h1>
          <p className="text-clay text-[13px] mt-1">{orders.length} total</p>
        </div>
        <Link href="/admin" className="text-[13px] underline text-clay">
          ← Products
        </Link>
      </div>

      {orders.length === 0 ? (
        <p className="text-clay text-[14px]">No orders yet.</p>
      ) : (
        <div className="border border-line rounded-sm overflow-hidden overflow-x-auto">
          <table className="w-full text-[13.5px]">
            <thead className="bg-stone text-left">
              <tr>
                <th className="px-4 py-3 font-sans font-semibold whitespace-nowrap">Order</th>
                <th className="px-4 py-3 font-sans font-semibold whitespace-nowrap">Customer</th>
                <th className="px-4 py-3 font-sans font-semibold whitespace-nowrap">Items</th>
                <th className="px-4 py-3 font-sans font-semibold whitespace-nowrap">Total</th>
                <th className="px-4 py-3 font-sans font-semibold whitespace-nowrap">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-line">
                  <td className="px-4 py-3 font-mono text-[12px]">{o.id.slice(-8).toUpperCase()}</td>
                  <td className="px-4 py-3">
                    {o.customerName}
                    <div className="text-clay text-[11.5px]">{o.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-clay">{o.items.length}</td>
                  <td className="px-4 py-3">{formatPrice(o.subtotal)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${STATUS_STYLES[o.status]}`}>
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link href={`/admin/orders/${o.id}`} className="underline">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
