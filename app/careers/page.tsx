import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Careers — Brand Alley" };

export default function CareersPage() {
  return (
    <>
      <PageHeader eyebrow="Join us" title="Careers" description="We're a small team, and we're not currently hiring — but we're always happy to hear from people who care about considered clothing." />
      <div className="max-w-[720px] mx-auto px-6 py-16">
        <p className="text-clay text-[14.5px] leading-relaxed">
          No open roles right now. If that changes, we&apos;ll post here first — check back,
          or reach out at <a href="mailto:hello@brandalley.com" className="text-ink underline">hello@brandalley.com</a> to introduce yourself.
        </p>
      </div>
    </>
  );
}
