export default function TopBar() {
  return (
    <div className="bg-ink text-paper font-mono text-[11px] tracking-wider">
      <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex items-center justify-between">
        <span>FREE SHIPPING ON ORDERS OVER RS. 5,000</span>
        <div className="hidden sm:flex items-center gap-5">
          <a href="#" className="hover:text-orange">DOWNLOAD APP</a>
          <span className="text-clay">|</span>
          <a href="#" className="hover:text-orange">TRACK ORDER</a>
          <span className="text-clay">|</span>
          <a href="#" className="hover:text-orange">HELP</a>
        </div>
      </div>
    </div>
  );
}
