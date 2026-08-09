import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { CATEGORY_NAMES, slugify, subcategoriesFor } from "@/lib/categories";

export const metadata = { title: "Collections — Brand Alley" };

export default function CollectionsPage() {
  return (
    <>
      <PageHeader eyebrow="Shop by" title="Collections" description="Find your way in." />
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORY_NAMES.map((name) => {
            const subs = subcategoriesFor(name);
            return (
              <Link
                key={name}
                href={`/shop/${slugify(name)}`}
                className="group p-6 border border-line rounded-sm hover:border-ink transition-colors"
              >
                <h3 className="font-sans font-extrabold text-[17px]">{name}</h3>
                {subs.length > 0 && (
                  <p className="text-clay text-[12.5px] mt-1.5 leading-relaxed">{subs.join(" · ")}</p>
                )}
                <span className="inline-block mt-3 font-sans font-semibold text-[11px] tracking-wider text-orange-deep group-hover:underline">
                  SHOP NOW →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
