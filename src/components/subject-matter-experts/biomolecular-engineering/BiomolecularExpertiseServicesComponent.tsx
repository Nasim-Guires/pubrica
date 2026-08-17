"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Edit3,
  Wrench,
  CheckCircle2,
  Search,
  BookOpen,
  PieChart,
  PenTool,
  Layers,
} from "lucide-react";

export default function BiomolecularExpertiseServicesComponent() {
  const services = [
    {
      title: "Journal Formatting",
      iconSrc: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
      desc: "Tailored manuscript formatting to meet specific journal guidelines.",
      img: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
      icon: FileText,
    },
    {
      title: "Editing & Proofreading",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      img: "/images/subject-matter-experts/biomolecular-engineering/Biomolecular-Engineering.webp",
      icon: Edit3,
    },
    {
      title: "Artwork Editing",
      desc: "Professional visuals for your figures, tables, and graphical abstracts",
      img: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      icon: Wrench,
    },
    {
      title: "Publication Support",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
      img: "/images/subject-matter-experts/biomolecular-engineering/Publication-Support-1.webp",
      icon: CheckCircle2,
    },
    {
      title: "Research Services",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      desc: "Expert guidance on project planning, execution, and data analysis.",
      img: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
      icon: Search,
    },
    {
      title: "Systematic Reviews",
      desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
      img: "/images/subject-matter-experts/biomolecular-engineering/Metabolic-Engineering.webp",
      icon: BookOpen,
    },
    {
      title: "Graphical Abstract",
      iconSrc: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
      desc: "Engaging summaries of your research in a single, informative graphic.",
      img: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
      icon: PieChart,
    },
    {
      title: "Scientific Writing",
      iconSrc: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
      desc: "Crafting clear, precise, and publication-ready research manuscripts.",
      img: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
      icon: PenTool,
    },
    {
      title: "Literature Review and Gap Analysis",
      iconSrc: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
      desc: "Identifying research gaps and providing comprehensive literature reviews.",
      img: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
      icon: Layers,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header Section */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] border-b-2 border-gray-800 inline-block pb-1">
            Our Expertise in Biomolecular Engineering Research and Publication
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pubrica provides specialized support to academic researchers, graduate students, biotech innovators, and industry professionals working in biomolecular engineering. Our team comprises PhD-qualified experts with strong backgrounds in molecular biology, biotechnology, computational modeling, and bioprocess engineering. Our Key Services Include:
          </p>
        </div>

        {/* Services Grid with Hover Reveal Description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Image Container */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="relative p-5 pt-8 flex-1 flex flex-col items-center text-center bg-white">
                  {/* Floating Icon */}
                  <div className="absolute -top-7 bg-white p-3 rounded-full shadow-md border border-gray-100 transition-all duration-300 group-hover:bg-[#0d3630] group-hover:text-white group-hover:border-[#0d3630]">
                    {service.iconSrc ? (
                      <span className="relative w-6 h-6 shrink-0">
                        <Image
                          src={service.iconSrc}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </span>
                    ) : (
                      <Icon className="w-5 h-5 text-[#0d3630] transition-colors duration-300 group-hover:text-white" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#0d3630] text-sm mb-1 transition-colors duration-300 group-hover:text-emerald-800">
                    {service.title}
                  </h3>

                  {/* Description - Hidden by default, pops up/fades in on card hover */}
                  <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-150 group-hover:mt-2">
                    <div className="overflow-hidden">
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}