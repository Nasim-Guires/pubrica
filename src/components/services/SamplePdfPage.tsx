import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

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

export default function SamplePdfPage({
  eyebrow,
  title,
  intro,
  pdfUrl,
  pdfLabel,
  servicesHref,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  pdfUrl: string;
  pdfLabel: string;
  servicesHref: string;
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{eyebrow}</p>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight max-w-3xl mx-auto">{title}</h1>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed mb-6">{intro}</p>

            <div className="rounded-lg overflow-hidden border border-slate-200">
              <div className="flex items-center justify-between bg-slate-50 border-b border-slate-200 px-4 py-2">
                <span className="text-xs font-medium text-slate-600">📄 {pdfLabel}</span>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#004d40] underline hover:text-[#00332a]"
                >
                  Open in new tab
                </a>
              </div>
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                title={pdfLabel}
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
              <Link href={servicesHref} className="mt-5 inline-block text-xs font-semibold text-[#004d40] hover:underline">
                Find More About Our Services &rarr;
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
