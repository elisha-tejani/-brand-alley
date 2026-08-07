import Image from "next/image";

const categories = [
  { title: "OUTERWEAR", tagline: "Coats & jackets for layered days.", img: "/images/category-outerwear.jpg" },
  { title: "DRESSES", tagline: "Fluid silhouettes, forever in style.", img: "/images/category-dresses.jpg" },
  { title: "ESSENTIALS", tagline: "Light, everyday & made for you.", img: "/images/category-essentials.jpg" },
];

export default function CategoryStrip() {
  return (
    <section className="bg-ink">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-3">
        {categories.map((c) => (
          <a
            key={c.title}
            href="#"
            className="group flex items-center gap-5 py-10 px-2 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0"
          >
            <div className="relative w-20 h-24 rounded-sm overflow-hidden shrink-0 bg-white/5">
              <Image src={c.img} alt={c.title} fill sizes="80px" className="object-cover" />
            </div>
            <div>
              <h3 className="text-paper font-medium text-[15px] tracking-wide">{c.title}</h3>
              <p className="text-clay text-[13px] mt-1">{c.tagline}</p>
              <span className="inline-block mt-3 font-mono text-[11px] tracking-wider text-orange group-hover:underline">
                SHOP NOW →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
