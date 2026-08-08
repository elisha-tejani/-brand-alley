export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-stone">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-20">
        {eyebrow && (
          <span className="font-sans font-medium text-[11px] tracking-[0.18em] uppercase text-clay">
            {eyebrow}
          </span>
        )}
        <h1 className="font-sans font-extrabold text-[34px] md:text-[48px] leading-[0.95] mt-3">{title}</h1>
        {description && (
          <p className="text-clay text-[14.5px] leading-relaxed mt-4 max-w-[520px]">{description}</p>
        )}
      </div>
    </section>
  );
}
