"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, PawPrint, Pill, Utensils, Fuel, Leaf } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "next-gen-enzyme-discovery",
        title: "Next-Generation Enzyme Discovery",
        description:
            "Mining novel enzymes from extremophiles and microbial diversity to expand reaction capabilities.",
    },
    {
        id: "synthetic-biology-integration",
        title: "Synthetic Biology Integration",
        description:
            "Designing artificial pathways for efficient biocatalytic synthesis of complex molecules.",
    },
    {
        id: "biocatalyst-immobilization",
        title: "Biocatalyst Immobilization",
        description:
            "Enhancing enzyme reusability and process stability for industrial applications.",
    },
    {
        id: "sustainable-green-chemistry",
        title: "Sustainable and Green Chemistry",
        description:
            "Leveraging biocatalysts to reduce waste, energy consumption, and reliance on hazardous chemicals.",
    },
    {
        id: "computational-enzyme-design",
        title: "Computational Enzyme Design",
        description:
            "Utilizing AI and molecular modelling to predict enzyme-substrate interactions and improve catalytic efficiency.",
    },
    {
        id: "animal-nutrition-applications",
        title: "Animal Nutrition Applications",
        description:
            "Innovating enzyme formulations to improve feed digestibility, gut health, and nutrient bioavailability.",
    },
];
const applicationsData = [
    {
        title: "Animal Science",
        desc: "Enzyme supplementation in feed improves nutrient digestibility, promotes animal health, and reduces environmental nitrogen load.",
        iconSrc: "/images/subject-matter-experts/biocatalysts/Animal-Science.webp",
    },
    {
        title: "Pharmaceuticals",
        desc: "Biocatalysts enable stereoselective drug synthesis, lowering costs and minimizing hazardous by-products.",
        iconSrc: "/images/subject-matter-experts/biocatalysts/Pharmaceuticals-1.webp",
    },
    {
        title: "Food Industry",
        desc: "Enzymatic processing enhances food quality, flavour, and shelf-life while reducing chemical additives.",
        iconSrc: "/images/subject-matter-experts/biocatalysts/Food-Industry.webp",
    },
    {
        title: "Biofuels and Green Chemistry",
        desc: "Microbial and enzymatic catalysis convert biomass into biofuels and fine chemicals, reducing carbon footprints.",
        iconSrc: "/images/subject-matter-experts/biocatalysts/Biofuels-and-Green-Chemistry.webp",
    },
    {
        title: "Environmental Remediation",
        desc: "Biocatalysts degrade pollutants, detoxify waste streams, and contribute to cleaner ecosystems.",
        iconSrc: "/images/subject-matter-experts/biocatalysts/Environmental-Remediation.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Biocatalysis",
        experience: "8 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biocatalysts/Dr.-Arjun-Mehta-2.webp",
    },
    {
        name: "Dr. Ethan Li",
        degree: "PhD in Biocatalytic Engineering",
        experience: "10 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomedical-engineering/Dr.-Ethan-Varghese-1.webp",
    },
    {
        name: "Dr. Priya Kapoor",
        degree: "PhD in Biocatalyst Development",
        experience: "7 years of experience",
        manuscripts: "95 manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocatalysts/Dr.-Priya-Kapoor.webp",
    },
];
const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biocatalysts/sample-works-7-4.webp",
    imageAlt: "ACS Catalysis Journal Cover",
    paperTitle:
        "A Chimera between Particulate and Soluble Methane Monooxygenases Produces Methanol Using Endogenous NADH in Escherichia coli",
    author: "Yu, Y., Choi, Y., Kwon, Y. W., & Lee, J",
    publisher: "American Chemical Society",
    journalName: "ACS Catalysis",
    impactFactor: "3.1",
};

export default function BiocatalystsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Biocatalyst Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Biocatalyst Research"
                    description="Biocatalysis is at the forefront of innovation in biotechnology. Staying ahead requires awareness of emerging trends, including:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* NEW SECTION: Applications of Biocatalyst Research */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Applications of Biocatalyst Research"
                    description="Biocatalysts impact multiple industries, driving innovation and sustainability:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/biocatalysts/Applications-of-Biocatalyst-Research.webp"
                    imageAlt="Applications of Biocatalyst Research"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />
            {/* SECTION 4: Our Expert Biocatalyst Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biocatalyst Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}