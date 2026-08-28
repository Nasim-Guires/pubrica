import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Partner Program - Pubrica',
  description: 'Publishers, universities, and research groups can get special discounts on all end-to-end editorial and journal publication services. Partner with Pubrica.',
};

const CATEGORIES = [
  {
    title: 'Scientific',
    description:
      'Pubrica scientific publishing services guide researchers through the scientific writing process; we work with researchers, doctors, and physicians in various scientific disciplines. Subject-matter experts stand by to answer your research writing queries. While researchers focus on their core function, we help them in crafting, editing, and reviewing the paper.',
  },
  {
    title: 'Academia',
    description:
      'Pubrica scholarly publishing assists universities on multifarious subjects; we work with students across various universities and colleges across the US, EU, and Asia. We collaborate with universities to support students in their dissertation journey. Our university guides are available 24/7 to lead students in every phase of writing projects.',
  },
  {
    title: 'Publishing',
    description:
      'Pubrica publishing offerings lead seasoned and newbie writers to publish their paper in a journal. Our editors (across multiple disciplines) guide writers on how to write and publish papers in high-impact factor (IF) journals and steer clear of rejection. Our guidance makes the publishing lifecycle easier; work with us to publish your paper.',
  },
];

const PARTNER_LOGOS = [
  { alt: 'Sage', src: 'https://pubrica.com/wp-content/uploads/2024/05/sage-logo-2-1.webp' },
  { alt: 'Applied Ecology', src: 'https://pubrica.com/wp-content/uploads/2024/05/apllied-ecology-logo-2.webp' },
  { alt: 'Frost & Sullivan', src: 'https://pubrica.com/wp-content/uploads/2024/05/frost-sullivan-2.webp' },
];

export default function GlobalPartnerProgramPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-7 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Global Partner Program</h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Publishers, universities, research groups can get special discounts on all end-to-end editorial and journal publication services. Partner with us.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-3">{cat.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-8">Partnerships and affiliations</h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {PARTNER_LOGOS.map((logo) => (
            <div key={logo.alt} className="relative h-10 w-32">
              <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
