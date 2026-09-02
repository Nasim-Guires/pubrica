"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown, ArrowLeft } from "lucide-react";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

export default function AlgorithmWorkflowAndPackages() {
  // Data for 7-Step Workflow Process
  const steps = [
    {
      number: 1,
      title: "Requirement Analysis & Problem Definition",
      description:
        "We begin with a detailed consultation to understand your goals, data availability, and application context, defining whether the solution is for predictive modeling, optimization, training, or automation.",
    },
    {
      number: 2,
      title: "Data Collection & Pre-Processing",
      description:
        "We source structured and unstructured data, clean and normalize it, and reduce bias to improve model accuracy and reliability.",
    },
    {
      number: 3,
      title: "Algorithm Design & Model Development",
      description:
        "Using AI, machine learning, and optimization techniques, we design tailored algorithms and benchmark them for scalability and robustness.",
    },
    {
      number: 4,
      title: "Training & Optimisation",
      description:
        "We train algorithms on real-world datasets and fine-tune parameters for maximum efficiency and adaptability to dynamic conditions.",
    },
    {
      number: 5,
      title: "Validation & Testing",
      description:
        "Through cross-validation, stress tests, and scenario analysis, we ensure reliable performance across varied environments.",
    },
    {
      number: 6,
      title: "Deployment & Integration",
      description:
        "We integrate the algorithm seamlessly into your systems, workflows, or pipelines with minimal disruption.",
    },
    {
      number: 7,
      title: "Continuous Monitoring & Support",
      description:
        "Post-deployment, we provide ongoing monitoring, fine-tuning, and technical support to ensure long-term effectiveness.",
    },
  ];

  // Data for Pricing Packages matching exact design
  const packagesData: PackageItem[] = [
    {
      icon: "/images/editing-and-translation/basic-pacakge.png",
      title: "Basic",
      subtitle: "Foundational Algorithm Development",
      idealFor:
        "Startups, small research projects, or proof-of-concept studies.",
      includes: [
        "Initial requirement analysis and feasibility study",
        "Basic algorithm design for structured datasets",
        "Standard model training and validation",
        "Performance report and recommendations",
      ],
      turnaround: "2–3 weeks",
      cardBgColor: "#d8e3e2",
      titleColor: "#1b3d36",
    },
    {
      icon: "/images/publication-support/poster-preparation/S.png",
      title: "Standard",
      subtitle: "Optimised Algorithm Development",
      idealFor:
        "Growing enterprises and research groups needing robust solutions.",
      includes: [
        "Comprehensive requirement gathering",
        "Design and development of algorithms for structured and unstructured data",
        "Model training, optimisation, and cross-validation",
        "Integration with existing data pipelines",
        "Performance benchmarking and documentation",
      ],
      turnaround: "4–6 weeks",
      cardBgColor: "#d8c3df",
      titleColor: "#5b2c6f",
    },
    {
      icon: "/images/editing-and-translation/translation-with-editing/pro.webp",
      title: "Premium",
      subtitle: "Advanced & Custom Algorithm Solutions",
      idealFor:
        "Large-scale research, enterprise applications, and high-impact projects.",
      includes: [
        "Full consultation and strategic planning",
        "Custom algorithm development for multi-modal data",
        "Advanced model training with machine learning/AI techniques",
        "Real-time testing and fine-tuning",
        "Deployment-ready solution with full documentation",
        "Post-deployment support and updates",
      ],
      turnaround: "8–10 weeks",
      cardBgColor: "#e2cb9c",
      titleColor: "#805826",
    },
  ];

  return (
    <main className="w-full bg-[#f8fbf9] text-[#222222] font-sans pb-7">
      {/* 1. HERO TITLE BANNER */}
      <section className="bg-[#1b3d36] text-white py-5 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Algorithm Development for Training & Optimization
        </h2>
        <p className="text-sm md:text-base text-gray-200">
          From analysis to refinement, Pubrica delivers accurate, efficient, and real-world-ready algorithms.
        </p>
      </section>

      {/* 2. HOW OUR SERVICE WORKS (PROCESS FLOW SECTION) */}
      <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-3">
            How Our Algorithm Development for Training and Optimisation Service Works
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At Pubrica, we follow a systematic, collaborative process to deliver robust, scalable algorithms for scientific, healthcare, pharma, medical device, food, and nutraceutical applications. Our approach ensures precision, transparency, and measurable outcomes.
          </p>
        </div>

        {/* Workflow Snake Grid Layout with Dynamic Arrows */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">

            {/* Row 1: Steps 1 -> 2 -> 3 */}
            {steps.slice(0, 3).map((step, index) => (
              <div
                key={step.number}
                className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 bg-white min-h-[220px] justify-center"
              >
                <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow Right (Only on Desktop, except step 3) */}
                {index < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}

                {/* Arrow Down (Under Step 3 on Desktop) */}
                {index === 2 && (
                  <div className="hidden md:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}

            {/* Row 2: Steps 6 <- 5 <- 4 (Reversed grid positioning) */}
            <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 bg-white min-h-[220px] justify-center md:col-start-3">
              <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                {steps[3].number}
              </div>
              <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                {steps[3].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {steps[3].description}
              </p>
              {/* Arrow Left (Pointing to 5) */}
              <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-400">
                <ArrowLeft className="w-6 h-6" />
              </div>
            </div>

            <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 bg-white min-h-[220px] justify-center md:col-start-2 md:row-start-2">
              <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                {steps[4].number}
              </div>
              <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                {steps[4].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {steps[4].description}
              </p>
              {/* Arrow Left (Pointing to 6) */}
              <div className="hidden md:flex absolute top-1/2 -left-6 transform -translate-y-1/2 text-gray-400">
                <ArrowLeft className="w-6 h-6" />
              </div>
            </div>

            <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 bg-white min-h-[220px] justify-center md:col-start-1 md:row-start-2">
              <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                {steps[5].number}
              </div>
              <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                {steps[5].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {steps[5].description}
              </p>
              {/* Arrow Down (Under Step 6 on Desktop) */}
              <div className="hidden md:flex absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                <ArrowDown className="w-6 h-6" />
              </div>
            </div>

            {/* Row 3: Step 7 */}
            <div className="relative flex flex-col items-center text-center p-6 border rounded-xl shadow-sm border-gray-200 bg-white min-h-[220px] justify-center md:col-start-1 md:row-start-3">
              <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg -mt-10 mb-4 border-4 border-white">
                {steps[6].number}
              </div>
              <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                {steps[6].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {steps[6].description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SAMPLE WORK & REPORT DOWNLOAD SECTION */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Algorithm-Development-for-Training-and-Optimisation-Sample-Work.png",
          alt: "Algorithm Development for Training and Optimisation Sample Work",
          width: 600,
          height: 400,
        }}
        sections={[
          {
            heading:
              "Algorithm Development for Training and Optimisation Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              {
                text: "Explore our algorithm development sample work, meticulously designed to align with project-specific objectives, domain standards (e.g., ISO/IEC, GDPR, HIPAA), and research timelines, ensuring robust, ethical, and publication-ready outcomes.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work",
            },
          },
        ]}
        footerDisclaimerSegments={[]}
      />

      {/* 4. OUR PACKAGES SECTION */}
      {/* PACKAGES & QUOTE BUTTON SECTION */}
      <div className="border-t border-gray-200 pt-2 pb-6 bg-white">
        <CommonPackages
          title="Algorithm Development Service – Our Packages"
          description={
            <>
              At Pubrica, we provide comprehensive{" "}
              <Link
                href="/academy/algorithm-development/ai-algorithm-development-intelligent-systems/"
                className="text-blue-600 font-medium no-underline hover:no-underline"
              >
                Algorithm Development Services
              </Link>{" "}
              tailored to meet the unique needs of researchers, healthcare
              professionals, and technology developers. Our packages are designed to
              ensure high-performance, scalable, and publication-ready algorithm
              solutions.
            </>
          }
          packages={packagesData}
        />
        <div className="-mt-4 sm:-mt-6">
          <GetFreeQuoteButton />
        </div>
      </div>
    </main>
  );
}