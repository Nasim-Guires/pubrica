"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageCardProps {
  title: string;
  icon: string;
  accentBarColor: string;
  cardBgColor: string;
  idealFor: string;
  includes: string[];
  optionalAddOns: string[];
  turnaround: string;
}

const packages: PackageCardProps[] = [
  {
    title: "Standard",
    icon: "/images/publication-support/poster-preparation/S.png",
    accentBarColor: "bg-[#154d44]",
    cardBgColor: "bg-[#cddcd9]",
    idealFor:
      "Researchers and students presenting at university-level conferences who require a clear, structured, and visually appealing poster with basic formatting.",
    includes: [
      "Custom layout using PowerPoint or PDF",
      "Structured sections (Title, Introduction, Methods, Results, Conclusion)",
      "Basic graphic integration (charts, tables, logos)",
      "Institutional branding (colour codes, logo placement)",
      "Language check (grammar and clarity)",
    ],
    optionalAddOns: ["One revision cycle", "Print-ready file optimization"],
    turnaround: "4–5 business days",
  },
  {
    title: "ADVANCED",
    icon: "/images/publication-support/journal-selection/advanced.webp",
    accentBarColor: "bg-[#8b5cf6]",
    cardBgColor: "bg-[#d8c2e5]",
    idealFor:
      "Researchers targeting national or international academic conferences requiring data visualization and enhanced layout design.",
    includes: [
      "A PDF file of your poster artwork prepared (PowerPoint, Adobe Illustrator/InDesign)",
      "Scientific accuracy check by a domain expert",
      "Visual enhancement of figures, tables, and graphs",
      "Conference-specific formatting (dimensions, font sizes, word limits)",
      "High-resolution output (300 dpi, CMYK or RGB)",
      "Compliance with institutional and conference guidelines",
    ],
    optionalAddOns: [
      "Multi-language support",
      "QR code integration",
      "Additional revision cycle",
    ],
    turnaround: "5–7 business days",
  },
  {
    title: "Premium",
    icon: "/images/publication-support/responding-to-reviewers/pa-icons-.png",
    accentBarColor: "bg-[#78350f]",
    cardBgColor: "bg-[#d8be92]",
    idealFor:
      "Senior researchers, clinicians, and faculty presenting at global conferences such as ASCO, ADA, AHA, ESMO, or WHO scientific forums requiring regulatory-compliant and publication-quality poster design.",
    includes: [
      "Advanced poster design using Adobe tools",
      "Expert content restructuring and synthesis",
      "Data visualization with infographic elements",
      "Compliance with HIPAA, GDPR, and ICMJE (for clinical data)",
      "Custom icons, branding, and illustration support",
      "Scientific peer review + Language editing by native PhD editors",
      "Submission-ready and editable files (PDF, AI, PPT)",
    ],
    optionalAddOns: [
      "Drafting of a response letter for journal reviewers",
      "Language editing and technical proofreading",
    ],
    turnaround: "10 working days.",
  },
];

