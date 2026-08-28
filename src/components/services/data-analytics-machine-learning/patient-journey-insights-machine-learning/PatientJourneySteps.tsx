"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function PatientJourneySteps() {
    // State for Sample Work tabs (Image 2)
    const [activeTab, setActiveTab] = useState(1);

    // Data for Interactive Steps (Image 1)
    const steps = [
        {
            id: 1,
            title: "Comprehensive Data Collection",
            desc: "Gather comprehensive patient data from various sources, including EMR and EHR data analysis services, and wearable devices.",
            iconSrc: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Comprehensive-Data-Collection.png",
        },
        {
            id: 2,
            title: "Advanced Data Analysis",
            desc: "Employ advanced algorithms to analyse patient data and identify key patterns and trends in the healthcare journey.",
            iconSrc: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Advanced-Data-Analysis.png",
        },
        {
            id: 3,
            title: "Actionable Insights Extraction",
            desc: "Extract patient insights services to enhance patient care, improve outcomes, and optimize healthcare processes.",
            iconSrc: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Actionable-Insights-Extraction.png",
        },
        {
            id: 4,
            title: "Clear Reporting and Strategic Guidance",
            desc: "Present findings in clear and concise reports, facilitating informed decision-making and guiding the implementation of data-driven strategies for improved patient experiences.",
            iconSrc: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Clear-Reporting-and-Strategic-Guidance.png",
        },
    ];

    // Images for Sample Work tabs (Image 2)
    const sampleImages: Record<number, string> = {
        1: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/patient-education-1.png",
        2: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/patient-education-2.png",
        3: "/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/patient-education-3.png",
    };

    return (
        <div className="w-full bg-slate-50 font-sans text-slate-800">

            {/* SECTION 1: Step-by-Step Process (Image 1) */}
            <section className="py-7 px-4 max-w-7xl mx-auto">
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
                                    <div className="relative w-10 h-10 mb-3 group-hover:brightness-200 transition-all">
                                        <Image src={step.iconSrc} alt="" fill className="object-contain" />
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
            <section className="bg-[#003B2B] text-white py-6 px-4 text-center">
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
            <section className="py-7 px-4 max-w-6xl mx-auto text-center">
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
                        <Image
                            src={sampleImages[activeTab]}
                            alt={`Patient Journey Sample Work ${activeTab}`}
                            fill
                            className="object-contain transition-opacity duration-300"
                            sizes="(max-width: 768px) 100vw, 900px"
                        />
                        <div className="absolute top-4 right-4 bg-slate-900/80 text-white font-bold px-3 py-1 text-sm rounded">
                            PUBRICA
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Getting Started & Lists (Image 3) */}
            <section className="py-6 px-4 max-w-5xl mx-auto">
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
            <section className="py-6 px-4 max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#003B2B] mb-3">
                    Our Compliance And Guideline Standards
                </h2>
                <p className="text-slate-600 text-sm max-w-3xl mx-auto mb-10 leading-relaxed">
                    At Pubrica, we prioritize compliance, data security, and adherence to global regulatory standards in every patient journey and insights project powered by machine learning. Our frameworks are designed to ensure accuracy, transparency, and ethical use of patient data while enabling innovation in healthcare analytics.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
                        <div className="relative w-12 h-12 mb-4">
                            <Image src="/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Regulatory-Compliance-1.png" alt="" fill className="object-contain" />
                        </div>
                        <h4 className="font-bold text-lg text-[#008080] mb-2">Regulatory Compliance</h4>
                        <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                            We align with HIPAA, GDPR, FDA, and EMA guidelines, ensuring the privacy, protection, and ethical handling of patient data across all projects.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col items-center">
                        <div className="relative w-12 h-12 mb-4">
                            <Image src="/images/data-analytics-machine-learning/patient-journey-insights-machine-learning/Clinical-and-Scientific-Guidelines.png" alt="" fill className="object-contain" />
                        </div>
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