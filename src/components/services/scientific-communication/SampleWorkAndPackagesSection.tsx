"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface PackageCard {
  id: string;
  badge: string; // 'B', 'S', 'P'
  title: string;
  headerColor: string; // Header background/text highlight color
  cardBgColor: string; // Body background color
  idealFor: string;
  includes: string[];
  turnaroundTime: string;
}

const packagesData: PackageCard[] = [
  {
    id: "basic",
    badge: "B",
    title: "Basic",
    headerColor: "bg-amber-100 text-amber-800 border-amber-300",
    cardBgColor: "bg-[#cfd8d7]", // Soft grayish-teal
    idealFor:
      "Small-scale projects, conference abstracts, or short manuscripts.",
    includes: [
      "Review and editing of scientific content",
      "Formatting per journal/conference guidelines",
      "Basic reference management",
    ],
    turnaroundTime: "3–5 business days",
  },
  {
    id: "standard",
    badge: "S",
    title: "Standard",
    headerColor: "bg-sky-100 text-sky-800 border-sky-300",
    cardBgColor: "bg-[#d3c2dc]", // Soft purple/lavender
    idealFor:
      "Clinical study reports, full-length manuscripts, or regulatory documents.",
    includes: [
      "Comprehensive content development and editing",
      "Scientific accuracy verification and consistency checks",
      "Advanced reference management and citation formatting",
      "Figure and table review for clarity and compliance",
    ],
    turnaroundTime: "7–10 business days",
  },
  {
    id: "premium",
    badge: "P",
    title: "Premium",
    headerColor: "bg-blue-100 text-blue-800 border-blue-300",
    cardBgColor: "bg-[#d8be8d]", // Soft warm gold/khaki
    idealFor:
      "Multi-author, multi-section publications, high-impact journals, or regulatory submissions.",
    includes: [
      "End-to-end content development and scientific writing",
      "Critical review and expert editorial guidance",
      "Customized graphical abstracts, figures, and tables",
      "Formatting, reference management, and journal-specific submission support",
      "Compliance checks (ICMJE, GPP, CONSORT, PRISMA, or regulatory standards)",
    ],
    turnaroundTime: "10–15 business days",
  },
];

const addOnServices = [
  "Medical illustration and infographic creation",
  "Statistical review and data interpretation support",
  "Translation and multilingual editing",
  "Rapid-turnaround editing",
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function SampleWorkAndPackagesSection() {
  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* ==========================================
            SECTION 1: SAMPLE WORK BANNER
        ========================================== */}
        <section className="bg-[#f0fbf7] border border-emerald-100/60 rounded-lg p-6 md:p-10 shadow-sm flex flex-col md:flex-row items-center gap-8">
          {/* Left Image Column */}
          <div className="w-full md:w-5/12 relative h-64 md:h-80 rounded-md overflow-hidden shadow-md">
            <Image
              src="/images/sample-work-researchers.jpg" // Replace with your image path
              alt="Scientific research team analyzing data on tablet"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Text & CTA Column */}
          <div className="w-full md:w-7/12 flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">
                Scientific Medical Communication Sample Work
              </h2>
              <Link
                href="/sample-work"
                className="inline-block bg-black hover:bg-slate-800 text-white font-medium text-xs md:text-sm py-2 px-6 rounded-full transition-colors duration-200"
              >
                Discover More
              </Link>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                Explore our scientific medical communication sample work,
                crafted to meet stringent methodological standards, regulatory
                and journal-specific guidelines, and project timelines. We
                deliver accurate, clear, and publication-ready content that
                enhances academic, clinical, and medical research impact.
              </p>
              <Link
                href="/download-report"
                className="inline-block bg-black hover:bg-slate-800 text-white font-medium text-xs md:text-sm py-2 px-6 rounded-full transition-colors duration-200"
              >
                Discover More
              </Link>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: OUR PACKAGES
        ========================================== */}
        <section>
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3">
              Scientific Medical Communication Service – Our Packages
            </h2>
            <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-5xl">
              Pubrica’s Scientific Medical Communication services are designed
              to support researchers, clinicians, and healthcare organizations
              in delivering accurate, clear, and impactful scientific content.
              We offer tailored packages to meet different project requirements,
              ensuring compliance with global standards and publication
              readiness.
            </p>
          </div>

          {/* Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-10">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className="rounded-lg overflow-hidden shadow-md flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* White Top Header Bar */}
                <div className="bg-white p-4 flex items-center space-x-3 border-b border-gray-100">
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm ${pkg.headerColor}`}
                  >
                    {pkg.badge}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {pkg.title}
                  </h3>
                </div>

                {/* Main Card Body */}
                <div
                  className={`${pkg.cardBgColor} p-6 flex-1 flex flex-col justify-between text-slate-900`}
                >
                  <div className="space-y-5">
                    {/* Ideal For */}
                    <div className="flex items-start space-x-2">
                      <span className="font-bold text-slate-900 text-sm mt-0.5">
                        ➔
                      </span>
                      <p className="text-xs md:text-sm text-slate-800 leading-relaxed">
                        <strong className="font-bold text-slate-900">
                          Ideal For:
                        </strong>{" "}
                        {pkg.idealFor}
                      </p>
                    </div>

                    {/* Includes List */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="font-bold text-slate-900 text-sm">
                          ➔
                        </span>
                        <h4 className="font-bold text-slate-900 text-xs md:text-sm">
                          Includes:
                        </h4>
                      </div>
                      <ul className="space-y-2.5 pl-5">
                        {pkg.includes.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs md:text-sm text-slate-800 leading-snug list-disc"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Turnaround Time */}
                  <div className="pt-6 mt-6 border-t border-black/10 flex items-start space-x-2">
                    <span className="font-bold text-slate-900 text-sm">➔</span>
                    <p className="text-xs md:text-sm text-slate-900 font-semibold">
                      <strong className="font-bold">Turnaround time:</strong>{" "}
                      {pkg.turnaroundTime}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mb-14">
            <Link
              href="/get-quote"
              className="inline-block bg-[#a30000] hover:bg-[#800000] text-white font-bold text-sm md:text-base py-3 px-10 rounded-md transition-colors duration-200 shadow-md"
            >
              Get a Free quote
            </Link>
          </div>

          {/* ==========================================
              SECTION 3: ADD-ON SERVICES
          ========================================== */}
          <div className="pt-4">
            <h3 className="text-lg md:text-xl font-extrabold text-[#0d3b44] mb-4">
              Add-On Services (Optional)
            </h3>
            <ul className="space-y-2.5 pl-5">
              {addOnServices.map((addon, index) => (
                <li
                  key={index}
                  className="text-xs md:text-sm text-gray-700 leading-relaxed list-disc"
                >
                  {addon}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
