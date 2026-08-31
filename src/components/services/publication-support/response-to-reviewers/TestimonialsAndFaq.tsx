"use client"
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import Image from "next/image";
import React, { useState } from "react";

// ================= DATA TYPES =================
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalImage: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

// ================= MOCK DATA =================
const testimonialsData = [
  {
    image:
      "/images/publication-support/responding-to-reviewers/journal-of-clinical-oncology.jpg",
    quote:
      "Pubrica's reviewer response service saved my article. The experts reworded my explanations and helped me defend my methodology convincingly. My paper is now accepted in the Journal of Clinical Oncology (Scopus-indexed).",
    name: "DR. MEENA R.",
    designation: "Oncology Researcher",
    organization: "Journal of Clinical Oncology",
  },
  {
    image:
      "/images/publication-support/responding-to-reviewers/the-lancet-of-infectious-disease.jpg",
    quote:
      "The reviewer comments were overwhelming. Pubrica's team simplified the entire process of revision. Their scientific justification and formatting skills were impressive. I'm happy to say my paper was successfully published in The Lancet Infectious Diseases.",
    name: "ARUN J., PHD",
    designation: "Scholar in Biotechnology",
    organization: "The Lancet Infectious Diseases",
  },
  {
    image:
      "/images/publication-support/responding-to-reviewers/v1-indian-journal-of-ophthalmology_thumb.jpg",
    quote:
      "Our clinical manuscript had multiple reviewer rounds, but Pubrica supported us through each revision. The manuscript is now published in the Indian Journal of Ophthalmology.",
    name: "DR. NIRMAL A.",
    designation: "Senior Consultant Ophthalmologist",
    organization: "Indian Journal of Ophthalmology",
  },
];

const faqsData = [
  {
    question: "1. How do I respond to peer review comments from journal reviewers?",
    answer:
      "Respond to peer review comments by addressing each comment carefully, revising the paper if necessary, providing a detailed response letter explaining all the changes made, and maintaining a respectful tone in the response.",
  },
  {
    question: "2. What is the correct format for responding to reviewers' comments?",
    answer:
      "The correct format of the response letter is one in which each comment of the reviewer is quoted and explained in detail, indicating the changes made in the paper.",
  },
  {
    question: "3. How to write a response letter to journal reviewers?",
    answer:
      "Write a response letter by acknowledging the comments received, carefully attending to each comment received, providing clear explanations for the responses given, and using a respectful tone in the response letter.",
  },
  {
    question: "4. What happens after submitting revised manuscripts and reviewer responses?",
    answer:
      "Once the revised paper and response letter are received, the editor may choose to send the paper back for re-evaluation, make a final decision, request further revisions, or accept the paper.",
  },
  {
    question: "5. How can researchers improve their manuscript while responding to reviewer feedback?",
    answer:
      "Researchers can improve the quality of their paper by addressing all the points raised, clarifying the paper, enhancing the methodology, improving the structure, language, and content, ensuring all revisions enhance overall quality and clarity.",
  },
  {
    question: "6. How to address critical reviewer comments effectively?",
    answer:
      "Address critical reviewer comments professionally by responding respectfully, providing clear explanations, making necessary revisions, supporting your arguments with evidence, and acknowledging valid concerns in a structured point-by-point reply.",
  },
  {
    question: "7. What strategies help authors handle major revision requests from journals?",
    answer:
      "When dealing with major revisions, it is important to thoughtfully consider all the feedback received, prioritize key concerns, and respond to them in detail.",
  },
];

export default function TestimonialsAndFaq() {
  // FAQ 1 & 5 expanded by default as shown in the screenshot
  const [openFaqs, setOpenFaqs] = useState<number[]>([1, 5]);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (id: number) => {
    setOpenFaqs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };


  return (
    <div className="w-full bg-[#f6f8f8] font-sans text-slate-800">
      {/* ================= TESTIMONIALS SECTION ================= */}
      <CommonTestimonial
        title="Testimonials"
        description="Discover how Pubrica's response to reviewer comments service has helped researchers successfully navigate reviewer feedback and secure publication in top-tier journals. Here's what our clients say:"
        testimonials={testimonialsData}
      />

      {/* ================= FAQ ACCORDION SECTION ================= */}
      <section className="py-6 px-4 max-w-6xl mx-auto border-t border-slate-200/60">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e4a42] text-center mb-10">
          Frequently Asked Questions Response to Reviewer Comments Services
        </h2>

        {/* 2-Column Accordion Layout */}
        <CommonFAQ
          title="Frequently Asked Questions"
          faqs={faqsData}
        />
      </section>

      {/* Dark Footer Strip */}
      <div className="w-full h-3 bg-[#1e4a42]" />
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#1e4a42] text-white p-6 rounded-sm shadow-md flex justify-between gap-4 items-stretch">
      <div className="flex-1 flex flex-col justify-between pr-2">
        <p className="text-xs leading-relaxed text-slate-100 font-normal italic mb-6">
          {item.quote}
        </p>
        <div>
          <h4 className="text-xs font-bold tracking-wider uppercase text-white">
            {item.author}
          </h4>
          <p className="text-[11px] text-slate-300 italic font-medium">
            {item.role}
          </p>
        </div>
      </div>

      <div className="w-32 flex-shrink-0 bg-white p-1 rounded-sm shadow-inner flex items-center justify-center">
        <Image
          src={item.journalImage}
          alt={item.journal}
          width={217}
          height={179}
          className="w-full h-36 object-cover rounded-sm"
        />
      </div>
    </div>
  );
}
