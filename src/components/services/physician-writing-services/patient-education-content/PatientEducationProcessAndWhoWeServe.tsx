"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";

interface StepItem {
  number: number;
  title?: string;
  icon: React.ReactNode;
  description: string;
}

export default function PatientEducationProcessAndWhoWeServe() {
  // Step-by-step process data
  const steps: WorkflowStep[] = [
    {
      stepNumber: 1,
      title: "Requirement Analysis",
      description:
        "We begin by understanding your requirements, target audience, and the specific medical information you aim to communicate.",
      iconSrc: "/images/icons/step1.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "Content Research & Drafting",
      description:
        "Our expert team conducts comprehensive research and crafts clear, concise, and accurate patient education content tailored to your audience's needs.",
      iconSrc: "/images/icons/step-2.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "Review & Refinement",
      description:
        "You'll have the opportunity to review the content draft and provide feedback. We refine the material based on your input to ensure it meets your expectations and aligns with medical guidelines.",
      iconSrc: "/images/icons/step-3.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "Final Delivery & Support",
      description:
        "Upon final approval, we deliver the finished patient education materials in your preferred format and provide ongoing support to address any further inquiries or modifications.",
      iconSrc: "/images/icons/step-4.png",
      position: "bottom",
    },
  ];

  // Who we serve grid items
  const whoWeServe = [
    { title: "Hospitals & Clinics", image: "/images/physician-writing-services/patient-education-content/Hospitals-Clinics.jpg" },
    {
      title: "Pharmaceutical & Biotech Companies",
      image: "/images/physician-writing-services/patient-education-content/Pharmaceutical-Biotech-Companies.jpg",
    },
    {
      title: "Medical Device Manufacturers",
      image: "/images/physician-writing-services/patient-education-content/Medical-Device-Manufacturers.jpg",
    },
    {
      title: "Contract Research Organizations",
      image: "/images/physician-writing-services/patient-education-content/Contract-Research-Organizations.jpg",
    },
    {
      title: "Public Health Authorities & NGOs",
      image: "/images/physician-writing-services/patient-education-content/Public-Health-Authorities-NGOs.jpg",
    },
    { title: "Digital Health Platforms", image: "/images/physician-writing-services/patient-education-content/Digital-Health-Platforms.jpg" },
  ];

  return (
    <div className="w-full bg-[#f8fcfb] text-slate-800 font-sans py-6">
      {/* --- Section 1: Commitment to Accuracy & Trust --- */}
      <section
        aria-label="Commitment to Accuracy & Trust"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-4">
          Commitment to Accuracy & Trust
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          We use these sources to verify that all patient-facing materials are
          based upon current best practices, are consistent with medical
          standards, and are updated as clinical guidelines evolve.
        </p>
      </section>

      {/* --- Section 2: Who We Serve --- */}
      <section
        aria-label="Who We Serve"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a] mb-3">
          Who We Serve
        </h2>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
          Pubrica&apos;s{" "}
          <Link href="/insights/sample-work/psoriasis/" className="text-blue-600">
            patient education content
          </Link>{" "}
          service delivers medically accurate, reader-friendly educational
          materials that empower patients to understand, manage, and participate
          actively in their healthcare journey.
        </p>

        {/* Card Grid with Gradient Text Overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoWeServe.map((item, index) => (
            <div
              key={index}
              className="relative group h-64 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Bottom Gradient Overlay for Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-5">
                <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 3: How Service Works (Step-by-Step Process) --- */}
      <section
        aria-label="How Service Works"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2e3a]">
            How a Patient Education Content Development Service Works
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Our step-by-step Process
          </p>
          <p className="text-slate-700 text-sm sm:text-base max-w-4xl mx-auto pt-2 leading-relaxed">
            With Pubrica&apos;s{" "}
            <Link href="/insights/sample-work/parkinsons-disease/" className="text-blue-600">
              patient education content
            </Link>{" "}
            service, our medical experts and{" "}
            <Link href="/services/research-services/scientific-writing" className="text-blue-600">
              scientific writing
            </Link>{" "}
            team work together to develop clear, accurate, and
            guideline-compliant educational materials that are tailored to
            specific patient needs and aligned with healthcare communication
            standards.
          </p>
        </div>

        {/* Timeline Grid (4 Steps) */}
        <div className="w-full">
          {/* ============================================================ */}
          {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
          {/* ============================================================ */}
          <EditorialWorkflowSection
            heading=""
            subheading=""
            description=""
            steps={steps}
          />
        </div>
      </section>
    </div>
  );
}