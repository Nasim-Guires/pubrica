"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Building2,
    Landmark,
    ShoppingCart,
    Radio,
    Cpu,
    Factory,
} from "lucide-react";

export default function BigDataTrendsAndPublishingSection() {
    const [activeTab, setActiveTab] = useState(0);

    const trendsTabs = [
        {
            title: "Cloud-Based Big Data Platforms",
            heading: "Cloud-Based Big Data Platforms",
            content:
                "Cloud-based big data platforms enable scalable, flexible and cost-effective storage, processing and analysis by using Cloud Computing and Big Data together through platforms such as Amazon Web Services (AWS), Microsoft Azure and Google Cloud.",
        },
        {
            title: "Real-time data processing",
            heading: "Real-time Data Processing",
            content:
                "Apache Spark and Kafka provide real-time data analytics, which supports Timely Data-Driven Decision-Making and Real-Time Insights across All Industries.",
        },
        {
            title: "AI and ML Integration",
            heading: "AI and ML Integration",
            content:
                "hrough the combination of Big Data and AI and Machine Learning (ML) resources; businesses and researchers can create predictive analytics and build automated and automated decision support systems that improve their performance and/or reach placed throughout their industry.",
        },
        {
            title: "Data Governance and Security",
            heading: "Data Governance and Security",
            content:
                "The increase in Data Governance, Regulatory Compliance and Privacy legislations is creating greater emphasis on providing secure handling of large-scale data sets.",
        },
        {
            title: "Edge Computing and IoT Integration",
            heading: "Edge Computing and IoT Integration",
            content:
                "By processing data closer to the point of origin, Edge Computing reduces latency and enhances performance of IoT driven applications and real-time data analytics.",
        },
        {
            title: "Advanced Data Visualization and Analytics",
            heading: "Advanced Data Visualization and Analytics",
            content:
                "Interactive dashboards and Advanced Visualizations enable data users to visualize and understand complex data sets to make timely and informed decisions.",
        },
    ];

    const applications = [
        {
            title: "Hospital's Information: Diagnosis, Monitoring and Analytics are Based on Data",
            icon: Building2,
        },
        {
            title: "Banks and Insurance: Fraud Detection, Risk Management and Real-time Analytics",
            icon: Landmark,
        },
        {
            title: "Retailers: Analysis of Consumer Behaviour and Forecasting Demand",
            icon: ShoppingCart,
        },
        {
            title: "Telecoms: Network Optimisation and Use Analytics",
            icon: Radio,
        },
        {
            title: "Smart Cities: Traffic Management, Energy Optimisation and Analytics of IoT",
            icon: Cpu,
        },
        {
            title: "Manufacturing: Predictive Maintenance and Optimisation of Processes",
            icon: Factory,
        },
    ];

    const editors = [
        {
            name: "Dr. Rajesh Kumar",
            role: "PhD in Big Data Analytics",
            experience: "14 years of experience",
            manuscripts: "100+ manuscripts edited",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
        },
        {
            name: "Dr. Ananya Verma",
            role: "PhD in Data Science and Hadoop Technologies",
            experience: "11 years of experience",
            manuscripts: "140+ manuscripts edited",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
        },
        {
            name: "Dr. Michael Thompson",
            role: "PhD in Distributed Computing and Big Data Systems",
            experience: "16 years of experience",
            manuscripts: "150+ manuscripts edited",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 bg-white font-sans text-gray-800 space-y-16">

            {/* SECTION 1: EMERGING TRENDS IN BIG DATA & HADOOP */}
            <section className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Emerging Trends in Big Data & Hadoop
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        As industries around the world continue to evolve due to the increasing use of data-driven technologies such as Big Data and Hadoop, the ability to perform huge amounts of data processing with a highly scalable way, perform advanced analysis and make decisions in real-time has arrived. Here are some of the main trends emerging from these technologies:
                    </p>
                </div>

                {/* Tabs Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-300 bg-[#f8f9fa] rounded-t-sm overflow-hidden text-center">
                    {trendsTabs.map((tab, idx) => {
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`py-3 px-2 text-[11px] font-bold transition-all border-r border-b lg:border-b-0 border-gray-300 last:border-r-0 flex items-center justify-center leading-snug ${isActive
                                    ? "bg-[#0d3630] text-white border-b-2 border-b-[#0d3630]"
                                    : "bg-[#f8f9fa] text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {tab.title}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content Box */}
                <div className="border border-gray-300 border-t-0 rounded-b-sm p-6 bg-white shadow-sm space-y-3">
                    <h3 className="text-sm md:text-base font-bold text-[#0d3630]">
                        {trendsTabs[activeTab].heading}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {trendsTabs[activeTab].content}
                    </p>
                </div>
            </section>

            {/* SECTION 2: APPLICATIONS OF BIG DATA & HADOOP */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Applications of Big Data & Hadoop
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        Big Data and Hadoop technologies are widely used across industries to manage, analyze, and extract valuable insights from massive datasets. Key application areas include:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Applications List */}
                    <div className="lg:col-span-7 space-y-4">
                        {applications.map((app, idx) => {
                            const Icon = app.icon;
                            return (
                                <div key={idx} className="flex items-start gap-3.5">
                                    <div className="p-2 bg-[#0d3630]/10 rounded-lg text-[#0d3630] shrink-0 mt-0.5">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-xs md:text-sm font-semibold text-gray-700 leading-relaxed">
                                            {app.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side Cloud Graphic Image */}
                    <div className="lg:col-span-5 flex justify-center sticky top-6">
                        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="Big Data Cloud Analytics"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
            <section className="space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Where Our Authors Publish
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Our authors share Big Data & Hadoop, in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                    <div className="relative w-40 h-52 shrink-0 border border-gray-200 shadow-sm rounded overflow-hidden bg-gray-50">
                        <Image
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400"
                            alt="Big Data Research Journal Cover"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-2 text-xs md:text-sm">
                        <h3 className="font-bold text-[#0d3630] text-sm md:text-base">
                            Paper Title: Novel V2X-based traffic congestion prediction system
                        </h3>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Author:</span> Norman Bereczki, Vilmos Simon.
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Journal Name:</span> Big Data Research
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Publisher:</span> Elsevier
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold text-gray-800">Impact factor:</span> 4.2
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: OUR EXPERT BIG DATA & HADOOP EDITORS */}
            <section className="space-y-8">
                <div className="text-center space-y-2 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#0d3630]">
                        Our Expert Big Data & Hadoop Editors
                    </h2>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        At Pubrica, our staff of professional editors specialising in data mining will edit manuscripts to make them suitable for publication with the highest level of clarity, precision and impact. The editors have earned higher degrees or possess domain-specific experience in data mining, machine learning, big data analytics, and computational modelling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {editors.map((editor, idx) => (
                        <div
                            key={idx}
                            className="bg-[#eaf1ee] border border-[#d3e2de] rounded-lg p-5 text-center space-y-4 shadow-sm"
                        >
                            <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-white shadow-sm">
                                <Image
                                    src={editor.avatar}
                                    alt={editor.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-[#0d3630]">
                                    {editor.name}
                                </h3>
                                <p className="text-xs text-gray-600 font-medium">
                                    {editor.role}
                                </p>
                            </div>
                            <div className="pt-2 border-t border-gray-300/60 flex justify-around text-xs text-gray-700 font-medium">
                                <span>{editor.experience}</span>
                                <span>•</span>
                                <span>{editor.manuscripts}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}