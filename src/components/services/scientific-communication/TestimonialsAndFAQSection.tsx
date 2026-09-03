"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

// ==========================================
// TYPES & DATA STRUCTURES
// ==========================================

interface Testimonial {
  id: string;
  journalImageSrc: string;
  journalImageAlt: string;
  quote: string;
  author: string;
  title: string;
  location: string;
  flagSrc?: string;
}

const testimonials = [
  {
    image: "/images/scientific-communication/jama-neurology-.webp",
    quote:
      "Pubrica's scientific communication team helped us transform complex clinical data into clear, publication-ready manuscripts. Their attention to regulatory guidelines and journal requirements ensured smooth submissions and faster approvals.",
    name: "DR. MEERA SHARMA",
    designation: "Clinical Research Lead",
    organization: "India",
    flag: "/images/editing-and-translation/flag.png",
  },
  {
    image:
      "/images/editing-and-translation/scientific-editing/testimonials-1.png",
    quote:
      "Pubrica's scientific medical communication services helped us convey complex trial results in a way that was both accurate and engaging. Their work strengthened our publications and reinforced our credibility in the field.",
    name: "DR. ROHAN IYER",
    designation: "Clinical Trials Manager",
    organization: "United Kingdom",
    flag:
      "/images/research-services/systematic-review/united-kingdom-.png",
  },
  {
    image:
      "/images/scientific-communication/journal-of-health-economics-1.webp",
    quote:
      "The team delivered scientifically accurate communication materials that met our regulatory and publication standards. Their editorial precision and turnaround were outstanding.",
    name: "DR. KLAUS WEBER",
    designation: "Medical Affairs Director",
    organization: "Germany",
    flag:
      "/images/editing-and-translation/book-editing/germany-.png",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const faqs = [
  {
    question: "1. Who can benefit from SMC services?",
    answer: "SMC services are valuable for:",
    points: [
      "Pharmaceutical and biotech companies",
      "Healthcare professionals and medical societies",
      "Academic researchers and institutions",
      "Regulatory authorities",
      "Medical writers and editors seeking support for publications",
    ],
  },
  {
    question: "2. What types of documents are created through SMC?",
    answer: "Our SMC services cover:",
    points: [
      "Manuscripts for peer-reviewed journals",
      "Clinical study reports (CSRs)",
      "Regulatory submission documents",
      "Conference posters and abstracts",
      "Educational materials for healthcare professionals",
      "Patient education resources",
    ],
  },
  {
    question: "3. How do you ensure scientific accuracy?",
    answer:
      "All content is developed by subject-matter experts, including medical writers, statisticians, and clinicians. We follow evidence-based methodologies, source verification, and compliance with industry standards to ensure accuracy and reliability.",
  },
  {
    question: "4. Do you follow specific guidelines?",
    answer: "Yes, our team adheres to international guidelines, including:",
    points: [
      "ICMJE (International Committee of Medical Journal Editors)",
      "GPP (Good Publication Practice)",
      "CONSORT, PRISMA, and other reporting standards",
      "Regulatory authority requirements (FDA, EMA, CDSCO, etc.)",
    ],
  },
  {
    question: "5. How is confidentiality maintained?",
    answer:
      "We implement strict data security protocols and confidentiality agreements. Client data, unpublished research, and proprietary information are protected at all stages of communication and documentation.",
  },
  {
    question: "6. Can you handle multi-disciplinary or international projects?",
    answer:
      "Absolutely. Our team is experienced in collaborating across different therapeutic areas, languages, and regions, ensuring compliance with local and international standards.",
  },
  {
    question: "How do you collaborate with clients during a project?",
    answer: "We follow a structured workflow:",
    points: [
      "Initial consultation to understand project objectives",
      "Regular updates and drafts shared for client feedback",
      "Revision cycles to refine content",
      "Final review and approval before delivery",
    ],
  },
  {
    question: "8. What sets your SMC services apart?",
    answer:
      "We combine scientific expertise, regulatory knowledge, and communication skills to produce content that is accurate, engaging, and publication-ready. Our focus on clarity, precision, and audience relevance ensures your research and messages have maximum impact.",
  },
];

const faqDataColumn2: FAQItem[] = [
  {
    id: 5,
    question: "5. How is confidentiality maintained?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
        We implement strict data security protocols and confidentiality agreements. Client data, unpublished research, and proprietary information are protected at all stages of communication and documentation.
      </p>
    ),
  },
  {
    id: 6,
    question: "6. Can you handle multi-disciplinary or international projects?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700">
        Absolutely. Our team is experienced in collaborating across different therapeutic areas, languages, and regions, ensuring compliance with local and international standards.
      </p>
    ),
  },
  {
    id: 7,
    question: "7. How do you collaborate with clients during a project?",
    answer: (
      <div className="space-y-2 text-xs md:text-sm text-gray-700">
        <p>We follow a structured workflow:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Initial consultation to understand project objectives</li>
          <li>Regular updates and drafts shared for client feedback</li>
          <li>Revision cycles to refine content</li>
          <li>Final review and approval before delivery</li>

        </ul>
      </div>
    ),
  },
  {
    id: 8,
    question: "8. What sets your SMC services apart?",
    answer: (
      <p className="text-xs md:text-sm text-gray-700">
        We combine scientific expertise, regulatory knowledge, and communication skills to produce content that is accurate, engaging, and publication-ready. Our focus on clarity, precision, and audience relevance ensures your research and messages have maximum impact.
      </p>
    ),
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function TestimonialsAndFAQSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Accordion state management: open items by default matching the screenshot (Q1 & Q5 open)
  const [openFaqs, setOpenFaqs] = useState<number[]>([1, 5]);

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };


  return (
    <div className="w-full bg-[#f8f9fa] text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">


      <div className="max-w-6xl mx-auto space-y-20">
        {/* ==========================================
            SECTION 1: TESTIMONIALS
        ========================================== */}
        <CommonTestimonial
          title="Testimonials"
          description="Discover how Pubrica’s expert scientific medical communication services have helped researchers, clinicians, and healthcare organizations produce accurate, publication-ready content that strengthens credibility, supports evidence-based decisions, and maximizes research impact. Here’s what our clients say:"
          testimonials={testimonials}
        />
        {/* ==========================================
            SECTION 2: FREQUENTLY ASKED QUESTIONS
        ========================================== */}
        <CommonFAQ
          title="Frequently Asked Questions"
          faqs={faqs}
        />
      </div>
    </div>
  );
}
