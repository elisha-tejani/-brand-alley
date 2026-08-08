import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-stone overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative flex flex-col md:min-h-[560px] md:flex-row md:items-center py-10 md:py-0">

          {/* top-right collection tag */}
          <div className="hidden md:block absolute top-0 right-0 font-sans font-medium text-[11px] tracking-wider text-clay text-right leading-relaxed">
            NEW<br />COLLECTION<br />2026
          </div>

          {/* left text block */}
          <div className="relative z-10 max-w-[420px] md:py-16 order-2 md:order-1">
            <span className="font-sans font-medium text-[11px] tracking-[0.18em] uppercase text-clay">
              Confidence starts with style.
            </span>

            <h1 className="font-sans font-extrabold leading-[0.9] mt-4 md:mt-6">
              <span className="block text-[30px] md:text-[40px] tracking-wide">SHOP</span>
              <span className="block text-[46px] sm:text-[58px] md:text-[84px] -ml-0.5">
                BRAND<br />ALLEY
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 sm:gap-6 mt-6 md:mt-8">
              <a
                href="/shop"
                className="inline-block bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 hover:bg-orange hover:text-ink transition-colors"
              >
                Shop Now
              </a>
              <a href="/new-arrivals" className="font-sans font-semibold text-[12px] tracking-wider uppercase border-b border-ink pb-0.5">
                Explore New In
              </a>
            </div>
          </div>

          {/* hero photo */}
          <div className="relative w-full h-[280px] sm:h-[380px] md:h-auto md:absolute md:right-0 md:top-8 md:bottom-8 md:w-[62%] rounded-sm overflow-hidden bg-[#e4dbca] order-1 md:order-2 mb-6 md:mb-0">
            <Image
              src="/images/hero.jpg"
              alt="Brand Alley — new collection"
              fill
              priority
              sizes="(max-width: 860px) 100vw, 62vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
