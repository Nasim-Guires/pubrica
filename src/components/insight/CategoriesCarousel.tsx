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
      className={`flex gap-[30px] overflow-x-auto select-none scroll-smooth p-[6px] ${isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Card style matches the live pubrica.com All News carousel. */}
      {categories.map((cat, i) => (
        <Link
          key={i}
          href={cat.href || "#"}
          target="_blank"
          rel="noopener"
          className="flex-shrink-0 w-[calc((100%-30px)/2)] sm:w-[calc((100%-60px)/3)] lg:w-[calc((100%-120px)/5)] min-h-[110px] flex items-start gap-[10px] bg-white p-[12px] rounded-[4px] border-2 border-[#ede4e4] shadow-[0_0_4px_0_#878787] text-left pointer-events-auto"
          onClick={(e) => {
            if (isDragging) e.preventDefault();
          }}
        >
          <div className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center">
            {cat.icon ? (
              <img src={cat.icon} alt={cat.title} className="w-[60px] h-[60px] object-contain" />
            ) : (
              <span className="text-3xl">📄</span>
            )}
          </div>
          <span className="flex-1 self-center text-center text-[13px] font-medium leading-[28px] text-black">
            {cat.title}
          </span>
        </Link>
      ))}
    </div>
  );
}