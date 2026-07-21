"use client";

import React, { useState } from "react";
import Image from "next/image";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface ServiceOffer {
  id: number;
  title: string;
  description: string;
}

const offersData: ServiceOffer[] = [
  {
    id: 1,
    title: "Curriculum Design & Development",
    description:
      "Designing structured, outcome-based curricula tailored to academic standards, institutional goals, and diverse learner demographics.",
  },
  {
    id: 2,
    title: "Instructional Content Creation",
    description:
      "Developing engaging textbooks, lecture modules, assessment tools, e-learning scripts, and interactive study guides.",
  },
  {
    id: 3,
    title: "Multimedia Learning Resources",
    description:
      "Crafting rich media solutions including instructional videos, infographics, animations, podcasts, and interactive simulations.",
  },
  {
    id: 4,
    title: "Research-Based Academic Content",
    description:
      "Synthesizing complex scientific and clinical research into digestible, authoritative educational modules for higher education and healthcare.",
  },
  {
    id: 5,
    title: "Customized Corporate Training Modules",
    description:
      "Building scalable continuous professional development (CPD) and workplace training programs aligned with industry competencies.",
  },
];

interface TargetAudience {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

const whoWeServeData: TargetAudience[] = [
  {
    id: "1",
    title: "Universities & Colleges",
    imageSrc: "/images/who-we-serve/universities.jpg",
    imageAlt: "University students studying together on laptops",
    description:
      "Empowering higher education institutions with accredited curriculum design, courseware development, and faculty support resources.",
  },
  {
    id: "2",
    title: "Researchers & Academicians",
    imageSrc: "/images/who-we-serve/researchers.jpg",
    imageAlt: "Academic researcher focusing on data and scholarly content",
    description:
      "Developing scholarly content, training modules, and knowledge dissemination materials to aid in research visibility and academic excellence.",
  },
  {
    id: "3",
    title: "Medical & Healthcare Institutions",
    imageSrc: "/images/who-we-serve/medical.jpg",
    imageAlt:
      "Healthcare professionals discussing medical cases around a conference table",
    description:
      "Delivering evidence-based medical education, clinical training manuals, and accredited CME content for healthcare practitioners.",
  },
  {
    id: "4",
    title: "Publishers & EdTech Companies",
    imageSrc: "/images/who-we-serve/edtech.jpg",
    imageAlt: "EdTech professionals collaborating on digital education tools",
    description:
      "Partnering with educational publishers and digital platforms to produce interactive, digital-first learning content and LMS modules.",
  },
  {
    id: "5",
    title: "Nonprofits & NGOs in Education",
    imageSrc: "/images/who-we-serve/ngo.jpg",
    imageAlt: "Clipboard with NGO document and educational materials",
    description:
      "Creating accessible, high-impact educational toolkits and outreach programs tailored to community learning and global initiatives.",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function EducationalOfferingsAndAudience() {
  const [openOffer, setOpenOffer] = useState<number | null>(1);

  const toggleOffer = (id: number) => {
    setOpenOffer(openOffer === id ? null : id);
  };

  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Educational Content Development",
    provider: {
      "@type": "Organization",
      name: "Pubrica",
    },
    description:
      "End-to-end solutions for creating high-quality, engaging, and impactful educational content for universities, healthcare institutions, and EdTech platforms.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Content Offerings",
      itemListElement: offersData.map((offer, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer.title,
          description: offer.description,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto space-y-24">
        {/* ==========================================
            SECTION 1: WHAT WE OFFER
        ========================================== */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-8">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Overlapping Visual Graphics */}
            <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[380px] flex items-center justify-center">
              {/* Background circular accent */}
              <div className="absolute w-64 h-64 sm:w-72 sm:h-72 bg-gray-200/70 rounded-full left-4 top-2 -z-0" />

              {/* Top/Left Card Image */}
              <div className="absolute top-0 left-0 w-56 sm:w-64 h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white z-10">
                <Image
                  src="/images/what-we-offer-top.jpg"
                  alt="Team of professionals analyzing content on laptops"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom/Right Card Image */}
              <div className="absolute bottom-0 right-2 w-56 sm:w-64 h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg border-2 border-white z-20">
                <Image
                  src="/images/what-we-offer-bottom.jpg"
                  alt="Students reviewing educational materials together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Column: Narrative + Accordion List */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Our service is designed to provide end-to-end solutions for
                creating high-quality, engaging, and impactful educational
                content. Here’s what we bring to the table:
              </p>

              {/* Accordion List */}
              <div className="border-t border-[#0d3b44]/20 divide-y divide-[#0d3b44]/20">
                {offersData.map((item) => {
                  const isOpen = openOffer === item.id;
                  return (
                    <div key={item.id} className="py-3">
                      <button
                        onClick={() => toggleOffer(item.id)}
                        className="w-full flex items-center justify-between text-left py-1 group focus:outline-none"
                      >
                        <span className="text-xs sm:text-sm font-bold text-[#0d3b44] group-hover:text-teal-700 transition-colors">
                          <span className="mr-3 font-normal">+</span>
                          {item.title}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-2 text-xs sm:text-sm text-gray-600 pl-6 pr-2 leading-relaxed animate-fadeIn">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: WHO WE SERVE (WITH HOVER OVERLAYS)
        ========================================== */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-5xl mb-8">
            At Pubrica, we collaborate with a diverse range of stakeholders in
            academia, research, and professional training to create impactful,
            learner-centric educational content. Our solutions are tailored to
            meet the unique needs of institutions, educators, researchers, and
            businesses across the education and life sciences spectrum.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeServeData.map((card) => (
              <div
                key={card.id}
                className="group relative h-64 sm:h-72 rounded-sm overflow-hidden shadow-md cursor-pointer bg-slate-900"
              >
                {/* Background Image */}
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default Static Overlay (Bottom Gradient with Title) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                </div>

                {/* Hover Full Black Overlay Effect */}
                <div className="absolute inset-0 bg-black/95 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <h3 className="text-sm sm:text-base font-bold text-white mb-3 tracking-wide border-b border-gray-700 pb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ==========================================
          SECTION 3: FULL-WIDTH CTA BANNER
      ========================================== */}
      <section className="w-full bg-[#051f18] text-white py-14 px-4 sm:px-6 lg:px-8 mt-20 border-t border-emerald-950">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            Speed up your Educational Content Development with Pubrica
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed max-w-4xl mx-auto">
            “Pubrica’s Educational Content Development Service provides a
            detailed roadmap to help you pinpoint the ideal platform for your
            manuscript. Our thorough assessment considers various factors,
            including subject coverage, academic influence, and publication
            requirements. We tailor our recommendations to match your paper’s
            distinct qualities and your preferences, ensuring you submit your
            educational materials to the most suitable outlets for optimal
            dissemination and impact.”
          </p>
        </div>
      </section>
    </div>
  );
}
