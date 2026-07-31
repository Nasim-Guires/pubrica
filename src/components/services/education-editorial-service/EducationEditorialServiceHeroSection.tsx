'use client';

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
            desc: 'Ensure your educational content meets global accessibility standards such as WCAG, ADA, and Section 508.',
            icon: '♿',
        },
        {
            title: 'Learning Design and Pedagogy',
            desc: 'Transform instructional content with research-backed learning design principles. We refine frameworks to boost student engagement.',
            icon: '📚',
        },
        {
            title: 'Assessment and Exam Review',
            desc: 'We develop, review, validate, and refine assessments with precision and fairness. Our experts ensure question validity and reliable testing outcomes.',
            icon: '📝',
        },
        {
            title: 'Digital Production QA',
            desc: 'Maintain exceptional quality across digital learning products. We conduct meticulous QA checks for interactive media, e-books, and platforms.',
            icon: '💻',
        },
        {
            title: 'AI and Data Preparation',
            desc: 'We prepare, structure, label, and quality-check data for AI-driven educational solutions. Our team supports machine learning models with accurate annotations.',
            icon: '🤖',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- HERO BANNER ------------------- */}
            <section className="bg-[#0b3b2c] py-16 px-4 text-white text-center">
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
            <section className="py-14 px-4 max-w-6xl mx-auto">
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
                            <button className="bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-bold px-8 py-3 rounded shadow-md transition-colors uppercase tracking-wider">
                                Get a Free Quote
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Featured Image Box */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative bg-[#0b3b2c] p-4 rounded-xl shadow-lg w-full max-w-md">
                            <div className="bg-white rounded-lg overflow-hidden shadow-inner p-2">
                                <div className="h-64 bg-gray-100 rounded flex items-center justify-center relative overflow-hidden">
                                    {/* Placeholder illustration representing Graduation cap and books */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-emerald-50 flex flex-col items-center justify-center p-6 text-center">
                                        <span className="text-5xl mb-3">🎓📚</span>
                                        <span className="text-xs font-bold text-[#0b3b2c]">Academic Excellence & Editorial Precision</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------- OUR SERVICES SECTION ------------------- */}
            <section className="py-14 px-4 bg-[#f9fafb] border-t border-gray-100" aria-labelledby="services-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="services-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Our Services
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Pubrica&apos;s Education Editorial Service is designed to support academic institutions, publishers, EdTech providers, and training organisations with end-to-end editorial excellence. Our team ensures quality, accuracy, accessibility, and pedagogical effectiveness across all types of academic and learning content. Below are the specialised services we offer:
                    </p>

                    {/* Services Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
                        {servicesList.map((service, idx) => {
                            const isHovered = hoveredServiceCard === idx;
                            return (
                                <div
                                    key={idx}
                                    onMouseEnter={() => setHoveredServiceCard(idx)}
                                    onMouseLeave={() => setHoveredServiceCard(null)}
                                    className={`p-5 rounded-lg border transition-all duration-300 flex flex-col justify-between ${isHovered
                                            ? 'bg-neutral-900 border-neutral-900 text-white shadow-xl scale-[1.02]'
                                            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
                                        }`}
                                >
                                    <div>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 ${isHovered ? 'bg-white text-neutral-900' : 'bg-emerald-100 text-[#0b3b2c]'
                                            }`}>
                                            {service.icon}
                                        </div>
                                        <h3 className={`text-xs font-bold mb-2 uppercase tracking-wide ${isHovered ? 'text-white' : 'text-[#0b3b2c]'}`}>
                                            {service.title}
                                        </h3>
                                        <p className={`text-[11px] leading-relaxed ${isHovered ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </article>
    );
}