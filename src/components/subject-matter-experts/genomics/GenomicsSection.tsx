"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";


const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "single-cell-genomics",
        title: "Single-Cell Genomics",
        description:
            "Studying the genome and transcriptome at the level of individual cells helps uncover cellular diversity, rare cell types, and disease mechanisms, especially in cancer and immunology.",
    },
    {
        id: "crispr-and-genome-editing",
        title: "CRISPR and Genome Editing",
        description:
            "Advanced genome-editing tools, including base and prime editing, are enabling precise manipulation of genes for research and potential therapeutic applications.",
    },
    {
        id: "multi-omics-integration",
        title: "Multi-Omics Integration",
        description:
            "Combining genomics with transcriptomics, proteomics, metabolomics, and microbiomics provides a holistic understanding of complex diseases, driving precision medicine.",
    },
    {
        id: "population-genomics-and-diversity",
        title: "Population Genomics and Diversity",
        description:
            "Large-scale sequencing of diverse populations improves understanding of genetic variation, enhances disease risk prediction, and supports equitable healthcare.",
    },
    {
        id: "clinical-genomics-and-personalized-medicine",
        title: "Clinical Genomics & Personalized Medicine",
        description:
            "Integration of genomic data into healthcare is facilitating tailored treatment strategies, pharmacogenomics, and genetic risk assessment.",
    },
    {
        id: "artificial-intelligence-in-genomics",
        title: "Artificial Intelligence in Genomics",
        description:
            "Machine learning and AI algorithms are increasingly applied to genomic datasets to predict gene-disease associations, identify drug targets, and streamline data analysis pipelines.",
    },
];

const applicationsData = [
    {
        title: "Personalized Medicine",
        desc: "Genomics enables tailored healthcare by analysing individual genetic profiles to predict disease risk and optimize treatments. Pubrica supports researchers in translating genomic insights into clinical practice.",
        iconSrc:
            "/images/subject-matter-experts/genomics/Personalized-Medicine-1.webp",
    },
    {
        title: "Disease Research",
        desc: "Genomic studies uncover genes linked to complex diseases like cancer, diabetes, and neurodegenerative disorders, aiding early diagnosis and targeted therapies. Pubrica guides manuscript and grant preparation for impactful publication.",
        iconSrc:
            "/images/subject-matter-experts/genomics/Disease-Research.webp",
    },
    {
        title: "Pharmacogenomics",
        desc: "By studying genetic influences on drug response, pharmacogenomics helps identify optimal dosing and prevent adverse reactions. Pubrica ensures accurate communication of these findings in high-quality journals.",
        iconSrc:
            "/images/subject-matter-experts/genomics/Pharmacogenomics-1.webp",
    },
    {
        title: "Agrigenomics",
        desc: "Genomics improves crop yield, disease resistance, and sustainability by studying plant and animal genomes. Pubrica helps present Agri genomic research effectively for scientific and industry audiences.",
        iconSrc:
            "/images/subject-matter-experts/genomics/Agrigenomics.webp",
    },
    {
        title: "Evolutionary Genomics",
        desc: "This field examines genetic changes over generations to understand adaptation and diversity. Pubrica supports clear and precise dissemination of evolutionary genomic studies.",
        iconSrc:
            "/images/subject-matter-experts/genomics/Evolutionary-Genomics.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Clarke",
        degree: "PhD in Molecular Genetics",
        experience: "14 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/chemical-engineering/Dr-Ahmed-Khan.webp",
    },
    {
        name: "Dr. Maya Fernandez",
        degree: "PhD in Genomic Medicine",
        experience: "11 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Dr.-Elena-Petrova-1.webp",
    },
    {
        name: "Dr. Sophia Martinez",
        degree: "PhD in Human Genetics",
        experience: "13 years of experience",
        manuscripts: "190+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cosmeceuticals/Dr.-Sophia-Martinez-1.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/genomics/sample-works-9-4.webp",
    imageAlt: "BMC Medical Genomics Journal Cover",
    paperTitle:
        "Comparative genomic analysis of clinical Enterococcus faecalis distinguishes strains isolated from the bladder",
    author: "Hochstedler-Kramer, B. R., Ene, A., Putonti, C., & Wolfe, A. J.",
    publisher: "BioMed Central",
    journalName: "BMC Genomics",
    impactFactor: "3.7 (2024)",
};

export default function GenomicsSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Genomic Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Genomic Research"
                    description="Genomic research is rapidly evolving, driven by technological innovations and computational advancements. Here are some key emerging trends shaping the field:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Genomics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Genomics"
                    description="Genomics has wide-ranging applications across medicine, biotechnology, agriculture, and environmental sciences:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/genomics/Applications-of-Genomics.webp"
                    imageAlt="Applications of Genomics"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION: Our Expert Genorphic/Genomic Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Genomic Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}