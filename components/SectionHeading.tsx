export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClasses} mb-10 sm:mb-14`}>
      {eyebrow && (
        <span className="text-xs sm:text-sm tracking-[0.3em] text-purple-500 font-medium uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif-display text-3xl sm:text-4xl md:text-5xl text-purple-800">
        {title}
      </h2>
      <span className="mt-4 flex items-center gap-3 text-purple-300">
        <span className="h-px w-10 bg-purple-200" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M12 21s-6.7-4.35-9.3-8.1C1.1 10.6 1 8.1 2.7 6.3 4.3 4.6 6.9 4.6 8.5 6.3L12 10l3.5-3.7c1.6-1.7 4.2-1.7 5.8 0 1.7 1.8 1.6 4.3 0 6.6C18.7 16.65 12 21 12 21Z" />
        </svg>
        <span className="h-px w-10 bg-purple-200" />
      </span>
      {description && (
        <p className="mt-5 max-w-xl text-ink/60 text-sm sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
