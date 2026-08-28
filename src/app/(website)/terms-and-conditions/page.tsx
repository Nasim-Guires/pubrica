import React from 'react';
import type { Metadata } from 'next';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Pubrica',
  description: 'Terms and Conditions governing your use of the Pubrica website and our professional engagement with you.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Terms & Conditions', href: '/terms-and-conditions' }]} />

      <section className="bg-[#1b2e2b] text-white py-7 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms &amp; Conditions</h1>
        </div>
      </section>

      <div className="bg-white py-7 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <h2 className="text-xl font-bold text-gray-900 font-display mt-0 mb-4">Welcome to Pubrica</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Welcome to Pubrica &ndash; a global contract research, analytics, and editorial services organization. These Terms and Conditions outline the rules and regulations governing your use of our website and our professional engagement with you.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            By accessing or using this website and/or availing any of our services, you are deemed to have read, understood, and agreed to these Terms and Conditions in full. If you do not agree with any part of these terms, you must not continue to use the Pubrica website or our services.
          </p>
          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">Terminology</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">The following terminology applies to these Terms and Conditions, our Privacy Policy, and all related Agreements:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>&ldquo;Client,&rdquo; &ldquo;You,&rdquo; or &ldquo;Your&rdquo; refers to the individual or organization accessing this website and accepting these terms.</li>
            <li>&ldquo;The Company,&rdquo; &ldquo;Ourselves,&rdquo; &ldquo;We,&rdquo; &ldquo;Our,&rdquo; or &ldquo;Us&rdquo; refers to Pubrica, a brand operated by Guires Global Pvt. Ltd.</li>
            <li>&ldquo;Parties&rdquo; refers collectively to both the Client and Pubrica, and &ldquo;Party&rdquo; refers to either one of them.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">1. Services and Scope of Work</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica provides contract research, editorial, analytics, artificial intelligence, educational, regulatory, and development outsourcing and consulting services across a wide spectrum of scientific, industrial, and professional domains. Our activities support discovery, validation, compliance, and communication in research and innovation-oriented organizations worldwide.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">1.1 Industry Domains</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Pubrica&rsquo;s services extend to, but are not limited to, the following sectors:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
            <li>Life Sciences, Biomedical, and Healthcare Research</li>
            <li>Pharmaceuticals and Medical Devices (including clinical, pre-clinical, and real-world evidence studies)</li>
            <li>Food, Nutrition, and Nutraceutical Sciences</li>
            <li>Cosmetic and Personal Care Sciences</li>
            <li>Agriculture, Veterinary, and Environmental Sciences</li>
            <li>Data Science, Artificial Intelligence (AI), Machine Learning (ML), and Scientific Computing</li>
            <li>Regulatory Affairs, Legal Documentation, and Compliance Support</li>
            <li>Education, Training, and Knowledge Dissemination Services</li>
            <li>Impact Assessment, Sustainability, and Policy Research Services</li>
            <li>Digital Health, Informatics, and Technology Translation Projects</li>
            <li>Social Science, Behavioral Science, and Market Research Applications</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">1.2 Research and Professional Offerings</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Pubrica&rsquo;s offerings encompass the entire research, analytics (Data Science) and development lifecycle, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
            <li>Literature review, evidence synthesis, and systematic or meta-analytic research</li>
            <li>Primary and secondary data collection, survey design, and qualitative/quantitative analysis</li>
            <li>Statistical modeling, bioinformatics, machine-learning algorithm development, and predictive analytics</li>
            <li>Experimental design, protocol development, and validation support</li>
            <li>Manuscript writing, language editing, proofreading, formatting, and peer-review response support</li>
            <li>Journal submission, publication assistance, and post-acceptance publication management</li>
            <li>Graphical abstracts, figures, infographics, slide presentations, and scientific visual communication</li>
            <li>Research and technical consulting, project documentation, and scientific communication services</li>
            <li>Regulatory and legal documentation support, including clinical trial registration, product dossier preparation, and claims substantiation</li>
            <li>Educational content development, curriculum design, training manuals, e-learning modules, and academic course support</li>
            <li>AI-assisted research solutions, data automation tools, knowledge graph construction, and intelligent workflow integration</li>
            <li>Impact evaluation, sustainability reporting, and scientific policy advisory services</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">1.3 R&amp;D Nature and Scope Flexibility</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            As a research-driven and innovation-focused organization, Pubrica&rsquo;s services often involve iterative development and progressive refinement of concepts, methodologies, analyses, or communication materials. In such projects, outcomes are influenced by the evolving scientific evidence base, journal or reviewer requirements, data availability, and feasibility assessments performed during execution. Accordingly:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-4">
            <li>The Scope of Work (SoW) will be mutually defined at the initiation stage, outlining objectives, deliverables, and expectations based on the information and goals available at that time.</li>
            <li>During the course of the engagement, the scope may evolve or require revisions or reorientation, particularly in R&amp;D-based, analytical, or publication-oriented assignments, where new data, journal or regulatory feedback, or methodological refinements may warrant change.</li>
            <li>Pubrica will advise and document such changes transparently, and any substantial redirection, expansion, or repetition of work will be treated as a new or extended assignment, with appropriate timelines and cost implications mutually agreed upon.</li>
            <li>For standardized services&mdash;such as proofreading, copyediting, plagiarism checking, formatting, or translation&mdash;the scope remains fixed as defined in the approved quotation or work order.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            This dynamic and collaborative approach ensures that every project maintains scientific rigor, novelty, ethical integrity, and compliance with evolving journal, regulatory, and academic standards. While Pubrica commits to delivering work of the highest professional and technical quality, it is important to note that research and publication outcomes (e.g., journal acceptance, reviewer decisions, or impact factor achievements) are inherently influenced by external factors beyond Pubrica&rsquo;s control, including editorial discretion, reviewer perspectives, and changing journal criteria.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Therefore, Pubrica&rsquo;s responsibility is limited to ensuring that the work delivered is scientifically sound, methodologically appropriate, and aligned with best practices, not to guaranteeing any specific acceptance decision, publication timeline, or impact metric. This understanding forms an essential foundation of the engagement between Pubrica and the Client, ensuring clarity, fairness, and transparency throughout the research process.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">2. Engagement Model and Deliverables</h2>
          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.1 Quotation and Work Order</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Each project begins with a formal Quotation, Proposal, or Work Order issued by Pubrica, which defines:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
            <li>The Scope of Work (SoW) and objectives;</li>
            <li>The deliverables, format, and expected level of detail;</li>
            <li>The estimated timeline, milestones, and delivery schedule;</li>
            <li>The fee structure, payment schedule, and applicable taxes; and</li>
            <li>Any assumptions, limitations, or dependencies required for project execution.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Once the quotation or proposal is accepted in writing, by email, digital confirmation, or payment, it becomes a binding Service Agreement governed by these Terms and Conditions.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.2 Project Execution and Milestones</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            Pubrica follows a milestone-based engagement model appropriate to the project&rsquo;s complexity and research objectives. Depending on service type, the work may include one or more of the following stages:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-6">
            <li><strong>Inception Stage:</strong> Receipt of data, references, or source materials; clarification of scope and expected outcomes.</li>
            <li><strong>Development Stage:</strong> Iterative drafting, analysis, modeling, or editing based on agreed methodology.</li>
            <li><strong>Review Stage:</strong> Internal peer or QC review to ensure technical and editorial accuracy.</li>
            <li><strong>Client Review Stage:</strong> Submission of draft deliverables for your review, feedback, or approval.</li>
            <li><strong>Final Delivery Stage:</strong> Submission of approved deliverables in the agreed format(s).</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Editing Services</h4>
            <p className="text-gray-600 text-sm mb-2"><strong>Scope:</strong> Proofreading, Language/Copy Editing, Substantive Editing (per quotation/SoW). Inclusions: grammar, syntax, clarity, coherence, reference/style conformance (e.g., APA/AMA/Vancouver), journal formatting, light figure/table edits. Exclusions: de-novo research, data fabrication, ghostwriting, experimental design, statistical analysis, or journal communications (unless separately contracted).</p>
            <p className="text-gray-600 text-sm mb-2"><strong>Deliverables:</strong> Edited files returned in track-changes (Word) and clean copy; limited reference reformatting per package; style sheet on request. Turnaround per quotation; expedited fees may apply.</p>
            <p className="text-gray-600 text-sm mb-2"><strong>Revisions:</strong> One (1) or more rounds within 7&ndash;14 days of delivery, limited to the same manuscript and scope. Substantive additions or new journal guidelines constitute a new quote.</p>
            <p className="text-gray-600 text-sm mb-2"><strong>Fees:</strong> Advance payment unless otherwise agreed; fees are non-refundable once work commences; taxes and bank/FX/withholding charges are borne by the Customer.</p>
            <p className="text-gray-600 text-sm mb-0"><strong>Liability:</strong> Pubrica is not liable for indirect/consequential loss; aggregate liability is capped at the fees paid for the affected project. The Customer indemnifies Pubrica against claims arising from their content, data, permissions, or misuse.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Journal Publication Support</h4>
            <p className="text-gray-600 text-sm mb-2"><strong>Scope:</strong> Journal selection &amp; fit check; formatting; cover letter; submission support (on your behalf only with written authorization); response-to-reviewers drafting guidance; re-submission formatting; ethics &amp; policy checks (COPE/ICMJE). Excludes de-novo research, data manipulation, ghostwriting, guarantor roles, journal/APC fee payment, and legal representation.</p>
            <p className="text-gray-600 text-sm mb-2">The Corresponding Author retains full responsibility for scientific content, authorship order, disclosures, trial registrations, IRB/IEC approvals, clinical consent, and legal permissions. Editorial decisions are solely the journal&rsquo;s &mdash; there is no guarantee of acceptance, time-to-decision, impact factor, indexing, or APC waivers.</p>
            <p className="text-gray-600 text-sm mb-0">Zero tolerance applies for plagiarism, image/data manipulation, salami slicing, or undisclosed AI generation; Pubrica may refuse or withdraw service if ethical red flags arise. Includes one (1) response-to-reviewers cycle for the same journal round unless otherwise quoted.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Graphics &amp; Visuals (Figures, Schematics, Infographics)</h4>
            <p className="text-gray-600 text-sm mb-2"><strong>Scope:</strong> Scientific figures, schematics, graphical abstracts, posters, slide visuals, journal-spec figures, redraws, and minor illustrative enhancements. Excludes medical device labelling compliance, advertising claims substantiation, or animations unless quoted.</p>
            <p className="text-gray-600 text-sm mb-2">You confirm you own or have permission for all source content. Upon full payment, Pubrica grants a perpetual, worldwide, non-exclusive license to use the final graphics in the specified project. Up to two (2) revision rounds are included within 10 business days of first delivery.</p>
            <p className="text-gray-600 text-sm mb-0">Where required, please credit: &ldquo;Figure design support: Pubrica.&rdquo; No misleading visual manipulation; adherence to journal image integrity policies is required.</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-md p-5 mb-6">
            <h4 className="text-sm font-bold text-gray-900 mb-2">Research &amp; Analysis (Study Design, Stats, Data, Reviews)</h4>
            <p className="text-gray-600 text-sm mb-2"><strong>Scope:</strong> Study design consulting, protocol/statistical analysis plan (SAP), sample size/power, data cleaning, statistical analysis, modeling, visualization, and evidence syntheses (narrative reviews, scoping, systematic reviews &amp; meta-analyses per PRISMA/AMSTAR, if in scope). Excludes acting as PI/sponsor, human/animal experimentation, clinical site management, IRB/IEC approvals, data collection (unless separately contracted), or regulatory submissions (unless scoped).</p>
            <p className="text-gray-600 text-sm mb-2">You warrant lawful right to use and share data; no personal identifiers unless a valid data processing agreement is in place. Deliverables include the SAP/protocol (if applicable), analysis code (read-only unless otherwise agreed), output tables/figures, technical report, and reproducibility notes.</p>
            <p className="text-gray-600 text-sm mb-0">No guarantee of publication, regulatory acceptance, grant success, or commercial impact. Liability cap equals the fees paid for the affected project; no indirect/consequential damages.</p>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.3 Client Responsibilities</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">To facilitate timely and accurate delivery, the Client agrees to:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-4">
            <li>Provide complete, accurate, and timely information, data, and clarifications needed to execute the project;</li>
            <li>Designate a single point of contact for communication, feedback, and approvals;</li>
            <li>Review and respond to Pubrica&rsquo;s drafts or queries within the mutually agreed time frame; and</li>
            <li>Obtain any third-party permissions or ethical clearances necessary for the project.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Delays in communication, incomplete data, or new data submissions after initiation may result in revised timelines or additional costs, which will be discussed before continuation.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.4 Revisions and Change Requests</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Pubrica provides revisions within the scope defined in the Work Order. Minor revisions or clarifications (e.g., language corrections, format changes, minor figure edits) are included within the quoted cost if requested within the stipulated revision window (typically 7&ndash;14 days from delivery). Major revisions involving new data, changed journal or regulatory guidelines, re-analysis, or redirection of objectives will be treated as a change order and quoted separately. For R&amp;D or analytical projects, where new insights may emerge, Pubrica will advise the Client if additional iterations or analyses are scientifically warranted and obtain approval before proceeding.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.5 Delivery and Acceptance</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Draft and final deliverables will be submitted in electronic format (Word, PDF, Excel, PPT, JMP/SPSS output, or as specified). The Client shall acknowledge receipt and review deliverables within the agreed time frame. If no feedback or objections are received within five (5) business days of delivery (or the period stated in the Work Order), the deliverable shall be deemed accepted. Once accepted, Pubrica&rsquo;s obligations for that phase are complete, except for any post-delivery revisions covered under the agreement.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.6 Communication and Documentation</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            All project communications, clarifications, and document exchanges will occur through authorized Pubrica channels (official email, secure portal, or client dashboard). For regulatory, confidential, or high-sensitivity work, encrypted transfer methods will be used as mutually agreed.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.7 Commitment to Quality and Ethics</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">Pubrica maintains a multi-level Quality Assurance (QA) and Ethical Compliance process covering:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm mb-6">
            <li>Editorial accuracy and originality checks (plagiarism &le; 10% unless specified otherwise),</li>
            <li>Adherence to international reporting guidelines (ICMJE, CONSORT, PRISMA, STROBE, ARRIVE, etc.),</li>
            <li>Statistical and methodological validation, and</li>
            <li>Confidential data handling under ISO and GDPR-aligned procedures.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.8 Client-Driven Inputs and Responsibility</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            Pubrica works in a collaborative, research-oriented model, where ideas, data interpretations, and journal strategies may originate from either the Client or Pubrica. To maintain scientific integrity and accountability, the following terms apply:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li><strong>Client-Driven Direction:</strong> When the Client provides or insists on specific concepts, study designs, datasets, analyses, hypotheses, interpretations, or journal targets, Pubrica will execute such directions in good faith and on a best-effort basis. The Client retains full scientific and ethical responsibility for the direction, content accuracy, data authenticity, and outcomes resulting from such instructions.</li>
            <li><strong>Pubrica-Advised Direction:</strong> When Pubrica recommends research strategies, analysis methods, or journal selection, such advice is based on available information at the time of consultation and established best practices. Pubrica&rsquo;s responsibility is limited to ensuring methodological soundness, clarity, and compliance&mdash;not the eventual acceptance, citation impact, or reviewer agreement.</li>
            <li><strong>Shared Responsibility &amp; Documentation:</strong> Significant Client instructions or deviations from the agreed scope will be documented in writing before execution. Absence of written objection within two (2) business days shall be treated as the Client&rsquo;s consent.</li>
            <li><strong>Editorial Independence:</strong> Pubrica reserves the right to decline implementing directions that violate scientific ethics, plagiarism norms, or regulatory standards.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.9 Communication, Representation, and Authorized Interfaces</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            Pubrica&rsquo;s services are scientific and research-driven in nature, requiring collaboration with individuals who possess the technical, methodological, or subject-matter understanding necessary for effective execution and review. To maintain accuracy, efficiency, and accountability, the following terms apply:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm mb-6">
            <li>The Client shall designate a primary authorized representative who is technically qualified to review, interpret, and approve Pubrica&rsquo;s communications, deliverables, and recommendations.</li>
            <li>Legal, compliance, or procurement representatives are welcome in discussions related to contracts, payments, and confidentiality, but shall not interfere with or override scientific or methodological communication.</li>
            <li>All official communications, queries, and deliverable submissions made through Pubrica&rsquo;s authorized email addresses, client portal, or project dashboard shall be considered valid and binding proof of communication. Pubrica maintains timestamped records of all exchanges for quality assurance, audit, and dispute resolution purposes.</li>
          </ul>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">2.10 Timelines, Dependencies, and External Factors</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            Pubrica strives to deliver all project components within the agreed timelines stated in the quotation or work order. However, due to the dynamic nature of research, analytics, and publication-related services, certain outcomes and durations are influenced by factors beyond Pubrica&rsquo;s control.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            Pubrica shall not be held liable or responsible for delays or outcomes arising from journal peer-review processes, editorial or production backlogs, or publication queue times; reviewer or editor response delays; external regulatory reviews, ethical board decisions, or third-party dependencies (e.g., database access, platform downtime, courier delays); or Client-side approvals, internal discussions, or representative-level interventions that extend the review period.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            If a project is delayed for reasons not attributable to Pubrica, the project period shall be automatically extended without penalty, and reactivation after long inactivity (more than 30 days) may require rescheduling and additional administrative fees. Pubrica cannot guarantee journal acceptance, impact factor achievement, peer-review turnaround time, regulatory clearance, or indexing timelines, as these decisions are at the sole discretion of third-party entities.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">3. Payment Terms, Revision Policy, and Refund Conditions</h2>
          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.1 Quotation and Acceptance</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Each quotation, proposal, or work order issued by Pubrica specifies the scope, deliverables, fee, and payment schedule applicable to the project. By confirming the quotation in writing, by email, by digital signature, or by making payment, the Client formally accepts these Terms and Conditions and authorizes Pubrica to commence work. All amounts are stated exclusive of applicable taxes, foreign-exchange or bank charges, which shall be borne by the Client unless otherwise agreed.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.2 Payment Schedule</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Unless otherwise specified, projects are billed on a 100% advance basis before initiation. For multi-phase or large-scale projects, Pubrica may specify milestone-based payments, linked to defined stages such as concept approval, draft submission, or final delivery. Work on subsequent milestones shall proceed only after receipt of the corresponding payment. Non-payment or delayed payment may lead to temporary suspension of services until dues are cleared.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.3 Non-Refund Policy</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Because Pubrica&rsquo;s services involve customized intellectual effort, analysis, and expert time allocation, fees become non-refundable once work has commenced, regardless of later withdrawal or change of intent by the Client. Partial refunds are not applicable for incomplete or unused portions of project scope once resource allocation and initial work have started. Delays or rejections arising from journals, reviewers, client-side changes, or third-party dependencies shall not constitute grounds for refund or penalty.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.4 Revision Policy</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Revisions are included only within the originally approved scope and within the revision window stated in the quotation (typically 7&ndash;14 days from delivery). Minor revisions (grammar, formatting, reference alignment, typographical errors, or minor figure adjustments) are complimentary within this period. Major revisions&mdash;including addition of new data, change of objectives, re-analysis, altered journal guidelines, or reviewer-driven modifications&mdash;shall be treated as new work and quoted separately.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.5 Journal or External Outcomes</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica&rsquo;s responsibility is limited to delivering professionally executed, scientifically accurate, and ethically compliant work. Journal acceptance, reviewer decisions, editorial opinions, or impact-factor achievement depend on third-party discretion and cannot be guaranteed. No refund, penalty, or service obligation arises due to external rejection, editorial delay, or impact score divergence.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">3.6 &ndash; 3.9 Change Requests, Currency, Disputes &amp; Force Majeure</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Additional work beyond approved scope requires a Change Order or Supplementary Quotation, with work beginning only after written approval and payment. All payments are made in the currency stated in the quotation via bank transfer, online payment gateway, or other authorized modes; proof of payment must be shared to enable project initiation. Any billing query must be raised within five (5) business days of invoice receipt, after which the invoice is deemed accepted. Payment obligations remain binding notwithstanding delays caused by events beyond Pubrica&rsquo;s control (journal processes, reviewer timelines, government actions, system outages, or natural events), which entitle Pubrica to timeline extensions without financial liability.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">4. Confidentiality, Intellectual Property, and Data Protection</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica follows ISO 9001 and ISO 27001 standards and complies with GDPR principles. In the event of any data breach, Pubrica&rsquo;s liability shall be limited to prompt notification and corrective action.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4.1 Confidentiality Commitment</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica recognizes that all manuscripts, datasets, project materials, and communications shared by the Client are confidential and proprietary. Access is restricted to authorized employees, consultants, or subcontractors who require the information to fulfil project obligations and who are bound by equivalent non-disclosure terms. Confidential information will not be disclosed, copied, or distributed to any third party without the Client&rsquo;s prior written consent, except as required by law or regulatory authority.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4.2 Permitted Use of Information</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica may use confidential information solely for the purpose of executing the agreed project and improving its internal quality, analytics, or audit systems. Anonymized or aggregated project data may be used internally for quality-control benchmarking, workflow optimization, or AI/ML model training for editorial or analytical enhancement, provided such use cannot identify the Client, institution, or proprietary content.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4.3 Intellectual Property Ownership</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            <strong>Client IP Rights:</strong> All original data, manuscripts, graphics, and materials provided by the Client remain the Client&rsquo;s intellectual property. All final deliverables produced by Pubrica become the Client&rsquo;s property only upon full payment of all applicable fees. Until payment is received in full, all deliverables remain Pubrica&rsquo;s intellectual property and may not be used, published, or circulated by the Client.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-2">
            <strong>Pubrica Background IP:</strong> Pubrica retains ownership of its pre-existing methods, templates, style guides, proprietary algorithms, software tools, and analytical frameworks (&ldquo;Background IP&rdquo;). Deliverables may incorporate elements of this Background IP; such use does not transfer ownership, but Pubrica grants the Client a perpetual, non-exclusive, royalty-free license to use those elements within the delivered work for the intended purpose.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            <strong>Joint Development and Derivatives:</strong> If a project results in co-created intellectual property, ownership and usage rights shall be defined in a separate written agreement prior to publication or commercialization.
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4.4 Data Protection and Privacy</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Pubrica complies with applicable data-protection and privacy laws, including GDPR (EU/UK clients), CCPA (US clients), and the Indian IT Act (Section 43A). All electronic data are stored on secure, access-controlled servers located in jurisdictions with appropriate data-protection standards. Clients are requested not to share personally identifiable, patient, or sensitive health information unless specifically required and protected under a separate Data Processing Agreement (DPA).
          </p>

          <h3 className="text-base font-semibold text-gray-800 mt-4 mb-2">4.5 &ndash; 4.8 Sub-processors, Retention, Non-Solicitation &amp; Breach</h3>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Pubrica may engage specialized sub-vendors (e.g., language editors, statisticians, illustrators) for specific tasks, provided they are bound by equivalent confidentiality and data-protection obligations. Project data and communications are retained securely for a standard archival period of 12&ndash;24 months for quality, audit, and legal purposes, after which they are permanently deleted or anonymized. The Client agrees not to solicit, hire, or engage directly with any Pubrica personnel, consultants, or subcontractors introduced during a project for a period of 12 months after project completion. Any unauthorized use or disclosure of confidential information constitutes a material breach, and Pubrica reserves the right to seek injunctive or equitable relief in addition to any other remedies available at law or equity.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">5. Liability, Disclaimers, and Limitation of Guarantee</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica guarantees that all services are performed with reasonable professional care, using qualified experts, validated methodologies, and industry-accepted standards. However, Pubrica&rsquo;s guarantee is limited to the accuracy and quality of its own work, not the external outcome of that work once submitted or used by the Client.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            The Client acknowledges that Pubrica cannot guarantee or influence journal or conference acceptance, reviewer or editor opinions, impact factor results, regulatory/ethical/institutional approvals, grant or patent awards, or the performance of third-party software, databases, or external collaborators.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Under no circumstances shall Pubrica, its affiliates, or its personnel be liable for loss of profits, revenue, goodwill, or data; reputational damage; or consequential, incidental, punitive, or special damages, even if advised of the possibility of such losses. Pubrica&rsquo;s total cumulative liability for any claim arising out of a project shall be limited to the total fees actually paid by the Client for the specific project giving rise to the claim.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            For algorithm development, modeling, or AI/ML-assisted services, results are experimental and indicative, subject to underlying data limitations and model assumptions, and are intended for research or educational purposes rather than immediate clinical, regulatory, or commercial deployment unless independently validated by the Client.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">6. Client Conduct, Communication, and Escalation Policy</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica maintains a professional and respectful environment across all engagements. The Client and its representatives shall communicate in a professional, non-abusive, and non-derogatory manner with Pubrica personnel at all times. Pubrica reserves the right to discontinue communication or suspend services if abusive, defamatory, or intimidating language is used against its staff or associates.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Any change in scope, objectives, or deliverables must be formally communicated to Pubrica&rsquo;s sales or project management team in writing. Mid-project scope changes made verbally or via informal messages (including WhatsApp, social media, or personal numbers) shall not be considered valid instructions.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Clients shall communicate any concern, dissatisfaction, or revision request first to the assigned Project Manager in writing; if unresolved, the issue may be escalated to Pubrica&rsquo;s Client Service Head or Quality Assurance team via official channels. Direct or parallel communication with Pubrica&rsquo;s internal research, editorial, or analytics staff is not permitted to preserve confidentiality and process integrity.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Pubrica reserves the right to terminate the project, block access, or blacklist the Client from future engagements without refund if abusive communication continues after written warning, repeated attempts are made to manipulate, threaten, or defame Pubrica staff, false or defamatory claims are circulated publicly, or the Client repeatedly changes scope or refuses to adhere to agreed workflows.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">7. Termination, Suspension, and Dispute Resolution</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Either Party may terminate the project under material breach (with a 30-day cure period), mutual written consent, or impossibility/force majeure. Upon termination, Pubrica shall deliver any work completed up to the termination date, and the Client shall pay all dues corresponding to the completed or in-progress work.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica reserves the right to suspend or terminate services immediately without liability for non-payment, unethical practices, misuse of Pubrica&rsquo;s name or credentials, violation of confidentiality/IP/non-solicitation clauses, or insistence on directions that violate ethical, academic, or legal norms &mdash; in which case Pubrica may retain all payments received as compensation for resource time and administrative effort.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            This Agreement is governed by the laws of India, and the courts located in Chennai, Tamil Nadu, India, shall have exclusive jurisdiction over any disputes arising from this Agreement. Before initiating formal legal action, both Parties shall make good-faith efforts to resolve disputes amicably through written communication or mediation within thirty (30) days of notice of dispute.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm">
            Pubrica is a division of Guires Solutions Pvt. Ltd., headquartered in Chennai, India. All engagements, transactions, and legal obligations are governed under Indian law through the jurisdiction of the Hon&rsquo;ble Courts of Chennai, Tamil Nadu. By proceeding with payment, uploading materials, or clicking &lsquo;I Agree&rsquo; on the website or invoice link, the Client acknowledges full acceptance of these Terms &amp; Conditions under the Information Technology Act 2000.
          </p>
        </Container>
      </div>
    </>
  );
}
