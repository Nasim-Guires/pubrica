import React from 'react';
import type { Metadata } from 'next';
import GuideLayout from '@/components/guides/GuideLayout';

export const metadata: Metadata = {
  title: 'Good Publication Practice (GPP) Guidelines - Pubrica',
  description:
    'Good Publication Practice (GPP) guidelines for transparent, accurate, and ethical medical and scientific publishing.',
};

const TOC = [
  { id: 'academic', label: 'What Are GPP Guidelines' },
  { id: 'cope', label: 'Main Goals of GPP' },
  { id: 'guidelines', label: 'Core Principles of GPP' },
  { id: 'cope-case', label: 'Benefits of Following GPP Guidelines' },
  { id: 'publishing', label: 'GPP-Compliant vs. Non-Compliant Writing' },
  { id: 'commitment', label: 'Who Should Follow GPP Guidelines' },
];

export default function GppGuidelinesPage() {
  return (
    <GuideLayout title="Good Publication Practice (GPP) Guidelines" eyebrow="An Academy Guide" toc={TOC}>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        Good Publication Practice (GPP) guidelines are accepted standards aimed at enhancing transparency, accuracy, and ethical rigor in medical and scientific publishing. GPP is particularly important in the pharmaceutical, biotech, and healthcare research industries, where research findings may directly influence patient care and medical policy.
      </p>

      <h2 id="academic" className="text-xl font-bold text-gray-900 mt-0 mb-4">What Are GPP Guidelines?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        GPP Guidelines (currently GPP 2022) were designed to support ethically responsible communication of industry-sponsored research. They provide a framework for responsible communication of study results, clarifying authorship, and complying with regulatory and journal standards.
      </p>

      <h2 id="cope" className="text-xl font-bold text-gray-900 mt-8 mb-4">Main Goals of GPP</h2>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>Promote moral authorship and contributor recognition.</li>
        <li>Ensure full, transparent disclosure of conflict of interest and funding sources.</li>
        <li>Promote clear, accurate, and complete data presentation.</li>
        <li>Prevent ghostwriting and plagiarism.</li>
        <li>Comply with global publication standards (ICMJE, CONSORT, COPE).</li>
      </ul>

      <h2 id="guidelines" className="text-xl font-bold text-gray-900 mt-8 mb-4">Core Principles of GPP</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-4">The following table highlights the core principles of GPP and what they mean in practice:</p>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
              <th className="p-2 border border-gray-300">Principle</th>
              <th className="p-2 border border-gray-300">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">Transparency</td>
              <td className="p-2 border border-gray-300">All contributors&rsquo; affiliations and funding should be disclosed.</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">Accountability</td>
              <td className="p-2 border border-gray-300">Only those who meet authorship requirements should appear as authors.</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">Integrity</td>
              <td className="p-2 border border-gray-300">Data must be accurately reported, both positive and negative results.</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">Compliance</td>
              <td className="p-2 border border-gray-300">Professional and regulatory standards, such as the ICMJE and GPP 2022, should be followed.</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300 font-semibold">Reproducibility</td>
              <td className="p-2 border border-gray-300">Adequate details should be included to facilitate replication.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="cope-case" className="text-xl font-bold text-gray-900 mt-8 mb-4">Benefits of Following GPP Guidelines</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">Following good publication practice in publishing makes it possible to:</p>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-8">
        <li>Increase acceptance for manuscripts.</li>
        <li>Remove the chance of ethical violations or retractions.</li>
        <li>Gain credibility with editors of journals and readers.</li>
        <li>Encourage collaboration and openness in authorship.</li>
        <li>Maintain compliance with regulators like the FDA, EMA, etc.</li>
      </ul>

      <h2 id="publishing" className="text-xl font-bold text-gray-900 mt-8 mb-4">GPP-Compliant vs. Non-Compliant Writing</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
              <th className="p-2 border border-gray-300">GPP-Compliant</th>
              <th className="p-2 border border-gray-300">Non-Compliant</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-2 border border-gray-300">Full author contribution disclosure</td>
              <td className="p-2 border border-gray-300">Ghostwritten or hidden contributors</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Transparent funding source and COI statements</td>
              <td className="p-2 border border-gray-300">Hidden details of conflict of interest</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Adherence to ICMJE and CONSORT standards</td>
              <td className="p-2 border border-gray-300">No standardization and/or ethical review</td>
            </tr>
            <tr>
              <td className="p-2 border border-gray-300">Reporting of true data in the correct manner</td>
              <td className="p-2 border border-gray-300">Selective conclusions, or part of the data hidden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="commitment" className="text-xl font-bold text-gray-900 mt-8 mb-4">Who Should Follow GPP Guidelines?</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">GPP guidelines are important for any and all scientific and medical publishing participants:</p>
      <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-4">
        <li><strong>Researchers &amp; Investigators:</strong> be ethical authors, fully report the research data, and provide credit to those who should be given credit.</li>
        <li><strong>Medical Writers &amp; Editors:</strong> be clear when writing support was provided, be transparent, and act within the guidelines set by journals.</li>
        <li><strong>Pharma &amp; biotech companies:</strong> encourage responsible reporting and avoid ethical or regulatory issues.</li>
        <li><strong>Clinical Research Organizations (CROs):</strong> ensure publication-ready content is based on truthful, verified study data.</li>
        <li><strong>Journal publishers &amp; peer reviewers:</strong> adhere to publication ethics, identify conflicts of interest, and ensure quality submissions.</li>
      </ul>
      <p className="text-gray-600 leading-relaxed text-sm mb-8">
        Adhering to GPP will rebuild trust, enhance transparency, and help improve the credibility of published research.
      </p>

      <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-2">
        Following Good Publication Practice (GPP) is not just a regulatory requirement &mdash; it is an ethical, responsible, and credible commitment to scientific communication.
      </p>
      <p className="text-gray-600 leading-relaxed text-sm">
        Regardless of whether you are developing a clinical trial manuscript, an abstract for a conference, or a systematic review, GPP will allow your academic work to be meaningful in science and society.
      </p>
    </GuideLayout>
  );
}
