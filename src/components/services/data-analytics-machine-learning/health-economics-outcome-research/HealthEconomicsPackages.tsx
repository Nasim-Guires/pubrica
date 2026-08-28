import React from "react";
import Image from "next/image";

const pricingData = [
  {
    tier: "Basic",
    iconSrc: "/images/editing-and-translation/basic-pacakge.png",
    colorScheme: {
      border: "border-teal-200",
      badgeBg: "bg-amber-100 text-amber-700",
      headerText: "text-teal-900",
    },
    idealFor:
      "Early-stage researchers, academic submissions, and pilot projects.",
    includes: [
      "Literature review & evidence synthesis",
      "Basic cost analysis (cost-minimization, cost-description)",
      "Summary tables & graphs",
      "Draft manuscript/report preparation",
    ],
    addOns: ["Journal selection support", "Editing & proofreading"],
    turnaround: "2–3 weeks",
  },
  {
    tier: "Standard",
    iconSrc: "/images/publication-support/responding-to-reviewers/standard-logo.png",
    colorScheme: {
      border: "border-purple-200",
      badgeBg: "bg-sky-100 text-sky-700",
      headerText: "text-purple-900",
    },
    idealFor:
      "Research teams, healthcare providers, and industry professionals needing publication-ready outcomes.",
    includes: [
      "Full economic evaluation (CEA, CUA, CBA)",
      "Real-world data integration",
      "Patient-reported outcome (PRO) assessments",
      "Compliance with international HEOR guidelines (ISPOR, NICE, FDA/EMA)",
      "Detailed results interpretation & visualization",
    ],
    addOns: [
      "Statistical modeling support",
      "Budget impact analysis",
      "Peer review response assistance",
      "Journal submission management",
    ],
  },
  {
    tier: "Premium",
    iconSrc: "/images/editing-and-translation/translation-with-editing/pro.webp",
    colorScheme: {
      border: "border-amber-200",
      badgeBg: "bg-purple-100 text-purple-700",
      headerText: "text-amber-900",
    },
    idealFor:
      "Pharma, biotech, and med-tech companies requiring strategic HEOR support for reimbursement and market access.",
    includes: [
      "Advanced modeling (Markov, decision-tree, survival analysis)",
      "Budget impact analysis & cost-effectiveness modeling",
      "Real-world evidence (RWE) generation",
      "Value dossiers & HTA submission support",
      "Publication-ready deliverables with regulatory alignment",
    ],
    addOns: ["Advisory board presentation materials"],
  },
];

export default function HealthEconomicsPackages() {
  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3835] mb-3">
          Health Economics & Outcome Research – Our Packages
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-sm sm:text-base leading-relaxed">
          At Pubrica, we offer tailored Health Economics & Outcome Research packages designed to meet the needs of researchers, pharmaceutical companies, healthcare providers, and policymakers. Our evidence-based solutions help demonstrate product value, inform decision-making, and improve patient outcomes.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {pricingData.map((pkg, index) => (
          <div
            key={index}
            className={`flex flex-col bg-[#fafafa] rounded-2xl border-2 ${pkg.colorScheme.border} shadow-sm overflow-hidden p-6 transition-all duration-200 hover:shadow-md`}
          >
            {/* Header / Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative w-10 h-10 shrink-0">
                <Image src={pkg.iconSrc} alt={`${pkg.tier} package`} fill className="object-contain" />
              </span>
              <h3 className={`text-xl font-bold ${pkg.colorScheme.headerText}`}>
                {pkg.tier}
              </h3>
            </div>

            {/* Content Details */}
            <div className="space-y-5 text-left text-xs sm:text-sm text-gray-700 flex-1">
              <div>
                <p className="font-semibold text-gray-900">
                  Ideal For:{" "}
                  <span className="font-normal text-gray-700">
                    {pkg.idealFor}
                  </span>
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Includes:</p>
                <ul className="space-y-2 list-disc list-inside text-gray-600 pl-1">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="leading-snug">
                      <span className="relative -left-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {pkg.addOns && pkg.addOns.length > 0 && (
                <div>
                  <p className="font-semibold text-gray-900 mb-2">
                    Optional Add-ons:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-gray-600 pl-1">
                    {pkg.addOns.map((addon, i) => (
                      <li key={i} className="leading-snug">
                        <span className="relative -left-1">{addon}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {pkg.turnaround && (
                <div className="pt-2">
                  <p className="font-semibold text-gray-900">
                    Turnaround Time:{" "}
                    <span className="font-normal text-gray-700">
                      {pkg.turnaround}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}