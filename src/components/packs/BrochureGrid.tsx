import React from 'react';
import { FileText } from 'lucide-react';

export interface BrochureItem {
  title: string;
  pdfUrl: string;
}

export default function BrochureGrid({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading?: string;
  items: BrochureItem[];
}) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-7 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{heading}</h1>
        {subheading && <p className="text-gray-300 text-sm max-w-xl mx-auto">{subheading}</p>}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl border border-slate-100 shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow"
            >
              <FileText className="h-10 w-10 text-[#004d40] mb-4" />
              <h3 className="text-sm font-bold text-slate-800 mb-4">{item.title}</h3>
              <span className="mt-auto text-xs font-semibold text-white bg-[#004d40] group-hover:bg-[#00332a] transition-colors rounded px-4 py-2">
                BROCHURE
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
