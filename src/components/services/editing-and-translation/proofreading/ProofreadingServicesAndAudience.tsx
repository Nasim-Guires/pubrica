"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ==========================================
// 1. DATA TYPES & DATA FOR "OUR SERVICES"
// ==========================================
interface ServiceCard {
  id: string;
  iconSrc: string;
  title: string;
  description: string;
  highlightText?: string;
  linkUrl?: string;
  afterHighlight?: string;
}

const servicesData: ServiceCard[] = [
  {
    id: "scientific-editing",
    iconSrc:
      "/images/editing-and-translation/proofreading/Scientific-Editing.webp",
    title: "Scientific Editing",
    description:
      "Enhance your academic documents with our journal manuscript proofreading and editing expertise, ensuring clarity and submission readiness. Trusted by researchers worldwide to meet the standards of high-impact journals.",
  },
  {
    id: "manuscript-editing",
    iconSrc:
      "/images/editing-and-translation/proofreading/Manuscript-Editing.webp",
    title: "Manuscript Editing",
    description:
      "Enhance your academic and scientific manuscripts with Pubrica’s professional Editing Service—clear, concise, and submission-ready. Ideal for ESL authors aiming for clarity, precision, and global recognition.",
    highlightText: "manuscripts",
    linkUrl: "/services/editing-and-translation/manuscript-editing", // Replace with specific URL
    afterHighlight: " with Pubrica's professional Editing",
  },
  {
    id: "book-editing",
    iconSrc: "/images/editing-and-translation/proofreading/Book-Editing.webp",
    title: "Book Editing",
    description:
      "Perfect your academic or professional book manuscript with Pubrica’s Book Editing Service, tailored to achieve excellence and readability. Designed for authors who want engaging, error-free, and publisher-ready books.",
    highlightText: "Book Editing",
    linkUrl: "/services/editing-and-translation/book-editing", // Replace with specific URL
    afterHighlight: " Service,",
  },
  {
    id: "post-editing",
    iconSrc: "/images/editing-and-translation/proofreading/Post-Editing.webp",
    title: "Post Editing",
    description:
      "Refine and polish machine-translated documents with Pubrica’s Post-Editing Service, ensuring fluency, accuracy, and natural readability. Preferred by institutions and corporates for flawless, human-quality translations.",
    highlightText: "Post-Editing",
    linkUrl: "/services/editing-and-translation/book-editing", // Replace with specific URL
    afterHighlight: " Service, ensuring fluency,",
  },
  {
    id: "thesis-editing",
    iconSrc: "/images/editing-and-translation/proofreading/Thesis-Editing.webp",
    title: "Thesis Editing",
    description:
      "Specialised thesis proofreading service to meet academic excellence and global standards. Perfect for graduate and doctoral students aiming for top academic standards.",
    highlightText: "thesis proofreading service",
    linkUrl: "/services/editing-and-translation/thesis-editing", // Replace with specific URL
    afterHighlight: " to meet academic excellence and global standards.",
  },
  {
    id: "translation-editing",
    iconSrc:
      "/images/editing-and-translation/proofreading/Translation-with-Editing.webp",
    title: "Translation with Editing",
    description:
      "Achieve accurate, culturally adapted translations with Pubrica’s Translation + Editing Services, where precision meets publication quality. Ensuring your research is understood, accepted, and impactful across languages.",
    highlightText: "Translation + Editing Services",
    linkUrl: "/services/editing-and-translation/translation-with-editing", // Replace with specific URL
    afterHighlight: ", where",
  },
  {
    id: "grant-business-editing",
    iconSrc:
      "/images/editing-and-translation/proofreading/Grant-Business-Document-Editing.webp",
    title: "Grant & Business Document Editing",
    description:
      "Tailoring and polishing CVs, resumes, and application letters to make a strong professional impression.",
  },
  {
    id: "resume-cv-editing",
    iconSrc:
      "/images/editing-and-translation/proofreading/Resume_CV-Application-Editing.webp",
    title: "Resume/CV & Application Editing",
    description:
      "Tailoring and polishing CVs, resumes, and application letters to make a strong professional",
  },
];

// ==========================================
// 2. DATA TYPES & DATA FOR "WHO WE SERVE"
// ==========================================
interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const audienceData: AudienceCard[] = [
  {
    id: "researchers",
    title: "Researchers & Academics",
    description:
      "Experts in research paper proofreading and journal article proofreading service.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Researchers-Academics-1.webp",
  },
  {
    id: "healthcare",
    title: "Professionals in Healthcare & Life Sciences",
    description:
      "Accurate medical proofreading services and medical manuscript proofreading service.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Professionals-in-Healthcare-Life-Sciences.webp",
  },
  {
    id: "organizations",
    title: "Organisations, Businesses, & Corporations",
    description:
      "Perfect reports, presentations, and corporate communications across cultures.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Organisations-Businesses-Corporations.webp",
  },
  {
    id: "publishers",
    title: "Publishing Houses & Writers",
    description:
      "Submit manuscripts for publication that are free from errors.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Publishing-Houses-Writers.webp",
  },
  {
    id: "students",
    title: "Students & Educational Institutions",
    description:
      "Polish theses, essays, dissertations, and other academic writings.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Students-Educational-Institutions.webp",
  },
  {
    id: "government",
    title: "Governments & NGOs",
    description:
      "Clear, accurate, and culturally appropriate documentation for government bodies.",
    imageSrc:
      "/images/editing-and-translation/proofreading/Governments-NGOs.webp",
  },
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function PubricaServicesAndAudience() {
  // Active hovered card index for "Who We Serve"
  const [activeAudienceId, setActiveAudienceId] =
    useState<string>("researchers");

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8 space-y-20">
      {/* SECTION 1: OUR SERVICES */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Our Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-4xl">
            At Pubrica, we offer comprehensive Manuscript Proofreading Services
            that can help you polish your writing from start to finish. Our
            experts will make sure your writing is clear, consistent, and ready
            for publication.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-md p-5 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-12 h-12 bg-slate-100/80 rounded-md flex items-center justify-center overflow-hidden p-1.5">
                  <Image
                    src={service.iconSrc}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {service.title}
                </h3>

                {/* Description with Vertical Accent Line */}
                <div className="relative pl-3 border-l-2 border-slate-800 text-xs text-slate-600 leading-relaxed min-h-[60px]">
                  <span>{service.description}</span>
                  {service.highlightText && service.linkUrl && (
                    <Link
                      href={service.linkUrl}
                      className="text-sky-600 font-medium hover:underline cursor-pointer inline"
                    >
                      {" "}
                      {service.highlightText}
                    </Link>
                  )}
                  {service.afterHighlight && (
                    <span>{service.afterHighlight}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: WHO WE SERVE */}
      <section className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
            Who We Serve
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our Proofreading Services are aimed at a wide array of clients
            looking for perfection in their texts.
          </p>
        </div>

        {/* 3x2 Interactive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => {
            const isActive = activeAudienceId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveAudienceId(item.id)}
                className="relative h-64 rounded-xs overflow-hidden shadow-md cursor-pointer transition-all duration-300 group border border-slate-200"
              >
                {/* Condition A: Active State (Black Solid Background with Text) */}
                {isActive ? (
                  <div className="absolute inset-0 bg-black text-white p-6 flex flex-col justify-start space-y-4 transition-opacity duration-300">
                    <h3 className="font-bold text-base sm:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  /* Condition B: Default State (Full Image with Bottom Gradient Overlay) */
                  <div className="relative w-full h-full">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Dark gradient overlay for bottom text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                      <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}