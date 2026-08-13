import React from "react";
import { Calendar } from "lucide-react";
import Container from "@/components/common/Container";

export default function LatestNews() {
  const articles = [
    {
      title: "From Protocol to Publication: Outsourced Research Support for Universities, Pharma",
      date: "August 5, 2026",
      excerpt:
        "From Protocol to Publication: Outsourced Research Support for Universities, Pharma & CROs No results See all results High-Impact Journals Understanding...",
      image: "/images/Home/news-1.webp",
      href: "#news-1",
    },
    {
      title: "Struggling to Publish Your Research? Get the Right Support to",
      date: "July 24, 2026",
      excerpt:
        "Struggling to Publish Your Research? Get the Right Support to Turn Findings into Impactful Publications No results See all results...",
      image: "/images/Home/news-2.webp",
      href: "#news-2",
    },
    {
      title: "Cover Letter for Article Submission: Emerging Trends and Future Perspectives",
      date: "July 20, 2026",
      excerpt:
        "Cover Letter for Article Submission: Emerging Trends and Future Perspectives in Healthcare and Patient Safety No results See all results...",
      image: "/images/Home/news-3.webp",
      href: "#news-3",
    },
  ];

  return (
    <section className="w-full py-16 bg-white select-none font-sans text-gray-800">
      <Container className="flex flex-col items-center">
        {/* Section Header with Horizontal Lines */}
        <div className="flex items-center justify-center gap-4 w-full max-w-xl mb-3">
          <div className="w-16 h-[1px] bg-gray-400" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">
            Latest News
          </h2>
          <div className="w-16 h-[1px] bg-gray-400" />
        </div>

        {/* Subtitle Description */}
        <p className="text-xs md:text-sm text-gray-600 text-center max-w-3xl leading-relaxed mb-12">
          Explore our latest news, tips, advice, and fresh perspectives,
          including publishing guidelines, procedures, roadmaps, etc.
        </p>

        {/* 3-Card Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {articles.map((post, idx) => (
            <a
              key={idx}
              href={post.href}
              className="group flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden rounded-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Container with object-contain to make sure the full image (including the PUBRICA watermark) is completely visible */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-50 border-b border-gray-100 flex items-center justify-center p-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Meta Body Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Truncating Header Title */}
                <h3 className="text-base font-bold text-gray-900 leading-snug tracking-tight font-display line-clamp-2 min-h-[44px] group-hover:text-emerald-950 transition-colors">
                  {post.title}
                </h3>

                {/* Date stamp Row */}
                <div className="flex items-center gap-1.5 mt-3 text-gray-400">
                  <Calendar className="h-3.5 w-3.5 stroke-[1.8]" />
                  <span className="text-[11px] font-normal tracking-wide">
                    {post.date}
                  </span>
                </div>

                {/* Excerpt Summary Block */}
                <p className="text-[12px] text-gray-500 leading-relaxed font-normal mt-4 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}