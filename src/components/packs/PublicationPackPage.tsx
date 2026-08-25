import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

const BUNDLED_SERVICES = [
  { name: 'Premium Editing (unlimited round of re-editing for 365 days)*', worth: '$510*' },
  { name: 'Journal Selection', worth: '$149' },
  { name: 'Journal Submission', worth: '$149' },
  { name: 'Artwork Formatting', worth: '$80' },
  { name: 'Plagiarism Check (unlimited rounds for 12 months)', worth: '$110' },
];

const SERVICE_DETAILS = [
  {
    name: 'Journal Submission',
    price: '$149',
    description:
      "Pubrica's team of experts provides comprehensive assistance to ensure your manuscript is submission-ready, guiding you through every step of the process.",
  },
  {
    name: 'Journal Selection',
    price: '$149',
    description:
      "Pubrica's experts thoroughly review your manuscript and suggest the top 3 to 5 journals that best fit its content and scope.",
  },
  {
    name: 'Artwork Formatting',
    price: '$149',
    description:
      "Pubrica's graphic design specialists possess a deep understanding of technical artwork guidelines, enabling them to accurately modify intricate figures while enhancing aesthetics.",
  },
  {
    name: 'Plagiarism Check (unlimited rounds for 12 months)',
    price: '$149',
    description:
      "Pubrica's plagiarism check assists in identifying sections of your manuscript that could potentially be flagged by journals for unintentional plagiarism.",
  },
  {
    name: 'Premium Editing (unlimited round of re-editing for 365 days)*',
    price: '$149',
    description:
      "Enhance the language, structure, and flow of your manuscript with Pubrica's unlimited re-editing and reformatting support tailored for submission to multiple journals.",
  },
];

const FAQS = [
  {
    q: 'What services do you offer under Journal Submission Services?',
    a: "We provide a wide variety of services such as Formatting, Author's registration, Technical Support, Uploading the Submission, Approving Submission.",
  },
  {
    q: 'What do you deliver while ordering the Journal Submission Services?',
    a: 'Delivery depends on the order type. Our academic experts would help you to submit your journal in a highly reputed and peer reviewed journal.',
  },
  {
    q: 'What are the different programs available under Journal Submission Services?',
    a: 'We develop a well-written scientific & academic research article, and use appropriate citations (e.g., Oxford, APA, and MLA) as necessary.',
  },
  {
    q: 'What information do I need to provide while placing an order for Journal Submission Services?',
    a: 'To choose the Journal Submission, we need a clear & precise domain area (e.g., Medical, Bio-medical, clinical research), area of interest, target country/state, a clear research proposal with 2-3 significant references, feasibility of data collection, university guidelines, and your qualification, specialization, university, country, experience, and supervisor capability.',
  },
  {
    q: 'What are the qualifications for the writers you employ?',
    a: 'Pubrica hires only experienced and certified professionals. All of our medical writers hold Master and PhD degrees and have at least five years of writing experience, each with their own specialization.',
  },
  {
    q: 'What are the procedures once I order for Journal Submission Services?',
    a: 'After confirming your order, work is assigned to a Project Associate who checks the order against requirements, then a specific subject expert after an NDA. The order is delivered after quality checks by the Quality Assurance Department and a plagiarism check.',
  },
  {
    q: 'If I am not satisfied with the work that you delivered, will you refund?',
    a: 'We promise: on-time delivery, plagiarism-free and unique content, an exact match with your requirements, and subject/domain experts for your project. Any deviation is compensated 100%; a fresh order is needed only when requirements were not precise.',
  },
];

export default function PublicationPackPage({ packName }: { packName: string }) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{packName}</h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Our {packName.toLowerCase()} bundles five publication support services to help you maximise your chances of getting published.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-lg font-bold text-slate-900 mb-6 text-center">5 services bundled in this pack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {BUNDLED_SERVICES.map((s) => (
            <div key={s.name} className="flex items-start justify-between gap-4 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
              <span className="text-sm text-slate-700">{s.name}</span>
              <span className="text-sm font-bold text-[#004d40] whitespace-nowrap">worth {s.worth}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-8 text-center max-w-md mx-auto mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-1">{packName}</h3>
          <p className="text-xs font-semibold text-slate-500 mb-1">TIME: 3 WEEKS</p>
          <p className="text-sm text-slate-600 mb-6">For authors looking for speedy support in preparing their manuscripts for submission.</p>
          <p className="text-xs text-slate-400 mb-1">Get 5 services worth</p>
          <p className="text-lg text-slate-400 line-through mb-1">$998</p>
          <p className="text-xs text-slate-400 mb-1">For only</p>
          <p className="text-4xl font-extrabold text-[#004d40] mb-4">$718</p>
          <p className="text-xs font-semibold text-emerald-700 mb-6">TOTAL SAVINGS: $280 &middot; 28% off</p>
          <Link
            href="/order-now"
            className="inline-flex items-center justify-center w-full bg-[#004d40] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#00332a] transition-colors"
          >
            Buy Now
          </Link>
        </div>

        <h2 className="text-lg font-bold text-slate-900 mb-2 text-center">Services available in this pack</h2>
        <p className="text-sm text-slate-500 text-center mb-8">Get basic publication support with this pack.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {SERVICE_DETAILS.map((s) => (
            <div key={s.name} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-sm font-bold text-slate-900">{s.name}</h4>
                <span className="text-sm font-bold text-[#004d40] whitespace-nowrap">{s.price}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed flex-grow">{s.description}</p>
              <span className="text-xs font-semibold text-[#004d40] mt-3">View Details &rarr;</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-16 text-center">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Avoid rejection from your target journal</h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto mb-2">
            Based on peer-reviewed studies and journal recommendations, here are the top reasons for rejection.
          </p>
          <p className="text-sm text-slate-500 mb-6">We have a solution for all of them.</p>
          <div className="flex items-start gap-3 max-w-md mx-auto text-left bg-slate-50 rounded-lg p-4">
            <CheckCircle2 className="h-5 w-5 text-[#004d40] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-slate-800">Mismatch between journal scope and paper</p>
              <p className="text-xs text-slate-500 mt-1">Our experts go through your manuscript and recommend the top 3 to 5 most suitable journals.</p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-4">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-white rounded-lg border border-slate-100 shadow-sm p-4 group">
              <summary className="text-sm font-semibold text-slate-800 cursor-pointer list-none flex items-center justify-between">
                {f.q}
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
