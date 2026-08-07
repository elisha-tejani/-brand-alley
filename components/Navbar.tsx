import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-line">
      <nav className="max-w-[1280px] mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-7 text-[13px] tracking-wide">
          <a href="#women" className="hover:text-orange-deep">WOMEN</a>
          <a href="#dresses" className="hover:text-orange-deep">DRESSES</a>
          <a href="#new" className="hover:text-orange-deep">NEW ARRIVALS</a>
          <a href="#collections" className="hover:text-orange-deep">COLLECTIONS</a>
        </div>

        <a href="#" className="flex items-center justify-center gap-2.5">
          <Image src="/logo.png" alt="Brand Alley" width={34} height={34} className="rounded-[7px]" />
          <span className="font-serif font-semibold text-[19px] tracking-wide">BRAND ALLEY</span>
        </a>

        <div className="flex items-center justify-end gap-5 text-[13px]">
          <button className="hidden sm:inline hover:text-orange-deep">SEARCH</button>
          <button className="hidden sm:inline hover:text-orange-deep">LOGIN</button>
          <button className="hidden sm:inline hover:text-orange-deep">WISHLIST</button>
          <button className="font-mono text-[12px] border border-line rounded-full px-3 py-1.5 hover:border-ink">
            CART (0)
          </button>
        </div>
      </nav>
    </header>
  );
}
