"use client";

import React from "react";

const packages = [
  {
    id: "starter",
    badge: "S",
    name: "Starter",
    subtitle: "Basic Data Collection & Entry",
    headerBg: "bg-[#cad8d4]", // Soft Sage Teal
    borderColor: "border-[#b1c3bf]",
    badgeBg: "bg-amber-100 text-amber-700 border-amber-300",
    idealFor: "Pilot studies, academic research, or observational data needs.",
    includes: [
      "Survey/questionnaire design (up to 10 variables)",
      "Manual data collection (up to 200 participants)",
      "Data entry into Excel/CSV",
      "Basic anonymization",
      "Informed consent support materials",
      "Data validation (basic QC)",
      "Delivery within 2–3 weeks",
    ],
  },
  {
    id: "standard",
    badge: "S",
    name: "Standard",
    subtitle: "Structured Clinical Data Collection",
    headerBg: "bg-[#d8c8e3]", // Soft Lavender/Purple
    borderColor: "border-[#c4b1d3]",
    badgeBg: "bg-purple-100 text-purple-700 border-purple-300",
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
  },
  {
    id: "advanced",
    badge: "A",
    name: "Advanced",
    subtitle: "End-To-End Clinical & Observational Data Management",
    headerBg: "bg-[#cca1]", // Soft Tan / Gold
    borderColor: "border-[#cbb389]",
    badgeBg: "bg-emerald-100 text-emerald-800 border-emerald-300",
    idealFor: "Clinical trials, CROs, multi-centre or longitudinal studies.",
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
  },
  {
    id: "premium",
    badge: "P",
    name: "Premium",
    subtitle: "Customizable, Scalable & Regulatory-Ready",
    headerBg: "bg-[#f8c8cb]", // Soft Rose / Pink
    borderColor: "border-[#f2b2b6]",
    badgeBg: "bg-blue-100 text-blue-700 border-blue-300",
    idealFor: "Sponsors, pharma, biotech, or large-scale academic consortia.",
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
  },
];

const addOns = [
  "Translation/localization of data tools",
  "Meta-analysis and data synthesis",
  "Patient recruitment support",
  "IRB/EC liaison and submission support",
  "Telephonic or video interview coordination",
  "Longitudinal data tracking",
];

export default function MedicalDataPackages() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-3">
            Medical Data Collection – Our Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-5xl">
            We provide flexible, scalable packages tailored to the varied needs
            of researchers in healthcare, medical, and life sciences, whether
            for academic studies, clinical trials, or industry-sponsored
            projects.
          </p>
        </header>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-10 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-t-xl rounded-b-lg border ${pkg.borderColor} flex flex-col justify-between overflow-hidden bg-slate-50/50 shadow-sm transition-shadow duration-200 hover:shadow-md`}
            >
              {/* Header Card Box */}
              <div>
                <div
                  className={`${pkg.headerBg} p-5 text-slate-900 border-b border-black/5`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-lg border shadow-sm ${pkg.badgeBg}`}
                    >
                      {pkg.badge}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-slate-700 font-medium mt-0.5 leading-tight">
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 text-xs sm:text-sm text-slate-700 space-y-4">
                  {/* Ideal For */}
                  <div className="flex items-start gap-2">
                    <span className="text-slate-900 mt-0.5 flex-shrink-0 font-bold">
                      ➔
                    </span>
                    <p>
                      <strong className="text-slate-900">Ideal For:</strong>{" "}
                      {pkg.idealFor}
                    </p>
                  </div>

                  {/* Includes List */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-slate-900 flex-shrink-0 font-bold">
                        ➔
                      </span>
                      <strong className="text-slate-900">Includes:</strong>
                    </div>
                    <ul className="space-y-2 pl-6 list-disc marker:text-slate-500">
                      {pkg.includes.map((item, index) => (
                        <li
                          key={index}
                          className="leading-tight text-slate-600"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-On Services Section */}
        <div className="mt-8 border-t border-slate-200 pt-6">
          <h3 className="text-base sm:text-lg font-bold text-[#09322e] mb-4">
            Add-On Services (Available with Any Package):
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            {addOns.map((addon, index) => (
              <li key={index} className="font-medium">
                {addon}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              type="button"
              className="bg-[#b80e0e] hover:bg-[#960b0b] text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors duration-200 shadow-sm"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
