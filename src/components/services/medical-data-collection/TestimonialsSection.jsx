'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    quote:
      'We relied on Pubrica for retrospective data abstraction, and their ability to handle sensitive patient information with accuracy and confidentiality exceeded our expectations.',
    name: 'DR. P. NAIR',
    role: 'Hospital Research Coordinator, UAE',
    flag: '/images/medical-writing/UAE.png',
    flagAlt: 'United Arab Emirates flag',
    journalCover: '/images/medical-writing/the-lancet.png',
    journalAlt: 'The Lancet Respiratory Medicine Journal Cover',
  },
  {
    id: 2,
    quote:
      'Our pharmacovigilance study needed accurate real-world data, and Pubrica delivered exactly that. Their professionalism and understanding of regulatory guidelines made them an ideal partner.',
    name: 'MR. V. IYER',
    role: 'Pharmacovigilance Manager, India',
    flag: '/images/medical-writing/in.png',
    flagAlt: 'India flag',
    journalCover: '/images/medical-writing/international-journal-of-cardialogy-1-1.png',
    journalAlt: 'International Journal of Cardiology Cover',
  },
  {
    id: 3,
    quote:
      'The medical data collection support from Pubrica was critical for our multi-centre clinical trial. Their attention to detail and compliance with GCP ensured clean, reliable datasets that met both regulatory and sponsor requirements.',
    name: 'Dr. S. Mehta',
    role: 'Clinical Research Director, India',
    flag: '/images/medical-writing/in.png',
    flagAlt: 'Saudi Arabia flag',
    journalCover: '/images/medical-writing/RSNA-1-1.png',
    journalAlt: 'Clinical Research Journal Cover',
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-labelledby="testimonials-heading" className="w-full bg-[#f4f6f6] py-7 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Semantic Header */}
        <header className="mb-10">
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold text-[#082e2b] mb-4">
            Testimonials
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl">
            Our medical data collection services support researchers, healthcare providers, CROs, and academic institutions by delivering scientifically validated data for clinical and research purposes. Here’s what some of our clients say:
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonialsData.slice(activeIndex, activeIndex + 2).map((item) => (
            <article
              key={item.id}
              className="bg-white border border-slate-300 rounded-xl p-6 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-md"
            >
              {/* Inner Gray Quote Box with Journal Cover */}
              <div className="bg-[#d3d7d7]/60 rounded-lg p-5 flex flex-col sm:flex-row items-center gap-5 mb-6">
                {/* Journal Cover Image */}
                <div className="relative w-28 h-36 flex-shrink-0 rounded shadow-md overflow-hidden bg-white border border-gray-200">
                  <Image
                    src={item.journalCover}
                    alt={item.journalAlt}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>

                {/* Quote Text */}
                <blockquote className="text-xs sm:text-sm text-gray-800 italic leading-relaxed font-medium">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Details & Flag */}
              <footer className="flex items-end justify-between pt-2">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 italic mt-0.5">
                    {item.role}
                  </p>
                </div>

                {/* Country Flag Badge */}
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200 flex-shrink-0 shadow-sm">
                  <Image
                    src={item.flag}
                    alt={item.flagAlt}
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <nav aria-label="Testimonials Carousel Pagination" className="flex justify-center items-center gap-2">
          {Array.from({ length: testimonialsData.length - 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                activeIndex === idx
                  ? 'bg-[#082e2b] scale-110'
                  : 'bg-white border-2 border-[#082e2b] hover:bg-gray-200'
              }`}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}