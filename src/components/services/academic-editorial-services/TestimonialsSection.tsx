"use client";

import CommonTestimonial from "@/components/common/CommonTestimonials";
import { MovingTestimonials, TestimonialItem } from "@/components/common/MovingTestimonials.tsx";
import Image from "next/image";
import React, { useState } from "react";

interface Testimonial {
  id: string;
  journalCover: string;
  quote: string;
  author: string;
  title: string;
  flagSrc?: string;
}

const testimonials = [
  {
    image:
      "/images/academic-editorial-services/journal-of-neuroscience-.png",
    quote:
      "Pubrica's editorial team elevated the quality of my manuscript with incredible precision and academic clarity.",
    name: "Dr. Aisha Rahman",
    designation: "PhD in Public Health",
    organization: "Malaysia",
  },
  {
    image:
      "/images/academic-editorial-services/journal-of-clinical-epidemiology.png",
    quote:
      "Working with Pubrica was a smooth and professional experience with excellent editing quality.",
    name: "Prof. Daniel Thompson",
    designation: "Research Scientist",
    organization: "USA",
  },
  {
    image:
      "/images/academic-editorial-services/jama-oncology-journal.png",
    quote:
      "Exceptional editorial assistance improved readability and academic accuracy throughout.",
    name: "Maria Fernandes",
    designation: "MSc Biotechnology",
    organization: "Portugal",
  },
];
export function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Logic to show 2 cards per slide group

  return (
    <section className="w-full bg-[#f8fafc] text-slate-800 font-sans py-7 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <CommonTestimonial
          title="Testimonials"
          description="At Pubrica, our Academic Editorial Services are designed to elevate scholarly work to its highest standard. From manuscripts and theses to research reports, we refine language, structure, and subject-specific terminology to ensure clarity, academic rigor, and publication readiness. Here’s what our clients have to say about our services:"
          testimonials={testimonials}
        />

      </div>
    </section>
  );
}