"use client";

import React, { useState } from "react";
import Container from "@/components/common/Container";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FAQItem[] = [
    {
      question: "What is Pubrica, and what do they do?",
      answer:
        "ubrica is a research and publication agency that mainly assists researchers and academic scholars in life science, medical science, and healthcare domains. It focuses on research and publication services.",
    },
    {
      question: "How is Pubrica's editing service different from others?",
      answer:
        "Pubrica has a team of editors who are alumni of Harvard University and are native speakers. Therefore, our writing quality is highly exceptional and unique.",
    },
    {
      question: "Does Pubrica provide support after the submission?",
      answer:
        "Yes, we support you even after the submission, until you get published.",
    },
    {
      question: "What is the average turn-around time for editing services?",
      answer:
        "A standard editing can take up to 5-7 business days, whereas minor ones take 2-3 business days.",
    },
    {
      question: "What are the domains Pubrica excels at?",
      answer: `We excel at all the subfields of medical science, such as:

1. Anatomy
2. Physiology
3. Biochemistry
4. Pharmacology
5. Pathology
6. Microbiology
7. Immunology
8. Epidemiology
9. Public Health
10. Clinical Medicine
11. Surgery
12. Radiology
13. Psychiatry`,
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full"
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Container className="w-full">
        {/* FAQ Heading */}
        <h2
          style={{
            fontSize: "38px",
            fontWeight: 700,
            color: "#0b3a57",
            marginBottom: "25px",
          }}
          className="text-2xl sm:text-3xl md:text-[38px]"
        >
          Frequently Asked Questions
        </h2>

        {/* FAQ Container */}
        <div
          style={{
            border: "1px solid #ddd",
          }}
        >
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqData.length - 1;

            return (
              <div
                key={index}
                style={{
                  borderBottom: !isLast ? "1px solid #ddd" : "none",
                }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "18px 20px",
                    border: "none",
                    background: "#fff",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {/* Question */}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#0b3a57",
                      paddingRight: "20px",
                      lineHeight: "1.5",
                    }}
                    className="text-base sm:text-lg md:text-[20px]"
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#0b3a57",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: "0 20px 20px",
                      fontSize: "17px",
                      lineHeight: "28px",
                      color: "#333",
                      whiteSpace: "pre-line",
                    }}
                    className="text-sm sm:text-base md:text-[17px]"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}