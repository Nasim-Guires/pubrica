"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";

// ----------------------------------------------------------------------
// DATA TYPES & CONSTANTS
// ----------------------------------------------------------------------
interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journal: string;
  journalImage: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Pubrica’s poster preparation service transformed my research into a visually compelling and clear presentation. The team ensured full compliance with conference guidelines. My poster was highly appreciated at the International Conference on Oncology, complementing my publication in the Journal of Clinical Oncology (Scopus-indexed).",
    author: "DR. ANANYA S.",
    role: "Oncology Researcher",
    journalName: "Journal of Clinical Oncology",
    journalSub: "Scopus-indexed",
    image:
      "/images/publication-support/poster-preparation/journal-of-clinical-oncology-1.jpg",
  },
  {
    id: 2,
    quote:
      "The experts at Pubrica designed an impactful poster that showcased my neuroscience findings perfectly. Their attention to detail and formatting expertise made the conference presentation seamless. This greatly supported my recent publication in Frontiers in Neuroscience (Web of Science-indexed).",
    author: "DR. RAJESH K.",
    role: "Neuroscience Scholar",
    journalName: "Frontiers in Neuroscience",
    journalSub: "Web of Science-indexed",
    image:
      "/images/publication-support/poster-preparation/Frontiers-of-neuro-science-.jpg",
  },
  {
    id: 3,
    quote:
      "The team at Pubrica expertly formatted my pharmaceutical sciences research into a conference-ready poster that met strict guidelines. Their support allowed me to focus on presenting while ensuring professional quality. This complemented my work published in the European Journal of Pharmaceutical Sciences (Scopus-indexed).",
    author: "DR. SURESH N.",
    role: "Pharmaceutical Scientist",
    journalName: "European Journal of Pharmaceutical Sciences",
    journalSub: "Scopus-indexed",
    image:
      "/images/publication-support/poster-preparation/european-journal-of-pharmaceutical-sciences.jpg",
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const posterFaqs: FAQItem[] = [
  {
    id: 1,
    question: "1. How to design a scientific poster for a conference?",
    answer:
      "A scientific poster should be designed with an appropriate title, sections such as an introduction, methods, results, conclusion, appropriate visuals, clear font styles, and minimal text to present scientific research at conferences.",
  },
  {
    id: 2,
    question: "2. What should be included in a research poster presentation?",
    answer:
      "A research poster should have an appropriate title, author details, background, objectives, methods, key results, conclusions, references, acknowledgment, and figures or charts to present research in an effective manner.",
  },
  {
    id: 3,
    question: "3. What is the best format for an academic conference poster?",
    answer:
      "The best academic conference poster design is a well-structured layout with a logical flow (top-to-bottom or left-to-right), concise text, strong visuals, legible typography, and adequate use of space.",
  },
  {
    id: 4,
    question: "4. How to create an effective research poster layout?",
    answer:
      "Designing an effective research poster layout involves structuring your content with a logical flow, using section headers, emphasizing visuals over text, using consistent design, and ensuring legibility even from a distance.",
  },
  {
    id: 5,
    question: "5. How do I convert my research paper into a conference poster?",
    answer:
      "To turn your research paper into a conference poster, you can summarize your paper, focus on your main findings, use visuals instead of lengthy text, use simple language, and design your content with a logical flow, concise layout, etc.",
  },
  {
    id: 6,
    question: "6. How can I make my scientific poster visually appealing?",
    answer:
      "Design an eye-catching scientific poster using a clean design, color scheme, font styles, quality images, proper white space, and simple design elements that effectively highlight important scientific findings in a professional manner.",
  },
  {
    id: 7,
    question: "7. Which tools can be used to design a scientific poster?",
    answer:
      "Scientific posters can be designed using computer programs such as Microsoft PowerPoint, Canva, Adobe Illustrator, CorelDRAW, and LaTeX editors such as Overleaf for professional design and formatting.",
  },
  {
    id: 8,
    question:
      "8. What font size and formatting should be used in a research poster?",
    answer:
      "Use large font styles for scientific posters, ranging from 60 to 90 points for title fonts, 36 to 44 points for headings, and 24 to 32 points for text fonts, with proper formatting for easy reading.",
  },
  {
    id: 9,
    question:
      "9. What are the key elements of a professional scientific poster?",
    answer:
      "A professional scientific poster will have a title, author information, background information, objectives, methods, results, conclusion, references, acknowledgments, and well-designed visual content in a clean and logical design.",
  },
  {
    id: 10,
    question:
      "10. Can professional poster design services improve conference presentation quality?",
    answer:
      "Yes, professional poster design services will be helpful in improving the quality of conference presentations by improving the layout, visual content, readability, and design of the conference presentations.",
  },
  {
    id: 11,
    question: "11. What are the standard dimensions for conference posters?",
    answer:
      'The most commonly used poster sizes in conferences are 36” x 48” in a landscape orientation or A0 size, which is 841 x 1189 mm.',
  },
  {
    id: 12,
    question:
      "12. What are the common mistakes to avoid in research poster design?",
    answer:
      "Some of the common mistakes that can occur while designing a poster include too much text, poor layout structure, low-quality images, small font, poor formatting, poor visuals, and poor emphasis of key results.",
  },
];

// ----------------------------------------------------------------------
// MAIN COMBINED COMPONENT
// ----------------------------------------------------------------------
export default function TestimonialsAndFaqSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);
  const [openRightFaqId, setOpenRightFaqId] = useState<number | null>(7);

  return (
    <div className="w-full">
      <MovingTestimonials data={testimonialsData} />
    </div>
  );
}

// Fixed Mobile-Friendly Testimonial Card Component (if used locally)
function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#104e43] text-white p-4 md:p-6 rounded shadow-md flex flex-col justify-between w-full">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center md:items-start mb-6">

        {/* Quote text takes full width on mobile, 8 cols on desktop */}
        <div className="w-full md:col-span-8 space-y-2">
          <p className="text-xs md:text-[13px] leading-relaxed text-gray-100 font-light italic text-center md:text-left">
            &quot;{item.quote}&quot;
          </p>
        </div>

        {/* Journal Image centers on mobile, right-aligned on desktop */}
        <div className="w-full md:col-span-4 flex justify-center md:justify-end mt-2 md:mt-0">
          <div className="w-24 h-28 md:w-28 md:h-32 bg-white p-1 flex items-center justify-center border border-gray-300 rounded shadow-inner">
            <Image
              src={item.journalImage}
              alt={item.journal}
              width={217}
              height={179}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>

      <div className="border-t border-[#1a6659] pt-3 text-center md:text-left">
        <h4 className="font-bold text-xs uppercase tracking-wider text-white">
          {item.author}
        </h4>
        <p className="text-[11px] text-gray-300 italic">{item.role}</p>
      </div>
    </div>
  );
}