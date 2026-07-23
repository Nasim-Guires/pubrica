"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TargetAudience {
  id: string;
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const EditingTranslationManuscriptEditingWhoWeServe: React.FC = () => {
  const audienceData: TargetAudience[] = [
    {
      id: "academic-researchers",
      title: "Academic Researchers & Scholars",
      description: (
        <p>
          Individuals preparing manuscripts benefit from our editing services
          for research papers for journals, conferences, and theses.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-academic-researchers.webp",
      imageAlt:
        "Academic researchers discussing research findings on a whiteboard",
    },
    {
      id: "medical-scientific-professionals",
      title: "Medical and Scientific Professionals",
      description: (
        <p>
          Clinicians and scientists rely on our medical manuscript editing and
          clinical manuscript editing services to communicate complex findings
          effectively.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-medical-professionals.webp",
      imageAlt:
        "Medical professional conducting scientific lab research with microscope",
    },
    {
      id: "graduate-postgraduate-students",
      title: "Graduate & Postgraduate Students",
      description: (
        <p>
          Students aiming to refine dissertations, theses, or research papers
          for submission.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-graduate-students.webp",
      imageAlt: "Postgraduate student holding degree and thesis documents",
    },
    {
      id: "universities-research-institutions",
      title: "Universities & Research Institutions",
      description: (
        <p>
          Organizations are looking to maintain high publication standards and
          enhance the global visibility of their research.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-universities.webp",
      imageAlt: "Empty modern university lecture auditorium",
    },
    {
      id: "pharmaceutical-biotech-companies",
      title: "Pharmaceutical & Biotech Companies",
      description: (
        <p>
          We support documentation through specialised clinical manuscript
          editing services and medical manuscript editing.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-pharma-biotech.webp",
      imageAlt:
        "Pharmaceutical research scientists looking at computer workstation",
    },
    {
      id: "non-native-english-authors",
      title: "Non-native English Authors",
      description: (
        <p>
          Researchers benefit from outsourced manuscript editing services,
          ensuring grammatical precision and clarity.
        </p>
      ),
      imageSrc: "/images/services/who-we-serve-non-native-authors.webp",
      imageAlt:
        "Non-native English author writing and editing manuscript at desk",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          Who We Serve
        </h2>

        {/* Section Subtitle */}
        <p className="text-base sm:text-lg text-slate-700 max-w-4xl mb-10 leading-relaxed">
          Our{" "}
          <Link
            href="/services/editing-and-translation/manuscript-editing"
            className="text-sky-600 hover:underline"
          >
            manuscript editing services
          </Link>{" "}
          are tailored to meet the needs of a diverse range of researchers,
          authors, and institutions, ensuring clarity, accuracy, and publication
          readiness. We serve:
        </p>

        {/* Audience Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 sm:h-72 w-full rounded-lg overflow-hidden shadow-md cursor-pointer bg-black"
            >
              {/* Image with gradient overlay (Default View) */}
              <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0 z-10">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <h3 className="text-white font-bold text-lg sm:text-xl leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Hover View: Black background with Title and Text Body */}
              <div className="absolute inset-0 bg-black p-6 flex flex-col justify-start text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="font-bold text-lg sm:text-xl mb-4 leading-snug">
                  {item.title}
                </h3>
                <div className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
