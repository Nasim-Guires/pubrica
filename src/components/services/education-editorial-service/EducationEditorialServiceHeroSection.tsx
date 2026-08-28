'use client';

import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';
import Image from 'next/image';
import React, { useState } from 'react';

export const metadata = {
    title: 'Education Editorial Services | Academic Editorial Services | Pubrica',
    description:
        'Enhance the clarity, quality, and credibility of your educational manuscripts, theses, books, and academic resources with Pubrica\'s specialized editorial support.',
};

export default function EducationEditorialServiceHeroSection() {
    // State to handle hover for the "Our Services" grid cards (defaulting to null so none are black by default)
    const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

    
    const servicesList = [
        {
            title: 'Accessibility Compliance',
            desc: 'Ensure your educational content meets global accessibility standards such as WCAG, ADA, and Section 508. We audit, remediate, and optimize learning materials for diverse learners, including those with visual, auditory, cognitive, and mobility impairments. Our team guarantees equitable access without compromising content clarity or design.',
            icon: '/images/education-editorial-service/Accessibility-Compliance.webp',
        },
        {
            title: 'Learning Design and Pedagogy',
            desc: 'Transform instructional content with research-backed learning design principles. We refine curriculum frameworks, align learning outcomes, and enhance pedagogical flow to ensure better learner engagement. Our expertise spans K–12, higher education, online courses, and professional development programs.',
            icon: '/images/education-editorial-service/Learning-Design-and-Pedagogy.webp',
        },
        {
            title: 'Assessment and Exam Review',
            desc: 'We develop, review, validate, and refine assessments with precision and fairness. Our experts ensure question quality, alignment with objectives, difficulty-level calibration, bias review, and psychometric reliability. We support formative, summative, standardized exams, and competency-based assessments.',
            icon: '/images/education-editorial-service/Assessment-and-Exam-Review.webp',
        },
        {
            title: 'Digital Production QA',
            desc: 'Maintain exceptional quality across digital learning products. We conduct meticulous QA checks covering functionality, media integrity, formatting, interactivity, LMS compatibility, UI/UX, and browser/device responsiveness. This ensures error-free, smooth learning experiences across platforms.',
            icon: '/images/education-editorial-service/Digital-Production-QA.webp',
        },
        {
            title: 'AI and Data Preparation',
            desc: 'We prepare, structure, label, and quality-check data for AI-driven educational solutions. Our team supports taxonomy design, annotation workflows, metadata tagging, and content structuring for adaptive learning systems, EdTech tools, and analytics-driven platforms.',
            icon: '/images/education-editorial-service/AI-and-Data-Preparation.webp',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-7 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto border border-emerald-700/60 p-8 rounded-lg bg-[#0b3b2c]/80 shadow-inner">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
                        Education Editorial Services
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 leading-relaxed max-w-3xl mx-auto">
                        Enhance the clarity, quality, and credibility of your educational manuscripts, theses, books, and academic resources with Pubrica&apos;s specialized editorial support.
                    </p>
                </div>
            </section>

            {/* ------------------- DRIVING ACADEMIC QUALITY SECTION ------------------- */}
            <section className="py-6 px-4 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-7 space-y-4 text-left">
                        <h2 className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-4">
                            Driving Academic Quality Through Expert Education Editorial Services
                        </h2>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                            From scholarly articles to curriculum documents, our experts refine language, structure, pedagogy-focused clarity, and field-specific terminology, ensuring your education manuscripts are publication-ready, academically sound, and aligned with global educational standards.
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            In the rapidly evolving education landscape, delivering content that is accurate, engaging, and aligned with academic standards is more important than ever. Whether you are a researcher, academic institution, teacher, publisher, curriculum developer, EdTech company, or educational consultant, high-quality editorial support plays a crucial role in ensuring that your work communicates effectively and reflects the highest levels of precision.
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Our Education Editorial Services is designed to empower authors, educators, and organizations by refining their manuscripts, course materials, research papers, textbooks, digital content, and institutional documents. With a team of subject-matter experts, experienced academic editors, and skilled language specialists, we help transform raw ideas into polished, publication-ready content that meets global educational and academic benchmarks.
                        </p>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            From grammar and structure to pedagogy and factual accuracy, our editorial solutions enhance clarity, readability, and overall impact, ensuring your work stands out in an increasingly competitive academic and educational marketplace.
                        </p>

                        <div className="pt-4">
                            <GetFreeQuoteButton />
                        </div>
                    </div>

                    {/* Right Column: Featured Image Box */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-md h-72">
                            {/* Dark Green Offset Card (Bottom-Left) */}
                            <div className="absolute -bottom-4 -left-4 w-full h-full bg-[#0b3b2c] rounded-2xl" />

                            {/* Foreground Image Card */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/education-editorial-service/Driving-Academic-Quality-Through-Expert-Education-Editorial-Services.webp"
                                    alt="Driving Academic Quality Through Expert Education Editorial Services"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 420px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- OUR SERVICES SECTION ------------------- */}
            <section className="py-6 px-4 bg-white border-t border-gray-100" aria-labelledby="services-heading">
                <div className="max-w-5xl mx-auto">
                    {/* Header Text Aligned Left */}
                    <div className="mb-10 text-left">
                        <h2 id="services-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                            Our Services
                        </h2>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-4xl">
                            Pubrica&apos;s Education Editorial Service is designed to support academic institutions, publishers, EdTech providers, and training organisations with end-to-end editorial excellence. Our team ensures quality, accuracy, accessibility, and pedagogical effectiveness across all types of academic and learning content. Below are the specialised services we offer:
                        </p>
                    </div>

                    {/* Services Cards Layout (3 top, 2 bottom) */}
                    <div className="flex flex-col gap-5">
                        {/* Top Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {servicesList.slice(0, 3).map((service, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 relative flex items-start gap-4 min-h-[130px]"
                                >
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 pr-3 text-left">
                                        <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1.5 leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-3">
                                            {service.desc}
                                        </p>
                                    </div>
                                    {/* Vertical Green Accent Line */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-[#0b3b2c] rounded-full" />
                                </div>
                            ))}
                        </div>

                        {/* Bottom Row: 2 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {servicesList.slice(3, 5).map((service, idx) => (
                                <div
                                    key={idx + 3}
                                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 relative flex items-start gap-4 min-h-[130px]"
                                >
                                    <div className="relative w-12 h-12 shrink-0">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 pr-3 text-left">
                                        <h3 className="text-xs md:text-sm font-bold text-gray-900 mb-1.5 leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="text-[11px] text-gray-600 leading-relaxed line-clamp-3">
                                            {service.desc}
                                        </p>
                                    </div>
                                    {/* Vertical Green Accent Line */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[3px] h-10 bg-[#0b3b2c] rounded-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}