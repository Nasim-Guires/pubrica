"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

interface PackagePlan {
  id: string;
  badgeLetter: string;
  badgeBg: string;
  badgeTextColor: string;
  name: string;
  subtitle: string;
  cardHeaderBorder: string;
  bodyBg: string;
  idealFor: string;
  servicesIncluded?: string[];
  features?: string[];
  turnaround: string;
}

const packageData: PackagePlan[] = [
  {
    id: "basic",
    badgeLetter: "B",
    badgeBg: "bg-amber-100",
    badgeTextColor: "text-amber-600",
    name: "Basic",
    subtitle: "Literature Mapping",
    cardHeaderBorder: "border-slate-300",
    bodyBg: "bg-[#c5d3d0]", // Soft muted teal/grey
    idealFor: "Early-stage research, academic assignments",
    features: [
      "Overview of relevant studies",
      "Identification of major themes and trends",
      "High-level gap identification",
      "Standard referencing (APA/MLA/Vancouver)",
    ],
    turnaround: "7–10 working days",
  },
  {
    id: "advanced",
    badgeLetter: "A",
    badgeBg: "bg-green-100",
    badgeTextColor: "text-green-600",
    name: "Advanced",
    subtitle: "Critical Review & Gap Analysis",
    cardHeaderBorder: "border-purple-300",
    bodyBg: "bg-[#d8c4e2]", // Muted pastel purple/lavender
    idealFor: "Research proposals, theses, and grant applications",
    servicesIncluded: [
      "Comprehensive literature synthesis",
      "In-depth critical appraisal of studies",
      "Structured gap identification using PICO/PECO frameworks",
      "Review the matrix and evidence tables",
      "Follows PRISMA or equivalent guidelines",
    ],
    turnaround: "10–14 working days",
  },
  {
    id: "premium",
    badgeLetter: "P",
    badgeBg: "bg-blue-100",
    badgeTextColor: "text-blue-600",
    name: "Premium",
    subtitle: "Publication-Ready Systematic Review",
    cardHeaderBorder: "border-amber-300",
    bodyBg: "bg-[#cfb98d]", // Soft warm bronze/gold
    idealFor:
      "Journal publication, clinical trial support, regulatory submissions",
    servicesIncluded: [
      "Full systematic review with PRISMA compliance",
      "Protocol development and database search strategy",
      "Dual screening, quality appraisal (AMSTAR 2, GRADE, etc.)",
      "Detailed gap analysis with visual mapping",
      "Journal-specific formatting and editorial support",
    ],
    turnaround: "15–20 working days",
  },
];

export default function LiteratureReviewPackagesSection() {
  return (
    <section
      aria-labelledby="packages-heading"
      className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <header className="space-y-3">
          <h2
            id="packages-heading"
            className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
          >
            Literature Review & Gap Analyses Service – Our Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            At Pubrica, we offer comprehensive and customizable packages for
            outsource literature review, literature review consulting service,
            and professional literature review service needs. Our expert team
            ensures your systematic review is methodologically sound,
            evidence-driven, and journal-ready.
          </p>
        </header>

        {/* Pricing/Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-4">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col rounded-t-2xl rounded-b-lg overflow-hidden border border-slate-200 shadow-md bg-white transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Top Banner (White with Circle Icon & Titles) */}
              <div className="p-5 flex items-center gap-4 bg-white border-b border-slate-200">
                <div
                  className={`w-12 h-12 rounded-full ${pkg.badgeBg} ${pkg.badgeTextColor} flex items-center justify-center font-extrabold text-xl shadow-inner flex-shrink-0`}
                >
                  {pkg.badgeLetter}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-snug">
                    {pkg.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body Container */}
              <div
                className={`${pkg.bodyBg} p-6 flex-1 flex flex-col justify-between space-y-6 text-slate-900`}
              >
                <div className="space-y-5">
                  {/* Ideal For Section */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-slate-900 font-bold text-base leading-none mt-0.5">
                      ➔
                    </span>
                    <p className="text-xs sm:text-sm font-semibold leading-snug">
                      <span className="font-extrabold">Ideal For:</span>{" "}
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Services / Features List */}
                  {pkg.servicesIncluded && pkg.servicesIncluded.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2.5">
                        <span className="text-slate-900 font-bold text-base leading-none">
                          ➔
                        </span>
                        <p className="text-xs sm:text-sm font-extrabold">
                          Services Included:
                        </p>
                      </div>
                      <ul className="space-y-2.5 pl-6 text-xs sm:text-sm font-medium leading-relaxed">
                        {pkg.servicesIncluded.map((service, index) => (
                          <li key={index} className="list-disc">
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {pkg.features && pkg.features.length > 0 && (
                    <ul className="space-y-2.5 pl-6 text-xs sm:text-sm font-medium leading-relaxed pt-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="list-disc">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Turnaround Time Footer */}
                <div className="pt-4 border-t border-black/10 flex items-center gap-2">
                  <span className="text-slate-900 font-bold text-base leading-none">
                    ➔
                  </span>
                  <p className="text-xs sm:text-sm font-extrabold">
                    Turnaround:{" "}
                    <span className="font-medium">{pkg.turnaround}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Button */}
        <div className="pt-6 flex justify-center">
         <GetFreeQuoteButton/>
        </div>
      </div>
    </section>
  );
}
