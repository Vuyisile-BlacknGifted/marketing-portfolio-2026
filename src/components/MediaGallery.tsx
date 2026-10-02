"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type MediaItem = {
  category: string;
  title: string;
  helper: string;
  previewLabel: string;
  image: StaticImageData;
};

type MediaGalleryProps = {
  items: MediaItem[];
};

export default function MediaGallery({ items }: MediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [items.length]);

  const activeItem = items[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-cyan/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.26)] md:p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">Featured media</p>
          <h3 className="mt-2 text-2xl font-bold text-lightText">{activeItem.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={showPrevious}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-lightText transition hover:border-cyan/40 hover:bg-cyan/10"
            aria-label="Previous media item"
          >
            ←
          </button>
          <button
            type="button"
            onClick={showNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-lightText transition hover:border-cyan/40 hover:bg-cyan/10"
            aria-label="Next media item"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-slate-950 p-3 md:p-4">
        <div className="relative h-[420px] overflow-hidden rounded-[1.1rem]">
          <Image
            src={activeItem.image}
            alt={activeItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>

        <button
          type="button"
          onClick={showPrevious}
          className="absolute left-6 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-xl font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-cyan/50 hover:bg-cyan/80 hover:text-slate-950 hover:shadow-cyan/30"
          aria-label="Previous media item"
        >
          ←
        </button>
        <button
          type="button"
          onClick={showNext}
          className="absolute right-6 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-xl font-medium text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:border-cyan/50 hover:bg-cyan/80 hover:text-slate-950 hover:shadow-cyan/30"
          aria-label="Next media item"
        >
          →
        </button>

        <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-slate-950/75 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan">{activeItem.category}</p>
            <span className="text-xs font-medium text-slate-300">
              {activeIndex + 1} / {items.length}
            </span>
          </div>
          <p className="mt-2 text-base leading-relaxed text-slate-100 md:text-lg">{activeItem.helper}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to ${item.title}`}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-10 bg-gradient-to-r from-cyan to-purple" : "w-2.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
