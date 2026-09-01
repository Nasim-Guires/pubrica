import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ligand Identification - Pubrica',
  description:
    "Pubrica's Bioinformatics team supports identifying a specific disease and target selection, providing a summary and analysis of the relevant information in a given area.",
};

const SERVICES = [
  'Demonstrate your knowledge of the key ideas and concepts in your topic',
  'Evaluate previous research studies',
  'Assist you in believing that your field of study is worthwhile',
  'Describe your theoretical and practical framework in detail',
  'Examine prior study approaches to avoid making the same mistakes as earlier researchers',
];

const PROCESS_FLOW = [
  { step: 'Upload Your Manuscript', description: 'Provide your manuscript' },
  { step: 'Manuscript Plagiarism', description: 'Specialized software check for plagiarism & identify the percentage' },
  { step: 'Re-write', description: 'Will re-write similar/overlapping text of your manuscript to make it plagiarism free.' },
  { step: 'Language Style Check', description: 'Experts check for scientific language accuracy' },
  { step: 'Tracked Changes', description: 'Expert adds comments indicating needed revisions, such as word count restrictions' },
  { step: 'Publish Ready Manuscript', description: 'Receive your plagiarism-free manuscript' },
];

const FAQS = [
  {
    q: 'What is the standard procedure for Bioinformatics Research services?',
    a: 'Solve an issue with computational modeling. A bioinformatics solution frequently included in the following steps is: compile statistical information from biological data, generate a computational model, then a computing algorithm is sorely tested and evaluated.',
  },
  {
    q: 'What role does Bioinformatics play in scientific research?',
    a: 'Bioinformatics has benefited evolutionary study by allowing researchers to compare DNA sequences, exchange information, anticipate potential evolution, and classify complex evolutionary processes. Overall, bioinformatics has opened up a world of possibilities in genomics and targeted gene therapy.',
  },
  {
    q: 'How can I be assured that my research data is secure?',
    a: 'We make sure of the safety and protection of your data. We are enthusiastic about signing a non-disclosure agreement (NDA) if needed to ensure the security of your data.',
  },
  {
    q: 'What programs are used in Bioinformatics Research Services?',
    a: (
      <>
        Disease-specific research, topic selection, target identification, ligand discovery, cost-effectiveness research, and resource utilization have all been aspects we&rsquo;re researching into. Additional information can be found on our{' '}
        <Link href="/services/bioinformatics" className="text-blue-600 no-underline hover:no-underline">
          Bioinformatics services page
        </Link>
        .
      </>
    ),
  },
  {
    q: 'What are the main Bioinformatics Research areas?',
    a: 'The Bioinformatics pathway focuses on three study areas: computational biology and bioinformatics; genetics and genomics (often used interchangeably); and systems biology.',
  },
];

export default function LigandIdentificationPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-800 font-sans pb-10">
      <section className="bg-[#0b2825] text-white py-6 px-4 text-center">
        <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Bioinformatics &middot; Macromolecular Service</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Ligand Identification</h1>
        <p className="text-gray-300 text-sm max-w-2xl mx-auto">
          Pubrica&rsquo;s Bioinformatics team supports identifying a specific disease and target selection, providing a summary and analysis of the relevant information in a given area.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm mb-12">
          <p className="text-sm text-slate-600 leading-relaxed">
            Computational tools have been used in the drug designing process. The initial molecular modelling methodologies focused on a rigid depiction of the ligand-target binding process due to the small processing capabilities that were then available. The progression of hardware technology has made it possible to simulate the dynamic character of the critical event throughout time. We offer an overview of the advancement of structure-based drug discovery methodologies in investigating the ligand-target recognition phenomena, from inert molecular docking to improved molecular docking approaches. In the absence of 3D information about the receptor, ligand-based drug design depends on knowledge of compounds that bind to the biological target of interest. The most essential and extensively used techniques in ligand-based drug design are 3D quantitative structure-activity relationships (3D QSAR) and pharmacophore modelling. They can generate prediction models that can be used to identify and optimise leads.
          </p>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Our Bioinformatics Comprehensive Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {SERVICES.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
              <CheckCircle2 className="h-5 w-5 text-[#004d40] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-100 shadow-sm mb-14">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Pubrica Offerings</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Pubrica provides comprehensive bioinformatics research work publishing assistance for various publications, journals, and books. With our writing services, you can now turn your ideas into project writing, proposal writing, research writing, thesis writing and manuscript writing. Science, Technology, Engineering, and Mathematics (STEM) experts with a therapeutic background make it simple to publish a research work or obtain regulatory drug approval. With Pubrica&rsquo;s help, you can save time and money.
          </p>
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">Process Flow</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {PROCESS_FLOW.map((p, i) => (
            <div key={p.step} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <span className="text-xs font-bold text-[#004d40]">STEP {i + 1}</span>
              <h3 className="text-sm font-bold text-slate-900 mt-1 mb-2">{p.step}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-slate-900 mb-2 text-center">Frequently Asked Questions</h2>
        <p className="text-sm text-slate-500 text-center max-w-xl mx-auto mb-8">
          We are with you the whole nine yards. In this section, we answer the tough questions. For any information, contact us via +91 9884350006, meanwhile here are some of those queries.
        </p>
        <div className="space-y-4">
          {FAQS.map((f) => (
            <details key={f.q} className="bg-white rounded-lg border border-slate-100 shadow-sm p-4 group">
              <summary className="text-sm font-semibold text-slate-800 cursor-pointer list-none flex items-center justify-between">
                {f.q}
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
