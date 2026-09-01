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
      "Our data collection processes strictly adhere to global and local regulations such as HIPAA (USA), GDPR (Europe), and applicable country-specific guidelines. We implement encryption, de-identification, and secure data transfer protocols, along with informed consent compliance.",
  },
  {
    id: 3,
    question:
      "3. What data collection methods do you use in clinical research?",
    answer:
      "We utilize methods including electronic data capture (EDC), paper-based CRFs, direct patient surveys, mobile health applications, wearable devices, patient registries, and telehealth data collection platforms customized per project protocol.",
  },
  {
    id: 4,
    question: "4. How do you manage data quality and validation?",
    answer:
      "We follow standard operating procedures (SOPs) for data validation, source data verification (SDV), real-time data monitoring, audit trails, and double-data entry processes, ensuring accuracy and integrity of collected data.",
  },
  {
    id: 5,
    question:
      "5. Do you offer data collection services for observational and real-world studies?",
    answer:
      "Yes, we specialize in data collection for observational studies, registries, real-world evidence (RWE) generation, and post-marketing surveillance, supporting outcomes research and health economics evaluations.",
  },
  {
    id: 6,
    question:
      "6. How do you handle multilingual data collection for global studies?",
    answer:
      "We support multilingual data collection with validated translations of data collection instruments, culturally adapted survey tools, and localized patient engagement practices in compliance with country-specific regulations.",
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
