import React from 'react';
import Image from 'next/image';

const whoWeServeData = [
  {
    title: "Pharmaceutical & Biotech Companies",
    bullets: [
      "Slide decks and training kits for medical liaisons and HCP engagement",
      "CME-ready content for physician education and post-marketing programs",
      "Research-focused content for publication and clinical trial education"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Pharmaceutical-Biotech-Companies-1.jpg"
  },
  {
    title: "Medical Device & Diagnostics Companies",
    bullets: [
      "Clinical training materials on device usage, safety, and compliance",
      "Educational slide decks on diagnostics, imaging tools, and surgical instruments",
      "Content for product onboarding, clinical demonstrations, and KOL education"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Medical-Device-Diagnostics-Companies.jpg"
  },
  {
    title: "Hospitals, Health Systems & Medical Institutions",
    bullets: [
      "Department or specialty-specific in-house clinical education content",
      "Resources for residency programs, continuing professional development, and guideline updates",
      "Dedicated customized resources to facilitate simulation-based or case-based learning"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Hospitals-Health-Systems-Medical-Institutions.jpg"
  },
  {
    title: "Academic & Research Institutions",
    bullets: [
      "Research methodology and publication training materials",
      "Slide decks and learning guides for workshops and academic lectures",
      "Support for grant-funded training programs and conference content"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Academic-Research-Institutions.jpg"
  },
  {
    title: "Healthcare Communication & CME Providers",
    bullets: [
      "Co-branded or white-labelled educational content for physicians",
      "CME-accredited module content aligned with global standards",
      "Case studies, clinical guideline interpretation, and EBM workshops"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Healthcare-Communication-CME-Providers.jpg"
  },
  {
    title: "Nutraceutical & Life Sciences Companies",
    bullets: [
      "Clinician education materials on supplements, formulations, and clinical research evidence",
      "Slide decks on therapeutic benefits, pharmacokinetics, and safety",
      "Literature-based content for integrative and functional medicine training"
    ],
    imageUrl: "/images/physician-writing-services/physician-training/Nutraceutical-Life-Sciences-Companies.jpg"
  }
];

export default function WhoWeServeSection() {
  return (
    <section className="py-7 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Pubrica collaborates with diverse healthcare and life sciences organizations to create tailored, evidence-based physician training content. Clients turn to Pubrica for high-quality educational resources for internal training, CME, clinical research, and scientific communication.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServeData.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded-sm overflow-hidden bg-black cursor-pointer shadow-md transition-all duration-300"
            >
              {/* Image (Visible by default, vanishes completely on hover) */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-0">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Dark gradient shadow over lower image section for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Default Title State (At bottom left of image) */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0 flex items-end">
                <h3 className="font-bold text-sm sm:text-base text-white leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Hover Solid Black Overlay with Title + Bullets (Hidden by default, fades in on hover) */}
              <div className="absolute inset-0 bg-black p-5 sm:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-start space-y-3">
                <h3 className="font-bold text-sm sm:text-base text-white border-b border-gray-800 pb-2">
                  {card.title}
                </h3>
                <ul className="space-y-2 text-xs text-gray-300 leading-relaxed">
                  {card.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-white font-bold leading-none mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}