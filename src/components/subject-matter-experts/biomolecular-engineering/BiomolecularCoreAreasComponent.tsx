"use client";

import React from "react";
import { Dna, Activity, FlaskConical, Microscope, Cpu, Server } from "lucide-react";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import Link from "next/link";

export default function BiomolecularCoreAreasComponent() {
  const coreAreas = [
    {
      title: "Genetic & Protein Engineering",
      highlight: "Genetic & Protein",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Genetic-Protein-Engineering.webp",
      desc: "This area focuses on modifying genetic sequences and protein structures to create enhanced functionality. From CRISPR-Cas gene editing to computational protein design, genetic and protein engineering enable the development of targeted treatments, disease-resistant plants, and novel enzymes for industrial processes.",
      icon: Dna,
    },
    {
      title: "Metabolic Engineering",
      highlight: "Metabolic",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Metabolic-Engineering.webp",
      desc: "It focuses on altering cellular pathways for improved production of metabolites, biofuels, and therapeutic compounds. This includes gene knockouts, pathway optimization, flux analysis, and dynamic regulation.",
      icon: Activity,
    },
    {
      title: "Synthetic Biology",
      highlight: "Synthetic",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Synthetic-Biology.webp",
      desc: "It merges engineering principles with molecular biology to design organisms with novel functions. It includes genetic circuit design, modular DNA assembly, artificial pathways, minimal cells, and DNA-based computing.",
      icon: FlaskConical,
    },
    {
      title: "Molecular Diagnostics and Therapeutics",
      highlight: "Molecular Diagnostics",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Molecular-Diagnostics-and-Therapeutics.webp",
      desc: (
        <>
          Biomolecular engineers develop tools such as CRISPR-based diagnostic kits, point-of-care biosensors, and nucleic-acid-based therapeutics, including siRNA and mRNA technologies. Our specialized{" "}
          <Link href="/services/editing-and-translation/" className="text-blue-600 hover:underline">
            biomolecular diagnostics editing services
          </Link>{" "}
          ensure precision and clarity for diagnostic research.
        </>
      ),
      icon: Microscope,
    },
    {
      title: "Bioprocess Engineering",
      highlight: "Bioprocess",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Bioprocess-Engineering.webp",
      desc: (
        <>
          This area involves scaling up biological production systems, optimizing fermentation conditions, developing bioreactors, and ensuring product purification and quality. Pubrica offers{" "}
          <Link href="/services/research-services/medical-writing/" className="text-blue-600 hover:underline">
            bioprocess engineering writing services
          </Link>{" "}
          to support manuscript development and publication.
        </>
      ),
      icon: Cpu,
    },
    {
      title: "Computational Biomolecular Engineering",
      highlight: "Computational Biomolecular",
      iconSrc: "/images/subject-matter-experts/biomolecular-engineering/Computational-Biomolecular-Engineering.webp",
      desc: "Computational tools such as molecular modeling, bioinformatics, machine learning, and atomistic simulations enable accurate prediction of molecular behavior. These tools significantly accelerate scientific discovery and reduce the cost of experimental research.",
      icon: Server,
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Centered container with max-width and balanced padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CoreAreasSection
          title="Our Core Areas Of Biomolecular Engineering"
          description="Biomolecular engineering encompasses several interconnected areas, each contributing to the development of efficient biological systems and products. These core disciplines include:"
          items={coreAreas}
        />
      </div>
    </div>
  );
}