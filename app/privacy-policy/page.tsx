import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Privacy Policy — Brand Alley" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <div className="max-w-[720px] mx-auto px-6 py-16 space-y-8 text-[14.5px] leading-relaxed">
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">What we collect</h3>
          <p className="text-clay">
            When you place an order or sign up for our newsletter, we collect your name, email, delivery
            address, and order details. We never sell this information to third parties.
          </p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">How we use it</h3>
          <p className="text-clay">
            Your information is used to process orders, provide customer support, and — if you&apos;ve
            opted in — send occasional updates about new arrivals and offers. You can unsubscribe at any time.
          </p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">Contact</h3>
          <p className="text-clay">Questions about your data? Reach us at hello@brandalley.com.</p>
        </div>
        <p className="text-clay text-[12.5px] pt-4 border-t border-line">
          This is placeholder policy text — replace it with language reviewed by a lawyer before launch.
        </p>
      </div>
    </>
  );
}
