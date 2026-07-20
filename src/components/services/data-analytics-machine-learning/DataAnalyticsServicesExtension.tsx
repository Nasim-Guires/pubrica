"use client"

import React, { useState } from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconBg: string;
  iconLabel: string;
}

interface MethodCategory {
  id: number;
  name: string;
  details: string;
}

export const DataAnalyticsServicesExtension: React.FC = () => {
  // Accordion active tracking state (Defaults to index 0 / Supervised Learning open)
  const [activeMethodId, setActiveMethodId] = useState<number | null>(1);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Data Management & Preparation",
      description:
        "Cleaning, structuring, and integrating datasets for accurate AI/ML analysis.",
      iconBg: "bg-indigo-50 text-indigo-500",
      iconLabel: "DATA",
    },
    {
      id: 2,
      title: "Data Visualization & Reporting",
      description:
        "Creating clear, publication-ready charts, figures, and dashboards for research, white papers, and business reports.",
      iconBg: "bg-amber-50 text-amber-500",
      iconLabel: "VIZ",
    },
    {
      id: 3,
      title: "AI-Powered Data Analytics",
      description:
        "Transforming raw data into actionable insights with advanced machine learning and AI solutions.",
      iconBg: "bg-purple-50 text-purple-600",
      iconLabel: "AI",
    },
    {
      id: 4,
      title: "Custom Machine Learning Models",
      description:
        "Designing predictive, classification, and clustering models tailored to research and business needs.",
      iconBg: "bg-yellow-50 text-yellow-600",
      iconLabel: "ML",
    },
    {
      id: 5,
      title: "Healthcare & Life Science Analytics",
      description:
        "Specialized ML-driven solutions for medical research, clinical studies, and healthcare data.",
      iconBg: "bg-teal-50 text-teal-600",
      iconLabel: "MED",
    },
    {
      id: 6,
      title: "Publication & White Paper Support",
      description:
        "Turning data-driven insights into high-quality research articles, white papers, and business intelligence reports.",
      iconBg: "bg-amber-50 text-amber-600",
      iconLabel: "DOC",
    },
  ];

  const techniques: MethodCategory[] = [
    {
      id: 1,
      name: "Supervised Learning",
      details:
        "Regression, classification, decision trees, random forests, support vector machines.",
    },
    {
      id: 2,
      name: "Unsupervised Learning",
      details:
        "Clustering (K-Means, Hierarchical), Principal Component Analysis (PCA), anomaly detection, and association rules matching.",
    },
    {
      id: 3,
      name: "Deep Learning",
      details:
        "Neural networks, Convolutional Neural Networks (CNNs) for medical imaging, Recurrent Neural Networks (RNNs), and Transformer deployments.",
    },
    {
      id: 4,
      name: "Natural Language Processing (NLP)",
      details:
        "Text mining, sentiment analysis, entity recognition, and customized semantic parsing frameworks for medical notes.",
    },
    {
      id: 5,
      name: "Predictive & Prescriptive Analytics",
      details:
        "Time-series forecasting, hazard ratio modeling, clinical outcome forecasting, and optimization logic configurations.",
    },
    {
      id: 6,
      name: "Data Visualization Techniques",
      details:
        "Interactive scatter matrices, correlation heatmaps, ROC curves, Bland-Altman plots, and automated data presentation panels.",
    },
    {
      id: 7,
      name: "Healthcare & Life Sciences Methods",
      details:
        "Biostatistical survival analysis (Kaplan-Meier), odds ratio distribution tracking, and absolute regulatory-compliant validation matrices.",
    },
  ];

  return (
    <div className="w-full bg-white font-sans text-left text-gray-800">
      {/* --- Section 1: Our Services 3-Column Grid Layout --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-3 tracking-tight">
          Our Services
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-[14px] leading-relaxed mb-10 max-w-4xl text-justify">
          We offer comprehensive{" "}
          <a href="#" className="text-blue-600 hover:underline">
            statistical analysis services
          </a>
          , from data cleaning and descriptive statistics to advanced modelling
          and hypothesis testing. Our experts ensure your research findings are
          accurate, robust, and publication-ready.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-white border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-start"
            >
              {/* Rounded Vector Icon Frame Placeholder */}
              <div
                className={`w-12 h-12 ${svc.iconBg} rounded-full flex-shrink-0 flex items-center justify-center font-mono text-[10px] font-bold select-none`}
              >
                {svc.iconLabel}
              </div>

              {/* Feature Text Info */}
              <div className="space-y-1">
                <h3 className="text-[#0c313a] text-sm md:text-[15px] font-bold tracking-wide">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-[13px] leading-relaxed text-justify">
                  {svc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 2: Techniques Split Layout with Accordion Framework --- */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fafc] border-t border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[#0c313a] text-xl md:text-2xl font-black mb-12 text-center tracking-tight">
            We Also Use a Variety of Statistical Methods and Techniques
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            {/* Left Decorative Laboratory Graphic Group */}
            <div className="w-full lg:w-[450px] flex-shrink-0 flex flex-col space-y-4 relative select-none">
              {/* Overlapping Charts Asset Card */}
              <div className="bg-white p-4 rounded-xl border border-gray-200/80 shadow-md max-w-[280px] self-start relative z-10">
                <div className="h-28 w-full bg-zinc-50 border border-zinc-100 rounded flex items-center justify-center p-2">
                  <div className="w-full h-full flex items-end gap-1.5 pt-4">
                    <div className="w-full bg-teal-500/20 h-[30%] rounded-t-sm" />
                    <div className="w-full bg-emerald-500/40 h-[65%] rounded-t-sm" />
                    <div className="w-full bg-teal-600/70 h-[45%] rounded-t-sm" />
                    <div className="w-full bg-emerald-600 h-[85%] rounded-t-sm" />
                    <div className="w-full bg-zinc-300 h-[20%] rounded-t-sm" />
                  </div>
                </div>
                <div className="h-2 w-1/2 bg-gray-200 rounded mt-3" />
              </div>

              {/* Overlapping Laboratory Analyst Asset Card */}
              <div className="bg-white p-3 rounded-xl border border-gray-200/80 shadow-lg max-w-[280px] self-end -mt-10 mr-4 relative z-20">
                <div className="aspect-[4/3] w-full bg-slate-900 rounded-lg overflow-hidden flex flex-col justify-end p-3 text-white relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  {/* Visual UI indicator mockup */}
                  <div className="relative z-20 space-y-1">
                    <div className="text-[10px] font-mono tracking-widest text-emerald-400 font-bold uppercase">
                      ANALYSIS ACTIVE
                    </div>
                    <div className="h-1.5 w-3/4 bg-white/40 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Structured Accordion Framework */}
            <div className="flex-1 w-full border border-gray-200 rounded bg-white shadow-sm overflow-hidden">
              {techniques.map((tech) => {
                const isActive = activeMethodId === tech.id;
                return (
                  <div
                    key={tech.id}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    {/* Interactive Tab Target Button trigger */}
                    <button
                      onClick={() =>
                        setActiveMethodId(isActive ? null : tech.id)
                      }
                      className="w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50/60 text-left"
                    >
                      <span className="text-[#0c313a] text-xs sm:text-sm font-bold tracking-wide flex items-center gap-3">
                        <span className="text-gray-400 text-xs font-normal">
                          {isActive ? "−" : "+"}
                        </span>
                        {tech.name}
                      </span>
                    </button>

                    {/* Sub-item Details container panel */}
                    <div
                      className={`transition-all duration-200 ease-in-out overflow-hidden ${
                        isActive
                          ? "max-h-[200px] bg-slate-50/50 border-t border-gray-100"
                          : "max-h-0"
                      }`}
                    >
                      <p className="p-4 pl-8 text-gray-700 text-xs sm:text-sm leading-relaxed text-justify border-l-2 border-[#0c313a]">
                        {tech.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
