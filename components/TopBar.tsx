export default function TopBar() {
  const message = "Free Shipping on Orders Over Rs. 5,000";

  return (
    <div className="bg-ink text-paper overflow-hidden">
      <div className="py-3.5">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-sans font-extrabold text-[15px] sm:text-[17px] tracking-wide uppercase whitespace-nowrap px-8"
            >
              {message}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
