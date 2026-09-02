"use client";

import React from "react";
import Image from "next/image";
import CommonWhoWeServe from "@/components/common/CommonWhoWeServe";

const whoWeServeData = [
  {
    title: "Academia & Researchers",
    bullets: [
      "Supporting universities, scholars, and research institutions with AI-driven data analysis, predictive modeling, and publication-ready insights.",
      "We also provide AI-powered research analytics services and AI modeling for scientific publication support to strengthen academic output.",
    ],
    imageUrl: "/images/ai-ml-support/Academia-Researchers.webp",
  },
  {
    title: "Healthcare & Life Sciences",
    bullets: [
      "Assisting clinicians, hospitals, pharma, and biotech companies in diagnosis support, drug discovery, clinical trials, medical imaging, and patient outcome predictions.",
      "Our expertise extends to AI services for healthcare research publications to drive innovation in patient care.",
    ],
    imageUrl: "/images/ai-ml-support/Healthcare-Life-Sciences.webp",
  },
  {
    title: "Biotechnology & Pharmaceuticals",
    bullets: [
      "Enabling precision medicine, biomarker discovery, and genomic data analysis through advanced machine learning frameworks.",
    ],
    imageUrl: "/images/ai-ml-support/Biotechnology-Pharmaceuticals.webp",
  },
  {
    title: "Business & Industry",
    bullets: [
      "Helping enterprises optimize operations, enhance customer experiences, detect anomalies, and make data-driven decisions using AI-powered solutions.",
    ],
    imageUrl: "/images/ai-ml-support/Business-Industry.webp",
  },
  {
    title: "Government & Policy Makers",
    bullets: [
      "Enabling smarter governance through predictive analytics, fraud detection, citizen service optimization, and AI-driven policy insights.",
    ],
    imageUrl: "/images/ai-ml-support/Government-Policy-Makers.webp",
  },
  {
    title: "Technology & Software Companies",
    bullets: [
      "Delivering AI/ML models, automation, and algorithm development to enhance product innovation.",
    ],
    imageUrl: "/images/ai-ml-support/Technology-Software-Companies.webp",
  },
];

export default function WhoWeServeSection() {
  return (
    <>
      <CommonWhoWeServe
        title="Who We Serve"
        description={
          <>
            At Pubrica, our AI and Machine Learning services are designed to empower
            diverse stakeholders across industries and research domains. We
            collaborate with clients who require data-driven insights, intelligent
            automation, and innovative solutions to transform their operations and
            research outcomes.
          </>
        }
        data={whoWeServeData}
      />
    </>
  );
}
