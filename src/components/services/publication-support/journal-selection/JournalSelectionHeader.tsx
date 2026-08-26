'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Link from 'next/link';
import React from 'react';

export default function JournalSelectionHeader() {
  return (
    <div className="w-full bg-white text-slate-800 font-sans">

      {/* ---------------------------------------------------- */}
      {/* SECTION 1: TOP BANNER (DARK HERO BOX)              */}
      {/* ---------------------------------------------------- */}
      <HeroBanner
        title="Journal Selection Service"
        description="About 20% of manuscript rejections occur due to scope mismatch with the journal. Our expert will review your research and suggest 3–5 journals that best fit your publication goals."
        headingAs="h1"
      />

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
          <GetFreeQuoteButton />
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
          <a href="/insights/incidence-cardiovascular-diseases-india-global" className="text-cyan-600 ">
            journal selection
          </a>{' '}
          service can help ensure your research is delivered to the target audience with clarity, compliance, and credibility, while maximizing publication potential.
        </p>

        <p className="text-xs sm:text-sm leading-relaxed">
          Selecting the right journal in today’s competitive research environment is critical. Researchers, pharma teams, and medical device firms often need to{' '}
          <a href="/services/publication-support/" className="text-cyan-600 hover:underline">
            submit a manuscript for publication
          </a>
          :
        </p>

        {/* Bullet Points */}
        <ul className="list-disc pl-6 text-xs sm:text-sm space-y-2 text-slate-800">
          <li>Align their manuscript with the appropriate journal scopes</li>
          <li>
            Comply with ethical publication standards (
            <a href="/services/publication-support/journal-selection/understanding-cope-publication-ethics" className="text-cyan-600 ">
              COPE
            </a>
            , <Link href="/services/publication-support/poster-preparation/scientific-poster-design-presentation/" className="text-cyan-600">ICMJE</Link>, GPP)
          </li>
          <li>
            Avoid the risk of{' '}
            <a href="/services/publication-support/journal-selection/journal-rejection-key-reasons-tips-for-improving-manuscripts/" className="text-cyan-600 hover:underline">
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
          <a href="/academy/journals-templates/journals-high-impact-springer-medical-journal" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          for your research paper. You can depend on our devoted team of specialists to help guide you through the elaborate process of{' '}
          <a href="/insights/journal-selection-cervical-spondylosis-mechanical-neck-pain" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          and offer continuous support to assist your manuscript in complying with the highest standards of your intended publication.
        </p>

        <p className="text-xs sm:text-sm leading-relaxed">
          Selecting a journal plays a vital role in the success of your research publication. Pubrica provides professional{' '}
          <a href="/services/publication-support/journal-selection/ckd-journal-selection-review" className="text-cyan-600 hover:underline">
            journal selection
          </a>{' '}
          services that will set up your{' '}
          <a href="/academy/journal-selection/how-to-identify-best-journal-for-manuscript-submission" className="text-cyan-600 hover:underline">
            manuscript’s submission
          </a>{' '}
          to the most relevant,{' '}
          <a href="/services/publication-support/journal-selection/high-impact-academic-journals-guide" className="text-cyan-600 hover:underline">
            high-impact academic journal
          </a>
          . Our team of experts improves the chances that your paper will be accepted and seen by aligning your research with the correct journal for its publication, ensuring your{' '}
          <a href="/academy/journal-selection/how-to-identify-best-journal-for-manuscript-submission" className="text-cyan-600 hover:underline">
            journal paper publication
          </a>{' '}
          is optimized.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mt-6 mb-10">
          <GetFreeQuoteButton />
          <button className="bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-md font-semibold transition-colors cursor-pointer inline-flex items-center justify-center select-none">
            View Brochure
          </button>
        </div>
      </section>

    </div>
  );
}