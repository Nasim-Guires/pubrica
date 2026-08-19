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
  image?: string;
}

const researchData: ResearchArticle[] = [
  {
    id: 1,
    date: "June 23, 2021",
    title: "Statistical analyses of case-control studies",
    slug: "/academy/research/statistical-analyses-of-case-control-studies/",
  },
  {
    id: 2,
    date: "May 1, 2021",
    title:
      "Selecting material (e.g. excipient, active pharmaceutical ingredient, packaging material) for drug development",
    slug: "/academy/research/selecting-material-for-drug-development/",
    image: "/images/research/selecting-material.jpg",
  },
  {
    id: 3,
    date: "April 8, 2021",
    title: "Health economics in clinical trials",
    slug: "/academy/research/health-economics-in-clinical-trials/",
  },
  {
    id: 4,
    date: "April 8, 2021",
    title: "Epidemiology designs for clinical trials",
    slug: "/academy/research/epidemiology-designs-for-clinical-trials/",
    image: "/images/research/epidemiology-designs.jpg",
  },
  {
    id: 5,
    date: "March 8, 2021",
    title:
      "Uses of gene therapy in clinical research organization. List out few examples",
    slug: "/academy/research/uses-of-gene-therapy-in-clinical-research-organization/",
    image: "/images/research/gene-therapy.jpg",
  },
];

const PromotingResearchSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simple Carousel pagination controls
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= researchData.length - 3 ? prev : prev + 1
    );
  };

  return (
    <section className="w-full bg-white">
      {/* Full-width Hero Banner with Cover Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-900 sm:h-64 md:h-72">
        <Image
          src="/images/research/banner-book.jpg"
          alt="Promoting Research Header Banner"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center bg-black/30 px-6 sm:px-12 md:px-20">
          <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Promoting Research
          </h1>
        </div>
      </div>

      {/* Main Slider / Grid Section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
            disabled={currentIndex >= researchData.length - 3}
            aria-label="Next items"
            className="flex h-9 w-9 items-center justify-center bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Cards Container */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {researchData
            .slice(currentIndex, currentIndex + 4)
            .map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Article Date */}
                  <span className="text-xs text-gray-400">{item.date}</span>

                  {/* Optional Card Image */}
                  {item.image && (
                    <div className="relative h-40 w-full overflow-hidden rounded bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Title Link */}
                  <Link href={item.slug} className="block group">
                    <h3 className="text-sm font-semibold leading-snug text-gray-800 transition-colors group-hover:text-blue-600">
                      {item.title}
                    </h3>
                  </Link>
                </div>

                {/* Read More Button with Icon */}
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

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex justify-center items-center gap-2">
          <button
            onClick={() => setCurrentIndex(0)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex === 0 ? "bg-blue-600 w-3 h-3" : "bg-gray-300"
            }`}
            aria-label="Go to slide group 1"
          />
          <button
            onClick={() => setCurrentIndex(1)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentIndex > 0 ? "bg-blue-600 w-3 h-3" : "bg-gray-300"
            }`}
            aria-label="Go to slide group 2"
          />
        </div>
      </div>
    </section>
  );
};

export default PromotingResearchSection;