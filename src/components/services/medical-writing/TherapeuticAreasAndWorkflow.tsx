"use client";

import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const IMG = "/images/medical-writing";

interface TherapeuticArea {
  id: number;
  name: string;
  iconSrc: string;
  href: string;
}

const therapeuticAreas: TherapeuticArea[] = [
  { id: 1, name: "Endocrinology", iconSrc: `${IMG}/Endocrinology.png`, href: "/subject-matter-experts/" },
  { id: 2, name: "Haematology", iconSrc: `${IMG}/Haematology.png`, href: "/subject-matter-experts/" },
  { id: 3, name: "Gastroenterology", iconSrc: `${IMG}/Gastroenterology.png`, href: "/subject-matter-experts/" },
  { id: 4, name: "Dermatology", iconSrc: `${IMG}/Dermatology.png`, href: "/subject-matter-experts/dermatology/" },
  { id: 5, name: "Oncology", iconSrc: `${IMG}/Oncology-.png`, href: "/subject-matter-experts/" },
  { id: 6, name: "Cardiology", iconSrc: `${IMG}/Cardiology.png`, href: "/subject-matter-experts/cardiology/" },
  { id: 7, name: "Neurology", iconSrc: `${IMG}/Neurology.png`, href: "/subject-matter-experts/neurology/" },
  { id: 8, name: "Urology", iconSrc: `${IMG}/Urology.png`, href: "/subject-matter-experts/" },
  { id: 9, name: "Paediatrics", iconSrc: `${IMG}/Paediatrics.png`, href: "/subject-matter-experts/" },
  { id: 10, name: "Immunology", iconSrc: `${IMG}/Immunology.png`, href: "/subject-matter-experts/" },
  { id: 11, name: "Devices (Class I–III)", iconSrc: `${IMG}/Devices-Class-I-III.png`, href: "/subject-matter-experts/" },
  { id: 12, name: "Obstetrics and Gynaecology", iconSrc: `${IMG}/Obstetrics-Gynaecology.png`, href: "/subject-matter-experts/" },
  { id: 13, name: "Psychiatry", iconSrc: `${IMG}/Psychiatry.png`, href: "/subject-matter-experts/psychiatry/" },
  { id: 14, name: "Geriatrics", iconSrc: `${IMG}/Geriatrics.png`, href: "/subject-matter-experts/" },
  { id: 15, name: "Rheumatology", iconSrc: `${IMG}/Rheumatology.png`, href: "/subject-matter-experts/" },
  { id: 16, name: "Genetic Disorders", iconSrc: `${IMG}/Genetic-Disorders.png`, href: "/subject-matter-experts/" },
];

// --- Workflow Process Data ---
interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  isTop: boolean;
  iconSrc: string;
}

const steps: WorkflowStep[] = [
  {
    stepNumber: 1,
    title: "CONSULTATION & SCOPING",
    iconSrc: `${IMG}/1-Consultation-Scoping.png`,
    description:
      "Our first step is an engagement discussion with you to understand what your project goals and objectives are, the types of content you are looking for, the audiences you will be targeting, any regulatory or publication context, and the desired timelines. It is important for a consistent baseline to build an appropriate scope from, and to be engaged collaboratively, and deliver as you would expect.",
    position: "bottom",
  },
  {
    stepNumber: 2,
    title: "LITERATURE SEARCH & CONTEXT GATHERING",
    iconSrc: `${IMG}/Literature-Search-Context-Gathering.png`,
    description:
      "We conduct a search of the relevant primary literature, grey literature, any applicable guidelines (e.g., ICH, MDR, GCP), and/or any relevant internal documentation (e.g., product monographs, protocols). We also will create the scientific context and keep the foundation material that allows the writing to be performed accurately.",
    position: "top",
  },
  {
    stepNumber: 3,
    title: "MEDICAL WRITING & DEVELOPMENT",
    iconSrc: `${IMG}/Medical-Writing-Development.png`,
    description:
      "Our team of trained writers will create the appropriate content according to your specific needs, whether that’s a peer-reviewed manuscript, CTD Module 2, Instructions for Use (IFU), a Medical Science Liaison (MSL) slide deck, or a patient information leaflet. We will maintain scientific integrity, use the correct terminology, produce content that is suitable for the intended audience.",
    position: "bottom",
  },
  {
    stepNumber: 4,
    title: "QUALITY REVIEW & DELIVERY",
    iconSrc: `${IMG}/Quality-Review-Delivery.png`,
    description:
      "Every document has multiple levels of quality assurance; we review for scientific accuracy, format correctness, reference check, and plagiarism. The final deliverables can also be provided with an optional editorial/QC report if needed for transparency, accountability, and traceability.",
    position: "top",
  },
];

export default function TherapeuticAreasAndWorkflow(): React.ReactElement {
  // Step 1 active by default as shown in the screenshot
  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <div className="w-full font-sans text-slate-800 bg-[#f8f9f9]">
      {/* ---------------- SECTION 1: THERAPEUTIC AREAS ---------------- */}
      <section className="max-w-6xl mx-auto py-7 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-12 text-center sm:text-left">
          Our Therapeutic Area We Cover
        </h2>

        {/* Grid with vertical/horizontal border lines matching screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-200">
          {therapeuticAreas.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className="border-b border-r border-slate-200 p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-slate-50 transition-colors duration-200 group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#0d3b36] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200 shadow-sm overflow-hidden">
                <Image
                  src={area.iconSrc}
                  alt={area.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#0d3b36] transition-colors">
                {area.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 2: WORKFLOW PROCESS ---------------- */}
      <EditorialWorkflowSection
        heading="Our Workflow Process"
        subheading="Standardized. Flexible. Quality-driven."
        description="At Pubrica, we apply a proven writing and quality assurance process across all our service categories—from academic manuscripts to regulatory submissions and commercial content. Whether you require scientific writing, regulatory documentation, device dossiers, or marketing materials, our workflow ensures precision, compliance, and clarity."
        steps={steps}
      />
    </div>
  );
}

// --- SUB-COMPONENT FOR WORKFLOW CARD ---
function CardContent({
  step,
  isActive,
}: {
  step: StepItem;
  isActive: boolean;
}): React.ReactElement {
  return (
    <div
      className={`w-full p-5 rounded-sm border transition-all duration-300 shadow-sm cursor-pointer min-h-[360px] flex flex-col justify-between ${isActive
          ? "bg-[#3b3c3d] border-[#3b3c3d] text-white"
          : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
        }`}
    >
      <div>
        <h3
          className={`text-xs sm:text-sm font-bold tracking-wider mb-3 uppercase ${isActive ? "text-white" : "text-slate-800"
            }`}
        >
          {step.title}
        </h3>
        <p
          className={`text-xs leading-relaxed ${isActive ? "text-slate-200" : "text-slate-600"
            }`}
        >
          {step.description}
        </p>
      </div>

      <div className="pt-4 flex justify-start">
        <Image
          src={step.iconSrc}
          alt=""
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </div>
  );
}