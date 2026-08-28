import React from 'react';
import Link from 'next/link';

export interface TocItem {
  id: string;
  label: string;
}

const INTERESTING_TOPICS = [
  { label: 'Medical writing', href: '/services/research-services/medical-writing' },
  { label: 'Scientific writing', href: '/services/research-services/scientific-writing' },
  { label: 'Systematic Review Writing', href: '/services/research-services/systematic-review' },
  { label: 'Meta-Analysis', href: '/services/research-services/meta-analysis' },
  { label: 'Original Research Article Writing Service', href: '/services/physician-writing-services/original-research-article' },
  { label: 'Literature Review', href: '/services/research-services/literature-review-and-gap' },
  { label: 'Grant Writing Services', href: '/services/research-services/grant-writing' },
  { label: 'Biostatistical Programming', href: '/services/research-services/biostatistics-and-statistical-programming-services' },
  { label: 'Experimental Design', href: '/services/research-services/experimental-design' },
];

export default function GuideLayout({
  title,
  eyebrow,
  toc,
  children,
}: {
  title: string;
  eyebrow?: string;
  toc: TocItem[];
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 px-4 text-center">
        {eyebrow && <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{eyebrow}</p>}
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight max-w-4xl mx-auto">{title}</h1>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8 bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
            {children}
          </main>

          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Table of Contents</h4>
              <ul className="space-y-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-xs text-[#004d40] hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">Interesting Topics</h4>
              <ul className="space-y-2">
                {INTERESTING_TOPICS.map((topic) => (
                  <li key={topic.href}>
                    <Link href={topic.href} className="text-xs text-[#004d40] hover:underline">
                      {topic.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
