"use client";

import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "1. What types of medical data do you collect?",
    answer:
      "We collect a range of medical data, including clinical trial data, patient-reported outcomes, electronic health records (EHR), real-world evidence (RWE), epidemiological data, registry data, adverse event data, pharmacovigilance reports, and health economics data based on study requirements.",
  },
  {
    id: 2,
    question:
      "2. How do you ensure compliance with data privacy regulations like HIPAA, GDPR, and local health authorities?",
    answer:
      "We adhere to strict data security standards including end-to-end encryption, anonymization/pseudonymization protocols, role-based access controls, and regular compliance audits to satisfy HIPAA, GDPR, ICH-GCP, and local regulatory requirements.",
  },
  {
    id: 3,
    question:
      "3. What data collection methods do you use in clinical research?",
    answer:
      "Our methods include electronic Case Report Forms (eCRFs), paper CRFs, direct EHR integration, patient survey/questionnaire platforms, remote sensor and wearable data feeds, and structured qualitative interviews.",
  },
  {
    id: 4,
    question: "4. How do you manage data quality and validation?",
    answer:
      "We utilize automated edit checks, dual-entry verification, multi-tiered manual query resolution, and real-time data monitoring to ensure high data integrity and accuracy before final delivery.",
  },
  {
    id: 5,
    question:
      "5. Do you offer data collection services for observational and real-world studies?",
    answer:
      "Yes, we specialize in prospective and retrospective observational studies, registry creation, real-world evidence (RWE) gathering, and post-market surveillance.",
  },
  {
    id: 6,
    question:
      "6. How do you handle multilingual data collection for global studies?",
    answer:
      "We provide linguistic validation, forward and back-translation services, and localized data collection tools tailored to diverse global participant pools and regional regulatory bodies.",
  },
];

export default function MedicalDataFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

const toggleAccordion = (id: number) => {
  setOpenId(openId === id ? null : id);
};

  return (
    <section className="w-full bg-white py-6 px-4 sm:px-6 lg:px-12 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e] mb-8 text-center sm:text-left">
          Frequently Asked Questions – Medical Data Collection
        </h2>

        <div className="border border-slate-300 rounded-md divide-y divide-slate-300 bg-white shadow-sm">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors duration-150">
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:bg-slate-50 transition-colors"
                >
                  <span className="pr-4">{item.question}</span>
                  <span className="text-xl font-bold text-slate-700 flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
