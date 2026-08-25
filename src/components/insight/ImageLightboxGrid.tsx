"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GridItem {
  title: string;
  img?: string;
  description?: string;
  /** When set, the card becomes a real download/open link instead of a lightbox trigger. */
  pdfUrl?: string;
}

export default function ImageLightboxGrid({
  items,
  actionLabel = "View Sheet",
}: {
  items: GridItem[];
  actionLabel?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const media = item.img ? (
            <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
              <Image src={item.img} alt={item.title} fill sizes="25vw" className="object-cover" />
            </div>
          ) : (
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-50 to-amber-50 flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
          );
          const body = (
            <div className="p-3 flex-grow flex flex-col">
              <h3 className="text-xs font-bold text-slate-800 leading-snug line-clamp-3">{item.title}</h3>
              {item.description && (
                <p className="text-[11px] text-slate-500 mt-1.5 line-clamp-2">{item.description}</p>
              )}
              {item.pdfUrl && (
                <span className="mt-auto pt-2 text-[11px] font-semibold text-white bg-[#004d40] group-hover:bg-[#00332a] transition-colors rounded px-2 py-1.5 text-center">
                  {actionLabel}
                </span>
              )}
            </div>
          );
          const cardClass =
            "group text-left bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-all cursor-pointer";

          return item.pdfUrl ? (
            <a key={i} href={item.pdfUrl} target="_blank" rel="noopener noreferrer" className={cardClass}>
              {media}
              {body}
            </a>
          ) : (
            <button key={i} type="button" onClick={() => setActiveIndex(i)} className={cardClass}>
              {media}
              {body}
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {active.img ? (
              <div className="relative w-full h-[65vh]">
                <Image src={active.img} alt={active.title} fill sizes="90vw" className="object-contain" />
              </div>
            ) : (
              <div className="w-full h-[40vh] bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-5xl">📊</span>
              </div>
            )}
            <div className="text-center text-white">
              <p className="text-xs text-white/60 mb-1">
                {activeIndex! + 1} / {items.length}
              </p>
              <h3 className="text-sm md:text-base font-semibold">{active.title}</h3>
              {active.description && <p className="text-xs text-white/70 mt-1">{active.description}</p>}
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next"
            className="absolute right-2 md:right-6 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
}
