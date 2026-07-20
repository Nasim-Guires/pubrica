// Change your import line to look exactly like this:
import { Sequence, Step } from "@/components/common/Sequence";
import React from "react";
// import { , Step } from "./component_library"; // Assuming layout library pathways

interface ClientTarget {
  id: number;
  label: string;
  bgLabel: string;
}

interface ApproachItem {
  id: number;   
  title: string;
  description: string;
}

export const DataAnalyticsFinalExtensions: React.FC = () => {
  const targetClients: ClientTarget[] = [
    { id: 1, label: "Researchers & Academics", bgLabel: "LIBRARY" },
    {
      id: 2,
      label: "Pharmaceutical & Healthcare Organizations",
      bgLabel: "PHARMA",
    },
    { id: 3, label: "Business Enterprises & Startups", bgLabel: "ENTERPRISE" },
    { id: 4, label: "Publishing & Consulting Firms", bgLabel: "LEGAL" },
    { id: 5, label: "Government & Non-Profit Institutions", bgLabel: "CAMPUS" },
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
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-3 tracking-tight">
          Who We Serve
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-10 max-w-5xl text-justify">
          At Pubrica, our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            statistical analysis services
          </a>{" "}
          cater to a diverse range of clients across research, industry, and
          healthcare. We work closely with:
        </p>

        {/* 3-Column Visual Card Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {targetClients.map((client) => (
            <div
              key={client.id}
              className="w-full aspect-[16/10] bg-slate-100 rounded border border-gray-200 shadow-sm relative overflow-hidden flex flex-col justify-end p-5 select-none group cursor-pointer"
            >
              {/* Image asset container layer mock */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/40 z-0 flex items-center justify-center text-zinc-400 font-mono text-[11px] tracking-widest font-bold">
                [{client.bgLabel} VISUAL ASSET]
              </div>

              {/* Bottom Dark Overlay Content Mask */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent pt-12 pb-5 px-5 z-10" />

              <h3 className="text-white text-xs sm:text-sm font-extrabold tracking-wide relative z-20 group-hover:text-emerald-400 transition-colors">
                {client.label}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Our Approach List Container --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-gray-100">
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
      <section className="w-full bg-[#072c22] py-14 px-6 md:px-12 text-center text-white border-b border-emerald-950/20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-[27px] font-extrabold tracking-tight">
            Speed up your Data Analytics and Machine Learning with Pubrica
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-light">
            Receive personalized support in navigating the complexities of
            machine learning, ensuring clarity and effectiveness in delivering
            cutting-edge technological solutions.
          </p>
          <div className="pt-2">
            <button className="bg-[#a80000] text-white text-xs sm:text-sm font-bold tracking-wider px-8 py-3 rounded hover:bg-[#880000] transition-colors uppercase shadow-md">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>

      {/* --- Section 4: Workflow Step-by-Step Sequence Frame --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-[#0c313a] text-xl md:text-2xl lg:text-[25px] font-black tracking-tight">
              How Our Data Analytics And Machine Learning Service Works
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-wider">
              Our Step-by-step process
            </p>
          </div>

          <Sequence>
            {/* Reason: Procedural operational pipeline with strict sequential dependencies for reliable ML delivery. */}
            <Step title="UNDERSTANDING YOUR NEEDS" subtitle="Step 1">
              We start by analysing your research or business objectives to
              define clear project goals.
            </Step>

            <Step title="DATA COLLECTION & PREPARATION" subtitle="Step 2">
              Cleaning, structuring, and validating datasets to ensure accuracy
              and readiness for machine learning.
            </Step>

            <Step title="MODEL DEVELOPMENT" subtitle="Step 3">
              Model Development – Designing and training custom AI/ML models
              tailored to your research or business problem.
            </Step>

            <Step title="VALIDATION & TESTING" subtitle="Step 4">
              Rigorously testing models for accuracy, compliance, and
              reliability.
            </Step>

            <Step title="VISUALIZATION & REPORTING" subtitle="Step 5">
              Presenting results as clear, publication-ready charts, dashboards,
              and insights.
            </Step>

            <Step title="DELIVERY & SUPPORT" subtitle="Step 6">
              Providing final outputs for research publications, white papers,
              and business intelligence reports, along with ongoing support if
              required.
            </Step>
          </Sequence>
        </div>
      </section>
    </div>
  );
};
