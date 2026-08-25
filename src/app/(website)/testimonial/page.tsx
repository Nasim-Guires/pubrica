import React from 'react';
import type { Metadata } from 'next';
import { TESTIMONIALS } from '@/lib/data/testimonials';

export const metadata: Metadata = {
  title: 'Testimonials - Pubrica',
  description: "Our clients reminisce their success stories. Here's what they say about Pubrica.",
};

export default function TestimonialPage() {
  return (
    <div className="min-h-screen bg-[#f0f4f8] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Testimonials</h1>
        <p className="text-gray-300 text-sm max-w-xl mx-auto">
          Our clients reminisce their success stories. Here&rsquo;s what they say&hellip;
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="break-inside-avoid mb-6 flex flex-col items-start w-full">
              <div className="relative w-full bg-white rounded-md p-6 min-h-[100px] flex items-center border border-gray-200/60 shadow-sm after:content-[''] after:absolute after:bottom-[-8px] after:left-8 after:w-0 after:h-0 after:border-l-[8px] after:border-l-transparent after:border-r-[8px] after:border-r-transparent after:border-t-[8px] after:border-t-white">
                <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed font-medium">{item.quote}</p>
              </div>
              {item.attribution && (
                <p className="text-xs font-bold text-[#004d40] mt-3 pl-2">&mdash; {item.attribution}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
