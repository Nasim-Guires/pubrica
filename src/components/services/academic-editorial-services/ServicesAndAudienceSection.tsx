"use client";

import Image from "next/image";
import React from "react";

// ==========================================
// TYPES & DATA
// ==========================================

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const audiencesData: AudienceCard[] = [
  {
    id: "researchers",
    title: "Researchers & Scientists",
    description:
      "We assist scholars across disciplines in polishing research manuscripts, grant proposals, and review articles to meet rigorous peer-review standards.",
    imageUrl: "/images/academic-editorial-services/Researchers-Scientists.png",
  },
  {
    id: "academicians",
    title: "Academicians & Educators",
    description:
      "We support faculty members, curriculum developers, and academic authors in refining textbooks, lecture materials, theses, dissertations, and educational resources, enhancing readability and pedagogical impact.",
    imageUrl: "/images/academic-editorial-services/Academicians-Educators.png",
  },
  {
    id: "healthcare",
    title: "Medical & Healthcare Professionals",
    description:
      "Our medical editors refine clinical trial reports, systematic reviews, case studies, and healthcare manuscripts to ensure precision and compliance.",
    imageUrl:
      "/images/academic-editorial-services/Medical-Healthcare-Professionals.png",
  },
  {
    id: "institutions",
    title: "Institutions & Organizations",
    description:
      "We partner with universities, research centers, and academic societies to deliver high-quality institutional editing and publishing support.",
    imageUrl: "/images/academic-editorial-services/Institutions-Organizations.png",
  },
  {
    id: "international-authors",
    title: "Multilingual & International Authors",
    description:
      "We empower non-native English scholars to eliminate language barriers and present their findings clearly for top-tier international journals.",
    imageUrl:
      "/images/academic-editorial-services/Multilingual-International-Authors.png",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function WhoWeServeSection() {
  return (
    <section className="w-full bg-[#f8fafc] text-slate-800 font-sans py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
            At Pubrica, our{" "}
            <a href="#" className="text-sky-600 hover:underline font-medium">
              Academic Editorial Services
            </a>{" "}
            cater to a diverse spectrum of researchers, educators, and
            institutions, ensuring clarity, precision, and publication readiness
            for every manuscript. We serve:
          </p>
        </div>

        {/* Image Cards Grid with Full Black Overlay Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiencesData.map((audience) => (
            <div
              key={audience.id}
              className="group relative rounded-md overflow-hidden shadow-md aspect-[16/10] bg-black cursor-pointer"
            >
              {/* Default Image State */}
              <Image
                src={audience.imageUrl}
                alt={audience.title}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Default Bottom Gradient Bar (Visible when not hovered) */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {audience.title}
                </h3>
              </div>

              {/* Full Solid Black Content State (Revealed on Hover) */}
              <div className="absolute inset-0 bg-black p-5 flex flex-col justify-start space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <h3 className="text-sm sm:text-base font-bold tracking-wide">
                  {audience.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-200 font-normal">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
