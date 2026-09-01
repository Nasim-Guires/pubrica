"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function ExperimentalDesignServicesAccordion() {
  // State initialized as empty so all accordion items are closed by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleAccordion = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggles individual state, allowing multiple items to be open simultaneously
    }));
  };

  const accordionData: AccordionItem[] = [
    {
      id: "methodology",
      title: "Optimal Methodology Development",
      content: (
        <p>
          We provide customized experimental study design assistance aligned with your study’s objectives and outcome measures. Our approach carefully addresses threats to internal validity (bias, confounding) and external validity (generalizability), ensuring your scientific research design is both accurate and reproducible.
        </p>
      ),
    },
    {
      id: "rct",
      title: "Randomized Clinical Trials (RCT)",
      content: (
        <p>
          For studies in diagnostics, screening tests, prevention, and therapeutic interventions, Pubrica designs randomized controlled trials (RCTs)—the gold standard for minimizing bias and confounding variables. Our controlled experiment designs ensure precision, reliability, and regulatory compliance.
        </p>
      ),
    },
    {
      id: "quasi",
      title: "Quasi-Experimental Designs",
      content: (
        <p>
          When true{" "}
          <Link
            href="/services/research-services/experimental-design"
            className="text-blue-600 no-underline hover:no-underline"
          >
            experimental designs
          </Link>{" "}
          are impractical, premature, or ethically challenging, our team
          develops quasi-experimental research designs. These approaches allow
          intervention evaluation without randomization, maintaining scientific
          rigor while ensuring flexibility.
        </p>
      ),
    },
    {
      id: "descriptive",
      title: "Descriptive and Observational Designs",
      content: (
        <p>
          For studies focused on identifying patterns, trends, and outcomes
          without manipulation of the study environment, we design descriptive
          and observational research methodologies. These designs provide robust
          insights for exploratory and applied research.
        </p>
      ),
    },
    {
      id: "support",
      title: "Comprehensive Research Support",
      content: (
        <p>
          From study planning to final analysis, Pubrica ensures your
          experimental study design is scientifically robust, statistically
          valid, and optimized for publication success and funding approval.
        </p>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-6 sm:py-7 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="space-y-4 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b38]">
            Experimental-Design Study: Writing &amp; Rewriting Services
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
            Pubrica’s{" "}
            <Link
              href="/academy/experimental-design/quasi-experimental-design-definition-types-examples/"
              className="text-blue-600 no-underline hover:no-underline"
            >
              experimental design
            </Link>{" "}
            services provide scientifically accurate and tailored research
            strategies to ensure both the internal and external validity of your
            scientific observations. Our experienced team of methodology
            experts, statisticians, and research consultants offers expertise
            across diverse experimental research design approaches, minimizing
            systematic and random errors to strengthen your research paper,
            manuscript, or thesis.
          </p>
        </div>

        {/* Main Grid: Images Showcase Left, Accordion Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
          {/* Left Decorative Image Composition */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] flex items-center justify-center">
            {/* Soft Gray/Blue Backdrop Shape */}
            <div className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] bg-slate-100 rounded-full top-6 left-6 -z-10" />

            <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-white z-10">
              <Image
                src="/images/research-services/experimental-design/experimental-design-we-offer.png"
                alt="Experimental design services we offer"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-7 space-y-3">
            {accordionData.map((item) => {
              const isOpen = !!openItems[item.id];

              return (
                <div
                  key={item.id}
                  className="rounded-xs overflow-hidden border border-slate-100"
                >
                  {/* Accordion Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full bg-[#0c3836] hover:bg-[#082b2a] text-white p-3.5 sm:p-4 flex items-center justify-between text-left transition-colors duration-150 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-base sm:text-lg w-4 text-center">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[3]" />
                        )}
                      </span>
                      <h3 className="font-semibold text-sm sm:text-base tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-x border-b border-slate-200">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Closing Callout Text */}
        <div className="pt-6">
          <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed">
            Choose Pubrica’s{" "}
            <Link
              href="/academy/journals-templates/nature-peer-reviewed-medical-research-journal/"
              className="text-blue-600 no-underline hover:no-underline"
            >
              experimental design
            </Link>{" "}
            services to leverage our extensive experience and expertise in
            crafting robust research studies that address complex scientific
            questions. Contact us today to discover how we can assist you in
            designing a study that maximizes the validity and impact of your
            research findings.
          </p>
        </div>
      </div>
    </section>
  );
}