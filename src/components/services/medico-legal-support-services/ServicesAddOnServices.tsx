    "use client";

import React from "react";
import Image from "next/image";

export interface AddOnServiceItem {
  id: string;
  title: string;
  iconSrc: string;
}

export interface ServicesAddOnServicesProps {
  className?: string;
}

export default function ServicesAddOnServices({
  className = "",
}: ServicesAddOnServicesProps) {
  const addOnServices: AddOnServiceItem[] = [
    {
      id: "lit-precedent-research",
      title: "Medical literature and legal precedent research",
      iconSrc: "/images/medico-legal-support-services/Outsource-medico-legal-services-for-law-firms-handling-medical-cases.webp",
    },
    {
      id: "regulatory-consultation",
      title: "Regulatory compliance consultation",
      iconSrc: "/images/medico-legal-support-services/Outsource-medico-legal-services-for-accurate-medical-record-analysis.webp",
    },
    {
      id: "personalized-reports",
      title: "Personalized medico-legal reports for family members",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-services-supporting-court-ready-medical-documentation.webp",
    },
    {
      id: "disability-rating",
      title: "Disability & impairment rating for insurance claims",
      iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-for-healthcare-litigation-and-claims.webp",
    },
  ];

  return (
    <section className={`w-full bg-slate-50 py-16 text-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b2b28] mb-4">
            Add-On Services Available Across Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Enhance your core medico-legal support with our specialized add-on options tailored to meet complex case requirements.
          </p>
        </header>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOnServices.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group"
            >
              {/* Image / Icon Section Div Placeholder */}
              <div className="relative w-14 h-14 mb-5">
                <Image src={service.iconSrc} alt="" fill className="object-contain" sizes="56px" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-[#1b2b28] leading-snug group-hover:text-emerald-900 transition-colors">
                {service.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}