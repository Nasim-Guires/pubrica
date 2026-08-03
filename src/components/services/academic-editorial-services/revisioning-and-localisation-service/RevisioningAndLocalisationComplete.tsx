'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import React, { useState } from 'react';

export const metadata = {
    title: 'Revisioning & Localisation Services | Pubrica',
    description:
        'Our specialist editors meticulously revise and localise your manuscript for clarity, cultural relevance, and journal compliance, ensuring it is publication-ready and resonates with your target audience.',
};

export default function RevisioningAndLocalisationComplete() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    const processSteps = [
        {
            num: 1,
            title: 'UNDERSTANDING YOUR TARGET AUDIENCE',
            desc: 'We begin by analysing your manuscript’s target region, intended journal, readership level, and field-specific requirements. This allows us to pinpoint the exact revisioning and localisation needs, ensuring your work resonates with the intended readers.',
        },
        {
            num: 2,
            title: 'ASSIGNMENT TO A SUBJECT-MATTER EXPERT',
            desc: 'Your manuscript is assigned to an editor with relevant academic expertise and regional linguistic proficiency. This ensures that both the scientific content and regional nuances are accurately addressed.',
        },
        {
            num: 3,
            title: 'DEEP STRUCTURAL REVISIONING',
            desc: 'Our experts refine your manuscript at a conceptual and structural level. We enhance clarity, strengthen arguments, improve logical flow, and optimize scientific communication to meet the highest standards.',
        },
        {
            num: 4,
            title: 'LINGUISTIC & CULTURAL LOCALISATION',
            desc: 'We adapt your manuscript for the target region, tailoring language style, terminology, formatting norms, local regulations, and contextual sensitivities. This ensures your research communicates effectively and appropriately to the intended audience.',
        },
        {
            num: 5,
            title: 'QUALITY CHECK BY SENIOR EDITOR',
            desc: 'A senior editor conducts a rigorous second-level review to verify scientific accuracy, coherence, and compliance with journal and regional guidelines.',
        },
        {
            num: 6,
            title: 'FINAL DELIVERY WITH TRANSPARENCY',
            desc: 'You receive:\n• A fully revised and localised manuscript ready for submission\n• A tracked-changes version highlighting all modifications\n• Detailed editor comments and suggestions\n• A certificate of editing (available upon request)',
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
        },
        {
            name: 'Dr. Priya Rao',
            qualification: 'PhD in Life Sciences',
            university: 'University of Delhi, India',
            experience: '8+ Years of Experience',
            manuscripts: '400+ Papers Localised & Revised',
        },
        {
            name: 'Dr. Rohan Iyer',
            qualification: 'PhD in Biotechnology',
            university: 'Indian Institute of Technology, Bombay',
            experience: '9+ Years of Experience',
            manuscripts: '500+ Manuscripts Localised & Revised',
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
            badge: 'S',
            title: 'Basic',
            subtitle: 'Essential Revisioning',
            idealFor: 'Early drafts or manuscripts needing light refinement.',
            included: [
                'Language correction for grammar, punctuation, and spelling',
                'Basic stylistic improvements for readability',
                'Alignment with general academic conventions',
                'Minor localisation adjustments for the target region',
            ],
            bgColor: 'bg-emerald-50',
            borderColor: 'border-emerald-300',
        },
        {
            badge: 'S',
            title: 'Standard',
            subtitle: 'Advanced Revisioning & Localisation',
            idealFor: 'Manuscripts requiring structural clarity and regional adaptation.',
            included: [
                'Includes all Basic Package services, plus:',
                'Sentence-level refinement for flow and coherence',
                'Terminology alignment with field-specific standards',
                'Moderate localisation to adapt content to regional norms and journal expectations',
            ],
            bgColor: 'bg-purple-50',
            borderColor: 'border-purple-300',
        },
        {
            badge: 'P',
            title: 'Premium',
            subtitle: 'Comprehensive Revisioning & Localisation',
            idealFor: 'High-impact manuscripts aimed at top-tier journals or international audiences.',
            included: [
                'Includes all Standard Package services, plus:',
                'In-depth structural and conceptual revisioning',
                'Advanced localisation for cultural and linguistic nuances',
                'Enhancement of argumentation, clarity, and logical flow',
            ],
            bgColor: 'bg-amber-50',
            borderColor: 'border-amber-300',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Revisioning & Localisation Services at Pubrica
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Our specialist editors meticulously revise and localise your manuscript for clarity, cultural relevance, and journal compliance, ensuring it is publication-ready and resonates with your target audience.
                    </p>
                </div>
            </section>

            {/* ------------------- HOW IT WORKS / STEP BY STEP ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                    How Our Revisioning & Localisation Service Works
                </h2>
                <p className="text-xs md:text-sm font-semibold text-gray-700 mb-6">Our Step-by-Step Process</p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
                    Pubrica follows a structured, transparent, and quality-driven editorial workflow designed to simplify your publication journey. Our process ensures every manuscript receives subject-expert attention, rigorous quality checks, and end-to-end editorial support aligned with global academic publishing standards. Here’s how our end-to-end editorial process works:
                </p>

                {/* Steps Grid Layout - No default black card, turns black only on hover */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {processSteps.map((step) => {
                        const isHovered = hoveredStep === step.num;
                        return (
                            <div
                                key={step.num}
                                onMouseEnter={() => setHoveredStep(step.num)}
                                onMouseLeave={() => setHoveredStep(null)}
                                className={`p-6 rounded-lg transition-all duration-300 flex flex-col items-center cursor-pointer border text-left ${
                                    isHovered
                                        ? 'bg-[#333333] text-white border-[#333333] shadow-lg scale-105 z-10'
                                        : 'bg-white text-gray-800 border-gray-200'
                                }`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs mb-3 ${
                                        isHovered ? 'bg-white text-[#333333]' : 'bg-[#007791] text-white'
                                    }`}
                                >
                                    {step.num}
                                </div>
                                <h3 className="text-xs font-bold mb-2 text-center">{step.title}</h3>
                                <p className={`text-[10px] leading-relaxed whitespace-pre-line ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ------------------- TYPES OF DOCUMENTS WE SUPPORT ------------------- */}
            <section className="py-12 px-4 bg-[#f9fafb] border-y border-gray-100" aria-labelledby="docs-heading">
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
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="experts-heading">
                <h2 id="experts-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-10">
                    Meet Our Revisioning and Localisation Experts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {experts.map((exp, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col justify-between text-center">
                            <div>
                                <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-xl mb-3 text-[#0b3b2c] font-bold">
                                    👨‍🏫
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 mb-1">{exp.name}</h3>
                                <p className="text-xs text-emerald-800 font-medium mb-1">{exp.qualification}</p>
                                <p className="text-[11px] text-gray-500 mb-4">{exp.university}</p>
                            </div>
                            <div className="pt-4 border-t border-gray-100 flex justify-around text-xs text-gray-700">
                                <div>
                                    <span className="block font-bold text-gray-900">{exp.experience}</span>
                                    <span className="text-[10px] text-gray-500">Experience</span>
                                </div>
                                <div>
                                    <span className="block font-bold text-gray-900">{exp.manuscripts}</span>
                                    <span className="text-[10px] text-gray-500">Completed</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <section className="py-14 px-4 bg-[#f4faf7] text-center" aria-labelledby="sample-heading">
                <div className="max-w-4xl mx-auto bg-white border border-emerald-100 rounded-xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="bg-[#0b3b2c] p-3 rounded-lg shadow-md flex justify-center items-center">
                            <div className="bg-white rounded p-4 w-full h-48 flex flex-col items-center justify-center">
                                <span className="text-3xl mb-2">📄</span>
                                <span className="text-xs font-bold text-gray-800">Revisioning & Localisation Sample</span>
                                <span className="text-[10px] text-gray-500 mt-1">Editorial Compliance Preview</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <h2 id="sample-heading" className="text-base md:text-lg font-bold text-[#0b3b2c] mb-4">
                                Revisioning and Localisation Service Sample Work
                            </h2>
                            <div className="space-y-3 mb-6">
                                <button className="w-full bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
                                    Discover More
                                </button>
                            </div>
                            <h3 className="text-sm font-bold text-[#0b3b2c] mb-2">Download the full Report Now</h3>
                            <p className="text-[11px] text-gray-600 leading-relaxed mb-6">
                                Explore our revisioning and localisation sample work, carefully adapted to meet stringent scholarly standards, region-specific conventions, and top-tier journal requirements. Ensure your manuscript is precise, culturally appropriate, and publication-ready, enhancing clarity, credibility, and global research impact.
                            </p>
                            <button className="w-full bg-black hover:bg-gray-800 text-white text-xs font-bold py-3 px-6 rounded-full transition-colors shadow">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- WHY CHOOSE PUBRICA ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="why-heading">
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
            <section className="py-14 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Revisioning and Localisation Services – Our Packages
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        At Pubrica, our Revisioning and Localisation Services are designed to help researchers and authors adapt their manuscripts for global audiences while maintaining clarity, precision, and subject-specific accuracy. Whether you are preparing a manuscript for international journals or need regional language refinement, we offer structured packages to meet diverse needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {packages.map((pkg, idx) => (
                        <div key={idx} className={`bg-white border-2 ${pkg.borderColor} rounded-xl shadow-sm overflow-hidden flex flex-col justify-between`}>
                            <div className={`${pkg.bgColor} p-6 border-b ${pkg.borderColor} text-center`}>
                                <div className="w-10 h-10 mx-auto rounded-full bg-white font-bold flex items-center justify-center text-sm shadow-sm mb-2 text-gray-900">
                                    {pkg.badge}
                                </div>
                                <h3 className="text-sm font-bold text-gray-900">{pkg.title}</h3>
                                <span className="text-[11px] text-gray-600">{pkg.subtitle}</span>
                            </div>

                            <div className="p-6 space-y-4 text-xs">
                                <div>
                                    <span className="font-bold text-gray-900 block mb-1">➜ Ideal For:</span>
                                    <p className="text-gray-600 leading-relaxed">{pkg.idealFor}</p>
                                </div>

                                <div>
                                    <span className="font-bold text-gray-900 block mb-2">➜ Include:</span>
                                    <ul className="space-y-2">
                                        {pkg.included.map((inc, i) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-600">
                                                <span className="text-emerald-600 font-bold">•</span>
                                                <span className="leading-relaxed">{inc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                   <GetFreeQuoteButton/>
                </div>
            </section>
        </article>
    );
}