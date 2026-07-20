'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '@/components/common/Container';
import { TESTIMONIALS_DATA } from '@/lib/constants';
import { cn } from '@/lib/helpers';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-primary-50/50 py-20 relative overflow-hidden select-none">
      {/* Visual backdrop grid */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <Container className="relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-wider text-primary-800 uppercase bg-primary-100/50 px-3 py-1 rounded-full">
            Client Reviews
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 font-display mt-3">
            What Leading Researchers Say
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-sans mt-2">
            Feedback from clinical coordinators, professors, and industry directors who publish with our support.
          </p>
        </div>

        {/* Carousel slide container */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-12 transition-all duration-300">
          <div className="absolute right-8 top-8 opacity-10 text-primary-800">
            <Quote className="h-16 w-16 transform scale-y-[-1]" />
          </div>

          <div className="flex flex-col gap-6">
            {/* Star Rating */}
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: TESTIMONIALS_DATA[activeIndex].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-500" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed italic font-sans font-medium">
              "{TESTIMONIALS_DATA[activeIndex].text}"
            </p>

            {/* Author Profile */}
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-4">
              <img
                src={TESTIMONIALS_DATA[activeIndex].avatar}
                alt={TESTIMONIALS_DATA[activeIndex].name}
                className="h-14 w-14 rounded-full object-cover border-2 border-primary-100 shadow-sm"
              />
              <div>
                <h4 className="font-bold text-gray-900 font-display leading-tight">
                  {TESTIMONIALS_DATA[activeIndex].name}
                </h4>
                <p className="text-xs text-gray-500 font-sans mt-0.5">
                  {TESTIMONIALS_DATA[activeIndex].role}
                </p>
                <p className="text-xs font-semibold text-primary-800 font-sans mt-0.5">
                  {TESTIMONIALS_DATA[activeIndex].institution}
                </p>
              </div>
            </div>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3 mt-8 border-t border-gray-50 pt-6 sm:border-0 sm:pt-0 sm:absolute sm:right-12 sm:bottom-12">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-gray-200 hover:border-primary-800 hover:bg-primary-50 text-gray-500 hover:text-primary-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-gray-200 hover:border-primary-800 hover:bg-primary-50 text-gray-500 hover:text-primary-800 transition-colors focus:outline-none cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-2 w-2 rounded-full transition-all duration-300 cursor-pointer',
                activeIndex === index ? 'bg-primary-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
