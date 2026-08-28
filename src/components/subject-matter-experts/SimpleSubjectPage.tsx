import React from 'react';
import Image from 'next/image';
import { renderInline } from '@/components/services/ServiceArticleRenderer';

interface ServiceExpertiseItem {
  title: string;
  description: string;
}

export default function SimpleSubjectPage({
  title,
  paragraphs,
  relatedSubjects,
  heroImage,
  servicesExpertise,
}: {
  title: string;
  paragraphs: string[];
  relatedSubjects?: string[];
  heroImage?: { src: string; alt: string };
  servicesExpertise?: ServiceExpertiseItem[];
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Subject Matter Experts</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {heroImage && (
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" priority />
          </div>
        )}

        <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm mb-10">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-sm text-slate-600 leading-relaxed mb-4 last:mb-0">
              {renderInline(p, `p${i}`)}
            </p>
          ))}
        </div>

        {relatedSubjects && relatedSubjects.length > 0 && (
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm mb-10">
            <h2 className="text-base font-bold text-slate-900 mb-4">Related Subjects</h2>
            <div className="flex flex-wrap gap-2">
              {relatedSubjects.map((s) => (
                <span key={s} className="text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}

        {servicesExpertise && servicesExpertise.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-1 text-center">
              Enhancing Your Scientific Impact from Data Collection to Publication
            </h2>
            <p className="text-sm text-slate-500 text-center max-w-2xl mx-auto mb-6">
              Pubrica offers comprehensive research services and publishing support across {title.toLowerCase()}. Our expertise spans:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {servicesExpertise.map((s) => (
                <div key={s.title} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
