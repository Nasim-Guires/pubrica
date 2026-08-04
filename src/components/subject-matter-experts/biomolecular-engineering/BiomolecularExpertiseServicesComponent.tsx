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
      desc: "Tailored manuscript formatting to meet specific journal guidelines.",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600",
      icon: FileText,
    },
    {
      title: "Editing & Proofreading",
      desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      icon: Edit3,
    },
    {
      title: "Artwork Editing",
      desc: "Professional visuals for your figures, tables, and graphical abstracts",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      icon: Wrench,
    },
    {
      title: "Publication Support",
      desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
      icon: CheckCircle2,
    },
    {
      title: "Research Services",
      desc: "Expert guidance on project planning, execution, and data analysis.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      icon: Search,
    },
    {
      title: "Systematic Reviews",
      desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
      img: "https://images.unsplash.com/photo-1505664186595-dfcb1531e089?auto=format&fit=crop&q=80&w=600",
      icon: BookOpen,
    },
    {
      title: "Graphical Abstract",
      desc: "Engaging summaries of your research in a single, informative graphic.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      icon: PieChart,
    },
    {
      title: "Scientific Writing",
      desc: "Crafting clear, precise, and publication-ready research manuscripts.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=600",
      icon: PenTool,
    },
    {
      title: "Literature Review and Gap Analysis",
      desc: "Identifying research gaps and providing comprehensive literature reviews.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
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
                    <Icon className="w-5 h-5 text-[#0d3630] transition-colors duration-300 group-hover:text-white" />
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