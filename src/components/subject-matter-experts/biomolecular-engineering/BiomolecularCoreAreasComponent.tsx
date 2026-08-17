"use client";

import Image from "next/image";
import React from "react";
import { Dna, Activity, FlaskConical, Microscope, Cpu, Server } from "lucide-react";

export default function BiomolecularCoreAreasComponent() {
  const coreAreas = [
    {
      title: "Genetic & Protein Engineering",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      subtitle: "Enhanced Functionality",
      desc: "This area focuses on modifying genetic sequences and protein structures to create enhanced functionality. From CRISPR-Cas gene editing to computational protein design, genetic and protein engineering enable the development of targeted treatments, disease-resistant plants, and novel enzymes for industrial processes.",
      icon: Dna,
    },
    {
      title: "Metabolic Engineering",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Metabolic-Engineering.webp",
      subtitle: "Cellular Pathways",
      desc: "It focuses on altering cellular pathways for improved production of metabolites, biofuels, and therapeutic compounds. This includes gene knockouts, pathway optimization, flux analysis, and dynamic regulation.",
      icon: Activity,
    },
    {
      title: "Synthetic Biology",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Synthetic-Biology.webp",
      subtitle: "Engineering Principles",
      desc: "It merges engineering principles with molecular biology to design organisms with novel functions. It includes genetic circuit design, modular DNA assembly, artificial pathways, minimal cells, and DNA-based computing.",
      icon: FlaskConical,
    },
    {
      title: "Molecular Diagnostics and Therapeutics",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      subtitle: "Targeted Solutions",
      desc: "Biomolecular engineers develop tools such as CRISPR-based diagnostic kits, point-of-care biosensors, and nucleic-acid-based therapeutics, including siRNA and mRNA technologies. Our specialized biomolecular diagnostics editing services ensure precision and clarity for diagnostic research.",
      icon: Microscope,
    },
    {
      title: "Bioprocess Engineering",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      subtitle: "Industrial Scaling",
      desc: "This area involves scaling up biological production systems, optimizing fermentation conditions, developing bioreactors, and ensuring product purification and quality. Pubrica offers bioprocess engineering writing services to support manuscript development and publication",
      icon: Cpu,
    },
    {
      title: "Computational Biomolecular Engineering",
            iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Computational-Biomolecular-Engineering.webp",
      subtitle: "In Silico Design",
      desc: "Computational tools such as molecular modeling, bioinformatics, machine learning, and atomistic simulations enable accurate prediction of molecular behavior. These tools significantly accelerate scientific discovery and reduce the cost of experimental research.",
      icon: Server,
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
            Our Core Areas Of Biomolecular Engineering
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Biomolecular engineering encompasses several interconnected areas, each contributing to the development of efficient biological systems and products. These core disciplines include:
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreAreas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-red-700 text-xs md:text-sm leading-snug">
                      {area.title}
                    </h3>
                    <div className="p-2 bg-gray-50 border border-gray-100 rounded-lg text-gray-700 shrink-0">
                      {(area as { iconSrc?: string }).iconSrc ? (
                                            <Image src={(area as { iconSrc?: string }).iconSrc!} alt="" width={16} height={16} className="object-contain shrink-0" />
                                        ) : (
                                            <Icon className="w-4 h-4 text-[#0d3630]" />
                                        )}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#0d3630]">
                  <span>{area.subtitle}</span>
                  <span className="text-gray-400">⌄</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}