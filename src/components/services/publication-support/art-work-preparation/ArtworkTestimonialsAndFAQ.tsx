"use client";

import React, { useState } from "react";
import Image from "next/image";
import CommonFAQ from "@/components/common/FAQ";

// --- Types & Data ---

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  journalImage: string;
  journalAlt: string;
}

interface FAQItem {
  question: string;
  answer: string;
  points?: string[];
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote:
      "Pubrica's team transformed my raw clinical diagrams into publication-quality figures that strictly adhered to The Lancet's artwork submission standards. Their precision and speed made the revision process seamless.",
    author: "DR. AARTI MENON",
    role: "Clinical Researcher",
    journalImage:
      "/images/publication-support/art-work-preparation/the-lancet.jpg",
    journalAlt: "The Lancet",
  },
  {
    id: 2,
    quote:
      "The graphical abstract and illustrations submitted to Nature Biotechnology were created entirely by Pubrica. The editors specifically appreciated the clarity and visual balance of the figures.",
    author: "PROF. NEERAJ KULKARNI",
    role: "Biotechnology",
    journalImage:
      "/images/publication-support/art-work-preparation/nature-biotechnology.jpg",
    journalAlt: "Nature Biotechnology",
  },
  {
    id: 3,
    quote:
      "My MRI image series needed technical enhancements and resolution upgrades. Pubrica delivered journal-compliant TIFF files in perfect resolution, which helped me meet RSNA’s stringent submission criteria.",
    author: "DR. KAVITHA NARAYANAN",
    role: "Medical Imaging Specialist",
    journalImage: "/images/publication-support/art-work-preparation/RSNA-.jpg",
    journalAlt: "RSNA",
  },
];

const faqData: FAQItem[] = [
  {
    question: "1. How do I prepare high-resolution figures for a research manuscript?",
    answer:
      "Prepare your figures at a high resolution by utilizing a vector image, maintaining a minimum of 300 DPI for images, and adhering to journal requirements and conventions for clarity and labeling of the images.",
  },
  {
    question: "2. What file formats are accepted for artwork in academic journals?",
    answer:
      "The most commonly used image formats for the journal are typically in TIFF, JPEG, EPS, and PDF formats, depending on the journal's requirements and the image's resolution and quality.",
  },
  {
    question: "3. How can I convert low-resolution images into publication-ready figures?",
    answer:
      "To convert low-resolution images, one should recreate the images in a vector image, utilizing design software, maintaining a minimum of 300 DPI, and ensuring clarity and journal requirements.",
  },
  {
    question: "4. How can artwork editing improve the clarity of research figures?",
    answer:
      "Artwork editing increases clarity by adjusting resolution, contrast, and labels; it also simplifies and standardizes images in accordance with journal requirements and standards.",
  },
];

export default function ArtworkTestimonialsAndFAQ() {
  // State for active testimonial pagination dot
  const [activeTestimonialPage, setActiveTestimonialPage] = useState(0);

  const mobileItem = testimonialsData[activeTestimonialPage];
  const desktopItems = [
    testimonialsData[activeTestimonialPage],
    testimonialsData[(activeTestimonialPage + 1) % testimonialsData.length],
  ];

  return (
    <div className="w-full font-sans text-slate-800 bg-white">
      {/* ---------------- 1. TESTIMONIALS SECTION ---------------- */}
      <section className="w-full bg-[#f8faf9] py-7 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] mb-3">
            Testimonials
          </h2>
          <p className="text-sm md:text-base text-slate-600 mb-10 max-w-5xl leading-relaxed">
            Learn how Pubrica’s artwork preparation service has helped
            researchers meet strict journal image standards and submit
            high-quality, publication-ready figures. Here is what our clients
            say:
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8 md:hidden">
            <ArtworkTestimonialCard item={mobileItem} />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-6 mb-8">
            {desktopItems.map((item) => (
              <ArtworkTestimonialCard
                key={`${activeTestimonialPage}-${item.id}`}
                item={item}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {testimonialsData.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTestimonialPage(index)}
                aria-label={`Slide ${index + 1}`}
                className={`w-2.5 h-2.5 transition-all ${activeTestimonialPage === index
                  ? "bg-white border border-[#0c373b]"
                  : "bg-[#0c373b]"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 2. ASSIST YOU FEATURE SECTION ---------------- */}
      <section className="w-full py-7 px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text & Bullets Side */}
            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0c373b] leading-tight">
                How Our Table Formatting and Article Artwork Preparation Service
                Can Assist You.
              </h2>
              <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                International journals have strict specifications for manuscript
                presentation and technical artwork. Artwork preparation experts
                guarantee adherence to critical journal requirements for
                figures, including layout, formatting, and clarity. By utilizing
                artwork preparation services, you ensure:
              </p>

              <ul className="space-y-3 pt-2 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    Compliance with journal guidelines for layout styles, text
                    formatting, and figure placement.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    Expert assistance in addressing minute details related to
                    figures.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    Access to specialized tools for correcting technical aspects
                    of artwork.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>
                    Enhancement of image, table, and graph quality in terms of
                    colour, resolution, and size.
                  </span>
                </li>
              </ul>
            </div>

            {/* Image Side */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full h-[260px] sm:h-[320px] rounded-sm overflow-hidden shadow-sm border border-gray-200">
                <Image
                  src="/images/publication-support/art-work-preparation/Table-Formatting-and-Article-Artwork-Preparation.jpg"
                  alt="Reviewing technical blueprints and artwork"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. REPLACED FAQ SECTION ---------------- */}
      <CommonFAQ
        title="Frequently Asked Questions – Artwork Preparation Service"
        faqs={faqData}
      />
    </div>
  );
}

function ArtworkTestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="bg-[#1c473c] text-white p-6 md:p-8 rounded-lg shadow-md flex flex-col justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
        <div className="sm:col-span-8">
          <p className="text-xs md:text-sm leading-relaxed mb-6 font-light italic">
            &quot;{item.quote}&quot;
          </p>
        </div>
        <div className="sm:col-span-4 flex justify-center sm:justify-end">
          <div className="relative w-28 h-24 border border-emerald-800/50 rounded overflow-hidden shadow-sm bg-white">
            <Image
              src={item.journalImage}
              alt={item.journalAlt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold text-xs md:text-sm tracking-wide uppercase">
          {item.author}
        </h4>
        <p className="text-xs text-emerald-200/80 italic mt-0.5">{item.role}</p>
      </div>
    </div>
  );
}