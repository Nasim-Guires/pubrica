"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const trustItemsData = [
    {
        title: 'PhD Subject-Matter Experts',
        description: 'Specialists with deep expertise across food science, biotechnology, microbiology, nutrition, and food engineering.'
    },
    {
        title: 'Journal-Compliant Deliverables',
        description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top food science journals.'
    },
    {
        title: '15+ Years of Research Excellence',
        description: 'Trusted globally by researchers, academicians, and industry professionals.'
    },
    {
        title: '100% Confidential & Secure',
        description: 'Your data, research results, and manuscripts remain fully protected.'
    },
    {
        title: 'End-to-End Support',
        description: 'From ideation to publication, we assist at every stage with consistency and precision.'
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "modelling-ai",
        title: "Modelling Created with Artificial Intelligence",
        description:
            "Machine Learning/Artificial Intelligence Predictive Models & Process Optimisation Applications",
    },
    {
        id: "digital-twins",
        title: "Digital Twins of Food Processes",
        description:
            "Virtual Simulations for Real-time Monitoring/Control of Food Processing Systems",
    },
    {
        id: "sustainable-processing",
        title: "Sustainable Processing",
        description:
            "Model Development Energy Efficient Environmentally Friendly Food Processing Technologies",
    },
    {
        id: "smart-processing-systems",
        title: "Smart Processing Systems",
        description:
            "Through the development of Real-time Sensor/Automation Systems to allow for Quality Control of Food Products",
    },
    {
        id: "advanced-thermal",
        title: "Advanced Thermal/Non-thermal",
        description:
            "Models of Innovation Examples Include High-pressure Processing, Pulsed Electric Fields, and Cold Plasma Technologies",
    },
];

const applicationsData = [
    {
        title: "",
        desc: " Food Industry, to make sure that food products are produced according to the best methods (for example, by utilising the best procedures and equipment for creating quality food products, producing safe foods, etc.).",
        iconSrc:
            "/images/subject-matter-experts/food-processing/Food-Industry-1.webp",
    },
    {
        title: "",
        desc: "Public Health, to make sure that foods produced for consumption are safe by using predictive microbial and thermal models.",
        iconSrc:
            "/images/subject-matter-experts/food-processing/Public-Health.webp",
    },
    {
        title: "",
        desc: "Sustainable Practices to reduce energy use and food waste, while improving the performance of food processing systems.",
        iconSrc:
            "/images/subject-matter-experts/food-processing/Sustainable-Practices.webp",
    },
    {
        title: "",
        desc: "Research and Innovation to promote the development of new technologies and intelligent systems for food processing.",
        iconSrc:
            "/images/subject-matter-experts/food-processing/Research-and-Innovation-1.webp",
    },
    {
        title: "",
        desc: "Policy and Regulation to assist with compliance with food safety standards and laws.",
        iconSrc:
            "/images/subject-matter-experts/food-processing/Policy-and-Regulation.webp",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/food-processing/sample-works-13.webp",
    imageAlt: "Journal of Food Processing and Preservation Cover",
    paperTitle:
        "Optimisation of Cassava Starch-Based Biodegradable Films with Garcinia kola Oil and Cocos nucifera L. Microfibers Using Response Surface Methodology.",
    author:
        "Yao Désiré Adjouman, Amenan Aline Doh, Charlemagne Nindjin, Dekker Matthis, Kouamé Alfred Kahi, Fabrice Achille Tetchi, N'Guessan Georges Amani",
    publisher: "Wiley",
    journalName: "Journal of Food Processing and Preservation",
    impactFactor: "2.5",
};
const areasOfStudyData = [
    { title: 'Food Process Engineering' },
    { title: 'Thermal and Non-Thermal Processing' },
    { title: 'Food Rheology and Texture' },
    { title: 'Mathematical Modeling and Simulation' },
    { title: 'Predictive Microbiology' },
    { title: 'Food Packaging Technology' },
    { title: 'Enzyme Technology in Food' },
    { title: 'Fermentation and Bioprocesses' },
    { title: 'Post-Harvest Technology' },
    { title: 'Nanotechnology in Food' },
    { title: 'Waste Valorization and Sustainability' },
    { title: 'Quality Control and Automation' }
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Daniel Fischer",
        degree: "PhD in Food Processing & Engineering",
        experience: "16 years of experience",
        manuscripts: "210+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/food-processing/Dr.-Daniel-Fischer.webp",
    },
    {
        name: "Dr. Priya Nair",
        degree: "PhD in Food Process Engineering",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp",
    },
    {
        name: "Dr. Michael Chen",
        degree: "PhD in Thermal Food Processing",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Miguel-Torres.webp",
    },
];

export default function FoodProcessingSection() {
    const [openTrustIndices, setOpenTrustIndices] = useState<number[]>([]);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndices((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Why Researchers Trust Pubrica for Food Processing Models */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Researchers Trust Pubrica for Food Processing Models
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Researchers choose Pubrica for its expert-driven approach to food
                        processing models, backed by experienced PhD specialists and a strong
                        track record of research excellence.
                    </p>
                </div>

                {/* Added items-start here */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {trustItemsData.map((item, index) => {
                        const isOpen = openTrustIndices.includes(index);

                        return (
                            <div
                                key={index}
                                className="rounded-md border border-[#0e3b32] shadow-sm self-start overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleTrustItem(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-base sm:text-lg bg-[#0e3b32] text-white hover:bg-[#124b3f] transition-colors"
                                >
                                    <span>{item.title}</span>

                                    {isOpen ? (
                                        <Minus className="w-5 h-5 shrink-0 text-white" />
                                    ) : (
                                        <Plus className="w-5 h-5 shrink-0 text-white" />
                                    )}
                                </button>

                                {isOpen && item.description && (
                                    <div className="px-6 pb-4 pt-4 bg-white border-t border-[#0e3b32] text-gray-800 text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION: Emerging Trends in Food Processing Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Food Processing Research"
                    description="Food Technology has experienced rapid growth with the introduction of new technologies, such as data-driven technologies. Here are three important trends in food processing:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>
            <p className="text-gray-700 text-base sm:text-lg max-w-full leading-relaxed mt-2 mb-4 text-left pl-4 sm:pl-8 md:pl-12 lg:pl-16">
                In the field of food processing, there have also been advancements in technology, and therefore, it is important to implement new approaches to improve Sustainability, Efficiency, and Innovation.
            </p>

            {/* SECTION: Applications of Food Processing */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Food Processing"
                    description="Food processing models are used in many different fields:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/food-processing/Applications-of-Food-Processing.webp"
                    imageAlt="Applications of Food Processing"
                />
            </section>

            {/* SECTION: Areas of Study */}
            {/* <section className="max-w-6xl mx-auto space-y-8 bg-[#0e3b32] text-white p-8 sm:p-12 rounded-xl">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Areas of Study
                    </h2>
                    <div className="w-16 h-1 bg-white mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {areasOfStudyData.map((area, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-900 px-4 py-3 rounded-md shadow-xs flex items-center space-x-3 font-semibold text-sm sm:text-base"
                        >
                            <ChevronRight className="w-4 h-4 text-[#0e3b32] shrink-0" />
                            <span>{area.title}</span>
                        </div>
                    ))}
                </div>
            </section> */}


            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION: Our Expert Food Processing Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Food Processing Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}