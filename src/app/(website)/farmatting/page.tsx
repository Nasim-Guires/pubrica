import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Clinical Trial Audit and Monitoring Services - Pubrica',
  description: 'Good Clinical Practice (GCP) guaranteed — risk-based clinical trial monitoring services from Pubrica.',
};

const SOLUTIONS = [
  'Site selection and feasibility',
  'Development of recruitment criteria (inclusion and exclusion) with proper consent',
  'Managing patient recruitment',
  'Quality assurance mechanisms',
  'GCP training and motivational visits',
  'Communication with sites',
  'Customizable training based on the requirements',
  'Initiation, interim monitoring, and study closure visits',
  'Managing of local ethics review process',
  'Study-specific training to site personnel',
];

export default function ClinicalTrialAuditPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-7 px-4 text-center">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Clinical Trial Audit and Monitoring Services</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Good Clinical Practice (GCP) Guaranteed</h1>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-14">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Our highly trained clinical research associates (CRAs) ensure integrity of study and commitment to excellence &mdash; on par with ICH &amp; GCP standards. Efficient monitoring of clinical sites from site qualification to report generation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Pubrica offers risk-based high-quality services in clinical trial monitoring to ensure scientific excellence and data integrity across operational centres and regional hubs. Our in-house project management and operations team travel across the globe to support project teams through our local knowledge of the regulatory environment. Our clinical research team members are acquainted with local laws, regulations and guidelines.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We offer remote monitoring solutions to our customers, which reduce the frequency of on-site visits and enhance data quality. Our experts ensure perfect coordination among clinical research associates, project managers, sponsors, and other clinical trial site members.
            </p>
          </div>
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="https://pubrica.com/wp-content/uploads/2024/04/book-bookcase-books-1106468-1-1024x684.jpg"
              alt="Clinical trial monitoring"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Comprehensive Clinical Trial Monitoring Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOLUTIONS.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-[#004d40] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
