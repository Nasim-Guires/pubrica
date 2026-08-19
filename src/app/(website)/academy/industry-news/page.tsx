"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Grid } from "lucide-react";

interface IndustryNewsArticle {
  id: number;
  date: string;
  title: string;
  slug: string;
  image: string;
}

const newsData: IndustryNewsArticle[] = [
  {
    id: 1,
    date: "April 1, 2021",
    title: "Use of GPP3 for ethical guidance",
    slug: "/academy/industry-news/use-of-gpp3-for-ethical-guidance/",
    image: "/images/news/gpp3-ethical-guidance.jpg",
  },
  {
    id: 2,
    date: "April 7, 2020",
    title:
      "Surgical Management in Patients with Cardiovascular Complications: Exemplary Introduction section of your Literature Review.",
    slug: "/academy/industry-news/surgical-management-in-patients-with-cardiovascular-complications/",
    image: "/images/news/cardiovascular-management.jpg",
  },
  {
    id: 3,
    date: "October 31, 2019",
    title:
      "Pre-or post-publication Peer review of Scientific Manuscripts: Thoughts on Pros and Cons",
    slug: "/academy/industry-news/pre-or-post-publication-peer-review-of-scientific-manuscripts/",
    image: "/images/news/peer-review-pros-cons.jpg",
  },
  {
    id: 4,
    date: "October 1, 2019",
    title:
      "The Process of a scientific manuscript evaluation in a high-impact Journal - What Matter's for Editors & Peer reviewers",
    slug: "/academy/industry-news/process-of-a-scientific-manuscript-evaluation-in-a-high-impact-journal/",
    image: "/images/news/manuscript-evaluation-process.jpg",
  },
];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= newsData.length - 3 ? prev : prev + 1
    );
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Banner with Full Width Image Cover */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-900 sm:h-64 md:h-72">
        <Image
          src="/images/news/banner-book.jpg"
          alt="Industry News Header Banner"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center bg-black/30 px-6 sm:px-12 md:px-20">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Industry News
          </h1>
        </div>
      </div>

      {/* Main Content Carousel */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
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
            disabled={currentIndex >= newsData.length - 3}
            aria-label="Next items"
            className="flex h-9 w-9 items-center justify-center bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {newsData
            .slice(currentIndex, currentIndex + 4)
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Article Image Card */}
                  <div className="relative h-44 w-full overflow-hidden rounded bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Article Date */}
                  <span className="block text-xs text-gray-400">
                    {item.date}
                  </span>

                  {/* Article Title Link */}
                  <Link href={item.slug} className="group block">
                    <h2 className="text-sm font-semibold leading-snug text-gray-800 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h2>
                  </Link>
                </div>

                {/* Read More Button with Grid Icon */}
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

        {/* Pagination Indicators */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentIndex(0)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === 0 ? "h-3 w-3 bg-blue-600" : "bg-gray-300"
            }`}
            aria-label="Go to page 1"
          />
          <button
            onClick={() => setCurrentIndex(1)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex > 0 ? "h-3 w-3 bg-blue-600" : "bg-gray-300"
            }`}
            aria-label="Go to page 2"
          />
        </div>
      </main>
    </div>
  );
};

export default Page;