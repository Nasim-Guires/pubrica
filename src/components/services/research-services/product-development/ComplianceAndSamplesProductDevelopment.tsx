"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface AccordionCard {
    id: string;
    title: string;
    iconPlaceholder: string;
    content: React.ReactNode;
}

export interface ComplianceAndSamplesProductDevelopmentProps {
    className?: string;
}

export default function ComplianceAndSamplesProductDevelopment({
    className = "",
}: ComplianceAndSamplesProductDevelopmentProps) {
    // State to track multiple open card IDs
    const [openCardIds, setOpenCardIds] = useState<string[]>([]);

    const toggleCard = (id: string): void => {
        setOpenCardIds((prev) =>
            prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
        );
    };

    const accordionCards: AccordionCard[] = [
        {
            id: "pharmaceuticals-biotech",
            title: "Pharmaceuticals & Biotech",
            iconPlaceholder: "/images/product-development/Pharmaceuticals-Biotech.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>FDA (U.S. Food & Drug Administration)</li>
                    <li>EMA (European Medicines Agency)</li>
                    <li>ICMR (Indian Council of Medical Research)</li>
                    <li>MHRA (UK), TGA (Australia)</li>
                    <li>ICH Guidelines (E6 GCP, E9 Statistical Principles)</li>
                </ul>
            ),
        },
        {
            id: "nutraceuticals-herbal",
            title: "Nutraceuticals, Herbal & AYUSH",
            iconPlaceholder: "/images/product-development/Nutraceuticals-Herbal-AYUSH.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>FSSAI (Food Safety & Standards Authority of India)</li>
                    <li>AYUSH Ministry (India)</li>
                    <li>EFSA (European Food Safety Authority)</li>
                    <li>USP Dietary Supplement Compendium</li>
                    <li>DSHEA (U.S. Dietary Supplement Health and Education Act)</li>
                </ul>
            ),
        },
        {
            id: "cosmetics-cosmeceuticals",
            title: "Cosmetics & Cosmeceuticals",
            iconPlaceholder: "/images/product-development/Cosmetics-Cosmeceuticals-1.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>FDA (Cosmetic Regulations – U.S.)</li>
                    <li>EU Cosmetic Regulation (EC) No 1223/2009</li>
                    <li>REACH (for chemical ingredient safety)</li>
                    <li>INCI (International Nomenclature of Cosmetic Ingredients)</li>
                </ul>
            ),
        },
        {
            id: "functional-foods",
            title: "Functional Foods & Ingredients",
            iconPlaceholder: "/images/product-development/Functional-Foods-Ingredients.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>GRAS (Generally Recognized As Safe – U.S.)</li>
                    <li>Novel Food Regulation (EU)</li>
                    <li>Codex Alimentarius</li>
                    <li>FSSAI Nutraceutical & Health Supplement Standards</li>
                </ul>
            ),
        },
        {
            id: "pet-food-veterinary",
            title: "Pet Food & Veterinary Health",
            iconPlaceholder: "/images/product-development/Pet-Food-Veterinary-Health.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>AAFCO (Association of American Feed Control Officials)</li>
                    <li>FDA CVM (Center for Veterinary Medicine)</li>
                    <li>FEDIAF (European Pet Food Industry Federation)</li>
                    <li>APVMA (Australia) for animal products</li>
                </ul>
            ),
        },
        {
            id: "medical-devices",
            title: "Medical Devices",
            iconPlaceholder: "/images/product-development/Medical-Devices-1.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>FDA 21 CFR Parts 820 (QSR)</li>
                    <li>EU MDR 2017/745 (Medical Device Regulation)</li>
                    <li>ISO 10993 (Biocompatibility)</li>
                    <li>IEC 62304 / ISO 14971 (Software, Risk Management)</li>
                    <li>510(k) & CE Marking Requirements</li>
                </ul>
            ),
        },
        {
            id: "scientific-ethical",
            title: "Scientific & Ethical Guidelines",
            iconPlaceholder: "/images/product-development/Scientific-Ethical-Guidelines.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>Good Clinical Practice (GCP – ICH E6)</li>
                    <li>Good Laboratory Practice (GLP – OECD)</li>
                    <li>Declaration of Helsinki</li>
                    <li>CONSORT, PRISMA, STROBE (for scientific publication standards)</li>
                    <li>OECD Guidelines for Toxicity & Safety Studies</li>
                    <li>PubMed, Cochrane, and WHO sources for literature evidence</li>
                </ul>
            ),
        },
        {
            id: "data-privacy",
            title: "Data Privacy & Confidentiality Compliance",
            iconPlaceholder: "/images/product-development/Data-Privacy-Confidentiality-Compliance.png",
            content: (
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-700 leading-relaxed">
                    <li>HIPAA (U.S.) – Patient Data Protection</li>
                    <li>GDPR (EU) – General Data Protection Regulation</li>
                    <li>Indian IT Act & Data Protection Rules</li>
                    <li>ClinicalTrials.gov, EUCTR, CTRI transparency standards</li>
                </ul>
            ),
        },
    ];

    return (
        <section className={`w-full text-slate-800 bg-white font-sans ${className}`}>
            {/* Top Hero Banner */}
            <div className="w-full bg-[#032d1f] text-white py-10 px-4 sm:px-8 text-center">
                <div className="max-w-4xl mx-auto space-y-3">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                        Speed up your Product development with Pubrica
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        Pubrica&apos;s Product Development Services provide end-to-end support, from concept ideation to market launch. We ensure scientifically backed formulations, regulatory compliance, and efficient manufacturing for successful product commercialization.
                    </p>
                </div>
            </div>

            {/* Main Compliance Section */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 md:py-16">
                <header className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1b2b28] mb-3">
                        Our Compliance and Guideline Standards
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-5xl mb-4">
                        At Pubrica, compliance is embedded into every aspect of our discovery and intelligence services. We follow globally recognized regulatory, ethical, and scientific standards to ensure that all our research outputs, whether for drugs, nutraceuticals, devices, food, or cosmetic products, are court-defensible, regulatory-aligned, and scientifically validated.
                    </p>
                    <h3 className="text-sm sm:text-base font-bold text-[#1b2b28]">
                        We Align With Regulatory Authorities Across Industries
                    </h3>
                </header>

                {/* 3-Column Grid for Accordion Cards (Multiple cards can be open independently) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                    {accordionCards.map((card) => {
                        const isOpen = openCardIds.includes(card.id);
                        return (
                            <div
                                key={card.id}
                                className="bg-[#f2f8f6] border border-emerald-100/80 rounded-md transition-all overflow-hidden"
                            >
                                {/* Header Toggle Button */}
                                <button
                                    type="button"
                                    onClick={() => toggleCard(card.id)}
                                    className="w-full flex items-center justify-between p-3 text-left focus:outline-none hover:bg-[#e6f2ee] transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-7 h-7 rounded bg-emerald-100/60 flex items-center justify-center border border-emerald-300 flex-shrink-0 relative overflow-hidden">
                                            <Image
                                                src={card.iconPlaceholder}
                                                alt={card.title}
                                                fill
                                                className="object-contain p-1"
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-bold text-[#1b2b28]">
                                            {card.title}
                                        </span>
                                    </div>
                                    <span className="text-sm font-bold text-gray-700 ml-2">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Collapsible Content */}
                                {isOpen && (
                                    <div className="p-4 pt-1 border-t border-emerald-100 bg-white">
                                        {card.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Sample Work & Downloads Section */}
            <div className="w-full bg-[#f2f9f6] py-12 px-4 sm:px-8 border-t border-emerald-100/60">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    {/* Left Image Section Div Placeholder */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="w-64 h-[420px] relative border border-slate-600 shadow-md overflow-hidden">
                            <Image
                                src="/images/product-development/image-2.webp"
                                alt="Industrial Laboratory Robotic Equipment"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Text & CTA Buttons */}
                    <div className="md:col-span-7 space-y-6">
                        {/* Upper CTA */}
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-[#1b2b28] mb-3">
                                Discovery & Intelligence Services Sample Work
                            </h3>
                            <Link
                                href="/insights/sample-work/"
                                className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold px-8 py-2.5 rounded-full transition-colors"
                            >
                                Discover More
                            </Link>
                        </div>

                        {/* Lower CTA */}
                        <div className="space-y-2">
                            <h3 className="text-base sm:text-lg font-bold text-[#1b2b28]">
                                Download the full Report Now
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                Explore our Product Development service sample work, accurately designed to meet industry standards, comply with regulatory requirements, and deliver innovative, high-quality solutions that drive market success.
                            </p>
                            <div className="pt-2">
                                <Link
                                    href="/insights/sample-work/"
                                    className="inline-block bg-black hover:bg-gray-800 text-white text-xs font-semibold px-8 py-2.5 rounded-full transition-colors"
                                >
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}