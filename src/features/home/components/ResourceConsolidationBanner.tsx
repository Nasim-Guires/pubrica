import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import Link from 'next/link';

export default function ResourceConsolidationBanner() {
  return (
    <section className="relative w-full py-7 select-none overflow-hidden">
      <Image
        src="/images/home/bg-1-min-scaled-1.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative z-10 flex justify-center items-center">
        {/* Centered Floating Resource Container Card */}
        <div className="w-full max-w-5xl bg-white shadow-xl border border-gray-100 px-6 py-6 md:px-16 md:py-6 text-center flex flex-col items-center justify-center">

          {/* Main Content Heading */}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-950 font-display leading-tight">
            Pubrica – A Consolidated Place for Resources
          </h2>

          {/* Core Content Body Paragraph */}
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans max-w-4xl mt-6">
            We have a global network with a diverse range of collaborations with prominent universities and industries.
            We also have access to various databases, supported by esteemed clinical experts and leading institutions.
            With over 20 years of expertise, we reinvent ourselves every day and continue to excel in the field of research and development.
          </p>

          {/* Action Button Accent */}
          <Link
            href="/services/"
            className="mt-8 bg-emerald-950 text-white font-medium text-xs tracking-wide uppercase px-8 py-3 rounded shadow-md hover:bg-emerald-900 transition-all duration-300 transform hover:-translate-y-0.5 inline-block"
          >
            Read more
          </Link>
        </div>
      </Container>
    </section>
  );
}