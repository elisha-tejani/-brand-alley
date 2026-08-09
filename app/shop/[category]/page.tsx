import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ShopGrid from "@/components/ShopGrid";
import { prisma } from "@/lib/prisma";
import { categoryFromSlug, subcategoriesFor } from "@/lib/categories";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = categoryFromSlug(slug);
  return { title: category ? `${category} — Brand Alley` : "Shop — Brand Alley" };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ sub?: string }>;
}) {
  const { category: slug } = await params;
  const { sub } = await searchParams;

  const category = categoryFromSlug(slug);
  if (!category) notFound();

  const subcategories = subcategoriesFor(category);
  const activeSub = sub && subcategories.includes(sub) ? sub : undefined;

  const products = await prisma.product.findMany({
    where: {
      category,
      ...(activeSub && { subcategory: activeSub }),
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <PageHeader eyebrow="Shop" title={category} />

      {subcategories.length > 0 && (
        <div className="max-w-[1280px] mx-auto px-6 pt-10 flex flex-wrap gap-2">
          <Link
            href={`/shop/${slug}`}
            className={`px-4 py-2 rounded-full text-[12.5px] border transition-colors ${
              !activeSub ? "bg-ink text-paper border-ink" : "border-line hover:border-ink"
            }`}
          >
            All {category}
          </Link>
          {subcategories.map((s) => (
            <Link
              key={s}
              href={`/shop/${slug}?sub=${encodeURIComponent(s)}`}
              className={`px-4 py-2 rounded-full text-[12.5px] border transition-colors ${
                activeSub === s ? "bg-ink text-paper border-ink" : "border-line hover:border-ink"
              }`}
            >
              {s}
            </Link>
          ))}
        </div>
      )}

      <ShopGrid products={products} emptyLabel={`No products in ${category}${activeSub ? ` / ${activeSub}` : ""} yet — check back soon.`} />
    </>
  );
}
