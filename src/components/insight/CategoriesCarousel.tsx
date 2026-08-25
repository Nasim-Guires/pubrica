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
      className={`flex gap-4 overflow-x-auto select-none scroll-smooth ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {categories.map((cat, i) => (
        <Link
          key={i}
          href={cat.href}
          className="flex-shrink-0 w-[calc(50%-12px)] sm:w-[calc(33.333%-12px)] md:w-[calc(20%-13px)] flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 hover:border-[#004d40] hover:shadow-sm transition-all text-left group pointer-events-auto"
          onClick={(e) => {
            if (isDragging) e.preventDefault();
          }}
        >
          <span className="text-xl bg-slate-50 p-2 rounded-lg group-hover:bg-[#e0f2f1] transition-colors flex-shrink-0">
            {cat.icon}
          </span>
          <span className="text-xs md:text-sm font-semibold text-slate-700 group-hover:text-[#004d40] truncate">
            {cat.title}
          </span>
        </Link>
      ))}
    </div>
  );
}
