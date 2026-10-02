type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light"
}: SectionHeadingProps) {
  const eyebrowClass = tone === "dark" ? "text-cyan font-bold" : "text-cyan font-bold";
  const descriptionClass = tone === "dark" ? "text-slate-300" : "text-muted";

  return (
    <div className="mb-12 max-w-3xl">
      {eyebrow ? (
        <p className={`mb-3 text-sm font-bold uppercase tracking-[0.15em] ${eyebrowClass}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-4xl md:text-5xl font-bold tracking-tight leading-tight ${
        tone === "dark" 
          ? "bg-gradient-to-r from-cyan via-purple to-cyan/60 bg-clip-text text-transparent" 
          : "text-darkText"
      }`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
