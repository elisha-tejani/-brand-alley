import Image from "next/image";

const columns = [
  {
    title: "SHOP",
    links: ["All Products", "Dresses", "New Arrivals", "Collections"],
  },
  {
    title: "CUSTOMER CARE",
    links: ["Contact Us", "Shipping & Delivery", "FAQ"],
  },
  {
    title: "ABOUT US",
    links: ["Our Story", "Careers", "Sustainability", "Privacy Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10">
        <div>
          <a href="#" className="flex items-center gap-2.5 mb-3">
            <Image src="/logo.png" alt="Brand Alley" width={30} height={30} className="rounded-[6px]" />
            <span className="font-sans font-extrabold text-[17px]">BRAND ALLEY</span>
          </a>
          <p className="text-clay text-[13px] max-w-[240px] leading-relaxed">
            Considered clothing, made in small batches. Karachi, Pakistan.
          </p>
          <div className="flex gap-4 mt-5">
            {["Instagram", "Facebook", "Pinterest", "TikTok"].map((s) => (
              <a key={s} href="#" aria-label={s} className="text-[12px] text-clay hover:text-orange-deep">
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h5 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay mb-4">{col.title}</h5>
            {col.links.map((link) => (
              <a key={link} href="#" className="block text-[13.5px] mb-2.5 hover:text-orange-deep">
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="max-w-[1280px] mx-auto px-6 py-5 text-center text-[11.5px] text-clay">
          © 2026 Brand Alley. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
