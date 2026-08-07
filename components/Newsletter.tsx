"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-ink text-paper">
      <div className="max-w-[1280px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7 text-orange shrink-0">
            <rect x="3" y="5" width="18" height="14" rx="1.5" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          <div>
            <h3 className="font-medium text-[15px] tracking-wide">JOIN OUR COMMUNITY</h3>
            <p className="text-clay text-[12.5px]">Subscribe for exclusive offers, new arrivals and style updates.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex w-full md:w-auto"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 md:w-64 bg-transparent border border-white/25 px-4 py-3 text-[13px] placeholder:text-clay outline-none focus:border-orange"
          />
          <button
            type="submit"
            className="bg-orange text-ink font-sans font-semibold text-[12px] tracking-wider uppercase px-6 hover:bg-paper transition-colors"
          >
            {submitted ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
