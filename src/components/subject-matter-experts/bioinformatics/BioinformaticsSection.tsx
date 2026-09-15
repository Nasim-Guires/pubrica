"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData = [
    {
        id: "ai-ml",
        title: "Artificial Intelligence and Machine Learning",
        description:
            "AI-driven models enhance predictions in genomics, protein structure modelling, and disease classification.",
    },
    {
        id: "single-cell",
        title: "Single-Cell Multi-Omics",
        description:
            "Single-cell technologies enable deeper insights into cellular heterogeneity, tumour microenvironments, and immune responses.",
    },
    {
        id: "crispr-analytics",
        title: "CRISPR Data Analytics",
        description:
            "Bioinformatics algorithms optimize gRNA design, off-target predictions, and CRISPR editing outcomes.",
    },
    {
        id: "cloud-bioinformatics",
        title: "Cloud-Based Bioinformatics",
        description:
            "Cloud platforms enable scalable, cost-effective analysis pipelines for large biological datasets.",
    },
    {
        id: "predictive-translational",
        title: "Predictive and Translational Bioinformatics",
        description:
            "Models linking genomic changes with clinical phenotypes are transforming precision medicine.",
    },
    {
        id: "long-read-sequencing",
        title: "Long-Read Sequencing Analysis",
        description:
            "Technologies like PacBio and Nanopore generate longer reads, improving genome assembly accuracy.",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Elena Park",
        degree: "PhD in Molecular Bioinformatics",
        experience: "5 years of experience",
        manuscripts: "50+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp",
    },
    {
        name: "Dr. Karrel",
        degree: "PhD in Bioinformatics",
        experience: "7 years of experience",
        manuscripts: "75+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/bioinformatics/Dr.-Karrel.webp",
    },
    {
        name: "Dr. Samuel D'Souza",
        degree: "PhD in Animal Science",
        experience: "8 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/bioinformatics/Dr.-Samuel-DSouza.webp",
    },
];
const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/bioinformatics/sample-works-11-15.webp",
    imageAlt: "Bioinformatics Journal Cover",
    paperTitle:
        "TransST: transfer learning embedded spatial factor modeling of spatial transcriptomics data",
    author: "Liu, S.S., Wang, S., Chen, Y. et al.",
    publisher: "BioMed Central",
    journalName: "BMC Bioinformatics",
    impactFactor: "3.3",
};
export default function BioinformaticsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Bioinformatics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Bioinformatics"
                    description="Bioinformatics continues to evolve with technological innovations and scientific breakthroughs. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={whereAuthorsPublishData}
                />
            </section>

            {/* SECTION 3: Our Expert Bioinformatics Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Bioinformatics Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}