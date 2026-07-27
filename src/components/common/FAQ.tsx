"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  faqs: FAQItem[];
}

export default function CommonFAQ({ title, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "0 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "38px",
          fontWeight: 700,
          color: "#0b3a57",
          marginBottom: "25px",
        }}
      >
        {title}
      </h2>

      <div
        style={{
          border: "1px solid #ddd",
        }}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              style={{
                borderBottom:
                  index !== faqs.length - 1 ? "1px solid #ddd" : "none",
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                style={{
                  width: "100%",
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
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#0b3a57",
                  }}
                >
                  {faq.question}
                </span>

                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#0b3a57",
                  }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  style={{
                    padding: "0 20px 20px",
                    fontSize: "17px",
                    lineHeight: "28px",
                    color: "#333",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
