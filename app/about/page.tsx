import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Our Story — Brand Alley" };

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Our Story" />

      <div className="max-w-[720px] mx-auto px-6 pt-16 space-y-6 text-[15px] leading-relaxed text-ink/90">
        <p>
          Brand Alley started with a simple frustration: most clothing is either
          disposable and cheaply made, or priced like it should last forever
          without actually lasting. We wanted something in between — considered
          pieces, made in small batches, at a price that made sense.
        </p>
        <p>
          Every piece we release is produced in limited runs rather than mass
          quantities. That means slower restocks, but it also means less waste,
          tighter quality control, and a collection that stays considered rather
          than sprawling.
        </p>
        <p>
          We&apos;re based in Karachi, and we&apos;re just getting started.
        </p>
      </div>

      {/* Our Philosophy */}
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div className="relative aspect-[2/3] rounded-sm overflow-hidden bg-stone order-1">
            <Image
              src="/images/about-founders.png"
              alt="Brand Alley founders"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="order-2">
            <span className="font-sans font-medium text-[11px] tracking-[0.18em] uppercase text-clay">
              Our Philosophy
            </span>
            <h2 className="font-sans font-extrabold text-[28px] md:text-[34px] leading-[1.05] mt-3 mb-5">
              A love story, woven into every stitch.
            </h2>
            <div className="space-y-5 text-[14.5px] leading-relaxed text-ink/90">
              <p>At BrandAlley, each piece begins with a journey.</p>
              <p>
                Founded by a husband-and-wife duo with a shared passion for
                timeless style and meaningful design, BrandAlley is more than a
                brand — it&apos;s a love story woven into every stitch and stone.
              </p>
              <p>
                Together, they travel the world in search of the finest
                materials — from desert markets to mountain ateliers — carefully
                selecting fabrics, textures, and gemstones that tell a story of
                place, purpose, and craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
