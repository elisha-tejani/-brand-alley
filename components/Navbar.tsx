"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "WOMEN", href: "/women" },
  { label: "DRESSES", href: "/dresses" },
  { label: "NEW ARRIVALS", href: "/new-arrivals" },
  { label: "COLLECTIONS", href: "/collections" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-line">
      <nav className="max-w-[1280px] mx-auto px-6 py-4 grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-7 text-[13px] font-sans tracking-wide">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-orange-deep">
              {l.label}
            </Link>
          ))}
        </div>

        {/* mobile menu toggle */}
        <button
          className="md:hidden flex items-center justify-self-start"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <Link href="/" className="flex items-center justify-center gap-2.5">
          <Image src="/logo.png" alt="Brand Alley" width={34} height={34} className="rounded-[7px]" />
          <span className="font-sans font-extrabold text-[17px] sm:text-[19px] tracking-wide">BRAND ALLEY</span>
        </Link>

        <div className="flex items-center justify-end gap-4 sm:gap-5 text-[13px] font-sans">
          <button className="hidden sm:inline hover:text-orange-deep">SEARCH</button>
          <button className="hidden sm:inline hover:text-orange-deep">LOGIN</button>
          <button className="hidden sm:inline hover:text-orange-deep">WISHLIST</button>
          <button className="font-medium text-[11px] sm:text-[12px] border border-line rounded-full px-2.5 sm:px-3 py-1.5 hover:border-ink">
            CART (0)
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-4 flex flex-col gap-4 text-[13px] font-sans">
          {links.map((l) => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)} className="hover:text-orange-deep">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-5 pt-2 border-t border-line">
            <button className="hover:text-orange-deep">SEARCH</button>
            <button className="hover:text-orange-deep">LOGIN</button>
            <button className="hover:text-orange-deep">WISHLIST</button>
          </div>
        </div>
      )}
    </header>
  );
}
