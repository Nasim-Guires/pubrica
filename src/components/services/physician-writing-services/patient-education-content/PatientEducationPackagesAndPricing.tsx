"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import ServiceBanner from "@/components/common/ServiceBanner";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

export default function PatientEducationPackagesAndPricing() {
  const packages: PackageItem[] = [
    {
      icon: "/images/icons/Basic.webp",
      title: "Basic",
      subtitle: "Ideal For First-Time Authors",
      idealFor:
        "Clinics, diagnostic centres, and small healthcare providers needing essential patient education materials.",
      includes: [
        "1 condition-specific educational leaflet (up to 500 words)",
        "Basic medication usage guide",
        "Lifestyle tips and prevention checklist",
        "One language only",
        "Single design template (PDF format)",
        "Clinical accuracy review by a medical writer",
      ],
      addOns: [
        "Infographic (static)",
        "Additional language translation",
        "Branding with the clinic logo",
      ],
      turnaround: "3–5 business days",
      cardBgColor: "#cbd8d6",
      titleColor: "#004b5a",
    },
    {
      icon: "/images/icons/S.png",
      title: "Standard",
      subtitle: "For Mid-Tier Or Indexed Journals",
      idealFor:
        "Hospitals, specialty care providers, and wellness centres delivering moderate patient volumes.",
      includes: [
        "Up to 3 patient education materials (conditions/procedures/medications)",
        "Treatment and discharge instruction content",
        "Visual formatting for brochures and posters",
        "Multilingual support (2 languages)",
        "Clinical and health literacy review",
        "One revision cycle",
      ],
      addOns: [
        "Audio voice-over content",
        "Custom print-ready brochure design",
        "Video storyboard (non-animated)",
      ],
      turnaround: "5–7 business days",
      cardBgColor: "#d8c4e2",
      titleColor: "#6b2d82",
    },
    {
      icon: "/images/icons/pa-icons-.png",
      title: "Premium",
      subtitle: "Comprehensive & Premium",
      idealFor:
        "Multispecialty hospitals, pharma companies, public health organizations, and healthcare startups focused on scalable, high-impact patient communication.",
      includes: [
        "Up to 6 tailored patient education content units (condition, treatment, medication, lifestyle)",
        "Multilingual delivery (up to 3 languages)",
        "Visual aids (charts, checklists) integrated into content",
        "Fully customized layout (digital & print)",
        "Compliance with global standards (CDC, WHO, NICE)",
        "Two feedback and revision cycles",
        "Integration-ready format for web/apps",
      ],
      addOns: [
        "Animated explainer videos",
        "Interactive e-brochures",
        "Infographics + QR-enabled access",
        "App integration support",
      ],
      turnaround: "7–10 business days",
      cardBgColor: "#d5bc8d",
      titleColor: "#805826",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* --- Section 1: Hero Banner --- */}
      <ServiceBanner
        imageSrc="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee Badge"
        heading="Speed up your Patient Education Content Development with Pubrica"
        description={
          <>
            For Pubrica&apos;s{" "}
            <Link
              href="/academy/patient-education/improve-health-literacy-medical-communications/"
              className="text-blue-600"
            >
              patient education content
            </Link>{" "}
            development services: Acquire personalized assistance navigating
            intricate patient education content creation, ensuring clarity and
            effectiveness in conveying crucial medical information.
          </>
        }
        showQuoteButton={true}
      />

      {/* --- Section 2: Why Choose Pubrica --- */}
      <section
        aria-label="Why Choose Pubrica for Patient Education Content Service"
        className="bg-white py-3 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto space-y-3">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
              Why Choose Pubrica for Patient Education Content Service?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-snug max-w-5xl">
              Pubrica offers medically accurate, guideline-compliant{" "}
              <Link href="/insights/sample-work/diabetic-foot-ulcer/" className="text-blue-600">
                patient education content
              </Link>{" "}
              developed by healthcare experts, optimized for comprehension, and
              tailored to meet global regulatory standards.
            </p>
          </div>

          {/* Adjust grid split: lg:grid-cols-12 and lg:col-span-8/4 to narrow image side */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Bullet Points (Wider: col-span-8) */}
            <div className="lg:col-span-8 space-y-3 text-slate-800">
              <div className="space-y-0.5">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Healthcare Expert Team:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-snug pl-4">
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

              <div className="space-y-0.5">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Literacy-Level Optimization:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-snug pl-4">
                  Content developed for low health literacy populations using
                  SMOG, Flesch-Kincaid, and PEMAT metrics.
                </p>
              </div>

              <div className="space-y-0.5">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Evidence-Based Development:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-snug pl-4">
                  Adherence to clinical guidelines (CDC, WHO, NICE) and
                  peer-reviewed references.
                </p>
              </div>

              <div className="space-y-0.5">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Regulatory-Ready:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-snug pl-4">
                  Content structured to comply with US FDA,{" "}
                  <Link
                    href="https://www.ema.europa.eu/en/homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    EMA
                  </Link>
                  , MHRA, or Indian{" "}
                  <Link
                    href="https://cdsco.gov.in/opencms/opencms/en/Home/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    CDSCO
                  </Link>{" "}
                  standards for patient-facing information.
                </p>
              </div>

              <div className="space-y-0.5">
                <h3 className="font-bold text-red-700 text-base sm:text-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-700 inline-block"></span>
                  Custom Delivery:
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-snug pl-4">
                  Single or bulk project support with full-service visual
                  design, branding, and multilingual production.
                </p>
              </div>
            </div>

            {/* Right: Smaller Image Container (Narrrow: col-span-4) */}
            <div className="lg:col-span-4 relative flex justify-center items-start lg:mt-2">
              {/* Removed 'border', reduced min-height, set lower width */}
              <div className="relative w-[300px] h-[200px] lg:w-full lg:h-[250px] max-w-full rounded-md overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src="/images/physician-writing-services/patient-education-content/Why-Choose-Pubrica-for-Patient-Education-Content-Service.jpg"
                  alt="Medical team reviewing regulatory compliance documentation"
                  fill
                  sizes="(max-width: 1024px) 300px, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: Sample Work & Report Download Callout --- */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/physician-writing-services/patient-education-content/Patient-Education-Content-Service-Sample-Work.jpg",
          alt: "Doctor writing medical report and documentation",
          width: 600,
          height: 450,
        }}
        sections={[
          {
            heading: "Patient Education Content Service Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/gestational-diabetes-mellitus/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "patient education content samples",
                url: "/insights/sample-work/sleep-apnea/",
              },
              {
                text: ", designed for clinical accuracy, health literacy, and ready use in patient care settings.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />

      {/* --- Section 4: Patient Education Packages (Pricing Table) --- */}
      <section
        aria-label="Patient Education Packages"
        className="bg-white py-2 px-4 sm:px-6 lg:px-8" /* Minimal vertical padding */
      >
        <div className="max-w-7xl mx-auto space-y-2"> {/* Minimal overall component gap */}
          <div className="text-left space-y-1 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c] m-0">
              Patient Education Content Packages
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-snug m-0">
              With a comprehensive package of services, healthcare professionals
              can be assisted with developing patient educational materials that
              are clinically accurate, culturally appropriate, and aligned with
              current health literacy standards.
            </p>
          </div>

          {/* 3-Column Package Grid */}
          <div className="relative max-w-7xl mx-0 p-0 m-0">
            <CommonPackages packages={packages} />

            {/* Floating Centered CTA Button directly below cards */}
            <div className="mt-2 text-center">
              <GetFreeQuoteButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}