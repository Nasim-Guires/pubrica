"use client";

import React, { useState } from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export interface BulletPointItem {
  id: string;
  text: React.ReactNode;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  iconPlaceholder: string;
}

export interface ServicesResearchProductDevelopmentProps {
  className?: string;
}

export default function ServicesResearchProductDevelopment({
  className = "",
}: ServicesResearchProductDevelopmentProps) {
  // Toggle state to handle "Read More" for the services list grid
  const [showAllServices, setShowAllServices] = useState<boolean>(false);

  const keyHighlights: BulletPointItem[] = [
    {
      id: "sme",
      text: (
        <>
          <span className="font-semibold text-gray-900">500+ subject matter experts</span> in pharmacology, toxicology, clinical studies, and regulatory affairs
        </>
      ),
    },
    {
      id: "intel",
      text: (
        <>
          Experience in <span className="font-semibold text-gray-900">ingredient/compound intelligence</span>, material compatibility, digital health platforms, biomarker identification, and chemical patent analysis
        </>
      ),
    },
    {
      id: "in-house",
      text: "In-house capabilities to conduct primary and secondary research with access to worldwide clinical trial databases, peer-reviewed literature, and regulatory sources",
    },
    {
      id: "therapeutic",
      text: "Strong understanding of therapeutic landscapes, bioactive component validation, and formulation readiness",
    },
    {
      id: "regulatory",
      text: "Support for validating concepts through regulatory-compliant discovery documentation",
    },
  ];

  const servicesList: ServiceCardItem[] = [
    {
      id: "identification-compounds",
      title: "Identification of Novel Compounds & Ingredients",
      description:
        "Discovery of bioactive components, APIs, and natural actives using structured literature reviews, databases, and structure-activity relationship (SAR) analysis.",
      iconPlaceholder: "[ Icon: Compound ID ]",
    },
    {
      id: "patent-landscape",
      title: "Chemical Patent Landscape Analysis",
      description:
        "In-depth review of chemical patent documents, composition of matter claims, and freedom-to-operate (FTO) evaluations to support early-stage IP strategy.",
      iconPlaceholder: "[ Icon: Patent Analysis ]",
    },
    {
      id: "biomarker-target",
      title: "Biomarker & Target Discovery",
      description:
        "Identification of predictive biomarkers, therapeutic targets, and mechanism-of-action evidence to support drug repurposing and precision formulation.",
      iconPlaceholder: "[ Icon: Biomarker Discovery ]",
    },
    {
      id: "primary-secondary",
      title: "Primary & Secondary Research",
      description:
        "Collection of data from KOL interviews, scientific publications, clinical trials, and real-world evidence (RWE) to evaluate ingredient efficacy, safety, and innovation potential.",
      iconPlaceholder: "[ Icon: Research Data ]",
    },
    {
      id: "raw-material",
      title: "Raw Material & Source Intelligence",
      description:
        "Sourcing insights for herbal extracts, functional ingredients, bioactive compounds, and rare actives, along with documentation on origin, purity, biological activity, and scientific justification.",
      iconPlaceholder: "[ Icon: Raw Materials ]",
    },
    {
      id: "therapeutic-mapping",
      title: "Therapeutic Area Landscape Mapping",
      description:
        "Competitive analysis and research gap assessment for disease areas of interest, helping teams align discovery pipelines with unmet clinical needs.",
      iconPlaceholder: "[ Icon: Area Mapping ]",
    },
    {
      id: "ip-intelligence",
      title: "Patent & Intellectual Property (IP) Intelligence",
      description:
        "We offer end-to-end support for innovation protection and competitive positioning, including Prior Art Search and Novelty/Patentability.",
      iconPlaceholder: "[ Icon: IP Intelligence ]",
    },
    {
      id: "pubmed-synthesis",
      title: "PubMed Literature Review & Synthesis",
      description:
        "Extraction and analysis of peer-reviewed studies for efficacy, safety, and biological justification of active ingredients or novel compounds.",
      iconPlaceholder: "[ Icon: Literature Review ]",
    },
    {
      id: "efficacy-safety",
      title: "Efficacy & Safety Profiling (Human and Preclinical Studies)",
      description:
        "We conduct structured reviews of clinical trials, in vivo, and in vitro studies to assess the therapeutic efficacy and safety profile of bioactive compounds, APIs, and natural ingredients. This evidence supports claims substantiation and risk assessment for regulatory submissions.",
      iconPlaceholder: "[ Icon: Efficacy Profiling ]",
    },
    {
      id: "moa-research",
      title: "Mechanism-of-Action (MOA) Research",
      description:
        "Our experts analyze published literature and biochemical studies to uncover the mechanistic pathways through which a compound exerts its effect. This supports innovation positioning and is critical for precision formulation and biomarker alignment.",
      iconPlaceholder: "[ Icon: MOA Research ]",
    },
    {
      id: "toxicological-evaluation",
      title: "Pharmacological & Toxicological Evaluation",
      description:
        "We compile data on pharmacodynamics, pharmacokinetics, and toxicology parameters for novel or existing ingredients to ensure safe dosing, bioavailability insights, and potential contraindications.",
      iconPlaceholder: "[ Icon: Toxicology ]",
    },
    {
      id: "disease-positioning",
      title: "Disease Association & Therapeutic Positioning",
      description:
        "We map ingredients or molecules to disease indications by reviewing epidemiological and clinical research, helping define therapeutic relevance, product differentiation, and unmet clinical needs.",
      iconPlaceholder: "[ Icon: Positioning ]",
    },
  ];

  // Slice services array if toggle is active
  const visibleServices = showAllServices ? servicesList : servicesList.slice(0, 8);

  return (
    <main className={`w-full text-slate-800 bg-white font-sans leading-relaxed ${className}`}>
      {/* Header Banner Section */}
      <header className="w-full bg-[#1b2b28] text-white py-12 px-4 sm:px-8 text-center">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 rounded-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Discovery & Intelligence Services – Product Development Service
          </h1>
          <p className="text-xs sm:text-sm md:text-base max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Whether you&apos;re discovering novel bioactive compounds, validating ingredients, evaluating therapeutic pipelines, analyzing medical device materials, or entering new health markets, Pubrica&apos;s Core Discovery & Intelligence Services transform scientific data into actionable insights.
          </p>
        </div>
      </header>

      {/* Main Intro & Key Points Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-2">
          Discovery and Intelligence Research Services for Product Development: Transforming Ideas into Market-Ready Solutions
        </h2>
        <h3 className="text-base sm:text-lg font-bold text-[#1b2b28] mb-6">
          Scientific Product Development and Research Gap Analyses
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column Text Content */}
          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-gray-700">
            <p>
              At Pubrica, we offer end-to-end scientific product development services driven by deep{" "}
              <Link href="#" className="text-sky-600 underline font-medium">
                discovery and intelligence
              </Link>{" "}
              research to support{" "}
              <Link href="#" className="text-sky-600 underline font-medium">pharmaceutical</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">biotechnology</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">nutraceutical</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">medical device</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">cosmeceuticals</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">herbal</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">pet health</Link>,{" "}
              <Link href="#" className="text-sky-600 underline font-medium">life sciences</Link>, and healthcare organizations.
            </p>

            <p>
              We built expertise in early-stage discovery, strategic thinking, and regulatory-compliant development, transforming clients&apos; innovative ideas into safe, effective, and market-ready products from concept to clinic and beyond. We provide primary and secondary research, competitive intelligence, biomarker discovery, medical device discovery services, continuing education, clinical trials, mechanism-of-action studies, pharmacological evaluation, and linked research papers to assure regulatory readiness and formulation suitability, chemical patent evaluation, biocompatibility ISO 10993, therapeutic landscapes, empowering R&D teams with data-driven insights to accelerate innovation and commercialization.
            </p>

            <p>
              With a proven track record of delivering 1,000+ scientific research projects across pharmaceuticals, nutraceuticals, cosmeceuticals, biotech, herbal, and pet health domains, Pubrica stands as a trusted partner for evidence-driven discovery.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-2.5 pt-2">
              {keyHighlights.map((item) => (
                <li key={item.id} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">•</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="pt-2">
              We bring the depth of scientific rigor and cross-functional expertise needed to guide your discovery process with precision and speed.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
            <GetFreeQuoteButton/>
            </div>
          </div>

          {/* Right Image Placeholder Div */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-md h-72 sm:h-80 bg-slate-200 rounded-xl border-2 border-dashed border-gray-400 flex items-center justify-center p-4 shadow-sm">
              <span className="text-xs sm:text-sm text-gray-600 font-semibold text-center">
                [ Image Section: Scientists Working in Laboratory with Microscope & Pipette ]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full bg-slate-50/60 py-16 px-4 sm:px-8 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-2">
              What We Do
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-[#1b2b28] mb-4">
              Our Services – Discovery & Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
              At Pubrica, our{" "}
              <Link href="#" className="text-sky-600 underline font-medium">
                Discovery & Intelligence Services
              </Link>{" "}
              aim to enhance innovation in all facets of pharmaceuticals, nutraceuticals, biotechnology, herbal, pet health, and medical devices. We provide a comprehensive service to R&D, regulatory, and{" "}
              <Link href="#" className="text-sky-600 underline font-medium">
                product development
              </Link>{" "}
              teams to help uncover and confirm data-driven, evidence-based insights to develop drug candidates, raw materials, excipients, novel compounds, and bioactive ingredients.
            </p>
          </header>

          {/* Services Cards Grid (4 columns) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleServices.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-lg p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Icon Section Div Placeholder */}
                  <div className="w-10 h-10 mb-4 bg-emerald-50 rounded flex items-center justify-center border border-dashed border-emerald-300">
                    <span className="text-[9px] text-emerald-800 font-semibold text-center leading-tight">
                      {service.iconPlaceholder}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#1b2b28] mb-2 leading-snug">
                    {service.title}
                  </h4>

                  <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Read More Toggle Button */}
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAllServices(!showAllServices)}
              className="bg-[#1b2b28] hover:bg-black text-white text-xs font-semibold px-8 py-2.5 rounded transition-colors"
            >
              {showAllServices ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}