import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Ethics - Pubrica',
  description: 'Ethics – Pubrica ensures responsible, transparent, and compliant research and publication practices across all services.',
};

interface RuleRow {
  will: string;
  wont?: string;
}

function RuleTable({ willDo, wontDo }: { willDo: RuleRow[]; wontDo: string[] }) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
            <th className="p-2 border border-gray-300">PUBRICA will</th>
            <th className="p-2 border border-gray-300">PUBRICA will not</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {willDo.map((row, i) => (
            <tr key={i}>
              <td className="p-2 border border-gray-300">{row.will}</td>
              <td className="p-2 border border-gray-300">{wontDo[i] || ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EthicsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Ethics', href: '/ethics' }]} />

      <section className="bg-[#1b2e2b] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Ethical Principles Governing Pubrica</h1>
        </div>
      </section>

      <div className="bg-white py-16 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            At Pubrica, ethical practices are the cornerstone of our operations, spanning both our business and research domains. We steadfastly uphold ethical standards, safeguarding personal and professional integrity in all our services. Through stringent policies against unethical conduct, we are fervently committed to educating and championing ethical norms in research.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            PUBRICA does not submit papers or assert authorship on behalf of clients. Transparency regarding authorship is crucial. Services that conceal their involvement in writing or rewriting papers are deemed unethical and could jeopardize the paper&rsquo;s credibility and your reputation. PUBRICA&rsquo;s editors, focusing solely on language editing, do not qualify for authorship status as outlined by the International Committee of Medical Journal Editors (ICMJE). However, acknowledging PUBRICA&rsquo;s editing assistance in the acknowledgments section of your paper is encouraged.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Language Editing</h2>
          <RuleTable
            willDo={[
              { will: 'Conducting comprehensive language editing encompassing grammar, spelling, phrasing, diction, and articles.' },
              { will: 'Identifying inconsistencies and providing specialized expertise in the relevant field.' },
              { will: 'Offering recommendations for unclear sentences/grammar and adjusting spacing.' },
            ]}
            wontDo={[
              'Edit or revise any section of the paper.',
              'Undertake content review, address plagiarism, or interpret data.',
              'Manipulate the paper’s structure or word count, or engage in journal-specific copy editing.',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Translation Services</h2>
          <RuleTable
            willDo={[
              { will: 'Preserve the intended meaning of the author.' },
              { will: 'Review field-specific terminology for accuracy and clarity.' },
              { will: 'Ensure overall coherence while emphasizing grammar and phrasing.' },
              { will: 'Address unclear sentences or terms.' },
            ]}
            wontDo={[
              'Write or contribute content to the paper.',
              'Undertake content review, address plagiarism, or interpret data.',
              'Restructure the paper or manipulate word count.',
              'Assert authorship or submit papers on behalf of clients; accept manuscripts in draft form; implement journal-specific copy editing.',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Figures and Illustration Services</h2>
          <RuleTable
            willDo={[
              { will: 'Align figures with journal guidelines by adjusting file types, resolution, color space, font, scale, line weights, and layout.' },
              { will: 'Collaborate with authors to craft original artwork or animations based on paper data or models.' },
            ]}
            wontDo={[
              'Modify brightness, contrast, or color balance of images.',
              'Crop images, convert primary data into vector form, or increase picture resolution.',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Formatting</h2>
          <RuleTable
            willDo={[
              { will: 'Format manuscript layout, citations, and references in line with journal guidelines.' },
              { will: 'Rearrange citations and references as necessary.' },
              { will: 'Rectify inaccuracies in references based on published databases.' },
              { will: 'Identify uncited references or missing citations within the text.' },
            ]}
            wontDo={[
              'Add missing references or citations.',
              'Format ambiguous references.',
              'Complete documents such as authorship or conflict of interest forms.',
              '',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Data Analyses</h2>
          <RuleTable
            willDo={[
              { will: 'Analyse data based on the agreed Statistical Analyses Plan (SAP).' },
              { will: 'Formatting the tables and figures as per the manuscript guidelines.' },
              { will: 'Rectify inaccuracies in references based on published databases.' },
              { will: 'Identify uncited references or missing citations within the text.' },
            ]}
            wontDo={[
              'No additional analyses beyond the SAP agreement.',
              'Format ambiguous references.',
              'Complete documents such as authorship or conflict of interest forms.',
              '',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Data Extraction</h2>
          <RuleTable
            willDo={[
              { will: 'Tailor data extraction according to the agreed tables and variables, aligned with the specific objectives and outcomes of your project.' },
              { will: 'Comply with the International Council for Harmonisation of Technical Requirements for Registration of Pharmaceuticals for Human Use (ICH E9) guidelines.' },
              { will: 'Collaborate with authors to align the project’s objectives with the appropriate statistical tests, ensuring the data’s relevance and accuracy.' },
              { will: 'Assist in filling out essential documents, such as authorship declarations and conflict of interest forms, to maintain transparency and ethical standards.' },
            ]}
            wontDo={[
              'Extract data outside the agreed-upon tables and variables, which could lead to scope creep and data irrelevancy.',
              'Deviate from established guidelines and standards, particularly ICH E9.',
              'Operate in isolation without input or collaboration from the authors.',
              '',
            ]}
          />

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">Data Collection</h2>
          <RuleTable
            willDo={[
              { will: 'Conduct data collection strictly in accordance with the agreed-upon questionnaire, performance table, and variables.' },
              { will: 'Efficiently accommodate any additional objectives that may arise during the project, along with their corresponding variables.' },
              { will: 'Conduct a pilot study to refine survey methodology, in line with ethical clearance and best practices, where the project involves surveys.' },
              { will: 'Adhere to all ethical standards and guidelines, ensuring the data collection process is conducted with integrity and respect for participants.' },
              { will: 'Work closely with authors to ensure that data collection methods align with the project’s objectives and the chosen statistical tests.' },
              { will: 'Help complete necessary documents like authorship declarations or conflict of interest forms, to maintain transparency and ethical compliance.' },
            ]}
            wontDo={[
              'Collect data that is not in accordance with the pre-agreed questionnaire, performance table, or variables.',
              'Compromise ethical standards in any data collection practice.',
              'Make unilateral decisions without the involvement and collaboration of the authors.',
              '',
              '',
              '',
            ]}
          />
        </Container>
      </div>
    </>
  );
}
