import Image from "next/image";

export default function SeasonBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[440px]">
      <div className="bg-stone flex flex-col justify-center px-10 md:px-16 py-16">
        <span className="font-sans font-medium text-[11px] tracking-[0.18em] uppercase text-clay">New Season</span>
        <h2 className="font-sans font-extrabold text-[38px] sm:text-[46px] md:text-[52px] leading-[0.95] mt-3">
          NEW<br />VIBES
        </h2>
        <p className="text-clay text-[14.5px] mt-5 max-w-[280px] leading-relaxed">
          Discover everything new and now.
        </p>
        <a
          href="#new"
          className="inline-block bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 mt-7 w-fit hover:bg-orange hover:text-ink transition-colors"
        >
          Explore Collection
        </a>
      </div>
      <div className="relative h-[280px] md:h-auto bg-[#e4dbca]">
        <Image
          src="/images/season-banner.jpg"
          alt="Brand Alley — new season"
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
