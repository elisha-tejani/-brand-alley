import PageHeader from "@/components/PageHeader";
import GarmentIcon from "@/components/GarmentIcon";
import Backdrop, { BackdropTone } from "@/components/Backdrop";

const collections: { title: string; tagline: string; href: string; icon: number; tone: BackdropTone }[] = [
  { title: "Outerwear", tagline: "Coats & jackets for layered days.", href: "/shop", icon: 0, tone: "ink" },
  { title: "Dresses", tagline: "Fluid silhouettes, forever in style.", href: "/dresses", icon: 1, tone: "blush" },
  { title: "Essentials", tagline: "Light, everyday & made for you.", href: "/shop", icon: 2, tone: "sage" },
  { title: "New Arrivals", tagline: "Fresh off the rail, restocked weekly.", href: "/new-arrivals", icon: 4, tone: "orange" },
];

export const metadata = { title: "Collections — Brand Alley" };

export default function CollectionsPage() {
  return (
    <>
      <PageHeader eyebrow="Shop by" title="Collections" description="Find your way in." />
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {collections.map((c) => (
            <a key={c.title} href={c.href} className="group flex items-center gap-5 p-6 border border-line rounded-sm hover:border-ink transition-colors">
              <Backdrop tone={c.tone} className="w-24 h-28 rounded-sm shrink-0">
                <div className="w-full h-full flex items-center justify-center">
                  <GarmentIcon index={c.icon} tone="paper" className="w-3/4 h-3/4" />
                </div>
              </Backdrop>
              <div>
                <h3 className="font-sans font-extrabold text-[18px]">{c.title}</h3>
                <p className="text-clay text-[13px] mt-1">{c.tagline}</p>
                <span className="inline-block mt-3 font-sans font-semibold text-[11px] tracking-wider text-orange-deep group-hover:underline">
                  SHOP NOW →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
