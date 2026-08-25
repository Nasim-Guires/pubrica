"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

// Compliance Standards Data with Images and Links
const complianceStandards = [
    {
        title: "Committee on Publication Ethics",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-1.png",
        href: "https://publicationethics.org/",
    },
    {
        title: "Consolidated Standards of Reporting Trials",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-2.png",
        href: "https://www.consort-spirit.org/",
    },
    {
        title: "Strengthening the Reporting of Observational Studies in Epidemiology",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-3.png",
        href: "https://www.strobe-statement.org/",
    },
    {
        title: "Health Insurance Portability and Accountability Act",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-4.png",
        href: "https://www.hhs.gov/hipaa/for-professionals/index.html",
    },
    {
        title: "Case Report Guidelines",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-5.png",
        href: "https://www.care-statement.org/",
    },
    {
        title: "International Committee of Medical Journal Editors",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-6.png",
        href: "https://www.icmje.org/",
    },
    {
        title: "Preferred Reporting Items for Systematic Reviews",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-7.png",
        href: "https://www.prisma-statement.org/",
    },
    {
        title: "Transparent Reporting of Evaluations with Nonrandomized Designs",
        imageSrc:
            "/images/physician-writing-services/physician-manuscript/image-8.png",
        href: "https://researchonline.lshtm.ac.uk/id/eprint/2305249/1/pone.0137666.s004.pdf",
    },
];

// Service Packages Data styled to match the exact card design
const packagesData = [
    {
        icon: "", // Add icon path here e.g. "/icons/basic-b.svg"
        badgeLetter: "B",
        title: "Basic",
        subtitle: "For Early Discovery & Feasibility",
        idealFor:
            "Early-career physicians and postgraduate medical students (MD/MS/DM/MCh) preparing their first journal submission or converting thesis data into a short communication or case report.",
        includes: [
            "Structuring the manuscript as per the journal format",
            "Writing standard IMRaD sections (Introduction, Methods, Results, Discussion)",
            "Referencing using Vancouver or AMA style",
            "Plagiarism check report",
            "Journal formatting (1 target journal)",
        ],
        addOns: [
            "Journal selection support",
            "Statistical review and data validation",
            "Clinical image formatting (X-ray, MRI, histopathology)",
        ],
        turnaround: "7–10 business days",
        cardBgColor: "#cbd8d6",
        titleColor: "#004b5a",
    },
    {
        icon: "", // Add icon path here e.g. "/icons/advanced-a.svg"
        badgeLetter: "A",
        title: "Advanced",
        subtitle: "For Validation & Strategy Development",
        idealFor:
            "Practicing physicians submitting original clinical research, pilot studies, or observational studies in Scopus-indexed journals.",
        includes: [
            "All features of the BASIC package",
            "Extensive literature review (5-year scope)",
            "Detailed Methods and statistical results section",
            "2 rounds of peer-level scientific editing",
            "Cover letter preparation",
            "Journal submission checklist",
        ],
        addOns: [
            "Ethical clearance documentation drafting",
            "Graphical abstract design",
            "Pre-submission peer review by a senior consultant (MBBS/MD/PhD)",
        ],
        turnaround: "10–15 business days",
        cardBgColor: "#d8c4e2",
        titleColor: "#6b2d82",
    },
    {
        icon: "", // Add icon path here e.g. "/icons/premium-p.svg"
        badgeLetter: "P",
        title: "Premium",
        subtitle: "For Regulatory & Market-Ready Preparation",
        idealFor:
            "Senior consultants, hospital-based researchers, or academic faculty targeting PubMed, Web of Science, or high-impact journals with complex datasets or interventional studies.",
        includes: [
            "All features of the ADVANCED package",
            "Full statistical analysis with output files",
            "Manuscript alignment with EQUATOR guidelines (e.g., STROBE, CONSORT)",
            "Up to 3 journal-specific formatting iterations",
            "Response-to-reviewer support (1 round)",
            "End-to-end submission assistance via journal portal",
        ],
        addOns: [
            "Medical illustrations or surgical flowcharts",
            "CME/CPE slide deck from the manuscript",
            "Journal re-submission support post-rejection",
            "Language polishing by native editors (ENL)",
        ],
        turnaround: "15–20 business days",
        cardBgColor: "#d5bc8d",
        titleColor: "#805826",
    },
];

