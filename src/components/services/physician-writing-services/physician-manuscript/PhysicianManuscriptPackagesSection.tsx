import React from 'react';
import Link from 'next/link';
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton';

// Compliance Standards Data
const complianceStandards = [
    {
        code: "COPE",
        title: "Committee on Publication Ethics",
        color: "text-slate-700"
    },
    {
        code: "SPIRIT / CONSORT",
        title: "Consolidated Standards of Reporting Trials",
        color: "text-sky-800"
    },
    {
        code: "STROBE",
        title: "Strengthening the Reporting of Observational Studies in Epidemiology",
        color: "text-rose-700"
    },
    {
        code: "HIPAA",
        title: "Health Insurance Portability and Accountability Act",
        color: "text-blue-900"
    },
    {
        code: "CARE",
        title: "Case Report Guidelines",
        color: "text-amber-800"
    },
    {
        code: "ICMJE",
        title: "International Committee of Medical Journal Editors",
        color: "text-blue-700"
    },
    {
        code: "PRISMA",
        title: "Preferred Reporting Items for Systematic Reviews",
        color: "text-emerald-700"
    },
    {
        code: "TREND",
        title: "Transparent Reporting of Evaluations with Nonrandomized Designs",
        color: "text-teal-800"
    }
];

// Service Packages Data
const packagesData = [
    {
        badgeLetter: "B",
        badgeBg: "bg-amber-100 text-amber-700 border-amber-300",
        name: "Basic",
        headerBg: "bg-[#0083a8]",
        cardBg: "bg-[#d8e3e5]",
        idealFor: "Early-career physicians and postgraduate medical students (MD/MS/DM/MCh) preparing their first journal submission or converting thesis data into a short communication or case report.",
        includes: [
            "Structuring the manuscript as per the journal format",
            "Writing standard IMRaD sections (Introduction, Methods, Results, Discussion)",
            "Referencing using Vancouver or AMA style",
            "Plagiarism check report",
            "Journal formatting (1 target journal)"
        ],
        addOns: [
            "Journal selection support",
            "Statistical review and data validation",
            "Clinical image formatting (X-ray, MRI, histopathology)"
        ],
        turnaround: "7–10 business days"
    },
    {
        badgeLetter: "A",
        badgeBg: "bg-purple-100 text-purple-700 border-purple-300",
        name: "Advanced",
        headerBg: "bg-[#5a86a0]",
        cardBg: "bg-[#e5d8ea]",
        idealFor: "Practicing physicians submitting original clinical research, pilot studies, or observational studies in Scopus-indexed journals.",
        includes: [
            "All features of the BASIC package",
            "Extensive literature review (5-year scope)",
            "Detailed Methods and statistical results section",
            "2 rounds of peer-level scientific editing",
            "Cover letter preparation",
            "Journal submission checklist"
        ],
        addOns: [
            "Ethical clearance documentation drafting",
            "Graphical abstract design",
            "Pre-submission peer review by a senior consultant (MBBS/MD/PhD)"
        ],
        turnaround: "10–15 business days"
    },
    {
        badgeLetter: "P",
        badgeBg: "bg-rose-100 text-rose-700 border-rose-300",
        name: "Premium",
        headerBg: "bg-[#3e5f6e]",
        cardBg: "bg-[#e8dbbf]",
        idealFor: "Senior consultants, hospital-based researchers, or academic faculty targeting PubMed, Web of Science, or high-impact journals with complex datasets or interventional studies.",
        includes: [
            "All features of the ADVANCED package",
            "Full statistical analysis with output files",
            "Manuscript alignment with EQUATOR guidelines (e.g., STROBE, CONSORT)",
            "Up to 3 journal-specific formatting iterations",
            "Response-to-reviewer support (1 round)",
            "End-to-end submission assistance via journal portal"
        ],
        addOns: [
            "Medical illustrations or surgical flowcharts",
            "CME/CPE slide deck from the manuscript",
            "Journal re-submission support post-rejection",
            "Language polishing by native editors (ENL)"
        ],
        turnaround: "15–20 business days"
    }
];

