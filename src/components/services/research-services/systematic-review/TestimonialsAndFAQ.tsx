"use client";

import React, { useState } from "react";
import Link from "next/link";

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

const testimonials: TestimonialData[] = [
  {
    id: "test-1",
    quote:
      "Pubrica's support in crafting our systematic review was exceptional. The final manuscript, accepted in the BMJ Open, stood out for its rigorous methodology and scientific coherence. I highly recommend their service to researchers seeking high-impact publications.",
    author: "PROF. MATTHEW JOHNSON",
    role: "Health Policy Analyst, United Kingdom",
    flagUrl: "https://flagcdn.com/w40/gb.png",
    country: "United Kingdom",
    journalImg:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=400&auto=format&fit=crop",
    journalAlt: "Radiology / BMJ Open Journal Cover",
  },
  {
    id: "test-2",
    quote:
      "I'm thoroughly impressed by the systematic review services provided by Pubrica. Their structured approach and adherence to journal-specific guidelines helped our team get published in PLOS ONE. Their communication and scientific rigor were excellent throughout.",
    author: "DR. CARLOS MENDES",
    role: "Public Health Specialist, Brazil",
    flagUrl: "https://flagcdn.com/w40/br.png",
    country: "Brazil",
    journalImg:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=400&auto=format&fit=crop",
    journalAlt: "JAMA Oncology / PLOS ONE Journal Cover",
  },
];

const leftFaqs: FaqItemData[] = [
  {
    id: 1,
    question:
      "1. What are the key steps involved in conducting a systematic review?",
    answer:
      "The essential steps include formulating a research question, creating a protocol, carrying out a thorough literature search, screening studies, evaluating study quality, extracting data, synthesizing findings, and disseminating results.",
  },
  {
    id: 2,
    question:
      "2. How does a systematic review improve the reliability of research findings?",
    answer:
      "A systematic review increases reliability through structured search strategies, transparent criteria, critical appraisal, thorough synthesis of evidence, and reduction of bias.",
  },
  {
    id: 3,
    question:
      "3. What role do systematic review services play in academic and clinical research?",
    answer:
      "Systematic review services facilitate protocol development, database searching, study screening, quality assessment, data extraction, synthesis, and dissemination, thereby ensuring methodological rigor and dissemination readiness.",
  },
  {
    id: 4,
    question: "4. How is data collected and analyzed in a systematic review?",
    answer:
      "The data is collected through pre-specified database searches and inclusion criteria, followed by analysis using structured screening, quality assessment tools, standardized extraction tools, and synthesis.",
  },
  {
    id: 5,
    question:
      "5. What is the difference between a systematic review and a meta-analysis?",
    answer:
      "Systematic review is a summary and evaluation of existing studies, while a meta-analysis combines quantitative data using statistical methods, creating a summary and overall effect size.",
  },
];

const rightFaqs: FaqItemData[] = [
  {
    id: 6,
    question:
      "6. How do researchers ensure transparency and reproducibility in systematic reviews?",
    answer:
      "Researchers promote transparency through registering their protocol, adhering to PRISMA, and using search strategies, criteria, and methods of data extraction and analysis.",
  },
  {
    id: 7,
    question:
      "7. What are common challenges in conducting a systematic review?",
    answer:
      "Some of the challenges that may arise include literature searching, study quality variation, data diversity, time constraints, limited access to full texts, and dealing with biases.",
  },
  {
    id: 8,
    question:
      "8. How can systematic reviews support evidence-based decision-making in healthcare and business?",
    answer:
      "Systematic reviews assist in decision-making through integrating high-quality research, consistent results, reduction of biases, and informing policies, as well as offering credible information for business and healthcare strategies.",
  },
  {
    id: 9,
    question:
      "9. What databases and tools are used in systematic review research?",
    answer:
      "Commonly used databases for conducting systematic reviews include PubMed, Scopus, Web of Science, Cochrane Library, and tools such as EndNote, Rayyan, Covidence, and PRISMA for structured reporting.",
  },
  {
    id: 10,
    question:
      "10. How do systematic review services assist with study selection and data extraction?",
    answer:
      "The role of systematic review services includes using pre-specified inclusion criteria, removing duplicates, using standardized forms for extraction, and ensuring consistency and accuracy of methods.",
  },
];

export default function TestimonialsAndFAQ() {
  // Store open state by question ID. Pre-open Q1 by default as seen in screenshot.
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        color: "#111827",
        backgroundColor: "#ffffff",
      }}
    >
      {/* SECTION 1: Testimonials */}
      <section
        style={{
          width: "100%",
          backgroundColor: "#f4f6f8",
          padding: "60px 20px 40px 20px",
        }}
      >
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          {/* Header */}
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: "700",
              color: "#0f2c3a",
              marginBottom: "14px",
            }}
          >
            Testimonials
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#374151",
              lineHeight: "1.6",
              marginBottom: "32px",
              maxWidth: "1000px",
            }}
          >
            Learn how Pubrica’s{" "}
            <Link
              href="/services/research-services/systematic-review"
              style={{ color: "#2563eb", textDecoration: "underline" }}
            >
              systematic review
            </Link>{" "}
            service has empowered researchers to produce high-quality,
            publication-ready reviews that contribute to evidence-based practice
            and enhance their academic visibility. Here is what our clients say:
          </p>

          {/* Testimonial Cards Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "20px",
            }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
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
                {/* Content Container (Light Gray Box) */}
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
                  {/* Journal Image Frame */}
                  <div
                    style={{
                      width: "100px",
                      height: "120px",
                      flexShrink: 0,
                      backgroundColor: "#ffffff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={item.journalImg}
                      alt={item.journalAlt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Quote text */}
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

                {/* Author Info & Country Flag */}
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

                  <img
                    src={item.flagUrl}
                    alt={item.country}
                    style={{
                      width: "24px",
                      height: "16px",
                      borderRadius: "2px",
                      objectFit: "cover",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.2)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "6px",
              marginTop: "16px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#0d3b38",
                display: "inline-block",
              }}
            />
            <span
              style={{
                width: "8px",
                height: "8px",
                border: "1px solid #0d3b38",
                backgroundColor: "transparent",
                display: "inline-block",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Frequently Asked Questions */}
      <section
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: "700",
            color: "#0f2c3a",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Frequently Asked Questions – Systematic Review Writing &amp; Rewriting
          Services
        </h2>

        {/* 2-Column FAQ Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Left Column (Q1 - Q5) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              backgroundColor: "#d1d5db",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {leftFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} style={{ backgroundColor: "#ffffff" }}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      backgroundColor: "#ffffff",
                      border: "none",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "#111827",
                      lineHeight: "1.4",
                    }}
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        marginLeft: "12px",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 20px 18px 20px",
                        fontSize: "0.85rem",
                        color: "#374151",
                        lineHeight: "1.6",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (Q6 - Q10) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              backgroundColor: "#d1d5db",
              border: "1px solid #d1d5db",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {rightFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} style={{ backgroundColor: "#ffffff" }}>
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    style={{
                      width: "100%",
                      padding: "16px 20px",
                      backgroundColor: "#ffffff",
                      border: "none",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "#111827",
                      lineHeight: "1.4",
                    }}
                  >
                    <span>{faq.question}</span>
                    <span
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        marginLeft: "12px",
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 20px 18px 20px",
                        fontSize: "0.85rem",
                        color: "#374151",
                        lineHeight: "1.6",
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
