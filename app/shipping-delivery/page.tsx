import PageHeader from "@/components/PageHeader";

export const metadata = { title: "Shipping & Delivery — Brand Alley" };

export default function ShippingPage() {
  return (
    <>
      <PageHeader eyebrow="Support" title="Shipping & Delivery" />
      <div className="max-w-[720px] mx-auto px-6 py-16 space-y-8 text-[14.5px] leading-relaxed">
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">Delivery times</h3>
          <p className="text-clay">Orders are delivered within 2–4 business days across Pakistan. Major cities typically see 1–2 day delivery.</p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">Shipping cost</h3>
          <p className="text-clay">Free shipping on orders over Rs. 5,000. A flat Rs. 250 shipping fee applies below that.</p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">Payment on delivery</h3>
          <p className="text-clay">Cash on Delivery is available nationwide, alongside card payment at checkout.</p>
        </div>
        <div>
          <h3 className="font-sans font-semibold text-[15px] mb-2">Tracking</h3>
          <p className="text-clay">You&apos;ll receive a tracking link by email as soon as your order ships.</p>
        </div>
      </div>
    </>
  );
}
