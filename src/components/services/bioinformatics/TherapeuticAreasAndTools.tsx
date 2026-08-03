"use client";

import React, { useState } from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

/* ==========================================================================
   DATA OBJECT STRUCTURE FOR TOOLS USED CARDS
   ========================================================================== */
interface ToolItem {
  name: string;
  description: string;
}

interface ToolCategory {
  id: string;
  title: string;
  tools: ToolItem[];
}

const bioinformaticsToolsData: ToolCategory[] = [
  {
    id: "genomic-tools",
    title: "Genomic Data Analysis Tools",
    tools: [
      { name: "BLAST", description: "Sequence alignment and similarity search" },
      { name: "Bowtie / BWA", description: "Fast alignment for next-generation sequencing (NGS) data" },
      { name: "SAMtools", description: "Manipulation and processing of sequence alignment files" },
      { name: "GATK (Genome Analysis Toolkit)", description: "Variant discovery, SNP/indel calling, genotyping" },
      { name: "IGV (Integrative Genomics Viewer)", description: "High-performance genome visualization" },
      { name: "UCSC Genome Browser / Ensembl", description: "Genome annotation and browsing" },
    ],
  },
  {
    id: "proteomic-tools",
    title: "Proteomic Analysis Tools",
    tools: [
      { name: "MaxQuant", description: "Quantitative proteomics analysis from LC-MS data" },
      { name: "Proteome Discoverer", description: "Protein identification and quantification" },
      { name: "OpenMS", description: "Open-source platform for proteomics workflows" },
      { name: "Mascot", description: "Protein database search and identification" },
      { name: "PeptideAtlas", description: "Curated peptide identification repository" },
      { name: "ProteinPilot", description: "Comprehensive protein identification and quantification" },
    ],
  },
  {
    id: "transcriptomic-tools",
    title: "Transcriptomic Analysis Tools",
    tools: [
      { name: "TopHat / HISAT2", description: "RNA-Seq read alignment" },
      { name: "Cufflinks / StringTie", description: "Transcript assembly and quantification" },
      { name: "DESeq2 / edgeR", description: "Differential gene expression analysis" },
      { name: "Kallisto / Salmon", description: "Ultra-fast transcript quantification" },
      { name: "Seurat", description: "Single-cell RNA-seq data analysis and clustering" },
      { name: "Galaxy", description: "User-friendly bioinformatics workflow platform" },
    ],
  },
  {
    id: "metabolomics-tools",
    title: "Metabolomics Tools",
    tools: [
      { name: "XCMS", description: "LC/MS data processing and metabolite feature detection" },
      { name: "MetaboAnalyst", description: "Comprehensive metabolomics statistical analysis and visualization" },
      { name: "MZmine", description: "Mass spectrometry data analysis for metabolomics" },
      { name: "GNPS", description: "Natural product discovery and metabolite networking" },
    ],
  },
  {
    id: "epigenomics-tools",
    title: "Epigenomics Tools",
    tools: [
      { name: "Bismark", description: "Bisulfite-treated DNA sequence alignment and methylation calling" },
      { name: "MACS2", description: "Peak calling in ChIP-seq experiments" },
      { name: "ChIPseeker", description: "Annotation and visualization of ChIP-seq data" },
    ],
  },
  {
    id: "integrative-tools",
    title: "Integrative Omics & Systems Biology Tools",
    tools: [
      { name: "Cytoscape", description: "Network biology and systems-level visualization" },
      { name: "Pathway Studio / Ingenuity Pathway Analysis (IPA)", description: "Pathway enrichment and biomarker discovery" },
      { name: "Bioconductor (R)", description: "Multi-omics statistical packages for integration and visualization" },
    ],
  },
];

/* ==========================================================================
   PROCESS STEP DATA OBJECTS
   ========================================================================== */
interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

