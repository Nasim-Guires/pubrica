"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Extracted article data across both pages
const manuscriptData = [
  // Page 1
  {
    id: 1,
    date: "December 24, 2020",
    title:
      "What is the peer-review of a manuscript? List out the benefits of peer-reviewing a manuscript",
    slug: "what-is-the-peer-review-of-a-manuscript-list-out-the-benefits-of-peer-reviewing-a-manuscript",
    image: "/images/manuscript/peer-review-benefits.jpg",
    page: 1,
  },
  {
    id: 2,
    date: "December 28, 2020",
    title:
      "What are the major reasons for scientific manuscript rejection?",
    slug: "what-are-the-major-reasons-for-scientific-manuscript-rejection",
    image: "/images/manuscript/manuscript-rejection-reasons.jpg",
    page: 1,
  },
  {
    id: 3,
    date: "March 22, 2021",
    title: "Benefits of copyediting in manuscript writing",
    slug: "benefits-of-copyediting-in-manuscript-writing",
    image: "/images/manuscript/copyediting-benefits.jpg",
    page: 1,
  },
  {
    id: 4,
    date: "March 10, 2022",
    title: "Why should I edit my manuscript before submitting",
    slug: "why-should-i-edit-my-manuscript-before-submitting",
    image: "/images/manuscript/edit-manuscript-before-submitting.jpg",
    page: 1,
  },

  // Page 2
  {
    id: 5,
    date: "October 31, 2018",
    title: "What do STROBE guidelines entail?",
    slug: "what-do-strobe-guidelines-entail",
    image: "/images/manuscript/strobe-guidelines.jpg",
    page: 2,
  },
  {
    id: 6,
    date: "October 31, 2018",
    title: 'Style sheets, a "must" in scientific writing',
    slug: "style-sheets-a-must-in-scientific-writing",
    image: "/images/manuscript/style-sheets-scientific-writing.jpg",
    page: 2,
  },
  {
    id: 7,
    date: "November 1, 2018",
    title: "Overleaf's Collaborative process",
    slug: "overleafs-collaborative-process",
    image: "/images/manuscript/overleafs-collaborative-process.jpg",
    page: 2,
  },
  {
    id: 8,
    date: "September 21, 2020",
    title:
      "Major manuscript categories are seen in on Cardiovascular Computed Tomography",
    slug: "major-manuscript-categories-cardiovascular-computed-tomography",
    image: "/images/manuscript/cardiovascular-tomography-categories.jpg",
    page: 2,
  },
];

const Page = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 2;

  const handlePrev = () => {
    setActivePage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const visibleCards = manuscriptData.filter(
    (item) => item.page === activePage
  );

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title & Arrow Navigation Controls */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
          Manuscript Submission
        </h2>

        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded text-gray-700"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-gray-200 hover:bg-gray-300 transition-colors rounded text-gray-700"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[380px]">
        {visibleCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col justify-between bg-white overflow-hidden"
          >
            <div>
              {/* Image Container with Date Tag */}
              <div className="relative w-full h-44 bg-gray-100 mb-3 overflow-hidden rounded">
                <span className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur-sm text-[10px] text-gray-600 px-2 py-0.5 rounded shadow-sm">
                  {card.date}
                </span>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-3 line-clamp-4">
                {card.title}
              </h3>
            </div>

            {/* Target URL Button */}
            <div className="pt-2 border-t border-gray-100 mt-auto">
              <Link
                href={`/academy/manuscript-guidelines/${card.slug}/`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors"
              >
                <span className="text-gray-500">::</span> Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicators (2 Pages) */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {[1, 2].map((pageNo) => (
          <button
            key={pageNo}
            onClick={() => setActivePage(pageNo)}
            aria-label={`Page ${pageNo}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              activePage === pageNo
                ? "bg-blue-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;