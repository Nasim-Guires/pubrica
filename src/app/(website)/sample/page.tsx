import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Pubrica',
  description: 'Specialized data analytics and machine learning services for healthcare research and decision-making.',
};

const SERVICES = [
  {
    title: 'Health Economics',
    href: '/services/data-analytics-machine-learning/health-economics-outcome-research',
    description: 'Specialized health economics services for informed decision-making and cost-effectiveness.',
  },
  {
    title: 'Patient Journey',
    href: '/services/data-analytics-machine-learning/patient-journey-insights-machine-learning',
    description: 'Patient journey and insights services to enhance healthcare outcomes and understanding.',
  },
  {
    title: 'Segmentation',
    href: '/services/data-analytics-machine-learning/customer-segmentation',
    description: 'Segmentation services for targeted healthcare strategies and improved patient outcomes.',
  },
  {
    title: 'Predictive Analysis',
    href: '/services/data-analytics-machine-learning/predictive-analytics',
    description: 'Advanced predictive analysis services for data-driven insights and informed decision-making.',
  },
  {
    title: 'Algorithm Development',
    href: '/services/data-analytics-machine-learning/algorithm-development-for-training-and-optimisation',
    description: 'Expert algorithm development services for cutting-edge solutions in healthcare and research.',
  },
  {
    title: 'Interpretation & Visualisation',
    href: '/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation',
    description: 'Interpretation & visualization services for clear, insightful data representation in research.',
  },
];

export default function SamplePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-24">
      <section className="bg-[#0b2825] text-white py-14 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Our Services</h1>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
