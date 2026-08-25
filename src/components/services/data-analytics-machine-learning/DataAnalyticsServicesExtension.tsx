"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
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
      icon: "/images/data-analytics-machine-learning/icon-1.png",
      slug: "/services/research-services/medical-writing",
    },
    {
      id: 2,
      title: "Data Visualization & Reporting",
      description:
        "Creating clear, publication-ready charts, figures, and dashboards for research, white papers, and business reports.",
      icon: "/images/data-analytics-machine-learning/icon-2.png",
      slug: "/services/research-services/scientific-writing",
    },
    {
      id: 3,
      title: "AI-Powered Data Analytics",
      description:
        "Transforming raw data into actionable insights with advanced machine learning and AI solutions.",
      icon: "/images/data-analytics-machine-learning/icon-3.png",
      slug: "/services/research-services/systematic-review",
    },
    {
      id: 4,
      title: "Custom Machine Learning Models",
      description:
        "Designing predictive, classification, and clustering models tailored to research and business needs.",
      icon: "/images/data-analytics-machine-learning/icon-1.png",
      slug: "/services/research-services/medical-writing",
    },
    {
      id: 5,
      title: "Healthcare & Life Science Analytics",
      description:
        "Specialized ML-driven solutions for medical research, clinical studies, and healthcare data.",
      icon: "/images/data-analytics-machine-learning/icon-2.png",
      slug: "/services/research-services/scientific-writing",
    },
    {
      id: 6,
      title: "Publication & White Paper Support",
      description:
        "Turning data-driven insights into high-quality research articles, white papers, and business intelligence reports.",
      icon: "/images/data-analytics-machine-learning/icon-3.png",
      slug: "/services/research-services/systematic-review",
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
        "Clustering (k-means, hierarchical), dimensionality reduction (PCA, t-SNE).",
    },
    {
      id: 3,
      name: "Deep Learning",
      details:
        "Neural networks, CNNs, RNNs, and transformers for advanced modeling and predictions.",
    },
    {
      id: 4,
      name: "Natural Language Processing (NLP)",
      details:
        "Text mining, sentiment analysis, and entity recognition for research and business content.",
    },
    {
      id: 5,
      name: "Predictive & Prescriptive Analytics",
      details:
        "Forecasting, risk modeling, and optimization strategies.",
    },
    {
      id: 6,
      name: "Data Visualization Techniques",
      details:
        "Interactive dashboards, heatmaps, and publication-ready charts and figures.",
    },
    {
      id: 7,
      name: "Healthcare & Life Sciences Methods",
      details:
        "Biostatistics, survival analysis, clinical trial analytics, and healthcare predictive modeling",
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
          <a href="/services/research-services/biostatistics-and-statistical-programming-services" className="text-blue-600 hover:underline">
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
              {/* Clickable Service Icon */}
              <Link
                href={svc.slug}
                className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <Image
                  src={svc.icon}
                  alt={svc.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </Link>

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
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f4f6fa]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#0c313a] text-2xl md:text-3xl font-bold mb-12 text-center tracking-tight">
            We Also Use a Variety of Statistical Methods and Techniques
          </h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Left Overlapping Images Graphic */}
            <div className="relative w-full max-w-[360px] h-[320px] flex-shrink-0">
              {/* Subtle Light Circle Background Accent */}
              <div className="absolute inset-0 bg-slate-200/50 rounded-full scale-90 -z-0" />

              {/* Top-Left Image Card (Charts/Analytics) */}
              <div className="absolute top-0 left-0 w-48 h-48 rounded-2xl overflow-hidden shadow-sm z-10">
                <img
                  src="/images/data-analytics-machine-learning/Ensure-Robust-Results-with-Pubricas-Machine-Learning-Data-Analytics.webp"
                  alt="Data Analytics Overview"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom-Right Image Card (Lab Technician) */}
              <div className="absolute bottom-0 right-0 w-52 h-52 rounded-2xl overflow-hidden shadow-md z-20">
                <img
                  src="/images/data-analytics-machine-learning/We-Also-Use-a-Variety-of-Statistical-Methods-and-Techniques.png"
                  alt="We Also Use a Variety of Statistical Methods and Techniques"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Clean Line Accordion */}
            <div className="w-full max-w-xl">
              {techniques.map((tech) => {
                const isActive = activeMethodId === tech.id;
                return (
                  <div
                    key={tech.id}
                    className="border-b border-[#0c313a]/30"
                  >
                    {/* Accordion Trigger */}
                    <button
                      onClick={() =>
                        setActiveMethodId(isActive ? null : tech.id)
                      }
                      className="w-full flex items-center gap-4 py-3.5 px-2 text-left transition-colors hover:bg-slate-100/50"
                    >
                      <span className="text-[#0c313a] text-sm font-medium w-4 text-center">
                        {isActive ? "−" : "+"}
                      </span>
                      <span className="text-[#0c313a] text-base font-semibold tracking-wide">
                        {tech.name}
                      </span>
                    </button>

                    {/* Accordion Content Panel */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive
                        ? "max-h-[200px] py-2 px-8 text-gray-600"
                        : "max-h-0"
                        }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed">
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
