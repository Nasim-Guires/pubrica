"use client";

import CommonFAQ from "@/components/common/FAQ";
import React, { useState } from "react";
const faqs = [
  {
    question: "1. What types of medical data do you collect?",
    answer:
      "We collect a range of medical data, including clinical trial data, patient-reported outcomes, electronic health records (EHR), real-world evidence (RWE), epidemiological data, registry data, adverse event data, pharmacovigilance reports, and health economics data based on study requirements.",
  },
  {
    question:
      "2. How do you ensure compliance with data privacy regulations like HIPAA, GDPR, and local health authorities?",
    answer:
      "Our data collection processes strictly adhere to global and local regulations such as HIPAA (USA), GDPR (Europe), and applicable country-specific guidelines. We implement encryption, de-identification, and secure data transfer protocols, along with informed consent compliance.",
  },
  {
    question:
      "3. What data collection methods do you use in clinical research?",
    answer:
      "We utilize methods including electronic data capture (EDC), paper-based CRFs, direct patient surveys, mobile health applications, wearable devices, patient registries, and telehealth data collection platforms customized per project protocol.",
  },
  {
    question: "4. How do you manage data quality and validation?",
    answer:
      "We follow standard operating procedures (SOPs) for data validation, source data verification (SDV), real-time data monitoring, audit trails, and double-data entry processes, ensuring accuracy and integrity of collected data.",
  },
  {
    question:
      "5. Do you offer data collection services for observational and real-world studies?",
    answer:
      "Yes, we specialize in data collection for observational studies, registries, real-world evidence (RWE) generation, and post-marketing surveillance, supporting outcomes research and health economics evaluations.",
  },
  {
    question:
      "6. How do you handle multilingual data collection for global studies?",
    answer:
      "We support multilingual data collection with validated translations of data collection instruments, culturally adapted survey tools, and localized patient engagement practices in compliance with country-specific regulations.",
  },
];

export default function MedicalDataFAQ() {


  return (
    <>
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </>
  );
}
