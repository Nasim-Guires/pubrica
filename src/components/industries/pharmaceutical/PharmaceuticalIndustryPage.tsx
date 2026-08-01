import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pharmaceutical Industry Solutions & Compliance Services | Pubrica',
  description: 'Accelerating drug development, regulatory success, and scientific excellence across the pharmaceutical lifecycle with expert dossier preparation, pharmacovigilance, and data management.',
  alternates: {
    canonical: 'https://pubrica.com/industries/pharmaceutical/',
  },
};

export default function PharmaceuticalIndustryPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-emerald-950 to-emerald-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Empowering Pharmaceutical Innovations with Expertise and Compliance
          </h1>
          <p className="text-emerald-100 text-sm md:text-base font-light">
            Accelerating drug development, regulatory success, and scientific excellence across the pharmaceutical lifecycle.
          </p>
        </div>
      </header>

      {/* Main Content & Overview Section */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug">
              Enhancing Regulatory Compliance and Market Readiness of Pharmaceutical Products Through Expert Dossier Preparation, Pharmacovigilance, and Data Management Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
              The pharmaceutical industry is at the forefront of scientific innovation, transforming healthcare through the development of life-saving drugs, vaccines, and therapies. Navigating this highly regulated landscape requires expertise in clinical research, regulatory compliance, medical writing, and post-market surveillance to ensure that products are safe, effective, and meet global standards.
            </p>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
              To help meet these challenges, Pubrica provides a range of services to the pharmaceutical industry, across research and discovery, marketing materials, and regulatory compliance. These services aim to be able to help in all facets of pharmaceutical drug development from discovery to market and clinician adoption. This comprehensive approach supports the scientific rigor of pharmaceutical development and enhances the marketability of solutions that can have a significant impact on global health. Our pharmacologists, researchers, and marketing experts collaborate to support every stage of pharmaceutical development.
            </p>
            <a
              href="#quote"
              className="inline-block bg-red-700 hover:bg-red-800 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Image Section Placeholder */}
          <div className="flex justify-center">
            <div 
              className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-gray-100 shadow-lg flex items-center justify-center bg-gray-50 text-gray-400 text-center p-6"
              aria-label="Image Section: Researcher writing notes with medical equipment and medicine bottles"
            >
              <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">
                [Image Section: Researcher & Medical Equipment Placeholder]
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Expertise in the Pharmaceutical Industry Includes
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The pharmaceutical industry is a dynamic and highly regulated sector where precision, safety, and compliance are paramount. At Pubrica, we provide comprehensive solutions that support every stage of the pharmaceutical product lifecycle. From research and development to regulatory submissions and post-market management, our services are designed to ensure your products meet global standards while optimizing efficiency and patient safety.
          </p>
        </div>

        {/* Central Graphic with Surrounding Cards Layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column Cards */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Pharmacovigilance & Safety Monitoring</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                End-to-end pharmacovigilance services, including adverse event reporting, risk management, and ongoing safety surveillance to ensure patient safety and regulatory compliance.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Quality Assurance & Compliance</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Ensuring adherence to Good Manufacturing Practices (GMP), Good Clinical Practices (GCP), and other global quality standards.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Medical Writing & Scientific Communication</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Preparation of clinical study reports, research manuscripts, and regulatory documents with precision and clarity.
              </p>
            </div>
          </div>

          {/* Center Circular Image Section Placeholder */}
          <div className="flex justify-center my-6 md:my-0">
            <div 
              className="w-64 h-64 rounded-full border-4 border-white shadow-md flex items-center justify-center bg-gray-100 text-gray-400 text-center p-4"
              aria-label="Image Section: Laboratory scientist in white coat"
            >
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500">
                [Image Section: Lab Professional Placeholder]
              </span>
            </div>
          </div>

          {/* Right Column Cards */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Regulatory Affairs & Dossier Preparation</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Comprehensive support in preparing CTD dossiers, IND/NDA submissions, and regulatory documentation in line with global standards (FDA, EMA, ICH).
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Clinical Research Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                End-to-end support for clinical trials, from study design and protocol development to data analysis and reporting.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-red-700 text-sm mb-1">Market Access & Lifecycle Management</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Strategic support for product launch, post-marketing surveillance, and ongoing compliance throughout the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pharmaceutical Segments We Serve */}
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Pharmaceutical Segments We Serve
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Pubrica, we provide specialized support across a broad range of pharmaceutical segments, catering to diverse therapeutic areas and product types. Our expertise ensures compliance, efficiency, and scientific rigor at every stage of the product lifecycle.
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Innovative Pharmaceuticals</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Small molecules, biologics, and advanced therapies require rigorous regulatory and clinical compliance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Generic Drugs</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Support for regulatory submissions, bioequivalence studies, and market entry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Over-the-Counter (OTC) Products</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Guidance on regulatory compliance, labeling, and safety monitoring.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Vaccines & Biologics</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Expertise in clinical trials, pharmacovigilance, and regulatory dossier preparation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Specialty Medicines</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Orphan drugs, oncology treatments, and niche therapeutics with complex development paths.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Nutraceuticals & Dietary Supplements</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Regulatory guidance, quality assurance, and compliance documentation.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-sm text-gray-900 mb-2">Pharmaceutical Excipients & APIs</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Support in quality control, regulatory filings, and compliance documentation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}