export default function PosterServicePackagesSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fdfbf7] py-6 px-4 md:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-3">
            Poster Preparation Service Packages
          </h2>
          <p className="text-gray-600 text-xs md:text-sm max-w-4xl mx-auto leading-relaxed">
            Choosing the appropriate package will guarantee your scientific
            poster is professionally formatted and ready for presentation.
            Whether you need a quick design adjustment or you need assistance
            organizing and designing all of your content, Pubrica has custom{" "}
            <a
              href="https://pubrica.com/academy/poster-preparation/slide-deck-preparation-for-conference-presentations/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0284c7] hover:underline font-medium"
            >
              poster preparation
            </a>{" "}
            packages based on different levels of complexity and conference
            requirements.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-t-sm shadow-sm overflow-hidden"
            >
              {/* Colored Top Accent Bar */}
              <div className={`h-2.5 w-full ${pkg.accentBarColor}`}></div>

              {/* Card Header (White Background) */}
              <div className="bg-white p-4 border-x border-t border-gray-200 flex items-center space-x-3">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <Image
                    src={pkg.icon}
                    alt={`${pkg.title} package icon`}
                    fill
                    sizes="48px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-[9px] font-semibold tracking-wider text-gray-500 uppercase">
                    HIGH-END PUBLICATION SUPPORT + RAPID TECHNICAL REVIEW
                  </p>
                </div>
              </div>

              {/* Card Body (Colored Background) */}
              <div
                className={`flex-1 ${pkg.cardBgColor} p-4 border-x border-b border-gray-300 text-gray-900 flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-4 text-xs">
                  {/* Ideal for */}
                  <div className="flex items-start space-x-2">
                    <span className="mt-0.5 text-black">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 8H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-bold block mb-0.5">Ideal for:</span>
                      <p className="leading-snug text-gray-800">
                        {pkg.idealFor}
                      </p>
                    </div>
                  </div>

                  {/* Includes */}
                  <div className="flex items-start space-x-2">
                    <span className="mt-0.5 text-black">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 8H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div className="w-full">
                      <span className="font-bold block mb-1">Includes:</span>
                      <ul className="space-y-2 text-gray-800 leading-snug">
                        {pkg.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Optional Add-ons */}
                  <div className="flex items-start space-x-2 pt-1">
                    <span className="mt-0.5 text-black">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 8H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <div>
                      <span className="font-bold block mb-0.5">
                        Optional Add-ons:
                      </span>
                      <ul className="space-y-1 text-gray-800 leading-snug">
                        {pkg.optionalAddOns.map((addon, i) => (
                          <li key={i}>{addon}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-start space-x-2 pt-3 border-t border-black/10 text-xs">
                  <span className="mt-0.5 text-black">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L10.586 8H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div>
                    <span className="font-bold block">Turnaround:</span>
                    <span className="text-gray-900 font-medium">
                      {pkg.turnaround}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-10 text-center">
          <GetFreeQuoteButton />
        </div>

        {/* Accordions Section */}
        <div className="border border-gray-300 rounded-sm bg-white overflow-hidden shadow-sm">
          {/* Accordion 1: Scientific & Academic Poster Design Table */}
          <div className="border-b border-gray-200">
            <button
              type="button"
              onClick={() => toggleAccordion(1)}
              className="w-full flex items-center justify-between p-4 bg-white text-left text-sm md:text-base font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span>
                Scientific &amp; Academic Poster Design – How We Deliver
                High-Impact Posters
              </span>
              <span className="text-xl font-bold ml-2">
                {openAccordion === 1 ? "−" : "+"}
              </span>
            </button>

            {openAccordion === 1 && (
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="overflow-x-auto border border-gray-300 rounded-sm">
                  <table className="w-full text-left text-xs text-gray-800 border-collapse">
                    <thead>
                      <tr className="bg-[#124e43] text-white font-bold">
                        <th className="p-3 border-r border-gray-600 w-1/5 text-center">
                          Service Type
                        </th>
                        <th className="p-3 border-r border-gray-600 w-1/4 text-center">
                          Ideal For
                        </th>
                        <th className="p-3 border-r border-gray-600 w-2/5 text-center">
                          Key Features
                        </th>
                        <th className="p-3 text-center w-1/6">
                          Turnaround Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-white">
                        <td className="p-3 border-r border-gray-200 font-medium text-center">
                          Conference Poster Design
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Researchers presenting at conferences
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          High-resolution, visually compelling posters tailored
                          to conference specifications (IEEE, APA, Elsevier,
                          etc.)
                        </td>
                        <td className="p-3 text-center">3–5 business days</td>
                      </tr>
                      <tr className="bg-[#eaf3f2]">
                        <td className="p-3 border-r border-gray-200 font-medium text-center">
                          Graphical Abstract &amp; Infographics
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Authors submitting to journals
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Visually structured abstracts with data visualization
                          for effective research communication
                        </td>
                        <td className="p-3 text-center">4–6 business days</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 border-r border-gray-200 font-medium text-center">
                          Medical &amp; Scientific Posters
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Life sciences, pharmaceutical, and clinical
                          researchers
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          HIPAA-compliant visuals with professional scientific
                          illustrations and custom layouts
                        </td>
                        <td className="p-3 text-center">4–7 business days</td>
                      </tr>
                      <tr className="bg-[#eaf3f2]">
                        <td className="p-3 border-r border-gray-200 font-medium text-center">
                          Business &amp; Industry Posters
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Corporate R&amp;D teams and industry researchers
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Industry-standard formatting with infographic-style
                          presentation for technical data
                        </td>
                        <td className="p-3 text-center">5–7 business days</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-3 border-r border-gray-200 font-medium text-center">
                          Custom Illustrations &amp; Diagrams
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Researchers needing tailored visual content
                        </td>
                        <td className="p-3 border-r border-gray-200 text-center">
                          Hand-drawn and vector-based scientific diagrams,
                          formatted to fit publication or poster specs
                        </td>
                        <td className="p-3 text-center">5–10 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 2: Pricing and Turnaround Time */}
          <div>
            <button
              type="button"
              onClick={() => toggleAccordion(2)}
              className="w-full flex items-center justify-between p-4 bg-white text-left text-sm md:text-base font-bold text-gray-900 hover:bg-gray-50 transition-colors"
            >
              <span>Pricing and Turnaround Time</span>
              <span className="text-xl font-bold ml-2">
                {openAccordion === 2 ? "−" : "+"}
              </span>
            </button>

            {openAccordion === 2 && (
              <div className="p-6 bg-white border-t border-gray-100 flex flex-col items-center">
                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                  {/* Card 1 */}
                  <div className="bg-[#d2d6d6] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xs min-h-[160px]">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Starting Price
                    </h4>
                    <p className="text-sm text-gray-800 font-medium">
                      $ 80 (Basic Poster)
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-[#d2d6d6] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xs min-h-[160px]">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Standard Delivery
                    </h4>
                    <p className="text-sm text-gray-800 font-medium">
                      $ 250 (Advanced Scientific Poster with Illustrations and
                      Infographics )
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-[#d2d6d6] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-xs min-h-[160px]">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Express Delivery
                    </h4>
                    <p className="text-sm text-gray-800 font-medium">
                      3 Days – 10 Days (Depending upon Complexity)
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <Link
                  href="/services/publication-support/poster-preparation"
                  className="bg-[#0b2b23] hover:bg-[#124e43] text-white text-sm font-semibold py-3 px-8 rounded-full transition-colors inline-block"
                >
                  Check Pricing &amp; Get a Quote
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}