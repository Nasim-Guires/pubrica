'use client';

import React, { useState } from 'react';

// --- DATA STRUCTURES ---

interface WorkflowStep {
    id: string;
    tabLabel: string;
    title: string;
    description: string;
    imageSrc: string;
}

interface PackageTier {
    letter: string;
    badgeBg: string;
    badgeColor: string;
    cardHeaderBg: string;
    title: string;
    idealFor: string;
    included: string[];
    turnaroundTime: string;
}

// --- DATA DEFINITIONS ---

const workflowSteps: WorkflowStep[] = [
    {
        id: 'step-1',
        tabLabel: 'Initial Consultation and Needs Assessment',
        title: 'Initial Consultation and Needs Assessment',
        description:
            'The process begins with an initial consultation where our CME experts engage with the client to understand the educational needs of the target audience. This includes identifying the key learning objectives, the specialties to be addressed (such as cardiology, oncology, etc.), and the preferred formats for content delivery.',
        imageSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-2',
        tabLabel: 'Curriculum Design and Content Development',
        title: 'Curriculum Design and Content Development',
        description:
            'Based on the outcomes of the initial consultation, our team designs a tailored CME curriculum that includes a variety of educational materials such as evidence-based medical articles, case studies, interactive modules, and more. We then develop the content, ensuring it aligns with the latest clinical guidelines and research.',
        imageSrc: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-3',
        tabLabel: 'Peer Review and Compliance Checks',
        title: 'Peer Review and Compliance Checks',
        description:
            'All CME content undergoes a rigorous peer-review process by subject matter experts to ensure accuracy, relevance, and compliance with accreditation standards. This step is crucial for maintaining the educational integrity and scientific rigor of the CME activities.',
        imageSrc: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-4',
        tabLabel: 'Multimedia and Interactive Content Production',
        title: 'Multimedia and Interactive Content Production',
        description:
            'Our team employs advanced digital tools to create engaging multimedia and interactive CME content, including video lectures, infographics, and simulation-based activities. This enhances the learning experience and aids in the retention of complex medical information.',
        imageSrc: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-5',
        tabLabel: 'Implementation and Distribution',
        title: 'Implementation and Distribution',
        description:
            'Once the content is finalized, it is implemented across various platforms as per the client\'s distribution strategy. This could include hosting on dedicated learning management systems (LMS), direct distribution to learners via webinars, or through live conferences and workshops.',
        imageSrc:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-6',
        tabLabel: 'Evaluation and Feedback Collection',
        title: 'Evaluation and Feedback Collection',
        description:
            'We conduct comprehensive evaluations to assess the effectiveness of the CME programs. Feedback is collected from participants to gauge their satisfaction and the impact on their clinical practices, which informs future content updates and revisions.',
        imageSrc: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-7',
        tabLabel: 'Ongoing Updates and Maintenance',
        title: 'Ongoing Updates and Maintenance',
        description:
            'The field of medicine is continually evolving, and our CME content is regularly updated to reflect the latest medical research and clinical best practices. We offer ongoing support and maintenance to ensure that all CME activities remain current and scientifically valid.',
        imageSrc: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: 'step-8',
        tabLabel: 'Dedicated Project Coordination',
        title: 'Dedicated Project Coordination',
        description:
            'A dedicated project coordinator is assigned to oversee the CME development process from start to finish, ensuring seamless communication and efficient project management. This coordinator acts as the main point of contact for all client interactions and queries',
        imageSrc: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    },
];

