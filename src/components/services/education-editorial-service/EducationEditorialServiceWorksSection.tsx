'use client';

import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection';
import { workflowData, workflowSectionData } from '@/lib/education-editorial-service/education-editorial-service';
import React, { useState } from 'react';

export const metadata = {
    title: 'Education Editorial Services | Academic Editorial Services | Pubrica',
    description:
        'Enhance the clarity, quality, and credibility of your educational manuscripts, theses, books, and academic resources with Pubrica\'s specialized editorial support.',
};

export default function EducationEditorialServicePage() {
    // State for interactive workflow cards hover effect
    const [hoveredWorkflowCard, setHoveredWorkflowCard] = useState<number | null>(null);
    // State for interactive services grid cards hover effect
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

    const workflowSteps = [
        {
            num: 1,
            title: 'UNDERSTANDING YOUR REQUIREMENTS',
            desc: 'We begin by reviewing the document type, target audience, publishing guidelines, academic framework, and project objectives. This ensures we fully understand your needs and assign the most suitable editor for your work.',
        },
        {
            num: 2,
            title: 'ASSIGNMENT TO SUBJECT-EXPERT EDITORS',
            desc: 'Your work is matched with editors specialized in pedagogy, educational psychology, curriculum development, and more. This guarantees domain-specific accuracy and alignment with educational standards.',
        },
        {
            num: 3,
            title: 'MULTI-LAYER EDITING AND QUALITY CHECKS',
            desc: 'Each project undergoes primary editing, secondary review, and final QA by senior editors. This layered approach ensures clarity, consistency, and an error-free final document.',
        },
        {
            num: 4,
            title: 'AUTHOR FEEDBACK AND REVISION SUPPORT',
            desc: 'We provide track-changes files, editorial comments, and actionable suggestions for improvement. Authors can request revisions to refine arguments, learning design, or overall readability.',
        },
        {
            num: 5,
            title: 'FINAL DELIVERY AND PUBLISHING SUPPORT',
            desc: 'You receive a polished, publication-ready document formatted to journal or institutional guidelines. Optional services include similarity checks, reference validation, and final formatting support.',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            
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

            {/* ------------------- FULL WIDTH SUB-BANNER ------------------- */}
            <section className="w-full bg-[#0b3b2c] py-12 px-4 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
                        Enhance Your Educational Content with Pubrica
                    </h2>
                    <p className="text-xs md:text-sm text-emerald-100 max-w-2xl mx-auto leading-relaxed">
                        Access your personal editorial assistant who will expertly guide you through the complexities of educational editing and content refinement, ensuring clarity, quality, and a smoother path to publishing success.
                    </p>
                </div>
            </section>

            {/* ------------------- HOW OUR EDUCATION EDITORIAL SERVICE WORKS ------------------- */}
            <section className="py-14 px-4 bg-white border-b border-gray-100" aria-labelledby="workflow-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="workflow-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-2">
                        How Our Education Editorial Service Works
                    </h2>
                    <h3 className="text-xs md:text-sm font-bold text-gray-700 mb-2">
                        A Streamlined, Expert-Driven Editorial Workflow
                    </h3>
                    <p className="text-xs text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                        Our Education Editorial Service follows a structured, transparent, and quality-focused process to ensure every document we handle meets the highest standards of pedagogical effectiveness. Here&apos;s a step-by-step overview of how we work:
                    </p>

                    {/* Workflow Cards Grid (No default black cards, pure hover effect) */}
                    <EditorialWorkflowSection
                        heading={workflowSectionData.heading}
                        subheading={workflowSectionData.subheading}
                        description={workflowSectionData.description}
                        steps={workflowData}
                    />
                </div>
            </section>

            {/* ------------------- EDUCATION EDITORIAL SERVICES SAMPLE WORK ------------------- */}
            <section className="py-14 px-4 bg-[#f0fdf4]" aria-labelledby="sample-work-heading">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left: Image / Mockup */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="bg-white p-3 rounded-xl shadow-md border border-emerald-100 w-full max-w-xs">
                            <div className="h-64 bg-gray-900 rounded-lg flex flex-col items-center justify-center relative overflow-hidden text-white p-4 text-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <span className="text-4xl mb-2 relative z-10">🏛️</span>
                                <span className="text-xs font-bold relative z-10 text-emerald-300 mb-1">Education Editorial Sample</span>
                                <span className="text-[10px] text-gray-300 relative z-10">Peer-Reviewed Curriculum & Framework Reports</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content & Action Buttons */}
                    <div className="md:col-span-7 space-y-6 text-left">
                        <div>
                            <h2 id="sample-work-heading" className="text-lg md:text-xl font-bold text-[#0b3b2c] mb-2">
                                Education Editorial Services Sample Work
                            </h2>
                            <div className="pt-1">
                                <button className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow transition-colors">
                                    Discover More
                                </button>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 mb-2">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs text-gray-600 leading-relaxed mb-3">
                                Explore our education editorial sample work, crafted to meet high academic standards, curriculum-aligned frameworks, and publisher-specific guidelines. We deliver accurate, polished, and publication-ready educational content that enhances teaching, learning, and research outcomes.
                            </p>
                            <button className="bg-black hover:bg-neutral-800 text-white text-xs font-bold px-6 py-2.5 rounded-full shadow transition-colors">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}