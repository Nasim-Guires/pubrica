"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";

interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  journalCoverSrc: string;
  flagSrc: string;
  flagAlt: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const EditingTranslationManuscriptEditingTestimonialsAndFaq: React.FC =
  () => {
    // Testimonial slide index
    const [activeIndex, setActiveIndex] = useState<number>(0);

    // FAQ open state (stores ID of currently open FAQ, or null if all closed)
    const [openFaqId, setOpenFaqId] = useState<number | null>(1);

    // All testimonials data
    const testimonialsData = [
      {
        image:
          "/images/editing-and-translation/manuscript-editing/european-journal-of-internal-medicine.png",
        quote:
          "Pubrica's manuscript editing service transformed my draft into a polished paper that met all the requirements of my target journal, Journal of Neuroscience. The attention to detail was outstanding.",
        name: "DR. EMILY CARTER",
        designation: "Associate Professor of Neuroscience",
        organization: "USA",
        flag:
          "/images/editing-and-translation/manuscript-editing/germany-1-1.png",
      },
      {
        image:
          "/images/editing-and-translation/manuscript-editing/journal-of-clinical-and-diagnostic-research.png",
        quote:
          "The editors not only corrected grammar and formatting but also improved the overall clarity and flow of my article. Thanks to Pubrica, my manuscript was accepted in The Lancet without major revisions.",
        name: "PROF. RAJESH NAIR",
        designation: "Department of Cardiology",
        organization: "India",
        flag: "/images/editing-and-translation/manuscript-editing/flag.png",
      },
      {
        image:
          "/images/editing-and-translation/manuscript-editing/journal-of-neuroscience-.png",
        quote:
          "I truly appreciate the expertise of Pubrica's editors. Their guidance on journal-specific formatting and language refinement helped me successfully submit to Nature Communications.",
        name: "DR. ANNA MÜLLER",
        designation: "Senior Research Scientist in Molecular Biology",
        organization: "Germany",
        flag: "/images/editing-and-translation/manuscript-editing/spain.png",
      },
    ];

    // All FAQ items with exact text extracted from screenshots
    const faqs = [
      {
        question:
          "1. What does manuscript editing include for research papers?",
        answer:
          "Editing of a manuscript involves language correction, structural correction, clarity improvement, format correction, reference verification, and refinement of the manuscript according to journal requirements and improvement of the quality of presentation.",
      },
      {
        question:
          "2. How can manuscript editing improve the chances of journal acceptance?",
        answer:
          "Manuscript editing improves clarity, structure, professionalism, reduces language errors, ensures compliance, and readability, thus increasing the chances of evaluation and acceptance by reviewers.",
      },
      {
        question:
          "3. When should a research paper be edited before journal submission?",
        answer:
          "A research paper is to be edited after completing the final draft, which is to be submitted to a journal, thus ensuring clarity, structure, compliance, accurate references, and manuscript refinement.",
      },
      {
        question:
          "4. What are the common writing issues corrected during manuscript editing?",
        answer:
          "Common issues may include grammatical errors, unclear writing, poor structure, use of incorrect terminology, poor flow, incorrect formatting, citation errors, and a lack of clarity in results and discussion sections.",
      },
      {
        question:
          "5. Do journals recommend professional editing for non-native English authors?",
        answer:
          "Many journals advise non-native English-speaking authors to seek professional language editing to enhance clarity and submission standards, although this does not guarantee publication.",
      },
      {
        question:
          "6. What is the difference between manuscript editing and proofreading?",
        answer:
          "Editing a manuscript will enhance structure, clarity, flow, and content quality, and proofreading will correct grammatical errors, spelling mistakes, punctuation errors, and minor formatting errors.",
      },
      {
        question:
          "7. How do authors choose the right manuscript editing service for journal submission?",
        answer:
          "Authors may look for editing services with expertise in the subject area, skilled editors, clear procedures, guarantee of confidentiality, positive reviews, knowledge of journal guidelines, and clear turnaround times.",
      },
    ];

    const toggleFaq = (id: number) => {
      setOpenFaqId(openFaqId === id ? null : id);
    };

    // const mobileItem = testimonials[activeIndex];
    // const desktopItems = [
    //   testimonials[activeIndex],
    //   testimonials[(activeIndex + 1) % testimonials.length],
    // ];

    const renderCard = (item: Testimonial, key: string) => (
      <div
        key={key}
        className="bg-white border border-slate-300 rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between relative"
      >
        <div className="bg-slate-200/80 rounded-lg p-4 sm:p-5 flex gap-4 items-center mb-6 min-h-[140px]">
          <div className="w-20 h-24 relative flex-shrink-0 border border-slate-300 shadow-sm rounded overflow-hidden">
            <Image
              src={item.journalCoverSrc}
              alt="Journal Cover"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
            {item.quote}
          </p>
        </div>
        <div className="flex items-center justify-between pt-1">
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-wide">
              — {item.authorName}
            </h3>
            <p className="text-xs text-slate-600 italic mt-0.5">
              {item.authorTitle}
            </p>
          </div>
          <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200 shadow-sm relative flex-shrink-0">
            <Image
              src={item.flagSrc}
              alt={item.flagAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    );

    return (
      <div className="w-full bg-slate-50 py-6 sm:py-7 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
          {/* SECTION 1: Testimonials */}
          <CommonTestimonial
            title="What Our Clients Say"
            description="Our manuscript editing service has helped researchers improve the clarity, quality, and journal-readiness of their manuscripts."
            testimonials={testimonialsData}
          />

          {/* SECTION 2: Frequently Asked Questions Accordion */}
          <CommonFAQ
            title="Frequently Asked Questions"
            faqs={faqs}
          />
        </div>
      </div>
    );
  };
