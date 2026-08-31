"use client";

import React, { useEffect, useState } from "react";
import { Plus, Minus, Download, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CommonFAQ from "@/components/common/FAQ";
import DynamicInsightsSection from "@/components/services/DynamicInsightsSection";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonTestimonial from "@/components/common/CommonTestimonials";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";

export default function PubricaResourceHub() {
  // --- TESTIMONIALS DATA ---
  const testimonialsData: TestimonialItem[] = [
    {
      id: 1,
      image: "/images/publication-support/scropt-2.jpg",
      quote:
        "I was overwhelmed with reviewer comments, but Pubrica's scientific experts helped draft precise, evidence-backed responses that led to final acceptance.",
      author: "DR. R. PATEL",
      role: "Postdoctoral Fellow, Pharmacology",
    },
    {
      id: 2,
      image: "/images/publication-support/book-01.jpg",
      quote:
        "From the login to uploading a file and entering metadata, Pubrica handled the submission process seamlessly. Their support was timely and accurate.",
      author: "DR. M. THOMAS",
      role: "Research Scientist, Public Health",
    },
    {
      id: 3,
      image: "/images/publication-support/book-01.jpg",
      quote:
        "Pubrica helped me shortlist the most suitable journals aligned with my manuscript's scope. Their detailed recommendations saved me weeks of research.",
      author: "DR. ANANYA RAO",
      role: "Assistant Professor, Life Sciences",
    },
  ];


  // Independent automatic interval ensuring mobile loops through all 3 items, and desktop loops through 2 pairs


  // --- FAQ DATA ---
  const faqData = [
    {
      question:
        "How can I increase the chances of getting my research paper published in a high-impact journal?",
      answer:
        "Improve your chances of getting published by selecting an appropriate journal, complying with authors’ requirements, having robust methodologies, offering clear results, and revising your paper through thorough editing.",
    },
    {
      question: "Why do research papers get rejected by journals?",
      answer:
        "Research papers face high chances of rejection if there is poor study design, a lack of originality, poor methodology, ambiguity, mismatch with journal scope, or failure to comply with author guidelines.",
    },
    {
      question:
        "How can I avoid submitting my manuscript to predatory journals?",
      answer:
        "To avoid predatory journals, researchers can use tools such as indexing databases (Scopus, Web of Science, etc.), evaluating the publisher’s legitimacy, reviewing editorial boards, peer review processes, and consulting reputable sources or experts.",
    },
    {
      question:
        "How long does the academic journal publication process take?",
      answer:
        "The process of publishing a research paper in academic journals takes approximately 3 to 12 months, depending upon various factors such as peer review, revisions, etc.",
    },
    {
      question:
        "How can research teams improve publication success across multiple projects?",
      answer:
        "Researchers can increase their publication success rate by standardizing the publication process, conducting robust research design, fostering effective collaboration, delivering quality writing, and planning for journal targeting early in the research process.",
    },
    {
      question:
        "What are the benefits of using professional publication support services?",
      answer:
        "Professional publication support services help improve the quality, clarity, and structure of manuscripts. It also helps with journal guideline adherence and submission readiness.",
    },
    {
      question:
        "What are the key factors journals consider before accepting a manuscript?",
      answer:
        "The journal checks the originality of the research, its relevance to the journal’s scope, methodology, clarity of the writing, significance of the research findings, ethical issues, and adherence to journal submission guidelines.",
    },
    {
      question:
        "What are the best strategies to publish research in indexed journals?",
      answer:
        "Publish in indexed journals by selecting the right journal for your work, following author guidelines, using robust methodology, providing clear results, writing well, and revising your work based on feedback from peers.",
    },
  ];


  return (
    <div className="bg-slate-50 text-[#1e293b] font-poppins antialiased text-[16px]">
      {/* ================= SECTION 1: SAMPLE WORK BANNER ================= */}
      <PubricaSampleWorkCard
        bookCoverImage={{
          src: "/images/publication-support/W-2-The-Role-of-the-Corresponding-Author-in-Research-Publication-1-723x1024.jpg",
          alt: "The Role of the Corresponding Author in Research Publication",
          width: 723,
          height: 1024,
        }}
        sections={[
          {
            heading: "Publication Support Sample Work",
            button: {
              label: "Discover More",
              url: "/insights/sample-work/the-impact-of-drinking-water-sources-on-gut-microbial-diversity-in-canines-peer-review/",
            },
          },
          {
            heading: "Download the full Report Now",
            descriptionSegments: [
              { text: "Explore our " },
              {
                text: "Publication Support",
                url: "/services/publication-support/journal-selection/journal-selection-alcoholic-liver-disease/",
              },
              {
                text: " Services sample work tailored to your manuscript's scope, indexing requirements, and impact factor goals.",
              },
            ],
            button: {
              label: "Discover More",
              url: "/insights/sample-work/",
            },
          },
        ]}
        footerDisclaimerSegments={[
          {
            text: "Pubrica meets crest standards and protocols of journal publishing ethics in every single phase of services and processes. Pubrica adheres to authorship guidelines drafted by the International Council of Medical ",
          },
          {
            text: "Journal",
            url: "/services/publication-support/journal-selection/journal-citation-reports-impact-metrics-guide/",
          },
          {
            text: " Editors (ICMJE), and the scope for services will be routinely updated as per the Committee on Publication Ethics (COPE) and International Society of Medical Publication Professionals guidelines (ISMPP).",
          },
        ]}
      />

      {/* ================= SECTION 2: TESTIMONIALS & FAQ ================= */}
      <section className="py-7 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100 font-poppins">
        <MovingTestimonials data={testimonialsData} />
      </section>

      {/* ================= SECTION 3: INSIGHTS SECTION (live from Academy) ================= */}
      <InsightsSection />
    </div>
  );
}