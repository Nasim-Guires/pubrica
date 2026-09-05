"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const discoverySteps = [
  {
    id: "target-identification",
    title: "Target Identification and Discovery of Potential Drugs",
    description: [
      "TLead compound identification is a pivotal next step in the drug discovery process, where researchers identify and select promising compounds that act on a validated target. ",
      "Lead compound identification includes rigorous analysis of compound potency, selectivity, pharmacokinetics, and safety profiles. Successful identification of lead compounds provides a starting point for further optimization and development, ultimately leading to potential treatments.",
    ],
    image: {
      src: "/images/industries/pharmaceutical/Target-Identification-and-Discovery-of-Potential-Drugs.webp",
      alt: "Researchers examining samples during target identification",
    },
  },
  {
    id: "target-validation",
    title: "Target Validation for the Drug Development Process",
    description: [
      "After target identification, researchers conduct extensive experiments and studies to validate whether modulating the target will result in the desired therapeutic effects. This is called target validation. ",
      "Target validation establishes the relevance and potential efficacy of altering the target, guiding the approach to identifying a new drug candidate with therapeutic benefit and reducing the risk of costly failures in later stages of a drug program.",
    ],
    image: {
      src: "/images/industries/pharmaceutical/Target-Validation-for-the-Drug-Development-Process.webp",
      alt: "Pharmacist reviewing blister packs of tablets for target validation",
    },
  },
  {
    id: "lead-compound-identification",
    title: "Lead Compound Identification",
    description: [
      "Lead compound identification is a pivotal next step in the drug discovery process, where researchers identify and select promising compounds that act on a validated target. ",
      "Lead compound identification includes rigorous analysis of compound potency, selectivity, pharmacokinetics, and safety profiles. Successful identification of lead compounds provides a starting point for further optimization and development, ultimately leading to potential treatments.",
    ],
    image: {
      src: "/images/industries/pharmaceutical/Lead-Compound-Identification.webp",
      alt: "Scientists analyzing a compound sample in a laboratory",
    },
  },
  {
    id: "lead-optimization",
    title: "Lead Optimization",
    description: [
      "After a lead compound is identified, it will be refined and optimized to enhance its potency, selectivity, and pharmacokinetic properties. Additional changes may be necessary to improve the expected safety profile by minimizing potential toxicity. Through cycles of chemical modifications, structure-activity relationship studies, and biological evaluations, researchers work to improve the therapeutic potential of the lead compound. ",
    ],
    image: {
      src: "/images/industries/pharmaceutical/Lead-Optimization.webp",
      alt: "Chemist optimizing a lead compound formulation in a lab",
    },
  },
];

const publishedPapers = [
  {
    title:
      "Novel Approaches in the Drug Development and Delivery Systems for Age-Related Macular Degeneration",
    authors: "Paliwal, H., Prajapati, B. G., Srichana, T., Singh, S., & Patel, R. J.",
    journal: "Life (Basel, Switzerland)",
    publisher: "MDPI",
    impactFactor: "3.4",
    cover: {
      src: "/images/industries/pharmaceutical/sample-works-1.webp",
      alt: "Cover of the published journal Life, featuring the macular degeneration research paper",
    },
  },
];

const experts = [
  {
    name: "Dr. Maria",
    credentials: "PHD - Pharmaceutical Research",
    experience: "10 years of experience",
    manuscripts: "100+ manuscripts edited",
    photo: {
      src: "/images/industries/pharmaceutical/Dr.-Maria.webp",
      alt: "Portrait of Dr. Maria, PhD in Pharmaceutical Research",
    },
  },
  {
    name: "Dr. Julie",
    credentials: "PHD - Pharmaceutical Research",
    experience: "33 years of experience",
    manuscripts: "100+ manuscripts edited",
    photo: {
      src: "/images/industries/pharmaceutical/Dr.-Julie.webp",
      alt: "Portrait of Dr. Julie, PhD in Pharmaceutical Research",
    },
  },
  {
    name: "Dr. Michelle",
    credentials: "PHD - Pharmaceutical Research",
    experience: "10 years of experience",
    manuscripts: "100+ manuscripts edited",
    photo: {
      src: "/images/industries/foods-nutraceuticals/Dr.-Raghav-Varma.webp",
      alt: "Portrait of Dr. Michelle, PhD in Pharmaceutical Research",
    },
  },
];

