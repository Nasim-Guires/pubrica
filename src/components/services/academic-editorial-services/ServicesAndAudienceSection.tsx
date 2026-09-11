"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
      "Clinical researchers, healthcare practitioners, and hospital researchers benefit from our services for case reports, clinical trial manuscripts, and healthcare guidelines, tailored for publication in peer-reviewed journals.",
    imageUrl:
      "/images/academic-editorial-services/Medical-Healthcare-Professionals.png",
  },
  {
    id: "institutions",
    title: "Institutions & Organizations",
    description:
      "Universities, research institutes, and educational organizations rely on us for large-scale editorial projects, ensuring consistent quality, compliance with publication standards, and professional presentation of research outputs.",
    imageUrl: "/images/academic-editorial-services/Institutions-Organizations.png",
  },
  {
    id: "international-authors",
    title: "Multilingual & International Authors",
    description:
      "For authors publishing in English as a second language or preparing multilingual manuscripts, we provide specialized language editing, translation, and localization services to ensure global accessibility and clarity.",
    imageUrl:
      "/images/academic-editorial-services/Multilingual-International-Authors.png",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function WhoWeServeSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Automatically reset mobile card state when resizing up to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setActiveId(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (id: string) => {
    // Only toggle via click on mobile devices (screens smaller than 768px)
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      return;
    }
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleMouseEnter = (id: string) => {
    // Only trigger hover state on desktop devices (768px and up)
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      setActiveId(id);
    }
  };

  const handleMouseLeave = () => {
    // Only clear hover state on desktop devices
    if (typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches) {
      setActiveId(null);
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] text-slate-800 font-sans py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d3b44]">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
            At Pubrica, our{" "}
            <Link href="/services/academic-editorial-services/editorial-services-case-studies/" className="text-blue-600 no-underline hover:no-underline">
              Academic Editorial Services
            </Link>{" "}
            cater to a diverse spectrum of researchers, educators, and
            institutions, ensuring clarity, precision, and publication readiness
            for every manuscript. We serve:
          </p>
        </div>

        {/* Image Cards Grid with Full Black Overlay Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiencesData.map((audience) => {
            const isActive = activeId === audience.id;

            return (
              <div
                key={audience.id}
                onClick={() => handleCardClick(audience.id)}
                onMouseEnter={() => handleMouseEnter(audience.id)}
                onMouseLeave={handleMouseLeave}
                className="group relative rounded-md overflow-hidden shadow-md aspect-[16/10] bg-black cursor-pointer"
              >
                {/* Default Image State */}
                <Image
                  src={audience.imageUrl}
                  alt={audience.title}
                  fill
                  className={`object-cover transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"
                    }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Default Bottom Gradient Bar (Visible when not hovered) */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100 md:group-hover:opacity-0"
                    }`}
                >
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    {audience.title}
                  </h3>
                </div>

                {/* Full Solid Black Content State (Revealed on Hover/Tap) */}
                <div
                  className={`absolute inset-0 bg-black p-5 flex flex-col justify-start space-y-3 transition-opacity duration-300 text-white ${isActive
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"
                    }`}
                >
                  <h3 className="text-sm sm:text-base font-bold tracking-wide">
                    {audience.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-200 font-normal">
                    {audience.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}