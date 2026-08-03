'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React from 'react';

export default function JournalSelectionHeader() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans">
      
      {/* ---------------------------------------------------- */}
      {/* SECTION 1: TOP BANNER (DARK HERO BOX)              */}
      {/* ---------------------------------------------------- */}
      <section className="w-full bg-[#0d2a2d] py-10 px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto border border-white/20 p-6 sm:p-8 rounded-sm bg-[#13363a]/40">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Journal Selection Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-2xl mx-auto">
            About 20% of manuscript rejections occur due to scope mismatch with the journal. Our expert will review your research and suggest 3–5 journals that best fit your publication goals.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2: RECOMMENDATIONS BANNER & CTA              */}
      {/* ---------------------------------------------------- */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 text-center bg-white space-y-4">
        <div className="max-w-3xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0d3b44]">
            More than 1 Million Researchers are Already Using Pubrica’s Recommendations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our free Recommendations service uses machine learning and your online activity to suggest research tailored to your needs
          </p>
        </div>

        <div>
          <button className="px-6 py-2.5 bg-[#a80000] hover:bg-[#830000] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors shadow-sm">
            Request a Quote
          </button>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3: DETAILED SERVICE OVERVIEW                 */}
      {/* ---------------------------------------------------- */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6 text-slate-800">
        
        {/* Main Heading */}
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0d3b44] leading-snug">
          Journal Selection Services for Life Sciences, Pharma, and Research: Navigating Publication Success
        </h2>

        {/* Intro Paragraphs */}
        <p className="text-xs sm:text-sm leading-relaxed">
          Our expert{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          service can help ensure your research is delivered to the target audience with clarity, compliance, and credibility, while maximizing publication potential.
        </p>

        <p className="text-xs sm:text-sm leading-relaxed">
          Selecting the right journal in today’s competitive research environment is critical. Researchers, pharma teams, and medical device firms often need to{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            submit a manuscript for publication
          </a>
          :
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-6 text-xs sm:text-sm space-y-2 text-slate-800">
          <li>Align their manuscript with the appropriate journal scopes</li>
          <li>
            Comply with ethical publication standards (
            <a href="#" className="text-cyan-600 hover:underline">
              COPE
            </a>
            , ICMJE, GPP)
          </li>
          <li>
            Avoid the risk of{' '}
            <a href="#" className="text-cyan-600 hover:underline">
              rejection
            </a>{' '}
            by accurately matching their work with their target journal
          </li>
          <li>Disseminate results in journals with high visibility and impact</li>
        </ul>

        {/* Body Paragraphs */}
        <p className="text-xs sm:text-sm leading-relaxed">
          Yet, many encounter difficulties due to evolving journal scopes, complex submission requirements, and limited insights into optimal journal choices.
        </p>

        <p className="text-xs sm:text-sm leading-relaxed">
          At Pubrica, we appreciate the enormous significance of the appropriate{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          for your research paper. You can depend on our devoted team of specialists to help guide you through the elaborate process of{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          and offer continuous support to assist your manuscript in complying with the highest standards of your intended publication.
        </p>

        <p className="text-xs sm:text-sm leading-relaxed">
          Selecting a journal plays a vital role in the success of your research publication. Pubrica provides professional{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          services that will set up your{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            manuscript’s submission
          </a>{' '}
          to the most relevant,{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            high-impact academic journal
          </a>
          . Our team of experts improves the chances that your paper will be accepted and seen by aligning your research with the correct journal for its publication, ensuring your{' '}
          <a href="#" className="text-cyan-600 hover:underline">
            journal paper publication
          </a>{' '}
          is optimized.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
         <GetFreeQuoteButton/>
          <button className="px-6 py-2.5 bg-[#a80000] hover:bg-[#830000] text-white font-bold text-xs sm:text-sm rounded-md transition-colors shadow-sm">
            View Brochure
          </button>
        </div>

      </section>

    </div>
  );
}