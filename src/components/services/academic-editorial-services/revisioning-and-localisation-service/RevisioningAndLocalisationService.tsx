'use client';

import React from 'react';

export const metadata = {
    title: 'Revisioning and Localisation Services | Pubrica',
    description:
        'Refine your manuscript and tailor it for diverse audiences with Pubrica’s expert editorial and localisation specialists.',
};

export default function RevisioningAndLocalisationService() {
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
            description: 'Enhance clarity, coherence, and readability of your manuscript while preserving the original intent. Pubrica’s...',
            icon: '📄',
        },
        {
            title: 'Linguistic Localisation',
            description: 'Adapt your manuscript to meet the linguistic expectations of specific regions or global audiences.',
            icon: '🌐',
        },
        {
            title: 'Cultural Localisation',
            description: 'We tailor your content to the cultural context of the target audience. This includes adapting examples, idioms...',
            icon: '🌍',
        },
        {
            title: 'Technical Localization',
            description: 'For specialised scientific, medical, and academic manuscripts, our team ensures domain-specific...',
            icon: '💻',
        },
        {
            title: 'Journal-Specific Revisioning',
            description: 'Every journal has its own stylistic, structural, and linguistic requirements. Pubrica revises and localises...',
            icon: '📋',
        },
        {
            title: 'Translation-Integrated Localisation',
            description: 'For authors working with translated manuscripts, we refine translated content to ensure fluency, natural...',
            icon: '⚙️',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER SECTION ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Revisioning and Localisation Services
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Refine your manuscript and tailor it for diverse audiences with Pubrica’s expert editorial and localisation specialists.
                    </p>
                </div>
            </section>

            {/* ------------------- INTRODUCTION & CRUCIAL POINTS SECTION ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
                        Transform Your Research for Global Impact with Pubrica’s Expert Revisioning & Localisation Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left mb-4">
                        In today’s rapidly globalizing research landscape, the success of your manuscript, scientific communication, or academic content depends not only on the accuracy of information but also on how effectively it resonates with diverse audiences across geographies. Even high-quality research may fail to achieve its intended reach if the writing style, language, cultural context, or technical nuances do not align with the expectations of a target audience or regional publication standards. Pubrica’s revisioning and localisation services are designed to bridge this gap. We help authors, researchers, universities, and scientific organizations reshape, refine, and adapt their content for different linguistic, cultural, and disciplinary standards.
                    </p>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed text-left mb-6">
                        With a global team of subject-matter experts and academic editors, Pubrica provides end-to-end support to make your manuscript ready for international submission, cross-regional dissemination, or localized publication.
                    </p>
                </div>

                {/* Content Layout with List and Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
                            <button className="bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-bold px-8 py-3 rounded shadow-md transition-colors uppercase tracking-wider">
                                Get a Free Quote
                            </button>
                        </div>
                    </div>

                    {/* Right Side Image Box Mockup container */}
                    <div className="bg-[#0b3b2c] p-4 rounded-xl shadow-lg flex justify-center items-center">
                        <div className="bg-white rounded-lg p-6 shadow-inner w-full flex flex-col items-center justify-center min-h-[280px]">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0b3b2c] flex items-center justify-center text-2xl font-bold mb-4 shadow-sm">
                                🌐
                            </div>
                            <h4 className="text-sm font-bold text-gray-900 mb-2">Global Research Localisation</h4>
                            <p className="text-xs text-gray-600 text-center max-w-xs leading-relaxed">
                                Adapting academic content for cross-regional impact, linguistic clarity, and cultural alignment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- TYPES OF REVISIONING & LOCALISATION SERVICES ------------------- */}
            <section className="py-14 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
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
                                <div className="absolute top-6 right-6 text-xl">{type.icon}</div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900 mb-3 pr-8">{type.title}</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{type.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}