const processStepsData: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Data Collection & Annotation",
    description:
      "We begin with the systematic collection, cleaning, and annotation of genomic, transcriptomic, proteomic, and metabolomic datasets. This step ensures data is well-structured, FAIR-compliant, and ready for advanced analysis.",
  },
  {
    stepNumber: 2,
    title: "Custom Algorithm Development",
    description:
      "Our experts design tailored bioinformatics algorithms and workflows, either adapting existing methods or developing new pipelines to address your specific research questions, including NGS analysis, variant calling, or multi-omics integration.",
  },
  {
    stepNumber: 3,
    title: "Rigorous Compliance & Quality Standards",
    description:
      "We follow international scientific and ethical guidelines (e.g., Genomic Data Sharing Policy, FAIR principles) to ensure reliability, reproducibility, and compliance across all stages of analysis.",
  },
  {
    stepNumber: 4,
    title: "Advanced Data Analysis & Model Validation",
    description:
      "Using cutting-edge computational biology techniques, our team performs robust analyses and validates models for accuracy, consistency, and replicability across multiple conditions.",
  },
  {
    stepNumber: 5,
    title: "Insight Generation & Visualization",
    description:
      "We translate raw data into clear, actionable insights with publication-ready reports and visualizations—including heatmaps, volcano plots, phylogenetic trees, and gene expression profiles. These outputs support both scientific discovery and clinical applications.",
  },
  {
    stepNumber: 6,
    title: "Deliverables & Implementation Support",
    description:
      "Clients receive a comprehensive package: processed datasets, methodology documentation, algorithm details, and final reports. We also support implementation into real-world research, diagnostics, or product development.",
  },
  {
    stepNumber: 7,
    title: "Post-Analysis Support & Continuous Updates",
    description:
      "We guarantee ongoing scientific support, refining analyses as new data emerges and ensuring your findings remain accurate, relevant, and impactful.",
  },
  {
    stepNumber: 8,
    title: "Dedicated Project Coordination",
    description:
      "Each project is managed by a dedicated coordinator, providing seamless communication, query resolution, and personalized client support.",
  },
];

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */
export default function TherapeuticAreasAndTools() {
  // State set to null so ALL cards are CLOSED by default
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="w-full bg-slate-50 py-16 text-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ------------------------------------------------------------------
           1. ACCELERATE CALLOUT BANNER
           ------------------------------------------------------------------ */}
        <div className="bg-[#0b2b26] text-white py-12 px-6 rounded-lg text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Accelerate Your Bioinformatics Journey with Pubrica
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto mb-6 leading-relaxed">
            Receive tailored support in genomic, proteomic, and clinical data analysis, helping you achieve precision, reliability, and faster translation of discoveries into practice.
          </p>
         <GetFreeQuoteButton/>
        </div>

        {/* ------------------------------------------------------------------
           2. STEP-BY-STEP PROCESS SECTION
           ------------------------------------------------------------------ */}
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26]">
              How Do Bioinformatics Services Work at Pubrica?
            </h2>
            <h3 className="text-xl font-semibold text-emerald-900">
              Our Step-by-Step Process
            </h3>
            <p className="text-slate-600 text-sm sm:text-base max-w-4xl mx-auto pt-2 leading-relaxed">
              Pubrica&apos;s comprehensive bioinformatics services provide end-to-end support for researchers and clinicians, ensuring data integrity, ethical compliance, and insights that meet the standards of high-impact medical and scientific journals.
            </p>
          </div>

          {/* Grid Layout for Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processStepsData.map((step) => (
              <div
                key={step.stepNumber}
                className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center relative"
              >
                <div className="w-12 h-12 bg-[#0b2b26] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.stepNumber}
                </div>
                <h4 className="font-bold text-[#0b2b26] text-base mb-3">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------------
           3. THERAPEUTIC AREAS SECTION
           ------------------------------------------------------------------ */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0b2b26]">
            Therapeutic Areas for Bioinformatic Analysis
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Genomics offers different data analysis approaches for the discovery, characterization, and validation of genomic (RNA and DNA) and proteomic biomarkers for a variety of disease areas. Bioinformatics services can help with drug target identification and validation for oncology, GI and microbiome, cardiovascular and metabolic diseases, infections and vaccines, respiratory and dermatology research areas. Applications of bioinformatics services include human medicine, crop studies and nutrition, forensic analysis, and veterinary science.
          </p>
        </div>

        {/* ------------------------------------------------------------------
           4. TOOLS USED ACCORDION CARDS SECTION (ALL CLOSED BY DEFAULT)
           ------------------------------------------------------------------ */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0b2b26]">
            Tools Used for Bioinformatics Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {bioinformaticsToolsData.map((category) => {
              const isOpen = openCardId === category.id;

              return (
                <div
                  key={category.id}
                  className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200"
                >
                  {/* Card Header Button */}
                  <button
                    onClick={() => toggleCard(category.id)}
                    className="w-full text-left bg-emerald-50/70 hover:bg-emerald-100/70 p-4 flex items-center justify-between transition-colors focus:outline-none"
                  >
                    <span className="font-semibold text-[#0b2b26] text-sm sm:text-base pr-2">
                      {category.title}
                    </span>
                    <span className="text-emerald-900 font-bold text-lg">
                      {isOpen ? "—" : "+"}
                    </span>
                  </button>

                  {/* Card Content (Visible only when open) */}
                  {isOpen && (
                    <div className="p-4 bg-white border-t border-slate-100">
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {category.tools.map((tool, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-slate-900 mr-2 font-bold">•</span>
                            <span>
                              <strong>{tool.name}</strong> – {tool.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}