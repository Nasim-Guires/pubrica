import React from 'react';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'Privacy Policy - Pubrica',
  description: '2.1 Identity & Contact',
  slug: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      
      {/* Top Banner Section */}
      <section className="bg-[#1b2e2b] text-white py-7 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm md:text-base text-gray-300">100% data privacy</p>
        </div>
      </section>

      <div className="bg-white py-7 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            At Pubrica, we take data privacy and research confidentiality seriously. This policy outlines how we handle and protect personal information, draft manuscripts, clinical trial datasets, and other records.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            Document History & Revision
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
                  <th className="p-2 border border-gray-300">Version No.</th>
                  <th className="p-2 border border-gray-300">Effective Date</th>
                  <th className="p-2 border border-gray-300">Revision Details</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-2 border border-gray-300">Version 1</td>
                  <td className="p-2 border border-gray-300">6 July 2017</td>
                  <td className="p-2 border border-gray-300">Initial release</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Version 2</td>
                  <td className="p-2 border border-gray-300">5 December 2021</td>
                  <td className="p-2 border border-gray-300">Wording improvements; added DPO contact</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Version 3</td>
                  <td className="p-2 border border-gray-300">29 June 2024</td>
                  <td className="p-2 border border-gray-300">Wording improvements; structure updates</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Version 4</td>
                  <td className="p-2 border border-gray-300">15 September 2024</td>
                  <td className="p-2 border border-gray-300">Clarified purposes/grounds for processing</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300">Version 5</td>
                  <td className="p-2 border border-gray-300">7 November 2025</td>
                  <td className="p-2 border border-gray-300">Updated controller/jurisdiction, retention, international transfers, security, cookies, and rights</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            1) Who We Are & Scope
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>Controller: Pubrica – Guires Global Pvt. Ltd., 3rd Floor, 10 Kutty Street, Nungambakkam, Chennai 600 034, Tamil Nadu, India (&ldquo;Pubrica&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).</li>
            <li>This Policy governs personal-data processing across our websites (<strong>pubrica.com</strong> and sub-domains), secure client portals, emails, and professional <strong>services</strong>: editing, journal-publication support, research & analytics, algorithm and AI development, graphics, regulatory and compliance consulting, and allied advisory or educational content (collectively, &ldquo;Services&rdquo;).</li>
            <li>We operate as a professional services provider. Any &ldquo;portal&rdquo; references mean secure workspaces for file exchange and project execution.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            2) What Personal Data We Collect
          </h2>
          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.1 Identity & Contact</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Name, role, organization, email, phone, postal/billing address, country, preferred language, communication preferences.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.2 Project & Service Data (You Provide)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Manuscripts, figures, datasets, protocols, IRB/ethics materials, reviewer letters, journal correspondence, briefs for graphics, statistical specs, code/algorithms, regulatory dossiers, references, and any content needed to deliver Services.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.3 Transaction & Technical</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Invoices, GST/VAT, payment references (card processing via PCI-compliant providers), portal access logs, IP, device/browser, cookies/analytics identifiers, usage metadata.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.4 Sensitive Categories (Limited; Consent-Based)</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            We do not intentionally collect special categories unless necessary for your project and you provide them explicitly (e.g., de-identified clinical tables for meta-analysis). Payment cards are handled by gateways; we do not store full card numbers.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.5 Children</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Services are for adults <strong>18+</strong>. We do not knowingly collect children&apos;s data.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            3) Why & How We Use Your Data (Purposes & Legal Bases)
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
                  <th className="p-2 border border-gray-300">Purpose</th>
                  <th className="p-2 border border-gray-300">Examples</th>
                  <th className="p-2 border border-gray-300">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Service delivery</td>
                  <td className="p-2 border border-gray-300">Editing, analytics, graphics, submission handling, regulatory compiles, advisory</td>
                  <td className="p-2 border border-gray-300">Contract necessity</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Client communication</td>
                  <td className="p-2 border border-gray-300">Quotes, SoW, updates, invoices, support</td>
                  <td className="p-2 border border-gray-300">Contract / Legitimate interest</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Quality & training</td>
                  <td className="p-2 border border-gray-300">Internal peer review, QA, process improvement, audits</td>
                  <td className="p-2 border border-gray-300">Legitimate interest</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Security & integrity</td>
                  <td className="p-2 border border-gray-300">Access control, logs, fraud prevention, incident response</td>
                  <td className="p-2 border border-gray-300">Legitimate interest / Legal obligation</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Compliance & records</td>
                  <td className="p-2 border border-gray-300">Tax, accounting, statutory retention, responding to lawful requests</td>
                  <td className="p-2 border border-gray-300">Legal obligation</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Marketing (optional)</td>
                  <td className="p-2 border border-gray-300">Newsletters, webinars, product updates</td>
                  <td className="p-2 border border-gray-300">Consent (opt-in)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We do not sell personal information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            4) Processor vs Controller
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We act as Controller when dealing directly with clients, and as Processor when working under another organization&apos;s written instructions. All sub-processors are bound by equivalent confidentiality and data-protection obligations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            5) Sharing & Disclosures
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">We may share data on a need-to-know basis with:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>Internal teams and vetted subcontractors (editors, statisticians, designers, SMEs) under NDA/DPA.</li>
            <li>Service providers (secure cloud/file transfer, reference tools, plagiarism/AI checks, analytics, communications, payment gateways).</li>
            <li>Journals/conferences/registries only when you instruct us to submit.</li>
            <li>Authorities/courts where required by law or to protect our rights, users, or systems.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            No sale or rental of personal information.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            6) International Transfers
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Data may be processed in India and other countries where our experts or providers operate. We use reasonable safeguards (e.g., standard contractual clauses or equivalent contractual protections) for cross-border transfers. By using our websites or Services, you consent to such cross-border transfers as necessary for project delivery and support.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            7) Security
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We apply administrative, technical, and physical controls aligned with ISO 9001/ISO 27001 practices (role-based access, minimum necessary, encryption in transit/at rest where applicable, logging, vetting, confidentiality contracts, secure disposal). No method is 100% secure; we continuously improve controls.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            8) Retention
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>Project files and communications: typically <strong>12–24 months</strong> after project closure (or longer if required by law/contract/MSA).</li>
            <li>Finance/tax records: per applicable statutes.</li>
            <li>After retention, we <strong>delete or anonymize</strong>. You may request earlier deletion where legally permissible; this may affect our ability to support post-project queries.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Retention decisions consider: (a) purpose of use, (b) legal obligations, (c) contractual necessity, (d) value of the data to you and us, (e) security and cost risk, and (f) industry practice.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            9) Cookies & Similar Technologies
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We use essential cookies (operation/security) and analytics cookies (performance/usage). Manage preferences in your browser or via our banner (where available). Interest-based ads (if used) rely on reputable networks; opt-out tools may limit targeting but not generic ads.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            10) Your Rights
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Subject to applicable laws (e.g., GDPR/UK GDPR where relevant), you may request:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>Access, correction, deletion</li>
            <li>Restriction or objection to processing</li>
            <li>Portability</li>
            <li>Withdraw consent (for marketing or other consent-based uses)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We&apos;ll respond within a reasonable time. Some requests may affect Service delivery or legal obligations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            11) Data Breach Response
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            On becoming aware of a personal-data incident, we will investigate, contain, and notify affected clients and, where required, regulators without undue delay and take reasonable remedial steps.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            12) Testimonials & Portfolios
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We publish testimonials only with prior consent. We may request permission to reference anonymized project learnings. We will not disclose confidential content or identifiers without written approval.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            13) Social Media, External Links, and Third-Party Tools
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Our websites may link to third-party sites or include widgets (Facebook, LinkedIn, Twitter, etc.). Interactions are governed by those parties&apos; privacy policies. We are not responsible for external content.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            14) Email, Anti-Spam & Messaging
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>Marketing emails are opt-in and include unsubscribe links.</li>
            <li>Transactional/operational emails (project updates, invoices, security notices) are necessary.</li>
            <li>Our Acceptable Use Policy prohibits unsolicited or unlawful messaging via our systems.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            15) Payments & PCI
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Online payments are processed by PCI-compliant payment gateways. We do not store full card numbers. SSL/TLS is used for data in transit.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            16) Your Responsibilities
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            You confirm any data you submit is accurate and that you have lawful rights to share it with us (including third-party data where applicable). Do not submit more personal data than is necessary for the Services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            17) Corporate Events
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            If Pubrica undergoes a reorganization, merger, acquisition, or asset transfer, your data may be part of the transferred assets. We will notify you of material changes in ownership/control impacting this Policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            18) Policy Updates
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We may update this Policy for legal, technical, or operational reasons. Material changes will be notified by email or portal notice, with the effective date shown at the top.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">
            19) Contact & Regional Addresses
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-2 font-semibold">Controller & Primary Contact (India HQ)</p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica – Guires Global Pvt. Ltd.<br />
            3rd Floor, 10 Kutty Street, Nungambakkam, Chennai 600 034, Tamil Nadu, India<br />
            📧 privacy@pubrica.com | 💼 ops: operations@pubrica.com | 💳 accounts: accounts@pubrica.com<br />
            📞 +91-44-4212-4284
          </p>

          <p className="text-gray-600 leading-relaxed text-sm mb-2 font-semibold">Regional Correspondence</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
            <li>United Kingdom: Greenheys Business Centre, Pencroft Way, Manchester M15 6JJ, UK</li>
            <li>United States: 1341 W Mockingbird Lane, Suite 600W, Dallas, TX 75247, USA</li>
            <li>United Kingdom (Sheffield): The Portergate, Ecclesall Road, Sheffield S11 8NX, UK</li>
          </ul>

          <p className="text-gray-600 leading-relaxed text-sm mb-2 font-semibold">Data Protection Officer (DPO)</p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Name: Mr. Suresh<br />
            Email: sureshkumar@pubrica.com
          </p>
        </Container>
      </div>
    </>
  );
}