import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Link from 'next/link';

export default function ResourceConsolidationBanner() {
  return (
    <section className="relative w-full py-8 select-none overflow-hidden">
      <Image
        src="/images/home/bg-1-min-scaled-1.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full px-4 sm:px-8 max-w-[1500px] mx-auto flex justify-center items-center">
        {/* Full-Width White Floating Container Card */}
        <div className="w-full bg-white shadow-xl border border-gray-100 px-4 py-8 sm:px-6 md:px-12 md:py-10 text-center flex flex-col items-center justify-center">

          {/* Heading - Responsive (2 balanced lines on mobile, strictly 1 line on desktop) */}
          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-gray-950 font-display leading-snug text-balance md:whitespace-nowrap">
            Pubrica – A Consolidated Place for Resources
          </h2>

          {/* Description Paragraph - Exact 2-Line Break on Desktop */}
          <p className="text-xs md:text-sm lg:text-[13px] text-gray-700 leading-relaxed font-sans mt-4 sm:mt-5 text-center">
            We have a global network with a diverse range of collaborations with prominent universities and industries. We also have access to various databases, supported by esteemed clinical experts and leading <br className="hidden md:block" />
            institutions. With over 20 years of expertise, we reinvent ourselves every day and continue to excel in the field of research and development.
          </p>

          {/* Action CTA Button */}
          <Link
            href="/services/"
            className="mt-6 bg-[#0e302e] hover:bg-[#071f1e] text-white font-medium text-xs tracking-wide px-7 py-3 rounded-tl-xl rounded-br-xl rounded-tr-md rounded-bl-md shadow-md transition-all duration-300 inline-block"
          >
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}