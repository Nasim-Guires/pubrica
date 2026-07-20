"use client";

import React from "react";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    title: "Health Economics",
    description:
      "Specialized health economics services for informed decision-making and cost-effectiveness.",
    borderColor: "border-l-amber-400",
  },
  {
    id: 2,
    title: "Patient journey",
    description:
      "Patient journey and insights services to enhance healthcare outcomes and understanding.",
    borderColor: "border-l-purple-500",
  },
  {
    id: 3,
    title: "Segmentation",
    description:
      "Segmentation services for targeted healthcare strategies and improved patient outcomes.",
    borderColor: "border-l-emerald-400",
  },
  {
    id: 4,
    title: "Predictive Analysis",
    description:
      "Advanced predictive analysis services for data-driven insights and informed decision-making.",
    borderColor: "border-l-amber-400",
  },
  {
    id: 5,
    title: "Algorithm Development",
    description:
      "Expert algorithm development services for cutting-edge solutions in healthcare and research.",
    borderColor: "border-l-purple-500",
  },
  {
    id: 6,
    title: "Interpretation & Visualisation",
    description:
      "Interpretation & visualization services for clear, insightful data representation in research.",
    borderColor: "border-l-emerald-400",
  },
];

export default function OurServicesSection() {
  return (
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-2">
            Our Services
          </h2>
          <h3 className="text-lg sm:text-xl font-medium text-slate-700 mb-4">
            Designed to Scale with Your Business
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            We understand that successful machine learning support services
            require data accuracy, algorithmic transparency, and compliance with
            global technology standards. At Pubrica, our cross-functional
            experts manage the entire{" "}
            <Link href="#" className="text-sky-600 hover:underline">
              AI and ML services
            </Link>{" "}
            for the research lifecycle from data preparation and model
            development to deployment and monitoring, delivering scalable,
            ethical, and industry-ready solutions for academia, healthcare,
            business, and government.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-100 border-l-[6px] ${service.borderColor} flex flex-col justify-between hover:shadow-md transition-shadow duration-200`}
            >
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
