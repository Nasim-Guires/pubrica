"use client";

import React, { useState } from "react";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";

export interface BulletPointItem {
  id: string;
  text: React.ReactNode;
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string | React.ReactNode;
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
          <Link
            href="/subject-matter-experts/"
            className="text-sky-600 font-medium hover:text-sky-700 no-underline"
          >
            500+ subject matter experts
          </Link>{" "}
          in pharmacology, toxicology, clinical studies, and regulatory affairs
        </>
      ),
    },
    {
      id: "intel",
      text: (
        <>
          Experience in{" "}
          <span className="font-semibold text-gray-900">
            ingredient/compound intelligence
          </span>
          , material compatibility, digital health platforms, biomarker
          identification, and chemical patent analysis
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
      iconPlaceholder: "/images/product-development/Identification-of-Novel-Compounds-Ingredients.png",
    },
    {
      id: "patent-landscape",
      title: "Chemical Patent Landscape Analysis",
      description:
        "In-depth review of chemical patent documents, composition of matter claims, and freedom-to-operate (FTO) evaluations to support early-stage IP strategy",
      iconPlaceholder: "/images/product-development/Chemical-Patent-Landscape-Analysis.png",
    },
    {
      id: "biomarker-target",
      title: "Biomarker & Target Discovery",
      description:
        "Identification of predictive biomarkers, therapeutic targets, and mechanism-of-action evidence to support drug repurposing and precision formulation.",
      iconPlaceholder: "/images/product-development/Biomarker-Target-Discovery.png",
    },
    {
      id: "primary-secondary",
      title: "Primary & Secondary Research",
      description:
        "Collection of data from KOL interviews, scientific publications, clinical trials, and real-world evidence (RWE) to evaluate ingredient efficacy, safety, and innovation potential.",
      iconPlaceholder: "/images/product-development/Primary-Secondary-Research.png",
    },
    {
      id: "raw-material",
      title: "Raw Material & Source Intelligence",
      description:
        "Sourcing insights for herbal extracts, functional ingredients, bioactive compounds, and rare actives, along with documentation on origin, purity, biological activity, and scientific justification.",
      iconPlaceholder: "/images/product-development/Raw-Material-Source-Intelligence.png",
    },
    {
      id: "therapeutic-mapping",
      title: "Therapeutic Area Landscape Mapping",
      description:
        "Competitive analysis and research gap assessment for disease areas of interest, helping teams align discovery pipelines with unmet clinical needs.",
      iconPlaceholder: "/images/product-development/Therapeutic-Area-Landscape-Mapping.png",
    },
    {
      id: "ip-intelligence",
      title: "Patent & Intellectual Property (IP) Intelligence",
      description: (
        <>
          We offer end-to-end support for innovation protection and competitive positioning, including:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Prior Art Search</li>
            <li>Novelty/Patentability Search</li>
            <li>Validity/Invalidity Search</li>
            <li>Infringement Search</li>
            <li>State-of-the-Art Search</li>
          </ul>
          <span className="block mt-1">These services help our clients safeguard their product ideas, assess IP risks, and make informed decisions in early-stage R&D, especially for novel compounds, ingredients, or formulations.</span>
        </>
      ),
      iconPlaceholder: "/images/product-development/Patent-Intellectual-Property-IP-Intelligence.png",
    },
    {
      id: "pubmed-synthesis",
      title: "PubMed Literature Review & Synthesis",
      description:
        "Extraction and analysis of peer-reviewed studies for efficacy, safety, and biological justification of active ingredients or novel compounds.",
      iconPlaceholder: "/images/product-development/PubMed-Literature-Review-Synthesis.png",
    },
    {
      id: "efficacy-safety",
      title: "Efficacy & Safety Profiling (Human and Preclinical Studies)",
      description:
        "We conduct structured reviews of clinical trials, in vivo, and in vitro studies to assess the therapeutic efficacy and safety profile of bioactive compounds, APIs, and natural ingredients. This evidence supports claims substantiation and risk assessment for regulatory submissions.",
      iconPlaceholder: "/images/product-development/Efficacy-Safety-Profiling-Human-and-Preclinical-Studies.png",
    },
    {
      id: "moa-research",
      title: "Mechanism-of-Action (MOA) Research",
      description:
        "Our experts analyze published literature and biochemical studies to uncover the mechanistic pathways through which a compound exerts its effect. This supports innovation positioning and is critical for precision formulation and biomarker alignment.",
      iconPlaceholder: "/images/product-development/Mechanism-of-Action-MOA-Research.png",
    },
    {
      id: "toxicological-evaluation",
      title: "Pharmacological & Toxicological Evaluation",
      description:
        "We compile data on pharmacodynamics, pharmacokinetics, and toxicology parameters for novel or existing ingredients to ensure safe dosing, bioavailability insights, and potential contraindications.",
      iconPlaceholder: "/images/product-development/Pharmacological-Toxicological-Evaluation.png",
    },
    {
      id: "disease-positioning",
      title: "Disease Association & Therapeutic Positioning",
      description:
        "We map ingredients or molecules to disease indications by reviewing epidemiological and clinical research, helping define therapeutic relevance, product differentiation, and unmet clinical needs.",
      iconPlaceholder: "/images/product-development/Disease-Association-Therapeutic-Positioning.png",
    },
    {
      id: "clinical-trial-mapping",
      title: "Clinical Trial Landscape Mapping",
      description: (
        <>
          Analyse ongoing and completed clinical trials from global registries (e.g., ClinicalTrials.gov, EUCTR) to:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Benchmark competing compounds</li>
            <li>Understand trial design strategies</li>
            <li>Support go/no-go decisions</li>
          </ul>
          <span className="block mt-1">Used for: Drug repositioning, ingredient differentiation, trial planning</span>
        </>
      ),
      iconPlaceholder: "/images/product-development/Clinical-Trial-Landscape-Mapping.png",
    },
    {
      id: "competitive-benchmarking",
      title: "Competitive Product Benchmarking",
      description: (
        <>
          Systematic comparison of formulations, actives, and claims across top competitors to guide:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Product positioning</li>
            <li>Gap identification</li>
            <li>Innovation strategy</li>
          </ul>
        </>
      ),
      iconPlaceholder: "/images/product-development/Competitive-Product-Benchmarking.png",
    },
    {
      id: "claims-substantiation",
      title: "Claims Substantiation Research",
      description:
        "Scientific justification for health, structure-function, and cosmetic claims using regulatory-compliant, peer-reviewed evidence. Important for: Labelling, advertising, legal risk reduction",
      iconPlaceholder: "/images/product-development/Claims-Substantiation-Research.png",
    },
    {
      id: "gras-novel-food",
      title: "GRAS/Novel Food/Herbal Monograph Support",
      description:
        "Data collation to support Generally Recognized As Safe (GRAS) status, novel food applications, and herbal compendium inclusion (e.g., WHO, EFSA, AYUSH).",
      iconPlaceholder: "/images/product-development/GRASNovel-FoodHerbal-Monograph-Support.png",
    },
    {
      id: "regulatory-landscape",
      title: "Regulatory Landscape Intelligence",
      description: (
        <>
          Jurisdiction-specific reviews (FDA, EMA, FSSAI, EFSA, TGA, etc.) to understand:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Ingredient restrictions</li>
            <li>Claim limitations</li>
            <li>Documentation requirements</li>
          </ul>
          <span className="block mt-1">Supports: Global product launch readiness</span>
        </>
      ),
      iconPlaceholder: "/images/product-development/Regulatory-Landscape-Intelligence.png",
    },
    {
      id: "scientific-writing",
      title: "Scientific Writing & Publication Support",
      description: (
        <ul className="list-disc pl-4 space-y-0.5">
          <li>White papers, monographs</li>
          <li>Regulatory briefs or substantiation reports</li>
          <li>Journal publications to support scientific credibility</li>
        </ul>
      ),
      iconPlaceholder: "/images/product-development/Scientific-Writing-Publication-Support.png",
    },
    {
      id: "technology-delivery",
      title: "Technology & Delivery System Scouting",
      description:
        "Identify delivery innovations like nanocarriers, liposomes, or slow-release systems that enhance ingredient bioavailability or product performance.",
      iconPlaceholder: "/images/product-development/Technology-Delivery-System-Scouting.png",
    },
    {
      id: "material-compatibility",
      title: "Material Compatibility & Safety Assessment",
      description: (
        <>
          Evaluation of materials (metals, polymers, coatings, biologics) used in devices for:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Chemical compatibility with APIs or biological tissues</li>
            <li>Interaction risks (e.g., leachable, degradation products)</li>
            <li>Surface treatment effects on drug/device performance</li>
          </ul>
          <span className="block mt-1">Supports: Formulation selection, coating systems, and device performance</span>
        </>
      ),
      iconPlaceholder: "/images/product-development/Material-Compatibility-Safety-Assessment.png",
    },
    {
      id: "biocompatibility-review",
      title: "Biocompatibility Literature Review (ISO 10993)",
      description:
        "Secondary research to assess toxicological and biological risks (cytotoxicity, irritation, sensitization, etc.) of device components, aligned with ISO 10993 series standards. Used for: Preclinical safety documentation, risk analysis, and regulatory submissions",
      iconPlaceholder: "/images/product-development/Biocompatibility-Literature-Review-ISO-10993.png",
    },
    {
      id: "device-drug-interaction",
      title: "Device-Drug Interaction Intelligence (for Combination Products)",
      description: (
        <>
          Assessment of how active ingredients interact with device materials over time, including:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Drug adsorption/loss from the container/packaging</li>
            <li>Impact of delivery mechanisms (e.g., pumps, patches, inhalers)</li>
            <li>Stability under storage and usage conditions</li>
          </ul>
        </>
      ),
      iconPlaceholder: "/images/product-development/Device-Drug-Interaction-Intelligence.png",
    },
    {
      id: "regulatory-classification",
      title: "Regulatory Classification & Predicate Device Analysis",
      description:
        "Assessments supporting legal cases involving mental health, fitness for duty, personal injury, or trauma disorders.",
      iconPlaceholder: "/images/product-development/Regulatory-Classification-Predicate-Device-Analysis.png",
    },
    {
      id: "clinical-functional-use",
      title: "Clinical & Functional Use Case Mapping",
      description: (
        <>
          Identifying and analysing clinical utility, end-user needs, and market gaps to guide:
          <ul className="list-disc pl-4 mt-1 space-y-0.5">
            <li>Feature design decisions</li>
            <li>Functional claim development</li>
            <li>Usability study planning</li>
          </ul>
        </>
      ),
      iconPlaceholder: "/images/product-development/Clinical-Functional-Use-Case-Mapping.png",
    },
  ];

  // Slice services array if toggle is active
  const visibleServices = showAllServices
    ? servicesList
    : servicesList.slice(0, 8);

  return (
    <main
      className={`w-full text-slate-800 bg-white font-sans leading-relaxed ${className}`}
    >
      {/* Header Banner Section */}
      <header className="w-full bg-[#1b2b28] text-white py-12 px-4 sm:px-8 text-center">
        <div className="max-w-5xl mx-auto border border-gray-400/40 p-8 rounded-sm">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Discovery & Intelligence Services – Product Development Service
          </h1>

          <p className="text-xs sm:text-sm md:text-base max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Whether you&apos;re discovering novel bioactive compounds,
            validating ingredients, evaluating therapeutic pipelines, analyzing
            medical device materials, or entering new health markets,
            Pubrica&apos;s Core Discovery & Intelligence Services transform
            scientific data into actionable insights.
          </p>
        </div>
      </header>

      {/* Main Intro & Key Points Section */}
      <section className="max-w-6xl mx-auto px-2   sm:px-8 py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-2">
          Discovery and Intelligence Research Services for Product Development:
          Transforming Ideas into Market-Ready Solutions
        </h2>

        <h3 className="text-base sm:text-lg font-bold text-[#1b2b28] mb-6">
          Scientific Product Development and Research Gap Analyses
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column Text Content */}
          <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-gray-700">
            <p>
              At Pubrica, we offer end-to-end scientific product development
              services driven by deep{" "}
              <Link
                href="/academy/discovery-and-intelligence/discovery-intelligence-drug-development/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                discovery and intelligence
              </Link>{" "}
              research to support{" "}
              <Link
                href="/Industries/pharmaceutical/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                pharmaceutical
              </Link>
              ,{" "}
              <Link
                href="/Industries/biotechnology/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                biotechnology
              </Link>
              ,{" "}
              <Link
                href="/Industries/nutraceutical-research/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                nutraceutical
              </Link>
              ,{" "}
              <Link
                href="/Industries/medical-device/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                medical device
              </Link>
              ,{" "}
              <Link
                href="/Industries/cosmeceutical-research/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                cosmeceuticals
              </Link>
              , herbal, pet health, life sciences, and healthcare organizations.
            </p>

            <p>
              We built expertise in early-stage discovery, strategic thinking,
              and regulatory-compliant development, transforming clients&apos;
              innovative ideas into safe, effective, and market-ready products
              from concept to clinic and beyond. We provide primary and
              secondary research, competitive intelligence, biomarker discovery,
              medical device discovery services, continuing education, clinical
              trials, mechanism-of-action studies, pharmacological evaluation,
              and linked research papers to assure regulatory readiness and
              formulation suitability, chemical patent evaluation,
              biocompatibility ISO 10993, therapeutic landscapes, empowering
              R&D teams with data-driven insights to accelerate innovation and
              commercialization.
            </p>

            <p>
              With a proven track record of delivering 1,000+ scientific
              research projects across pharmaceuticals, nutraceuticals,
              cosmeceuticals, biotech, herbal, and pet health domains, Pubrica
              stands as a trusted partner for evidence-driven discovery.
            </p>

            {/* Bulleted List */}
            <ul className="space-y-2.5 pt-2">
              {keyHighlights.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start gap-2"
                >
                  <span className="text-red-600 font-bold mt-0.5">
                    •
                  </span>

                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="pt-1">
              We bring the depth of scientific rigor and cross-functional
              expertise needed to guide your discovery process with precision
              and speed.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <GetFreeQuoteButton />
            </div>
          </div>

          {/* Right Image */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-md h-72 sm:h-80 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative">
              <Image
                src="/images/product-development/Discovery-and-Intelligence-Research-Services-for-Product-Development.png"
                alt="Discovery and Intelligence Research Services for Product Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-full bg-slate-50/60 pt-6 pb-12 px-4 sm:px-8 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto">
          <header className="mb-6 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-1.5">
              What We Do
            </h2>

            <h3 className="text-sm sm:text-base font-bold text-[#1b2b28] mb-3">
              Our Services – Discovery & Intelligence
            </h3>

            <p className="text-xs sm:text-sm text-gray-700 max-w-5xl leading-relaxed">
              At Pubrica, our{" "}
              <Link
                href="/academy/discovery-and-intelligence/discovery-intelligence-drug-development/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                Discovery & Intelligence Services
              </Link>{" "}
              aim to enhance innovation in all facets of pharmaceuticals,
              nutraceuticals, biotechnology, herbal, pet health, and medical
              devices. We provide a comprehensive service to R&D, regulatory,
              and{" "}
              <Link
                href="/academy/discovery-and-intelligence/pharmaceutical-industry-drug-development-pricing-marketing/"
                className="text-sky-600 font-medium hover:text-sky-700 no-underline"
              >
                product development
              </Link>{" "}
              teams to help uncover and confirm data-driven, evidence-based
              insights to develop drug candidates, raw materials, excipients,
              novel compounds, and bioactive ingredients.
            </p>
          </header>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleServices.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-lg p-5 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Icon Section Image Component */}
                  <div className="w-10 h-10 mb-4 bg-emerald-50 rounded flex items-center justify-center border border-emerald-300 relative overflow-hidden">
                    <Image
                      src={service.iconPlaceholder}
                      alt={service.title}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-[#1b2b28] mb-2 leading-snug">
                    {service.title}
                  </h4>

                  <div className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Read More Toggle Button */}
          <div className="mt-8 text-center">
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