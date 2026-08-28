'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';




export interface WorkflowStep {
    stepNumber: string | number;
    title: string;
    description: string;
    iconSrc: string;
    position: "top" | "bottom";
}
export default function WhoWeServeAndProcessLiterature() {
    /* ------------------- DATA ARRAYS ------------------- */


    const whoWeServeCards = [
        {
            id: 1,
            title: 'PhD Scholars & Academic Researchers',
            bullets: [
                'Systematic and narrative literature reviews',
                'Reference sourcing for theses, dissertations, and journal submissions',
                'Support with reviewer comments requiring additional citations',
            ],
            imageUrl: '/images/publication-support/plagiarism-services/PhD-Scholars-and-Doctoral-Candidates.jpg',
        },
        {
            id: 2,
            title: 'Clinical & Healthcare Professionals',
            bullets: [
                'Evidence mapping for treatment protocols',
                'Literature support for case studies, audits, or clinical guidelines',
                'Identification of peer-reviewed clinical outcomes',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Clinical-Healthcare-Professionals.jpg',
        },
        {
            id: 3,
            title: 'Product Development & R&D Teams',
            bullets: [
                'Literature support for nutraceutical, food, pharma, ayurveda, and biotech products',
                'Ingredient intelligence backed by clinical and preclinical studies',
                'Research insights for product positioning and regulatory compliance',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Product-Development-RD-Teams.jpg',
        },
        {
            id: 4,
            title: 'Universities & Institutions',
            bullets: [
                'Citation and literature services for faculty-led research and grant proposals',
                'Support for research centres and ethics submissions',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Universities-Institutions.jpg',
        },
        {
            id: 5,
            title: 'Global Scholars & International Students',
            bullets: [
                'Region-specific literature sourcing (e.g., UK, US, EU, India, Australia)',
                'Citation formatting to match institutional styles (APA, MLA, Vancouver, etc.)',
                'Research support for scholars writing in English as a second language',
            ],
            imageUrl: '/images/physician-writing-services/literature-search-and-citation/Global-Scholars-International-Students.jpg',
        },
    ];

    const heading = "How a Patient Education Content Development Service Works";
    const subheading = "Our Step-by-Step Process";
    const description = (
        <>
            With Pubrica&apos;s patient education content service, our medical experts and{" "}
            <Link href="/services/scientific-writing" className="text-[#0081A7] underline">
                scientific writing
            </Link>{" "}
            team work together to develop clear, accurate, and guideline-compliant educational materials that are tailored to specific patient needs and aligned with healthcare communication standards.
        </>
    );

    const steps: WorkflowStep[] = [
        {
            stepNumber: 1,
            title: "Needs Assessment & Briefing",
            description:
                "We begin by understanding your target patient demographic, health literacy goals, language requirements, and preferred formats (leaflets, digital, video).",
            iconSrc: "/images/icons/Literature-Search.png",
            position: "bottom",
        },
        {
            stepNumber: 2,
            title: "Medical Writing & Simplification",
            description:
                "Our medical writers draft evidence-based content using plain language, optimizing for low health literacy (SMOG/Flesch-Kincaid) without losing clinical accuracy.",
            iconSrc: "/images/icons/reference-and-citation.png",
            position: "top",
        },
        {
            stepNumber: 3,
            title: "Review, Design & Delivery",
            description:
                "Content undergoes clinical accuracy review, visual formatting/illustration, and final quality checks before delivering print- or digital-ready files.",
            iconSrc: "/images/icons/After-sales-support.png",
            position: "bottom",
        },
    ];

    const packages = [
        {
            id: 'starter',
            badgeLetter: 'S',
            badgeBg: 'bg-emerald-100 text-emerald-800 border-emerald-300',
            headerBg: 'bg-[#d8e3df]',
            cardBg: 'bg-[#e2e9e6]',
            title: 'Starter',
            subtitle: 'Basic Citation Support',
            idealFor: 'Short manuscripts, essays, or case reports',
            includes: [
                'Targeted literature search (up to 10 references)',
                'Citation insertion and formatting (APA, Vancouver, etc.)',
                'Reference list compilation',
                'One round of formatting revision',
            ],
            turnaround: '3–4 working days',
            deliverables: '.docx file with citations + formatted reference list',
        },
        {
            id: 'standard',
            badgeLetter: 'S',
            badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
            headerBg: 'bg-[#e1d3e8]',
            cardBg: 'bg-[#e8dce2]',
            title: 'Standard',
            subtitle: 'Structured Literature Review',
            idealFor: 'Journal articles, postgraduate theses',
            includes: [
                'Domain-specific literature search (15–25 recent and relevant sources)',
                'Summary matrix/table of key articles',
                'In-text citation integration and formatting',
                'Reference list creation in the target journal style',
                'Journal guideline alignment',
            ],
            turnaround: '5–7 working days',
            deliverables: 'Summary document + citation-integrated manuscript',
        },
        {
            id: 'advanced',
            badgeLetter: 'A',
            badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
            headerBg: 'bg-[#ebdec8]',
            cardBg: 'bg-[#efe5d4]',
            title: 'Advanced',
            subtitle: 'Systematic/Narrative Review Support',
            idealFor: 'Review articles, PhD literature reviews, grant proposals',
            includes: [
                'Comprehensive multi-database search (PubMed, Scopus, Embase, etc.)',
                'Search protocol documentation (PRISMA, inclusion/exclusion criteria)',
                'Literature synthesis and a thematically organized summary',
                'EndNote/Mendeley reference library (if requested)',
                'Journal-compliant citation formatting',
            ],
            turnaround: '7–10 working days',
            deliverables: 'Structured review summary + search log + citations',
        },
        {
            id: 'premium',
            badgeLetter: 'P',
            badgeBg: 'bg-rose-100 text-rose-800 border-rose-300',
            headerBg: 'bg-[#fad7d7]',
            cardBg: 'bg-[#fbe1e1]',
            title: 'Premium',
            subtitle: 'End-To-End Citation & Journal Preparation',
            idealFor: 'Manuscripts targeting high-impact journals',
            includes: [
                'Full literature search across databases (30+ curated references)',
                'Evidence synthesis linked to manuscript sections',
                'Detailed citation audit and style compliance',
                'Reviewer support (reference cross-verification)',
                'Plagiarism screening report (Turnitin/iThenticate)',
                'Reference file delivery (Word + RIS format)',
            ],
            turnaround: '10–12 working days',
            deliverables: 'All formatted files + reference manager library + report',
        },
    ];

   const valueDeliverables = [
  {
    id: 1,
    title: 'A screened list of 50 published articles from validated databases',
    iconUrl: '/images/icons/data-base.png',
  },
  {
    id: 2,
    title: 'Best-suited subject area experts to help identify the most relevant literature for your study',
    iconUrl: '/images/icons/literature-for-your-study.png',
  },
  {
    id: 3,
    title: 'Expert views regarding the novelty of your research from published authors with advanced degrees',
    iconUrl: '/images/icons/published-authors-.png',
  },
  {
    id: 4,
    title: 'Supporting rationale by experts on how the curated literature will strengthen your research',
    iconUrl: '/images/icons/Supporting-rationale.png',
  },
];

    return (
        <div className="w-full bg-white text-gray-800 font-sans antialiased overflow-x-hidden">

            {/* ---------------- SECTION 1: WHO WE SERVE ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3c36] mb-3">
                    Who We Serve
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-5xl leading-relaxed">
                    At Pubrica, we provide literature search and citation services that are trusted by a range of clients across academia, industry, and health sectors. Whether you are developing a thesis, launching a product, or validating an ingredient claim, we provide precise and evidence-based support specific to your needs.
                </p>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {whoWeServeCards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative h-64 sm:h-72 rounded-lg overflow-hidden cursor-pointer bg-black shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image & Default Title Overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-5">
                                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Hover Overlay - Solid Black BG with White Text */}
                            <div className="absolute inset-0 bg-black p-5 flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto overflow-y-auto">
                                <h3 className="text-base sm:text-lg font-bold text-white mb-3 leading-snug">
                                    {card.title}
                                </h3>
                                <ul className="list-disc pl-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-200">
                                    {card.bullets.map((bullet, idx) => (
                                        <li key={idx} className="leading-relaxed">
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------------- SECTION 2: HOW IT WORKS ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
                    How a Patient Education Content Development Service Works
                </h2>

                <h3 className="text-lg md:text-xl font-medium text-[#2C4951] mb-4">
                    {subheading}
                </h3>

                {description && (
                    <p className="max-w-4xl mx-auto text-[#4B5563] text-xs md:text-sm leading-relaxed mb-12 md:mb-16">
                        {description}
                    </p>
                )}

                {/* ============================================================ */}
                {/* MOBILE LAYOUT (< md screens): Vertical Alternating Timeline */}
                {/* ============================================================ */}
                <div className="flex md:hidden flex-col items-center w-full max-w-sm mx-auto space-y-6">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className="relative flex items-center w-full min-h-[160px]"
                            >
                                {/* Connecting Vertical Line */}
                                {index !== steps.length - 1 && (
                                    <div
                                        className={`absolute top-8 bottom-0 w-[2px] bg-[#0081A7] z-0 ${isEven ? "left-4" : "right-4"
                                            }`}
                                    />
                                )}

                                {/* Step Number Badge */}
                                <div
                                    className={`absolute z-10 w-9 h-9 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm shadow-sm ${isEven ? "left-0" : "right-0"
                                        }`}
                                >
                                    {step.stepNumber}
                                </div>

                                {/* Step Card Container */}
                                <div
                                    className={`w-full flex ${isEven ? "pl-10 pr-2" : "pr-10 pl-2"
                                        }`}
                                >
                                    <div className="bg-[#F8F9FA] border border-[#E2E8F0] rounded-sm shadow-xs p-4 flex flex-col items-center text-center w-full z-10">
                                        <div className="w-10 h-10 relative mb-3 flex items-center justify-center">
                                            <Image
                                                src={step.iconSrc}
                                                alt={step.title}
                                                width={36}
                                                height={36}
                                                className="object-contain"
                                            />
                                        </div>

                                        <h4 className="font-bold text-[#0F172A] text-xs mb-2 leading-snug">
                                            {step.title}
                                        </h4>

                                        <p className="text-[#64748B] text-[11px] leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================ */}
                {/* DESKTOP LAYOUT (>= md screens): Dynamic Flow Layout          */}
                {/* ============================================================ */}
                <div
                    className="hidden md:grid gap-2 lg:gap-4 items-stretch justify-center w-full max-w-7xl mx-auto relative my-8"
                    style={{
                        gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))`,
                    }}
                >
                    {steps.map((step, index) => {
                        const isTop = step.position === "top";

                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-between group w-full relative min-h-[500px]"
                            >
                                {/* UPPER SECTION */}
                                <div className="w-full flex flex-col items-center justify-end flex-1 pb-0">
                                    {!isTop ? (
                                        /* Card placed at Top */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={step.iconSrc}
                                                    alt={step.title}
                                                    width={38}
                                                    height={38}
                                                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                />
                                            </div>

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Badge + Vertical Connector Line */
                                        <div className="flex flex-col items-center justify-end w-full">
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mb-3">
                                                {step.stepNumber}
                                            </div>
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                        </div>
                                    )}
                                </div>

                                {/* CENTER HORIZONTAL LINE SEGMENT */}
                                <div className="w-full h-[8px] relative my-0 shrink-0">
                                    <div
                                        className={`h-full bg-[#0081A7] w-full transition-colors duration-300 group-hover:bg-black ${index === 0
                                            ? "rounded-l-sm"
                                            : index === steps.length - 1
                                                ? "rounded-r-sm"
                                                : ""
                                            }`}
                                    />
                                </div>

                                {/* LOWER SECTION */}
                                <div className="w-full flex flex-col items-center justify-start flex-1 pt-0">
                                    {isTop ? (
                                        /* Card placed at Bottom */
                                        <div className="bg-[#F8F9FA] border border-[#E2E8F0] shadow-xs p-3 lg:p-4 flex flex-col items-center text-center w-full h-full justify-start z-20 transition-all duration-300 group-hover:bg-black group-hover:border-black rounded-xs">
                                            <div className="w-10 h-10 lg:w-11 lg:h-11 relative mb-3 flex items-center justify-center shrink-0">
                                                <Image
                                                    src={step.iconSrc}
                                                    alt={step.title}
                                                    width={38}
                                                    height={38}
                                                    className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                                />
                                            </div>

                                            <h4 className="font-bold text-[#0F172A] text-xs lg:text-sm mb-2 leading-snug transition-colors duration-300 group-hover:text-white">
                                                {step.title}
                                            </h4>

                                            <p className="text-[#64748B] text-[11px] lg:text-xs leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                                                {step.description}
                                            </p>
                                        </div>
                                    ) : (
                                        /* Vertical Connector Line + Badge */
                                        <div className="flex flex-col items-center justify-start w-full">
                                            <div className="w-[2px] h-10 bg-[#0081A7] transition-colors duration-300 group-hover:bg-black" />
                                            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#0081A7] text-white font-bold flex items-center justify-center text-sm lg:text-base shadow-sm z-20 transition-colors duration-300 group-hover:bg-black shrink-0 mt-3">
                                                {step.stepNumber}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            {/* ---------------- SECTION 3: GREEN BANNER CTA ---------------- */}
            <section className="bg-[#0b3c2d] text-white py-8 sm:py-6 px-4 sm:px-6 lg:px-8 my-8">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

                    <div className="flex-shrink-0">
                        <Image
                            src="/images/icons/Satisfaction_Guarantee.webp"
                            alt="100% Satisfaction Guarantee"
                            width={112}
                            height={112}
                            className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                        />
                    </div>
                    <div className="flex-1 space-y-2">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            Speed up your Literature Review and Citation with Pubrica
                        </h2>
                        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Gain access to your dedicated literature and citation expert, who will systematically identify relevant sources and ensure precise referencing aligned with your research scope.
                        </p>
                    </div>

                    <div className="w-full md:w-auto">
                        <GetFreeQuoteButton />
                    </div>
                </div>
            </section>



            {/* ---------------- SECTION 5: WHAT YOU GET ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#143234] text-center mb-8 sm:mb-10">
                    What You Get with Pubrica&apos;s Scientific Literature Search Service
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {valueDeliverables.map((item) => (
                        <div
                            key={item.id}
                            className="group p-5 sm:p-6 rounded-xl border border-gray-200 bg-slate-50 hover:bg-black hover:text-white transition-all duration-300 flex items-start gap-4 shadow-sm hover:shadow-lg cursor-pointer"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 bg-white group-hover:bg-slate-800 rounded-lg border border-gray-200 flex items-center justify-center p-2 transition-colors relative">
                                <Image
                                    src={item.iconUrl}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="object-contain w-full h-full group-hover:brightness-0 group-hover:invert transition-all"
                                />
                            </div>

                            <p className="text-xs sm:text-sm font-medium text-gray-800 group-hover:text-gray-100 transition-colors leading-relaxed pt-1">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            {/* ---------------- SECTION 6: SAMPLE WORK ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-6">
                <div className="bg-[#f0faf6] rounded-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-emerald-100">
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-xs sm:max-w-sm aspect-[4/5] rounded-xl overflow-hidden shadow-inner">
                            <Image
                                src="/images/physician-writing-services/literature-search-and-citation/Literature-Search-and-Citation-Service-Sample-Work.webp"
                                alt="Literature Search and Citation Service Sample Work"
                                fill
                                className="object-cover"
                                sizes="320px"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-[#143234] mb-3">
                                Literature Search and Citation Service Sample Work
                            </h2>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium px-8 py-2.5 rounded-full text-sm transition-colors shadow">
                                Discover More
                            </Link>
                        </div>

                        <div className="pt-2">
                            <h3 className="text-lg sm:text-xl font-bold text-[#143234] mb-2">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Check out our literature search and citation samples created specifically to show domain relevance, accurate referencing styles, and adherence to journal submission formats.
                            </p>
                            <Link href="/insights/sample-work" className="inline-block bg-black hover:bg-gray-800 text-white font-medium px-8 py-2.5 rounded-full text-sm transition-colors shadow">
                                Discover More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* ---------------- SECTION 4: PACKAGES SECTION ---------------- */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#143234] mb-2">
                        Literature Search and Citation Packages
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto">
                        Strengthen your manuscript with evidence-based literature and error-free citations tailored to your research scope and target journal.
                    </p>
                </div>

                {/* Responsive Grid for Packages (Stacks cleanly on Mobile) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`rounded-t-xl overflow-hidden flex flex-col border border-gray-200 shadow-sm transition-transform duration-300 hover:-translate-y-1 ${pkg.cardBg}`}
                        >
                            {/* Header Box */}
                            <div className={`p-5 text-center ${pkg.headerBg} border-b border-gray-200/50`}>
                                <div className={`w-12 h-12 rounded-full border-2 ${pkg.badgeBg} flex items-center justify-center font-bold text-xl mx-auto mb-3 shadow-sm`}>
                                    {pkg.badgeLetter}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{pkg.title}</h3>
                                <p className="text-xs text-gray-600 font-medium mt-1">{pkg.subtitle}</p>
                            </div>

                            {/* Package Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-xs sm:text-sm text-gray-700">

                                {/* Ideal For */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Ideal for:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600 leading-tight">{pkg.idealFor}</p>
                                </div>

                                {/* Includes List */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Includes:</span>
                                    </div>
                                    <ul className="pl-4 space-y-1.5 text-gray-600">
                                        {pkg.includes.map((item, i) => (
                                            <li key={i} className="leading-snug">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Turnaround */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Turnaround:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600">{pkg.turnaround}</p>
                                </div>

                                {/* Deliverables */}
                                <div>
                                    <div className="flex items-start gap-1.5 font-bold text-gray-900 mb-1">
                                        <span>➔</span>
                                        <span>Deliverables:</span>
                                    </div>
                                    <p className="pl-4 text-gray-600 leading-tight">{pkg.deliverables}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Pricing Banner */}
                <div className="mt-8 bg-[#c00000] text-white text-center py-3 rounded-md font-bold text-sm sm:text-base shadow">
                    Starts From $ 15 / Search
                </div>
            </section>
        </div>
    );
}