const packagesData: PackageTier[] = [
    {
        letter: 'B',
        badgeBg: 'bg-amber-100',
        badgeColor: 'text-amber-700 border-amber-300',
        cardHeaderBg: 'bg-[#d8e3e1]',
        title: 'Basic CME',
        idealFor: 'Small-scale CME programs or single-module courses.',
        included: [
            'Needs assessment and learning gap analysis',
            'Development of 1–2 evidence-based learning modules',
            'Slide decks, handouts, and participant materials',
            'Accreditation guidance and compliance review',
        ],
        turnaroundTime: '2–3 weeks',
    },
    {
        letter: 'S',
        badgeBg: 'bg-purple-100',
        badgeColor: 'text-purple-700 border-purple-300',
        cardHeaderBg: 'bg-[#e5d8eb]',
        title: 'Standard CME',
        idealFor: 'Mid-sized programs with multiple modules or workshops.',
        included: [
            'Comprehensive curriculum design',
            '3–5 CME modules with interactive elements',
            'Case studies, assessments, and evaluation tools',
            'Accreditation support (ACCME/EACCME)',
            'Post-program reporting and feedback analysis',
        ],
        turnaroundTime: '4–6 weeks',
    },
    {
        letter: 'P',
        badgeBg: 'bg-red-100',
        badgeColor: 'text-red-700 border-red-300',
        cardHeaderBg: 'bg-[#ebd8bd]',
        title: 'Premium CME',
        idealFor: 'Large-scale, multi-event, or hybrid CME programs with global reach.',
        included: [
            'End-to-end program design and project management',
            '6+ CME modules, webinars, workshops, and e-learning integration',
            'Full accreditation support and documentation',
            'Learner engagement tracking and outcome analysis',
            'Custom reporting for institutions and sponsors',
        ],
        turnaroundTime: '8–12 weeks',
    },
];

