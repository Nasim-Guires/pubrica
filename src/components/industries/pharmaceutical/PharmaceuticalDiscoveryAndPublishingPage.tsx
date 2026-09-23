"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const discoverySteps = [
  {
    id: "target-identification",
    title: "Target Identification and Discovery of Potential Drugs",
    description: [
      "Target identification is the first step in the drug discovery process, where researchers identify specific molecular targets within the body that play key roles in a disease or condition. By understanding the underlying biological mechanisms and pathways associated with the disease, scientists can identify potential targets that can be modulated to achieve therapeutic effects. Target identification involves a combination of experimental and computational approaches, including genomic, proteomic, and bioinformatic analyses. ",
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

const expertEditors: ExpertEditorItem[] = [
  {
    name: "Dr. Maria",
    degree: "PHD - Pharmaceutical Research",
    experience: "10 years of experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/pharmaceutical/Dr.-Maria.webp",
    flag: "/images/country/gb.png",
  },
  {
    name: "Dr. Julie",
    degree: "PHD - Pharmaceutical Research",
    experience: "33 years of experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/pharmaceutical/Dr.-Julie.webp",
    flag: "/images/country/us.png",
  },
  {
    name: "Dr. Michelle",
    degree: "PHD - Pharmaceutical Research",
    experience: "10 years of experience",
    manuscripts: "100+ manuscripts edited",
    avatar: "/images/industries/foods-nutraceuticals/Dr.-Raghav-Varma.webp",
    flag: "/images/country/us.png",
  },
];

export default function PharmaceuticalDiscoveryAndPublishingPage() {
  const [activeId, setActiveId] = useState(discoverySteps[0].id);
  const activeStep =
    discoverySteps.find((step) => step.id === activeId) ?? discoverySteps[0];

  return (
    <main className="max-w-6xl mx-auto px-2 py-1 space-y-4">
      {/* Hero / Intro */}
      <section className="mb-2">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Drug Discovery And Development Process
        </h2>
        <p className="mb-2 text-sm text-gray-600">
          Stages in the Drug Development Process:
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Image
            src="/images/industries/pharmaceutical/Drug-Discovery-and-Development-Process.webp"
            alt="Scientist holding a glass vial of medicine during the drug discovery phase"
            width={640}
            height={480}
            priority
            className="rounded-lg object-cover w-full h-auto"
          />

          <div>
            <h2 className="text-xl font-semibold mb-2">
              Discovering New Drugs: The Importance Of The Discovery Phase In
              Drug Development
            </h2>
            <p className="text-gray-700 mb-2 text-xs md:text-sm leading-relaxed">
              The discovery phase of drug development is an early, critical
              part of the process where potential drug targets are identified
              and validated to select the most promising candidate for
              advancement.
            </p>
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              The drug discovery and development process is long, challenging, and rewarding at the same time. New medicines save lives and improve the quality of life for millions of people. The development of prescription and over-the-counter drugs, vaccines, cell therapies, medical devices, and surgical or other treatment procedures can stop diseases from getting worse or even reverse their course. However, it often takes 10-15 years and can cost billions of dollars to bring a new treatment or therapy to market.
            </p>
          </div>
        </div>
      </section>

      {/* Steps in the process — interactive tabs */}
      <section className="py-2 max-w-6xl mx-auto px-2">
        <div className="mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3b32] mb-2">
            Steps In The Drug Discovery Process
          </h2>
          <p className="text-gray-600 max-w-3xl text-sm md:text-base leading-relaxed">
            The process begins with the identification of a new target molecule, a protein or other molecule involved in the disease process. Once a target molecule is identified, scientists must design and synthesize a new compound that will interact with the target molecule and influence or inhibit its function.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 items-start">
          {/* Tab list */}
          <div className="space-y-1.5">
            {discoverySteps.map((step) => {
              const isActive = step.id === activeStep.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-colors ${isActive
                      ? "bg-[#1b3b32] text-white font-semibold shadow-sm"
                      : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-[#1b3b32]"
                    }`}
                >
                  {step.title}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div className="bg-[#fafcfa] border border-gray-100 rounded-xl p-4 md:p-5 shadow-sm">
            <div className="relative w-full h-[200px] md:h-[260px] rounded-lg overflow-hidden mb-3 bg-gray-50">
              <Image
                src={activeStep.image.src}
                alt={activeStep.image.alt}
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-[#1b3b32] mb-2">
              {activeStep.title}
            </h3>

            <div className="space-y-2 mb-4">
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
      <section className="py-2 max-w-5xl mx-auto px-2">
        <WhereAuthorsPublish
          title="Where Our Authors Publish"
          description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
          publication={{
            imageSrc:
              "/images/industries/pharmaceutical/sample-works-1.webp",
            imageAlt:
              "Cover of the published journal Life, featuring the macular degeneration research paper",
            paperTitle:
              "Novel Approaches in the Drug Development and Delivery Systems for Age-Related Macular Degeneration",
            author:
              "Paliwal, H., Prajapati, B. G., Srichana, T., Singh, S., & Patel, R. J.",
            journalName: "Life (Basel, Switzerland)",
            publisher: "MDPI",
            impactFactor: "3.4",
          }}
        />
      </section>

      {/* Expert team */}
      <section className="py-2 max-w-6xl mx-auto px-2">
        <ExpertEditorsSection
          title="Our Expert Pharmaceutical Research"
          description="Pubrica’s team of industry specialists offers unrivalled expertise and perspectives to provide complete solutions with precision and originality. Through a mix of both experience and specialization, they strive for excellence in everything they do."
          editors={expertEditors}
        />
      </section>
    </main>
  );
}