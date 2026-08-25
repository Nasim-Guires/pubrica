"use client";

import React from "react";
import Image from "next/image";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";

interface PackageItem {
    icon?: string;
    badge?: string;
    title: string;
    subtitle?: string;
    idealFor: string;
    includes: string[];
    turnaround?: string;
    bestFor?: string;
    cardBgColor?: string;
    titleColor?: string;
}

const packagesData: PackageItem[] = [
    {
        icon: "/images/icons/S.png", // Fallback to badge if image fails or path not available
        badge: "S",
        title: "Starter",
        subtitle: "Foundation Training Content",
        idealFor:
            "Internal team education, departmental sessions, or pilot CME programs.",
        includes: [
            "1 specialty-specific slide deck (up to 20 slides)",
            "1 clinical case study or scenario",
            "1 evidence summary handout or quick-reference guide",
            "Visual design aligned with branding",
            "Based on current guidelines (AHA, NICE, ADA, etc.)",
        ],
        cardBgColor: "#cbd8d6",
        titleColor: "#004b5a",
    },
    {
        icon: "/images/icons/pa-icons-.png",
        badge: "P",
        title: "Professional",
        subtitle: "CME & Workshop-Ready",
        idealFor:
            "CME-accredited programs, workshops, and physician engagement initiatives.",
        includes: [
            "2–3 custom slide decks (up to 30 slides each)",
            "Clinical case series with discussion points",
            "Assessment questions (pre/post-tests or MCQs)",
            "CME learning objectives and outcomes",
            "CME/CPD alignment (ACCME, EACCME format)",
            "Supporting references and reading list",
        ],
        cardBgColor: "#d8c4e2",
        titleColor: "#6b2d82",
    },
    {
        icon: "/images/icons/pa-icons-.png",
        badge: "P",
        title: "Premium",
        subtitle: "Full Training Program Development",
        idealFor:
            "Hospitals, pharmaceutical/medtech companies, or academic institutions building structured physician education programs.",
        includes: [
            "4–6 interactive slide decks with speaker notes",
            "Full set of case studies and simulations",
            "Facilitator guide and instructor toolkit",
            "Participant workbook or training manual",
            "Assessment tools + answer keys",
            "CME accreditation support documentation",
            "Custom branding and LMS-ready formats (SCORM/xAPI)",
        ],
        cardBgColor: "#d5bc8d",
        titleColor: "#805826",
    },
];

export default function PhysicianTrainingPackage() {
    // Dynamically set grid columns depending on how many packages are passed
    const getGridColsClass = (count: number) => {
        if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
        if (count === 3) return "grid-cols-1 md:grid-cols-3";
        if (count === 2) return "grid-cols-1 md:grid-cols-2";
        return "grid-cols-1";
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-800 pb-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
                {/* Top Feature / Banner Section */}
                <section className="bg-[#f2faf5] rounded-xl p-6 md:p-8 border border-slate-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        {/* Image Box */}
                        <div className="md:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded-lg shadow">
                            <Image
                                src="/images/physician-writing-services/physician-training/Physician-Training-Content-Development-Sample-Work-Discover-More.jpg"
                                alt="Physician Training Session"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Banner Actions */}
                        <div className="md:col-span-7 flex flex-col justify-center space-y-6 text-center">
                            {/* Box 1 */}
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3">
                                    Physician Training Content Development Sample Work
                                </h3>
                                <button className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-sm transition">
                                    Discover More
                                </button>
                            </div>

                            {/* Box 2 */}
                            <div className="pt-2 border-t border-slate-200/60">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
                                    Download the full Report Now
                                </h3>
                                <p className="text-xs md:text-sm text-slate-600 max-w-lg mx-auto mb-4 leading-relaxed">
                                    Look at our samples of physician training modules, designed
                                    with clinical accuracy, evidence-based standards, and aligned
                                    to specialty-specific guidelines. All our modules are also
                                    designed to be implementable in a real practice setting and
                                    compliant with CME.
                                </p>
                                <button className="bg-black hover:bg-slate-800 text-white font-medium px-8 py-2 rounded-full text-sm transition">
                                    Discover More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Heading */}
                <section className="text-center space-y-4 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3b2c]">
                        Evidence-Based Physician Training Content Development: Packages
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        At Pubrica, we provide flexible and scalable packages designed to
                        accommodate the unique training needs of healthcare organizations,
                        academic institutions, and life sciences companies. Whether you are
                        planning a single CME session or a comprehensive clinical education
                        curriculum, our knowledgeable team will develop scientifically
                        reliable and specialty-matched content based on your intentions.
                    </p>
                </section>

                {/* Packages Grid - Rendered using exact layout & design from CommonPackages */}
                <section className="relative max-w-7xl mx-auto">
                    <div
                        className={`grid ${getGridColsClass(
                            packagesData.length
                        )} gap-4 items-stretch`}
                    >
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
                                            <span
                                                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shadow-inner text-white"
                                                style={{ backgroundColor: pkg.titleColor }}
                                            >
                                                {pkg.badge}
                                            </span>
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

                                    {/* Turnaround Time (Optional) */}
                                    {pkg.turnaround && (
                                        <div className="mb-3">
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

                                    {/* Best For (Optional) */}
                                    {pkg.bestFor && (
                                        <div>
                                            <div className="font-bold flex items-start gap-1.5">
                                                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-[10px] shrink-0 mt-0.5">
                                                    ➔
                                                </span>
                                                <span>
                                                    Best For:{" "}
                                                    <span className="font-normal">{pkg.bestFor}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center py-4">
                <GetFreeQuoteButton />
            </div>
        </div>
    );
}