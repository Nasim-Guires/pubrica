"use client";
import React, { useState } from "react";

const servicesData = [
    {
        title: "Patient Journey Mapping with ML",
        description:
            "We track and analyse patient touchpoints across multiple data sources (EHR, EMR, claims, wearables, digital health apps) to reconstruct the real-world patient data analysis and care pathway.",
    },
    {
        title: "Predictive Analytics for Patient Behaviour",
        description:
            "Our ML algorithms forecast treatment adherence, disease progression, and dropout risks to help optimize intervention strategies.",
    },
    {
        title: "Disease Burden & Treatment Pattern Analysis",
        description:
            "Identification of therapy adoption trends, patient switching patterns, and unmet medical needs using structured and unstructured datasets.",
    },
    {
        title: "Sentiment & Intent Analysis",
        description:
            "Applying NLP to social media, patient forums, and surveys to understand patient perceptions, satisfaction, and expectations.",
    },
    {
        title: "Clinical & Real-World Evidence Integration",
        description:
            "Harmonizing clinical trial data with real-world data (RWD) to uncover insights on outcomes, safety, and effectiveness.",
    },
    {
        title: "Customized ML Models for Insights Generation",
        description:
            "Tailor-made ML solutions such as clustering, classification, and deep learning models for patient journey analytics, segmentation, and risk stratification.",
    },
    {
        title: "Market Access & HEOR Support",
        description:
            "Generating patient insights services that support health economics and outcomes research (HEOR), reimbursement strategies, and market access.",
    },
    {
        title: "Visualization Dashboards & Reporting",
        description:
            "Interactive dashboards powered by ML-based analytics for clear communication of insights to stakeholders.",
    },
];

export default function PatientJourneyInsightsMl() {
    // Track open accordion index (-1 means all are closed by default)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white font-sans text-gray-800">
            {/* 1. TOP HERO BANNER */}
            <section className="bg-[#102a28] text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-gray-600 p-8 rounded-lg bg-[#143330]">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                        Patient Journey & Insights – Machine Learning
                    </h1>
                    <p className="text-gray-200 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                        Pubrica leverages machine learning for patient journey analysis, offering deep insights into healthcare experiences. Enhance patient care pathways with our data-driven approach.
                    </p>
                </div>
            </section>

            {/* 2. OVERVIEW SECTION WITH IMAGE */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3835] mb-4">
                    Transform complex patient data into actionable insights with AI-powered journey mapping and predictive analytics
                </h2>

                <h3 className="text-sm font-semibold text-[#1a3835] mb-6">
                    Mapping Healthcare Journeys and Unlocking Actionable Insights with AI & ML
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    <div className="lg:col-span-7 space-y-4 text-sm leading-relaxed text-gray-700">
                        <p>
                            At Pubrica, we leverage advanced machine learning in healthcare techniques to map, analyze, and interpret the <span className="text-teal-700 font-semibold">patient journey</span> mapping across multiple touchpoints in the healthcare ecosystem. Understanding the patient journey from disease onset to diagnosis, treatment, adherence, and outcomes is crucial for healthcare providers, payors, and pharmaceutical companies to design patient-centric strategies and improve care delivery.
                        </p>
                        <p>
                            With a proven record of empowering healthcare stakeholders through healthcare data analytics and data-driven intelligence, Pubrica is a trusted partner in real-world patient data analysis, mapping patient journeys, and generating actionable insights using advanced machine learning techniques.
                        </p>
                    </div>

                    {/* Hero Image Block */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-[#143330]">
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
                                alt="Patient Journey Analytics Laptop"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-sm text-gray-700 list-disc list-inside mb-8">
                    <li>
                        <strong className="text-gray-900">500+ data scientists, clinicians, and domain experts</strong> specializing in predictive analytics for patient outcomes, natural language processing (NLP), and image recognition
                    </li>
                    <li>
                        <strong className="text-gray-900">Expertise in EMR and EHR data analysis services</strong>, claims, wearables, social media, and real-world evidence sources
                    </li>
                    <li>
                        <strong className="text-gray-900">In-house capabilities</strong> to perform <span className="text-teal-700 font-semibold">data extraction</span>, intent detection, patient sentiment analysis in healthcare, and treatment-pattern identification across multiple disease areas
                    </li>
                    <li>
                        <strong className="text-gray-900">Proficiency in modeling therapeutic pathways</strong> to uncover adherence challenges, treatment gaps, and key decision-making touchpoints
                    </li>
                    <li>
                        <strong className="text-gray-900">Support for healthcare providers, payers, and life sciences</strong> in generating patient-centric insights that enhance engagement, outcomes, and resource allocation
                    </li>
                </ul>

                <p className="text-sm font-medium text-gray-800">
                    We bring scientific rigor, AI-driven methodologies, and cross-functional expertise to decode patient journey analysis using machine learning, delivering clarity, precision, and foresight for better healthcare decisions.
                </p>
            </section>

            {/* 3. OUR SERVICES (COLLAPSIBLE ACCORDION SECTION) */}
            <section className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#1a3835] mb-2">Our Services</h2>
                <p className="text-sm text-gray-600 mb-8 max-w-4xl">
                    At Pubrica, we utilize advanced machine learning techniques to decipher complex patient data, identify treatment pathways, and derive actionable insights that inform evidence-driven healthcare decisions.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Side Image Showcase */}
                    <div className="lg:col-span-5 flex flex-col gap-4 items-center">
                        <div className="w-64 rounded-2xl overflow-hidden shadow-md border-2 border-teal-700">
                            <img
                                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80"
                                alt="Mobile Dashboard Analytics"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="w-64 rounded-2xl overflow-hidden shadow-md border-2 border-teal-700 -mt-6 ml-10">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80"
                                alt="Data Review"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Accordion List */}
                    <div className="lg:col-span-7 divide-y divide-gray-300 border-t border-b border-gray-300">
                        {servicesData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="py-4">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between text-left font-semibold text-gray-800 hover:text-teal-800 transition-colors focus:outline-none"
                                    >
                                        <span className="text-sm sm:text-base flex items-center gap-2">
                                            <span className="text-teal-700 text-lg font-bold">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                            {item.title}
                                        </span>
                                    </button>

                                    {/* Collapsible Content (Closed by default) */}
                                    {isOpen && (
                                        <div className="mt-3 pl-6 text-xs sm:text-sm text-gray-600 leading-relaxed transition-all">
                                            {item.description}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}