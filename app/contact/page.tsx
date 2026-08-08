"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader eyebrow="Get in touch" title="Contact Us" description="Questions about an order, sizing, or anything else — we read every message." />
      <div className="max-w-[640px] mx-auto px-6 py-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-5"
        >
          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">Name</label>
            <input required type="text" className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm" />
          </div>
          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">Email</label>
            <input required type="email" className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm" />
          </div>
          <div>
            <label className="block font-sans font-medium text-[12px] tracking-wide uppercase text-clay mb-2">Message</label>
            <textarea required rows={5} className="w-full border border-line px-4 py-3 text-[14px] outline-none focus:border-ink rounded-sm resize-none" />
          </div>
          <button
            type="submit"
            className="bg-ink text-paper font-sans font-semibold text-[12px] tracking-wider uppercase px-7 py-3.5 w-fit hover:bg-orange hover:text-ink transition-colors"
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>
        </form>

        <div className="mt-14 pt-10 border-t border-line grid grid-cols-1 sm:grid-cols-2 gap-8 text-[13.5px]">
          <div>
            <h5 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay mb-2 uppercase">Email</h5>
            <p>hello@brandalley.com</p>
          </div>
          <div>
            <h5 className="font-sans font-semibold text-[11px] tracking-[0.1em] text-clay mb-2 uppercase">Based in</h5>
            <p>Karachi, Pakistan</p>
          </div>
        </div>
      </div>
    </>
  );
}
