"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';

// Process Steps Data (mapped with icons and positioning for the new layout)
const processSteps = [
    {
        stepNumber: 1,
        title: "MANUSCRIPT PLANNING & CLINICAL DATA REVIEW",
        description: "We start by reviewing your clinical data, study design, or case documentation. Our scientific writing experts collaborate with you to define the manuscript type, structure, and target audience.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-1.png",
        position: "bottom"
    },
    {
        stepNumber: 2,
        title: "TITLE, ABSTRACT & JOURNAL SELECTION",
        description: "We create strong titles and structured abstracts tailored to the journal's requirements for indexing and scope (e.g., PubMed, Scopus). We provide a journal listing as well to enhance the chances for acceptance and to mitigate rejection.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-2.png",
        position: "top"
    },
    {
        stepNumber: 3,
        title: "DRAFT DEVELOPMENT & SCIENTIFIC WRITING",
        description: "Our medical writing staff writes up the manuscript according to the journal's author guidelines (i.e., ICMJE, CONSORT). We ensure clarity, scientific accuracy, and familiarity with medical terminology.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-3.png",
        position: "bottom"
    },
    {
        stepNumber: 4,
        title: "PEER REVIEW FEEDBACK (PRE-SUBMISSION)",
        description: "Before submission, we conduct an internal peer review and provide actionable feedback. This step enhances the manuscript's quality without yet performing formal editing.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-4.png",
        position: "top"
    },
    {
        stepNumber: 5,
        title: "REVISIONS & AMENDMENTS",
        description: "We integrate feedback iteratively, highlighting changes and improvements to ensure transparency and traceability in the review process.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-5.png",
        position: "bottom"
    },
    {
        stepNumber: 6,
        title: "SCIENTIFIC EDITING & FORMATTING",
        description: "Final manuscripts are formatted according to the target journal's formatting standards. We follow off-the-shelf style guides (AMA, Vancouver, APA) and conduct scientific editing by way of clarity, grammar, consistency, and structure.",
        iconSrc: "/images/physician-writing-services/literature-search-and-citation/icon-6.png",
        position: "top"
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
            {/* 1. How Our Physician Manuscript Service Works (Re-designed Workflow Section) */}
            <section className="py-12 md:py-16 px-4 md:px-8 bg-[#EAEAEA] w-full text-center font-sans overflow-hidden">
                {/* Header */}
                <h2 className="text-2xl md:text-3xl font-bold text-[#0B353D] mb-2">
                    How Our Physician Manuscript Service Works
                </h2>

                <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
                    Our Step-by-Step Process for Structured, Ethical, and High-Impact Publication
                </h3>

                <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
                    At Pubrica, our medical writers, scientific editors, and clinical researchers work with you to ensure you develop publication-ready manuscripts that reflect your clinical work. We guarantee each manuscript is compliant with international journal standards, ethical publishing practices, and the correct audience of medical professionals. Our process includes:
                </p>

                {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
                <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex items-center w-full min-h-[160px]"
                            >
                                {/* Connecting Vertical Line */}
                                {index !== processSteps.length - 1 && (
                                    <div
                                        className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                                            }`}
                                    />
                                )}

                                {/* Step Number Badge */}
                                <div
                                    className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                                        }`}
                                >
                                    {step.stepNumber}
                                </div>

                                {/* Step Card Container */}
                                <div
                                    className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                                        }`}
                                >
                                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10">
                                        <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                                            <Image
                                                src={step.iconSrc}
                                                alt={step.title}
                                                width={36}
                                                height={36}
                                                className="object-contain"
                                            />
                                        </div>

                                        <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                                            {step.title}
                                        </h4>

                                        <p className="text-[#64748B] text-[11px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout */}
                <div
                    className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
                    style={{
                        gridTemplateColumns: `repeat(${processSteps.length}, minmax(0, 1fr))`,
                    }}
                >
                    {processSteps.map((step, index) => {
                        const isTop = step.position === "top";

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
                            >
                                {/* UPPER SECTION */}
                                <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                                    {!isTop ? (
                                        /* Card placed at Top */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={step.iconSrc}
                                                    alt={step.title}
                                                    width={38}
                                                    height={38}
                                                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                />
                                            </div>

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Badge + Vertical Connector Line */
                                        <div className="flex flex-col items-center justify-end w-full">
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                                                {step.stepNumber}
                                            </div>
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                        </div>
                                    )}
                                </div>

                                {/* CENTER HORIZONTAL LINE SEGMENT */}
                                <div className="w-full h-[8px] relative my-0 shrink-0">
                                    <div
                                        className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${index === 0
                                            ? "rounded-l-sm"
                                            : index === processSteps.length - 1
                                                ? "rounded-r-sm"
                                                : ""
                                            }`}
                                    />
                                </div>

                                {/* LOWER SECTION */}
                                <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                                    {isTop ? (
                                        /* Card placed at Bottom */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={step.iconSrc}
                                                    alt={step.title}
                                                    width={38}
                                                    height={38}
                                                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                />
                                            </div>

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Vertical Connector Line + Badge */
                                        <div className="flex flex-col items-center justify-start w-full">
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                                                {step.stepNumber}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 2. Guarantee Banner */}
            <section className="bg-[#0f3d2e] text-white py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="flex items-center gap-6 flex-col sm:flex-row">
                        {/* Increased image container dimensions */}
                        <div className="relative w-28 h-28 md:w-32 md:h-32 shrink-0">
                            <Image
                                src="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
                                alt="100% Satisfaction Guarantee"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 112px, 128px"
                            />
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
                    <GetFreeQuoteButton />
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
                        For details on the packages and pricing, you may contact us or view ourPhysician Manuscript Service Plans.
                    </p>
                </div>
            </section>
        </div>
    );
}