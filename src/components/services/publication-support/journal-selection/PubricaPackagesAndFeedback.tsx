"use client";

import CommonPackages from "@/components/common/CommonPackages";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import Image from "next/image";
import React from "react";
// import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials"; // Update path if stored elsewhere

export default function PubricaPackagesAndFeedback() {
  const testimonialsData: TestimonialItem[] = [
    {
      id: 1,
      quote:
        "I had a strict deadline for the publication I needed for my grant proposal. Pubrica's journal selection service identified appropriate indexed fast-track journals. My manuscript was accepted within 7 weeks. Outstanding service.",
      author: "DR. DAVID MENSAH",
      role: "- Independent Researcher - Public Health",
      image: "/images/publication-support/journal-selection/book-01.jpg",
    },
    {
      id: 2,
      quote:
        "Pubrica's journal discovery team helped me quickly identify journals aligned with the scope and significance of my manuscript. The database filtering and editorial insights saved months of guessing. I am now published in a Q2 Journal based on Scopus. Highly recommended!",
      author: "DR. ANJALI VERMA, PHD",
      role: "- Scholar - Life Sciences",
      image: "/images/publication-support/journal-selection/book-01.jpg",
    },
    {
      id: 3,
      quote:
        "Thanks to Pubrica, I submitted to a high-impact open-access journal I would not have found on my own. Their review and selection based on rankings confirmed the journal was appropriate for my research goals.",
      author: "DR. FATIMA AL-NOURI",
      role: "- Postdoc Researcher - Medical Genetics",
      image: "/images/publication-support/journal-selection/scropt-2.jpg",
    },
  ];

  const publicationPackages = [
    {
      icon: "/images/publication-support/journal-selection/standard-logo-480x480.png",
      title: "Standard",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Authors seeking expert journal advice in determining the best fit for their manuscript.",
      includes: [
        "3 Curated Journal Recommendations (Scopus/SCI/PubMed aligned) based on your research scope and goals.",
        "Summary Report with journal aims, scope, acceptance rates, and author guidelines.",
      ],
      addOns: [
        "Impact Factor & Indexing.",
        "Open Access vs Subscription Journal Consultations.",
      ],
      turnaround: "5 working days.",
      cardBgColor: "rgba(194, 211, 205, 0.5)",
      titleColor: "#1e293b",
    },
    {
      icon: "/images/publication-support/journal-selection/advanced.webp",
      title: "Advanced",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Researchers who want the journal selection and the manuscript preparation for a clear and timely submission process.",
      includes: [
        "All deliverables provided in the Standard Package.",
        "Manuscript Formatting for the selected journal’s guidelines.",
        "Customized Cover Letter draft as per the journal guidelines.",
      ],
      addOns: [
        "Impact Factor & Indexing Analysis.",
        "Open Access vs Subscription Journal Consultation.",
        "Language Editing & Proofreading.",
      ],
      turnaround: "7–8 working days.",
      cardBgColor: "rgba(204, 174, 203, 0.5)",
      titleColor: "#1e293b",
    },
    {
      icon: "/images/publication-support/journal-selection/elite.webp",
      title: "Elite",
      subtitle: "High-End Publication Support + Rapid Technical Review",
      idealFor:
        "Authors requiring complete support from journal selection through to submission and peer review.",
      includes: [
        "All deliverables in the Advanced Package.",
        "Submission Support, including tracking and communication management.",
        "Peer-Review Rebuttal Support with expert response drafting.",
      ],
      addOns: [
        "Impact Factor & Indexing Analysis.",
        "Open Access vs Subscription Journal Consultation.",
        "Language Editing & Proofreading.",
      ],
      turnaround: "10–12 working days.",
      cardBgColor: "rgba(207, 178, 136, 0.5)",
      titleColor: "#1e293b",
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: OUR PACKAGES                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto bg-white">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-center mb-6">
          Our Packages
        </h2>

        <div>
          <CommonPackages packages={publicationPackages} />
        </div>

        <div className="mt-3 sm:mt-14 text-center relative">
          <GetFreeQuoteButton />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: TESTIMONIALS                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-6 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-8">
          Testimonials
        </h2>

        <MovingTestimonials data={testimonialsData} autoSlideInterval={5000} />
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: CLIENT FEEDBACK                           */}
      {/* ---------------------------------------------------- */}
      <section className="py-14 px-4 sm:px-6 font-poppins">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0d3b44] text-left mb-3">
            Client Feedback
          </h2>

          <p className="text-base text-slate-600 leading-relaxed mb-8">
            We prioritize open, timely, and transparent communications to keep the
            client informed through every stage of their project. Using a
            quality-driven approach guarantees precise feedback with a collaborative
            support framework for their research to work!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1: Plagiarism Report */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/Plar-REport-768x525.png"
                  alt="Plagiarism Report"
                  width={768}
                  height={525}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-3 font-semibold text-slate-800 text-lg text-center">
                Plagiarism Report
              </h3>
            </div>

            {/* Card 2: ERP System */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/sample-ERP-QC-768x346.png"
                  alt="Communication through ERP system"
                  width={768}
                  height={346}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-3 font-semibold text-slate-800 text-lg text-center">
                Communication through ERP system
              </h3>
            </div>

            {/* Card 3: WhatsApp */}
            <div className="flex flex-col items-center w-full">
              <div className="w-full h-44 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/images/publication-support/journal-selection/Whatsapp-group.png"
                  alt="Communication through Whatsapp"
                  width={768}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="mt-3 font-semibold text-slate-800 text-lg text-center">
                Communication through Whatsapp
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}