import React from 'react';
import type { Metadata } from 'next';
import GuideLayout from '@/components/guides/GuideLayout';

export const metadata: Metadata = {
  title: 'ICH Guidelines: The Complete Guide - Pubrica',
  description:
    'A complete guide to ICH Guidelines — what they are, why they matter, their four categories, and how they vary by region.',
};

const TOC = [
  { id: 'guidelines', label: 'What Are ICH Guidelines' },
  { id: 'guidelines-matter', label: 'Why ICH Guidelines Matter' },
  { id: 'categories', label: 'Categories of ICH Guidelines' },
  { id: 'region', label: 'ICH Guidelines by Region' },
  { id: 'conclusion', label: 'Concluding Thoughts' },
];

export default function IchGuidelinesPage() {
  return (
    <GuideLayout title="ICH Guidelines: The Complete Guide" eyebrow="An Academy Guide" toc={TOC}>
      <h2 id="guidelines" className="text-xl font-bold text-gray-900 mt-0 mb-4">What Are ICH Guidelines?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">
        The International Council for Harmonisation of Technical Requirements for Pharmaceuticals for Human Use (ICH) makes internationally accepted guidelines that create a foundation of agreement on safety, efficacy and quality of medicines within their diversity of regulatory requirements.
      </p>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">
        These guidelines systematically highlight opportunities to deliver medicines/safety to patients faster and reduce the unnecessary duplicate testing effort in regulatory and clinical processes. They ensure alignment of technical requirements, so pharmaceutical products are evaluated with an expected convergence of standards across key markets &mdash; the USA (FDA), Europe (EMA), Japan (PMDA), and other regions of the ICH community.
      </p>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        Ultimately, ICH Guidelines aim to harmonise global regulatory expectations, allowing companies to make available high quality, effective and safe medicines to patients faster while accelerating efficiencies in cost of development and regulatory procedures.
      </p>

      <h2 id="guidelines-matter" className="text-xl font-bold text-gray-900 mt-8 mb-4">Why ICH Guidelines Matter</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Pharmaceutical companies, regulators, and researchers rely on the ICH Guidelines to:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
        <li>Optimize the drug development process.</li>
        <li>Ensure compliance with global regulations.</li>
        <li>Limit unneeded animal and human testing.</li>
        <li>Ensure product safety and efficacy.</li>
      </ul>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        By utilizing ICH Guidelines, stakeholders at all levels can deliver safe and effective medicines to patients globally with more efficiency.
      </p>

      <h2 id="categories" className="text-xl font-bold text-gray-900 mt-8 mb-4">Categories of ICH Guidelines</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">ICH Guidelines are divided into four main categories:</p>

      <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">1. Quality Guidelines (Q Series)</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Covers &ldquo;stability studies,&rdquo; &ldquo;quality risk management,&rdquo; &ldquo;pharmaceutical development,&rdquo; and more. Popular guidelines:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
        <li>ICH Q8(R2): Pharmaceutical Development</li>
        <li>ICH Q9: Quality Risk Management</li>
        <li>ICH Q10: Pharmaceutical Quality System</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2. Safety Guidelines (S Series)</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Assesses the genotoxicity, carcinogenicity, and reproductive toxicity of drug substances and products. Important guidelines:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
        <li>ICH S1: Carcinogenicity Studies</li>
        <li>ICH S7A/B: Pharmacology Studies</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3. Effectiveness Guidelines (E Series)</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Focuses on the design, conduct, safety and reporting of clinical trials. Popular guidelines:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
        <li>ICH E6(R2): Good Clinical Practice (GCP)</li>
        <li>ICH E9: Statistical Principles for Clinical Trials</li>
        <li>ICH E17: Multi-Regional Clinical Trials</li>
      </ul>

      <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4. Multidisciplinary Guidelines (M Series)</h3>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Covers &ldquo;cross-cutting&rdquo; issues such as electronic standards, MedDRA, and pharmacovigilance. Examples include:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>ICH M4: Common Technical Document (CTD)</li>
        <li>ICH M2: Electronic Standards</li>
      </ul>

      <h2 id="region" className="text-xl font-bold text-gray-900 mt-8 mb-4">ICH Guidelines by Region</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">While ICH aims for global harmonization, slight regional differences in implementation will occur:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>United States (FDA)</li>
        <li>European Union (EMA)</li>
        <li>Japan (PMDA)</li>
        <li>Canada, China, Brazil, and other regions</li>
      </ul>

      <h2 id="conclusion" className="text-xl font-bold text-gray-900 mt-8 mb-4">Concluding Thoughts</h2>
      <p className="text-gray-600 leading-relaxed text-sm">
        ICH Guidelines are the bedrock of pharmaceutical regulation globally. If you are a researcher, regulatory affairs professional, or quality expert, understanding and applying ICH principles is imperative to your career success in the life sciences industry.
      </p>
    </GuideLayout>
  );
}
