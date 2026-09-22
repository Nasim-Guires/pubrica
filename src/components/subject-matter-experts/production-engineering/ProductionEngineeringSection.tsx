"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "industry-4.0",
        title: "Industry 4.0",
        description:
            "Use of internet of things and data analytics to create intelligent factories.",
    },
    {
        id: "ai-ml",
        title: "AI & ML",
        description:
            "Use of artificial intelligence and machine learning to improve production processes through intelligent optimization.",
    },
    {
        id: "digital-twin",
        title: "Digital Twin",
        description:
            "Virtual simulation of actual production systems.",
    },
    {
        id: "additive-manufacturing",
        title: "Additive Manufacturing",
        description:
            "Production methods that employ a layer-based approach for flexibility and customization.",
    },
    {
        id: "sustainability",
        title: "Sustainability",
        description:
            "Eco-friendly methods that are energy efficient.",
    },
    {
        id: "robotics",
        title: "Robotics",
        description:
            "Automated production systems that are flexible.",
    },
    {
        id: "human-machine",
        title: "Human-Machine",
        description:
            "A relationship that enables operators to work with intelligent machines collaboratively.",
    },
];

const applicationsData = [
    {
        title: "",
        desc: "Making products in large quantities in an efficient manner",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Making-products.webp",
    },
    {
        title: "",
        desc: "Production Planning Controls (PPC): Scheduling and inventory planning",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Production-Planning-Controls.webp",
    },
    {
        title: "",
        desc: "Quality Assurance: Reduce defects and ensure quality",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Quality-Assurance.webp",
    },
    {
        title: "",
        desc: "Automation: Use robots and automated production processes",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Automation.webp",
    },
    {
        title: "",
        desc: "Logistics: Providing an economical way of managing logistics",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Logistics.webp",
    },
    {
        title: "",
        desc: "Maintenance: Increased reliability, reduced downtime",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Maintenance.webp",
    },
    {
        title: "",
        desc: "Sustainability: Environmentally friendly manufacturing processes.",
        iconSrc:
            "/images/subject-matter-experts/production-engineering/Sustainability.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Evelyn Carter",
        degree: "PhD in Production Engineering",
        experience: "12 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/production-engineering/Dr.-Evelyn-Carter-2.webp",
    },
    {
        name: "Dr. Maya Chen",
        degree: "PhD in Robotic Engineering",
        experience: "10 years of experience",
        manuscripts: "145+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Maya-Chen-3.webp",
    },
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Manufacturing Engineering",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/production-engineering/Dr.-Arjun-Mehta-1-1.webp",
    },
];

export default function ProductionEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Production Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Production Engineering"
                    description="The field is rapidly evolving, driven by breakthroughs in technology and multidisciplinary research. Major emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Production Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Production Engineering"
                    description="Production engineering has wide-ranging applications that contribute to solutions to major global challenges:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/production-engineering/Applications-of-Production-Engineering.webp"
                    imageAlt="Applications of Production Engineering"
                />
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    These applications reflect the multidisciplinary potential of Production engineering in shaping the future of science and technology.
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={{
                        imageSrc:
                            "/images/subject-matter-experts/production-engineering/sample-works-11-9.webp",
                        imageAlt:
                            "Recent Trends in Industrial and Production Engineering Journal Cover",
                        paperTitle:
                            "Manufacturing multi-material ceramics by sinterjoining based on vat photopolymerization (VPP)",
                        author: "Johannes Schubert, Michael Schott & Frederik Zanger",
                        journalName: "Production Engineering",
                        publisher: "Springer Nature",
                        impactFactor: "1.6",
                    }}
                />
            </section>

            {/* SECTION: Our Expert Production Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Production Engineering Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}