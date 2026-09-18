"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Category {
  title: string;
  icon: string;
  href: string;
}

export default function CategoriesCarousel({ categories }: { categories: Category[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const autoPlay = setInterval(() => {
      if (isDragging) return;
      const firstItem = container.firstElementChild as HTMLElement | null;
      if (!firstItem) return;

      const itemWidth = firstItem.offsetWidth + 16;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 5) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(autoPlay);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`flex gap-4 overflow-x-auto select-none scroll-smooth py-2 ${isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {categories.map((cat, i) => (
        <Link
          key={i}
          href={cat.href || "#"}
          className="flex-shrink-0 w-[calc(55%-12px)] sm:w-[calc(35%-12px)] md:w-[calc(22%-13px)] min-h-[85px] flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-200 hover:border-[#004d40] hover:shadow-md transition-all text-left group pointer-events-auto"
          onClick={(e) => {
            if (isDragging) e.preventDefault();
          }}
        >
          {/* Container size matching the icon height, background removed */}
          <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
            {cat.icon ? (
              /* Enlarged icon image with no wrapper background */
              <img src={cat.icon} alt={cat.title} className="w-12 h-12 object-contain" />
            ) : (
              <span className="text-3xl">📄</span>
            )}
          </div>
          <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-[#004d40] line-clamp-2 leading-tight">
            {cat.title}
          </span>
        </Link>
      ))}
    </div>
  );
}