export default function PhysicianManuscriptPackagesSection() {
    return (
        <div className="w-full bg-white text-slate-800">

            {/* 1. Compliance and Guideline Standards Grid */}
            <section className="py-14 bg-[#f8fafc] border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] text-center mb-10">
                        Our Compliance and Guideline Standards
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceStandards.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center min-h-[140px]"
                            >
                                <span className={`font-black text-xl sm:text-2xl tracking-wide mb-3 ${item.color}`}>
                                    {item.code}
                                </span>
                                <p className="text-xs text-gray-600 leading-snug">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Sample Work & Report Download Section */}
            <section className="py-12 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#eff8f4] border border-[#d2ebd9] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                        {/* Left Image Box */}
                        <div className="w-full md:w-1/3 flex justify-center shrink-0">
                            <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md max-w-[260px]">
                                <img
                                    src="/images/physician-writing-services/physician-manuscript/Physician-Manuscript-Service-Sample-Work.jpg"
                                    alt="Doctor writing clinical manuscript notes"
                                    className="w-full h-56 object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Call-To-Actions */}
                        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                    Physician Manuscript Service Sample Work
                                </h3>
                                <Link
                                    href="/samples"
                                    className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold px-8 py-2.5 rounded-full transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>

                            <div className="pt-2 border-t border-gray-200/60">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                                    Download the full Report Now
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 max-w-xl leading-relaxed">
                                    Explore our physician manuscript samples, crafted for clinical precision, scientific rigor, and ready submission to peer-reviewed medical journals.
                                </p>
                                <Link
                                    href="/download-report"
                                    className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold px-8 py-2.5 rounded-full transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Physician Manuscript Writing Packages */}
            <section className="py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Heading */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] mb-3">
                            Physician Manuscript Writing Packages
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                            Pubrica's physician-focused manuscript writing solutions ensure structured, evidence-based, and journal-compliant documents designed for clinical researchers, consultants, and faculty members. We offer three tiers of service to match your publishing goals.
                        </p>
                    </div>

                    {/* Pricing Tier Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {packagesData.map((pkg, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                            >
                                {/* Header Banner */}
                                <div className="bg-white p-5 border-b border-gray-200 flex items-center justify-center gap-3">
                                    <span className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm ${pkg.badgeBg}`}>
                                        {pkg.badgeLetter}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {pkg.name}
                                    </h3>
                                </div>

                                {/* Package Details Body */}
                                <div className={`${pkg.cardBg} p-6 flex-1 flex flex-col justify-between text-xs sm:text-sm text-gray-800 space-y-6`}>
                                    <div className="space-y-5">
                                        {/* Ideal For */}
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1 flex items-center gap-1.5">
                                                <span className="text-gray-900 font-black">➔</span> Ideal for:
                                            </p>
                                            <p className="text-gray-700 leading-relaxed pl-4">
                                                {pkg.idealFor}
                                            </p>
                                        </div>

                                        {/* Includes */}
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                                                <span className="text-gray-900 font-black">➔</span> Includes:
                                            </p>
                                            <ul className="space-y-2 pl-4">
                                                {pkg.includes.map((item, i) => (
                                                    <li key={i} className="text-gray-700 leading-relaxed">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Optional Add-ons */}
                                        <div>
                                            <p className="font-bold text-gray-900 mb-1.5 flex items-center gap-1.5">
                                                <span className="text-gray-900 font-black">➔</span> Optional Add-ons:
                                            </p>
                                            <ul className="space-y-2 pl-4">
                                                {pkg.addOns.map((addon, i) => (
                                                    <li key={i} className="text-gray-700 leading-relaxed">
                                                        {addon}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Turnaround */}
                                    <div className="pt-4 border-t border-gray-400/30">
                                        <p className="font-bold text-gray-900 flex items-center gap-1.5">
                                            <span className="text-gray-900 font-black">➔</span> Turnaround:
                                        </p>
                                        <p className="font-semibold text-gray-800 pl-4 mt-0.5">
                                            {pkg.turnaround}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Fixed Sticky CTA */}
                    <div className="mt-10 text-center">
                       <GetFreeQuoteButton/>
                    </div>
                </div>
            </section>

        </div>
    );
}