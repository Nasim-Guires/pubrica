"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const insightsData = [
  {
    id: 1,
    title:
      "How to Structure Case Reports and Review Articles for Medical Journals",
    summary:
      "Journals expect a clear structure for case reports and review articles, featuring precise objectives, rigorous timeline analysis..",
    image:
      "/images/editing-and-translation/How-to-Structure-Case-Reports-and-Review-Articles-for-Medical-Journals.jpg",
    alt: "Doctor holding a clipboard",
    link: "/academy/physician-writing/how-to-structure-case-reports-review-articles-journals/",
  },
  {
    id: 2,
    title:
      "How Should Physicians Choose the Right Journal for Submitting a Case...",
    summary:
      "Publishing a case report involves more than clinical knowledge; it also demands strategic journal targeting, matching visibility metrics..",
    image:
      "/images/editing-and-translation/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.jpg",
    alt: "Physician working on laptop with documents",
    link: "/academy/physician-writing/choose-journal-case-report-physicians/",
  },
  {
    id: 3,
    title:
      "How Physicians Can Write Clear and Impactful Patient Education Materials",
    summary:
      "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing compliance, and bridging care delivery gaps..",
    image:
      "/images/editing-and-translation/How-Physicians-Can-Write-Clear-and-Impactful-Patient-Education-Materials.jpg",
    alt: "Doctor discussing with a patient",
    link: "/academy/physician-writing/how-to-structure-case-reports-review-articles-journals/",
  },
];

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#f4f6f6] py-12 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0c2e35] mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsData.map((item) => (
            <Link key={item.id} href={item.link} className="group block h-full">
              <div className="bg-white rounded-md overflow-hidden shadow-sm border border-gray-100 transition-shadow duration-300 group-hover:shadow-md flex flex-col h-full">
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-[17px] font-bold text-[#0c2e35] leading-snug mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mt-auto">
                    {item.summary}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}