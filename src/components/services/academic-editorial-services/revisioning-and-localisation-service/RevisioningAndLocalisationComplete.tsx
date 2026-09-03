'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export const metadata = {
    title: 'Revisioning & Localisation Services | Pubrica',
    description:
        'Our specialist editors meticulously revise and localise your manuscript for clarity, cultural relevance, and journal compliance, ensuring it is publication-ready and resonates with your target audience.',
};

export default function RevisioningAndLocalisationComplete() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);
    const [expandedExpert, setExpandedExpert] = useState<number | null>(null);

    const crucialPoints = [
        'Improved clarity, coherence, and scientific logic',
        'Alignment with disciplinary standards',
        'Better readability for a global scholarly audience',
        'Enhanced chances of acceptance by peer-reviewed journals',
        'Culturally appropriate terminology',
        'Adapting units of measurement, citations, and examples',
        'Ensuring readability in native linguistic styles',
        'Adjusting tone and references for specific audiences',
    ];

    const serviceTypes = [
        {
            title: 'Content Revisioning',
            description: 'Enhance clarity, coherence, and readability of your manuscript while preserving the original intent. Pubrica’s experts restructure sentences, refine arguments, improve academic tone, and ensure your work aligns with international publishing standards.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Content-Revisioning.png',
        },
        {
            title: 'Linguistic Localisation',
            description: 'Adapt your manuscript to meet the linguistic expectations of specific regions or global audiences. We ensure accurate translation, culturally appropriate phrasing, and alignment with target-language academic norms.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Linguistic-Localisation.png',
        },
        {
            title: 'Cultural Localisation',
            description: 'We tailor your content to the cultural context of the target audience. This includes adapting examples, idioms, references, measurement units, and communication styles to ensure your manuscript is relatable and compliant with regional norms.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Cultural-Localisation.png',
        },
        {
            title: 'Technical Localisation',
            description: 'For specialised scientific, medical, and academic manuscripts, our team ensures domain-specific terminologies, technical expressions, and discipline-based writing styles are precisely revised and aligned with the expectations of the target journal or academic community.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Technical-Localisation.png',
        },
        {
            title: 'Journal-Specific Revisioning',
            description: 'Every journal has its own stylistic, structural, and linguistic requirements. Pubrica revises and localises your manuscript to meet the exact formatting, referencing, language quality, and structural expectations of your target journal.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Journal-Specific-Revisioning.png',
        },
        {
            title: 'Translation-Integrated Localisation',
            description: 'For authors working with translated manuscripts, we refine translated content to ensure fluency, natural academic tone, and contextual accuracy. This includes eliminating translation artefacts and restructuring content to meet academic communication standards.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Translation-Integrated-Localisation.png',
        },
    ];

    const processSteps = [
        {
            num: 1,
            title: 'UNDERSTANDING YOUR TARGET AUDIENCE',
            desc: 'We begin by analysing your manuscript’s target region, intended journal, readership level, and field-specific requirements. This allows us to pinpoint the exact revisioning and localisation needs, ensuring your work resonates with the intended readers.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Understanding-Your-Target-Audience.png',
        },
        {
            num: 2,
            title: 'ASSIGNMENT TO A SUBJECT-MATTER EXPERT',
            desc: 'Your manuscript is assigned to an editor with relevant academic expertise and regional linguistic proficiency. This ensures that both the scientific content and regional nuances are accurately addressed.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Assignment-to-a-Subject-Matter-Expert.png',
        },
        {
            num: 3,
            title: 'DEEP STRUCTURAL REVISIONING',
            desc: 'Our experts refine your manuscript at a conceptual and structural level. We enhance clarity, strengthen arguments, improve logical flow, and optimize scientific communication to meet the highest standards.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Deep-Structural-Revisioning.png',
        },
        {
            num: 4,
            title: 'LINGUISTIC & CULTURAL LOCALISATION',
            desc: 'We adapt your manuscript for the target region, tailoring language style, terminology, formatting norms, local regulations, and contextual sensitivities. This ensures your research communicates effectively and appropriately to the intended audience.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Linguistic-Cultural-Localisation.png',
        },
        {
            num: 5,
            title: 'QUALITY CHECK BY SENIOR EDITOR',
            desc: 'A senior editor conducts a rigorous second-level review to verify scientific accuracy, coherence, and compliance with journal and regional guidelines.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Quality-Check-by-Senior-Editor.png',
        },
        {
            num: 6,
            title: 'FINAL DELIVERY WITH TRANSPARENCY',
            desc: 'You receive:\n• A fully revised and localised manuscript ready for submission\n• A tracked-changes version highlighting all modifications\n• Detailed editor comments and suggestions\n• A certificate of editing (available upon request)',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Final-Delivery-with-Transparency-Check-by-Senior-Editor.png',
        },
    ];

    const documentTypes = [
        'Research manuscripts',
        'Abstracts',
        'Case studies',
        'Theses and dissertations',
        'Cover letters',
        'White papers and reports',
        'Conference papers',
        'Regulatory documents',
        'Book chapters',
        'Grant proposals',
        'Presentations and posters',
        'Clinical research documents',
    ];

    const experts = [
        {
            name: 'Dr. Arjun Mehta',
            qualification: 'PhD in Linguistics',
            university: 'Jawaharlal Nehru University, India',
            experience: '10+ Years of Experience',
            manuscripts: '800+ Manuscripts Localised & Revised',
            photo: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Arjun-Mehta.png',
            bio: 'Dr. Mehta specializes in adapting scientific content for global audiences, ensuring clarity, cultural relevance, and journal compliance.',
            expertise: 'Biomedical sciences, clinical research, pharmaceutical studies',
            journals: 'The Lancet, BMJ, Elsevier',
        },
        {
            name: 'Dr. Priya Rao',
            qualification: 'PhD in Life Sciences',
            university: 'University of Delhi, India',
            experience: '8+ Years of Experience',
            manuscripts: '400+ Papers Localised & Revised',
            photo: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Priya-Rao.png',
            bio: 'Dr. Rao focuses on precise language refinement, localisation, and formatting to meet international publishing standards.',
            expertise: 'Genetics, molecular biology, pharmacology',
            journals: 'Nature Communications, PLOS ONE, Springer',
        },
        {
            name: 'Dr. Rohan Iyer',
            qualification: 'PhD in Biotechnology',
            university: 'Indian Institute of Technology, Bombay',
            experience: '9+ Years of Experience',
            manuscripts: '600+ Manuscripts Localised & Revised',
            photo: '/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Rohan-Iyer.png',
            bio: 'Dr. Iyer ensures manuscripts are scientifically accurate while culturally and linguistically adapted for diverse readerships.',
            expertise: 'Biochemistry, molecular diagnostics, translational research',
            journals: 'Cell, Scientific Reports, Wiley',
        },
    ];

    const whyChoose = [
        {
            title: 'Domain-Expert Professionals',
            desc: 'Every project is assigned to specialists with advanced degrees (PhD/MD/MSc) in relevant subject areas, including medicine, life sciences, engineering, social sciences, business, and humanities. This ensures your content is handled by experts who understand both the language and the science behind it.',
            borderColor: 'border-emerald-200',
        },
        {
            title: 'Global Editorial Team Covering 30+ Language Regions',
            desc: 'Our editors are native speakers and cultural experts with strong academic backgrounds. They ensure your content is contextually and linguistically accurate, whether you require localisation for the US, UK, EU, Middle East, Africa, China, Japan, or India.',
            borderColor: 'border-teal-300',
        },
        {
            title: 'Journal-Ready Manuscripts',
            desc: 'Pubrica ensures your document is compliant with the expectations of leading publishers such as Elsevier, Springer Nature, Taylor & Francis, IEEE, Wiley, and more. From formatting to structure and tone, your manuscript is refined to meet international publication standards.',
            borderColor: 'border-gray-200',
        },
    ];

    const packages = [
        {
            badgeSrc: '/images/publication-support/poster-preparation/S.png',
            title: 'Basic',
            subtitle: 'Essential Revisioning',
            idealFor: 'Early drafts or manuscripts needing light refinement.',
            included: [
                'Language correction for grammar, punctuation, and spelling',
                'Basic stylistic improvements for readability',
                'Alignment with general academic conventions',
                'Minor localisation adjustments for the target region',
            ],
            turnaround: '3–5 business days',
            deliverable: 'Clean, error-free manuscript ready for deeper review',
            bgColor: 'bg-[#d8e3e0]',
            headerBg: 'bg-white',
            accentColor: 'text-[#0F3542]',
        },
        {
            badgeSrc: '/images/publication-support/poster-preparation/S.png',
            title: 'Standard',
            subtitle: 'Advanced Revisioning & Localisation',
            idealFor: 'Manuscripts requiring structural clarity and regional adaptation.',
            includeHeader: 'Includes all Basic Package services, plus',
            included: [
                'Sentence-level refinement for flow and coherence',
                'Terminology alignment with field-specific standards',
                'Moderate localisation to adapt content to regional norms and journal requirements',
                'Consistency checks for style, references, and formatting',
            ],
            turnaround: '5–7 business days',
            deliverable: 'Polished manuscript ready for journal submission or peer review',
            bgColor: 'bg-[#d8c3e0]',
            headerBg: 'bg-white',
            accentColor: 'text-[#0F3542]',
        },
        {
            badgeSrc: '/images/editing-and-translation/translation-with-editing/pro.webp',
            title: 'Premium',
            subtitle: 'Comprehensive Revisioning & Localisation',
            idealFor: 'High-impact manuscripts aimed at top-tier journals or international audiences.',
            includeHeader: 'Includes all Standard Package services, plus:',
            included: [
                'In-depth structural and conceptual revisioning',
                'Advanced localisation for cultural and linguistic nuances',
                'Enhancement of argumentation, clarity, and logical flow',
                'Subject-matter expert review for accuracy and precision',
                'Detailed feedback report highlighting improvements and suggestions',
            ],
            turnaround: '7–10 business days',
            deliverable: 'Manuscript ready for high-stakes submission with enhanced publication potential',
            bgColor: 'bg-[#ddc39d]',
            headerBg: 'bg-white',
            accentColor: 'text-[#0F3542]',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-7 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Revisioning & Localisation Services at Pubrica
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Our specialist editors meticulously revise and localise your manuscript for clarity, cultural relevance, and journal compliance, ensuring it is publication-ready and resonates with your target audience.
                    </p>
                </div>
            </section>

            {/* ------------------- INTRODUCTION & CRUCIAL POINTS SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto">
                <div className="max-w-4xl mx-auto mb-10 text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
                        Transform Your Research for Global Impact with Pubrica’s Expert Revisioning & Localisation Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                        In today’s rapidly globalizing research landscape, the success of your manuscript, scientific communication, or academic content depends not only on the accuracy of information but also on how effectively it resonates with diverse audiences across geographies. Even high-quality research may fail to achieve its intended reach if the writing style, language, cultural context, or technical nuances do not align with the expectations of a target audience or regional publication standards. Pubrica’s revisioning and localisation services are designed to bridge this gap. We help authors, researchers, universities, and scientific organizations reshape, refine, and adapt their content for different linguistic, cultural, and disciplinary contexts, ensuring clarity, consistency, and impact.
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        With a global team of subject-matter experts and academic editors, Pubrica provides end-to-end support to make your manuscript ready for international submission, cross-regional dissemination, or localized publication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 mb-4">
                            Revisioning and Localisation are especially crucial when:
                        </h3>
                        <ul className="space-y-3 mb-8">
                            {crucialPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-red-600 font-bold mt-0.5">▪</span>
                                    <p className="text-xs text-gray-700 leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </ul>

                        <div>
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    <div className="bg-[#0b3b2c] p-4 rounded-xl shadow-lg flex justify-center items-center relative min-h-[300px] overflow-hidden mt-2">
                        <Image
                            src="/images/academic-editorial-services/revisioning-and-localisation-service/Transform-Your-Research-for-Global-Impact-with-Pubricas-Expert-Revisioning-Localisation-Services.webp"
                            alt="Revisioning and Localisation Services"
                            fill
                            className="object-cover rounded-xl"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </section>

            {/* ------------------- TYPES OF REVISIONING & LOCALISATION SERVICES ------------------- */}
            <section className="py-6 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="max-w-4xl mx-auto mb-12">
                        <h2 id="types-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                            Types of Revisioning & Localisation Services We Offer
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            At Pubrica, we deliver comprehensive revisioning and localisation solutions designed to refine, adapt, and elevate your research manuscripts for global audiences. Our services ensure your content communicates clearly, maintains scientific accuracy, and conforms to regional, linguistic, and journal-specific requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        {serviceTypes.map((type, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col justify-between relative">
                                <div className="absolute top-6 right-6 w-10 h-10">
                                    <Image src={type.iconSrc} alt="" fill className="object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-3 pr-8">{type.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------- PROCESS SECTION (ZIGZAG LAYOUT) ------------------- */}
            <section className="py-7 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    How Our Revisioning & Localisation Service Works
                </h2>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-6">Our Step-by-Step Process</p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                    Pubrica follows a structured, transparent, and quality-driven editorial workflow designed to simplify your publication journey. Our process ensures every manuscript receives subject-expert attention, rigorous quality checks, and end-to-end editorial support aligned with global academic publishing standards. Here’s how our end-to-end editorial process works:
                </p>

                {/* 6-Column Grid Layout for Zigzag Flow */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
                    {processSteps.map((step) => {
                        const isHovered = hoveredStep === step.num;
                        const isEven = step.num % 2 === 0; // Steps 2, 4, 6 positioned alternatively

                        return (
                            <div
                                key={step.num}
                                onMouseEnter={() => setHoveredStep(step.num)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className={`flex flex-col justify-between transition-all duration-300 cursor-pointer ${isEven ? 'lg:flex-col-reverse' : 'lg:flex-col'
                                    }`}
                            >
                                {/* Top or Bottom Badge (Alternating per column) */}
                                <div className={`flex flex-col items-center py-2 ${isEven ? 'order-first lg:order-last' : 'order-first'}`}>
                                    <div className="w-8 h-8 rounded-full bg-[#007791] text-white flex items-center justify-center font-bold text-xs shadow-md z-10">
                                        {step.num}
                                    </div>
                                    <div className="w-0.5 h-6 bg-[#007791]/40 hidden lg:block"></div>
                                </div>

                                {/* Main Card Box */}
                                <div
                                    className={`p-5 rounded-lg transition-all duration-300 flex flex-col items-center border text-left my-auto ${isHovered
                                        ? 'bg-[#333333] text-white border-[#333333] shadow-xl scale-105 z-20'
                                        : 'bg-white text-gray-800 border-gray-200 shadow-sm'
                                        }`}
                                >
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden mb-3 bg-gray-50 flex items-center justify-center">
                                        <Image src={step.iconSrc} alt="" fill className="object-contain p-1" />
                                    </div>
                                    <h3 className="text-xs font-bold mb-2 text-center w-full">{step.title}</h3>
                                    <p className={`text-[10px] leading-relaxed whitespace-pre-line ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Bottom or Top Badge mirror */}
                                <div className={`flex flex-col items-center py-2 ${isEven ? 'order-last lg:order-first' : 'order-last'}`}>
                                    <div className="w-0.5 h-6 bg-[#007791]/40 hidden lg:block"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- TYPES OF DOCUMENTS WE SUPPORT ------------------- */}
            <section className="py-6 px-4 bg-[#f9fafb] border-y border-gray-100" aria-labelledby="docs-heading">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 id="docs-heading" className="text-lg md:text-xl font-bold text-[#0b3b2c] mb-8">
                        Types Of Documents We Support
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                        {documentTypes.map((doc, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-gray-700 bg-white p-3 rounded border border-gray-200 shadow-sm">
                                <span className="text-[#0b3b2c] font-bold">➜</span>
                                <span>{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------- MEET OUR EXPERTS ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto text-center" aria-labelledby="experts-heading">
                <h2 id="experts-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-10">
                    Meet Our Revisioning and Localisation Experts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experts.map((exp, idx) => {
                        const isExpanded = expandedExpert === idx;
                        return (
                            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between text-center">
                                <div>
                                    <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full bg-emerald-100">
                                        <Image src={exp.photo} alt={exp.name} fill className="object-cover" sizes="64px" />
                                    </div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">{exp.name}</h3>
                                    <p className="text-xs text-emerald-800 font-medium mb-1">{exp.qualification}</p>
                                    <p className="text-[11px] text-gray-500 mb-4">{exp.university}</p>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-around text-xs text-gray-700 mb-4">
                                    <div>
                                        <span className="block font-bold text-gray-900">{exp.experience}</span>
                                        <span className="text-[10px] text-gray-500">Experience</span>
                                    </div>
                                    <div>
                                        <span className="block font-bold text-gray-900">{exp.manuscripts}</span>
                                        <span className="text-[10px] text-gray-500">Completed</span>
                                    </div>
                                </div>
                                {isExpanded && (
                                    <div className="text-left text-xs text-gray-600 space-y-2 mb-4 leading-relaxed">
                                        <p>{exp.bio}</p>
                                        <p><span className="font-semibold text-gray-800">Subject Matter Expertise:</span> {exp.expertise}</p>
                                        <p><span className="font-semibold text-gray-800">Journals & Publishers Worked With:</span> {exp.journals}</p>
                                    </div>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setExpandedExpert(isExpanded ? null : idx)}
                                    className="text-xs text-blue-600 font-bold no-underline hover:no-underline"
                                >
                                    {isExpanded ? 'Show Less' : 'Read More'}
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <section className="py-6 px-4 bg-[#f4faf7] text-center" aria-labelledby="sample-heading">
                <div className="max-w-4xl mx-auto bg-white border border-emerald-100 rounded-xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {/* Image Container matching the screenshot */}
                        <div className="bg-[#f0f3f1] p-4 rounded-lg flex justify-center items-center relative aspect-[3/4] w-full overflow-hidden">
                            <Image
                                src="/images/academic-editorial-services/revisioning-and-localisation-service/Revisioning-and-Localisation-Service-Sample-Work.png"
                                alt="Revisioning and Localisation Service sample work"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="text-left flex flex-col justify-center">
                            <h2 id="sample-heading" className="text-base md:text-lg font-bold text-[#0b3b2c] mb-4">
                                Revisioning and Localisation Service Sample Work
                            </h2>
                            <div className="space-y-3 mb-6">
                                <Link href="/insights/individual-patient-data-from-randomized-trials" className="block w-full text-center bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
                                    Discover More
                                </Link>
                            </div>
                            <h3 className="text-sm font-bold text-[#0b3b2c] mb-2">Download the full Report Now</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
                                Explore our revisioning and localisation sample work, carefully adapted to meet stringent scholarly standards, region-specific conventions, and top-tier journal requirements. Ensure your manuscript is precise, culturally appropriate, and publication-ready, enhancing clarity, credibility, and global research impact.
                            </p>
                            <Link href="/insights/sample-work" className="block w-full text-center bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- WHY CHOOSE PUBRICA ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto text-center" aria-labelledby="why-heading">
                <h2 id="why-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                    Why Choose Pubrica for Revisioning and Localisation?
                </h2>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10">
                    Pubrica is trusted globally for its scientific expertise, editorial precision, and commitment to research integrity. Our services stand out because we provide:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    {whyChoose.map((item, idx) => (
                        <div key={idx} className={`bg-white border-2 ${item.borderColor} rounded-xl p-6 shadow-sm flex flex-col justify-between`}>
                            <div>
                                <h3 className="text-sm font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------- PACKAGES SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0F3542] mb-3">
                        Revisioning and Localisation Services – Our Packages
                    </h2>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                        At Pubrica, our Revisioning and Localisation Services are designed to help researchers and authors adapt their manuscripts for global audiences while maintaining clarity, precision, and subject-specific accuracy. Whether you are preparing a manuscript for international journals or need regional language refinement, we offer structured packages to meet diverse needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`${pkg.bgColor} rounded-lg shadow-md overflow-hidden flex flex-col justify-between border border-gray-200/50`}
                        >
                            {/* White Header Top Banner */}
                            <div className={`${pkg.headerBg} p-4 border-b border-gray-200/60 flex items-center gap-3`}>
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image
                                        src={pkg.badgeSrc}
                                        alt={`${pkg.title} package`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-900 leading-snug">{pkg.title}</h3>
                                    <span className="text-[11px] text-gray-600 block leading-tight">{pkg.subtitle}</span>
                                </div>
                            </div>

                            {/* Card Body Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-5 text-xs text-gray-800">
                                <div className="space-y-4">
                                    {/* Ideal For */}
                                    <div className="flex items-start gap-2">
                                        <span className="text-black font-bold text-sm leading-none mt-0.5">➔</span>
                                        <p className="leading-relaxed">
                                            <span className="font-bold text-gray-900">Ideal For:</span> {pkg.idealFor}
                                        </p>
                                    </div>

                                    {/* Included Services Section */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="text-black font-bold text-sm leading-none">➔</span>
                                            <span className="font-bold text-gray-900">Include:</span>
                                        </div>

                                        {pkg.includeHeader && (
                                            <p className="font-bold text-gray-900 pl-6 leading-relaxed">
                                                {pkg.includeHeader}
                                            </p>
                                        )}

                                        <ul className="pl-6 space-y-2">
                                            {pkg.included.map((inc, i) => (
                                                <li key={i} className="leading-relaxed text-gray-800">
                                                    {inc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Turnaround & Deliverable Footer Info */}
                                <div className="space-y-3 pt-3 border-t border-black/10">
                                    <div className="flex items-start gap-2">
                                        <span className="text-black font-bold text-sm leading-none mt-0.5">➔</span>
                                        <p className="leading-relaxed">
                                            <span className="font-bold text-gray-900">Turnaround :</span> {pkg.turnaround}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <span className="text-black font-bold text-sm leading-none mt-0.5">➔</span>
                                        <p className="leading-relaxed">
                                            <span className="font-bold text-gray-900">Deliverable :</span> {pkg.deliverable}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <GetFreeQuoteButton/>
        </article>
    );
}