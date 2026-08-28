"use client";

import React from "react";
import Image from "next/image";

export default function PatientJourneyPackagesSection() {
  const packagesData = [
    {
      id: "basic",
      badgeSrc: "/images/editing-and-translation/basic-pacakge.png",
      badgeColor: "bg-amber-100 text-amber-600 border-amber-300",
      topBg: "bg-slate-50",
      contentBg: "bg-[#D8E3E0]", // Soft muted teal/sage grey
      title: "Basic",
      idealFor:
        "Small research teams, startups, and early-stage clinical studies seeking foundational insights into patient journeys.",
      includes: [
        "Basic data extraction from EMR/EHR, surveys, and published sources",
        "Patient demographics & treatment patterns analysis",
        "Standard visualization dashboards",
        "Summary report of key patient journey insights",
      ],
      addOns: [
        "Custom data cleaning",
        "Advanced visualization modules",
        "Regulatory compliance alignment (FDA/EMA guidelines)",
      ],
      turnaround: "3–4 weeks",
    },
    {
      id: "advanced",
      badgeSrc: "/images/publication-support/peer-review-pre-submission/advanced.webp",
      badgeColor: "bg-emerald-100 text-emerald-600 border-emerald-300",
      topBg: "bg-slate-50",
      contentBg: "bg-[#E3D1E8]", // Soft lavender/purple
      title: "Advanced",
      idealFor:
        "Mid-sized pharma, biotech, and healthcare providers needing deeper insights and predictive analysis.",
      includes: [
        "Comprehensive multi-source data integration (EHR, wearables, claims data, social media, etc.)",
        "Predictive modelling of treatment outcomes",
        "Sentiment & intent analysis from patient-reported data",
        "Detailed journey mapping with touchpoints and drop-off analysis",
        "Customized strategic insights report",
      ],
      addOns: [
        "Integration with digital health platforms",
        "Benchmarking against therapeutic area datasets",
        "Tailored stakeholder presentations",
      ],
      turnaround: "5–7 weeks",
    },
    {
      id: "premium",
      badgeSrc: "/images/editing-and-translation/translation-with-editing/pro.webp",
      badgeColor: "bg-blue-100 text-blue-600 border-blue-300",
      topBg: "bg-slate-50",
      contentBg: "bg-[#E6D4B2]", // Soft warm gold/beige
      title: "Premium",
      idealFor:
        "Large pharmaceutical companies, CROs, and global healthcare organizations requiring end-to-end patient journey insights with advanced ML capabilities.",
      includes: [
        "End-to-end patient journey mapping across multiple geographies and therapeutic areas",
        "Advanced machine learning & AI models (NLP, image recognition, deep learning)",
        "Real-time dashboards with interactive analytics",
        "Comparative analysis across competitors and treatment regimens",
        "Comprehensive reporting with strategic recommendations",
      ],
      addOns: [
        "Custom API integration with internal systems",
        "Ongoing monitoring & periodic updates (monthly/quarterly)",
        "Dedicated subject-matter expert consultations",
      ],
      turnaround: "8–10 weeks",
    },
  ];

  return (
    <section className="w-full bg-white py-7 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#003B2B] mb-4">
            Patient Journey & Insights – Machine Learning Packages
          </h2>
          <p className="max-w-4xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            At Pubrica, we provide tailored packages to meet the diverse needs of healthcare organizations, researchers, and life science companies. Each package combines data-driven insights with regulatory-compliant machine learning solutions to optimize patient outcomes, treatment strategies, and market intelligence.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-t-xl rounded-b-lg overflow-hidden shadow-sm border border-slate-200"
            >
              {/* Header Badge & Title Block */}
              <div className="bg-slate-50 border-b border-slate-200 p-6 flex items-center gap-4">
                <div className="relative w-12 h-12 shrink-0">
                  <Image src={pkg.badgeSrc} alt={`${pkg.title} package`} fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {pkg.title}
                </h3>
              </div>

              {/* Main Card Body */}
              <div className={`${pkg.contentBg} p-6 flex-1 flex flex-col justify-between text-slate-900 text-xs md:text-sm`}>
                <div className="space-y-6">
                  
                  {/* Ideal For */}
                  <div className="flex items-start gap-2">
                    <span className="text-slate-800 font-bold text-base mt-[2px]">➔</span>
                    <p className="leading-snug">
                      <strong className="font-bold">Ideal For:</strong> {pkg.idealFor}
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-center gap-2 font-bold mb-3">
                      <span>➔</span>
                      <span>Includes:</span>
                    </div>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-800">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons */}
                  <div>
                    <div className="flex items-center gap-2 font-bold mb-3">
                      <span>➔</span>
                      <span>Optional Add-ons:</span>
                    </div>
                    <ul className="space-y-2.5 pl-5 list-disc text-slate-800">
                      {pkg.addOns.map((item, index) => (
                        <li key={index} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Turnaround Time Footer */}
                <div className="pt-6 mt-6 border-t border-slate-900/10 flex items-center gap-2 font-bold">
                  <span>➔</span>
                  <span>Turnaround Time: {pkg.turnaround}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}