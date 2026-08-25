"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Extracted demo data across all 5 carousel slides/pages
const journalSelectionData = [
  // Page 1
  {
    id: 1,
    date: "August 18, 2026",
    title:
      "How to Choose the Right Journal: Scope, Quartile, Indexing & Predatory-Journal Checks",
    slug: "how-to-choose-the-right-journal-scope-quartile-indexing-predatory-journal-checks",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/How-to-Choose-the-Right-Journal-Scope-Quartile-Indexing-Predatory-Journal-Checks.webp",
    page: 1,
  },
  {
    id: 2,
    date: "August 1, 2026",
    title:
      "How to Get Accepted in Q1 Journals: A Pre-Submission Strategy to Beat Desk Rejection",
    slug: "how-to-get-accepted-in-q1-journals-pre-submission-strategy",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/v1-How-to-Get-Accepted-in-Q1-Journals-A-Pre-Submission-Strategy-to-Beat-Desk-Rejection.webp",
    page: 1,
  },
  {
    id: 3,
    date: "July 24, 2026",
    title:
      "Why Good Research Gets Rejected: Proven Publication Strategies to Improve Journal Acceptance",
    slug: "why-good-research-gets-rejected-publication-strategies",
    image:
      "https://pubrica.com/wp-content/uploads/2026/07/v1-Why-Good-Research-Gets-Rejected-Proven-Publication-Strategies-to-Improve-Journal-Acceptance.webp",
    page: 1,
  },
  {
    id: 4,
    date: "June 10, 2026",
    title:
      "Digital Strategies to Find the Right Journal for Publishing Your Research Study",
    slug: "digital-strategies-to-find-right-journal",
    image:
      "https://pubrica.com/wp-content/uploads/2026/06/v1-Digital-Strategies-to-Find-the-Right-Journal-for-Publishing-Your-Research-Study.webp",
    page: 1,
  },

  // Page 2
  {
    id: 5,
    date: "May 6, 2026",
    title:
      "Publishing With Impact: How Authors Should Select the Right Journal",
    slug: "publishing-with-impact-how-authors-select-right-journal",
    image:
      "https://pubrica.com/wp-content/uploads/2026/05/V1-Publishing-With-Impact-How-Authors-Should-Select-the-Right-Journal.webp",
    page: 2,
  },
  {
    id: 6,
    date: "March 27, 2026",
    title:
      "Journal Quartiles Explained (Q1–Q4): How to Choose the Right Journal for Your Research",
    slug: "journal-quartiles-explained-q1-q4-choose-right-journal",
    image:
      "https://pubrica.com/wp-content/uploads/2026/03/v1-Journal-Quartiles-Explained-Q1GCoQ4-How-to-Choose-the-Right-Journal-for-Your-Research.webp",
    page: 2,
  },
  {
    id: 7,
    date: "February 13, 2026",
    title: "Tips for High-Impact Journals",
    slug: "tips-for-high-impact-journals",
    image:
      "https://pubrica.com/wp-content/uploads/2026/02/v1-How-to-Write-a-Medical-Paper-Tips-for-High-Impact-Journals.webp",
    page: 2,
  },
  {
    id: 8,
    date: "February 13, 2026",
    title:
      "What is the difference between Scopus-indexed and non-indexed journals?",
    slug: "difference-between-scopus-indexed-and-non-indexed-journals",
    image:
      "https://pubrica.com/wp-content/uploads/2026/02/v1-What-is-the-difference-between-Scopus-indexed-and-non-indexed-journals.webp",
    page: 2,
  },

  // Page 3
  {
    id: 9,
    date: "October 23, 2025",
    title:
      "How to Identify the Best Journal for Your Manuscript Submission",
    slug: "how-to-identify-best-journal-for-manuscript-submission",
    image:
      "https://pubrica.com/wp-content/uploads/2025/10/v1-How-to-Identify-the-Best-Journal-for-Your-Manuscript-Submission.png",
    page: 3,
  },
  {
    id: 10,
    date: "September 22, 2025",
    title:
      "A Detailed Guide to Journal Selection in Academic Publishing",
    slug: "detailed-guide-to-journal-selection-academic-publishing",
    image: "https://pubrica.com/wp-content/uploads/2025/11/open-access-publishing.webp",
    page: 3,
  },
  {
    id: 11,
    date: "May 23, 2025",
    title:
      "How to Minimize Rejection Risks Through Strategic Journal Selection",
    slug: "how-to-minimize-rejection-risks-strategic-journal-selection",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/v1-How-to-Get-Accepted-in-Q1-Journals-A-Pre-Submission-Strategy-to-Beat-Desk-Rejection.webp",
    page: 3,
  },
  {
    id: 12,
    date: "May 22, 2025",
    title:
      "How to Align Your Manuscript with Journal Requirements: A Step-by-Step Guide",
    slug: "how-to-align-manuscript-with-journal-requirements",
    image:
      "https://pubrica.com/wp-content/uploads/2026/08/How-to-Choose-the-Right-Journal-Scope-Quartile-Indexing-Predatory-Journal-Checks.webp",
    page: 3,
  },

  // Page 4
  {
    id: 13,
    date: "March 15, 2023",
    title:
      "Important Factors Affecting Journal Selection Decisions By Researchers",
    slug: "important-factors-affecting-journal-selection-decisions",
    image:
      "https://pubrica.com/wp-content/uploads/2023/04/Important-Factors-Affecting-Journal-Selection-Decisions-By-Researchers.webp",
    page: 4,
  },
  {
    id: 14,
    date: "May 4, 2022",
    title:
      "How to Choose PubMed Journals to Publish Generic Drug Papers?",
    slug: "how-to-choose-pubmed-journals-generic-drug-papers",
    image:
      "https://pubrica.com/wp-content/uploads/2023/04/How-to-Choose-PubMed-Journals-to-Publish-Generic-Drug-Papers.webp",
    page: 4,
  },
  {
    id: 15,
    date: "December 27, 2021",
    title:
      "A comparison of medical and social science journal selection factors in an open-access environment",
    slug: "comparison-medical-social-science-journal-selection",
    image:
      "https://pubrica.com/wp-content/uploads/2023/04/A-comparison-of-medical-and-social-science-journal-selection-factors-in-an-open-access-environment.webp",
    page: 4,
  },
  {
    id: 16,
    date: "October 12, 2021",
    title: "What Does If My Paper Is Rejected in Peer Review?",
    slug: "what-does-if-my-paper-is-rejected-in-peer-review",
    image: "https://pubrica.com/wp-content/uploads/2021/10/Promotional-image.jpg",
    page: 4,
  },

  // Page 5
  {
    id: 17,
    date: "February 8, 2021",
    title:
      "Critical checklists to support you on your scientific publication journey at each point",
    slug: "critical-checklists-to-support-you-on-your-scientific-publication-journey-at-each-poi",
    image:
      "https://pubrica.com/wp-content/uploads/2021/07/Critical-checklists-to-support-you-on-your-scientific-publication-journey-at-each-point.webp",
    page: 5,
  },
  {
    id: 18,
    date: "December 26, 2020",
    title:
      "What is scientific writing? How is it significant to radiology and list out the types of scientific paper in healthcare industries? Research service",
    slug: "what-is-scientific-writing-radiology-healthcare",
    image:
      "https://pubrica.com/wp-content/uploads/2021/02/What-is-scientific-writing_-How-is-it-significant-to-radiology-and-list-out-the-types-of-scientific-paper-in-healthcare-industries_Research-service.webp",
    page: 5,
  },
  {
    id: 19,
    date: "December 21, 2020",
    title:
      "What is Publication support services? What is the need for Publication support services?",
    slug: "what-is-publication-support-services-need",
    image:
      "https://pubrica.com/wp-content/uploads/2021/02/What-is-Publication-support-services_-What-is-the-need-for-Publication-support-services.webp",
    page: 5,
  },
  {
    id: 20,
    date: "September 11, 2020",
    title:
      "List out the theoretical approaches and peer-review policies for writing a psychology journal manuscript",
    slug: "theoretical-approaches-peer-review-policies-psychology",
    image:
      "https://pubrica.com/wp-content/uploads/2020/09/Pub-Promotional-image-List-out-the-theoretical-approaches-and-peer-review-policies-for-writing-a-psychology-journal-manuscri.jpg",
    page: 5,
  },
];

const Page = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5;

  const handlePrev = () => {
    setActivePage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const visibleCards = journalSelectionData.filter(
    (item) => item.page === activePage
  );

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Title & Arrow Navigation */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-100">
          Journal Selection
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
              {/* Image with Floating Date Badge */}
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

            {/* Read More Button Link */}
            <div className="pt-2 border-t border-gray-100 mt-auto">
              <Link
                href={`/academy/journal-selection/${card.slug}/`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-medium rounded transition-colors"
              >
                <span className="text-gray-500">::</span> Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 5 Page Indicator Dots */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {[1, 2, 3, 4, 5].map((pageNo) => (
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