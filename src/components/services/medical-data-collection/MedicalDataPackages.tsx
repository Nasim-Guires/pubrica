"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React from "react";

import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";



const packagesData: PackageItem[] = [
  {
    icon: "/images/icons/Basic.webp",
    title: "Starter",
    subtitle: "Basic Data Collection & Entry",
    idealFor:
      "Pilot studies, academic research, or observational data needs.",
    includes: [
      "Survey/questionnaire design (up to 10 variables)",
      "Manual data collection (up to 200 participants)",
      "Data entry into Excel/CSV",
      "Basic anonymization",
      "Informed consent support materials",
      "Data validation (basic QC)",
      "Delivery within 2–3 weeks",
    ],
    addOns: [],
    turnaround: "2–3 weeks",
    cardBgColor: "#cad8d4",
    titleColor: "#004b5a",
  },
  {
    icon: "/images/icons/advanced-a.webp",
    title: "Standard",
    subtitle: "Structured Clinical Data Collection",
    idealFor:
      "Mid-size clinical studies, postgraduate research, or grant-funded research.",
    includes: [
      "Design of custom data collection tools (CRFs, eCRFs)",
      "Data collection via interviews, focus groups, or surveys",
      "Up to 500 subjects or records",
      "Integration of EHR and secondary data (on request)",
      "Basic data cleaning and pseudonymization",
      "Ethics/IRB documentation support",
      "Secure data storage + standard compliance (HIPAA/GDPR)",
      "Delivery within 3–4 weeks",
    ],
    addOns: [],
    turnaround: "3–4 weeks",
    cardBgColor: "#d8c8e3",
    titleColor: "#6b2d82",
  },
  {
    icon: "/images/icons/advanced-a.webp",
    title: "Advanced",
    subtitle: "End-To-End Clinical & Observational Data Management",
    idealFor:
      "Clinical trials, CROs, multi-centre or longitudinal studies.",
    includes: [
      "Multi-modal data collection: clinical data, biological samples, sensor/wearable data",
      "Integration of secondary data (EHRs, imaging, registries)",
      "Full-scale CRF/eCRF design and digital platform support",
      "Real-time data monitoring and data query resolution",
      "Compliance with ICH-GCP, FDA, EMA, ICMR",
      "Anonymization + secure cloud-based delivery",
      "Data analytics dashboard (optional)",
      "Delivery timeline based on project scope",
    ],
    addOns: [],
    turnaround: "Based on project scope",
    cardBgColor: "#cca1",
    titleColor: "#805826",
  },
  {
    icon: "/images/icons/premium-p.png",
    title: "Premium",
    subtitle: "Customizable, Scalable & Regulatory-Ready",
    idealFor:
      "Sponsors, pharma, biotech, or large-scale academic consortia.",
    includes: [
      "Customized protocol-driven data collection strategy",
      "Full support for both primary and secondary data sources",
      "Image, audio, video, sensor, and genomics data integration",
      "Compliance with global regulatory bodies (FDA, EMA, PMDA, MHRA)",
      "Advanced data encryption, audit trails, and access logs",
      "Project management support & milestone tracking",
      "Data visualization & publication-ready outputs",
      "Optional add-ons: statistical analysis, manuscript writing, meta-analysis",
    ],
    addOns: [],
    turnaround: "Based on project scope",
    cardBgColor: "#f8c8cb",
    titleColor: "#c62828",
  },
];

const addOnServices = [
  "Translation/localization of data tools",
  "Meta-analysis and data synthesis",
  "Patient recruitment support",
  "IRB/EC liaison and submission support",
  "Telephonic or video interview coordination",
  "Longitudinal data tracking",
];

export default function MedicalDataPackages() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto font-sans">
      {/* Existing Packages Component */}
      <CommonPackages
        title="Medical Data Collection – Our Packages"
        description="We provide flexible, scalable packages tailored to the varied needs of researchers in healthcare, medical, and life sciences, whether for academic studies, clinical trials, or industry-sponsored projects."
        packages={packagesData}
      />

      {/* Add-On Services & CTA Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold text-[#082e2b] mb-4">
          Add-On Services (Available with Any Package):
        </h3>

        <ul className="list-disc pl-6 space-y-2.5 text-gray-800 text-sm sm:text-base marker:text-black mb-8">
          {addOnServices.map((service, index) => (
            <li key={index} className="pl-1">
              {service}
            </li>
          ))}
        </ul>

        <div>
          <GetFreeQuoteButton />
        </div>
      </div>
    </section>
  );
}
