"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function PatientEducationPackagesAndPricing() {
  const packages = [
    {
      name: "Basic",
      subtitle: "Ideal For First-Time Authors",
      badgeColor: "bg-[#e2e8f0] text-[#0c2e3a]",
      headerBg: "bg-[#d8e2e2]",
      cardBg: "bg-[#e8efef]",
      textColor: "text-slate-800",
      idealFor: [
        "Clinics, diagnostic centres, and small healthcare providers needing essential patient education materials.",
      ],
      includes: [
        "1 condition-specific educational leaflet (up to 500 words)",
        "Basic medication usage guide",
        "Lifestyle tips and prevention checklist",
        "One language only",
        "Single design template (PDF format)",
        "Clinical accuracy review by a medical writer",
      ],
      optionalAddOns: [
        "Infographic (static)",
        "Additional language translation",
        "Branding with the clinic logo",
      ],
      turnaround: "3–5 business days",
    },
    {
      name: "Standard",
      subtitle: "For Mid-Tier Or Indexed Journals",
      badgeColor: "bg-[#d1c4e9] text-[#4a148c]",
      headerBg: "bg-[#d1c4e9]/60",
      cardBg: "bg-[#e9e3f4]",
      textColor: "text-slate-800",
      idealFor: [
        "Hospitals, specialty care providers, and wellness centres delivering moderate patient volumes.",
      ],
      includes: [
        "Up to 3 patient education materials (conditions/procedures/medications)",
        "Treatment and discharge instruction content",
        "Visual formatting for brochures and posters",
        "Multilingual support (2 languages)",
        "Clinical and health literacy review",
        "One revision cycle",
      ],
      optionalAddOns: [
        "Audio voice-over content",
        "Custom print-ready brochure design",
        "Video storyboard (non-animated)",
      ],
      turnaround: "5–7 business days",
    },
    {
      name: "Premium",
      subtitle: "Comprehensive & Premium",
      badgeColor: "bg-[#d4b996] text-[#3e2723]",
      headerBg: "bg-[#d4b996]/60",
      cardBg: "bg-[#ebdcd0]",
      textColor: "text-slate-800",
      idealFor: [
        "Multispecialty hospitals, pharma companies, public health organizations, and healthcare startups focused on scalable, high-impact patient communication.",
      ],
      includes: [
        "Up to 6 tailored patient education content units (condition, treatment, medication, lifestyle)",
        "Multilingual delivery (up to 3 languages)",
        "Visual aids (charts, checklists) integrated into content",
        "Fully customized layout (digital & print)",
        "Compliance with global standards (CDC, WHO, NICE)",
        "Two feedback and revision cycles",
        "Integration-ready format for web/apps",
      ],
      optionalAddOns: [
        "Animated explainer videos",
        "Interactive e-brochures",
        "Infographics + QR-enabled access",
        "App integration support",
      ],
      turnaround: "7–10 business days",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* --- Section 1: Hero Banner --- */}
      <section
        aria-label="Speed up your Patient Education Content Development"
        className="bg-[#0c2e3a] py-12 px-4 sm:px-6 lg:px-8 text-white"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Badge / Icon */}
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 shrink-0">
              <Image
                src="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
                alt="100% Satisfaction Guarantee Badge"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Speed up your Patient Education Content Development with Pubrica
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                For Pubrica&apos;s{" "}
                <Link href="/services/physician-writing-services/patient-education-content" className="text-sky-300 hover:underline">
                  patient education content
                </Link>{" "}
                development services: Acquire personalized assistance navigating
                intricate patient education content creation, ensuring clarity
                and effectiveness in conveying crucial medical information.
              </p>
            </div>
          </div>

          {/* Right Button */}
          <div className="shrink-0">
            <GetFreeQuoteButton/>
          </div>
        </div>
      </section>

      {/* --- Section 2: Why Choose Pubrica --- */}
      <section
        aria-label="Why Choose Pubrica for Patient Education Content Service"
        className="bg-white py-14 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
              Why Choose Pubrica for Patient Education Content Service?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-5xl">
              Pubrica offers medically accurate, guideline-compliant{" "}
              <Link href="/services/physician-writing-services/patient-education-content" className="text-[#0a66bc] hover:underline">
                patient education content
              </Link>{" "}
              developed by healthcare experts, optimized for comprehension, and
              tailored to meet global regulatory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Bullet Points */}
            <div className="lg:col-span-7 space-y-6 text-slate-800">
              <div className="space-y-1">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Healthcare Expert Team:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4">
                  Skilled team of licensed Clinicians with advanced degrees,
                  medical writers, medical editors, certified medical
                  illustrators, multi-media production staff, project managers,
                  medical authors, editors, PhDs, and certified medical writers
                  with subject matter expertise across 30+ therapeutic areas.
                  Our medical writers are experienced in developing patient
                  education materials for professional organizations, hospitals,
                  health systems, and private organizations.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Literacy-Level Optimization:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4">
                  Content developed for low health literacy populations using
                  SMOG, Flesch-Kincaid, and PEMAT metrics.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Evidence-Based Development:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4">
                  Adherence to clinical guidelines (CDC, WHO, NICE) and
                  peer-reviewed references.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Regulatory-Ready:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4">
                  Content structured to comply with US FDA, EMA, MHRA, or Indian
                  CDSCO standards for patient-facing information.
                </p>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Custom Delivery:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed pl-4">
                  Single or bulk project support with full-service visual
                  design, branding, and multilingual production.
                </p>
              </div>
            </div>

            {/* Right: Team / Regulatory Image Collage */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src="/images/physician-writing-services/patient-education-content/Why-Choose-Pubrica-for-Patient-Education-Content-Service.jpg"
                  alt="Medical team reviewing regulatory compliance documentation"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Sample Work & Report Download Callout --- */}
      <section
        aria-label="Patient Education Content Service Sample Work"
        className="bg-[#f2fcf7] py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-200"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-sm bg-slate-100">
            <Image
              src="/images/physician-writing-services/patient-education-content/Patient-Education-Content-Service-Sample-Work.jpg"
              alt="Doctor writing medical report and documentation"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c2e3a]">
                Patient Education Content Service Sample Work
              </h3>
              <div>
                <Link
                  href="/insights/sample-work"
                  className="inline-block bg-black hover:bg-neutral-800 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm sm:text-base shadow-sm"
                >
                  Discover More
                </Link>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c2e3a]">
                Download the full Report Now
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Explore our{" "}
                <Link href="/services/physician-writing-services/patient-education-content" className="text-[#0a66bc] hover:underline">
                  patient education content samples
                </Link>
                , designed for clinical accuracy, health literacy, and ready use
                in patient care settings.
              </p>
              <div>
                <Link
                  href="/insights/sample-work"
                  className="inline-block bg-black hover:bg-neutral-800 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm sm:text-base shadow-sm"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Patient Education Packages (Pricing Table) --- */}
      <section
        aria-label="Patient Education Packages"
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
              Patient Education Content Packages
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              With a comprehensive package of services, healthcare professionals
              can be assisted with developing patient educational materials that
              are clinically accurate, culturally appropriate, and aligned with
              current health literacy standards.
            </p>
          </div>

          {/* 3-Column Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`flex flex-col rounded-sm border border-slate-300 shadow-sm overflow-hidden ${pkg.cardBg}`}
              >
                {/* Header Block */}
                <div
                  className={`p-6 border-b border-slate-300 ${pkg.headerBg} space-y-3`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#0c2e3a]">
                      {pkg.name}
                    </h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}
                    >
                      {pkg.name}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700">
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6 text-sm text-slate-800">
                  <div className="space-y-6">
                    {/* Ideal For */}
                    <div className="space-y-2">
                      <p className="font-bold text-[#0c2e3a] flex items-center gap-2">
                        <span>➔</span> Ideal for:
                      </p>
                      <ul className="space-y-1 pl-5 list-disc text-slate-700">
                        {pkg.idealFor.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Includes */}
                    <div className="space-y-2">
                      <p className="font-bold text-[#0c2e3a] flex items-center gap-2">
                        <span>➔</span> Includes:
                      </p>
                      <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                        {pkg.includes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Optional Add-ons */}
                    <div className="space-y-2">
                      <p className="font-bold text-[#0c2e3a] flex items-center gap-2">
                        <span>➔</span> Optional Add-ons:
                      </p>
                      <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                        {pkg.optionalAddOns.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Turnaround Footer */}
                  <div className="pt-4 border-t border-slate-300/60">
                    <p className="font-bold text-[#0c2e3a] flex items-center gap-2">
                      <span>➔</span> Turnaround:
                    </p>
                    <p className="pl-5 text-slate-700 font-medium pt-1">
                      {pkg.turnaround}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Get a Free Quote Button */}
          <div className="flex justify-center pt-6">
            <GetFreeQuoteButton/>
          </div>
        </div>
      </section>
    </div>
  );
}
