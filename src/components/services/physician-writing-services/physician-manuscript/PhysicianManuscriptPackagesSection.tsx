"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";
import CommonPackages, { PackageItem } from "@/components/common/CommonPackages";

// Compliance Standards Data with Images and Links
const complianceStandards = [
    {
        title: "Committee on Publication Ethics",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-1.png",
        href: "https://publicationethics.org/"
    },
    {
        title: "Consolidated Standards of Reporting Trials",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-2.png",
        href: "https://www.consort-statement.org/"
    },
    {
        title: "Strengthening the Reporting of Observational Studies in Epidemiology",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-3.png",
        href: "https://www.strobe-statement.org/"
    },
    {
        title: "Health Insurance Portability and Accountability Act",
        imageSrc: "https://pubrica.com/wp-content/uploads/2025/06/HIPAA-COMPILANCE-.png",
        href: "https://www.hhs.gov/hipaa/"
    },
    {
        title: "Case Report Guidelines",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-5.png",
        href: "https://www.care-statement.org/"
    },
    {
        title: "International Committee of Medical Journal Editors",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-6.png",
        href: "https://www.icmje.org/"
    },
    {
        title: "Preferred Reporting Items for Systematic Reviews",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-7.png",
        href: "https://www.prisma-statement.org/"
    },
    {
        title: "Transparent Reporting of Evaluations with Nonrandomized Designs",
        imageSrc: "/images/physician-writing-services/physician-manuscript/image-8.png",
        href: "https://www.cdc.gov/trendstatement/"
    }
];

// Service Packages Data styled to match the exact card design
const packagesData: PackageItem[] = [
    {
        icon: "/images/icons/Basic.webp",
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
        icon: "/images/icons/advanced-a.webp",
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
        icon: "/images/icons/premium-p.png",
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
            <section className="py-6 bg-[#f8fafc] border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3832] text-center mb-10">
                        Our Compliance and Guideline Standards
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {complianceStandards.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
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
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/physician-writing-services/physician-manuscript/Physician-Manuscript-Service-Sample-Work.jpg",
                    alt: "Doctor writing clinical manuscript notes",
                    width: 600,
                    height: 400,
                }}
                sections={[
                    {
                        heading: "Physician Manuscript Service Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our physician manuscript samples, crafted for clinical precision, scientific rigor, and ready submission to peer-reviewed medical journals.",
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

            {/* 3. Physician Manuscript Writing Packages */}
            <section className="py-8 px-4 md:px-8 bg-white w-full text-left">
                {/* Section Heading */}
                {/* Pricing Tier Grid */}
                <div className="relative max-w-7xl mx-auto pb-1">
                    <CommonPackages
                        title="Physician Manuscript Writing Packages"
                        subtitle=""
                        description="Pubrica’s physician-focused manuscript writing solutions ensure structured, evidence-based, and journal-compliant documents designed for clinical researchers, consultants, and faculty members. We offer three tiers of service to match your publishing goals."
                        packages={packagesData}
                    />

                    {/* Floating Centered CTA Button */}
                    <div className="mt-0 text-center">
                        <GetFreeQuoteButton />
                    </div>
                </div>
            </section>
        </div>
    );
}