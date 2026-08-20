"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  points?: string[]; // Optional property for bullet points
}

interface FAQProps {
  title: string;
  faqs: FAQItem[];
}

export default function CommonFAQ({ title, faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const useTwoColumns = faqs.length > 6;

  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  const renderFAQ = (faq: FAQItem, originalIndex: number, isLast: boolean) => {
    const isOpen = openIndex === originalIndex;

    return (
      <div
        key={originalIndex}
        style={{
          borderBottom: !isLast ? "1px solid #ddd" : "none",
        }}
      >
        <button
          onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
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
              paddingRight: "20px",
            }}
          >
            {faq.question}
          </span>

          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#0b3a57",
              flexShrink: 0,
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
            <p style={{ margin: "0 0 10px 0" }}>{faq.answer}</p>
            {faq.points && faq.points.length > 0 && (
              <ul style={{ margin: "0", paddingLeft: "20px" }}>
                {faq.points.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: "6px" }}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  };

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

      {useTwoColumns ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(450px,1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
            }}
          >
            {leftFaqs.map((faq, i) =>
              renderFAQ(faq, i, i === leftFaqs.length - 1)
            )}
          </div>

          <div
            style={{
              border: "1px solid #ddd",
            }}
          >
            {rightFaqs.map((faq, i) =>
              renderFAQ(
                faq,
                i + mid,
                i === rightFaqs.length - 1
              )
            )}
          </div>
        </div>
      ) : (
        <div
          style={{
            border: "1px solid #ddd",
          }}
        >
          {faqs.map((faq, i) =>
            renderFAQ(faq, i, i === faqs.length - 1)
          )}
        </div>
      )}
    </section>
  );
}