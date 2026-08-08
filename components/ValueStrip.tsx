const values = [
  {
    title: "Fast Delivery",
    sub: "Quick & safe delivery",
    icon: (
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM6 20a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4z" />
    ),
  },
  
  {
    title: "Quality Assured",
    sub: "Best fashion, best quality",
    icon: <path d="M4 4h16v6a8 8 0 01-8 8 8 8 0 01-8-8V4zM12 18v2M8 22h8" />,
  },
  {
    title: "Secure Payment",
    sub: "100% secure checkout",
    icon: <path d="M4 10h16v10H4zM8 10V7a4 4 0 018 0v3" />,
  },
];

export default function ValueStrip() {
  return (
    <section className="border-y border-line bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 py-9 grid grid-cols-2 sm:grid-cols-4 gap-8">
        {values.map((v) => (
          <div key={v.title} className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-7 h-7 text-orange-deep shrink-0">
              {v.icon}
            </svg>
            <div>
              <h4 className="text-[13px] font-semibold">{v.title}</h4>
              <p className="text-[11.5px] text-clay">{v.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
