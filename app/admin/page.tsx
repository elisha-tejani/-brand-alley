import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { formatPrice } from "@/lib/format";
import LogoutButton from "@/components/admin/LogoutButton";
import DeleteProductButton from "@/components/admin/DeleteProductButton";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sans font-extrabold text-[24px]">Products</h1>
          <p className="text-clay text-[13px] mt-1">{products.length} total</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/orders"
            className="border border-line font-sans font-semibold text-[12px] tracking-wider uppercase px-5 py-2.5 hover:border-ink transition-colors"
          >
            Orders
          </Link>
          <Link
            href="/admin/products/new"
            className="bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-5 py-2.5 hover:bg-orange hover:text-ink transition-colors"
          >
            + Add Product
          </Link>
          <LogoutButton />
        </div>
      </div>

      {products.length === 0 ? (
        <p className="text-clay text-[14px]">
          No products yet.{" "}
          <Link href="/admin/products/new" className="underline">
            Add your first one
          </Link>
          .
        </p>
      ) : (
        <div className="border border-line rounded-sm overflow-hidden">
          <table className="w-full text-[13.5px]">
            <thead className="bg-stone text-left">
              <tr>
                <th className="px-4 py-3 font-sans font-semibold">Name</th>
                <th className="px-4 py-3 font-sans font-semibold">Category</th>
                <th className="px-4 py-3 font-sans font-semibold">Price</th>
                <th className="px-4 py-3 font-sans font-semibold">Stock</th>
                <th className="px-4 py-3 font-sans font-semibold">Flags</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <td className="px-4 py-3 font-medium">{p.name}</td>
                  <td className="px-4 py-3 text-clay">{p.category}</td>
                  <td className="px-4 py-3">{formatPrice(p.price)}</td>
                  <td className="px-4 py-3">{p.stock}</td>
                  <td className="px-4 py-3 text-clay text-[11.5px]">
                    {[p.featured && "Featured", p.isNew && "New"].filter(Boolean).join(" · ") || "—"}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <Link href={`/admin/products/${p.id}/edit`} className="underline mr-4">
                      Edit
                    </Link>
                    <DeleteProductButton id={p.id} name={p.name} />
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
