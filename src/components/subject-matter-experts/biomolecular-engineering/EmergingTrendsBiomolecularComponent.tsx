"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Factory,
  Sprout,
  Leaf,
  Zap,
  Award,
} from "lucide-react";

export default function BiomolecularTrendsAndApplicationsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const trends = [
    {
      title: "AI-driven biomolecule design",
      desc: "enabling faster discovery and optimization.",
    },
    {
      title: "CRISPR advancements",
      desc: "leading to more precise and safer gene-editing tools.",
    },
    {
      title: "Cell-free systems",
      desc: "for on-demand biomolecule synthesis.",
    },
    {
      title: "Microbial cell factories",
      desc: "engineered for sustainable chemical production.",
    },
    {
      title: "Programmable therapeutics",
      desc: "using engineered cells for targeted treatment.",
    },
    {
      title: "Nanobiotechnology",
      desc: "combines nanoscale materials with biological molecules.",
    },
  ];

  const applications = [
    {
      title: "Healthcare",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      desc: "Development of targeted biologics, vaccines, and personalized medicine tools.",
      icon: HeartPulse,
    },
    {
      title: "Industrial Biotechnology",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Metabolic-Engineering.webp",
      desc: "Biosynthesis of chemicals, materials, and environmentally friendly alternatives.",
      icon: Factory,
    },
    {
      title: "Agriculture",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Synthetic-Biology.webp",
      desc: "Engineering stress-tolerant crops, biosensors for soil health, and microbial inoculants.",
      icon: Sprout,
    },
    {
      title: "Environmental Technologies",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      desc: "Bioremediation, pollutant degradation, and microbial fuel cells.",
      icon: Leaf,
    },
    {
      title: "Energy",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      desc: "Biofuel production, hydrogen generation, and metabolic design for renewable energy pathways.",
      icon: Zap,
    },
  ];

  const editors = [
    {
      name: "Dr. Evelyn Carter",
      role: "PhD in Biomolecular Engineering",
      experience: "12 years of experience",
      manuscripts: "150+ manuscripts edited",
      img: "/images/subject-matter-experts/biomolecular-engineering/Dr.-Evelyn-Carter.webp",
    },
    {
      name: "Dr. Maya Chen",
      role: "PhD in Chemical & Biomolecular Engineering",
      experience: "10 years of experience",
      manuscripts: "145+ manuscripts edited",
      img: "/images/subject-matter-experts/biomolecular-engineering/Dr.-Maya-Chen.webp",
    },
    {
      name: "Dr. Arjun Mehta",
      role: "PhD in Biomolecular Engineering",
      experience: "13 years of experience",
      manuscripts: "170+ manuscripts edited",
      img: "/images/subject-matter-experts/biomonitoring/Dr.-Arjun-Mehta-1.webp",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white py-12 px-4 space-y-16">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* SECTION 1: Emerging Trends */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
              Emerging Trends in Biomolecular Engineering
            </h2>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              The field is rapidly evolving, driven by breakthroughs in technology and multidisciplinary research. Major emerging trends include:
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold">
              {trends.slice(0, 5).map((trend, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`py-3 px-2 transition-all border-r border-b sm:border-b-0 border-gray-200 last:border-r-0 ${activeTab === idx
                    ? "bg-[#0d3630] text-white shadow-inner"
                    : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {trend.title}
                </button>
              ))}
            </div>

            <div className="border-b border-gray-200 bg-gray-50 text-center text-xs font-semibold">
              <button
                onClick={() => setActiveTab(5)}
                className={`w-full py-3 px-4 transition-all ${activeTab === 5
                  ? "bg-[#0d3630] text-white shadow-inner"
                  : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {trends[5].title}
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-2 bg-white min-h-[120px] flex flex-col justify-center">
              <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
                {trends[activeTab].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {trends[activeTab].desc}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 italic pt-2">
            These trends highlight the tremendous potential of biomolecular engineering in shaping the future of science and technology.
          </p>
        </div>

        {/* SECTION 2: Applications of Biomolecular Engineering */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d3630]">
              Applications of Biomolecular Engineering
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Biomolecular engineering has wide-ranging applications that contribute to solutions to major global challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              {applications.map((app, idx) => {
                const Icon = app.icon;
                return (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="p-2.5 bg-[#0d3630]/10 text-[#0d3630] rounded-lg mt-0.5 shrink-0">
                      {(app as { iconSrc?: string }).iconSrc ? (
                        <Image src={(app as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain shrink-0" />
                      ) : (
                        <Icon className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0d3630] text-base md:text-lg">
                        {app.title}:
                      </h4>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column Container */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="/images/subject-matter-experts/biomolecular-engineering/Applications-of-Biomolecular-Engineering.webp"
                  alt="Biomolecular Structure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 italic pt-2">
            These applications reflect the multidisciplinary potential of biomolecular engineering in shaping the future of science and technology.
          </p>
        </div>
        {/* SECTION 3: Where Our Authors Publish */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
              Where Our Authors Publish
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative h-56 w-full rounded-md overflow-hidden flex items-center justify-center p-4">
              <Image
                src="/images/subject-matter-experts/biomolecular-engineering/sample-works-8-1.webp"
                alt="Journal cover"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:col-span-7 space-y-3 text-xs md:text-sm">
              <p>
                <strong className="text-[#0d3630]">Paper Title:</strong> CRISPR Tools for Engineering Prokaryotic Systems: Recent Advances and New Applications
              </p>
              <p className="text-gray-600">
                <strong className="text-[#0d3630]">Author:</strong> Burbano, D. A., Klattisewee, C., Karanjia, A. V., Cardiff, R. A. L., Faulkner, I. D., Sugianto, W., & Carothers, J. M
              </p>
              <p className="text-gray-600">
                <strong className="text-[#0d3630]">Journal Name:</strong> Annual Review of Chemical and Biomolecular Engineering
              </p>
              <p className="text-gray-600">
                <strong className="text-[#0d3630]">Publisher:</strong> Annual Reviews Inc
              </p>
              <p className="text-gray-600">
                <strong className="text-[#0d3630]">Impact factor:</strong> 12.8
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Our Expert Biomolecular Engineering Editors */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
              Our Expert Biomolecular Engineering Editors
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pubrica&apos;s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editors.map((editor, idx) => (
              <div
                key={idx}
                className="bg-teal-50/50 border border-teal-100 rounded-xl p-5 flex flex-col justify-between shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0 border border-teal-200">
                    <Image
                      src={editor.img}
                      alt={editor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0d3630] text-sm">
                      {editor.name}
                    </h3>
                    <p className="text-[11px] text-gray-600 leading-tight">
                      {editor.role}
                    </p>
                  </div>
                </div>

                <div className="border-t border-teal-200/60 pt-3 flex justify-between text-xs text-gray-700 font-medium">
                  <div className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#0d3630]" />
                    <span>{editor.experience}</span>
                  </div>
                  <div>
                    <span>{editor.manuscripts}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}