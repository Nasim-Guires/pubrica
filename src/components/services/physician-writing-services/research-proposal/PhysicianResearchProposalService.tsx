"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import Link from 'next/link';

export default function PhysicianResearchProposalService() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    // Schema markup for SEO
    const jsonLdData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expert Scientific, Clinical & Medical Research Protocol & Proposal Writing for Physicians and Surgeons",
        "provider": {
            "@type": "Organization",
            "name": "Pubrica",
            "url": "https://pubrica.com"
        },
        "description": "Pubrica supports medical research from conceptualization to IRB and funding readiness, specializing in clinical trial protocol development and proposal writing for physicians and surgeons.",
        "serviceType": "Medical & Clinical Research Proposal Writing",
        "areaServed": "Global"
    };

    return (
        <>
            <Head>
                <title>Physician Research Proposal & Protocol Writing Services | Pubrica</title>
                <meta
                    name="description"
                    content="Pubrica offers expert, clinically grounded, and ethically compliant research protocol and proposal writing for physicians and surgeons. Ready for IRB, grants, or institutional approval."
                />
                <meta
                    name="keywords"
                    content="research proposal writing, clinical research protocols, physician research, medical writing services, IRB approval, grant writing"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
                />
            </Head>

            <main className="w-full bg-white text-[#212121] font-sans antialiased">
                {/* Banner Section */}
                <section className="w-full bg-[#122220] py-8 px-4 text-center border-b border-gray-700">
                    <div className="max-w-5xl mx-auto">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide leading-tight">
                            Expert Scientific, Clinical &amp; Medical Research Protocol &amp; Proposal Writing for Physicians and Surgeons
                        </h1>
                        <p className="mt-2 text-sm sm:text-base text-gray-200">
                            Clinically grounded, ethically compliant, and ready for <span className="text-[#a0c4bb]">IRB</span>, <span className="text-[#a0c4bb]">grants</span>, or <span className="text-[#a0c4bb]">institutional approval</span>.
                        </p>
                    </div>
                </section>

                {/* Main Content Section */}
                <section className="max-w-6xl mx-auto px-4 py-5 md:py-6">
                    {/* Subheading */}
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1a2e2b] leading-snug">
                        Expert Scientific, Clinical &amp; Medical Research Protocol &amp; Proposal Writing for Physicians and Surgeons &ndash; Structured, Scholarly, and Clinically Aligned
                    </h2>

                    <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
                        Pubrica Supports Your Research from Conceptualization to IRB and Funding Readiness
                    </p>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Text Column */}
                        <article className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
                            <p>
                                For busy <strong className="text-gray-900 font-semibold">physicians and surgeons</strong>, developing a{' '}
                                <Link href="/academy/research-proposal/how-to-write-a-research-proposal-a-complete-guide" className="text-blue-600 no-underline hover:no-underline">
                                    research protocol or proposal
                                </Link>{' '}
                                often competes with demanding clinical schedules. Navigating ethical approvals,{' '}
                                <Link href="/services/physician-writing-services/research-proposal/research-design-types-methods-best-practices" className="text-blue-600 no-underline hover:no-underline">
                                    research design
                                </Link>
                                , and funding formats is time-consuming and requires expertise that extends beyond clinical practice. That's where Pubrica steps in.
                            </p>

                            <p>
                                We assist <strong className="text-gray-900 font-semibold">physicians, surgeons, and clinician-researchers</strong> in transforming clinical ideas into methodologically sound, ethically compliant, and funder-ready medical proposals and clinical research protocols that meet the expectations of IRBs, academic institutions, and granting agencies, without compromising your time or authorship.
                            </p>

                            <div className="pt-2">
                                <h3 className="text-base sm:text-lg font-bold text-[#1a2e2b] mb-3">
                                    We Address the Challenges You Face:
                                </h3>

                                <ul className="space-y-3 list-none pl-0">
                                    <li className="flex items-start">
                                        <span className="text-[#c5281c] font-bold mr-2 text-lg leading-none">&bull;</span>
                                        <div>
                                            <strong className="text-gray-900">Limited Time &amp; Bandwidth:</strong> Focus on patient care while we manage the research writing, formatting, and coordination.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#c5281c] font-bold mr-2 text-lg leading-none">&bull;</span>
                                        <div>
                                            <strong className="text-gray-900">Complex Ethical &amp; Regulatory Requirements:</strong> We ensure your protocol complies with IRB, GCP, and institutional standards, including formatting for local and international submission.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#c5281c] font-bold mr-2 text-lg leading-none">&bull;</span>
                                        <div>
                                            <strong className="text-gray-900">Funder &amp; Grant Expectations:</strong> We structure your proposal to meet the strict requirements of government bodies, academic institutions, and industry sponsors.
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-[#c5281c] font-bold mr-2 text-lg leading-none">&bull;</span>
                                        <div>
                                            <strong className="text-gray-900">Academic &amp; Clinical Relevance:</strong> Whether you're submitting a thesis-derived study or an investigator-initiated trial (IIT), we align with your clinical specialty and institutional goals.
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Call To Action Button */}
                            <div className="pt-4">
                                <GetFreeQuoteButton/>
                            </div>
                        </article>

                        {/* Right Column: Image Section Placeholder */}
                        <aside className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full max-w-md bg-[#132d27] p-3 rounded-lg shadow-md">
                                <div className="relative w-full h-72 sm:h-80 rounded overflow-hidden">
                                    <Image
                                        src="/images/physician-writing-services/research-proposal/Research-Protocol-Services.webp"
                                        alt="Research protocol and proposal writing services"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 420px"
                                    />
                                </div>
                            </div>
                        </aside>
                    </div>
                </section>

                {/* Accordion / Services Offered Section */}
                <section className="w-full bg-[#83a89a] py-8 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#122220] mb-4">
                            What We Offer
                        </h2>
                        <p className="text-xs sm:text-sm text-[#122220] mb-6 leading-relaxed">
                            At Pubrica, we offer complete, clinically aligned services to assist physicians and surgeon-researchers in delivering high-quality scientific research protocols and proposals that meet academic and regulatory requirements. Pubrica services are designed to assist at all levels of planning your research.
                        </p>

                        {/* Accordion Component */}
                        <div className="bg-[#0f2d29] rounded shadow-md overflow-hidden">
                            <button
                                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                                className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-bold text-sm sm:text-base hover:bg-[#153a35] transition-colors focus:outline-none"
                                aria-expanded={isAccordionOpen}
                            >
                                <span>What We Offer</span>
                                <span className="text-lg font-mono">{isAccordionOpen ? '—' : '+'}</span>
                            </button>

                            {isAccordionOpen && (
                                <div className="bg-white p-6 border-t border-[#0f2d29]">
                                    <ul className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Clinical Research Protocol Writing:</strong> Development of detailed study protocols for clinical trials, observational studies, or surgical interventions aligned with GCP, ICH, and IRB standards.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Research Proposal Development for IRB / Grants &amp; Ethics Approval:</strong> Our field experts validate your research idea, specify the research problem, and relate the research problem to various theoretical models and real-world contexts.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Study Design &amp; Methodology Consulting:</strong> Our team outlines the most appropriate research methodology (RCT, Cohort, Cross-sectional, etc.), including study type, population, sampling, <Link href="/services/medical-data-collection" className="text-blue-600 no-underline hover:no-underline">data collection</Link> instruments, statistical tests, sample size justification, endpoint definitions, and ethical considerations, tailored for clinical, experimental, or qualitative research.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Ethics &amp; Regulatory Compliance Documentation:</strong> Preparation of documents needed for IRB/IEC approval, including informed consent forms, risk-benefit assessments, and compliance checklists.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Hypothesis &amp; Objective Formulation:</strong> We create measurable objectives and hypotheses based on a critical{' '}
                                                <Link href="/services/research-services/literature-review-and-gap" className="text-blue-600 no-underline hover:no-underline">literature review</Link> and research gaps.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Literature Review &amp; Scientific Justification:</strong> Inclusion of recent peer-reviewed references, synthesized using{' '}
                                                <a href="https://www.prisma-statement.org/prisma-2020-checklist" target="_blank" rel="noopener noreferrer" className="text-[#2b6cb0] hover:underline">PRISMA</a> or domain-specific frameworks, supports the rationale and need for your clinical study.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Statistical Planning &amp; Analysis Outline:</strong> Design of statistical methodology, selection of appropriate tools (SPSS, R, STATA), and development of an analysis plan aligned with your study objectives.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Funding-Ready Proposal Development:</strong> We align your proposal to major national and international funding bodies (ICMR, DBT, DST, NIH, EU Horizon, etc.), integrating evaluation metrics, budget estimates, and timelines.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Institutional Review Board (IRB) Compliance:</strong> We prepare documentation as per IRB/ethics committee expectations, including consent forms, risk assessments, and participant protection protocols.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Revisions &amp; Expert Review:</strong> Post-submission, you receive structured peer-level feedback, <Link href="/services/publication-support/responding-to-reviewers" className="text-blue-600 no-underline hover:no-underline">reviewer responses</Link>, and iterative support.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Formatting as per Institutional or Grant Guidelines:</strong> Adherence to specific templates or page limits required by universities, hospitals, funding bodies, or ethics boards (typically 25–30 pages).
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Dedicated Project Coordination:</strong> A single point of contact ensures timely communication, milestone tracking, and integration of feedback throughout the project.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Grant Budgeting &amp; Cost Justification:</strong> Detailed preparation of budget plans and cost breakdowns for grant applications, including personnel, equipment, consumables, and timelines, aligned with funding agency formats.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">PICO-T Framework Structuring:</strong> Conversion of your research question into a clear PICO or PICO-T format (Population, Intervention, Comparator, Outcome, Timeframe) to ensure clarity and alignment with evidence-based practice standards.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">PowerPoint Slide Deck for Proposal Defense:</strong> Creation of a professionally designed slide deck summarizing your research proposal, ideal for IRB presentations, academic defenses, or funding pitches.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Scientific Translation &amp; Language Editing:</strong> Translation of proposals from non-English drafts to fluent academic English, plus grammar and clarity enhancement for international publication standards.
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-[#c5281c] font-bold mr-2 text-base leading-none">&bull;</span>
                                            <div>
                                                <strong className="text-gray-900">Journal Manuscript Conversion:</strong> Transforming an approved protocol or completed study into a journal-ready manuscript, following target journal guidelines (e.g., Elsevier, Springer, JAMA).
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}