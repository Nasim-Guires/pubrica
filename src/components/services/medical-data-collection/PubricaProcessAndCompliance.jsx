"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Data for "How Do Healthcare Data Collection Services Work?" Accordion
const processSteps = [
  {
    id: "step-1",
    title: "Understanding Research Objectives",
    content:
      "We collaborate closely with your team to define clear research goals, required variables, and target sample populations before initiating data gathering.",
  },
  {
    id: "step-2",
    title: "Choosing the Right Data Collection Approach",
    content:
      "Selecting optimal methodologies—whether primary field surveys, secondary EHR extraction, or systematic database mining—tailored to your protocol.",
  },
  {
    id: "step-3",
    title: "Data Cleaning, Structuring, and Management",
    content:
      "Raw data is cleaned, harmonized, standardized, and anonymized in strict accordance with clinical research standards.",
  },
  {
    id: "step-4",
    title: "Advanced Data Analysis and Integration",
    content:
      "Integrating quantitative statistical models and qualitative thematic frameworks to produce publication-ready datasets.",
  },
  {
    id: "step-5",
    title: "Quality Assurance and Compliance",
    content:
      "Multi-tier verification checks by domain experts to ensure accuracy, completeness, and adherence to regulatory mandates.",
  },
  {
    id: "step-6",
    title: "Delivery & Ongoing Support",
    content:
      "Secure transfer of validated datasets along with post-delivery consultation for journal submissions or regulatory reviews.",
  },
];

