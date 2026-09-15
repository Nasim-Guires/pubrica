"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
    Briefcase,
    FileText,
    Dna,
    Search,
    Sprout,
    Network,
    Cpu,
    Brain
} from 'lucide-react';
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData = [
    {
        id: "integrative-multi-omics",
        title: "Integrative Multi-Omics Approaches",
        description:
            "Combining data from multiple omics layers allows researchers to obtain a holistic view of biological systems. Biocomputing tools are advancing to enable efficient integration, interpretation, and visualization of these complex datasets.",
    },
    {
        id: "single-cell-analysis",
        title: "Single-Cell Analysis",
        description:
            "Single-cell sequencing is reshaping our understanding of cellular heterogeneity. Computational methods in biocomputing now allow precise clustering, trajectory inference, and identification of rare cell types.",
    },
    {
        id: "ai-drug-discovery",
        title: "Artificial Intelligence in Drug Discovery",
        description:
            "AI-driven biocomputing is increasingly applied in virtual screening, target identification, and predictive toxicology, significantly accelerating pharmaceutical innovation.",
    },
    {
        id: "crispr-genome-editing",
        title: "CRISPR and Genome Editing Simulations",
        description:
            "Computational modelling predicts off-target effects and optimizes CRISPR-mediated genome editing, improving precision and safety in gene therapy.",
    },
    {
        id: "digital-twin-models",
        title: "Digital Twin Models of Biological Systems",
        description:
            "Virtual models of organs or whole organisms enable simulation-based experimentation, facilitating predictive insights without the need for extensive wet-lab trials.",
    },
    {
        id: "cloud-based-biocomputing",
        title: "Cloud-Based Biocomputing Solutions",
        description:
            "Cloud computing allows scalable storage and processing of massive biological datasets, making high-performance computational resources accessible to researchers globally.",
    },
];

const applicationsData = [
    {
        title: "Genomics and Precision Medicine",
        desc: "Biocomputing tools analyze patient genomes to identify mutations, predict disease risk, and inform personalized treatment strategies.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Genomics-and-Precision-Medicine.webp",
    },
    {
        title: "Drug Discovery and Development",
        desc: "Computational simulations, molecular docking, and virtual screening help identify promising drug candidates faster and more cost-effectively than traditional methods.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Drug-Discovery-and-Development-1.webp",
    },
    {
        title: "Agricultural and Environmental Biotechnology",
        desc: "Biocomputing supports genome editing in crops, predictive modelling of ecosystems, and bioremediation strategies for environmental sustainability.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Agricultural-and-Environmental-Biotechnology.webp",
    },
    {
        title: "Systems Pharmacology",
        desc: "Predictive modelling of drug interactions, metabolism, and toxicity ensures safer and more effective therapeutics.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Systems-Pharmacology.webp",
    },
    {
        title: "Synthetic Biology and Bioengineering",
        desc: "Designing synthetic pathways, optimizing metabolic fluxes, and creating artificial biological systems are facilitated by advanced computational frameworks.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Synthetic-Biology-and-Bioengineering.webp",
    },
    {
        title: "Neuroscience and Cognitive Modelling",
        desc: "Computational models simulate neural networks, brain connectivity, and cognitive processes, supporting research in neurodegenerative diseases and mental health.",
        iconSrc: "/images/subject-matter-experts/biocomputing/Neuroscience-and-Cognitive-Modelling.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Elena Varkins",
        degree: "PhD in Biocomputing",
        experience: "12 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biocomputing/Dr.-Elena-Varkins.webp",
    },
    {
        name: "Dr. Marcus Lethbridge",
        degree: "PhD in Computational Genomics",
        experience: "10 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocomputing/Dr.-Sanjay-Verma.webp",
    },
    {
        name: "Dr. Tobias Reinhardt",
        degree: "PhD in Biocomputing",
        experience: "13 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocomputing/Dr.-Tobias-Reinhardt.webp",
    },
];
const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biocomputing/sample-works-10-1.webp",
    imageAlt: "Journal of Computational Biology Cover",
    paperTitle:
        "A new structure feature introduced to predict protein-protein interaction sites",
    author:
        "Lai, L., Geng, J., Duan, H., Chen, S., Huang, L., & Yu, J",
    publisher: "Mary Ann Liebert",
    journalName: "Journal of Computational Biology",
    impactFactor: "1.6",
};
export default function BiocomputingSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Biocomputing Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Biocomputing Research Trends"
                    description="Biocomputing is evolving rapidly, and several trends are reshaping the global research landscape:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* NEW SECTION: Applications of Biocomputing */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Applications of Biocomputing"
                    description="Biocomputing research has widespread implications across modern science, industry, and healthcare. Major applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/biocomputing/Applications-of-Biocomputing.webp"
                    imageAlt="Applications of Biocomputing"
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

            {/* SECTION 3: Our Expert Biocomputing Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biocomputing Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}