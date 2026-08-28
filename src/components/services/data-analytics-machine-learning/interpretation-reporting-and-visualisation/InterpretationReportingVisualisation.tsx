"use client";

import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import React, { useState } from "react";
import Image from "next/image";

export default function InterpretationReportingVisualisation() {
    // Accordion state for "Types We Offer" grid cards (null = all closed by default)
    const [openOfferCard, setOpenOfferCard] = useState<number | null>(null);

    const toggleOfferCard = (index: number) => {
        setOpenOfferCard(openOfferCard === index ? null : index);
    };

    // Data for "Types of Interpretation, Reporting, and Visualisation We Offer"
    const offerTypes = [
        {
            id: 1,
            title: "Types of Interpretation",
            iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Types-of-Interpretation.png",
            content:
                "Quantitative and qualitative data analysis methods including statistical hypothesis testing, correlation analysis, and contextual domain interpretation to derive actionable research intelligence.",
        },
        {
            id: 2,
            title: "Types of Reporting",
            iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Types-of-Reporting.png",
            content:
                "Structured narrative documentation including executive summaries, clinical trial reports, regulatory submission packages, and manuscript-ready research summaries adhering strictly to CONSORT, PRISMA, and STROBE guidelines.",
        },
        {
            id: 3,
            title: "Types of Visualization",
            iconSrc: "/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/Types-of-Visualization.png",
            content: (
                <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                    <li>
                        <strong>Bar Charts:</strong> Use horizontal or vertical bars to compare data across different categories, where the length of the bar represents the value.
                    </li>
                    <li>
                        <strong>Pie Charts:</strong> Show the proportion of a whole by dividing a circle into slices, useful for displaying percentages.
                    </li>
                    <li>
                        <strong>Line Graphs:</strong> Connect data points with lines, ideal for showing trends and patterns in continuous data over time.
                    </li>
                    <li>
                        <strong>Histograms:</strong> Similar to bar charts, but used to show the distribution of numerical data by grouping it into bins.
                    </li>
                    <li>
                        <strong>Scatter Plots:</strong> Display individual data points to show the relationship or correlation between two variables.
                    </li>
                    <li>
                        <strong>Tables:</strong> Present data in rows and columns, useful for organizing and displaying large amounts of detailed statistical information.
                    </li>
                    <li>
                        <strong>Heat Maps:</strong> Use variations in colour on a grid to represent the magnitude or intensity of individual values within a dataset.
                    </li>
                    <li>
                        <strong>Gantt Charts:</strong> Used for project management, showing tasks and their durations over a timeline.
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <main className="w-full bg-[#f8fbf9] text-[#222222] font-sans pb-7">
            {/* 1. HERO HEADER BANNER */}
            <section className="bg-[#1b3d36] text-white py-6 px-4 sm:px-8 text-center">
                <div className="max-w-5xl mx-auto border border-[#3b6058] p-8 rounded-lg bg-[#193832]">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-wide mb-4">
                        Interpretation, Reporting and Visualisation
                    </h1>
                    <p className="text-sm md:text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
                        Pubrica excels in Interpretation, Reporting, and Visualisation, offering concise analysis presented through clear and impactful visuals, empowering informed decision-making in research and business endeavours.
                    </p>
                </div>
            </section>

            {/* 2. OVERVIEW / INTRO SECTION WITH CTA */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 md:px-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-6 leading-tight">
                    Turn your complex research data into clear, compelling, and publication-ready insights with Pubrica’s expert Interpretation, Reporting, and Visualisation services.
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Text */}
                    <div className="lg:col-span-7 text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
                        <p>
                            At Pubrica, we help researchers, clinicians, and businesses bridge the gap between data generation and knowledge dissemination. Our scientific data interpretation, reporting, and visualisation services ensure that your research findings are not just statistically sound but also effectively communicated, compliant with global standards, and impactful for your target audience.
                        </p>
                        <p>
                            Whether you are preparing a clinical trial report, academic manuscript, regulatory submission, or business intelligence dashboard, we transform raw data into clear narratives, structured reports, and intuitive visualisations that drive decision-making.
                        </p>

                        <div className="pt-4">
                           <GetFreeQuoteButton/>
                        </div>
                    </div>

                    {/* Right Image Placeholder Div */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className=" p-2 rounded-2xl w-full max-w-md">
                            {/* Image Section: Business professional looking over printed graphs and report documentation */}
                            <div className="relative w-full h-[280px] sm:h-[320px] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/data-analytics-machine-learning/interpretation-reporting-and-visualisation/poster-presentation-.webp"
                                    alt="Interpretation, Reporting and Visualisation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. WHAT WE DO CARDS */}
            <section className="max-w-6xl mx-auto py-5 px-4 sm:px-6 md:px-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-2">
                    What We Do
                </h2>
                <p className="text-gray-700 text-sm md:text-base mb-8">
                    Our service bridges the gap between raw data and meaningful knowledge by offering:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white border-l-4 border-l-amber-400 border-y border-r border-gray-200 rounded-r-xl p-6 shadow-xs flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-[#1b3d36] mb-4">
                                Data Interpretation
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                We provide precise statistical and contextual interpretation of your data, highlighting key findings, patterns, and relationships. Our experts ensure clarity by translating numbers into narratives that support decision-making. With our research data interpretation expertise, we ensure that insights are accurate, meaningful, and actionable.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white border-l-4 border-l-orange-400 border-y border-r border-gray-200 rounded-r-xl p-6 shadow-xs flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-[#1b3d36] mb-4">
                                Comprehensive Reporting
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                From detailed research reports to concise executive summaries, we prepare structured documents tailored to your audience. We follow international guidelines such as{" "}
                                <span className="text-teal-700 font-semibold">CONSORT, PRISMA, and STROBE</span>{" "}
                                to ensure compliance, transparency, and reproducibility. Our data reporting and visualization services make your results publication-ready and impactful.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white border-l-4 border-l-purple-400 border-y border-r border-gray-200 rounded-r-xl p-6 shadow-xs flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-[#1b3d36] mb-4">
                                Data Visualisation
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                Using advanced tools and techniques, we create intuitive visualizations, graphs, dashboards, infographics, and interactive charts that simplify complex datasets. Our medical data visualization services and scientific visualization services help you engage stakeholders, reviewers, and policymakers with clarity and impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHY MATTERS BULLET SECTION */}
            <section className="max-w-6xl mx-auto py-5 px-4 sm:px-6 md:px-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-6">
                    Why Interpretation, Reporting, and Visualisation Matter
                </h2>

                <ul className="space-y-4 text-sm md:text-base text-gray-700">
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#1b3d36] rounded-full mt-2 mr-3 shrink-0"></span>
                        <div>
                            <strong className="text-gray-900 font-bold">Clarity in Communication:</strong>{" "}
                            Helps simplify complex findings for diverse audiences.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#1b3d36] rounded-full mt-2 mr-3 shrink-0"></span>
                        <div>
                            <strong className="text-gray-900 font-bold">Enhanced Publication Success:</strong>{" "}
                            Professionally interpreted and reported results improve acceptance in high-impact journals.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#1b3d36] rounded-full mt-2 mr-3 shrink-0"></span>
                        <div>
                            <strong className="text-gray-900 font-bold">Informed Decision-Making:</strong>{" "}
                            Clear visualizations support strategic decisions in research, healthcare, and business.
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#1b3d36] rounded-full mt-2 mr-3 shrink-0"></span>
                        <div>
                            <strong className="text-gray-900 font-bold">Credibility & Compliance:</strong>{" "}
                            Standardised reporting ensures ethical integrity and regulatory approval.
                        </div>
                    </li>
                </ul>
            </section>

            {/* 5. TYPES WE OFFER GRID SECTION (ACCORDION CLOSED BY DEFAULT) */}
            <section className="max-w-6xl mx-auto py-5 px-4 sm:px-6 md:px-8 border-t border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1b3d36] mb-3">
                    Types of Interpretation, Reporting, and Visualisation We Offer
                </h2>
                <p className="text-gray-700 text-sm md:text-base max-w-5xl mb-8 leading-relaxed">
                    Interpretation involves methods like quantitative and qualitative analysis, while reporting presents these insights in a structured narrative using formats like dashboards and presentations. Visualization is the process of converting data into visual formats such as bar charts, pie charts, line graphs, and heat maps to reveal patterns, trends, and outliers, making complex information accessible for understanding and decision-making.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    {offerTypes.map((item) => {
                        const isOpen = openOfferCard === item.id;
                        return (
                            <div
                                key={item.id}
                                className="bg-[#edf6f2] rounded-md p-4 transition-all duration-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleOfferCard(item.id)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between text-left focus:outline-none"
                                >
                                    <div className="flex items-center space-x-2">
                                        <span className="relative w-6 h-6 shrink-0">
                                            <Image src={item.iconSrc} alt="" fill className="object-contain" />
                                        </span>
                                        <h3 className="text-xs md:text-sm font-bold text-[#1b3d36]">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <span className="text-base font-bold text-[#1b3d36] ml-2">
                                        {isOpen ? "-" : "+"}
                                    </span>
                                </button>

                                {/* Closed by default */}
                                {isOpen && (
                                    <div className="mt-3 pt-3 border-t border-teal-200 text-xs md:text-sm text-gray-700 leading-relaxed">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}