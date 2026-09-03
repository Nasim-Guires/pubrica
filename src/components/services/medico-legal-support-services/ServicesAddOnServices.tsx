"use client";

import React from "react";

export interface AddOnServiceItem {
  id: string;
  title: string;
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
    },
    {
      id: "regulatory-consultation",
      title: "Regulatory compliance consultation",
    },
    {
      id: "personalized-reports",
      title: "Personalized medico-legal reports for family members",
    },
    {
      id: "disability-rating",
      title: "Disability & impairment rating for insurance claims",
    },
  ];

  return (
    <section className={`w-full bg-white py-7 text-slate-800 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1b2b28]">
            Add-On Services Available Across Packages:
          </h2>
        </header>

        {/* Bullet List Layout */}
        <ul className="list-disc list-inside space-y-3 text-sm sm:text-base text-slate-800">
          {addOnServices.map((service) => (
            <li key={service.id} className="leading-relaxed">
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}