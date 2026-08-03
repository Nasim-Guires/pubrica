"use client";

import React from "react";

export interface SectorItem {
  id: string;
  name: string;
  iconPlaceholder: string;
}

export interface ServicesExpertiseSectorsProps {
  className?: string;
}

export default function ServicesExpertiseSectors({
  className = "",
}: ServicesExpertiseSectorsProps) {
  const sectors: SectorItem[] = [
    { id: "orthopaedic", name: "Orthopaedic", iconPlaceholder: "[ Icon: Orthopaedic ]" },
    { id: "psychology", name: "Psychology", iconPlaceholder: "[ Icon: Psychology ]" },
    { id: "ent", name: "ENT", iconPlaceholder: "[ Icon: ENT ]" },
    { id: "dental", name: "Dental", iconPlaceholder: "[ Icon: Dental ]" },
    { id: "psychiatry", name: "Psychiatry", iconPlaceholder: "[ Icon: Psychiatry ]" },
    { id: "maxillo-facial", name: "Maxillo-Facial", iconPlaceholder: "[ Icon: Maxillo-Facial ]" },
    { id: "neurologist", name: "Neurologist", iconPlaceholder: "[ Icon: Neurologist ]" },
    { id: "respiratory", name: "Respiratory", iconPlaceholder: "[ Icon: Respiratory ]" },
    { id: "gynaecology", name: "Gynaecology", iconPlaceholder: "[ Icon: Gynaecology ]" },
    { id: "general-surgery", name: "General Surgery", iconPlaceholder: "[ Icon: General Surgery ]" },
    { id: "urology", name: "Urology", iconPlaceholder: "[ Icon: Urology ]" },
    { id: "physiotherapy", name: "Physiotherapy", iconPlaceholder: "[ Icon: Physiotherapy ]" },
    { id: "ophthalmology", name: "Ophthalmology", iconPlaceholder: "[ Icon: Ophthalmology ]" },
    { id: "paediatrics", name: "Paediatrics", iconPlaceholder: "[ Icon: Paediatrics ]" },
    { id: "pain-management", name: "Pain Management", iconPlaceholder: "[ Icon: Pain Management ]" },
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
              <div className="w-16 h-16 rounded-full bg-emerald-50/50 group-hover:bg-emerald-100/60 flex items-center justify-center border border-dashed border-emerald-300 transition-colors mb-3">
                <span className="text-[9px] text-emerald-800 font-medium text-center px-1 leading-tight">
                  {sector.iconPlaceholder}
                </span>
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