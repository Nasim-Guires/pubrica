"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

export default function PhysicianResearchProposalProcessWorkflow() {
    const [activeTab, setActiveTab] = useState<'ethical' | 'reporting'>('reporting');

    // Schema Markup for SEO
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How Our Clinical Research Protocol & Proposal Writing Service Works",
        "description": "A streamlined 6-step approach to developing clinically grounded, ethically compliant research protocols and medical proposals.",
        "step": [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Initial Consultation & Needs Assessment",
                "text": "Initiate a detailed consultation to review clinical research topic, study objectives, IRB requirements, and submission dates."
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Research Topic Validation & Gap Identification",
                "text": "Assess the originality and feasibility of your topic through focused medical literature review."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Objective Setting, Hypothesis & Study Design",
                "text": "Identify research aims, hypotheses, and create an appropriate study design."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Full Proposal or Protocol Drafting",
                "text": "Compile a structured, journal- or funder-compliant proposal including background, methodology, and data analysis."
            },
            {
                "@type": "HowToStep",
                "position": 5,
                "name": "Ethics & Regulatory Compliance Support",
                "text": "Draft necessary IRB submission documents, consent forms, and risk-benefit analyses."
            },
            {
                "@type": "HowToStep",
                "position": 6,
                "name": "Final Review, Plagiarism Check & Delivery",
                "text": "Second expert review, plagiarism check, language editing, and institutional formatting."
            }
        ]
    };

    const stepsData = [
        {
            step: 1,
            title: "INITIAL CONSULTATION & NEEDS ASSESSMENT",
            icon: "/images/physician-writing-services/research-proposal/Initial-Consultation-Needs-Assessment-1.png",
            content: "We initiate a detailed consultation to review your clinical research topic, study objectives, IRB or funding requirements, and submission dates. A committed project coordinator will help streamline your contacts throughout the process."
        },
        {
            step: 2,
            title: "RESEARCH TOPIC VALIDATION & GAP IDENTIFICATION",
            icon: "/images/physician-writing-services/research-proposal/Research-Topic-Validation-Gap-Identification.png",
            content: "Our subject-matter experts assess the originality and feasibility of your topic and perform a focused medical literature review to identify current knowledge gaps and establish a strong rationale."
        },
        {
            step: 3,
            title: "OBJECTIVE SETTING, HYPOTHESIS & STUDY DESIGN",
            icon: "/images/physician-writing-services/research-proposal/Objective-Setting-Hypothesis-Study-Design.png",
            content: "We identify your research aims and hypotheses and create an appropriate study design (e.g., RCT, observational, cross-sectional), including sample size justification, tools, and statistical plan."
        },
        {
            step: 4,
            title: "FULL PROPOSAL OR PROTOCOL DRAFTING",
            icon: "/images/physician-writing-services/research-proposal/Full-Proposal-or-Protocol-Drafting.png",
            content: "We compile a structured, journal- or funder-compliant proposal that includes:\n\n• Background and rationale\n• Literature review\n• Methodology and data collection plan\n• Data analysis methods (SPSS, R, STATA)\n• Expected results and clinical impact\n• Proper referencing (APA, Vancouver, AMA, etc.)"
        },
        {
            step: 5,
            title: "ETHICS & REGULATORY COMPLIANCE SUPPORT",
            icon: "/images/physician-writing-services/research-proposal/Ethics-Regulatory-Compliance-Support.png",
            content: "We draft the necessary IRB submission documents, including:\n\n• Informed consent forms\n• Risk-benefit analysis\n• Data protection and compliance with GCP\n\nAll protocols are consistent with ICH, GCP, and local standards."
        },
        {
            step: 6,
            title: "FINAL REVIEW, PLAGIARISM CHECK & DELIVERY",
            icon: "/images/physician-writing-services/research-proposal/Final-Review-Plagiarism-Check-Delivery.png",
            content: "Your protocol or proposal is reviewed by a second expert, plagiarism-checked (Turnitin/iThenticate), language-edited, and formatted per your institutional or funder guidelines. We also support revisions based on committee or reviewer feedback."
        }
    ];

    const useCasesData = [
        {
            title: "A Cardiologist Preparing a Proposal for an Investigator-Initiated Trial (IIT)",
            description: "Designing a multi-centre study to evaluate a new treatment strategy for heart failure patients, the cardiologist needs a protocol aligned with ICH-GCP, complete with statistical design, endpoint definitions, and ethical compliance for IRB and sponsor submission."
        },
        {
            title: "An Orthopaedic Surgeon Submitting a Protocol for Surgical Technique Evaluation",
            description: "Evaluating the efficacy of a minimally invasive knee procedure, the surgeon requires a methodologically sound protocol for hospital ethics committee review, including risk-benefit analysis and patient consent documentation."
        },
        {
            title: "An ENT Specialist Applying for Ethics Approval for a Medical Device Study",
            description: "Testing a new otologic diagnostic device, the ENT specialist needs help drafting safety protocols and regulatory documentation to ensure full compliance prior to trial initialization."
        },
        {
            title: "A Resident or Fellow Converting Their Thesis Into a Funder-Ready Research Protocol",
            description: "A postgraduate student has completed preliminary research as part of their thesis and seeks guidance to structure it into an institution-ready submission for external funding opportunities."
        },
        {
            title: "Neurologist – Observational Cohort Study Proposal",
            description: "Exploring early cognitive decline in stroke patients, the neurologist requires a longitudinal cohort methodology with appropriate data collection variables and statistical models."
        },
        {
            title: "Dental Surgeon – Public Health Intervention Proposal",
            description: "Testing a school-based oral health intervention, the dental researcher seeks a community-oriented protocol design incorporating PICO framework standards."
        }
    ];

    const guidelinesData = [
        {
            title: "Consolidated Standards of Reporting Trials – CONSORT",
            sub: "For randomized controlled trials",
            logo: "/images/physician-writing-services/research-proposal/Consolidated-Standards-of-Reporting-Trials.png"
        },
        {
            title: "Strengthening the Reporting of Observational Studies in Epidemiology – STROBE",
            sub: "For observational studies",
            logo: "/images/physician-writing-services/research-proposal/Strengthening-the-Reporting-of-Observational-Studies-in-Epidemiology-1.png"
        },
        {
            title: "Preferred Reporting Items for Systematic Reviews and Meta-Analyses – PRISMA",
            sub: "For systematic reviews and meta-analyses",
            logo: "/images/physician-writing-services/research-proposal/Preferred-Reporting-Items-for-Systematic-Reviews-1.png"
        },
        {
            title: "Case Report Guidelines",
            sub: "Designed to improve the completeness and transparency of case reports.",
            logo: "/images/physician-writing-services/research-proposal/Case-Report-Guidelines-1.png"
        },
        {
            title: "Animal Research: Reporting of In Vivo Experiments – ARRIVE",
            sub: "Designed to improve the reporting of research involving animals.",
            logo: "/images/physician-writing-services/research-proposal/Animal-Research-Reporting-of-In-Vivo-Experiments-–-ARRIVE.png"
        },
        {
            title: "Transparent Reporting of Evaluations with Nonrandomized Designs – TREND",
            sub: "Used for reporting non-randomized public health or behavioural intervention studies.",
            logo: "/images/physician-writing-services/research-proposal/Transparent-Reporting-of-Evaluations-with-Nonrandomized-Designs-1.png"
        }
    ];

    return (
        <>
            <Head>
                <title>Clinical Research Protocol & Proposal Writing Workflow | Pubrica</title>
                <meta name="description" content="Explore our step-by-step process for clinical research protocol & medical proposal writing. Methodologically sound, ethically compliant, and funder-ready." />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
            </Head>

            <div className="w-full bg-[#f4f7f6] text-gray-800 font-sans antialiased pb-6">

                {/* SECTION 1: HOW IT WORKS STEP-BY-STEP WORKFLOW (EXACT MATCH TO IMAGE) */}
                <section className="max-w-7xl mx-auto px-4 pt-6 pb-7">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#022227] tracking-tight">
                            How Our Clinical Research Protocol &amp; Proposal Writing Service Works
                        </h2>
                        <p className="text-base font-semibold text-[#0180a3] mt-2">
                            Our step-by-Step Process
                        </p>
                        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-3xl mx-auto leading-relaxed">
                            Our clinical research protocol and medical proposal writing service ensure your proposal is academically sound, ethically compliant, and meets all institutional or funding agency requirements in a streamlined 6-step approach.
                        </p>
                    </div>

                    {/* Stepped Process Workflow - Matching the Reference Image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-start relative pt-6 pb-6">
                        {stepsData.map((item) => {
                            const isTopBadge = item.step % 2 !== 0; // Steps 1, 3, 5 -> Badge Top | Steps 2, 4, 6 -> Badge Bottom

                            return (
                                <div key={item.step} className="flex flex-col items-center h-full">

                                    {/* TOP BADGE (Steps 1, 3, 5) */}
                                    {isTopBadge && (
                                        <div className="flex flex-col items-center mb-3">
                                            <div className="w-9 h-9 rounded-full bg-[#008BB0] text-white flex items-center justify-center text-sm font-bold shadow-md">
                                                {item.step}
                                            </div>
                                            <div className="w-full mt-2 h-[3px] bg-[#008BB0]"></div>
                                        </div>
                                    )}

                                    {/* STEP CONTENT CARD */}
                                    <div className="group relative bg-[#f0f4f2] text-gray-700 p-5 rounded-md border border-gray-200 shadow-sm transition-all duration-300 hover:bg-[#4a5568] hover:shadow-xl flex flex-col justify-between">
                                        {/* Icon */}
                                        <div className="w-10 h-10 relative my-2 mx-auto">
                                            <Image
                                                src={item.icon}
                                                alt={`${item.title} icon`}
                                                fill
                                                sizes="40px"
                                                className="object-contain group-hover:brightness-200 transition-all"
                                                unoptimized
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[11px] font-extrabold uppercase text-[#022227] group-hover:text-white text-center my-3 tracking-wide leading-tight border-b pb-2 border-gray-200 group-hover:border-gray-500 transition-colors">
                                            {item.title}
                                        </h3>

                                        {/* Body Text */}
                                        <p className="text-[10px] leading-relaxed text-gray-600 group-hover:text-gray-100 whitespace-pre-line text-left transition-colors">
                                            {item.content}
                                        </p>
                                    </div>

                                    {/* BOTTOM BADGE (Steps 2, 4, 6) */}
                                    {!isTopBadge && (
                                        <div className="flex flex-col items-center mt-3">
                                            <div className="w-full mb-2 h-[3px] bg-[#008BB0]"></div>
                                            <div className="w-9 h-9 rounded-full bg-[#008BB0] text-white flex items-center justify-center text-sm font-bold shadow-md">
                                                {item.step}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* SECTION 2: BANNER */}
                <section className="w-full bg-[#022227] text-white py-8 px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div className="flex items-center space-x-6">
                            <div className="hidden sm:block w-20 h-20 relative flex-shrink-0">
                                <Image
                                    src="/images/publication-support/peer-review-pre-submission/Satisfaction_Guarantee.webp"
                                    alt="100% Satisfaction Guarantee"
                                    fill
                                    sizes="80px"
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold">
                                    Accelerate Your Clinical Research Protocol &amp; Proposal Writing Development with Pubrica
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-3xl leading-relaxed">
                                    For Pubrica's research protocol and proposal writing services: Receive expert-driven support in framing methodologically robust, funder-compliant proposals, ensuring clarity, feasibility, and alignment with institutional or grant agency standards.
                                </p>
                            </div>
                        </div>
                       <GetFreeQuoteButton/>
                    </div>
                </section>

                {/* SECTION 3: USE CASES GRID */}
                <section className="w-full bg-[#9bbdb0] py-6 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Intro Text Column */}
                            <div className="md:col-span-1 pr-4">
                                <h2 className="text-2xl font-bold text-[#022227] leading-snug">
                                    Use Cases&ndash; Who We Help in Real Practice
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-800 mt-4 leading-relaxed">
                                    At Pubrica, we partner with medical professionals in all specialties to translate clinical ideas into structured, funder and ethics-ready protocols. Here are a few examples of real-world scenarios where our work provides critical value:
                                </p>
                            </div>

                            {/* Right Cards List */}
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {useCasesData.map((uc, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 transition-all duration-300 hover:bg-[#022227] hover:text-white group flex flex-col justify-between"
                                    >
                                        <div>
                                            <h3 className="text-sm font-bold text-[#022227] group-hover:text-white leading-snug mb-2">
                                                {uc.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 group-hover:text-gray-300 leading-relaxed">
                                                {uc.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: COMPLIANCE ACCORDIONS AND LOGO CARDS */}
                <section className="max-w-6xl mx-auto px-4 py-6">
                    <h2 className="text-xl font-bold text-[#022227] text-center mb-2">
                        Our Compliance and Guideline Standards
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 text-center max-w-3xl mx-auto mb-8">
                        At Pubrica, all research proposals and clinical protocols are made under strict adherence to international and institutional guidelines, along with funding agency requirements. We guarantee that all documents maintain methodological integrity, ethical compliance, and discipline-specific formats to meet the expectations of IRBs, grant committees, academic institutions, and regulatory authorities.
                    </p>

                    <div className="border border-gray-200 rounded-md bg-white shadow-sm overflow-hidden">
                        {/* Accordion 1 Header */}
                        <button
                            onClick={() => setActiveTab(activeTab === 'ethical' ? 'reporting' : 'ethical')}
                            className="w-full flex justify-between items-center px-6 py-3 border-b border-gray-200 text-left text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                        >
                            <span>Ethical &amp; Regulatory Standards</span>
                            <span>{activeTab === 'ethical' ? '-' : '+'}</span>
                        </button>

                        {/* Accordion 2 Header */}
                        <button
                            onClick={() => setActiveTab(activeTab === 'reporting' ? 'ethical' : 'reporting')}
                            className="w-full flex justify-between items-center px-6 py-3 text-left text-xs font-bold text-gray-800 hover:bg-gray-50 transition-colors bg-gray-50 border-b border-gray-200"
                        >
                            <span>Reporting Guidelines Based on Study Type</span>
                            <span>{activeTab === 'reporting' ? '-' : '+'}</span>
                        </button>

                        {/* Guidelines Card Grid Container */}
                        {activeTab === 'reporting' && (
                            <div className="p-6 bg-[#fbfdfc]">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {guidelinesData.map((g, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-xs flex flex-col items-center justify-between transition-all duration-300 hover:bg-[#1f2937] hover:text-white group"
                                        >
                                            <div className="w-24 h-16 relative mb-4">
                                                <Image
                                                    src={g.logo}
                                                    alt={g.title}
                                                    fill
                                                    sizes="96px"
                                                    className="object-contain group-hover:brightness-200 transition-all"
                                                    unoptimized
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xs font-bold text-gray-900 group-hover:text-white leading-tight mb-2">
                                                    {g.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 group-hover:text-gray-300">
                                                    {g.sub}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Other Compliance Areas List */}
                    <div className="mt-8 pt-4">
                        <h3 className="text-sm font-bold text-[#022227] mb-3">Other Compliance Areas</h3>
                        <ul className="space-y-2 text-xs text-gray-700">
                            <li className="flex items-start">
                                <span className="text-[#c5281c] font-bold mr-2">&bull;</span>
                                <div>
                                    <strong className="text-gray-900">ICMJE Recommendations</strong> &ndash; Authorship and publication ethics
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#c5281c] font-bold mr-2">&bull;</span>
                                <div>
                                    <strong className="text-gray-900">Data Protection &amp; Privacy</strong> &ndash; Aligned with institutional data handling requirements (HIPAA/GDPR as applicable)
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#c5281c] font-bold mr-2">&bull;</span>
                                <div>
                                    <strong className="text-gray-900">Journal Submission Standards</strong> &ndash; Formatting per Elsevier, Springer, Wiley, NEJM, etc.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#c5281c] font-bold mr-2">&bull;</span>
                                <div>
                                    <strong className="text-gray-900">Plagiarism Screening</strong> &ndash; All documents are screened using Turnitin or iThenticate
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* SECTION 5: SAMPLE WORK & DOWNLOAD REPORT BANNER */}
                <section className="w-full bg-[#ebf5f0] py-5 px-4">
                    <div className="max-w-5xl mx-auto bg-[#e1efe8] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xs">
                        {/* Image using Next.js Image Tag */}
                        <div className="w-full md:w-1/2 h-56 sm:h-64 relative rounded-lg overflow-hidden shadow-sm">
                            <Image
                                src="/images/physician-writing-services/research-proposal/Medical-Research-Protocol-Proposal-Writing.jpg"
                                alt="Medical Research Protocol and Proposal Writing Sample Work"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Content Column */}
                        <div className="w-full md:w-1/2 space-y-5">
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#022227] leading-snug">
                                    Medical Research Protocol &amp; Proposal Writing Sample Work
                                </h3>
                                <Link
                                    href="/insights/sample-work"
                                    className="inline-block mt-2 w-full text-center bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>

                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-[#022227]">
                                    Download the full Report Now
                                </h3>
                                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                                    Explore our original research protocol &amp; proposal writing samples, meticulously developed to align with university or funding body guidelines, research aims, and methodological rigor delivered on time and supported by current, peer-reviewed scientific literature.
                                </p>
                                <Link
                                    href="/insights/sample-work"
                                    className="inline-block mt-3 w-full text-center bg-black hover:bg-gray-800 text-white text-xs font-semibold py-2 px-4 rounded-full transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}