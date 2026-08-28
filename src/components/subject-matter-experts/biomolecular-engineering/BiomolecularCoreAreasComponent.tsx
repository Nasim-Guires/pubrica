"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
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
    <div className="font-sans text-gray-800 bg-white py-6 px-4">
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
        <SmeCoreAreasGrid items={coreAreas} />

      </div>
    </div>
  );
}