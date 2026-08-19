"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Extracted demo data across all 3 pages
const grammarData = [
  // Page 1
  {
    id: 1,
    date: "September 15, 2020",
    title: "Biological Factors and Brain Changes Across the Life Span",
    slug: "biological-factors-and-brain-changes-across-the-life-span",
    image: "/images/grammar/biological-factors.jpg",
    page: 1,
  },
  {
    id: 2,
    date: "July 29, 2020",
    title:
      "A KIDNEY TRANSPLANT PATIENT WITH MILD COVID-19 - CASE REPORT WRITING GUIDELINES FOR PUBLICATION AND THE IMPORTANCE OF GDPR",
    slug: "kidney-transplant-patient-covid-19-case-report-guidelines",
    image: "/images/grammar/kidney-transplant.jpg",
    page: 1,
  },
  {
    id: 3,
    date: "July 18, 2020",
    title: "Role of Literature Review in Biomedical Research Writing",
    slug: "role-of-literature-review-in-biomedical-research-writing",
    image: "/images/grammar/literature-review.jpg",
    page: 1,
  },
  {
    id: 4,
    date: "June 24, 2020",
    title: "PRO instrument and its types",
    slug: "pro-instrument-and-its-types",
    image: "/images/grammar/pro-instrument.jpg",
    page: 1,
  },

  // Page 2
  {
    id: 5,
    date: "June 8, 2020",
    title: "Achieving Long Term Goals with Positive Motivation",
    slug: "achieving-long-term-goals-with-positive-motivation",
    image: "/images/grammar/long-term-goals.jpg",
    page: 2,
  },
  {
    id: 6,
    date: "March 27, 2020",
    title: "How to find a scholarly article?",
    slug: "how-to-find-a-scholarly-article",
    image: "/images/grammar/scholarly-article.jpg",
    page: 2,
  },
  {
    id: 7,
    date: "November 1, 2018",
    title: "Be Word(ly) Wise",
    slug: "be-wordly-wise",
    image: "/images/grammar/be-wordly-wise.jpg",
    page: 2,
  },
  {
    id: 8,
    date: "November 1, 2018",
    title: "Written Content",
    slug: "written-content",
    image: "/images/grammar/written-content.jpg",
    page: 2,
  },

  // Page 3
  {
    id: 9,
    date: "November 1, 2018",
    title: "Written Content",
    slug: "written-content-dup",
    image: "/images/grammar/written-content.jpg",
    page: 3,
  },
  {
    id: 10,
    date: "October 31, 2018",
    title: "phrasing it Right",
    slug: "phrasing-it-right",
    image: "/images/grammar/phrasing-it-right.jpg",
    page: 3,
  },
  {
    id: 11,
    date: "October 31, 2018",
    title: "Tense",
    slug: "tense",
    image: "/images/grammar/tense.jpg",
    page: 3,
  },
  {
    id: 12,
    date: "October 31, 2018",
    title: "Parallel Construction",
    slug: "parallel-construction",
    image: "/images/grammar/parallel-construction.jpg",
    page: 3,
  },
];

const Page = () => {
  const [activePage, setActivePage] = useState(1);

  const visibleCards = grammarData.filter((item) => item.page === activePage);

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title Header */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8">
        Grammar
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[320px]">
        {visibleCards.map((card) => (
          <Link
            key={card.id}
            href={`/academy/artical/${card.slug}/`}
            className="group block bg-white overflow-hidden"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-44 bg-gray-100 mb-3 rounded overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Date & Title */}
            <div>
              <span className="text-[11px] text-gray-400 block mb-1">
                {card.date}
              </span>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug line-clamp-3">
                {card.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination Dots (3 Pages) */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {[1, 2, 3].map((pageNo) => (
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