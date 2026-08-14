"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface AudienceCard {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

export const PostEditingServicesAndWhoWeServe: React.FC = () => {
  // Active hovered card state for dynamic desktop interaction
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const audienceData: AudienceCard[] = [
    {
      id: "academic",
      title: "Academic Authors & Researchers",
      description:
        "Ensure your manuscripts, theses, or research papers are polished for submission to journals or academic publishers.",
      imageSrc:
        "/images/editing-and-translation/post-editing/Academic-Authors-Researchers-1.png",
    },
    {
      id: "publishers",
      title: "Publishers",
      description:
        "Ensure books, journals, and periodicals meet the highest editorial standards before publication.",
      imageSrc:
        "/images/editing-and-translation/post-editing/Publishers.png",
    },
    {
      id: "scientists",
      title: "Researchers & Scientists",
      description:
        "Refine technical documents, grant proposals, and scientific articles for accuracy and impact.",
      imageSrc:
        "/images/editing-and-translation/post-editing/Researchers-Scientists.png",
    },
    {
      id: "corporate",
      title: "Corporate Professionals",
      description:
        "Improve business reports, white papers, and presentations for professionalism and consistency.",
      imageSrc:
        "/images/editing-and-translation/post-editing/Corporate-Professionals.png",
    },
    {
      id: "students",
      title: "Students & Educators",
      description:
        "Perfect assignments, dissertations, and educational materials for clear communication and correctness.",
      imageSrc:
        "/images/editing-and-translation/post-editing/Students-Educators.png",
    },
  ];

  return (
    <div className="w-full bg-white text-slate-800 py-12">
      {/* ------------------------------------------------------------- */}
      {/* 1. OUR POST EDITING SERVICES SECTION                           */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-8 text-left">
          Our Post Editing Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Overlapping Visual Images */}
          <div className="lg:col-span-5 relative flex justify-center py-4">
            {/* Background Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-slate-100 rounded-full -z-0" />

            <div className="relative z-10 w-full max-w-md h-[320px]">
              <div className="absolute inset-y-0 left-2 right-2 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/editing-and-translation/post-editing/Our-Post-Editing-Services.png"
                  alt="Our post-editing services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Editorial Description */}
          <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              Today, advances in computer technology have made machine-generated
              content or translation a reality. Post-editing implies reworking
              and editing content that is generated from a machine output to
              ensure that the content meets the requirements. For example, you
              may need to edit the content of a foreign language translation
              performed by a computer application or online{" "}
              <Link
                href="/services/editing-and-translation"
                className="text-blue-600 hover:underline font-medium"
              >
                translation services
              </Link>
              . Pubrica’s post-editors assist you in post-editing services. Get
              support in full-scale and light-scale post-editing work from the
              experts in the industry.
            </p>

            <p>
              In complete editing, our post-editors will take a heavy-handed
              approach to your content editing requirements, such as style and
              presentation for internal as well as external audiences; however,
              in light-scale editing, post-editors’ engagement in the content is
              negligible. Checks are done to ensure the material is
              comprehensible for internal communication purposes.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. WHO WE SERVE SECTION                                       */}
      {/* ------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b36] mb-3">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
            Our post-editing services cater to a wide range of professionals and
            organizations who seek precise, high-quality refinement of their
            written content. We work with:
          </p>
        </div>

        {/* 3-Column Grid for Target Audiences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item) => {
            const isHovered = hoveredCard === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative h-64 rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-300"
              >
                {/* Default Card View: Image with Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isHovered ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Hover/Active View: Black Background with White Text */}
                <div
                  className={`absolute inset-0 bg-black p-6 flex flex-col justify-start transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h3 className="text-sm sm:text-base font-bold text-white mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