// Data for "Why Choose Pubrica?" Cards
const whyChooseUsData = [
  {
    title: "Domain experts in medical, clinical, and life science research",
    icon: (
      <svg
        className="w-10 h-10 text-[#082e2b]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    title: "End-to-end data lifecycle support",
    icon: (
      <svg
        className="w-10 h-10 text-[#082e2b]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Ethical, compliant, and high-quality data practices",
    icon: (
      <svg
        className="w-10 h-10 text-[#082e2b]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Scalable for academic and industry needs",
    icon: (
      <svg
        className="w-10 h-10 text-[#082e2b]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

// Data for "Our Compliance and Guideline Standards" Grid
const complianceItems = [
  {
    id: "compliance-1",
    title: "Ethical Compliance and Informed Consent",
    content:
      "Protocols adhering strictly to IRB/IEC standards, ensuring participant informed consent and ethical sourcing across all study phases.",
  },
  {
    id: "compliance-2",
    title: "Data Privacy and Confidentiality",
    content:
      "Complete HIPAA and GDPR alignment featuring rigorous data de-identification, de-identification algorithms, and secure cloud storage.",
  },
  {
    id: "compliance-3",
    title: "Data Sharing and Transparency Policies",
    content:
      "Clear data lineage tracking and transparent documentation allowing seamless audit trails for peer reviews and regulatory bodies.",
  },
  {
    id: "compliance-4",
    title: "Regulatory Standards and Country-Specific Guidelines",
    content:
      "Customized execution workflows modified for region-specific requirements including FDA, EMA, and local health authority mandates.",
  },
];

export default function PubricaProcessAndCompliance() {
  const [openProcess, setOpenProcess] = useState(null);
  const [openCompliance, setOpenCompliance] = useState(null);

  const toggleProcess = (id) => {
    setOpenProcess((prev) => (prev === id ? null : id));
  };

  const toggleCompliance = (id) => {
    setOpenCompliance((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      {/* SECTION 1: How Services Work */}
      <section
        aria-labelledby="process-heading"
        className="bg-[#f2f4f4] py-16 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <header className="mb-10">
            <h2
              id="process-heading"
              className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4 leading-tight"
            >
              How Do Healthcare, Medical, and Life Science Data Collection and
              Extraction Services Work at Pubrica?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
              At Pubrica, our healthcare, medical, and life sciences{" "}
              <a
                href="#"
                className="text-cyan-700 hover:underline font-medium decoration-cyan-700"
              >
                data collection and extraction services
              </a>{" "}
              are designed to provide accurate, ethical, and research-ready data
              sets for clinical studies, academic research, and scientific
              innovation. This is how the process works:
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overlapping Image Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center py-6">
              <div className="relative w-full max-w-md h-[320px] sm:h-[380px]">
                {/* Back Image */}
                <div className="absolute left-0 top-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600"
                    alt="Scientist conducting laboratory research with a microscope"
                    fill
                    sizes="(max-width: 768px) 70vw, 30vw"
                    className="object-cover"
                  />
                </div>
                {/* Front Overlapping Image */}
                <div className="absolute right-0 bottom-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600"
                    alt="Analytics chart and magnifying glass reviewing research data"
                    fill
                    sizes="(max-width: 768px) 70vw, 30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Accordion Process List */}
            <div className="lg:col-span-7 space-y-2">
              {processSteps.map((step) => {
                const isOpen = openProcess === step.id;
                return (
                  <article
                    key={step.id}
                    className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden"
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`process-body-${step.id}`}
                        onClick={() => toggleProcess(step.id)}
                        className="w-full flex items-center justify-between px-6 py-3.5 text-left text-[#082e2b] hover:bg-gray-50 font-medium text-sm sm:text-base transition-colors duration-150"
                      >
                        <span>{step.title}</span>
                        <span
                          className="text-lg font-bold text-[#082e2b] ml-4 select-none"
                          aria-hidden="true"
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`process-body-${step.id}`}
                        className="px-6 pb-4 pt-1 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100"
                      >
                        <p>{step.content}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: End-to-End Banner Callout */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[#082e2b] text-white py-12 px-4 sm:px-6 text-center"
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <h2
            id="cta-heading"
            className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight"
          >
            End-to-End Medical Data Collection with Precision and Compliance
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We deliver precise, validated data for CROs, healthcare providers,
            researchers, and pharma companies, ensuring every project meets
            regulatory standards with confidence.
          </p>
          <div className="pt-2">
          <GetFreeQuoteButton/>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Pubrica? */}
      <section
        aria-labelledby="why-choose-heading"
        className="py-16 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
      >
        <header className="mb-10">
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b]"
          >
            Why Choose Pubrica?
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsData.map((item, index) => (
            <article
              key={index}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center justify-center min-h-[180px]"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* SECTION 4: Compliance & Guidelines */}
      <section
        aria-labelledby="compliance-heading"
        className="py-12 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto"
      >
        <header className="mb-8">
          <h2
            id="compliance-heading"
            className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4"
          >
            Our Compliance and Guideline Standards
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-5xl">
            At Pubrica, we adhere to stringent regulatory and ethical standards
            when collecting, handling, and managing medical data. Our protocols
            ensure compliance with national and international guidelines,
            maintaining the integrity, confidentiality, and reliability of
            collected data.
          </p>
        </header>

        {/* 2x2 Grid for Compliance Accordions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {complianceItems.map((item) => {
            const isOpen = openCompliance === item.id;
            return (
              <article
                key={item.id}
                className="bg-[#f4fcf7] border border-emerald-100 rounded-md overflow-hidden"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`compliance-body-${item.id}`}
                    onClick={() => toggleCompliance(item.id)}
                    className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-[#082e2b] hover:bg-emerald-100/50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <span
                      className="text-base font-bold ml-2 select-none"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`compliance-body-${item.id}`}
                    className="px-4 pb-4 pt-1 text-xs text-gray-700 leading-relaxed border-t border-emerald-100"
                  >
                    <p>{item.content}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* SECTION 5: Sample Work & Download Callout */}
        <div className="bg-[#f0fdf4] rounded-2xl p-6 sm:p-10 border border-emerald-100">
          <header className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#082e2b]">
              Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mt-2">
              At Pubrica, ethical behaviour, participant privacy, and regulatory
              compliance are not just requirements, but the very foundation of
              our services. Our frameworks ensure your data is collected
              ethically, stored securely, and presented in a scientific and
              legally compliant manner.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-8">
            {/* Left Image */}
            <div className="md:col-span-5 relative h-64 sm:h-72 w-full rounded-xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                alt="Medical researcher working on laptop"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Right CTAs */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-[#082e2b] mb-3">
                  Medical Data Collection Sample Work
                </h3>
                <a
                  href="#sample"
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors"
                >
                  Discover More
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#082e2b] mb-2">
                  Download the full Report Now
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                  Explore our medical data collection sample work, accurately
                  designed to meet research protocols, comply with regulatory
                  standards, and deliver accurate, validated data for impactful
                  clinical and academic research outcomes.
                </p>
                <a
                  href="#report"
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium text-xs sm:text-sm px-8 py-2.5 rounded-full transition-colors"
                >
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
