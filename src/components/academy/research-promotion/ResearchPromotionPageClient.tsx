"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Grid } from "lucide-react";

interface ResearchArticle {
  id: number;
  date: string;
  title: string;
  slug: string;
  image: string;
}

const researchArticles: ResearchArticle[] = [
  {
    id: 1,
    date: "August 19, 2026",
    title: "How to Choose the Right Journal: Scope, Quartile, Indexing & Predatory-Journal Checks",
    slug: "/academy/research-promotion/how-to-choose-the-right-journal/",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/How-to-Choose-the-Right-Journal-Scope-Quartile-Indexing-Predatory-Journal-Checks.webp",
  },
  {
    id: 2,
    date: "August 1, 2026",
    title: "How to Get Accepted in Q1 Journals: A Pre-Submission Strategy to Beat Desk Rejection",
    slug: "/academy/research-promotion/how-to-get-accepted-in-q1-journals/",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/v1-How-to-Get-Accepted-in-Q1-Journals-A-Pre-Submission-Strategy-to-Beat-Desk-Rejection.webp",
  },
  {
    id: 3,
    date: "July 24, 2026",
    title: "Why Good Research Gets Rejected: Proven Publication Strategies to Improve Journal Acceptance",
    slug: "/academy/research-promotion/why-good-research-gets-rejected/",
    image:
      "https://pubrica.com/wp-content/uploads/2026/07/v1-Why-Good-Research-Gets-Rejected-Proven-Publication-Strategies-to-Improve-Journal-Acceptance.webp",
  },
  {
    id: 4,
    date: "June 10, 2026",
    title: "Digital Strategies to Find the Right Journal for Publishing Your Research Study",
    slug: "/academy/research-promotion/digital-strategies-to-find-the-right-journal/",
    image:
      "https://pubrica.com/wp-content/uploads/2026/06/v1-Digital-Strategies-to-Find-the-Right-Journal-for-Publishing-Your-Research-Study.webp",
  },
  {
    id: 5,
    date: "May 8, 2026",
    title: "Publishing With Impact: How Authors Should Select the Right Journal",
    slug: "/academy/research-promotion/publishing-with-impact-how-authors-should-select-journal/",
    image:
      "https://pubrica.com/wp-content/uploads/2026/05/V1-Publishing-With-Impact-How-Authors-Should-Select-the-Right-Journal.webp",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= researchArticles.length - 4 ? prev : prev + 1
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Full Width Hero Banner Cover */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-900 sm:h-64 md:h-72">
        <Image
          src="https://pubrica.com/wp-content/uploads/2021/04/research-publication.jpg"
          alt="Research Promotion Banner"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center bg-black/30 px-6 sm:px-12 md:px-20">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Research Promotion
          </h1>
        </div>
      </div>

      {/* Main Content Carousel Section */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Navigation Control Buttons */}
        <div className="mb-6 flex justify-end gap-1">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous items"
            className="flex h-9 w-9 items-center justify-center bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= researchArticles.length - 4}
            aria-label="Next items"
            className="flex h-9 w-9 items-center justify-center bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {researchArticles
            .slice(currentIndex, currentIndex + 4)
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Article Thumbnail Image */}
                  <div className="relative h-44 w-full overflow-hidden rounded bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Article Date Tag */}
                  <span className="block text-xs text-gray-400">
                    {item.date}
                  </span>

                  {/* Article Slug Link */}
                  <Link href={item.slug} className="group block">
                    <h2 className="text-sm font-semibold leading-snug text-gray-800 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h2>
                  </Link>
                </div>

                {/* Read More Action Button */}
                <div>
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-1.5 bg-gray-200 px-3 py-1.5 text-xs text-gray-700 transition-colors hover:bg-gray-300"
                  >
                    <Grid className="h-3 w-3 text-gray-500" />
                    Read more
                  </Link>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentIndex(0)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === 0 ? "h-3 w-3 bg-blue-600" : "bg-gray-300"
            }`}
            aria-label="Go to slide group 1"
          />
          <button
            onClick={() => setCurrentIndex(1)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex > 0 ? "h-3 w-3 bg-blue-600" : "bg-gray-300"
            }`}
            aria-label="Go to slide group 2"
          />
        </div>
      </main>
    </div>
  );
};

export default Page;