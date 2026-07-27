"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  BookOpen,
  Lightbulb,
  TrendingUp,
  GitMerge,
  Users,
  Shuffle,
  Sliders,
  Database,
  BarChart2,
  ShieldCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react";

interface ServeCard {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  imageSrc: string;
}

const serveCards: ServeCard[] = [
  {
    id: "academic",
    title: "Academic Researchers",
    subTitle: "Experimental Design for Theses, Dissertations, and Publications",
    description:
      "We design and review experimental research methodologies including statistical and research methodology design for theses, dissertations, and academic publications (manuscript), ensuring accuracy, reproducibility, and compliance with journal standards.",
    imageSrc: "/images/services/academic-researchers.jpg",
  },
  {
    id: "pharma",
    title: "Experimental Design Services",
    subTitle: "Rigorous Preclinical & Clinical Trial Design",
    description:
      "Pubrica provides protocol development and experimental design support for pre-clinical studies, randomized controlled trials (RCTs), and clinical trial designs for pharma studies, helping companies generate data suitable for regulatory approval.",
    imageSrc: "/images/services/pharma-biotech.jpg",
  },
  {
    id: "cro",
    title: "Independent Design Support",
    subTitle: "Scalable Statistical & Protocol Optimization",
    description:
      "Our team offers independent study design review, statistical validation, and methodological consultation and bias-free experimental research design support to CROs, ensuring scientifically sound and bias-free experimental studies.",
    imageSrc: "/images/services/clinical-research.jpg",
  },
  {
    id: "med-device",
    title: "Regulatory Study Designs",
    subTitle: "Usability & Performance Testing Protocols",
    description:
      "We develop and validate experimental and quasi-experimental designs to meet regulatory requirements for diagnostic, screening, and interventional studies involving medical devices.",
    imageSrc: "/images/services/medical-device.jpg",
  },
  {
    id: "public-health",
    title: "Public Health Researchers",
    subTitle: "Epidemiological and Intervention Design",
    description:
      "From epidemiological designs to intervention studies, Pubrica ensures that observational, descriptive, and community-based research designs are structured for scientific accuracy and policy relevance.",
    imageSrc: "/images/services/public-health.jpg",
  },
];

interface ProcessStep {
  number: number;
  icon: React.ElementType;
  title: string;
  role: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: Search,
    title: "Research Problem Identification",
    role: "Subject Specialists",
    description:
      "Subject specialists help define and refine the research problem, ensuring scientific relevance and novelty.",
  },
  {
    number: 2,
    icon: BookOpen,
    title: "Literature Review & Gap Analysis",
    role: "Subject Specialists + Methodology Experts",
    description:
      "Our team reviews existing studies to identify gaps, avoid redundancy, and justify the research need.",
  },
  {
    number: 3,
    icon: Lightbulb,
    title: "Hypothesis Formulation",
    role: "Subject Specialists + Methodology Experts",
    description:
      "Hypotheses or research questions are crafted based on domain knowledge and methodological rigor.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Variable Definition & Operationalization",
    role: "Methodology Experts",
    description:
      "Our methodology experts define independent, dependent, and control variables, ensuring measurable outcomes.",
  },
  {
    number: 5,
    icon: GitMerge,
    title: "Study Design & Protocol Development",
    role: "Methodology Experts + Clinicians",
    description:
      "Methodology experts select the design type (true, quasi, descriptive, RCT, crossover, factorial), while clinicians align protocols with clinical and regulatory standards.",
  },
  {
    number: 6,
    icon: Users,
    title: "Sample Size & Recruitment",
    role: "Statisticians + Methodology Experts",
    description:
      "Statisticians perform power analysis and sample size determination, while methodology experts design unbiased sampling strategies.",
  },
  {
    number: 7,
    icon: Shuffle,
    title: "Randomization & Control Measures",
    role: "Statisticians + Clinicians",
    description:
      "Statisticians implement randomization methods and blinding techniques, while clinicians ensure practical applicability.",
  },
  {
    number: 8,
    icon: Sliders,
    title: "Measurements & Instrumentation",
    role: "Subject Specialists + Methodology Experts",
    description:
      "Specialists recommend appropriate scientific instruments and validated tools, while methodology experts ensure standardization.",
  },
  {
    number: 9,
    icon: Database,
    title: "Data Collection Methods",
    role: "Methodology Experts + Regulatory Consultants",
    description:
      "Methodology experts structure the data collection process, while regulatory consultants ensure compliance.",
  },
  {
    number: 10,
    icon: BarChart2,
    title: "Data Analysis & Statistical Plan",
    role: "Statisticians",
    description:
      "Statisticians define the analytical framework, statistical models, and tests to ensure accurate interpretation of results.",
  },
  {
    number: 11,
    icon: ShieldCheck,
    title: "Ethical & Regulatory Compliance",
    role: "Regulatory Experts",
    description:
      "Our regulatory specialists oversee ethics approvals, informed consent, and compliance with international research standards.",
  },
  {
    number: 12,
    icon: FileCheck,
    title: "Interpretation, Validation & Reporting",
    role: "Subject Specialists + Methodology Experts",
    description:
      "Findings are validated, contextualized with existing literature, and structured for publication or funding submission.",
  },
];

