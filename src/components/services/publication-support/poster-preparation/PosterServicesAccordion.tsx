"use client";

import React, { useState } from "react";
import Link from "next/link";

interface ServiceRow {
    serviceType: string;
    idealFor: string;
    keyFeatures: string;
    turnaroundTime: string;
}

const serviceData: ServiceRow[] = [
    {
        serviceType: "Conference Poster Design",
        idealFor: "Researchers presenting at conferences",
        keyFeatures: "High-resolution, visually compelling posters tailored to conference specifications (IEEE, APA, Elsevier, etc.)",
        turnaroundTime: "3–5 business days",
    },
    {
        serviceType: "Graphical Abstract & Infographics",
        idealFor: "Authors submitting to journals",
        keyFeatures: "Visually structured abstracts with data visualization for effective research communication",
        turnaroundTime: "4–6 business days",
    },
    {
        serviceType: "Medical & Scientific Posters",
        idealFor: "Life sciences, pharmaceutical, and clinical researchers",
        keyFeatures: "HIPAA-compliant visuals with professional scientific illustrations and custom layouts",
        turnaroundTime: "4–7 business days",
    },
    {
        serviceType: "Business & Industry Posters",
        idealFor: "Corporate R&D teams and industry researchers",
        keyFeatures: "Industry-standard formatting with infographic-style presentation for technical data",
        turnaroundTime: "5–7 business days",
    },
    {
        serviceType: "Custom Illustrations & Diagrams",
        idealFor: "Researchers needing tailored visual content",
        keyFeatures: "Hand-drawn and vector-based scientific diagrams, formatted to fit publication or poster specs",
        turnaroundTime: "5–10 business days",
    },
];

export default function PosterServicesAccordion() {
    // All accordion items closed by default
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <section className="w-full font-sans text-gray-800 bg-white py-4">
            <div className="max-w-6xl mx-auto px-4 md:px-8 space-y-4">

                {/* Accordion Item 1: Scientific & Academic Poster Design */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        type="button"
                        onClick={() => toggleSection("design")}
                        className="w-full flex justify-between items-center px-5 py-3.5 text-left bg-white text-[#0c3830] font-bold text-base hover:bg-gray-50 transition-colors"
                    >
                        <span>Scientific & Academic Poster Design – How We Deliver High-Impact Posters</span>
                        <span className="text-xl font-bold ml-4">{openSection === "design" ? "−" : "+"}</span>
                    </button>

                    {openSection === "design" && (
                        <div className="p-4 bg-white overflow-x-auto">
                            <table className="w-full text-left border-collapse min-w-[650px] text-sm">
                                <thead>
                                    <tr className="bg-[#05231c] text-white">
                                        <th className="p-3 font-semibold rounded-tl-md">Service Type</th>
                                        <th className="p-3 font-semibold">Ideal For</th>
                                        <th className="p-3 font-semibold">Key Features</th>
                                        <th className="p-3 font-semibold rounded-tr-md">Turnaround Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {serviceData.map((row, index) => (
                                        <tr key={index} className="bg-blue-50/30 hover:bg-blue-50/60 transition-colors">
                                            <td className="p-3 font-medium text-[#0c3830]">{row.serviceType}</td>
                                            <td className="p-3 text-gray-700">{row.idealFor}</td>
                                            <td className="p-3 text-gray-700">{row.keyFeatures}</td>
                                            <td className="p-3 text-gray-700 whitespace-nowrap">{row.turnaroundTime}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Accordion Item 2: Pricing and Turnaround Time */}
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                        type="button"
                        onClick={() => toggleSection("pricing")}
                        className="w-full flex justify-between items-center px-5 py-3.5 text-left bg-white text-[#0c3830] font-bold text-base hover:bg-gray-50 transition-colors"
                    >
                        <span>Pricing and Turnaround Time</span>
                        <span className="text-xl font-bold ml-4">{openSection === "pricing" ? "−" : "+"}</span>
                    </button>

                    {openSection === "pricing" && (
                        <div className="p-5 bg-white space-y-6">
                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gray-200/70 p-6 rounded-lg text-center flex flex-col justify-center">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">Starting Price</h4>
                                    <p className="text-gray-700 text-sm">$ 80 (Basic Poster)</p>
                                </div>

                                <div className="bg-gray-200/70 p-6 rounded-lg text-center flex flex-col justify-center">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">Standard Delivery</h4>
                                    <p className="text-gray-700 text-sm">$ 250 (Advanced Scientific Poster with Illustrations and Infographics)</p>
                                </div>

                                <div className="bg-gray-200/70 p-6 rounded-lg text-center flex flex-col justify-center">
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">Express Delivery</h4>
                                    <p className="text-gray-700 text-sm">3 Days – 10 Days (Depending upon Complexity)</p>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center pt-2">
                                <Link
                                    href="/services/publication-support/poster-preparation/"
                                    className="bg-[#05231c] hover:bg-[#0c3830] text-white font-medium px-6 py-3 rounded-full text-sm transition-colors shadow-sm no-underline"
                                >
                                    Check Pricing &amp; Get a Quote
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}