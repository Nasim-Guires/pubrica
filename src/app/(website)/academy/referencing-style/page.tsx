"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Demo Data extracted from the image
const referencingStyleData = [
  {
    id: 1,
    date: "November 1, 2018",
    title: "Intro to citation metrics",
    slug: "intro-to-citation-metrics",
    image: "/images/referencing-style/intro-to-citation-metrics.jpg",
  },
  {
    id: 2,
    date: "November 1, 2018",
    title: "Specific business sources cited in APA style",
    slug: "specific-business-sources-cited-in-apa-style",
    image: "/images/referencing-style/specific-business-sources-apa-style.jpg",
  },
  {
    id: 3,
    date: "November 1, 2018",
    title: "My tryst with Mendeley",
    slug: "my-tryst-with-mendeley",
    image: "/images/referencing-style/my-tryst-with-mendeley.jpg",
  },
];

const Page = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-8">
          Referencing Style
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referencingStyleData.map((card) => (
            <Link
              key={card.id}
              href={`/academy/referencing-style/${card.slug}/`}
              className="group block bg-white rounded overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden mb-3 rounded">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Date & Title */}
              <div>
                <span className="text-[11px] text-gray-400 block mb-1">
                  {card.date}
                </span>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;