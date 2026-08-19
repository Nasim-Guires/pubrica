"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Demo Data extracted from both carousel slides
const manuscriptGuidelinesData = [
  // Page 1
  {
    id: 1,
    date: "March 22, 2021",
    title: "Benefits of copyediting in manuscript writing",
    slug: "benefits-of-copyediting-in-manuscript-writing",
    image: "/images/guidelines/copyediting-benefits.jpg",
    page: 1,
  },
  {
    id: 2,
    date: "September 21, 2020",
    title: "Major manuscript categories are seen in on Cardiovascular Computed Tomography",
    slug: "major-manuscript-categories-cardiovascular-computed-tomography",
    image: "/images/guidelines/cardiovascular-ct.jpg",
    page: 1,
  },
  {
    id: 3,
    date: "November 1, 2018",
    title: "Overleaf's Collaborative process",
    slug: "overleafs-collaborative-process",
    image: "/images/guidelines/overleaf-collaborative.jpg",
    page: 1,
  },
  {
    id: 4,
    date: "October 31, 2018",
    title: 'Style sheets, a "must" in scientific writing',
    slug: "style-sheets-a-must-in-scientific-writing",
    image: "/images/guidelines/style-sheets-scientific-writing.jpg",
    page: 1,
  },
  // Page 2
  {
    id: 5,
    date: "December 29, 2020",
    title: "What are the major reasons for scientific manuscript rejection?",
    slug: "major-reasons-for-scientific-manuscript-rejection",
    image: "/images/guidelines/rejection-reasons.jpg",
    page: 2,
  },
  {
    id: 6,
    date: "October 31, 2018",
    title: "What do STROBE guidelines entail?",
    slug: "what-do-strobe-guidelines-entail",
    image: "/images/guidelines/strobe-guidelines.jpg",
    page: 2,
  },
  {
    id: 7,
    date: "December 24, 2020",
    title: "What is the peer-review of a manuscript? List out the benefits of peer-reviewing a manuscript",
    slug: "what-is-peer-review-benefits-of-peer-reviewing",
    image: "/images/guidelines/peer-review-benefits.jpg",
    page: 2,
  },
  {
    id: 8,
    date: "March 10, 2022",
    title: "Why should I edit my manuscript before submitting",
    slug: "why-should-i-edit-my-manuscript-before-submitting",
    image: "/images/guidelines/edit-manuscript-before-submitting.jpg",
    page: 2,
  },
];

const Page = () => {
  const [activePage, setActivePage] = useState(1);

  // Filter items according to active slide page
  const visibleCards = manuscriptGuidelinesData.filter(
    (item) => item.page === activePage
  );

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-100 mb-8">
          Manuscript Guidelines
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card) => (
            <Link
              key={card.id}
              href={`/guidelines/${card.slug}`}
              className="group block bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Card Image */}
              <div className="relative w-full h-44 bg-gray-200 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between">
                <span className="text-xs text-gray-400 font-medium mb-1">
                  {card.date}
                </span>
                <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 line-clamp-3 transition-colors duration-200 leading-snug">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setActivePage(1)}
            aria-label="Page 1"
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              activePage === 1 ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
          <button
            onClick={() => setActivePage(2)}
            aria-label="Page 2"
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              activePage === 2 ? "bg-blue-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;