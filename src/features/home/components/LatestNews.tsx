import React from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
import Container from "@/components/common/Container";

const newsItems = [
  {
    slug: "/academy/publication-support/outsourced-research-support-protocol-to-publication/",
    title: "From Protocol to Publication: Outsourced Research Support for Universities, Pharma",
    date: "August 5, 2026",
    image: "/images/news-1.webp",
    excerpt:
      "From Protocol to Publication: Outsourced Research Support for Universities, Pharma & CROs No results See all results High-Impact Journals Understanding...",
  },
  {
    slug: "/academy/publication-support/struggling-to-publish-research/",
    title: "Struggling to Publish Your Research? Get the Right Support to",
    date: "July 24, 2026",
    image: "/images/news-2.webp",
    excerpt:
      "Struggling to Publish Your Research? Get the Right Support to Turn Findings into Impactful Publications No results See all results...",
  },
  {
    slug: "/academy/journal-submission/cover-letter-for-article-submission-healthcare/",
    title: "Cover Letter for Article Submission: Emerging Trends and Future Perspectives",
    date: "July 20, 2026",
    image: "/images/news-3.webp",
    excerpt:
      "Cover Letter for Article Submission: Emerging Trends and Future Perspectives in Healthcare and Patient Safety No results See all results...",
  },
];

export default function LatestNews() {
  return (
    <section className="w-full py-16 bg-[#f8f9fa] select-none font-['Poppins',sans-serif] text-gray-800">
      <Container className="flex flex-col items-center">
        {/* Section Header with Horizontal Lines */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xl mb-3">
          <div className="w-16 h-[2px] bg-gray-600" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
            Latest News
          </h2>
          <div className="w-16 h-[2px] bg-gray-600" />
        </div>

        {/* Subtitle Description (16px) */}
        <p className="text-base text-gray-600 text-center max-w-3xl leading-relaxed mb-12 font-normal">
          Explore our latest news, tips, advice, and fresh perspectives,
          including publishing guidelines, procedures, roadmaps, etc.
        </p>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {newsItems.map((post) => (
            <Link
              key={post.slug}
              href={post.slug} // Fixed: Uses the exact slug path without prepending "/blog/"
              className="group flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden rounded-none hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100 flex items-center justify-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]" // Fixed: object-contain ensures the entire image fits without cropping
                />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow bg-white">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug tracking-tight line-clamp-2 min-h-[56px] group-hover:text-emerald-950 transition-colors">
                  {post.title}
                </h3>

                <div className="flex items-center gap-1.5 mt-3 text-gray-400">
                  <Calendar className="h-4 w-4 stroke-[1.8]" />
                  <span className="text-xs font-normal tracking-wide">
                    {post.date}
                  </span>
                </div>

                {/* Card Excerpt (16px) */}
                <p className="text-base text-gray-600 leading-relaxed font-normal mt-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}