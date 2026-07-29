"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Process Steps Data
const processSteps = [
    {
        step: 1,
        title: "MANUSCRIPT PLANNING & CLINICAL DATA REVIEW",
        description: "We start by reviewing your clinical data, study design, or case documentation. Our scientific writing experts collaborate with you to define the manuscript type, structure, and target audience."
    },
    {
        step: 2,
        title: "TITLE, ABSTRACT & JOURNAL SELECTION",
        description: "We create strong titles and structured abstracts tailored to the journal's requirements for indexing and scope (e.g., PubMed, Scopus). We provide a journal listing as well to enhance the chances for acceptance and to mitigate rejection."
    },
    {
        step: 3,
        title: "DRAFT DEVELOPMENT & SCIENTIFIC WRITING",
        description: "Our medical writing staff writes up the manuscript according to the journal's author guidelines (i.e., ICMJE, CONSORT). We ensure clarity, scientific accuracy, and familiarity with medical terminology."
    },
    {
        step: 4,
        title: "PEER REVIEW FEEDBACK (PRE-SUBMISSION)",
        description: "Before submission, we conduct an internal peer review and provide actionable feedback. This step enhances the manuscript's quality without yet performing formal editing."
    },
    {
        step: 5,
        title: "REVISIONS & AMENDMENTS",
        description: "We integrate feedback iteratively, highlighting changes and improvements to ensure transparency and traceability in the review process."
    },
    {
        step: 6,
        title: "SCIENTIFIC EDITING & FORMATTING",
        description: "Final manuscripts are formatted according to the target journal's formatting standards. We follow off-the-shelf style guides (AMA, Vancouver, APA) and conduct scientific editing by way of clarity, grammar, consistency, and structure."
    }
];

// Why Physicians Trust Pubrica Data
const trustReasons = [
    {
        title: "Dedicated to Busy Medical Professionals",
        description: "We provide tailored support that fits demanding clinical schedules."
    },
    {
        title: "Expert Medical Writers & Scientific Reviewers",
        description: "Our team includes medical doctors, biostatisticians, and former journal editors with subject matter expertise across 100+ specialties."
    },
    {
        title: "End-to-End Publication Support",
        description: "From initial writing to journal submission and peer review revisions, we function as your external research partner, not just a writing agency."
    },
    {
        title: "Journal-Submission Ready Output",
        description: "Every manuscript is pre-checked for submission compliance, scope match, word count compliance, reference formatting, plagiarism (<10%), and journal formatting and ethical requirements."
    },
    {
        title: "Compliant with Global Standards",
        description: "EQUATOR Network reporting standards (e.g., CONSORT, STROBE, PRISMA), and ethical publication practices. Every manuscript is compliant with ICMJE, COPE, and GPP3 guidelines."
    },
    {
        title: "Extensive Journal Experience",
        description: "We've supported submissions to high-impact journals such as BMJ, NEJM Group, Elsevier, Springer, and Wiley, improving your acceptance probability."
    }
];