export default function CmeServicesMasterModule() {
    const [activeTab, setActiveTab] = useState<number>(0);
    const currentWorkflowStep = workflowSteps[activeTab];

    return (
        <div className="w-full bg-white space-y-16 py-8">

            {/* ==================== 1. WORKFLOW PROCESS TABS ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                {/* Speed Up Banner */}
                <div className="bg-[#033c2a] text-white py-8 px-6 text-center rounded-sm">
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                        Speed up your Continuing Medical Education (CME) with Pubrica
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-4xl mx-auto leading-relaxed">
                        Pubrica's Continuing Medical Education (CME) services provide end-to-end program development, content creation, accreditation support, and quality assurance, ensuring evidence-based, engaging, and compliant learning experiences that empower healthcare professionals, improve clinical practice, and enhance patient outcomes.
                    </p>
                </div>

                {/* Section Heading */}
                <div className="space-y-3 pt-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        How Do Continuing Medical Education (CME) Development Services Work At Pubrica?
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        At Pubrica, our CME training materials development services are meticulously crafted to ensure high-quality, engaging, and educationally valuable content that meets the continuing professional development needs of healthcare practitioners. Here's a detailed overview of our process flow:
                    </p>
                </div>

                {/* Interactive Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-start">
                    {/* Navigation Items */}
                    <div className="md:col-span-5 space-y-1 border-r border-slate-200 pr-0 md:pr-4">
                        {workflowSteps.map((step, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`w-full text-left text-xs sm:text-sm px-4 py-3 transition-colors flex items-center justify-between border-l-4 ${isActive
                                        ? 'bg-[#dbe6c4] border-[#033c2a] font-bold text-slate-900'
                                        : 'bg-slate-50 border-transparent hover:bg-slate-100 text-slate-700 font-medium'
                                        }`}
                                >
                                    <span>{step.tabLabel}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Card */}
                    <div className="md:col-span-7 space-y-4 bg-white p-2">
                        <div className="rounded-lg overflow-hidden border border-slate-200 aspect-[16/9] shadow-sm">
                            <img
                                src={currentWorkflowStep.imageSrc}
                                alt={currentWorkflowStep.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-lg font-bold text-slate-900">
                                {currentWorkflowStep.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {currentWorkflowStep.description}
                            </p>
                            <button className="bg-[#033c2a] hover:bg-[#02281c] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-colors shadow-sm">
                                REQUEST A QUOTE
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* ==================== 2. COMPLIANCE & STANDARDS ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Our Compliance And Guideline Standards
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        At Pubrica, we ensure that all Continuing Medical Education (CME) programs strictly adhere to global accreditation, ethical, and regulatory standards. Our approach guarantees that educational content is unbiased, evidence-based, and aligned with the highest levels of quality and integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Regulatory Card */}
                    <div className="border border-slate-200 border-l-4 border-l-amber-400 p-6 rounded-r-md bg-white shadow-sm space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">
                            Accreditation &amp; Regulatory Frameworks
                        </h3>
                        <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Alignment with ACCME (Accreditation Council for Continuing Medical Education) standards.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Compliance with EACCME (European Accreditation Council for CME) and international accreditation bodies.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Adherence to national medical councils and regional licensing board requirements.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Ethical Card */}
                    <div className="border border-slate-200 border-l-4 border-l-purple-500 p-6 rounded-r-md bg-white shadow-sm space-y-4">
                        <h3 className="text-sm font-bold text-slate-900">
                            Ethical &amp; Scientific Integrity
                        </h3>
                        <ul className="space-y-3 text-xs text-slate-600 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Development of unbiased, independent CME content, free from commercial influence.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Strict adherence to COPE (Committee on Publication Ethics) guidelines in scientific and educational content.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-slate-900 font-bold">&bull;</span>
                                <span>Transparent disclosure of funding sources, conflicts of interest, and sponsorships.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* ==================== 3. SAMPLE WORK BANNER ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#f2faf5] border border-emerald-100 rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-sm">
                    {/* Image */}
                    <div className="md:col-span-5 rounded-lg overflow-hidden aspect-[4/3] border border-slate-200">
                        <img
                            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800"
                            alt="Medical Research Lab"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details & CTAs */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                Continuing Medical Education Sample Work
                            </h3>
                            <button className="bg-black hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-6 rounded-full transition-colors shadow-sm">
                                Discover More
                            </button>
                        </div>

                        <div className="space-y-3 border-t border-slate-200/80 pt-4">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                Explore our Continuing Medical Education (CME) samples, designed to demonstrate evidence-based curriculum development, high-quality content creation, and alignment with accreditation and regulatory standards, delivering impactful, engaging, and compliant educational experiences for healthcare professionals and institutions.
                            </p>
                            <button className="bg-black hover:bg-slate-800 text-white text-xs font-bold py-2.5 px-6 rounded-full transition-colors shadow-sm">
                                Discover More
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* ==================== 4. CME PACKAGES ==================== */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#033c2a]">
                        Continuing Medical Education (CME) &ndash; Our Packages
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-5xl">
                        At Pubrica, we offer flexible and comprehensive CME packages tailored to meet the needs of healthcare institutions, professional associations, and individual healthcare professionals. Our packages are designed to streamline program development, ensure compliance, and deliver engaging, evidence-based learning experiences.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    {packagesData.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                        >
                            <div>
                                {/* Header */}
                                <div className={`${pkg.cardHeaderBg} p-5 relative flex items-center gap-3`}>
                                    <div
                                        className={`w-9 h-9 rounded-full ${pkg.badgeBg} ${pkg.badgeColor} border font-extrabold flex items-center justify-center text-sm shadow-sm shrink-0`}
                                    >
                                        {pkg.letter}
                                    </div>
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight">
                                        {pkg.title}
                                    </h3>
                                </div>

                                {/* Body */}
                                <div className="p-5 space-y-4">
                                    <div>
                                        <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                                            <span className="text-teal-600">&rarr;</span> Ideal For:
                                        </span>
                                        <p className="text-[11px] text-slate-600 leading-snug mt-0.5">
                                            {pkg.idealFor}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1">
                                            <span className="text-teal-600">&rarr;</span> Included:
                                        </span>
                                        <ul className="space-y-1.5 text-[11px] text-slate-600 list-disc list-inside">
                                            {pkg.included.map((item, iIdx) => (
                                                <li key={iIdx} className="leading-tight">
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Turnaround Time Footer */}
                            <div className="p-5 pt-0">
                                <p className="text-[11px] font-bold text-slate-800 flex items-center gap-1 border-t border-slate-100 pt-3">
                                    <span className="text-teal-600">&rarr;</span> Turnaround Time: {pkg.turnaroundTime}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}