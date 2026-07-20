import React from 'react';
import Container from '@/components/common/Container';

export default function ResourceConsolidationBanner() {
  return (
    <section 
      className="relative w-full py-16 bg-cover bg-center select-none overflow-hidden"
      style={{ 
        // Replace with your actual background image asset path
        backgroundImage: `linear-gradient(to right, rgba(30, 64, 175, 0.6), rgba(15, 23, 42, 0.7)), url('/images/banner-bg.webp')` 
      }}
    >
      <Container className="relative z-10 flex justify-center items-center">
        {/* Centered Floating Resource Container Card */}
        <div className="w-full max-w-5xl bg-white shadow-xl border border-gray-100 px-6 py-12 md:px-16 md:py-14 text-center flex flex-col items-center justify-center">
          
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
          <button className="mt-8 bg-emerald-950 text-white font-medium text-xs tracking-wide uppercase px-8 py-3 rounded shadow-md hover:bg-emerald-900 transition-all duration-300 transform hover:-translate-y-0.5">
            Read more
          </button>
          
        </div>
      </Container>
    </section>
  );
}