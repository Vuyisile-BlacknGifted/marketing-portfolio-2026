type ProjectCardProps = {
  title: string;
  description: string;
  impact: string;
  links: Array<{ label: string; url: string }>;
};

export function ProjectCard({ title, description, impact, links }: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl bg-gradient-to-br from-white/95 to-white/90 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:p-10 overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 via-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold tracking-tight text-darkText bg-gradient-to-r from-darkText to-darkText/70 bg-clip-text text-transparent">{title}</h3>
        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-muted/90 md:text-base">
          {description}
        </p>
        <div className="mt-6 rounded-xl border border-cyan/30 bg-gradient-to-br from-cyan/5 to-purple/5 p-5 backdrop-blur-sm group-hover:border-cyan/50 group-hover:bg-cyan/10 transition-all duration-300">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-cyan">Impact</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-darkText md:text-base">
            {impact}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan/40 bg-gradient-to-r from-cyan/10 to-purple/10 px-4 py-2 text-xs font-semibold text-cyan transition-all duration-300 hover:border-cyan/80 hover:bg-cyan/20 hover:shadow-glow"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

type LinkGroupProps = {
  title: string;
  links: Array<{ label: string; url: string }>;
};

export function LinkGroup({ title, links }: LinkGroupProps) {
  return (
    <article className="group relative rounded-2xl bg-gradient-to-br from-white/95 to-white/90 p-7 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 via-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <h3 className="text-lg font-bold text-darkText">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan/40 bg-gradient-to-r from-cyan/10 to-purple/10 px-3 py-2 text-sm font-medium text-cyan transition-all duration-300 hover:border-cyan/80 hover:bg-cyan/20 hover:shadow-glow hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

type MediaPlaceholderCardProps = {
  category: string;
  title: string;
  helper: string;
  previewLabel: string;
};

export function MediaPlaceholderCard({
  category,
  title,
  helper,
  previewLabel
}: MediaPlaceholderCardProps) {
  return (
    <article className="group relative rounded-2xl bg-gradient-to-br from-white/95 to-white/90 p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/20 via-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-cyan">{category}</p>
        <h4 className="mt-3 text-base font-bold text-darkText">{title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted/80">{helper}</p>
        <div className="mt-4 rounded-xl border-2 border-dashed border-cyan/30 bg-gradient-to-br from-cyan/5 to-purple/5 px-3 py-6 text-center text-sm text-muted transition-all duration-300 group-hover:border-cyan/60 group-hover:bg-cyan/10 backdrop-blur-sm">
          {previewLabel}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-r from-navy/40 to-navy/20 opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
          <span className="rounded-full border border-cyan/50 bg-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-cyan backdrop-blur-sm">
            Click To Preview
          </span>
        </div>
      </div>
    </article>
  );
}
