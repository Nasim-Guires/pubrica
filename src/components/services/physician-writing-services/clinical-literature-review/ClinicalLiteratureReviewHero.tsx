"use client";

import React, { useState } from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface ServiceItem {
    id: string;
    title: string;
    details: string[];
}

const servicesData: ServiceItem[] = [
    {
        id: "slr",
        title: "Systematic Literature Review (SLR)",
        details: [
            "Robust process that can be replicated",
            "PRISMA-compliant process",
            "Risk of bias assessment",
            "Meta-analysis (if applicable)",
        ],
    },
    {
        id: "nlr",
        title: "Narrative Literature Review",
        details: [
            "Broad overview of a clinical topic",
            "Expert syntheses of key findings",
            "Good for white papers, background sections, or medical education",
        ],
    },
    {
        id: "sr",
        title: "Scoping Review",
        details: [
            "Mapping key ideas and research gaps",
            "Best for early-phase research or new therapy areas",
        ],
    },
    {
        id: "tlr",
        title: "Targeted Literature Review (TLR)",
        details: [
            "Focused review of subject matter, populations, or outcomes",
            "Supports health economics, value dossiers, and HTA filings",
        ],
    },
    {
        id: "reg",
        title: "Literature Review for Regulatory Submissions",
        details: [
            "Compilation of evidence for an IND, NDA, BLA, 510(k), or CE mark",
            "Aligns with FDA/EMA guidelines and regulatory requirements"
        ],
    },
    {
        id: "ctp",
        title: "Clinical Trial Protocol Support",
        details: [
            "Literature-based background and justification for the trial design",
            "Identify endpoints, comparators, and safety considerations",
        ],
    },
    {
        id: "hta",
        title: "Health Technology Assessment (HTA) Support",
        details: [
            "Literature reviews to support reimbursement and payer submissions",
            "Cost-effectiveness, clinical effectiveness, and real-world evidence",
        ],
    },
    {
        id: "gap",
        title: "Gap Analysis and Competitive Landscape Reviews",
        details: [
            "Identify unmet medical needs",
            "Analyse current therapies and competitor pipelines",
        ],
    },
    {
        id: "early",
        title: "Early Research & Pipeline Support",
        details: [
            "Literature evidence to guide preclinical and Phase I trial planning",
            "Evaluation of novel therapeutic targets or indications",
        ],
    },
];

export default function ClinicalLiteratureReviewHero() {
    // All accordion items closed by default
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-white py-8 text-slate-800">
            <div className="max-w-6xl mx-auto px-4 space-y-12">
                {/* 1. Hero Header */}
                <section className="bg-[#1b3d39] text-white py-10 px-6 text-center rounded-lg shadow-md">
                    <h1 className="text-2xl md:text-3xl font-bold mb-3">
                        Clinical Literature Review for an Evidence-based Medicine
                    </h1>
                    <p className="text-xs md:text-sm text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                        Systematically analyze and synthesize clinical research to support
                        evidence-based decision-making and improve patient care outcomes.
                    </p>
                </section>

                {/* 2. Overview Section */}
                <section className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                        Professional Clinical Literature Review for Evidence-Based Medicine:
                        Interpret Scientific Evidence with Rigor, Relevance, and
                        Reliability
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
                        {/* Left Column Text */}
                        <div className="md:col-span-7 space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
                            <p>
                                At Pubrica, we specialize in providing systematic, high-quality
                                clinical literature reviews to support evidence-based medical
                                decisions, clinical guideline development, clinical trial design,
                                regulatory submissions, and other exploratory research
                                activities.
                            </p>

                            <p>
                                Our services are tailored to meet the needs of physicians,
                                surgeons, healthcare providers, as well as pharmaceutical and
                                medical device companies, by providing reliable, scientifically
                                validated insights through{" "}
                                <a
                                    href="#"
                                    className="text-sky-600 underline hover:text-sky-800"
                                >
                                    systematic review writing
                                </a>{" "}
                                and{" "}
                                <a
                                    href="#"
                                    className="text-sky-600 underline hover:text-sky-800"
                                >
                                    high-quality medical writing
                                </a>
                                .
                            </p>

                            <ul className="space-y-1.5 pl-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>
                                        Synthesizing validated clinical evidence from peer-reviewed
                                        literature
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>
                                        Contributing to clinical practice guidelines, protocols,
                                        and trial designs
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>
                                        Shaping health technology assessments (
                                        <a href="#" className="text-sky-600 underline">
                                            HTA
                                        </a>
                                        ) and regulatory submissions.
                                    </span>
                                </li>
                            </ul>

                            <p className="font-semibold text-slate-800 pt-2">
                                We also support early-stage research by:
                            </p>
                            <ul className="space-y-1.5 pl-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>Investigating unmet medical needs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>Exploring novel therapeutic areas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>
                                        Reviewing existing literature before initiating preclinical
                                        or Phase I clinical trials
                                    </span>
                                </li>
                            </ul>

                            <p className="pt-2">
                                Using Pubrica’s multidisciplinary team consisting of clinical
                                researchers, epidemiologists, biostatisticians, and content
                                experts, we can ensure the{" "}
                                <a href="#" className="text-sky-600 underline">
                                    medical literature review
                                </a>{" "}
                                is accurate, methodologically robust, and clinically valid.
                            </p>

                            <div className="pt-4">
                              <GetFreeQuoteButton/>
                            </div>
                        </div>

                        {/* Right Column Image */}
                        <div className="md:col-span-5 relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                            <Image
                                src="https://pubrica.com/wp-content/uploads/2023/04/clinical-literature-review.jpg"
                                alt="Doctor reviewing clinical literature document"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </section>

                {/* 3. Services Accordion Section */}
                <section className="pt-4">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">
                        Clinical Literature Review Services We Offer
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600 mb-8">
                        Pubrica provides end-to-end support for a{" "}
                        <a href="#" className="text-sky-600 underline">
                            comprehensive literature review
                        </a>{" "}
                        to advance clinical research, product development, and regulatory
                        strategy. Our services include:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        {/* Left Image */}
                        <div className="md:col-span-5 relative h-80 md:h-[450px] rounded-lg overflow-hidden shadow-md">
                            <Image
                                src="https://pubrica.com/wp-content/uploads/2023/04/clinical-literature-review-services.jpg"
                                alt="Person writing notes on literature review paper"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Right Accordion */}
                        <div className="md:col-span-7 divide-y divide-slate-200 border-t border-b border-slate-200">
                            {servicesData.map((item, idx) => {
                                const isOpen = openIndex === idx;

                                return (
                                    <div key={item.id} className="py-3">
                                        <button
                                            onClick={() => toggleAccordion(idx)}
                                            className="w-full flex items-center gap-3 text-left focus:outline-none group"
                                        >
                                            <span className="text-xs text-slate-500 font-bold">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                            <span className="text-xs md:text-sm font-bold text-slate-800 group-hover:text-sky-600 transition">
                                                {item.title}
                                            </span>
                                        </button>

                                        {/* Collapsible Details */}
                                        {isOpen && (
                                            <div className="mt-3 pl-6 space-y-1 text-xs text-slate-600">
                                                <ul className="list-disc pl-4 space-y-1">
                                                    {item.details.map((detail, dIdx) => (
                                                        <li key={dIdx}>{detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}