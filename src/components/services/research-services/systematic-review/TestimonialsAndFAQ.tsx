"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

interface TestimonialData {
  id: string;
  quote: string;
  author: string;
  role: string;
  flagUrl: string;
  country: string;
  journalImg: string;
  journalAlt: string;
}

interface FaqItemData {
  id: number;
  question: string;
  answer: string;
}

const testimonialsData = [
  {
    image:
      "/images/research-services/systematic-review/nature-biotechnology.png",
    quote:
      "The team at Pubrica delivered a comprehensive and meticulously structured systematic review that met all PRISMA guidelines. Their expertise significantly enhanced the clarity and depth of my submission to the Journal of Clinical Medicine. I truly appreciate their professionalism and attention to detail.",
    name: "DR. ISABELLA ROSSI",
    designation: "Clinical Researcher",
    organization: "Italy",
    flag: "/images/research-services/systematic-review/italy.png",
  },
  {
    image:
      "/images/research-services/systematic-review/RSNA-1-1.png",
    quote:
      "Pubrica's support in crafting our systematic review was exceptional. The final manuscript, accepted in the BMJ Open, stood out for its rigorous methodology and scientific coherence. I highly recommend their service to researchers seeking high-impact publications.",
    name: "PROF. MATTHEW JOHNSON",
    designation: "Health Policy Analyst",
    organization: "United Kingdom",
    flag:
      "/images/research-services/systematic-review/united-kingdom-.png",
  },
  {
    image:
      "/images/research-services/systematic-review/jama-oncology-journal-1.png",
    quote:
      "I'm thoroughly impressed by the systematic review services provided by Pubrica. Their structured approach and adherence to journal-specific guidelines helped our team get published in PLOS ONE. Their communication and scientific rigor were excellent throughout.",
    name: "DR. CARLOS MENDES",
    designation: "Public Health Specialist",
    organization: "Brazil",
    flag: "/images/research-services/systematic-review/brazil.png",
  },
];

const faqs = [
  {
    question:
      "1. What are the key steps involved in conducting a systematic review?",
    answer:
      "The essential steps include formulating a research question, creating a protocol, carrying out a thorough literature search, screening studies, evaluating study quality, extracting data, synthesizing findings, and disseminating results.",
  },
  {
    question:
      "2. How does a systematic review improve the reliability of research findings?",
    answer:
      "A systematic review increases reliability through structured search strategies, transparent criteria, critical appraisal, thorough synthesis of evidence, and reduction of bias.",
  },
  {
    question:
      "3. What role do systematic review services play in academic and clinical research?",
    answer:
      "Systematic review services facilitate protocol development, database searching, study screening, quality assessment, data extraction, synthesis, and dissemination, thereby ensuring methodological rigor and dissemination readiness.",
  },
  {
    question: "4. How is data collected and analyzed in a systematic review?",
    answer:
      "The data is collected through pre-specified database searches and inclusion criteria, followed by analysis using structured screening, quality assessment tools, standardized extraction tools, and synthesis.",
  },
  {
    question:
      "5. What is the difference between a systematic review and a meta-analysis?",
    answer:
      "Systematic review is a summary and evaluation of existing studies, while a meta-analysis combines quantitative data using statistical methods, creating a summary and overall effect size.",
  },
  {
    question:
      "6. How do researchers ensure transparency and reproducibility in systematic reviews?",
    answer:
      "Researchers promote transparency through registering their protocol, adhering to PRISMA, and using search strategies, criteria, and methods of data extraction and analysis.",
  },
  {
    question:
      "7. What are common challenges in conducting a systematic review?",
    answer:
      "Some of the challenges that may arise include literature searching, study quality variation, data diversity, time constraints, limited access to full texts, and dealing with biases.",
  },
  {
    question:
      "8. How can systematic reviews support evidence-based decision-making in healthcare and business?",
    answer:
      "Systematic reviews assist in decision-making through integrating high-quality research, consistent results, reduction of biases, and informing policies, as well as offering credible information for business and healthcare strategies.",
  },
  {
    question:
      "9. What databases and tools are used in systematic review research?",
    answer:
      "Commonly used databases for conducting systematic reviews include PubMed, Scopus, Web of Science, Cochrane Library, and tools such as EndNote, Rayyan, Covidence, and PRISMA for structured reporting.",
  },
  {
    question:
      "10. How do systematic review services assist with study selection and data extraction?",
    answer:
      "The role of systematic review services includes using pre-specified inclusion criteria, removing duplicates, using standardized forms for extraction, and ensuring consistency and accuracy of methods.",
  },
];

export default function TestimonialsAndFAQ() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };



  const renderTestimonialCard = (item: TestimonialData, key: string) => (
    <div
      key={key}
      style={{
        border: "1px solid #103d39",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3f4f6",
          borderRadius: "6px",
          padding: "16px",
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "120px",
            flexShrink: 0,
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "4px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={item.journalImg}
            alt={item.journalAlt}
            fill
            sizes="100px"
            style={{ objectFit: "contain" }}
          />
        </div>
        <p
          style={{
            fontSize: "0.825rem",
            color: "#374151",
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          "{item.quote}"
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4px",
        }}
      >
        <div>
          <h4
            style={{
              fontSize: "0.875rem",
              fontWeight: "700",
              color: "#000000",
              margin: 0,
            }}
          >
            — {item.author}
          </h4>
          <span
            style={{
              fontSize: "0.775rem",
              color: "#4b5563",
              fontStyle: "italic",
            }}
          >
            {item.role}
          </span>
        </div>
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          <Image
            src={item.flagUrl}
            alt={item.country}
            fill
            sizes="24px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111827",
        backgroundColor: "#ffffff",
      }}
    >
      {/* SECTION 1: Testimonials */}
      <CommonTestimonial
        title="Testimonials"
        description="Discover how Pubrica's Systematic Review Services have helped researchers develop rigorous, well-structured reviews, follow PRISMA guidelines, and prepare manuscripts for high-impact journal publication."
        testimonials={testimonialsData}
      />

      {/* SECTION 2: Frequently Asked Questions */}
      <CommonFAQ
        title="Frequently Asked Questions"
        faqs={faqs}
      />
    </div>
  );
}
