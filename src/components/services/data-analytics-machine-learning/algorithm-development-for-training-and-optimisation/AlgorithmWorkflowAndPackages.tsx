"use client";

import React from "react";
import Image from "next/image";

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
  const packages = [
    {
      badgeSrc: "/images/editing-and-translation/basic-pacakge.png",
      badgeColor: "text-[#d9a24a] border-[#e2b05c]",
      title: "Basic",
      subtitle: "Foundational Algorithm Development",
      bgColor: "bg-[#d8e3e2]", // Exact muted teal-gray card background
      idealFor: "Startups, small research projects, or proof-of-concept studies.",
      includes: [
        "Initial requirement analysis and feasibility study",
        "Basic algorithm design for structured datasets",
        "Standard model training and validation",
        "Performance report and recommendations",
      ],
      timeline: "2–3 weeks",
    },
    {
      badgeSrc: "/images/publication-support/poster-preparation/S.png",
      badgeColor: "text-[#d9a24a] border-[#e2b05c]",
      title: "Standard",
      subtitle: "Optimised Algorithm Development",
      bgColor: "bg-[#d8c3df]", // Muted lilac/purple card background
      idealFor: "Growing enterprises and research groups needing robust solutions.",
      includes: [
        "Comprehensive requirement gathering",
        "Design and development of algorithms for structured and unstructured data",
        "Model training, optimisation, and cross-validation",
        "Integration with existing data pipelines",
        "Performance benchmarking and documentation",
      ],
      timeline: "4–6 weeks",
    },
    {
      badgeSrc: "/images/editing-and-translation/translation-with-editing/pro.webp",
      badgeColor: "text-[#d9a24a] border-[#e2b05c]",
      title: "Premium",
      subtitle: "Advanced & Custom Algorithm Solutions",
      bgColor: "bg-[#e2cb9c]", // Muted tan/gold card background
      idealFor: "Large-scale research, enterprise applications, and high-impact projects.",
      includes: [
        "Full consultation and strategic planning",
        "Custom algorithm development for multi-modal data",
        "Advanced model training with machine learning/AI techniques",
        "Real-time testing and fine-tuning",
        "Deployment-ready solution with full documentation",
        "Post-deployment support and updates",
      ],
      timeline: "8–10 weeks",
    },
  ];

  return (
    <main className="w-full bg-[#f8fbf9] text-[#222222] font-sans pb-16">
      {/* 1. HERO TITLE BANNER */}
      <section className="bg-[#1b3d36] text-white py-10 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Algorithm Development for Training & Optimization
        </h1>
        <p className="text-sm md:text-base text-gray-200">
          From analysis to refinement, Pubrica delivers accurate, efficient, and real-world-ready algorithms.
        </p>
      </section>

      {/* 2. HOW OUR SERVICE WORKS (PROCESS FLOW SECTION) */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-3">
            How Our Algorithm Development for Training and Optimisation Service Works
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At Pubrica, we follow a systematic, collaborative process to deliver robust, scalable algorithms for scientific, healthcare, pharma, medical device, food, and nutraceutical applications. Our approach ensures precision, transparency, and measurable outcomes.
          </p>
        </div>

        {/* Workflow Grid Flow */}
        <div className="space-y-6">
          {/* Row 1: Steps 1, 2, 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {steps.slice(0, 3).map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm min-h-[220px] flex flex-col justify-center"
              >
                <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Downward Connector Arrow (3 -> 4) */}
          <div className="flex justify-end pr-12 md:pr-[16%]">
            <span className="text-2xl font-bold text-gray-500">↓</span>
          </div>

          {/* Row 2: Steps 6, 5, 4 (Reverse Flow Display) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {[steps[5], steps[4], steps[3]].map((step) => (
              <div
                key={step.number}
                className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm min-h-[220px] flex flex-col justify-center"
              >
                <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.number}
                </div>
                <h3 className="font-bold text-[#1b3d36] text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Downward Connector Arrow (6 -> 7) */}
          <div className="flex justify-start pl-12 md:pl-[16%]">
            <span className="text-2xl font-bold text-gray-500">↓</span>
          </div>

          {/* Row 3: Step 7 */}
          <div className="max-w-md mx-auto">
            <div className="bg-white border border-gray-300 rounded-xl p-6 text-center shadow-sm min-h-[220px] flex flex-col justify-center">
              <div className="w-10 h-10 bg-[#1b3d36] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
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
      <section className="bg-[#f0fbf5] py-12 px-4 sm:px-6 md:px-8 border-y border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Image Section Replacement Div */}
          <div className="md:col-span-5 flex justify-center">
            {/* Image Section: Hands typing on a laptop screen with algorithm code */}
            <div className="relative w-full max-w-sm h-64 rounded-xl overflow-hidden shadow-md border border-gray-300">
              <Image
                src="/images/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation/Algorithm-Development-for-Training-and-Optimisation-Sample-Work.png"
                alt="Algorithm Development for Training and Optimisation Sample Work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>

          {/* Text & CTAs */}
          <div className="md:col-span-7 space-y-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#1b3d36] mb-3">
                Algorithm Development for Training and Optimisation Sample Work
              </h3>
              <button className="bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-8 rounded-full transition-colors">
                Discover More
              </button>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold text-[#1b3d36] mb-2">
                Download the full Report Now
              </h3>
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4">
                Explore our algorithm development sample work, meticulously designed to align with project-specific objectives, domain standards (e.g., ISO/IEC, GDPR, HIPAA), and research timelines, ensuring robust, ethical, and publication-ready outcomes.
              </p>
              <button className="bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2.5 px-8 rounded-full transition-colors">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR PACKAGES SECTION */}
      <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-3">
            Algorithm Development Service – Our Packages
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            At Pubrica, we provide comprehensive{" "}
            <a href="#" className="text-teal-700 underline font-medium">
              Algorithm Development Services
            </a>{" "}
            tailored to meet the unique needs of researchers, healthcare professionals, and technology developers. Our packages are designed to ensure high-performance, scalable, and publication-ready algorithm solutions.
          </p>
        </div>

        {/* 3 Package Cards matching exact design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`${pkg.bgColor} rounded-md p-6 flex flex-col justify-between shadow-sm border border-gray-200/50`}
            >
              <div>
                {/* Header Banner Inside Card */}
                <div className="bg-white/80 backdrop-blur-sm rounded-md p-3 flex items-center space-x-3 mb-6 shadow-xs">
                  <div className="relative w-9 h-9 shrink-0">
                    <Image src={pkg.badgeSrc} alt={`${pkg.title} package`} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#1b3d36] leading-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-[11px] text-gray-600 font-medium">
                      {pkg.subtitle}
                    </p>
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-5 flex items-start space-x-2 text-xs md:text-sm text-gray-800">
                  <span className="font-bold text-base leading-none">➔</span>
                  <p>
                    <strong className="text-gray-900 font-bold">Ideal For:</strong>{" "}
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Includes List */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-900 font-bold mb-3">
                    <span className="font-bold text-base leading-none">➔</span>
                    <span>Includes:</span>
                  </div>
                  <ul className="space-y-3 text-xs md:text-sm text-gray-800 pl-6">
                    {pkg.includes.map((item, itemIdx) => (
                      <li key={itemIdx} className="leading-snug list-none relative">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Footer */}
              <div className="pt-4 flex items-center space-x-2 text-xs md:text-sm font-bold text-gray-900 border-t border-black/10">
                <span className="font-bold text-base leading-none">➔</span>
                <span>Timeline: {pkg.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}