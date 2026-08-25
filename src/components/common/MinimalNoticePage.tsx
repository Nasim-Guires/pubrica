import React from 'react';
import Link from 'next/link';

export default function MinimalNoticePage({
  title,
  tagline,
  body,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  tagline?: string;
  body?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="min-h-[60vh] bg-white">
      <section className="bg-[#1b2e2b] text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto border border-gray-600 p-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-3">{title}</h1>
          {tagline && <p className="text-sm md:text-base text-gray-300">{tagline}</p>}
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        {body && <p className="text-sm text-slate-600 leading-relaxed mb-8">{body}</p>}
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center bg-[#004d40] text-white font-semibold text-sm px-6 py-3 rounded-md hover:bg-[#00332a] transition-colors"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
