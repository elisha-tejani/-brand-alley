import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Our Story — Brand Alley" };

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title="Our Story" />
      <div className="max-w-[720px] mx-auto px-6 py-16 space-y-6 text-[15px] leading-relaxed text-ink/90">
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
    </>
  );
}
