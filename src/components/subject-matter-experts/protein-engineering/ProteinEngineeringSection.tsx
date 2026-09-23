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
        id: "ai-ml",
        title: "Artificial Intelligence & Machine Learning",
        description:
            "Proteins can now be designed more quickly and with improved accuracy by using Artificial Intelligence (AI) and Machine Learning (ML) to predict how the proteins will look, how they will work, and how they will be used.",
    },
    {
        id: "crispr-gene-editing",
        title: "CRISPR-Cas9 & Gene Editing",
        description:
            "CRISPR-Cas9 technology allows scientists to change proteins precisely, producing therapeutic proteins or proteins for bioengineering applications.",
    },
    {
        id: "synthetic-de-novo",
        title: "Synthetic Biology & De Novo Design",
        description:
            "Synthetic biologists have developed techniques to make completely new proteins with unique properties. These new proteins are used in medicine and sustainable energy.",
    },
    {
        id: "protein-drug-conjugates",
        title: "Protein-Drug Conjugates",
        description:
            "Protein-drug conjugates target specific disease areas and are designed as combination therapies; they provide a safer and more effective method for treating cancer.",
    },
    {
        id: "directed-evolution",
        title: "Directed Evolution",
        description:
            "Directed evolution uses high-throughput screening methods to develop proteins with specific functions to meet therapeutic and industrial requirements.",
    },
    {
        id: "in-vivo-engineering",
        title: "In Vivo Protein Engineering",
        description:
            "Creating functional proteins directly inside the human body provides efficient and authentic solutions for proteins in drug design.",
    },
];

const applicationsData = [
    {
        title: "Therapeutic Proteins",
        desc: "Creating bioengineered therapeutics such as Recombinant Antibodies and Enzymes used in treating various illnesses/diseases.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Therapeutic-Proteins.webp",
    },
    {
        title: "Enzyme Engineering",
        desc: "Developing more efficient and effective use of Enzymes for Industrial Applications (e.g., Biofuels, Food, and Detergents).",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Enzyme-Engineering.webp",
    },
    {
        title: "Protein-Based Vaccines",
        desc: "Design proteins to provide a safer and more effective way of Vaccination.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Protein-Based-Vaccines.webp",
    },
    {
        title: "Gene Therapy",
        desc: "Modify proteins to carry and implant target genes.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Gene-Therapy.webp",
    },
    {
        title: "Diagnostic Proteins",
        desc: "Design proteins for accurate diagnostic purposes.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Diagnostic-Proteins.webp",
    },
    {
        title: "Protein-Drug Conjugate",
        desc: "Targeted delivery of anticancer drugs to cancerous cells; reducing the side effects associated with chemotherapeutic agents.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Protein-Drug-Conjugate.webp",
    },
    {
        title: "Biodegradable Polymer",
        desc: "Create biodegradable polymers to provide renewable and sustainable materials that are eco-friendly.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Biodegradable-Polymer.webp",
    },
    {
        title: "Bioremediation",
        desc: "Engineering proteins to break down Pollutants from the Environment.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Bioremediation.webp",
    },
    {
        title: "Agricultural Biotechnology",
        desc: "Increase the strength, Mitigating Stress Passing, etc... of Crops, and improve Nutritional Value, etc. of Crops.",
        iconSrc:
            "/images/subject-matter-experts/protein-engineering/Agricultural-Biotechnology.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Evelyn Carter",
        degree: "PhD in Protein Engineering",
        experience: "12 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/protein-engineering/Dr.-Evelyn-Carter.webp",
    },
    {
        name: "Dr. Maya Chen",
        degree: "PhD in Molecular Biotechnology",
        experience: "10 years of experience",
        manuscripts: "145+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/Dr.-Maya-Chen.webp",
    },
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Bioengineering",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/protein-engineering/Dr.-Arjun-Mehta-1.webp",
    },
];

export default function ProteinEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Protein Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Protein Engineering"
                    description="Biomedical imaging is rapidly advancing with new technologies that improve diagnostic accuracy, treatment planning, and patient outcomes. Some of the most important emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Protein Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Protein Engineering"
                    description="Applications of Engineering Proteins include many different applications of Protein Engineering in biomedicine and biotechnology & Pharmaceutical"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/protein-engineering/Applications-of-Protein-Engineering.webp"
                    imageAlt="Applications of Protein Engineering"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/protein-engineering/sample-works-11-1.webp",
                    imageAlt: "Proteins Structure Function Bioinformatics Journal Cover",
                    paperTitle:
                        "A large-scale evolutionary and structural analysis of CLC channels and transporters",
                    author: "Ayush Mishra, Gladys Díaz Vázquez, Janice L. Robertson",
                    journalName: "Protein Science",
                    publisher: "Wiley",
                    impactFactor: "5.2",
                }}
            />

            {/* SECTION: Our Expert Protein Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Protein Engineering Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}