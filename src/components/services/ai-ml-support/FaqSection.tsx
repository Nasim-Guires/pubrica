"use client";

import CommonFAQ from "@/components/common/FAQ";
import React, { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs = [
  {
    question:
      "1. What services do you offer under Data Analytics & Machine Learning Services?",
    answer:
      "We provide a wide variety of services such as Patient journey and Insights – Machine Learning, Customer Segmentation, Predictive analytics, Algorithm and development for training and optimization, Interpretation, Reporting & Visualization, and Leadership content and editorial design.",
  },
  {
    question:
      "2. Can you integrate AI/ML models with my existing research workflow or software?",
    answer:
      "Yes, we seamlessly integrate customized AI/ML models with your existing software stack, research tools, and cloud platforms via APIs or containerized pipelines to ensure smooth workflow deployment.",
  },
  {
    question:
      "3. Do you provide publication support along with AI/ML services?",
    answer:
      "Absolutely. In addition to core AI/ML execution, we offer comprehensive manuscript preparation support, including journal-ready data visualizations, method section documentation, statistical validation, and reviewer response support.",
  },
  {
    question: "4. Who can benefit from these services?",
    answer:
      "Our services are tailored for PhD scholars, academic researchers, healthcare institutions, pharmaceutical companies, biostatisticians, and enterprise organizations seeking data-driven insights and scalable AI solutions.",
  },
];

export default function FaqSection(): React.ReactElement {
  // Open the first item by default to match the screenshot state
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </>
  );
}