export default function PhysicianManuscriptWorkflowSection() {
const [openAccordion, setOpenAccordion] = useState<string | null>(null);

const toggleAccordion = (id: string) => {
  setOpenAccordion(openAccordion === id ? null : id);
};
    return (
        <div className="w-full bg-white text-slate-800">
            {/* 1. How Our Physician Manuscript Service Works */}
            <section className="py-16 bg-[#f7f9fa] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
                            How Our Physician Manuscript Service Works
                        </h2>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Our Step-by-Step Process for Structured, Ethical, and High-Impact Publication
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, our medical writers, scientific editors, and clinical researchers work with you to ensure you develop publication-ready manuscripts that reflect your clinical work. We guarantee each manuscript is compliant with international journal standards, ethical publishing practices, and the correct audience of medical professionals. Our process includes:
                        </p>
                    </div>

                    {/* Process Step Cards Grid (All white default, dark on hover) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 pt-4">
                        {processSteps.map((stepItem) => (
                            <div
                                key={stepItem.step}
                                className="relative bg-white border border-gray-200 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:bg-[#2c2c2c] hover:text-white group cursor-pointer shadow-sm hover:shadow-xl"
                            >
                                {/* Step Circle Marker */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0083a8] text-white font-bold text-xs flex items-center justify-center border-2 border-white shadow">
                                    {stepItem.step}
                                </div>

                                <div className="pt-3 flex flex-col items-center text-center">
                                    <h4 className="font-bold text-xs uppercase tracking-wide mb-3 text-gray-800 group-hover:text-white transition-colors">
                                        {stepItem.title}
                                    </h4>
                                    <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                                        {stepItem.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Guarantee Banner */}
            <section className="bg-[#0f3d2e] text-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-300 flex items-center justify-center p-2 text-center text-[10px] font-bold uppercase text-amber-200 shrink-0 leading-tight">
                            100% Satisfaction Guarantee
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">
                                Speed up your Physician Manuscript writing with Pubrica
                            </h3>
                            <p className="text-sm text-gray-200 max-w-2xl leading-relaxed">
                                Get personalized help writing a specific physician manuscript, adding detail, clarity, and effectiveness in communicating important medical information. Our service helps you navigate complexities to create effective research papers that suit your needs.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/contact"
                        className="bg-[#b31217] hover:bg-[#8e0e12] text-white font-semibold px-6 py-2.5 rounded-md transition-colors text-sm shrink-0"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </section>

            {/* 3. Why Physicians Trust Pubrica */}
            <section className="py-16 bg-[#d9e8df]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-4 space-y-4">
                            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832]">
                                Why Physicians Trust Pubrica
                            </h2>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Physicians trust Pubrica for expert medical writing and high-quality, journal-ready manuscripts that meet all publication standards. With deep knowledge of clinical research and journal standards, Pubrica ensures accuracy, clarity, and compliance.
                            </p>
                        </div>

                        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {trustReasons.map((reason, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-[#1a3832] text-base mb-2">
                                        {reason.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="text-center text-xs sm:text-sm text-gray-600 mt-12">
                        Whether you're publishing a systematic review, drug safety evaluation, or surgical innovation, Pubrica helps you showcase your clinical research globally with precision, compliance, and professionalism.
                    </p>
                </div>
            </section>

            {/* 4. Getting Started & Accordion Section */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] text-center mb-4">
                        Getting Started with Pubrica's Physician Manuscript Service is Easy
                    </h2>
                    <p className="text-center text-sm text-gray-600 mb-10 max-w-3xl mx-auto">
                        We streamline your clinical publishing process by combining your insights with our expertise to deliver submission-ready, compliant manuscripts for high-impact medical journals.
                    </p>

                    <div className="space-y-4">
                        {/* Accordion 1: What You Provide */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('provide')}
                                className="w-full bg-[#1e2d30] text-white px-6 py-3.5 flex justify-between items-center text-left text-sm sm:text-base font-semibold"
                            >
                                <span>What You Provide</span>
                                {openAccordion === 'provide' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                            {openAccordion === 'provide' && (
                                <div className="p-6 bg-[#f4f8f6] text-xs sm:text-sm text-gray-700 space-y-3">
                                    <p className="font-semibold text-gray-900">
                                        To begin, we request the following essentials from you:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><span className="font-semibold">Study Objective and Hypothesis</span> – The clinical question and hypothesis driving your research</li>
                                        <li><span className="font-semibold">Collected Research Data</span> – Patient data, trial results, imaging, or other relevant study outputs</li>
                                        <li><span className="font-semibold">Ethical & Institutional Approvals</span> – IRB or ethics committee clearance</li>
                                        <li><span className="font-semibold">Author Information & Contributions</span> – Author order, affiliations, ORCID IDs, and contributions</li>
                                        <li><span className="font-semibold">Preferred Journals for Submission</span> – Your target journal(s) and publication goals</li>
                                        <li><span className="font-semibold">Journal-Specific Requirements</span> – Formatting, reference style, word count, or submission checklists</li>
                                        <li><span className="font-semibold">Peer Review Feedback (if applicable)</span> – Feedback from editors or co-authors for revision</li>
                                        <li><span className="font-semibold">Final Approval for Submission</span> – Your consent to proceed with submission</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Accordion 2: What We Provide */}
                        <div className="border border-gray-200 rounded-md overflow-hidden">
                            <button
                                onClick={() => toggleAccordion('we-provide')}
                                className="w-full bg-[#1e2d30] text-white px-6 py-3.5 flex justify-between items-center text-left text-sm sm:text-base font-semibold"
                            >
                                <span>What We Provide</span>
                                {openAccordion === 'we-provide' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>
                            {openAccordion === 'we-provide' && (
                                <div className="p-6 bg-[#f4f8f6] text-xs sm:text-sm text-gray-700 space-y-3">
                                    <p className="font-semibold text-gray-900">
                                        Pubrica delivers comprehensive physician manuscript services covering the full research publication cycle:
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><span className="font-semibold">Literature Review & Gap Analysis</span> – Contextual and comprehensive review of existing evidence</li>
                                        <li><span className="font-semibold">Study Design Structuring</span> – Translating your research idea into a scientifically sound methodology</li>
                                        <li><span className="font-semibold">Data Analysis & Interpretation</span> – Statistical analysis and clinical relevance evaluation</li>
                                        <li><span className="font-semibold">Scientific Manuscript Writing</span> – Drafting publication-ready content per target journal scope</li>
                                        <li><span className="font-semibold">Target Journal Selection</span> – Identifying the best-fit, high-impact journals for your manuscript</li>
                                        <li><span className="font-semibold">Formatting & Guideline Compliance</span> – Applying ICMJE, AMA, and journal-specific standards</li>
                                        <li><span className="font-semibold">Figures & Tables Development</span> – Creating clear, professional visual data presentations</li>
                                        <li><span className="font-semibold">Cover Letter Writing</span> – Crafting persuasive cover letters tailored to journal editors</li>
                                        <li><span className="font-semibold">Plagiarism Check & Originality Assurance</span> – Ensuring &lt;10% similarity using industry tools</li>
                                        <li><span className="font-semibold">Pre-Submission Peer Review</span> – In-house peer review to improve scientific rigor before submission</li>
                                        <li><span className="font-semibold">Revision & Resubmission Support</span> – Incorporating reviewer comments and preparing responses</li>
                                        <li><span className="font-semibold">Submission Management</span> – Handling the submission process end-to-end on your behalf</li>
                                        <li><span className="font-semibold">Post-Submission Support</span> – Continued assistance until decision (acceptance/revision/rejection)</li>
                                        <li><span className="font-semibold">Ethical Compliance Verification</span> – Ensuring adherence to COPE, ICMJE, and EQUATOR standards</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 mt-6 leading-relaxed">
                        The extent of support that you receive will depend on the package that you choose. Although our main services include assistance with manuscript writing, formatting journals, checking for plagiarism, etc., more advanced features, like statistical analyses, journal submission management, or post-submission support, are offered through our premium packages.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        Our packages are designed for flexibility depending on your needs, whether your request involves end-to-end publication assistance or specific individual components of publication.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                        For details on the packages and pricing, you may contact us or view our <Link href="#" className="text-sky-600 underline hover:text-sky-800">Physician Manuscript Service Plans</Link>.
                    </p>
                </div>
            </section>


        </div>
    );
}