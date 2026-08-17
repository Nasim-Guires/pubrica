"use client";

import React from "react";
import Image from "next/image";

export interface SectorItem {
  id: string;
  name: string;
  iconSrc: string;
}

export interface ServicesExpertiseSectorsProps {
  className?: string;
}

export default function ServicesExpertiseSectors({
  className = "",
}: ServicesExpertiseSectorsProps) {
  const sectors: SectorItem[] = [
    { id: "orthopaedic", name: "Orthopaedic", iconSrc: "/images/medico-legal-support-services/Medical-record-review-services-ensuring-accurate-legal-reporting.webp" },
    { id: "psychology", name: "Psychology", iconSrc: "/images/medico-legal-support-services/Professional-medico-legal-services-helping-attorneys-interpret-medical-data.webp" },
    { id: "ent", name: "ENT", iconSrc: "/images/medico-legal-support-services/Professional-medico-legal-services-supporting-legal-investigations.webp" },
    { id: "dental", name: "Dental", iconSrc: "/images/medico-legal-support-services/Healthcare-experts-providing-medico-legal-consulting-services.webp" },
    { id: "psychiatry", name: "Psychiatry", iconSrc: "/images/medico-legal-support-services/Medical-record-summary-services-prepared-for-legal-case-reports.webp" },
    { id: "maxillo-facial", name: "Maxillo-Facial", iconSrc: "/images/medico-legal-support-services/Litigation-support-services-for-medical-negligence-cases.webp" },
    { id: "neurologist", name: "Neurologist", iconSrc: "/images/medico-legal-support-services/Litigation-support-services-with-expert-medical-record-analysis.webp" },
    { id: "respiratory", name: "Respiratory", iconSrc: "/images/medico-legal-support-services/Comprehensive-medico-legal-support-services-for-complex-healthcare-cases.webp" },
    { id: "gynaecology", name: "Gynaecology", iconSrc: "/images/medico-legal-support-services/Medical-record-summary-services-supporting-litigation-support-services.webp" },
    { id: "general-surgery", name: "General Surgery", iconSrc: "/images/medico-legal-support-services/Litigation-support-services-for-healthcare-legal-disputes.webp" },
    { id: "urology", name: "Urology", iconSrc: "/images/medico-legal-support-services/Outsource-medico-legal-services-for-law-firms-handling-medical-cases.webp" },
    { id: "physiotherapy", name: "Physiotherapy", iconSrc: "/images/medico-legal-support-services/Outsource-medico-legal-services-for-accurate-medical-record-analysis.webp" },
    { id: "ophthalmology", name: "Ophthalmology", iconSrc: "/images/medico-legal-support-services/Medico-legal-services-supporting-court-ready-medical-documentation.webp" },
    { id: "paediatrics", name: "Paediatrics", iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-for-healthcare-litigation-and-claims.webp" },
    { id: "pain-management", name: "Pain Management", iconSrc: "/images/medico-legal-support-services/Medico-legal-support-services-assisting-lawyers-with-medical-evidence-analysis.webp" },
  ];

  return (
    <section className={`w-full bg-white py-16 text-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b2b28] mb-4">
            Reliable Medico-Legal Expertise For Every Sector
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From individuals and law firms to public agencies and healthcare institutions, Pubrica delivers trustworthy, impartial, and legally sound medico-legal services to meet your specific needs.
          </p>
        </header>

        {/* Grid Layout matching exact layout in design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 border-t border-b border-gray-100 py-8">
          {sectors.map((sector) => (
            <article
              key={sector.id}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Image / Icon Section Div Placeholder */}
              <div className="relative w-16 h-16 mb-3">
                <Image src={sector.iconSrc} alt={sector.name} fill className="object-contain" sizes="64px" />
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-semibold text-[#1b2b28] group-hover:text-emerald-800 transition-colors">
                {sector.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}