export default function PhysicianManuscriptPackagesSection() {
    return (
        <div className="w-full bg-white text-slate-800 font-sans">
            {/* 1. Compliance and Guideline Standards Grid */}
            <section className="py-14 bg-[#f8fafc] border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] text-center mb-10">
                        Our Compliance and Guideline Standards
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceStandards.map((item, idx) => (
                            <Link
                                key={idx}
                                href={item.href}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center justify-between text-center min-h-[190px] group cursor-pointer"
                            >
                                <div className="flex-1 flex items-center justify-center w-full mb-3">
                                    <img
                                        src={item.imageSrc}
                                        alt={item.title}
                                        className="max-h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                                    />
                                </div>
                                <p className="text-[11px] font-medium text-[#1e40af] leading-tight max-w-[200px]">
                                    {item.title}
                                </p>
                            </Link>
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
                                    Explore our physician manuscript samples, crafted for clinical
                                    precision, scientific rigor, and ready submission to
                                    peer-reviewed medical journals.
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
            <section className="py-16 px-4 md:px-8 bg-white w-full text-left">
                {/* Section Heading */}
                <div className="max-w-7xl mx-auto mb-10 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0b3b2c] mb-3">
                        Physician Manuscript Writing Packages
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-5xl">
                        Pubrica&apos;s physician-focused manuscript writing solutions ensure
                        structured, evidence-based, and journal-compliant documents
                        designed for clinical researchers, consultants, and faculty members.
                        We offer three tiers of service to match your publishing goals.
                    </p>
                </div>

                {/* Pricing Tier Grid */}
                <div className="relative max-w-7xl mx-auto pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                        {packagesData.map((pkg, index) => (
                            <div
                                key={index}
                                className="flex flex-col rounded-xl overflow-hidden shadow-md border border-gray-200 transition-all hover:shadow-lg"
                                style={{ backgroundColor: pkg.cardBgColor }}
                            >
                                {/* White Header Bar */}
                                <div className="bg-white p-4 flex items-center gap-3 border-b border-gray-100 min-h-[85px]">
                                    <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center">
                                        {pkg.icon ? (
                                            <Image
                                                src={pkg.icon}
                                                alt={pkg.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        ) : (
                                            /* Placeholder badge fallback when icon image path is not provided */
                                            <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center font-bold text-sm text-gray-700">
                                                {pkg.badgeLetter}
                                            </div>
                                        )}
                                    </div>
                                    <div>
                                        <h3
                                            className="font-bold text-base md:text-lg leading-tight"
                                            style={{ color: pkg.titleColor }}
                                        >
                                            {pkg.title}
                                        </h3>
                                        {pkg.subtitle && (
                                            <p className="text-xs text-gray-500 font-medium leading-tight mt-0.5">
                                                {pkg.subtitle}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Package Content */}
                                <div className="p-5 flex flex-col flex-grow text-gray-900 text-xs md:text-sm">
                                    {/* Ideal For */}
                                    <div className="mb-4">
                                        <div className="font-bold mb-1 flex items-start gap-1.5 text-gray-900">
                                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                                                ➔
                                            </span>
                                            <span>
                                                Ideal For:{" "}
                                                <span className="font-normal">{pkg.idealFor}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Services / What's Included */}
                                    <div className="mb-4 flex-grow">
                                        <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                                            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                                                ➔
                                            </span>
                                            <span>Services Included:</span>
                                        </div>
                                        <ul className="pl-6 space-y-2 list-disc marker:text-gray-800">
                                            {pkg.includes.map((item, i) => (
                                                <li key={i} className="leading-snug text-gray-900">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Optional Add-ons */}
                                    {pkg.addOns && pkg.addOns.length > 0 && (
                                        <div className="mb-4">
                                            <div className="font-bold mb-2 flex items-center gap-1.5 text-gray-900">
                                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0">
                                                    ➔
                                                </span>
                                                <span>Optional Add-ons:</span>
                                            </div>
                                            <ul className="pl-6 space-y-2 list-disc marker:text-gray-800">
                                                {pkg.addOns.map((addon, i) => (
                                                    <li key={i} className="leading-snug text-gray-900">
                                                        {addon}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Turnaround Time */}
                                    {pkg.turnaround && (
                                        <div className="pt-3 border-t border-black/10">
                                            <div className="font-bold flex items-start gap-1.5">
                                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                                                    ➔
                                                </span>
                                                <span>
                                                    Turnaround Time:{" "}
                                                    <span className="font-normal">{pkg.turnaround}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating Centered CTA Button */}
                    <div className="mt-10 text-center">
                        <GetFreeQuoteButton />
                    </div>
                </div>
            </section>
        </div>
    );
}