"use client";

import { useState } from "react";
import TestimonialSlider from "./TestimonialSlider";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="bg-white py-16 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#0A4D4A] mb-4">Testimonials</h2>

      <p className="text-[14px] text-slate-600 max-w-6xl mb-10 leading-relaxed">
        Learn how Pubrica’s expert editing and translation services have helped
        researchers and businesses deliver clear, publication-ready manuscripts
        that enhance credibility, ensure accuracy, and increase global
        visibility.
      </p>

      <TestimonialSlider
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </section>
  );
}
