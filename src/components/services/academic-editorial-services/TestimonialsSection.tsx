"use client";

import React, { useState } from "react";

interface Testimonial {
  id: string;
  journalCover: string;
  quote: string;
  author: string;
  title: string;
  countryFlag: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "1",
    journalCover:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=300&q=80",
    quote:
      '"Pubrica\'s editorial team elevated the quality of my manuscript with incredible precision and academic clarity."',
    author: "— Dr. Aisha Rahman",
    title: "PhD in Public Health, Malaysia",
    countryFlag: "🇲🇾",
  },
  {
    id: "2",
    journalCover:
      "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=300&q=80",
    quote:
      '"Working with Pubrica was a smooth and professional experience with excellent editing quality."',
    author: "— Prof. Daniel Thompson",
    title: "Research Scientist, USA",
    countryFlag: "🇬🇧",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-[#f8fafc] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Testimonials
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-4xl">
            At Pubrica, our Academic Editorial Services are designed to elevate
            scholarly work to its highest standard. From manuscripts and theses
            to research reports, we refine language, structure, and
            subject-specific terminology to ensure clarity, academic rigor, and
            publication readiness. Here’s what our clients have to say about our
            services:
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-5 shadow-xs border border-slate-200/80 flex flex-col justify-between space-y-6"
            >
              {/* Top Quote Box with Journal Cover */}
              <div className="bg-[#d1d5db] rounded-md p-4 flex items-center gap-4 min-h-[140px]">
                <div className="w-24 h-28 bg-slate-900 rounded overflow-hidden shrink-0 shadow-sm">
                  <img
                    src={item.journalCover}
                    alt="Journal Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-800 font-medium leading-normal italic">
                  {item.quote}
                </p>
              </div>

              {/* Bottom Author Info */}
              <div className="flex items-end justify-between pt-1">
                <div className="space-y-0.5">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-600 italic">{item.title}</p>
                </div>
                <span className="text-2xl" role="img" aria-label="country flag">
                  {item.countryFlag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-2 pt-4">
          <button
            onClick={() => setActiveIndex(0)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              activeIndex === 0 ? "bg-[#0d3b44]" : "bg-slate-300"
            }`}
            aria-label="Slide 1"
          />
          <button
            onClick={() => setActiveIndex(1)}
            className={`w-2.5 h-2.5 rounded-full border border-slate-400 transition-colors ${
              activeIndex === 1 ? "bg-[#0d3b44]" : "bg-transparent"
            }`}
            aria-label="Slide 2"
          />
        </div>
      </div>
    </section>
  );
}
