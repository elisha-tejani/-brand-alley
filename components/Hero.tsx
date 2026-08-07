import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-stone overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative min-h-[560px] flex items-center">
          {/* hero photo, right-aligned like the reference */}
          <div className="absolute right-0 top-8 bottom-8 w-[62%] rounded-sm overflow-hidden bg-[#e4dbca]">
            <Image
              src="/images/hero.jpg"
              alt="Brand Alley — new collection"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 62vw"
              className="object-cover"
            />
          </div>

          {/* top-right collection tag */}
          <div className="absolute top-0 right-0 font-mono text-[11px] tracking-wider text-clay text-right leading-relaxed">
            NEW<br />COLLECTION<br />2026
          </div>

          {/* left text block */}
          <div className="relative z-10 max-w-[420px] py-16">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-clay">
              Confidence<br />starts<br />with style.
            </span>

            <h1 className="font-serif font-medium leading-[0.85] mt-6">
              <span className="block text-[40px] tracking-wide">SHOP</span>
              <span className="block text-[64px] md:text-[84px] -ml-1">BRAND<br />ALLEY</span>
            </h1>

            <div className="flex items-center gap-6 mt-8">
              <a
                href="#shop"
                className="inline-block bg-ink text-paper font-mono text-[12px] tracking-wider uppercase px-7 py-3.5 hover:bg-orange hover:text-ink transition-colors"
              >
                Shop Now
              </a>
              <a href="#new" className="font-mono text-[12px] tracking-wider uppercase border-b border-ink pb-0.5">
                Explore New In
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
