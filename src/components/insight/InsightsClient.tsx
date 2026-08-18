"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  newsCategories,
  infographics,
  storyboards,
  sampleWorks,
  factSheets,
  checklists,
} from "@/lib/data-insight";


const InsightsPage = () => {
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
    <div className="bg-[#f8f9fa] min-h-screen text-slate-800 font-sans pb-24">
      {/* 1. HERO BANNER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold tracking-wider text-[#004d40] uppercase border-b-2 border-[#004d40] pb-1 inline-block">
              Insights
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Insights for Research Services
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Pubrica Insights offers a range of services under Patient Journey & Insights — Machine Learning Services, including Data Extraction, data analytics, and specific analytics such as Multivariate Analytics and Health Economic Modeling.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/academy/Forensics-2.webp"
                alt="Research Insights Graphics"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 500px"
                className="object-cover filter grayscale contrast-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 whitespace-nowrap">All News</h2>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

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
          {newsCategories.map((cat, i) => (
            <button
              key={i}
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
            </button>
          ))}
        </div>
      </section>

      {/* 3. BLOG SECTION COMPONENT */}

      {/* 4. STORYBOARDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Storyboards</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <button className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors">
            Explore More &rarr;
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Storyboarding is how we dialogue with you; we want to communicate news, views, trends, and technology via storyboarding.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {storyboards.map((board, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col hover:shadow-md transition-all"
            >
              <div className="aspect-[4/3] bg-slate-100 relative border-b border-slate-100 overflow-hidden">
                <Image
                  src={board.img}
                  alt={board.title}
                  fill
                  sizes="(max-w-7xl) 25vw, 300px"
                  className="object-cover"
                />
              </div>
              <div className="p-3 bg-[#0d2e27] text-white text-center flex-grow flex items-center justify-center">
                <span className="text-xs font-semibold tracking-wide line-clamp-2">
                  {board.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SAMPLE WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Sample Works</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <button className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors">
            Explore More &rarr;
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          We take pride in the high quality of our work. To learn more, take a look at some of our samples created by Pubrica writers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sampleWorks.map((work, i) => (
            <div
              key={i}
              className="flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-44 overflow-hidden relative">
                <Image
                  src={work.img}
                  alt={work.title}
                  fill
                  sizes="(max-w-7xl) 33vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-[#004d40] line-clamp-2 hover:underline cursor-pointer">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {work.desc}
                  </p>
                </div>
                <div className="flex justify-end pt-2">
                  <span className="text-blue-500 hover:translate-x-1 transition-transform cursor-pointer">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INFOGRAPHICS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-slate-900">Infographics</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <button className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors">
            Explore More &rarr;
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Infographics are the way to go when it comes to presenting new or trending topics of interest.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infographics.map((info, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 flex flex-col group hover:shadow-md transition-all"
            >
              <div className="aspect-[4/5] bg-slate-100 flex items-center justify-center border-b border-slate-100 p-4">
                <div className="w-full h-full rounded border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-2 text-center bg-gradient-to-br from-teal-50 to-amber-50">
                  <span className="text-2xl mb-1">📊</span>
                  <div className="w-12 h-2 bg-[#004d40]/20 rounded mb-1"></div>
                  <div className="w-8 h-2 bg-amber-500/20 rounded"></div>
                </div>
              </div>
              <div className="p-3 bg-[#0d2e27] text-white text-center flex-grow flex items-center justify-center">
                <span className="text-xs font-medium tracking-wide line-clamp-2">
                  {info.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FACT SHEETS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-slate-900">Fact sheet</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <button className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors">
            Explore More &rarr;
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Our factsheets are designed to help you enhance your knowledge across subjects.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {factSheets.map((sheet, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between items-center text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <Image
                  src={sheet.img}
                  alt={sheet.title}
                  fill
                  sizes="(max-w-7xl) 25vw, 300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center text-white text-xs p-2 font-semibold z-10">
                  {sheet.title.split(" ").slice(0, 4).join(" ")}...
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-2 min-h-[2rem] leading-relaxed">
                {sheet.title}
              </h4>
              <button className="w-full py-1.5 bg-[#004d40] hover:bg-[#00332a] text-white text-xs font-medium rounded-md transition-colors shadow-sm">
                View Sheet
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. CHECKLISTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-4 w-full">
            <h2 className="text-xl font-bold text-[#004d40]">Checklist</h2>
            <div className="h-[1px] flex-grow bg-slate-200"></div>
          </div>
          <button className="ml-4 bg-[#004d40] text-white px-4 py-1.5 rounded text-xs font-semibold whitespace-nowrap hover:bg-[#00332a] transition-colors">
            Explore More &rarr;
          </button>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Our collection of checklists is designed to support you throughout your research process.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {checklists.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col justify-between items-center text-center space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-w-7xl) 25vw, 300px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center text-white text-[10px] p-2 uppercase tracking-wider font-bold z-10">
                  {item.title.split(" ").slice(0, 3).join(" ")}...
                </div>
              </div>
              <h4 className="text-xs font-bold text-slate-800 line-clamp-2 min-h-[2rem] leading-relaxed">
                {item.title}
              </h4>
              <button className="w-full py-1.5 bg-[#004d40] hover:bg-[#00332a] text-white text-xs font-medium rounded-md transition-colors shadow-sm">
                View Checklist
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;