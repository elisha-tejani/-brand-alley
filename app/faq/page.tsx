import PageHeader from "@/components/PageHeader";

export const metadata = { title: "FAQ — Brand Alley" };

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Orders typically arrive within 2–4 business days across Pakistan. You'll get a tracking update once your order ships.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes — Cash on Delivery is available on all orders, alongside card payment at checkout.",
  },
  {
    q: "What sizes do you carry?",
    a: "Most pieces run S–XL. Each product page includes a size guide with exact measurements.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order ships, you'll receive a tracking link by email and can also check status via Track Order in the top bar.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not yet — we currently ship within Pakistan only, with international shipping planned for the future.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader eyebrow="Support" title="FAQ" description="Answers to what people ask us most." />
      <div className="max-w-[720px] mx-auto px-6 py-16 divide-y divide-line">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex items-center justify-between cursor-pointer list-none font-sans font-semibold text-[15px]">
              {f.q}
              <span className="text-clay group-open:rotate-45 transition-transform text-[18px] leading-none">+</span>
            </summary>
            <p className="text-clay text-[14px] leading-relaxed mt-3">{f.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}
