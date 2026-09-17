"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "nanomedical-science",
        title: "Nanomedical Science",
        description:
            "Development of Precision Medicine Using Targeted Therapeutics",
    },
    {
        id: "intelligent-nanoscale-materials",
        title: "Intelligent Nanoscale Materials",
        description:
            "A New Class of Materials That Respond to Stimuli and Are Used for Therapeutic and Diagnostic Applications",
    },
    {
        id: "nano-sensor-technology",
        title: "Nano sensor Technology",
        description:
            "Detection of Disease at Early-Stage Using Nano sensors",
    },
    {
        id: "gene-manipulation-technology",
        title: "Gene Manipulation Technology",
        description:
            "Efficient Delivery of CRISPR Using Nanocarriers",
    },
    {
        id: "nanotechnology-environmental-remediation",
        title: "Nanotechnology For Environmental Remediation",
        description:
            "Purification of Water and Management of Environmental Pollution Through Use of Nanosized Materials",
    },
    {
        id: "optimisation-vaccines-nanotech",
        title: "Optimisation Of Vaccines Using Nanotech",
        description:
            "Enhanced Efficacy of Vaccines, Increased Stability and New Ways for Prophylaxis Against Infectious Disease",
    },
    {
        id: "nanostructured-biomaterials",
        title: "Nanostructured Biomaterials",
        description:
            "Tissue Engineering and Regeneration Using Nanostructured Materials",
    },
    {
        id: "artificial-intelligence-nanotechnology",
        title: "Artificial Intelligence and Nanotechnology",
        description:
            "AI Optimisation of Drug Discovery and Medicine.",
    },
];

const applicationsData = [
    {
        title: "Diagnostics",
        desc: "Detection of diseases earlier using nano sensor technology.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Diagnostics.webp",
    },
    {
        title: "Gene Therapy",
        desc: "Faster and more accurate way of delivering genetic material for the purpose of gene editing and modification.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Gene-Therapy-1.webp",
    },
    {
        title: "Cancer Therapy",
        desc: "Delivery of nanoparticles targeted at cancer selectively.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Cancer-Therapy.webp",
    },
    {
        title: "Implants",
        desc: "Improvement in the functional performance and operational longevity of medical implant devices.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Implants.webp",
    },
    {
        title: "Pollution",
        desc: "Improved detection and monitoring of environmental contaminants.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Pollution.webp",
    },
    {
        title: "Removal of Chemicals from Water",
        desc: "Nanomaterials designed to remove hazardous waste chemicals from the water.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Removal-of-Chemicals-from-Water.webp",
    },
    {
        title: "Energy Sources",
        desc: "Use of nanomaterials to enhance biodiesel and other chemical conversion and energy storage processes.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Energy-Sources.webp",
    },
    {
        title: "Cosmetic Chemistry",
        desc: "Improved ability to absorb active cosmetic products.",
        iconSrc:
            "/images/subject-matter-experts/nanobiotechnology/Cosmetic-Chemistry.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Isabella Zhang",
        degree: "PhD in Nanobiotechnology",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/nanobiotechnology/Dr.-Isabella-Zhang-1.webp",
    },
    {
        name: "Dr. Oliver Patel",
        degree: "PhD in Nanomedicine and Nanomaterials",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/bioinformatics/Dr.-Laura-Kim.webp",
    },
    {
        name: "Dr. Priya Sharma",
        degree: "PhD in Nanoengineering and Biotechnology",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/dermatology/Dr.-Priya-Sharma-1.webp",
    },
];

export default function NanobiotechnologyTechniquesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nano Biotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Nano Biotechnology"
                    description="Nanobiotechnology are revolutionizing healthcare, environmental sustainability, and industry by enabling precise, targeted solutions at the nanoscale."
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Nano Biotechnology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Nano Biotechnology"
                    description="Nano Biotechnology has wide-ranging applications that contribute to solutions to major global challenges: Targeting, accuracy and speed in transporting drugs while minimising side effects."
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/nanobiotechnology/Applications-of-Nano-Biotechnology.webp"
                    imageAlt="Applications of Nano Biotechnology"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/nanobiotechnology/sample-works-11-6.webp",
                    imageAlt: "Nature Nanotechnology Journal Cover",
                    paperTitle: "Progress in cancer vaccines enabled by nanotechnology",
                    author:
                        "B. J. Kim, Nouran S. Abdelfattah, Alexander Hostetler & Darrell J. Irvine",
                    journalName: "Nature Nanotechnology",
                    publisher: "Nature Portfolio",
                    impactFactor: "4.9 (2024)",
                }}
            />

            {/* SECTION: Our Expert Nano Biotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Nano Biotechnology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}