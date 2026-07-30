"use client";

import React, { useState } from "react";

export default function PatientJourneySteps() {
    // State for Sample Work tabs (Image 2)
    const [activeTab, setActiveTab] = useState(1);

    // Data for Interactive Steps (Image 1)
    const steps = [
        {
            id: 1,
            title: "Comprehensive Data Collection",
            desc: "Gather comprehensive patient data from various sources, including EMR and EHR data analysis services, and wearable devices.",
            icon: (
                <svg className="w-10 h-10 mb-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Advanced Data Analysis",
            desc: "Employ advanced algorithms to analyse patient data and identify key patterns and trends in the healthcare journey.",
            icon: (
                <svg className="w-10 h-10 mb-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Actionable Insights Extraction",
            desc: "Extract patient insights services to enhance patient care, improve outcomes, and optimize healthcare processes.",
            icon: (
                <svg className="w-10 h-10 mb-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: "Clear Reporting and Strategic Guidance",
            desc: "Present findings in clear and concise reports, facilitating informed decision-making and guiding the implementation of data-driven strategies for improved patient experiences.",
            icon: (
                <svg className="w-10 h-10 mb-3 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ];

    // Images for Sample Work tabs (Image 2)
    const sampleImages: Record<number, string> = {
        1: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        2: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=1200&q=80",
        3: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    };

    return (
        <div className="w-full bg-slate-50 font-sans text-slate-800">

            {/* SECTION 1: Step-by-Step Process (Image 1) */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003B2B] mb-3">
                        How Our Patient Journey & Insights – Machine Learning Service Works
                    </h2>
                    <h3 className="text-xl text-[#008080] font-medium mb-4">
                        Our step-by-Step Process
                    </h3>
                    <p className="max-w-4xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
                        Our Patient Journey & Insights – Machine Learning Service follows a structured step-by-step process to transform raw healthcare data into meaningful insights. By combining advanced analytics with clear reporting, we empower providers to improve care quality, patient outcomes, and decision-making.
                    </p>
                </div>

                {/* Alternate Step Layout */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch pt-8">
                    {steps.map((step) => {
                        const isTop = step.id % 2 !== 0; // Alternating design
                        return (
                            <div key={step.id} className="flex flex-col items-center">

                                {/* Number Circle (Top position for odd IDs) */}
                                {isTop && (
                                    <div className="w-10 h-10 rounded-full bg-[#008B9B] text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md z-10">
                                        {step.id}
                                    </div>
                                )}

                                {/* Card Container with Dynamic Hover State */}
                                <div className={`w-full flex-1 p-6 rounded-lg transition-all duration-300 flex flex-col items-start shadow-sm border border-slate-200 cursor-pointer
                  bg-white text-slate-800 hover:bg-[#4A5552] hover:text-white group relative
                  ${!isTop ? "mb-4" : ""}`}
                                >
                                    <div className="group-hover:brightness-200 transition-all">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-white transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="text-xs leading-relaxed text-slate-600 group-hover:text-slate-200 transition-colors">
                                        {step.desc}
                                    </p>

                                    {/* Decorative Teal Line */}
                                    <div className="w-full h-1 bg-[#008B9B] mt-auto pt-4 group-hover:bg-teal-400"></div>
                                </div>

                                {/* Number Circle (Bottom position for even IDs) */}
                                {!isTop && (
                                    <div className="w-10 h-10 rounded-full bg-[#008B9B] text-white flex items-center justify-center font-bold text-lg mt-4 shadow-md z-10">
                                        {step.id}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Banner Section */}
            <section className="bg-[#003B2B] text-white py-12 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Speed up your Patient Journey & Insights with Pubrica
                    </h3>
                    <p className="text-slate-200 text-sm md:text-base italic leading-relaxed">
                        “Pubrica’s Patient Journey & Insights services offer meticulous analysis, refinement, optimization, and quality assurance, ensuring precise and effective generation of insights to enhance healthcare experiences and inform strategic decision-making.”
                    </p>
                </div>
            </section>

            {/* SECTION 2: Sample Work Container with Google Images (Image 2) */}
            <section className="py-16 px-4 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#003B2B] mb-2">
                    Patient Journey & Insights Sample Work By Pubrica
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-sm mb-8">
                    Pubrica’s Patient Journey & Insights service provides deep, actionable insights into patient experiences, optimizing healthcare outcomes.
                </p>

                {/* Tab Buttons */}
                <div className="flex justify-center gap-3 mb-6">
                    {[1, 2, 3].map((num) => (
                        <button
                            key={num}
                            onClick={() => setActiveTab(num)}
                            className={`px-6 py-2 text-sm font-medium transition-colors border ${activeTab === num
                                    ? "bg-[#003B2B] text-white border-[#003B2B]"
                                    : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
                                }`}
                        >
                            Sample {num}
                        </button>
                    ))}
                </div>

                {/* Image Box */}
                <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-md max-w-4xl mx-auto">
                    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded bg-slate-100">
                        <img
                            src={sampleImages[activeTab]}
                            alt={`Patient Journey Sample Work ${activeTab}`}
                            className="w-full h-full object-cover transition-opacity duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-slate-900/80 text-white font-bold px-3 py-1 text-sm rounded">
                            PUBRICA
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Getting Started & Lists (Image 3) */}
            <section className="py-12 px-4 max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#003B2B] mb-4">
                    Getting Started With This Service Is Easy!
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                    We support building analytics that would help researchers to extract and analyse information from EMR / EHR files in the form of PDF, image, and XML files, and provide a better understanding of the disease area and treatment pattern. Using techniques like intent detection, sentiment analysis, and image recognition, Pubrica’s experience in big data and ML helped the client by generating the right insights. Our support includes analysing real-world data analytics:
                </p>

                <ul className="list-disc list-inside text-slate-700 text-sm space-y-2 mb-10 pl-2">
                    <li>Treatment patterns, switches, treatment sequences, effectiveness, and safety outcomes analysis</li>
                    <li>Unmet need and burden of illness (clinical, cost, health resource utilization)</li>
                </ul>

                {/* 2-Column Comparison Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Column 1 */}
                    <div className="bg-white border-l-4 border-l-amber-400 p-6 rounded-r-lg shadow-sm border-t border-r border-b border-slate-100">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">What You Provide</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            {[
                                "Patient data (EHR, EMR, wearables, surveys, claims)",
                                "Clinical trial outcomes & real-world datasets",
                                "Treatment pathways & prescription records",
                                "Organizational goals & key research questions",
                                "Medical literature or existing journey maps",
                                "Feedback on preliminary findings"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-amber-500 font-bold mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-white border-l-4 border-l-indigo-400 p-6 rounded-r-lg shadow-sm border-t border-r border-b border-slate-100">
                        <h3 className="font-bold text-lg text-slate-900 mb-4">What We Provide</h3>
                        <ul className="space-y-3 text-slate-600 text-sm">
                            {[
                                "Data processing & integration",
                                "Machine learning models & predictive analytics",
                                "Patient journey mapping & visualization",
                                "Actionable insights & gap identification",
                                "Custom dashboards & clear reports",
                                "Strategic guidance & recommendations"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start">
                                    <span className="text-indigo-500 font-bold mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Compliance & Guidelines (Image 4) */}
            <section className="py-12 px-4 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#003B2B] mb-3">
                    Our Compliance And Guideline Standards
                </h2>
                <p className="text-slate-600 text-sm max-w-3xl mx-auto mb-10 leading-relaxed">
                    At Pubrica, we prioritize compliance, data security, and adherence to global regulatory standards in every patient journey and insights project powered by machine learning. Our frameworks are designed to ensure accuracy, transparency, and ethical use of patient data while enabling innovation in healthcare analytics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
                        <svg className="w-12 h-12 text-[#008080] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <h4 className="font-bold text-lg text-[#008080] mb-2">Regulatory Compliance</h4>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                            We align with HIPAA, GDPR, FDA, and EMA guidelines, ensuring the privacy, protection, and ethical handling of patient data across all projects.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
                        <svg className="w-12 h-12 text-[#008080] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h4 className="font-bold text-lg text-[#008080] mb-2">Clinical and Scientific Guidelines</h4>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                            Adherence to ICMJE, CONSORT, STROBE, and GCP standards guarantees research integrity and reliable outcomes.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
}