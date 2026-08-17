"use client";

import { useState } from "react";
import Image from "next/image";

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
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero / Intro */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-teal-800 mb-8">
          Drug Discovery And Development Process
        </h1>

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
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">
          Steps In The Drug Discovery Process
        </h2>
        <p className="text-gray-700 mb-8 max-w-3xl">
          The process begins with the identification of a new target
          molecule, a protein or other molecule involved in the disease
          process. Once a target molecule is identified, scientists must
          design and synthesize a new compound that will interact with the
          target molecule and influence or inhibit its function.
        </p>

        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          {/* Tab list */}
          <div className="border rounded-md divide-y">
            {discoverySteps.map((step) => {
              const isActive = step.id === activeStep.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveId(step.id)}
                  className={`w-full text-left px-4 py-4 font-semibold transition-colors ${
                    isActive
                      ? "border border-teal-800 text-teal-800 -m-px"
                      : "text-teal-800 hover:bg-gray-50"
                  }`}
                >
                  {step.title}
                </button>
              );
            })}
          </div>

          {/* Tab panel */}
          <div>
            <Image
              src={activeStep.image.src}
              alt={activeStep.image.alt}
              width={800}
              height={450}
              className="rounded-md object-cover w-full h-auto mb-6"
            />

            <h3 className="text-xl font-bold mb-4">{activeStep.title}</h3>

            {activeStep.description.map((paragraph, i) => (
              <p key={i} className="text-gray-700 mb-4">
                {paragraph}
              </p>
            ))}

            <button
              type="button"
              className="bg-teal-900 text-white uppercase text-sm font-semibold tracking-wide px-6 py-3 hover:bg-teal-800 transition-colors"
            >
              Request A Quote
            </button>
          </div>
        </div>
      </section>

      {/* Where our authors publish */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-teal-800 text-center mb-2">
          Where Our Authors Publish
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
          Our authors share expert content in top-tier journals, conferences,
          and platforms, maximizing and amplifying its recognition and reach.
        </p>

        {publishedPapers.map((paper) => (
          <div
            key={paper.title}
            className="border rounded-lg p-6 grid md:grid-cols-[200px_1fr] gap-6 items-start"
          >
            <Image
              src={paper.cover.src}
              alt={paper.cover.alt}
              width={200}
              height={260}
              className="rounded object-cover w-full h-auto"
            />
            <div>
              <p className="font-semibold">Paper Title:</p>
              <p className="mb-3">{paper.title}</p>
              <p className="font-semibold">Author:</p>
              <p className="mb-3">{paper.authors}</p>
              <p>
                <span className="font-semibold">Journal Name: </span>
                {paper.journal}
              </p>
              <p>
                <span className="font-semibold">Publisher: </span>
                {paper.publisher}
              </p>
              <p>
                <span className="font-semibold">Impact factor: </span>
                {paper.impactFactor}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Expert team */}
      <section>
        <h2 className="text-2xl font-bold text-teal-800 mb-2">
          Our Expert Pharmaceutical Research
        </h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          Our team of industry specialists offers unrivalled expertise and
          perspectives to provide complete solutions with precision and
          originality.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="bg-teal-50 rounded-lg p-6 flex flex-col items-start"
            >
              <Image
                src={expert.photo.src}
                alt={expert.photo.alt}
                width={64}
                height={64}
                className="rounded-full object-cover mb-3"
              />
              <h3 className="font-semibold">{expert.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{expert.credentials}</p>
              <p className="text-sm">{expert.experience}</p>
              <p className="text-sm">{expert.manuscripts}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}