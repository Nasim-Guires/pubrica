"use client";

import { EditorialWorkflowSection, WorkflowStep } from "@/components/common/EditorialWorkflowSection";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { Sequence, Step } from "@/components/common/Sequence";
import ServiceBanner from "@/components/common/ServiceBanner";
import Link from "next/link";
import React, { useState } from "react";

interface ClientTarget {
  id: number;
  label: string;
  description: string;
  imageName: string;
}

interface ApproachItem {
  id: number;
  title: string;
  description: string;
}

export const DataAnalyticsFinalExtensions: React.FC = () => {
  const basePath = "/images/data-analytics-machine-learning/";
  const [activeClientId, setActiveClientId] = useState<number | null>(null);

  const targetClients: ClientTarget[] = [
    {
      id: 1,
      label: "Researchers & Academics",
      imageName: "Researchers-Academics-1.png",
      description:
        "Supporting clinical, medical, and life science studies with ML-driven analytics, data visualization, and publication-ready outputs.",
    },
    {
      id: 2,
      label: "Pharmaceutical & Healthcare Organizations",
      imageName: "Pharmaceutical-Healthcare-Organizations.png",
      description:
        "Delivering predictive analytics, patient data modeling, and healthcare intelligence for better decision-making.",
    },
    {
      id: 3,
      label: "Business Enterprises & Startups",
      imageName: "Business-Enterprises-Startups.png",
      description:
        "Providing AI/ML solutions for market research, customer analytics, business intelligence, and white paper development.",
    },
    {
      id: 4,
      label: "Publishing & Consulting Firms",
      imageName: "Publishing-Consulting-Firms.png",
      description:
        "Offering data-driven insights, visualizations, and content support for reports, research articles, and technical publications.",
    },
    {
      id: 5,
      label: "Government & Non-Profit Institutions",
      imageName: "Government-Non-Profit-Institutions.png",
      description:
        "Enabling data-backed research, healthcare projects, and policy studies with scalable ML approaches.",
    },
  ];

  const steps: WorkflowStep[] = [
    {
      stepNumber: 1,
      title: "UNDERSTANDING YOUR NEEDS",
      description:
        "We start by analysing your research or business objectives to define clear project goals.",
      iconSrc:
        "/images/data-analytics-machine-learning/Understand-ing-Your-Needs.png",
      position: "top",
    },
    {
      stepNumber: 2,
      title: "DATA COLLECTION & PREPARATION",
      description:
        "Cleaning, structuring, and validating datasets to ensure accuracy and readiness for machine learning.",
      iconSrc:
        "/images/data-analytics-machine-learning/Data-Collection-Preparation.png",
      position: "bottom",
    },
    {
      stepNumber: 3,
      title: "MODEL DEVELOPMENT",
      description:
        "Designing and training custom AI/ML models tailored to your research or business problem.",
      iconSrc:
        "/images/data-analytics-machine-learning/Model-Development.png",
      position: "top",
    },
    {
      stepNumber: 4,
      title: "VALIDATION & TESTING",
      description:
        "Rigorously testing models for accuracy, compliance, and reliability.",
      iconSrc:
        "/images/data-analytics-machine-learning/Validation-Testing.png",
      position: "bottom",
    },
    {
      stepNumber: 5,
      title: "VISUALIZATION & REPORTING",
      description:
        "Presenting results as clear, publication-ready charts, dashboards, and insights.",
      iconSrc:
        "/images/data-analytics-machine-learning/Visualization-Reporting-Testing.png",
      position: "top",
    },
    {
      stepNumber: 6,
      title: "DELIVERY & SUPPORT",
      description:
        "Providing final outputs for research publications, white papers, and business intelligence reports, along with ongoing support if required.",
      iconSrc:
        "/images/data-analytics-machine-learning/Delivery-Support.png",
      position: "bottom",
    },
  ];

  const approaches: ApproachItem[] = [
    {
      id: 1,
      title: "Data-Driven Strategy",
      description:
        "We begin by understanding your research or business objectives to align ML solutions with measurable outcomes.",
    },
    {
      id: 2,
      title: "Data Preparation & Quality Checks",
      description:
        "Ensuring datasets are accurate, clean, and structured for reliable machine learning analysis.",
    },
    {
      id: 3,
      title: "Model Development & Validation",
      description:
        "Building, training, and validating custom ML models using robust statistical and AI techniques.",
    },
    {
      id: 4,
      title: "Visualization & Interpretation",
      description:
        "Converting complex outputs into clear, publication-ready figures, dashboards, and insights.",
    },
    {
      id: 5,
      title: "Domain-Specific Customization",
      description:
        "Tailoring approaches for medical, life sciences, healthcare, and business intelligence projects.",
    },
    {
      id: 6,
      title: "Continuous Improvement",
      description:
        "Iteratively refining models and analytics to deliver accuracy, compliance, and actionable insights.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-left text-gray-800">
      {/* --- Section 1: Who We Serve Image Grid --- */}
      <section className="py-7 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-3 tracking-tight">
          Who We Serve
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-10 max-w-5xl text-justify">
          At Pubrica, our{" "}
          <Link href="/academy/statistical-analysis/biostatistics-practice-data-analysis" className="text-blue-600 no-underline hover:no-underline">
            statistical analysis services
          </Link>{" "}
          cater to a diverse range of clients across research, industry, and
          healthcare. We work closely with:
        </p>

        {/* 3-Column Visual Card Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetClients.map((client) => {
            const isActive = activeClientId === client.id;
            return (
              <div
                key={client.id}
                onClick={() =>
                  setActiveClientId((prev) => (prev === client.id ? null : client.id))
                }
                onMouseEnter={() => setActiveClientId(client.id)}
                onMouseLeave={() => setActiveClientId(null)}
                className="w-full aspect-[16/10] bg-slate-100 rounded border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-end select-none group cursor-pointer"
              >
                {/* Background Image Layer */}
                <img
                  src={`${basePath}${client.imageName}`}
                  alt={client.label}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Default State: Bottom Dark Overlay Gradient */}
                <div
                  className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent pt-6 pb-5 px-5 z-10 transition-opacity duration-300 group-hover:opacity-0 ${isActive ? "opacity-0" : "opacity-100"
                    }`}
                />

                {/* Default State: Visible Bottom Label */}
                <h3
                  className={`text-white text-xs sm:text-sm font-extrabold tracking-wide relative z-20 p-5 group-hover:opacity-0 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"
                    }`}
                >
                  {client.label}
                </h3>

                {/* Hover State: Full Black Overlay Window with Text */}
                <div
                  className={`absolute inset-0 bg-black z-30 p-6 flex flex-col justify-center transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:pointer-events-auto ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                >
                  <h3 className="text-white text-sm sm:text-base font-extrabold mb-3 leading-snug">
                    {client.label}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Section 2: Our Approach List Container --- */}
      <section className="py-7 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-1 tracking-tight">
          Our Approach
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6">
          Approaches We Follow
        </p>

        <ul className="space-y-4 max-w-6xl">
          {approaches.map((item) => (
            <li
              key={item.id}
              className="flex items-start gap-3 text-xs sm:text-sm md:text-[14px]"
            >
              <span className="text-[#c00] font-serif text-lg leading-none mt-0.5 select-none">
                •
              </span>
              <p className="text-gray-700 font-normal leading-relaxed text-justify">
                <strong className="text-black font-black">{item.title}</strong>{" "}
                – {item.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* --- Section 3: Deep Green Inline CTA Strip --- */}
      <ServiceBanner
        imageSrc="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
        imageAlt="100% Satisfaction Guarantee"
        heading="Speed up your Data Analytics and Machine Learning with Pubrica"
        description="Receive personalized support in navigating the complexities of machine learning, ensuring clarity and effectiveness in delivering cutting-edge technological solutions."
        showQuoteButton={true}
      />

      {/* --- Section 4: Workflow Step-by-Step Sequence Frame --- */}
      <EditorialWorkflowSection
        heading="How Our Data Analytics And Machine Learning Service Works"
        subheading="Our Step-by-Step Process"
        steps={steps}
      />
    </div>
  );
};