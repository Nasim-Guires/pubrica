"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ServiceBanner from "@/components/common/ServiceBanner";
import { PubricaSampleWorkCard } from "@/components/common/PubricaSampleWorkCardProps";

export interface AccordionItem {
    id: string;
    title: string;
    content: React.ReactNode;
}

export interface ServicesMedicoLegalComplianceAndSamplesProps {
    className?: string;
}

export default function ServicesMedicoLegalComplianceAndSamples({
    className = "",
}: ServicesMedicoLegalComplianceAndSamplesProps) {
    // State for accordions - set to null so NO cards are open by default
    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number): void => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    const accordionItems: AccordionItem[] = [
        {
            id: "evidence-based",
            title: "Evidence-Based Medical Opinions",
            content: (
                <div className="space-y-2 text-gray-700 text-xs sm:text-sm">
                    <p>Our assessments are grounded in the most authoritative clinical sources:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <span className="font-semibold">National and International Guidelines:</span>{" "}
                            <a href="https://www.nice.org.uk/process/pmg6/resources/the-guidelines-manual-pdf-2007970804933" target="_blank" rel="noopener noreferrer" className="text-blue-600">NICE</a> (UK),{" "}
                            <a href="https://www.ahrq.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600">AHRQ</a> (USA),{" "}
                            <a href="https://www.icmr.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600">ICMR</a> (India),{" "}
                            <a href="https://www.who.int/" target="_blank" rel="noopener noreferrer" className="text-blue-600">WHO</a>
                        </li>
                        <li>
                            <span className="font-semibold">Evidence Hierarchies:</span> Level A evidence, including RCTs and systematic reviews
                        </li>
                        <li>
                            <span className="font-semibold">Specialty Standards:</span> AMA, RCOG, ADA, ESC, and others, depending on the medical domain involved
                        </li>
                    </ul>
                </div>
            ),
        },
        {
            id: "confidentiality",
            title: "Confidentiality and Data Protection",
            content: (
                <div className="text-gray-700 text-xs sm:text-sm">
                    <li>
                        HIPAA (Health Insurance Portability and Accountability Act – USA)
                    </li>
                    <li>
                        GDPR (General Data Protection Regulation – EU)

                    </li>
                    <li>
                        Indian IT Act (Section 43A and 72 – Data Privacy Compliance)

                    </li>
                </div>
            ),
        },
        {
            id: "regulatory-compliance",
            title: "Regulatory Compliance and Legal Alignment",
            content: (
                <div className="text-gray-700 text-xs sm:text-sm">
                    <p>
                        Our medical opinion framework aligns with national and regional legal requirements, ensuring seamless admissibility during depositions, court hearings, and regulatory reviews.
                    </p>
                    <li>
                        Medical Council of India (MCI/NMC)

                    </li>
                    <li>
                        General Medical Council (GMC – UK)

                    </li>
                    <li>
                        American Medical Association (AMA)
                    </li>
                    <li>
                        Medical Boards relevant to the case jurisdiction
                    </li>
                </div>
            ),
        },
    ];

    return (
        <section className={`w-full text-slate-800 bg-white font-sans ${className}`}>
            {/* Top Guarantee Banner Section */}
            <ServiceBanner
                imageSrc="/images/publication-support/Satisfaction_Guarantee.webp"
                imageAlt="100% Satisfaction Guarantee"
                heading="End-to-End Medico-Legal Support with Accuracy and Integrity"
                description="Every case we handle is approached with a commitment to objectivity, thoroughness, and legal compliance. Whether you are a law firm, insurer, or patient advocate, our evidence-based medico-legal services strengthen your case with clarity and confidence."
            />

            {/* Compliance & Guidelines Accordion Section */}
            <div className="w-full bg-slate-100/70 py-7 px-4 sm:px-8">
                <div className="max-w-4xl mx-auto">
                    <header className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#1b2b28] mb-3">
                            Our Compliance and Guideline Standards
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            At Pubrica, we provide medico-legal services that adhere to strict clinical guidelines, legal standards, and regulatory compliance. We provide clinically defensible, objective, and court-admissible medical opinions aligned with best practices and ethics.
                        </p>
                    </header>

                    {/* Accordion Component (No items open by default) */}
                    <div className="bg-white rounded border border-gray-200 divide-y divide-gray-200 shadow-sm mb-8">
                        {accordionItems.map((item, index) => {
                            const isOpen = openAccordion === index;
                            return (
                                <div key={item.id} className="transition-colors">
                                    <button
                                        type="button"
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between p-4 text-left font-semibold text-xs sm:text-sm text-[#1b2b28] hover:bg-slate-50 focus:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-gray-500 font-normal text-base w-4 text-center">
                                                {isOpen ? "▸" : "▸"}
                                            </span>
                                            <span>{item.title}</span>
                                        </div>
                                    </button>

                                    {isOpen && (
                                        <div className="px-10 pb-4 pt-1 border-t border-gray-100">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Compliance Bottom Text */}
                    <div className="space-y-3 text-xs sm:text-sm text-gray-600 text-center sm:text-left leading-relaxed">
                        <p>
                            Our documentation is tailored for litigation, insurance claims, regulatory defense, and medical board hearings, ensuring full legal admissibility and professional accountability.
                        </p>
                        <p>
                            At Pubrica, we don't just meet compliance standards, we embed them into every medico-legal report, ensuring credibility, objectivity, and regulatory defensibility from day one.
                        </p>
                    </div>
                </div>
            </div>

            {/* Sample Work & Downloads CTA Card Section */}
            <PubricaSampleWorkCard
                bookCoverImage={{
                    src: "/images/medico-legal-support-services/Medico-legal-consulting-services-for-litigation-strategy-support.webp",
                    alt: "Medico-legal consulting services for litigation strategy support",
                    width: 600,
                    height: 400,
                }}
                sections={[
                    {
                        heading: "Medico-Legal Support Services Sample Work",
                        button: {
                            label: "Discover More",
                            url: "/insights/sample-work",
                        },
                    },
                    {
                        heading: "Download the full Report Now",
                        descriptionSegments: [
                            {
                                text: "Explore our medico-legal service sample work, expertly crafted to meet legal requirements, align with healthcare regulations, and ensure precise, reliable medical insights for effective legal proceedings.",
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
        </section>
    );
}