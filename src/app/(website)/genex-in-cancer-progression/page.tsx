import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gene X in Cancer Progression: Revised Manuscript Ready for Publication - Pubrica',
  description:
    'A sample editorial-comments response addressing reviewer feedback on "The Role of Gene X in Cancer Progression."',
};

const PDF_URL = 'https://pubrica.com/wp-content/uploads/2024/05/Editorial-Comments-Addressal-Sample.pdf';

const INCLUDES = [
  'On-time delivery or your money back',
  'A fully qualified writer in your subject',
  'In-depth proofreading by our Quality Control Team',
  '100% confidentiality, the work is never re-sold or published',
  'Standard 7-day amendment period',
  'A paper written to the standard ordered',
  'A detailed plagiarism report',
  'A comprehensive quality report',
];

export default function GenexInCancerProgressionPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight max-w-3xl mx-auto">
          Gene X in Cancer Progression: Revised Manuscript Ready for Publication
        </h1>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              This sample response addresses editorial comments on a manuscript titled &ldquo;The Role of Gene X in Cancer Progression.&rdquo; The author, Marry Anne, expresses gratitude for the thorough review and constructive feedback from reviewers. The response includes specific actions taken to address major comments, such as providing a rationale for the control group selection, revising a figure for clarity, and expanding the discussion to include a comparison with previous studies. Marry Anne concludes by expressing hope that the revisions have strengthened the manuscript and requests feedback on the next steps in the review process.
            </p>

            <div className="rounded-lg overflow-hidden border border-slate-200">
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-2">
                <span className="text-xs font-medium text-slate-600">📄 Editorial Comments Addressal Sample</span>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#004d40] underline hover:text-[#00332a]"
                >
                  Open in new tab
                </a>
              </div>
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(PDF_URL)}&embedded=true`}
                title="Editorial Comments Addressal Sample"
                className="w-full h-[600px] border-0"
              />
            </div>
          </main>

          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
              <h4 className="text-sm font-bold text-slate-900 mb-4">Research your services with our experts</h4>
              <Link
                href="/order-now"
                className="inline-flex items-center justify-center w-full bg-[#004d40] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#00332a] transition-colors mb-3"
              >
                Order Now
              </Link>
              <p className="text-xs text-slate-500">Delivered on-time or your money back</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-1">Give yourself the academic edge today</h4>
              <p className="text-xs text-slate-500 mb-4">Each order includes</p>
              <ul className="space-y-2.5">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-[#004d40] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/physician-writing-services/case-report"
                className="mt-5 inline-block text-xs font-semibold text-[#004d40] hover:underline"
              >
                Find More About Our Services &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
