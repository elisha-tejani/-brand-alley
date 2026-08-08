import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Sustainability — Brand Alley" };

export default function SustainabilityPage() {
  return (
    <>
      <PageHeader eyebrow="Our approach" title="Sustainability" />
      <div className="max-w-[720px] mx-auto px-6 py-16 space-y-6 text-[14.5px] leading-relaxed">
        <p className="text-clay">
          We produce in small batches rather than mass quantities — it means slower
          restocks, but far less overproduction and unsold stock ending up as waste.
        </p>
        <p className="text-clay">
          We&apos;re early in this journey and don&apos;t claim to have it all figured
          out. As we grow, this page will get more specific about materials, factories,
          and packaging — for now, small batches are where we&apos;ve started.
        </p>
      </div>
    </>
  );
}