export default function PharmaceuticalDiscoveryAndPublishingPage() {
  const [activeId, setActiveId] = useState(discoverySteps[0].id);
  const activeStep =
    discoverySteps.find((step) => step.id === activeId) ?? discoverySteps[0];

  return (
    <main className="max-w-6xl mx-auto px-2 py-3">
      {/* Hero / Intro */}
      <section className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black   mb-3">
          Drug Discovery And Development Process
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/industries/pharmaceutical/Drug-Discovery-and-Development-Process.webp"
            alt="Scientist holding a glass vial of medicine during the drug discovery phase"
            width={640}
            height={480}
            priority
            className="rounded-lg object-cover w-full h-auto"
          />

          <div>
            <h2 className="text-xl font-semibold mb-3">
              Discovering New Drugs: The Importance Of The Discovery Phase In
              Drug Development
            </h2>
            <p className="text-gray-700 mb-4">
              The discovery phase of drug development is an early, critical
              part of the process where potential drug targets are identified
              and validated to select the most promising candidate for
              advancement.
            </p>
            <p className="text-gray-700">
              The drug discovery and development process is long,
              challenging, and rewarding at the same time. It often takes
              10-15 years and can cost billions of dollars to bring a new
              treatment or therapy to market.
            </p>
          </div>
        </div>
      </section>

      {/* Steps in the process — interactive tabs */}
      <section className="py-5 max-w-6xl mx-auto px-2">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Steps In The Drug Discovery Process
          </h2>
          <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            The process begins with the identification of a new target molecule, a protein or other molecule involved in the disease process. Once a target molecule is identified, scientists must design and synthesize a new compound that will interact with the target molecule and influence or inhibit its function.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
          {/* Tab list */}
          <div className="space-y-2">
            {discoverySteps.map((step) => {
              const isActive = step.id === activeStep.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-colors ${isActive
                    ? "bg-[#1b3b32] text-white font-semibold shadow-sm"
                    : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-[#1b3b32]"
                    }`}
                >
                  {step.title}
                </button>
              );
            })}
          </div>

          {/* Tab panel - light, clean design with compact spacing */}
          <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-5 md:p-6 shadow-sm">
            <div className="relative w-full h-[220px] md:h-[280px] rounded-lg overflow-hidden mb-5 bg-gray-50">
              <Image
                src={activeStep.image.src}
                alt={activeStep.image.alt}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-[#1b3b32] mb-3">
              {activeStep.title}
            </h3>

            <div className="space-y-3 mb-5">
              {activeStep.description.map((paragraph, i) => (
                <p key={i} className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <Link
              href="/order-now"
              className="inline-block bg-[#1b3b32] text-white uppercase text-xs font-semibold tracking-wide px-5 py-2.5 rounded-lg hover:bg-[#122822] transition-colors"
            >
              Request A Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Where our authors publish */}
      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Where Our Authors Publish
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our authors share expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach.
          </p>
        </div>

        <div className="space-y-6">
          {publishedPapers.map((paper) => (
            <div
              key={paper.title}
              className="bg-[#fafcfa] border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-center"
            >
              <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-white border border-gray-100 shadow-inner flex items-center justify-center p-2">
                <Image
                  src={paper.cover.src}
                  alt={paper.cover.alt}
                  fill
                  className="object-contain p-1"
                />
              </div>

              <div className="space-y-3 text-sm md:text-base text-gray-700">
                <div>
                  <span className="font-bold text-gray-900">Paper Title: </span>
                  <span className="text-gray-800">{paper.title}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Author: </span>
                  <span>{paper.authors}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Journal Name: </span>
                  <span className="text-[#1b3b32] font-semibold">{paper.journal}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Publisher: </span>
                  <span>{paper.publisher}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-900">Impact factor: </span>
                  <span>{paper.impactFactor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert team */}
      <section className="py-6 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-3">
            Our Expert Pharmaceutical Research
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-white border border-gray-200/60 rounded-xl p-6 flex flex-col items-start shadow-sm hover:border-gray-300 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4 w-full">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                  <Image
                    src={expert.photo.src}
                    alt={expert.photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">{expert.name}</h3>
                  <p className="text-xs text-[#1b3b32] font-semibold">{expert.credentials}</p>
                </div>
              </div>

              <div className="w-full space-y-1.5 text-xs text-gray-600 pt-3 border-t border-gray-100">
                <p>{expert.experience}</p>
                <p>{expert.manuscripts}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}