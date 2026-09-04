'use client';

import CommonPackages, { PackageItem } from '@/components/common/CommonPackages';
import { EditorialWorkflowSection, WorkflowStep } from '@/components/common/EditorialWorkflowSection';
import ExpertsSection, { Expert } from '@/components/common/ExpertsSection';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import { PubricaSampleWorkCard } from '@/components/common/PubricaSampleWorkCardProps';
import ServiceBanner from '@/components/common/ServiceBanner';
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
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Content-Revisioning.png',
        },
        {
            title: 'Linguistic Localisation',
            description: 'Adapt your manuscript to meet the linguistic expectations of specific regions or global audiences.',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Linguistic-Localisation.png',
        },
        {
            title: 'Cultural Localisation',
            description: 'We tailor your content to the cultural context of the target audience. This includes adapting examples, idioms...',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Cultural-Localisation.png',
        },
        {
            title: 'Technical Localization',
            description: 'For specialised scientific, medical, and academic manuscripts, our team ensures domain-specific...',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Technical-Localisation.png',
        },
        {
            title: 'Journal-Specific Revisioning',
            description: 'Every journal has its own stylistic, structural, and linguistic requirements. Pubrica revises and localises...',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Journal-Specific-Revisioning.png',
        },
        {
            title: 'Translation-Integrated Localisation',
            description: 'For authors working with translated manuscripts, we refine translated content to ensure fluency, natural...',
            iconSrc: '/images/academic-editorial-services/revisioning-and-localisation-service/Translation-Integrated-Localisation.png',
        },
    ];

    const steps: WorkflowStep[] = [
        {
            stepNumber: 1,
            title: "UNDERSTANDING YOUR TARGET AUDIENCE",
            description:
                "We begin by analysing your manuscript’s target region, intended journal, readership level, and field-specific requirements. This allows us to pinpoint the exact revisioning and localisation needs, ensuring your work resonates with the intended readers.",
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Understanding-Your-Target-Audience.png",
            position: "top",
        },
        {
            stepNumber: 2,
            title: "ASSIGNMENT TO A SUBJECT-MATTER EXPERT",
            description:
                "Your manuscript is assigned to an editor with relevant academic expertise and regional linguistic proficiency. This ensures that both the scientific content and regional nuances are accurately addressed.",
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Assignment-to-a-Subject-Matter-Expert.png",
            position: "bottom",
        },
        {
            stepNumber: 3,
            title: "DEEP STRUCTURAL REVISIONING",
            description:
                "Our experts refine your manuscript at a conceptual and structural level. We enhance clarity, strengthen arguments, improve logical flow, and optimize scientific communication to meet the highest standards.",
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Deep-Structural-Revisioning.png",
            position: "top",
        },
        {
            stepNumber: 4,
            title: "LINGUISTIC & CULTURAL LOCALISATION",
            description:
                "We adapt your manuscript for the target region, tailoring language style, terminology, formatting norms, local regulations, and contextual sensitivities. This ensures your research communicates effectively and appropriately to the intended audience.",
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Linguistic-Cultural-Localisation.png",
            position: "bottom",
        },
        {
            stepNumber: 5,
            title: "QUALITY CHECK BY SENIOR EDITOR",
            description:
                "A senior editor conducts a rigorous second-level review to verify scientific accuracy, coherence, and compliance with journal and regional guidelines.",
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Quality-Check-by-Senior-Editor.png",
            position: "top",
        },
        {
            stepNumber: 6,
            title: "FINAL DELIVERY WITH TRANSPARENCY",
            description: (
                <>
                    You receive:
                    <ul className="list-disc text-left mt-2 pl-5">
                        <li>
                            A fully revised and localised manuscript ready for submission
                        </li>
                        <li>A tracked-changes version highlighting all modifications</li>
                        <li>Detailed editor comments and suggestions</li>
                        <li>A certificate of editing (available upon request)</li>
                    </ul>
                </>
            ),
            iconSrc:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Final-Delivery-with-Transparency-Check-by-Senior-Editor.png",
            position: "bottom",
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

    const experts: Expert[] = [
        {
            id: "arjun-mehta",
            name: "Dr. Arjun Mehta",
            title: "PhD in Linguistics",
            institution: "Jawaharlal Nehru University, India",
            experience: "10+ Years of Experience",
            papersEdited: "800+ Manuscripts Localised & Revised",
            avatarUrl:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Arjun-Mehta.png",
            flagUrl: "/images/country/india.png",
            bio: "Dr. Mehta specializes in adapting scientific content for global audiences, ensuring clarity, cultural relevance, and journal compliance.",
            expertise: "Biomedical sciences, clinical research, pharmaceutical studies",
            journals: "The Lancet, BMJ, Elsevier",
        },
        {
            id: "priya-rao",
            name: "Dr. Priya Rao",
            title: "PhD in Life Sciences",
            institution: "University of Delhi, India",
            experience: "8+ Years of Experience",
            papersEdited: "400+ Papers Localised & Revised",
            avatarUrl:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Priya-Rao.png",
            flagUrl: "/images/country/uk-flag-.png",
            bio: "Dr. Rao focuses on precise language refinement, localisation, and formatting to meet international publishing standards.",
            expertise: "Genetics, molecular biology, pharmacology",
            journals: "Nature Communications, PLOS ONE, Springer",
        },
        {
            id: "rohan-iyer",
            name: "Dr. Rohan Iyer",
            title: "PhD in Biotechnology",
            institution: "Indian Institute of Technology, Bombay",
            experience: "9+ Years of Experience",
            papersEdited: "500+ Manuscripts Localised & Revised",
            avatarUrl:
                "/images/academic-editorial-services/revisioning-and-localisation-service/Dr.-Rohan-Iyer.png",
            flagUrl: "/images/country/us.png",
            bio: "Dr. Iyer ensures manuscripts are scientifically accurate while culturally and linguistically adapted for diverse readerships.",
            expertise: "Biochemistry, molecular diagnostics, translational research",
            journals: "Cell, Scientific Reports, Wiley",
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

    const packages: PackageItem[] = [
        {
            icon: "/images/publication-support/poster-preparation/S.png",
            title: "Basic",
            idealFor: "Early drafts or manuscripts needing light refinement.",
            includes: [
                "Language correction for grammar, punctuation, and spelling",
                "Basic stylistic improvements for readability",
                "Alignment with general academic conventions",
                "Minor localisation adjustments for the target region",
            ],
            turnaround: "3–5 business days",
            cardBgColor: "#d8e3e0",
            titleColor: "#0F3542",
        },
        {
            icon: "/images/publication-support/poster-preparation/S.png",
            title: "Standard",
            idealFor:
                "Manuscripts requiring structural clarity and regional adaptation.",
            includes: [
                "Includes all Basic Package services, plus",
                "Sentence-level refinement for flow and coherence",
                "Terminology alignment with field-specific standards",
                "Moderate localisation to adapt content to regional norms and journal requirements",
                "Consistency checks for style, references, and formatting",
            ],
            turnaround: "5–7 business days",
            cardBgColor: "#d8c3e0",
            titleColor: "#0F3542",
        },
        {
            icon:
                "/images/editing-and-translation/translation-with-editing/pro.webp",
            title: "Premium",
            idealFor:
                "High-impact manuscripts aimed at top-tier journals or international audiences.",
            includes: [
                "Includes all Standard Package services, plus",
                "In-depth structural and conceptual revisioning",
                "Advanced localisation for cultural and linguistic nuances",
                "Enhancement of argumentation, clarity, and logical flow",
                "Subject-matter expert review for accuracy and precision",
                "Detailed feedback report highlighting improvements and suggestions",
            ],
            turnaround: "7–10 business days",
            cardBgColor: "#ddc39d",
            titleColor: "#0F3542",
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="Revisioning & Localisation Services at Pubrica"
                description="Our specialist editors meticulously revise and localise your manuscript for clarity, cultural relevance, and journal compliance, ensuring it is publication-ready and resonates with your target audience."
            />
            {/* ------------------- INTRODUCTION & CRUCIAL POINTS SECTION ------------------- */}
            {/* <section className="py-6 px-4 max-w-6xl mx-auto">
                <div className="max-w-4xl mx-auto mb-10 text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
                        Transform Your Research for Global Impact with Pubrica’s Expert Revisioning & Localisation Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                        In today’s rapidly globalizing research landscape, the success of your manuscript, scientific communication, or academic content depends not only on the accuracy of information but also on how effectively it resonates with diverse audiences across geographies. Even high-quality research may fail to achieve its intended reach if the writing style, language, cultural context, or technical nuances do not align with the expectations of a target audience or regional publication standards. Pubrica’s revisioning and localisation services are designed to bridge this gap. We help authors, researchers, universities, and scientific organizations reshape, refine, and adapt their content for different linguistic, cultural, and disciplinary standards.
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
            </section> */}

            {/* ------------------- TYPES OF REVISIONING & LOCALISATION SERVICES ------------------- */}
            {/* <section className="py-6 px-4 bg-[#f8faf9] border-y border-gray-100" aria-labelledby="types-heading">
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
            </section> */}

            {/* ------------------- PROCESS SECTION (ZIGZAG LAYOUT) ------------------- */}
            <EditorialWorkflowSection
                heading="How Our Revisioning & Localisation Service Works"
                subheading="Our Step-by-Step Process"
                description="Pubrica follows a structured, transparent, and quality-driven editorial workflow designed to simplify your publication journey. Our process ensures every manuscript receives subject-expert attention, rigorous quality checks, and end-to-end editorial support aligned with global academic publishing standards. Here’s how our end-to-end editorial process works:"
                steps={steps}
            />

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
            <ExpertsSection
                heading="Meet Our Revisioning & Localisation Experts"
                subheading="Our experienced experts adapt and refine scientific manuscripts for global audiences, ensuring linguistic clarity, cultural relevance, and compliance with international journal standards."
                experts={experts}
            />

            {/* ------------------- SAMPLE WORK SECTION ------------------- */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/academic-editorial-services/revisioning-and-localisation-service/Revisioning-and-Localisation-Service-Sample-Work.png",
                    alt: "Revisioning and Localisation Service sample work",
                    width: 600,
                    height: 800,
                }}
                sections={[
                    {
                        heading: "Revisioning and Localisation Service Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work/individual-patient-data-from-randomized-trials/",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our revisioning and localisation sample work, carefully adapted to meet stringent scholarly standards, region-specific conventions, and top-tier journal requirements. Ensure your manuscript is precise, culturally appropriate, and publication-ready, enhancing clarity, credibility, and global research impact.",
                            },
                        ],
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                ]}
                footerDisclaimerSegments={[]}
            />

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
            <section className="py-1 px-4 max-w-6xl mx-auto" aria-labelledby="packages-heading">
                <CommonPackages
                    title="Revisioning and Localisation Services – Our Packages"
                    description="At Pubrica, our Revisioning and Localisation Services are designed to help researchers and authors adapt their manuscripts for global audiences while maintaining clarity, precision, and subject-specific accuracy. Whether you are preparing a manuscript for international journals or need regional language refinement, we offer structured packages to meet diverse needs."
                    packages={packages}
                />
            </section>
            <GetFreeQuoteButton />
        </article>
    );
}