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
      "Medical journals expect a structure for case reports and review articles, with clear objectives....",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600",
    alt: "Doctor holding a clipboard",
    link: "#",
  },
  {
    id: 2,
    title:
      "How Should Physicians Choose the Right Journal for Submitting a Case...",
    summary:
      "Publishing a case report involves more than clinical knowledge; it also demands strategic journal ....",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
    alt: "Physician working on laptop with documents",
    link: "#",
  },
  {
    id: 3,
    title:
      "How Physicians Can Write Clear and Impactful Patient Education Materials",
    summary:
      "Effective patient education materials (PEMs) are crucial for promoting health literacy, enhancing....",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600",
    alt: "Doctor discussing with a patient",
    link: "#",
  },
];

export default function InsightsSection() {
  return (
    <section className="w-full bg-[#f4f6f6] py-14 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8">
          Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsData.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md"
            >
              <Link href={item.link} className="block group flex-1">
                {/* Image Container */}
                <div className="relative w-full h-48 bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 flex flex-col justify-between">
                  <h3 className="font-bold text-[#09322e] text-base sm:text-lg leading-snug mb-3 group-hover:text-teal-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
