'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import HeroBanner from '@/components/common/HeroBanner';
import Image from 'next/image';
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
            title: 'Technical Localization',
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

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER SECTION ------------------- */}
            <HeroBanner
                title="Revisioning and Localisation Services"
                description="Refine your manuscript and tailor it for diverse audiences with Pubrica’s expert editorial and localisation specialists."
                headingAs="h1"
            />

            {/* ------------------- INTRODUCTION & CRUCIAL POINTS SECTION ------------------- */}
            <section className="py-6 px-6 max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#0e2a22] mb-3 leading-tight">
                    Transform Your Research for Global Impact with Pubrica’s Expert Revisioning & Localisation Services
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    {/* Left Side Content & Bullet Points */}
                    <div className="lg:col-span-7 text-xs md:text-sm text-gray-700 space-y-2.5 leading-relaxed">
                        <p>
                            In today’s rapidly globalizing research landscape, the success of your manuscript, scientific communication, or academic content depends not only on the accuracy of information but also on how effectively it resonates with diverse audiences across geographies. Even high-quality research may fail to achieve its intended reach if the writing style, language, cultural context, or technical nuances do not align with the expectations of a target audience or regional publication standards. Pubrica’s revisioning and localisation services are designed to bridge this gap. We help authors, researchers, universities, and scientific organizations reshape, refine, and adapt their content for different linguistic, cultural, and disciplinary contexts, ensuring clarity, consistency, and impact.
                        </p>

                        <p>
                            With a global team of subject-matter experts and academic editors, Pubrica provides end-to-end support to make your manuscript ready for international submission, cross-regional dissemination, or localized publication.
                        </p>

                        <p className="font-bold text-black pt-1">
                            Revisioning and Localisation are especially crucial when:
                        </p>

                        <ul className="space-y-1.5 pt-0.5 text-gray-700">
                            {crucialPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold select-none">•</span>
                                    <span className="text-xs md:text-sm text-gray-700 leading-normal">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    {/* Right Side Image Container */}
                    <div className="lg:col-span-5 relative mt-2 lg:mt-0">
                        <div className="relative w-full aspect-[4/3] max-w-[400px] mx-auto overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/images/academic-editorial-services/revisioning-and-localisation-service/Transform-Your-Research-for-Global-Impact-with-Pubricas-Expert-Revisioning-Localisation-Services.webp"
                                alt="Revisioning and Localisation Services"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 40vw"
                                priority
                            />
                        </div>
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
        </article>
    );
}