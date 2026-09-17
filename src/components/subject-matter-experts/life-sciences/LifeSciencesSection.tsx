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
        id: "precision-medicine",
        title: "Precision Medicine",
        description:
            "Individualised medical care based on the molecular or genetic makeup of each patient.",
    },
    {
        id: "genomics-crispr-technology",
        title: "Genomics/CRISPR Technology",
        description:
            "A more advanced way to perform genetic research using Gene Editing technology.",
    },
    {
        id: "artificial-intelligence-in-healthcare",
        title: "Artificial Intelligence (AI) in Healthcare",
        description:
            "The ability of AI to increase accuracy in diagnosis and predict the outcome of drug therapies using AI-powered technology.",
    },
    {
        id: "regenerative-medicine",
        title: "Regenerative Medicine",
        description:
            "Advancements in the use of stem cells as a source for regeneration, and the growth of manufactured tissues and organs.",
    },
    {
        id: "vaccine-development",
        title: "Vaccine Development",
        description:
            "New biotechnological methods for developing vaccines have made the vaccine development process quicker.",
    },
    {
        id: "digital-health-telemedicine",
        title: "Digital Health/Telemedicine",
        description:
            "Delivering healthcare services remotely.",
    },
    {
        id: "microbiome-research",
        title: "Microbiome Research",
        description:
            "The study of the microbiome, which is the combined design of all the different microbes that inhabit a person, and their effect on an individual’s state of health.",
    },
    {
        id: "sustainable-biotechnology",
        title: "Sustainable Biotechnology",
        description:
            "The use of biological methods to develop sustainable solutions to meet the demands of the environment",
    },
];
const applicationsData = [
    {
        title: "Healthcare",
        desc: "Diagnosing, treating, and preventing disease",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Healthcare-1.webp",
    },
    {
        title: "Pharmaceuticals",
        desc: "Finding and developing new drugs",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Pharmaceuticals-1-1.webp",
    },
    {
        title: "Biotechnology Industry",
        desc: "Making biologic and bio-based products",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Biotechnology-Industry.webp",
    },
    {
        title: "Agriculture",
        desc: "Improving crops and managing pests",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Agriculture-1.webp",
    },
    {
        title: "Environmental Science",
        desc: "Conserving biodiversity and controlling pollution",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Environmental-Science.webp",
    },
    {
        title: "Food Science",
        desc: "Analysing nutrition and ensuring food safety",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Food-Science.webp",
    },
    {
        title: "Research and Development",
        desc: "Increasing scientific knowledge about biology and medicine",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Research-and-Development-2.webp",
    },
    {
        title: "Public Health",
        desc: "Evaluating epidemiology and developing disease prevention programs",
        iconSrc:
            "/images/subject-matter-experts/life-sciences/Public-Health-1-1.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Emily Carter",
        degree: "PhD in Molecular Biology",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/cardiology/Dr.-Emily-Carter.webp",
    },
    {
        name: "Dr. Rajesh Menon",
        degree: "PhD in Biotechnology",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Praveen-R-1.webp",
    },
    {
        name: "Dr. Laura Smith",
        degree: "PhD in Biomedical Sciences",
        experience: "10 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Hiroko-S-1.webp",
    },
];

export default function LifeSciencesSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Life Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Life Science"
                    description="Healthcare, biotechnology, and scientific innovation are advancing rapidly with improvements in the Life Science field, including:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Life Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Life Science"
                    description="The life sciences encompass an interdisciplinary area of science that applies biological and scientific concepts in a variety of fields. The main applications of life sciences include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/life-sciences/Applications-of-Life-Science.webp"
                    imageAlt="Applications of Life Science"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors publish in top-tier journals, conferences, and platforms, ensuring global visibility and impact."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/life-sciences/sample-works-15.webp",
                    imageAlt: "Journal of Biomedical Sciences Cover",
                    paperTitle:
                        "Advances in Precision Medicine and Genomic Research",
                    author: "Sarah M. Johnson",
                    journalName: "Journal of Biomedical Science",
                    publisher: "Springer",
                    impactFactor: "5.2",
                }}
            />

            {/* SECTION: Our Expert Life Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Life Science Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}