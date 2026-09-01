"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  bgColor: string; // Card background color
  borderColor: string; // Left vertical accent border color
}

interface ExtendedSupportItem {
  id: string;
  title: string;
  description: string;
}

const mainServices: ServiceCard[] = [
  {
    id: "writing-budgeting",
    title: "Grant Proposal Writing & Budgeting",
    description:
      "End-to-end support from concept to submission. We help you craft a clear, persuasive, and compliant proposal that captures reviewer attention.",
    bgColor: "bg-amber-50/70",
    borderColor: "border-amber-400",
  },
  {
    id: "peer-review",
    title: "Grant Proposal Pre-Submission Peer Review",
    description:
      "Already drafted your proposal. Our experts provide a detailed review, identifying gaps and ensuring alignment with the funding agency’s requirements.",
    bgColor: "bg-purple-50/70",
    borderColor: "border-purple-400",
  },
  {
    id: "editing-compliance",
    title: "Grant Proposal Expert Editing & Compliance Check",
    description:
      "Make your proposal concise, compelling, and polished with our grant proposal editing services. We refine your language, arguments, and structure for maximum impact.",
    bgColor: "bg-teal-50/70",
    borderColor: "border-teal-400",
  },
];

const extendedSupportItems: ExtendedSupportItem[] = [
  {
    id: "sourcing",
    title: "Funding Opportunity Sourcing",
    description: "Identify the most relevant grants for your research domain.",
  },
  {
    id: "budgeting",
    title: "Budgeting & Justification",
    description:
      "Prepare realistic, reviewer-friendly budgets aligned with agency requirements.",
  },
  {
    id: "novelty-gap",
    title: "Novelty & Gap Check",
    description:
      "Ensure your proposal highlights originality and scientific impact.",
  },
  {
    id: "compliance",
    title: "Compliance Check",
    description:
      "Verify adherence to agency guidelines and ethical requirements.",
  },
];

export default function GrantWritingServicesOfferedSection() {
  // Initially closed state
  const [isExtendedOpen, setIsExtendedOpen] = useState<boolean>(false);

  return (
    <section
      aria-labelledby="grant-services-heading"
      className="w-full bg-white py-6 sm:py-7 px-4 sm:px-6 lg:px-8 text-slate-800"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Section Header */}
        <header className="space-y-3">
          <h2
            id="grant-services-heading"
            className="text-2xl sm:text-3xl font-bold text-[#0e3b38] tracking-tight"
          >
            Our Grant Writing Services We Offer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            From identifying the right funding opportunities to delivering
            persuasive, compliant proposals, Pubrica’s experts provide
            comprehensive{" "}
            <Link
              href="/services/research-services/grant-writing/guide-to-grant-writing-strategies-success"
              className="text-blue-600 no-underline hover:no-underline"
            >
              grant writing services
            </Link>{" "}
            at every stage, maximising your success while saving valuable time.
          </p>
        </header>

        {/* 3-Column Service Cards Grid with Background Colors and Accent Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mainServices.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} p-6 rounded-lg shadow-sm border border-slate-200/80 border-l-4 ${service.borderColor} space-y-3 flex flex-col justify-between hover:shadow-md transition-shadow duration-200`}
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible / Accordion "Extended Support" Block */}
        <div className="rounded-md border border-slate-200 overflow-hidden shadow-sm">
          {/* Accordion Header (Clickable Button) */}
          <button
            type="button"
            onClick={() => setIsExtendedOpen((prev) => !prev)}
            aria-expanded={isExtendedOpen}
            aria-controls="extended-support-content"
            className="w-full bg-[#0b2d28] hover:bg-[#071f1b] text-white px-6 py-3.5 font-bold text-sm sm:text-base flex items-center gap-3 transition-colors duration-200 text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <span className="text-lg font-mono font-bold leading-none select-none w-4 text-center">
              {isExtendedOpen ? "−" : "+"}
            </span>
            <span>Extended Support</span>
          </button>

          {/* Collapsible Body */}
          {isExtendedOpen && (
            <div
              id="extended-support-content"
              className="bg-white p-6 space-y-3 transition-all duration-300"
            >
              {extendedSupportItems.map((item) => (
                <p
                  key={item.id}
                  className="text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <strong className="text-slate-900 font-bold">
                    {item.title}
                  </strong>
                  {" – "}
                  <span>{item.description}</span>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
