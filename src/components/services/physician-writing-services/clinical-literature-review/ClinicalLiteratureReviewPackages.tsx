"use client";

import React from "react";
import { ArrowRightCircle } from "lucide-react";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageTier {
    id: string;
    badge: string;
    badgeColor: string;
    badgeBg: string;
    accentBorder: string;
    cardBg: string;
    title: string;
    subtitle: string;
    idealFor: string;
    includes: string[];
    optionalAddOns: string[];
    turnaround: string;
}

const packageData: PackageTier[] = [
    {
        id: "starter",
        badge: "S",
        badgeColor: "text-amber-600",
        badgeBg: "bg-amber-100 border-amber-300",
        accentBorder: "border-[#1e5d63]",
        cardBg: "bg-[#e5eff0]",
        title: "Starter",
        subtitle: "Ideal For First-Time Authors",
        idealFor:
            "Medical students, early-career clinicians, and researchers at the preliminary stage of literature review.",
        includes: [
            "Clinical question framing (PICO)",
            "2-database search (e.g., PubMed, Cochrane)",
            "Title & abstract screening",
            "Narrative synthesis (up to 20 studies)",
            "Reference list (APA/AMA/Harvard)",
        ],
        optionalAddOns: [
            "Protocol registration (e.g., PROSPERO)",
            "PowerPoint summary deck",
            "Journal selection support",
        ],
        turnaround: "7 to 10 working days",
    },
    {
        id: "advanced",
        badge: "A",
        badgeColor: "text-emerald-700",
        badgeBg: "bg-emerald-100 border-emerald-300",
        accentBorder: "border-[#723285]",
        cardBg: "bg-[#eee3f3]",
        title: "Advanced",
        subtitle: "For Mid-Tier Or Indexed Journals",
        idealFor:
            "Practicing physicians, postgraduate students, and PhD candidates conducting in-depth clinical reviews.",
        includes: [
            "Full protocol document",
            "Search across 4–5 databases",
            "Dual-reviewer screening",
            "Full-text analysis",
            "Risk of bias assessment",
            "Thematic synthesis or structured tabulation",
            "PRISMA 2020 flowchart",
        ],
        optionalAddOns: [
            "Statistical meta-analysis",
            "Infographic summary",
            "Journal formatting (targeted)",
        ],
        turnaround: "12 to 15 working days",
    },
    {
        id: "elite",
        badge: "E",
        badgeColor: "text-rose-600",
        badgeBg: "bg-rose-100 border-rose-300",
        accentBorder: "border-[#8a5b28]",
        cardBg: "bg-[#f3e9d8]",
        title: "Elite",
        subtitle: "Comprehensive & Premium",
        idealFor:
            "Hospital research teams, academic institutions, evidence-based guideline developers, and systematic review authors.",
        includes: [
            "Extensive review of 40+ articles across more than five databases, including Cochrane, Web of Science, Embase, and PubMed",
            "Custom protocol design adhering to PRISMA 2020 guidelines",
            "Full search strategy appendix",
            "Risk of bias assessment using tools such as RoB-2 or GRADE",
            "Tabular and narrative synthesis of findings",
            "High-level technical editing and end-to-end support for journal submission",
        ],
        optionalAddOns: [
            "Full manuscript submission service",
            "Conference abstract & poster design",
            "CER integration for medical devices",
        ],
        turnaround: "15 to 20 working days",
    },
];

export default function ClinicalLiteratureReviewPackages() {
    return (
        <section className="w-full bg-white py-6 text-slate-800">
            <div className="max-w-6xl mx-auto px-4 space-y-10">

                {/* Header Section */}
                <div className="text-center space-y-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a2b49]">
                        Clinical Literature Review for Evidence-Based Medicine – Packages
                    </h2>
                    <p className="text-xs md:text-sm text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Pubrica works with flexible, tiered plans to collect and report on a
                        wide range of evidence synthesis needs across academic, clinical, and
                        industry purposes. Each package meets international methodological
                        standards (PRISMA, JBI, Cochrane) while reflecting the project&apos;s
                        scope, depth, and urgency.
                    </p>
                </div>

                {/* 3-Column Pricing / Package Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                    {packageData.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="flex flex-col border border-slate-200 rounded-md overflow-hidden shadow-xs"
                        >
                            {/* Top Card Header */}
                            <div
                                className={`bg-white border-t-4 ${pkg.accentBorder} p-5 text-center flex items-center gap-4`}
                            >
                                {/* Styled Letter Badge */}
                                <div
                                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-black text-xl flex-shrink-0 shadow-inner ${pkg.badgeBg} ${pkg.badgeColor}`}
                                >
                                    {pkg.badge}
                                </div>

                                <div className="text-left">
                                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                                        {pkg.title}
                                    </h3>
                                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-tight">
                                        {pkg.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div
                                className={`flex-1 p-5 ${pkg.cardBg} space-y-5 text-xs text-slate-800 leading-relaxed`}
                            >
                                {/* Ideal For */}
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-slate-900">
                                                Ideal for:
                                            </span>
                                            <p className="text-[11px] text-slate-700 font-medium mt-0.5">
                                                {pkg.idealFor}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Includes */}
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                                        <span className="font-bold text-slate-900">Includes:</span>
                                    </div>
                                    <ul className="pl-6 space-y-1.5 list-disc text-[11px] text-slate-700 font-medium">
                                        {pkg.includes.map((item, idx) => (
                                            <li key={idx} className="leading-tight">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Optional Add-ons */}
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                                        <span className="font-bold text-slate-900">
                                            Optional Add-ons:
                                        </span>
                                    </div>
                                    <ul className="pl-6 space-y-1 list-disc text-[11px] text-slate-700 font-medium">
                                        {pkg.optionalAddOns.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Turnaround */}
                                <div className="pt-2 border-t border-slate-300/60">
                                    <div className="flex items-start gap-2">
                                        <ArrowRightCircle className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-bold text-slate-900">
                                                Turnaround:
                                            </span>
                                            <p className="text-[11px] font-bold text-slate-800">
                                                {pkg.turnaround}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
              <GetFreeQuoteButton/>

            </div>
        </section>
    );
}