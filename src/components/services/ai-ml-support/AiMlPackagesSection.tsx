"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

const packagesData = [
  {
    id: "starter",
    badge: "S",
    name: "Starter",
    badgeBg: "bg-amber-100 text-amber-700 border-amber-300",
    cardBg: "bg-[#c5d5d5]",
    headerBg: "bg-[#e2ebeb]",
    idealFor:
      "Early-stage researchers, small datasets, academic assignments, proof-of-concept projects",
    includes: [
      "Data preprocessing & cleaning",
      "Exploratory Data Analysis (EDA)",
      "Basic ML model development (classification/regression)",
      "Model validation & performance summary",
      "Concise reporting with insights",
    ],
    addOns: [
      "visualization dashboards",
      "Extended statistical analysis",
      "Literature support for AI methodology",
    ],
    turnaround: "2–3 weeks",
  },
  {
    id: "advanced",
    badge: "A",
    name: "Advanced",
    badgeBg: "bg-emerald-100 text-emerald-700 border-emerald-300",
    cardBg: "bg-[#d2c1d8]",
    headerBg: "bg-[#e9deed]",
    idealFor:
      "Mid-scale projects, PhD research, applied studies, journal-ready outputs",
    includes: [
      "Advanced dataset preparation & feature engineering",
      "ML algorithms (classification, clustering, regression, ensemble methods)",
      "Hyperparameter tuning for higher accuracy",
      "Intermediate-level AI model comparisons",
      "Detailed result interpretation aligned with academic standards",
    ],
    addOns: [
      "Manuscript-ready figures & tables",
      "Code documentation for reproducibility",
      "Extended statistical & sensitivity analysis",
    ],
    turnaround: "3–5 weeks",
  },
  {
    id: "premium",
    badge: "P",
    name: "Premium",
    badgeBg: "bg-blue-100 text-blue-700 border-blue-300",
    cardBg: "bg-[#d8c399]",
    headerBg: "bg-[#ebdcb9]",
    idealFor:
      "High-impact academic publications, industry research, enterprise AI models",
    includes: [
      "End-to-end AI/ML pipeline development",
      "Deep learning & neural network implementation",
      "Predictive & prescriptive analytics",
      "Model deployment strategies",
      "Comprehensive visualizations & publication-ready documentation",
    ],
    addOns: [
      "Continuous model monitoring & updates",
      "Integration with real-time APIs",
      "Domain-specific simulations (e.g., healthcare, pharma, genomics)",
    ],
    turnaround: "6–8 weeks",
  },
  {
    id: "enterprise",
    badge: "E",
    name: "Enterprise & Custom",
    badgeBg: "bg-rose-100 text-rose-700 border-rose-300",
    cardBg: "bg-[#f8c8c8]",
    headerBg: "bg-[#fde2e2]",
    idealFor:
      "Organizations, large-scale research labs, and cross-domain AI solutions",
    includes: [
      "Tailored AI/ML workflows for your domain",
      "Scalable big data solutions",
      "Multimodal data integration (text, image, genomic, etc.)",
      "Dedicated support team & ongoing consultation",
      "Compliance with ethical AI & regulatory standards",
    ],
    addOns: [
      "Long-term collaboration & training workshops",
      "Cloud-based deployment & automation",
      "Customized dashboards for business intelligence",
    ],
    turnaround: "Flexible",
  },
];

// Reusable Right Arrow Icon
function ArrowIcon() {
  return (
    <div className="shrink-0 w-4 h-4 mt-0.5 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold">
      →
    </div>
  );
}

export default function AiMlPackagesSection() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-4">
            AI and ML Service – Our Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            At Pubrica, we provide tailored AI and ML solutions designed to
            accelerate innovation, enhance decision-making, and deliver
            measurable outcomes for researchers, healthcare, academia, and
            industry leaders. Our packages are flexible, ensuring you get the
            right level of support based on your project scope, complexity, and
            timelines.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch mb-10">
          {packagesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg overflow-hidden flex flex-col justify-between shadow-sm border border-slate-200/50 ${pkg.cardBg}`}
            >
              <div>
                {/* Package Header Card */}
                <div
                  className={`p-4 flex items-center gap-3 border-b border-black/5 ${pkg.headerBg}`}
                >
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-base shadow-sm ${pkg.badgeBg}`}
                  >
                    {pkg.badge}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-tight">
                    {pkg.name}
                  </h3>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-6 text-xs sm:text-sm text-slate-800">
                  {/* Ideal For */}
                  <div>
                    <div className="flex items-start gap-2 mb-1">
                      <ArrowIcon />
                      <span className="font-bold">Ideal For:</span>
                    </div>
                    <p className="pl-6 text-slate-700 leading-relaxed">
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Includes */}
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <ArrowIcon />
                      <span className="font-bold">Includes:</span>
                    </div>
                    <ul className="pl-6 space-y-2 text-slate-700 leading-relaxed list-none">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Optional Add-ons */}
                  <div>
                    <div className="flex items-start gap-2 mb-2">
                      <ArrowIcon />
                      <span className="font-bold">Optional Add-ons:</span>
                    </div>
                    <ul className="pl-6 space-y-2 text-slate-700 leading-relaxed list-none">
                      {pkg.addOns.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Turnaround Time Footer */}
              <div className="p-5 pt-0">
                <div className="flex items-center gap-2 pt-4 border-t border-black/10 text-xs sm:text-sm">
                  <ArrowIcon />
                  <p>
                    <span className="font-bold">Turnaround Time:</span>{" "}
                    <span>{pkg.turnaround}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA Button */}
        <div className="flex justify-center mt-8">
         <GetFreeQuoteButton/>
        </div>
      </div>
    </section>
  );
}
