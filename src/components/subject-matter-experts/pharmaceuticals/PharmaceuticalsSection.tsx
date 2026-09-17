"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData = [
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Accelerating drug discovery through predictive modeling, virtual screening, and real-world data analysis.'
    },
    {
        id: 'personalized-medicine',
        title: 'Personalized Medicine',
        description: 'Designing tailored drug regimens based on genetic and molecular profiling.'
    },
    {
        id: 'nanotechnology',
        title: 'Nanotechnology In Drug Delivery',
        description: 'Developing nanoscale systems for targeted, controlled drug release.'
    },
    {
        id: 'sustainable-practices',
        title: 'Sustainable Pharmaceutical Practices',
        description: 'Adopting eco-friendly synthesis, packaging, and waste management processes.'
    },
    {
        id: 'pharmacogenomics',
        title: 'Pharmacogenomics',
        description: 'Understanding how genetic variations influence drug response, enabling safer and more effective therapies.'
    }
];

const applicationsData = [
    {
        title: "Artificial Intelligence and Machine Learning",
        desc: "Accelerating drug discovery through predictive modeling, virtual screening, and real-world data analysis.",
        iconSrc:
            "/images/subject-matter-experts/pharmaceuticals/Artificial-Intelligence-and-Machine-Learning.webp",
    },
    {
        title: "Personalized Medicine",
        desc: "Designing tailored drug regimens based on genetic and molecular profiling.",
        iconSrc:
            "/images/subject-matter-experts/pharmaceuticals/Personalized-Medicine.webp",
    },
    {
        title: "Nanotechnology in Drug Delivery",
        desc: "Developing nanoscale systems for targeted, controlled drug release.",
        iconSrc:
            "/images/subject-matter-experts/pharmaceuticals/Nanotechnology-in-Drug-Delivery.webp",
    },
    {
        title: "Sustainable Pharmaceutical Practices",
        desc: "Adopting eco-friendly synthesis, packaging, and waste management processes.",
        iconSrc:
            "/images/subject-matter-experts/pharmaceuticals/Sustainable-Pharmaceutical-Practices.webp",
    },
    {
        title: "Pharmacogenomics",
        desc: "Understanding how genetic variations influence drug response, enabling safer and more effective therapies.",
        iconSrc:
            "/images/subject-matter-experts/pharmaceuticals/Pharmacogenomics.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Rahul Mehta",
        degree: "PhD in Pharmacology",
        experience: "10 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/pharmaceuticals/Dr.-Rahul-Mehta.webp",
    },
    {
        name: "Dr. Jessie",
        degree: "PhD in Pharmaceutical Sciences",
        experience: "8 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/pharmaceuticals/Dr.-jessica.webp",
    },
    {
        name: "Dr. Sofia Hernandez",
        degree: "PhD in Pharmaceutical Sciences",
        experience: "8 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/pharmaceuticals/Dr.-Sofia-Hernandezul.webp",
    },
];

export default function PharmaceuticalsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Pharmaceutical Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Pharmaceutical Research"
                    description="Pharmaceutical science is constantly evolving, driven by technological innovation, regulatory changes, and patient-centric approaches. Some of the most prominent emerging trends include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/pharmaceuticals/Emerging-Trends-in-Pharmaceutical-Research.webp"
                    imageAlt="Emerging Trends in Pharmaceutical Research"
                />

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed mt-4">
                    Pharmaceutical science is constantly evolving, driven by technological innovation, regulatory changes, and patient-centric approaches. Some of the most prominent emerging trends include:
                </p>
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/pharmaceuticals/sample-works-7-1.webp",
                    imageAlt: "Pharmacological Research Journal Cover",
                    paperTitle:
                        "S-glutathionylation in cancer: from fundamental mechanisms to clinical applications",
                    author: "Dong, S., Linghu, L., Xiao, D., Liu, S., & Tao, Y",
                    journalName: "Pharmacological Research",
                    publisher: "Elsevier",
                    impactFactor: "10.5",
                }}
            />
            {/* SECTION: Our Expert Pharmaceuticals Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Pharmaceuticals Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}