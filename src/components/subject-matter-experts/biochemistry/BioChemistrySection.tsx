"use client";
import Image from "next/image";
import React, { useState } from 'react';
import {
    BookOpen,
    Award,
    Briefcase,
    FileText,
    PenTool,
    Send,
    Image as ImageIcon,
    BookMarked,
    Stethoscope,
    Pill,
    Sprout,
    Search,
    GraduationCap
} from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import Link from "next/link";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const serviceIconsData = [
    {
        title: "Scientific Writing",
        iconSrc: "/images/subject-matter-experts/biochemistry/Molecular-Biology-and-Genetics.webp",
        icon: PenTool,
    },
    {
        title: "Journal Submission",
        iconSrc: "/images/subject-matter-experts/biochemistry/Enzymology-andProtein-Chemistry.webp",
        icon: Send,
    },
    {
        title: "Graphical Abstract",
        iconSrc: "/images/subject-matter-experts/biochemistry/Metabolism-and-Bioenergetics.webp",
        icon: ImageIcon,
    },
    {
        title: "Journal Selection",
        iconSrc: "/images/subject-matter-experts/biochemistry/Structural-Biology.webp",
        icon: BookMarked,
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "omics-technologies",
        title: "Omics Technologies",
        description:
            "Genomics, proteomics, metabolomics, and transcriptomics provide holistic insights into cellular function and disease mechanisms, enabling precision medicine approaches.",
    },
    {
        id: "crispr-genome-editing",
        title: "CRISPR and Genome Editing",
        description:
            "The ability to precisely edit genes is revolutionizing biochemistry, allowing targeted research into gene function, disease modelling, and therapeutic development.",
    },
    {
        id: "ai-computational-biochemistry",
        title: "Artificial Intelligence and Computational Biochemistry",
        description:
            "AI and machine learning are accelerating the analysis of biochemical data, predicting protein structures, and simulating metabolic networks to drive innovation in drug discovery.",
    },
    {
        id: "synthetic-biology",
        title: "Synthetic Biology and Biomolecular Engineering",
        description:
            "The design of novel biomolecules and synthetic pathways is transforming biotechnology, creating solutions for healthcare, agriculture, and industrial applications.",
    },
    {
        id: "single-cell-biochemistry",
        title: "Single-Cell Biochemistry",
        description:
            "Advanced techniques now allow the study of individual cells, offering insights into cellular heterogeneity, signalling dynamics, and disease progression at unprecedented resolution.",
    },
    {
        id: "integrative-structural-biology",
        title: "Integrative Structural Biology",
        description:
            "Combining multiple structural techniques enables a comprehensive understanding of biomolecular complexes, advancing both fundamental and applied biochemistry research.",
    },
];

const realWorldApplications = [
    {
        title: "Disease Diagnosis and Treatment",
        iconSrc:
            "/images/subject-matter-experts/biochemistry/Cell-Signalling-and-Molecular-Interactions.webp",
        desc:
            "Identifying biomarkers for early detection of diseases such as cancer, diabetes, and neurological disorders.",
        icon: Stethoscope,
    },
    {
        title: "Pharmaceutical Development",
        iconSrc:
            "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
        desc: "Targeting enzymes and receptors to develop novel therapeutics.",
        icon: Pill,
    },
    {
        title: "Agricultural Biotechnology",
        iconSrc:
            "/images/subject-matter-experts/biochemistry/Biotechnology-and-Applied-Biochemistry.webp",
        desc:
            "Enhancing crop yield, pest resistance, and nutritional value through metabolic engineering.",
        icon: Sprout,
    },
    {
        title: "Environmental Monitoring",
        iconSrc:
            "/images/subject-matter-experts/biochemistry/Environmental-Monitoring.webp",
        desc:
            "Studying biochemical pathways to assess pollution effects and design remediation strategies.",
        icon: Search,
    },
    {
        title: "Education & Research",
        iconSrc:
            "/images/subject-matter-experts/biochemistry/Education-Research.webp",
        desc:
            "Training the next generation of scientists, veterinarians, and animal welfare specialists.",
        icon: GraduationCap,
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Clarke",
        degree: "PhD in Biochemistry",
        experience: "14 years of experience",
        manuscripts: "190+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Dr.-Robert-Klein.webp",
    },
    {
        name: "Dr. Sophia Patel",
        degree: "PhD in Clinical Biochemistry",
        experience: "11 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp",
    },
    {
        name: "Dr. Marcus Liu",
        degree: "PhD in Bioorganic Chemistry",
        experience: "15 years of experience",
        manuscripts: "200 manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Marcus-Liu.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biochemistry/sample-works-9-1.webp",
    imageAlt: "American Journal of Biochemistry & Biotechnology Cover",
    paperTitle:
        "The oxidase reaction of flavin-dependent Thymidylate Synthase reveals the nature of inhibitor binding",
    author:
        "Ozcan, S. I., Iy, M., Mostarshed, N., Shaw, S., & Koehn, E. M",
    publisher: "American Chemical Society",
    journalName: "Biochemistry",
    impactFactor: "2.9",
};

export default function BioChemistrySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Biochemistry Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Biochemistry Research"
                    description="The field of biochemistry is rapidly evolving, influenced by technological advancements and interdisciplinary research. Some of the most promising trends include:"
                    trends={emergingTrendsData}
                    footerText="Pubrica’s editorial team stays at the forefront of these trends, providing insights and support that align with cutting-edge biochemistry research."
                />
            </section>

            {/* SECTION: Biochemistry in Real-World Applications */}
            {/* SECTION: Biochemistry in Real-World Applications */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Biochemistry in Real-World Applications"
                    description={
                        <>
                            Biochemistry drives advancements across medicine,{" "}
                            <Link
                                href="/subject-matter-experts/biotechnology/"
                                className="text-blue-600 no-underline hover:no-underline"
                            >
                                biotechnology
                            </Link>
                            , and environmental sciences. Its applications include:
                        </>
                    }
                    applications={realWorldApplications}
                    imageSrc="/images/subject-matter-experts/biochemistry/Biochemistry-in-Real-World-Applications.webp"
                    imageAlt="Biochemistry in Real-World Applications"
                />
                <p>These applications highlight the pivotal role of biochemistry in solving global challenges, making expertise in this field invaluable.</p>
            </section>
            {/* SECTION 2: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={whereAuthorsPublishData}
                />
            </section>

            {/* SECTION 3: Our Expert Biochemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biochemistry Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}