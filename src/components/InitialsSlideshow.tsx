"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    initials: "VP",
    title: "Vision-led strategy",
    detail: "Translating brand goals into clear message systems and measurable campaigns."
  },
  {
    initials: "CM",
    title: "Campaign momentum",
    detail: "Building content and performance systems that keep traction growing."
  },
  {
    initials: "ST",
    title: "Storytelling",
    detail: "Turning ideas into content that connects, converts, and compounds reach."
  },
  {
    initials: "AN",
    title: "Analytics",
    detail: "Using performance insights to sharpen strategy and improve engagement."
  }
];

export default function InitialsSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const active = slides[activeIndex];

  return (
    <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan to-purple text-lg font-black text-white shadow-glow">
          {active.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">CV snapshot</p>
          <p className="mt-1 text-sm font-semibold text-white">{active.title}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-300">{active.detail}</p>
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.initials}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${slide.title}`}
            className={`h-2 flex-1 rounded-full transition-all ${
              index === activeIndex ? "bg-gradient-to-r from-cyan to-purple" : "bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
