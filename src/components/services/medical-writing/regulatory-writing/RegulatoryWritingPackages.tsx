'use client';

import React from 'react';

interface PackageCard {
  id: string;
  title: string;
  headerBg: string; // Tailored color theme for each card
  bodyBg: string;
  textColor: string;
  description: string;
  servicesTitle: string;
  services: string[];
  outcomesTitle: string;
  outcomes: string[];
}

const packagesData: PackageCard[] = [
  {
    id: 'pkg-1',
    title: 'Regulatory Dossier Writing',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#cfdedc]', // Sage / Teal gray
    textColor: 'text-[#2a4d47]',
    description: 'Complete writing and compilation of documents for global regulatory submissions.',
    servicesTitle: 'Services include:',
    services: [
      'Completed Common Technical Document (CTD), Modules 2–5',
      'IND, NDA, BLA & MAA, applications',
      'Investigational Medicinal Product Dossiers (IMPDs)',
      'Summary Documents – Clinical, Nonclinical, Quality',
      'Clinical Study Reports (CSR)',
    ],
    outcomesTitle: 'What you receive:',
    outcomes: [
      'Health authority compliant content (FDA, EMA, etc.)',
      'ICH guideline compliant',
      'Submission-ready documents (will work in eCTD format)',
    ],
  },
  {
    id: 'pkg-2',
    title: 'Clinical Trial Documents',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#e4d5e8]', // Soft Purple
    textColor: 'text-[#5a3a6b]',
    description: 'Specialized clinical trial writing support for all phases.',
    servicesTitle: 'Examples of clinical trial documentation I create:',
    services: [
      'Clinical trial protocols (Phase I–IV)',
      'Investigator brochures (IBs)',
      'Patient narratives and case listings',
      'Informed consent forms (ICFs)',
      'Clinical development plans (CDPs)',
    ],
    outcomesTitle: 'What you get:',
    outcomes: [
      'Scientifically sound and audit-ready documents',
      'Consistent with trial designs and regulatory expectations',
    ],
  },
  {
    id: 'pkg-3',
    title: 'Safety & Pharmacovigilance Writing',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#dec8a5]', // Warm Tan / Gold
    textColor: 'text-[#523d1d]',
    description: 'Thorough documentation for drug safety and risk mitigation throughout the product lifecycle.',
    servicesTitle: 'Our services include:',
    services: [
      'Risk Management Plans (RMPs)',
      'Development Safety Update Reports (DSURs)',
      'Periodic Safety Update Reports (PSURs)',
      'Adverse event summaries',
      'Benefit-risk evaluations',
    ],
    outcomesTitle: 'What you’ll receive:',
    outcomes: [
      'Compliance with GVP and ICH E2E guidelines',
      'Safety data integration from multiple sources',
      'Transparent and actionable documentation for regulators.',
    ],
  },
  {
    id: 'pkg-4',
    title: 'Regulatory Writing for Medical Devices',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#f7aa79]', // Coral / Orange
    textColor: 'text-[#612807]',
    description: 'Regulatory writing provides support to clients with their device submissions according to international standards.',
    servicesTitle: 'Services we offer are:',
    services: [
      'Clinical Evaluation Reports (CER)',
      'Performance Evaluation Reports (PER)',
      'Technical documents for CE marking',
      'Post-market surveillance report',
    ],
    outcomesTitle: 'What you receive:',
    outcomes: [
      'Devices that are compliant with the MDR and FDA',
      'Support from domain experts in the device arena',
      'Document tailored to the risk class and type of device.',
    ],
  },
  {
    id: 'pkg-5',
    title: 'Health Authority Communication Support',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#98e2e1]', // Light Cyan / Aqua
    textColor: 'text-[#0d4f4e]',
    description: 'Expert development of documentation used to inform regulatory interactions and decisions.',
    servicesTitle: 'Our services include:',
    services: [
      'Briefing books and meeting packages (FDA, EMA, etc.)',
      'Questions and responses to health authority questions',
      'Rebuttal letters and appeal documentation',
      'Advisory meeting support documents',
    ],
    outcomesTitle: 'What you receive:',
    outcomes: [
      'Strategic placement of data and rationale',
      'Clear, concise, and persuasive content',
      'Alignment of your document with agency expectations',
    ],
  },
  {
    id: 'pkg-6',
    title: 'Labelling and Lifecycle Documentation',
    headerBg: 'bg-white',
    bodyBg: 'bg-[#f79494]', // Soft Red / Pink
    textColor: 'text-[#631515]',
    description: 'Continued regulatory writing support for marketed products and label changes.',
    servicesTitle: 'Services include:',
    services: [
      'Summary of Product Characteristics (SmPCs)',
      'Product Information Leaflets (PILs)',
      'Label changes and variations',
      'Review of promotional material for compliance',
    ],
    outcomesTitle: 'What’s Included',
    outcomes: [
      'Regional compliance (FDA, EMA, etc)',
      'Regulatory strategy and safety teams’ coordination',
      'Timeliness of updates for label changes and renewals',
    ],
  },
];

export default function RegulatoryWritingPackages() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 font-sans bg-[#f7faf9]">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-[#0B3C3D] mb-8">Our Packages</h2>

      {/* 6-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-t-lg overflow-hidden flex flex-col border border-gray-200/60 shadow-sm"
          >
            {/* White Header Top with Top Border Accent */}
            <div className="bg-white p-5 border-t-4 border-gray-400">
              <h3 className={`text-base font-bold ${pkg.textColor} leading-tight`}>
                {pkg.title}
              </h3>
            </div>

            {/* Colored Content Body */}
            <div className={`${pkg.bodyBg} ${pkg.textColor} p-5 flex-1 flex flex-col justify-between text-xs space-y-4`}>
              <p className="leading-relaxed opacity-90">{pkg.description}</p>

              {/* Services List */}
              <div>
                <p className="font-bold mb-1.5">{pkg.servicesTitle}</p>
                <ul className="space-y-1">
                  {pkg.services.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes List */}
              <div>
                <p className="font-bold mb-1.5">{pkg.outcomesTitle}</p>
                <ul className="space-y-1">
                  {pkg.outcomes.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM SECTION: Add-Ons & Call to Action */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-gray-700 pt-4 border-t border-gray-200">
        {/* Optional Add-Ons */}
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Optional Add-Ons (Regulatory Writing)</h4>
          <ul className="space-y-1.5">
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Regulatory Gap Analysis</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Submission Portal Support (eCTD upload, FDA / EMA portals)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Health Authority Query / Response Writing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Document QC & Medical Editing</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Custom Templates (per agency or sponsor requirements)</span>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Call to Action</h4>
          <ul className="space-y-1.5">
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Need help choosing a package? [Talk to a Specialist]</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Ready to begin? [Upload Your Project]</span>
            </li>
            <li className="flex items-start">
              <span className="mr-1.5">•</span>
              <span>Want a custom quote? [Request a Proposal]</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}