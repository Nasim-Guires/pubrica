import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Panel - Pubrica',
  description: 'Native subject-matter experts guide you in every phase of the publication process.',
};

const HIGHLIGHTS = [
  'Our editorial panel consists of experts from all disciplines of science, engineering, fisheries, forestry, medicine, business, agriculture, art, culture, history, economics and politics, from all over the world.',
  'They are also full-time professionals, scientists and researchers at research institutes and universities.',
  'The editors have vast experience in publishing their research findings in peer-reviewed international journals. Some of them have published in journals with impact factors more than 20.0.',
  'The publications of some of our editors have appeared in the "Science Direct Top 25 articles" in their respective subject fields. They are also winners of many international scientific and research awards (e.g. NASA Technology Brief Award).',
  'Many of them are associated with scientific and academic journals as editors and peer-reviewers.',
  'We ensure that your work will be edited by an editor from top universities with the most relevant scientific background in your field of study.',
];

export default function EditorialPanelPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-7 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Editorial Panel</h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Native Subject-Matter Experts (SMEs) guide you in every phase of the publication process.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm mb-10">
          <p className="text-sm text-slate-600 leading-relaxed">
            Scientists, doctors, technocrats, researchers, and therapeutic practitioners are part of our editorial board. PhD, MPharm, MD, DSc, and MS &mdash; these are the qualifications of our editors; they are acquainted with all style guides (AMA, MLA, CMOS, APA, etc.) and journals&rsquo; requirements. Science, Technology, Engineering, and Medicine (STEM) &mdash; these are the fields we publish journals in; besides, they serve as full-time professionals in R&amp;D labs, universities and institutes. Pubrica Scientific Writing &amp; Publication&rsquo;s SMEs publish research findings in peer-reviewed journals, and this includes journals with impact factors more than 20.0 &mdash; NEJM, The Lancet, Annals of Internal Medicine, and JAMA, to name a few; our papers are also published in Science Direct Top 25 articles.
          </p>
        </div>

        <ul className="space-y-4">
          {HIGHLIGHTS.map((item) => (
            <li key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#004d40] flex-shrink-0" />
              <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