export default function WhoWeServeAndProcess() {
  return (
    <div className="w-full bg-white font-sans text-slate-800">
      {/* ========================================================= */}
      {/* 1. WHO WE SERVE SECTION WITH HOVER CARD EFFECT             */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Who We Serve
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-5xl">
            At Pubrica, our{" "}
            <Link
              href="/research-services/experimental-design/"
              className="text-sky-600 hover:underline font-medium"
            >
              experimental design
            </Link>{" "}
            services cater to a wide range of clients across the scientific,
            academic, and industrial sectors, ensuring robust, reliable, and
            reproducible research outcomes.
          </p>
        </div>

        {/* 3-Column Grid for Serving Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serveCards.map((card) => (
            <div
              key={card.id}
              className="group relative h-72 sm:h-80 w-full overflow-hidden rounded-xs bg-black shadow-md cursor-pointer"
            >
              {/* Default State Image */}
              <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Dark gradient overlay at the bottom for title readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              </div>

              {/* Default Bottom Title Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {card.title}
                </h3>
              </div>

              {/* Hover Overlay Content Container (Slides/Fades in on hover) */}
              <div className="absolute inset-0 bg-black/95 p-6 z-20 flex flex-col justify-start text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {card.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-semibold text-emerald-400 mb-3 leading-snug">
                  {card.subTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed overflow-y-auto">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SPEED UP RESEARCH CALLOUT BANNER                        */}
      {/* ========================================================= */}
      <section className="w-full bg-[#03281d] text-white py-12 px-4 sm:px-6 lg:px-8 text-center my-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            Speed up your research journey with Pubrica’s Experimental Design
            Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal max-w-3xl mx-auto">
            Gain access to expert guidance that ensures scientifically sound
            study designs, minimizing errors and delays while maximizing your
            chances of successful research outcomes and publication.
          </p>
          <div className="pt-2">
            <Link
              href="/get-a-quote"
              className="inline-block bg-[#b30000] hover:bg-[#8e0000] text-white font-bold text-xs sm:text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. STEP-BY-STEP PROCESS SECTION                            */}
      {/* ========================================================= */}
      <section className="w-full bg-slate-50/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header */}
          <div className="text-center space-y-3 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
              Experimental Plan In Research – A Multidisciplinary Approach To
              Robust Study Design
            </h2>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
              Our Step-By-Step Process
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              At Pubrica, we believe a strong{" "}
              <Link
                href="/research-services/experimental-design/"
                className="text-sky-600 hover:underline font-medium"
              >
                experimental plan
              </Link>{" "}
              requires the expertise of more than just subject specialists. Our
              research methodology experts, statisticians, clinicians, and
              regulatory consultants work together to design valid, reliable,
              and reproducible research studies.
            </p>
          </div>

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isEndOfRow = (idx + 1) % 4 === 0;

              return (
                <div key={step.number} className="relative flex flex-col">
                  <div className="bg-white rounded-xl p-6 shadow-xs border border-slate-200/80 flex-1 flex flex-col justify-between hover:shadow-md transition-shadow">
                    <div className="space-y-4">
                      {/* Icon Header */}
                      <div className="p-3 bg-slate-100 rounded-lg w-fit text-[#0e3b38]">
                        <IconComp className="w-6 h-6 stroke-[1.5]" />
                      </div>

                      {/* Title & Role */}
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {step.title}
                        </h4>
                        <p className="text-xs font-medium text-slate-500">
                          ({step.role})
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Horizontal Connector Arrow (Desktop layout, visible between row items) */}
                  {!isEndOfRow && idx !== processSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
