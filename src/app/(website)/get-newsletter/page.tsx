"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface NewsletterItem {
  id: number;
  title: string;
  image: string;
  buttonText?: string;
}

const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: "Manuscript Editing Service",
    image: "/images/newsletter/manuscript-editing.jpg",
  },
  {
    id: 2,
    title: "Meta Analysis Service",
    image: "/images/newsletter/meta-analysis.jpg",
  },
  {
    id: 3,
    title: "Journal Selection Service",
    image: "/images/newsletter/journal-selection.jpg",
  },
  {
    id: 4,
    title: "Scientific Grant Review",
    image: "/images/newsletter/scientific-grant.jpg",
    buttonText: "Read More",
  },
  {
    id: 5,
    title: "Scientific Literature Review",
    image: "/images/newsletter/literature-review.jpg",
  },
  {
    id: 6,
    title: "Journal Submission",
    image: "/images/newsletter/journal-submission.jpg",
  },
];

const Page = () => {
  const [selectedNewsletter, setSelectedNewsletter] =
    useState<NewsletterItem | null>(null);

  return (
    <div className="w-full bg-white">
      {/* Full Width Hero Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-900 sm:h-64 md:h-72">
        <Image
          src="/images/newsletter/banner-newspaper.jpg"
          alt="Newsletter Header Banner"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center bg-black/20 px-6 sm:px-12 md:px-20">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl font-serif">
            Newsletter
          </h1>
        </div>
      </div>

      {/* Main Grid Container */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {newsletters.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* Card Image */}
              <div
                onClick={() => setSelectedNewsletter(item)}
                className="relative h-64 w-full cursor-pointer overflow-hidden border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Card Title */}
              <h3 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* Trigger View Modal Button */}
              <button
                onClick={() => setSelectedNewsletter(item)}
                className="bg-[#1A5256] hover:bg-[#133e41] text-white text-xs font-medium px-4 py-1.5 rounded-sm transition-colors"
              >
                {item.buttonText || "View"}
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Pop-up Image Modal */}
      {selectedNewsletter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Modal Container */}
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b px-4 py-3 bg-gray-50">
              <h2 className="text-base font-semibold text-gray-800">
                {selectedNewsletter.title}
              </h2>
              <button
                onClick={() => setSelectedNewsletter(null)}
                aria-label="Close Preview"
                className="rounded-full p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-800 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="relative flex h-[75vh] w-full items-center justify-center bg-gray-100 p-4">
              <Image
                src={selectedNewsletter.image}
                alt={selectedNewsletter.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;