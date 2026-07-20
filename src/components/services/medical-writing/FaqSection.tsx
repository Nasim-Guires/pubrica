'use client';

import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

const leftFaqs: FaqItem[] = [
  {
    id: 1,
    question: '1. What services do you offer under Medical Writing Services?',
    answer: (
      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <p>
          We offer medical writing services from beginning to end in six primary areas:
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Scientific & Academic Writing:</strong> Writing manuscripts, literature reviews, systematic reviews (PRISMA), meta-analyses, case reports, grant writing, and experimental designs.
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Regulatory Medical Writing:</strong> Writing protocols, CSRs, CTDs, CERs, IFUs, risk-benefit analyses, and post-market surveillance documents.
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Pharma & Biotech Content:</strong> Writing product dossiers, white papers, MSL slide decks, briefs for document updates, and investor documents.
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Medical Device & Digital Health Writing:</strong> Writing clinical evaluation reports (MDR/IVDR), SaMD documentation, validation summary documents, and software IFUs.
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Commercial & Patient Communication:</strong> Writing patient education documents, HCP brochures, medical marketing content, and digital content.
        </p>
        <p>
          <strong className="font-bold text-[#09322e]">Editorial & Quality Support:</strong> Medical editing, formatting, referencing, plagiarism checks, and journal submissions.
        </p>
        <p>
          Bonus Services include writing visual abstracts, scripting scientific animations, and data for AI validation documents and pitch decks.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    question: '2. What will I receive when I order a medical writing service?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        You will receive fully drafted, formatted, and peer-reviewed documentation ready for submission or publication, along with complete compliance checks and source referencing.
      </p>
    ),
  },
  {
    id: 3,
    question: '3. Do you offer different plans or service levels?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Yes, we offer multiple package levels ranging from essential editing and formatting to complete end-to-end manuscript and regulatory drafting packages (Packages A to F).
      </p>
    ),
  },
  {
    id: 4,
    question: '4. What information do I need to provide when placing an order?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        You will need to provide your primary target outcome, raw data or initial drafts (if available), preferred target journal or regulatory agency guidelines, and any specific deadline constraints.
      </p>
    ),
  },
  {
    id: 5,
    question: '5. What qualifications do your medical writers have?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Our medical writing team consists of PhD- and MD-level subject matter experts with extensive domain experience across oncology, cardiology, medical devices, digital health, and biotech.
      </p>
    ),
  },
  {
    id: 6,
    question: '6. What happens after I place an order?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Your project is assigned to a dedicated domain expert and project manager. We establish a clear milestone timeline, conduct drafting and quality control, and deliver submission-ready files with ongoing revision support.
      </p>
    ),
  },
];

const rightFaqs: FaqItem[] = [
  {
    id: 7,
    question: '7. What if I am not satisfied with the work? Do you offer revisions or refunds?',
    answer: (
      <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
        <p>We provide a satisfaction guarantee based on:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>On-time delivery</li>
          <li>Plagiarism-free, original work (typically &lt;5–10%)</li>
          <li>With all details consistent with the scope and brief</li>
          <li>Domain-expert assignment</li>
        </ol>
        <p>
          If any of these cannot be fulfilled, we revise or rework the content based on our revision policy. Refunds might be considered only when critical and agreed-upon service guarantees are unfulfilled, subject to the terms.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    question: '8. What guarantees do you provide?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        We guarantee 100% confidentiality, scientific accuracy, adherence to global regulatory guidelines (ICH-GCP, MDR/IVDR), and thorough plagiarism and quality verification.
      </p>
    ),
  },
  {
    id: 9,
    question: '9. Do you outsource writing or handle it in-house?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        All projects are handled by our trained, in-house team of qualified scientific and regulatory medical writers and subject matter experts to guarantee data security and quality control.
      </p>
    ),
  },
  {
    id: 10,
    question: '10. Do you follow ICH and GCP guidelines?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Yes, our team strictly adheres to ICH-GCP standards as well as CONSORT, PRISMA, and STROBE reporting frameworks across all relevant regulatory and clinical documents.
      </p>
    ),
  },
  {
    id: 11,
    question: '11. Are you familiar with MDR CER templates?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Yes, our regulatory writers are experienced in drafting Clinical Evaluation Reports (CER) aligned with EU MDR Annex XIV and MEDDEV 2.7/1 rev 4 requirements.
      </p>
    ),
  },
  {
    id: 12,
    question: '12. Do you sign NDAs?',
    answer: (
      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
        Yes, we sign strict Non-Disclosure Agreements (NDAs) prior to receiving any proprietary data or client information to ensure absolute confidentiality.
      </p>
    ),
  },
];

export default function FaqSection(): React.ReactElement {
  // Open items 1 and 7 by default as shown in the screenshot
  const [openItems, setOpenItems] = useState<number[]>([1, 7]);

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-white font-sans text-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Title Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#09322e]">
          Frequently Asked Questions
        </h2>

        {/* 2-Column Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column Accordion */}
          <div className="space-y-3">
            {leftFaqs.map((faq) => (
              <AccordionCard
                key={faq.id}
                item={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>

          {/* Right Column Accordion */}
          <div className="space-y-3">
            {rightFaqs.map((faq) => (
              <AccordionCard
                key={faq.id}
                item={faq}
                isOpen={openItems.includes(faq.id)}
                onToggle={() => toggleItem(faq.id)}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

// Sub-component for individual Accordion Cards
function AccordionCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-slate-200 rounded-sm overflow-hidden bg-white shadow-sm transition-all duration-200">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-sm sm:text-base text-[#09322e] leading-snug">
          {item.question}
        </span>
        <span className="text-slate-800 font-bold text-lg flex-shrink-0 ml-2">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="px-4 pb-5 pt-1 border-t border-slate-100">
          {item.answer}
        </div>
      )}
    </div>
  );
}