"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Data structure for Top Services Cards
interface ServiceCardData {
  title: string;
  linkText: string;
  href: string;
  description: string;
  borderColor: string;
}

const servicesData: ServiceCardData[] = [
  {
    title: "Continuing Medical Education (CME)",
    linkText: "Continuing medical education",
    href: "/services/continuing-medical-education-cme-content-development",
    description: " services to advance professional knowledge and skills.",
    borderColor: "border-l-amber-400",
  },
  {
    title: "Leadership Content & Editorial Design",
    linkText: "Leadership in content",
    href: "/services/data-analytics-machine-learning/thought-leadership-content-editorial-design",
    description: " and editorial design services for impactful communication.",
    borderColor: "border-l-purple-500",
  },
  {
    title: "Marketing Communication Content Development",
    linkText: "Expert marketing communication content development",
    href: "/services/marketing-communication-content-development-service",
    description: " services to amplify your message.",
    borderColor: "border-l-rose-400",
  },
];

// Data structure for "Who We Serve" Cards - Updated for hover description design
interface AudienceCardData {
  id: string;
  title: string;
  imageSrc: string; // All cards now require an image
  imageAlt: string;
  description: string; // All cards now require a hover description
}

const audienceData: AudienceCardData[] = [
  {
    id: "researchers",
    title: "Researchers & Academics",
    imageSrc: "/images/scientific-communication/Researchers-Academics.webp",
    imageAlt: "Researchers working with a microscope and scientific data",
    description:
      "Transforming complex data into clear, compliant publications for high-impact journals.",
  },
  {
    id: "pharma",
    title: "Pharmaceutical & Biotech Companies",
    imageSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Pharmaceutical-Biotech-Companies-1.webp",
    imageAlt: "Biotech researcher in lab mask and suit examining samples",
    description:
      "Developing regulatory documents, medical affairs content, and marketing materials.",
  },
  {
    id: "clinicians",
    title: "Clinicians & Healthcare Professionals",
    imageSrc: "/images/scientific-communication/Clinicians-Healthcare-Professionals.webp",
    imageAlt: "Doctor checking patient blood pressure with stethoscope",
    description:
      "Creating evidence-based CME materials and clinical practice summaries.",
  },
  {
    id: "med-device",
    title: "Medical Device & Diagnostics Companies",
    imageSrc: "/images/scientific-communication/Medical-Device-Diagnostics-Companies.webp",
    imageAlt: "Ultrasound diagnostic medical monitoring device",
    description:
      "Crafting user manuals, regulatory submissions, and white papers.",
  },
  {
    id: "marketing-teams",
    title: "Healthcare Marketing & Communication Teams",
    imageSrc: "/images/scientific-communication/Healthcare-Marketing-Communication-Teams.webp",
    imageAlt: "Healthcare team sitting in conference presentation room",
    description:
      "Generating engaging patient education content and multi-channel campaign assets.",
  },
  {
    id: "regulatory",
    title: "Regulatory Agencies & CROs",
    imageSrc: "/images/scientific-communication/Regulatory-Agencies-CROs.webp", // Placeholder image path
    imageAlt: "Close up of hand signing official medical regulatory documents",
    description:
      "Preparing structured, guideline-compliant clinical study reports, regulatory documentation, and safety narratives.",
  },
];

export default function ServicesAndAudienceSection() {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Scientific Medical Communication Services and Target Audiences",
    itemListElement: [
      ...servicesData.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.title,
          description: service.linkText + service.description,
          url: service.href,
        },
      })),
      ...audienceData.map((audience, index) => ({
        "@type": "ListItem",
        position: servicesData.length + index + 1,
        item: {
          "@type": "Audience",
          audienceType: audience.title,
          description: audience.description, // Schema now uses the descriptive text
        },
      })),
    ],
  };

  return (
    <section className="w-full bg-white text-slate-800 font-sans py-12 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      {/* Schema.org Injection for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SECTION 1: OUR SERVICES */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3">
          Our Services
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-5xl mb-8">
          We provide end-to-end support across the full spectrum of scientific
          communication services that transform complex research and clinical
          data into clear, accurate, and impactful content for researchers,
          healthcare professionals, regulators, and patients worldwide:
        </p>

        {/* 3 Top Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 border-l-[5px] ${card.borderColor} rounded-md p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer group`}
            >
              <h3 className="text-base font-bold text-slate-900 mb-4 group-hover:text-[#0d3b44] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                <Link
                  href={card.href}
                  className="text-sky-600 hover:underline font-medium"
                >
                  {card.linkText}
                </Link>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: WHO WE SERVE */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0d3b44] mb-3">
          Who We Serve
        </h2>
        <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-5xl mb-8">
          At Pubrica, our scientific medical communication services are designed
          to support a diverse range of stakeholders across the scientific,
          medical, and healthcare ecosystems. We bridge the gap between complex
          research data and impactful communication tailored for the right
          audience. We Serve:
        </p>

        {/* 6 Grid Cards with New Hover Description Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audienceData.map((card) => (
            <div
              key={card.id}
              className="relative rounded-sm overflow-hidden h-[240px] shadow-md group transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              {/* 1. Base Image Layer (Zoom effect on hover) */}
              <div className="relative w-full h-full">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>

              {/* 2. Initial State: Bottom Dark Gradient Title Banner */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-base font-bold text-white leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* 3. Hover State: Full Black Overlay with Description */}
              <div className="absolute inset-0 bg-black/85 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-white mb-3 text-sky-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-100 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3: CALL TO ACTION BANNER */}
      <div className="w-full bg-[#052b22] text-white rounded-sm py-10 px-6 text-center shadow-lg transition-transform duration-300 hover:scale-[1.01]">
        <h2 className="text-xl md:text-2xl font-extrabold tracking-tight mb-3 text-white">
          Accelerate Your Scientific Medical Communication with Pubrica
        </h2>
        <p className="text-xs md:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Receive expert support in translating complex medical and scientific
          data into clear, accurate, and impactful communication that engages
          the right audience and meets global standards.
        </p>
      </div>
    </section>
  );
}
