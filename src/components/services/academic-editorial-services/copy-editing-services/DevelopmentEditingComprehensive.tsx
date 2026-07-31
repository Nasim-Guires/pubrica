'use client';

import React, { useState } from 'react';

export const metadata = {
    title: 'Development Editing Services & Key Features | Pubrica',
    description:
        'Explore Pubrica’s Development Editing Services, featuring our expert editors, packages, step-by-step process, document types, and sample work.',
};

interface Expert {
    name: string;
    qualification: string;
    institution: string;
    experience: string;
    papers: string;
}

export default function AcademicDevelopmentEditingService() {
    const [activeTab, setActiveTab] = useState<'Medicine' | 'Science' | 'Engineering'>('Medicine');

    const keyFeatures = [
        {
            title: 'Expert Developmental Editors',
            description: 'A team of 3,000+ experienced developmental editors that focus on delivering an impeccably formatted manuscript, with proper sentence construction and grammar, and in-depth checks for missing structural elements or incomplete sections.',
            border: 'border-l-4 border-yellow-400',
        },
        {
            title: 'Subject Matter Matching',
            description: 'Expertise across 1,600+ subject areas to match your manuscript with the most suitable experts in your field and ensure a clearly defined narrative and accurate use of technical terminology.',
            border: 'border-l-4 border-teal-400',
        },
        {
            title: '2-Level Review System',
            description: 'A comprehensive 2-level editor review system that gets your paper checked by two leading experts in your subject area for excellent quality developmental editing. You can also benefit from free re-editing for over 12 months with our Premium editing and Scientific editing plans.',
            border: 'border-l-4 border-emerald-400',
        },
        {
            title: 'Data Security & Confidentiality',
            description: 'High standards of data security are maintained to ensure the confidentiality of manuscripts. Our editors honour a strict NDA, and our systems are ISO/IEC 27001:2013 certified, so any files you submit for editing are 100% safe and secure.',
            border: 'border-l-4 border-blue-500',
        },
        {
            title: 'Plagiarism Prevention',
            description: 'Additional services, like a plagiarism check to eliminate any chance of accidental duplication in your paper when referring to previously published research articles.',
            border: 'border-l-4 border-orange-400',
        },
        {
            title: 'Quality & Delivery Guarantee',
            description: 'Quality and delivery guaranteed with strict adherence to deadlines without compromising on quality.',
            border: 'border-l-4 border-green-500',
        },
    ];

    const packages = [
        {
            letter: 'S',
            title: 'Standard Development',
            headerBg: 'bg-[#e2ebe8]',
            badgeColor: 'bg-emerald-200 text-emerald-800',
            borderColor: 'border-emerald-200',
            idealFor: 'Early drafts and manuscripts needing structural guidance.',
            includes: [
                'Comprehensive review of manuscript structure and organization',
                'Clarity and flow improvements',
                'Identification of gaps in argument or logic',
                'Suggestions for paragraph and sentence-level enhancement',
                'Feedback on readability and coherence',
            ],
        },
        {
            letter: 'A',
            title: 'Advanced Development',
            headerBg: 'bg-[#f0e6f5]',
            badgeColor: 'bg-purple-200 text-purple-800',
            borderColor: 'border-purple-200',
            idealFor: 'Manuscripts with strong content that require detailed refinement.',
            includes: [
                'Everything in the Standard package',
                'In-depth assessment of research methodology and argumentation',
                'Alignment with journal or publisher guidelines',
                'Consistency check for terminology and formatting',
            ],
        },
        {
            letter: 'P',
            title: 'Premium Development',
            headerBg: 'bg-[#f5f0e1]',
            badgeColor: 'bg-amber-200 text-amber-800',
            borderColor: 'border-amber-200',
            idealFor: 'Manuscripts intended for high-impact journals or publication.',
            includes: [
                'Everything in the Advanced package',
                'Expert review for content depth, originality, and scientific accuracy',
                'Integration of feedback from reviewers or advisors',
                'Detailed suggestions for strengthening conclusions and discussion',
                'Priority support and consultation with our expert editors',
            ],
        },
    ];

    const steps = [
        {
            id: 1,
            title: 'INITIAL ASSESSMENT',
            description: 'We begin with a thorough evaluation of your manuscript to identify areas requiring improvement, such as inconsistencies, redundancies, or gaps in logic. This initial assessment forms the basis of a customized editing plan.',
        },
        {
            id: 2,
            title: 'CONTENT ENHANCEMENT',
            description: 'Our editors focus on strengthening the manuscript\'s core message. They restructure sections, clarify hypotheses, and refine arguments to ensure that your research is presented logically and persuasively. Figures, tables, and data presentation are reviewed for accuracy and clarity.',
        },
        {
            id: 3,
            title: 'LANGUAGE AND STYLE REFINEMENT',
            description: 'While development editing prioritizes content and structure, language quality is also crucial. Editors polish the manuscript for grammatical accuracy, sentence construction, readability, and adherence to academic style without altering your voice.',
        },
        {
            id: 4,
            title: 'DETAILED FEEDBACK AND QUERIES',
            description: 'Our editors provide a comprehensive report highlighting the changes made, suggestions for improvement, and queries that require your input. This transparent process encourages collaboration and ensures your vision remains central to the manuscript.',
        },
        {
            id: 5,
            title: 'FINAL REVIEW AND APPROVAL',
            description: 'After addressing the editor\'s feedback, we conduct a final review to ensure the manuscript is coherent, concise, and ready for submission. By the end of this process, your research is transformed into a polished document that communicates your findings effectively and persuasively.',
        },
    ];

    const helpItems = [
        'Address big-picture elements to elevate your manuscript as a whole.',
        'Refine your argument for seamless flow throughout the text.',
        'Organise sections to logically support your argument.',
        'Strengthen your evidence for a compelling argument.',
        'Respond to peer reviewer or reader feedback.',
        'Ensure your tone and voice are targeted to your audience.',
        'Make large word count cuts without compromising clarity.',
        'Suggest ways to expand your content while maintaining quality.',
    ];

    const docTypes = [
        'Research manuscripts',
        'Thesis & dissertations',
        'Book chapters',
        'Academic textbooks',
        'Grants and funding proposals',
        'Systematic reviews & meta-analyses',
        'White papers and technical documents',
        'Reports, policy drafts, and educational materials',
    ];

    const experts: Expert[] = [
        {
            name: 'Dr. Aarav Mehta',
            qualification: 'PhD in Life Sciences',
            institution: 'Indian Institute of Technology, India',
            experience: '10+',
            papers: '950+',
        },
        {
            name: 'Dr. Priya Rangan',
            qualification: 'PhD in Biochemistry',
            institution: 'University of Delhi, India',
            experience: '8+',
            papers: '740+',
        },
        {
            name: 'Dr. Rohan Verma',
            qualification: 'PhD in Neuroscience',
            institution: 'All India Institute of Medical Sciences, India',
            experience: '9+',
            papers: '850+',
        },
    ];

    return (
        <article className="w-full bg-white text-gray-800 font-sans">
            {/* ------------------- SECTION 1: KEY FEATURES ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto" aria-labelledby="features-heading">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 id="features-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                        Pubrica’s Development Editing Services and its Key Features
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Looking for a better way to structure your manuscript? Need help crafting more effective transitions? Want to improve the overall flow of your paper and get high-quality editing and formatting? Pubrica’s Development Editing Services give you access to experienced English editors who help organize and optimize your manuscript’s content according to international journal standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {keyFeatures.map((feat, idx) => (
                        <div key={idx} className={`bg-white border border-gray-200 rounded-lg p-6 shadow-sm ${feat.border}`}>
                            <h3 className="text-sm font-bold text-gray-900 mb-2">{feat.title}</h3>
                            <p className="text-xs text-gray-600 leading-relaxed">{feat.description}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* ------------------- SECTION 2: STEP-BY-STEP PROCESS (INTERACTIVE TIMELINE) ------------------- */}
            <section className="py-14 px-4 bg-[#f8faf9] border-y border-gray-100 text-center" aria-labelledby="process-heading">
                <h2 id="process-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-1">
                    How Our Development Editing Service Works
                </h2>
                <h3 className="text-sm font-semibold text-gray-600 mb-12">
                    Our Step-by-Step Process
                </h3>

                <div className="max-w-6xl mx-auto relative">
                    <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[4px] bg-[#0088cc] z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start relative z-10">
                        {steps.map((step) => (
                            <div key={step.id} className="flex flex-col items-center group">
                                <div className="w-8 h-8 rounded-full bg-[#0b3b2c] text-white font-bold flex items-center justify-center text-xs group-hover:bg-[#0088cc] transition-colors shadow-md mb-3 z-10">
                                    {step.id}
                                </div>

                                <div className="w-full bg-white border border-gray-300 rounded-lg p-5 text-center flex flex-col items-center justify-start min-h-[300px] transition-all duration-300 group-hover:bg-[#3d3d3d] group-hover:text-white shadow-sm group-hover:shadow-xl cursor-pointer">
                                    <h4 className="text-xs font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-[11px] text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------- STATS COUNTER BAR ------------------- */}
            <section className="bg-[#0b3b2c] text-white py-8 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-emerald-800">
                    <div className="py-2">
                        <div className="text-2xl md:text-3xl font-bold">1,433,495+</div>
                        <div className="text-xs text-emerald-200 mt-1">Papers edited</div>
                    </div>
                    <div className="py-2">
                        <div className="text-2xl md:text-3xl font-bold">326,583+</div>
                        <div className="text-xs text-emerald-200 mt-1">Authors served</div>
                    </div>
                    <div className="py-2">
                        <div className="text-2xl md:text-3xl font-bold">15+ years</div>
                        <div className="text-xs text-emerald-200 mt-1">Editing Experience</div>
                    </div>
                </div>
            </section>

            {/* ------------------- SECTION 3: HOW OUR EDITORS CAN HELP ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="help-heading">
                <h2 id="help-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-10">
                    How Our Editors Can Help You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {helpItems.map((item, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center justify-center text-center">
                            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center mb-4 text-sm border border-purple-200">
                                ✓
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ------------------- SECTION 4: TYPES OF DOCUMENTS WE EDIT ------------------- */}
            <section className="bg-emerald-50/40 py-12 px-4 border-y border-emerald-100" aria-labelledby="docs-heading">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 id="docs-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-8">
                        Types Of Documents We Edit
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {docTypes.map((doc, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-md p-4 flex items-center gap-3 shadow-sm text-left">
                                <span className="text-red-600 font-bold">➔</span>
                                <span className="text-xs font-semibold text-gray-800">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------------- SECTION 5: EXPERTS & SAMPLE WORK ------------------- */}
            <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="experts-heading">
                <h2 id="experts-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-10">
                    Meet Our Development Editing Experts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {experts.map((exp, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center font-bold text-gray-700 mb-4 text-xl border">
                                {exp.name.charAt(4)}
                            </div>
                            <h3 className="text-sm font-bold text-gray-900">{exp.name}</h3>
                            <p className="text-xs text-gray-600 mt-1">{exp.qualification}</p>
                            <p className="text-[11px] text-gray-500 mt-0.5">{exp.institution}</p>
                            <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-between text-[11px] text-gray-600">
                                <span>{exp.experience} Years Experience</span>
                                <span>{exp.papers} Papers Edited</span>
                            </div>
                            <button className="mt-4 text-xs font-bold text-[#0b3b2c] hover:underline">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Sample Work Section */}
                <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                    <h2 className="text-lg md:text-xl font-bold text-[#0b3b2c] mb-2">
                        Explore Sample Work From Our Professional Development Editing Service
                    </h2>
                    <p className="text-xs text-gray-600 mb-6">
                        See how our expert editors help shape your manuscript's structure, strengthen your arguments, and ensure your content is coherent, compelling, and ready for publication in your target journal.
                    </p>

                    {/* Sample Viewer Controls Tab */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-md p-1 flex gap-2">
                            {(['Medicine', 'Science', 'Engineering'] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 text-xs font-semibold rounded transition-colors ${activeTab === tab
                                            ? 'bg-blue-600 text-white shadow-sm'
                                            : 'text-blue-700 hover:bg-blue-100'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* PDF Viewer Mockup */}
                    <div className="bg-[#2d2d2d] rounded-lg p-4 text-white">
                        <div className="flex flex-wrap items-center justify-between bg-[#1e1e1e] px-4 py-2 rounded mb-4 text-xs">
                            <div className="flex items-center gap-4">
                                <span>☰</span>
                                <span>v1-J...</span>
                                <span>1 / 1</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-2 py-0.5 bg-gray-700 rounded">-</button>
                                <span>48%</span>
                                <button className="px-2 py-0.5 bg-gray-700 rounded">+</button>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <span>🖨️</span>
                                <span>📥</span>
                            </div>
                        </div>

                        {/* Document Pages Preview Area */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white text-gray-900 p-6 rounded text-left text-xs">
                            <div className="border border-gray-300 p-4 rounded bg-slate-50 min-h-[220px] flex flex-col justify-between">
                                <div>
                                    <div className="font-bold text-center mb-2 text-sm">PUBRICA</div>
                                    <p className="text-[10px] text-gray-600 leading-relaxed line-clamp-6">
                                        Traumatic brain injury (TBI) is among the leading causes of mortality and morbidity worldwide, especially in developing countries [1, 2]. Some patients with head injury die shortly after a period of semi-consciousness...
                                    </p>
                                </div>
                                <div className="text-center text-[10px] text-gray-400 mt-4">1</div>
                            </div>
                            <div className="border border-gray-300 p-4 rounded bg-slate-50 min-h-[220px]">
                                <div className="font-bold text-center mb-2 text-sm">PUBRICA</div>
                                <p className="text-[10px] text-gray-600 leading-relaxed">
                                    Traumatic brain injury (TBI) <span className="bg-red-100 text-red-700 line-through">surpasses many medical disorders as one of the leading causes</span> <span className="bg-green-100 text-green-700">is among the leading causes</span> of mortality and morbidity worldwide, especially in developing countries [1, 2]. Some patients with head injury die shortly after a period of semi-consciousness <span className="bg-red-100 text-red-700 line-through">after trauma</span> <span className="bg-green-100 text-green-700">following trauma</span>, suggesting a devastating brain injury. This phenomenon of death after a short lucid period was first described by Reilly et al. in 1975.
                                </p>
                                <div className="mt-3 p-2 bg-red-50 border-l-2 border-red-500 text-[9px] text-red-900">
                                    <strong>Comments:</strong> Simplified phrasing for clarity and conciseness.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ------------------- SECTION 1.5: DEVELOPMENT EDITING SERVICES - PACKAGES ------------------- */}
                <section className="py-14 px-4 max-w-6xl mx-auto text-center" aria-labelledby="packages-heading">
                    <div className="max-w-4xl mx-auto mb-12">
                        <h2 id="packages-heading" className="text-xl md:text-2xl font-bold text-[#0b3b2c] mb-3">
                            Development Editing Services – Our Packages
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Explore our comprehensive Development Editing packages designed to strengthen your manuscript's structure, flow, and overall narrative quality. Each package is tailored to address the unique needs of authors, ensuring clarity, coherence, and impactful presentation at every stage of writing.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                        {packages.map((pkg, idx) => (
                            <div key={idx} className={`bg-white border ${pkg.borderColor} rounded-lg shadow-sm flex flex-col overflow-hidden`}>
                                {/* Package Header with Letter Badge & Title */}
                                <div className={`${pkg.headerBg} p-5 border-b ${pkg.borderColor} flex items-center gap-3`}>                <div className={`w-10 h-10 rounded-full ${pkg.badgeColor} font-extrabold flex items-center justify-center text-sm shadow-sm`}>
                                    {pkg.letter}
                                </div>
                                    <h3 className="text-sm font-bold text-gray-900">{pkg.title}</h3>
                                </div>

                                {/* Body Content */}
                                <div className="p-6 flex flex-col justify-between flex-grow">
                                    <div>
                                        {/* Ideal For */}
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1">
                                                <span>➔</span>
                                                <span>Ideal For:</span>
                                            </div>
                                            <p className="text-xs text-gray-600 pl-4 leading-relaxed">
                                                {pkg.idealFor}
                                            </p>
                                        </div>

                                        {/* Includes */}
                                        <div>
                                            <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-2">
                                                <span>➔</span>
                                                <span>Includes:</span>
                                            </div>
                                            <ul className="space-y-2 pl-4 text-xs text-gray-600">
                                                {pkg.includes.map((inc, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-gray-400 mt-0.5">•</span>
                                                        <span className="leading-relaxed">{inc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Get a Free Quote Button */}
                    <button className="bg-[#cc0000] hover:bg-[#b00000] text-white text-xs font-bold px-8 py-3 rounded shadow-md transition-colors uppercase tracking-wider">
                        Get a Free Quote
                    </button>
                </section>
            </section>
        </article>
    );
}