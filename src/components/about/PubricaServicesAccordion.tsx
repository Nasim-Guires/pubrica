"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { CONSULTING_SERVICES } from "./AboutUsPageClient";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

interface SectionItem {
    title: string;
    description?: string;
    items?: string[];
}

interface AccordionItem {
    id: string;
    title: string;
    description?: string; // Made optional to match the exported type
    subHeading?: string;
    sections?: SectionItem[];
    footerText?: string;
}

export default function PubricaServicesAccordion() {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <div className={`w-full max-w-5xl mx-auto p-4 bg-[#f4f4f4] ${poppins.className}`}>
            <div className="space-y-3">
                {(CONSULTING_SERVICES as AccordionItem[]).map((item) => {
                    const isOpen = openId === item.id;
                    return (
                        <div
                            key={item.id}
                            className="bg-white border border-[#8cc63f] rounded-none overflow-hidden transition-all duration-200"
                        >
                            {/* Accordion Header */}
                            <button
                                type="button"
                                onClick={() => toggleAccordion(item.id)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[#0f4c5c] hover:bg-gray-50 focus:outline-none transition-colors"
                            >
                                <span className="text-[18px] sm:text-[20px] font-bold text-[#0c4a60]">
                                    {item.title}
                                </span>
                                <span className="text-[#8cc63f] text-2xl font-bold ml-4 select-none">
                                    {isOpen ? "−" : "+"}
                                </span>
                            </button>

                            {/* Accordion Body */}
                            {isOpen && (
                                <div className="px-6 pb-6 pt-2 border-t border-transparent text-[#333333] text-[16px] leading-relaxed space-y-4">
                                    {/* Main Description */}
                                    {item.description && <p>{item.description}</p>}

                                    {/* Sub Heading */}
                                    {item.subHeading && (
                                        <h4 className="font-bold text-[#0c4a60] pt-2">{item.subHeading}</h4>
                                    )}

                                    {/* Sections List */}
                                    {item.sections && item.sections.length > 0 && (
                                        <div className="space-y-3 pl-2">
                                            {item.sections.map((section, idx) => (
                                                <div key={idx} className="space-y-1">
                                                    <p className="font-semibold text-[#0c4a60]">
                                                        {section.title}
                                                    </p>
                                                    {section.description && (
                                                        <p className="text-gray-700 text-sm">{section.description}</p>
                                                    )}
                                                    {section.items && section.items.length > 0 && (
                                                        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                                            {section.items.map((bullet, bulletIdx) => (
                                                                <li key={bulletIdx}>{bullet}</li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer Text */}
                                    {item.footerText && (
                                        <p className="pt-2 italic text-sm text-gray-600 border-t border-gray-100">
                                            {item.footerText}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            <p className="mt-8 text-[16px] text-[#444444] leading-relaxed">
                Our goal is to enhance the visibility and impact of your medical device products and research, ensuring they not only meet the highest standards of safety and efficacy but also achieve significant market presence.
            </p>
        </div>
    );
}