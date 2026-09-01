"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Landmark, Home, PenTool, User } from "lucide-react";
import Container from "@/components/common/Container";
import Link from "next/link";

export default function WhoWeWorkFor() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const sectors = [
    {
      title: "Author Services",
      description: "Complete support for writing, editing, and support",
      image: "/images/WhoWeWorkFor/image-1.webp",
      icon: Landmark,
    },
    {
      title: "University Support",
      description:
        "We offer customized support for universities & research institutions.",
      image: "/images/WhoWeWorkFor/image-2.webp",
      icon: Home,
    },
    {
      title: "Lab Assistance",
      description: "Expert assistance for laboratory experiments and research.",
      image: "/images/WhoWeWorkFor/image-3.webp",
      icon: PenTool,
    },
    {
      title: "Journal & Publications",
      description:
        "Professional support for your research article publication needs.",
      image: "/images/WhoWeWorkFor/image-4.webp",
      icon: User,
    },
  ];

  const handleCardClick = (idx: number) => {
    setActiveIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="bg-white py-5 relative select-none">
      <Container className="flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-4 relative">
          {/* Top Row: Heading + Line */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 w-full">
            <h2 className="text-3xl font-bold tracking-tight text-[#0a2f2d] font-display whitespace-nowrap text-left">
              Who We Work For
            </h2>

            {/* Full-width Divider Line on Mobile, Flex Line on Desktop */}
            <div className="w-full sm:flex-1 h-[2px] bg-black" />

            {/* Read More Button */}
            <div className="flex justify-center sm:justify-end my-2 sm:my-0">
              <Link
                href="/industries"
                className="bg-[#0a2f2d] text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-emerald-900 shadow-lg shadow-[#0a2f2d]/20 transition-all duration-300 inline-block text-center min-w-[140px]"
              >
                Read more
              </Link>
            </div>
          </div>

          {/* Subheading Description */}
          <p className="text-sm text-gray-600 leading-relaxed font-sans max-w-5xl">
            In the field of medical science and its subfields, including
            public health and pharmaceuticals, we assist various sectors
            through a wide range of specialized services. We support
            researchers, medical institutions, private-sector organizations,
            stakeholders, and educators, ensuring credible and standardised
            outcomes.
          </p>
        </div>

        {/* Dynamic Accordion-style Hover/Tap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isActive = activeIdx === idx;

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                className={`bg-white border border-gray-200 shadow-sm flex flex-col h-[380px] transition-all duration-500 ease-in-out hover:shadow-xl hover:border-b-4 hover:border-b-[#0a2f2d] group cursor-pointer ${
                  isActive ? "shadow-xl border-b-4 border-b-[#0a2f2d]" : ""
                }`}
              >
                <div
                  className={`relative h-[65%] w-full transition-all duration-500 ease-in-out group-hover:h-[50%] ${
                    isActive ? "h-[50%]" : ""
                  }`}
                >
                  <div className="absolute inset-0 overflow-hidden bg-gray-100">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      fill
                      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        isActive ? "scale-105" : ""
                      }`}
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#0a2f2d] shadow-md transition-transform duration-300 group-hover:scale-105 ${
                        isActive ? "scale-105" : ""
                      }`}
                    >
                      <Icon className="h-7 w-7 stroke-[2]" />
                    </div>
                  </div>
                </div>

                {/* Content Panel - slides and expands upwards on hover/tap */}
                <div
                  className={`h-[35%] w-full pt-12 pb-6 px-5 bg-white flex flex-col items-center justify-start flex-grow transition-all duration-500 ease-in-out group-hover:h-[50%] relative z-10 ${
                    isActive ? "h-[50%]" : ""
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-sm tracking-wide text-center font-display transition-colors duration-300">
                    {sec.title}
                  </h3>

                  <div
                    className={`grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3 ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-3" : ""
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-400 text-center leading-relaxed font-medium">
                        {sec.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}