'use client';

import Image from 'next/image';
import { useState } from 'react';

export type AccordionItem = {
  title: string;
  content: string;
};

export interface ReusableWhyChooseProps {
  heading: string;
  description: string;
  items: AccordionItem[];
  imageUrl: string;
  imageAlt: string;
}

export default function ReusableWhyChooseSection({
  heading,
  description,
  items,
  imageUrl,
  imageAlt,
}: ReusableWhyChooseProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: IMAGE SECTION (Supports next/image) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[420px] h-[360px] md:h-[400px]">
              <div className="absolute inset-0 bg-[#eaf4ef] rounded-full filter blur-2xl opacity-60"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                <Image 
                  src={imageUrl} 
                  alt={imageAlt} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT & ACCORDION CARDS */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                {heading}
              </h2>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>

            {/* ACCORDION LIST */}
            <div className="space-y-4 pt-2">
              {items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-2 transition-all cursor-pointer"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <div className="flex items-center justify-between text-gray-900 font-bold text-sm md:text-base">
                      <span className="flex items-center space-x-2">
                        <span className="text-[#0b3b2c] font-black">—</span>
                        <span>{item.title}</span>
                      </span>
                      <span className="text-gray-500 font-bold text-lg select-none">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="text-xs md:text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-[#0b3b2c]/20 pt-2">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}