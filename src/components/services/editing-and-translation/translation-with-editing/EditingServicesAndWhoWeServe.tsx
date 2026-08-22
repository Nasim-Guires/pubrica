"use client";

import React from "react";
import Image from "next/image";

// --- Data for Types of Editing Services ---
interface EditingService {
  id: string;
  title: string;
  description: string;
  borderColorClass: string;
}

const editingServices: EditingService[] = [
  {
    id: "scientific-editing",
    title: "Scientific Editing",
    description:
      "Optimize your research manuscript with Pubrica's expert Scientific Editing Service, ensuring technical accuracy and journal compliance.",
    borderColorClass: "border-l-amber-400",
  },
  {
    id: "manuscript-editing",
    title: "Manuscript Editing",
    description:
      "Enhance your academic and scientific manuscripts with Pubrica's professional Editing Service, clear, concise, and submission-ready.",
    borderColorClass: "border-l-emerald-400",
  },
  {
    id: "book-editing",
    title: "Book Editing",
    description:
      "Perfect your academic or professional book manuscript with Pubrica's Book Editing Service, tailored to achieve excellence and readability.",
    borderColorClass: "border-l-indigo-400",
  },
  {
    id: "post-editing",
    title: "Post Editing",
    description:
      "Refine and polish machine-translated documents with Pubrica's Post-Editing Service, ensuring fluency, accuracy, and natural readability.",
    borderColorClass: "border-l-sky-500",
  },
  {
    id: "thesis-editing",
    title: "Thesis Editing",
    description:
      "Optimize your thesis or dissertation with Pubrica's Thesis Editing Service, tailored for academic excellence and global recognition.",
    borderColorClass: "border-l-red-500",
  },
];

// --- Data for Who We Serve Grid ---
interface AudienceCard {
  id: string;
  title: string;
  imageUrl: string;
  description: React.ReactNode;
}

const audienceData: AudienceCard[] = [
  {
    id: "researchers",
    title: "Researchers & Academics",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Researchers-Academics-1.png",
    description:
      "We provide academic translation services and research paper translation with editing to help scholars publish dissertations, theses, and journal articles in top international journals.",
  },
  {
    id: "universities",
    title: "Universities & Institutions",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Universities-Institutions.png",
    description: (
      <>
        Trusted scientific translation and editing services for educational
        materials,{" "}
        <a href="/services/physician-writing-services/research-proposal" className="text-sky-400 hover:underline">
          research proposals
        </a>
        , and multilingual content to support global collaboration.
      </>
    ),
  },
  {
    id: "publishers",
    title: "Publishers & Journals",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Publishers-Journals-1.png",
    description: (
      <>
        Professional{" "}
        <a href="/services/publication-support/" className="text-sky-400 hover:underline">
          journal publication support
        </a>{" "}
        with precise scientific paper translation and editing that meet
        international publishing standards.
      </>
    ),
  },
  {
    id: "students",
    title: "Students & Doctoral Candidates",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Students-Doctoral-Candidates-1.png",
    description:
      "Affordable dissertation translation and editing services that ensure accuracy, clarity, and acceptance in academic submissions.",
  },
  {
    id: "medical",
    title: "Medical & Scientific Professionals",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Medical-Scientific-Professionals.png",
    description: (
      <>
        Specialized medical translation services and scientific{" "}
        <a href="/services/editing-and-translation/manuscript-editing" className="text-sky-400 hover:underline">
          manuscript editing
        </a>{" "}
        to expand the global impact of textbooks, case studies, and research
        findings.
      </>
    ),
  },
  {
    id: "corporate",
    title: "Corporate & Industry Clients",
    imageUrl:
      "/images/editing-and-translation/translation-with-editing/Corporate-Industry-Clients.png",
    description:
      "High-quality technical translation and editing services for proposals, reports, and documentation to enhance international communication.",
  },
];

export default function EditingServicesAndWhoWeServe() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 text-slate-800 font-sans space-y-16">
      {/* ======================================= */}
      {/* SECTION 1: TYPES OF EDITING SERVICES    */}
      {/* ======================================= */}
      <section className="space-y-6">
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          At Pubrica, we offer specialized editing services designed to elevate
          your academic, scientific, and professional content. From manuscripts
          and theses to books and translated documents, our expert editors
          ensure clarity, precision, and publication-ready quality tailored to
          your needs.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46] pt-2">
          Types of Editing Services We Offer
        </h2>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          At Pubrica, we offer specialized editing services designed to elevate
          your academic, scientific, and professional content. From manuscripts
          and theses to books and translated documents, our expert editors
          ensure clarity, precision, and publication-ready quality tailored to
          your needs.
        </p>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {editingServices.map((service) => (
            <div
              key={service.id}
              className={`border border-slate-200 rounded-lg p-6 bg-white shadow-sm border-l-4 ${service.borderColorClass} hover:shadow-md transition-shadow flex flex-col justify-start`}
            >
              <h3 className="text-base font-bold text-[#003B46] mb-3">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================= */}
      {/* SECTION 2: WHO WE SERVE (HOVER EFFECT)  */}
      {/* ======================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B46]">
          Who We Serve
        </h2>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Our Translation with Editing Service is designed to support a wide
          spectrum of professionals and organizations who require accurate,
          polished, and publication-ready content:
        </p>

        {/* CSS Pure Hover Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {audienceData.map((card) => (
            <div
              key={card.id}
              className="group relative h-64 overflow-hidden shadow-sm select-none"
            >
              {/* Default View: Background Image + Title Banner */}
              <div className="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Dark Bottom Gradient Banner */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 pt-10">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Hover View: Black Background with Full Detailed Text */}
              <div className="absolute inset-0 w-full h-full bg-black p-6 flex flex-col justify-start text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
                <h3 className="text-base font-bold mb-4 tracking-wide">
                  {card.title}
                </h3>
                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
