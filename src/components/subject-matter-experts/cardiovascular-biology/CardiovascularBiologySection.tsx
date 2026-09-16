"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";


const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "omics-integration",
        title: "Omics Integration",
        description:
            "Multi-omics profiling (genomics, transcriptomics, proteomics, and metabolomics) helps in mapping complex regulatory networks in cardiac diseases.",
    },
    {
        id: "microrna-epigenetic",
        title: "MicroRNA and Epigenetic Regulation",
        description:
            "Understanding non-coding RNA and epigenetic modifications in cardiac hypertrophy and heart failure.",
    },
    {
        id: "cardiac-regeneration",
        title: "Cardiac Regeneration",
        description:
            "Use of pluripotent stem cells and biomaterials to restore damaged myocardium.",
    },
    {
        id: "cardiovascular-immunology",
        title: "Cardiovascular Immunology",
        description:
            "Investigating immune cell-mediated inflammation in atherosclerosis and myocardial infarction.",
    },
    {
        id: "wearable-health-tech",
        title: "Wearable Health Technologies",
        description:
            "Continuous cardiovascular monitoring through digital biosensors and smart devices.",
    },
];

const applicationsData = [
    {
        title: "Drug Discovery",
        desc: "Development of new cardiovascular drugs and biologics.",
        iconSrc:
            "/images/subject-matter-experts/cardiovascular-biology/cardiovascular-drugs.png",
    },
    {
        title: "Biomarker Identification",
        desc: "Identification of diagnostic biomarkers for early disease detection.",
        iconSrc:
            "/images/subject-matter-experts/cardiovascular-biology/Identification-of-diagnostic-biomarkers.png",
    },
    {
        title: "Pathophysiology Mechanisms",
        desc: "Understanding pathophysiological mechanisms underlying hypertension, diabetes, and obesity-linked cardiac conditions.",
        iconSrc:
            "/images/subject-matter-experts/cardiovascular-biology/linked-cardiac-condition.png",
    },
    {
        title: "Medical Devices & Implants",
        desc: "Creation of biocompatible implants, stents, and artificial heart tissues.",
        iconSrc:
            "/images/subject-matter-experts/cardiovascular-biology/biocompatible-implants.png",
    },
    {
        title: "Personalized Medicine",
        desc: "Personalized treatment protocols for cardiac patients using genetic and molecular profiling.",
        iconSrc:
            "/images/subject-matter-experts/cardiovascular-biology/cardiac-patients.png",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Jonathan Myers",
        degree: "PhD in Cardiovascular Physiology",
        experience: "14 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/animal-science/warvien.png",
    },
    {
        name: "Dr. Rajesh Nair",
        degree: "PhD in Vascular Biology",
        experience: "13 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/animal-science/victor.png",
    },
    {
        name: "Dr. Emily Carter",
        degree: "PhD in Molecular Cardiology",
        experience: "11 years of experience",
        manuscripts: "90+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/cardiovascular-biology/sample-works-6.webp",
    imageAlt: "Journal of Cardiovascular Development and Disease Cover",
    paperTitle: "The Ross Procedure in Children with Congenital Heart Disease",
    author: "Dib N, Poirier N, Bouhout I, Khairy P",
    publisher: "MDPI",
    journalName: "Journal of Cardiovascular Development and Disease",
    impactFactor: "2.3",
};
export default function CardiovascularBiologySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cardiovascular Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Research Trends in Cardiovascular Biology"
                    description="Recent advancements continue to reshape cardiovascular research. Precision medicine approaches and machine learning algorithms are revolutionizing disease prediction and patient stratification. For example, AI-driven analysis of echocardiographic and ECG data offers early detection of cardiac dysfunctions. Similarly, CRISPR-Cas9 gene editing provides potential avenues for correcting inherited cardiovascular defects. Other prominent trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Cardiovascular Biology Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Cardiovascular Biology Research"
                    description="Cardiovascular biology research has broad clinical and translational applications, including:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/cardiovascular-biology/Applications-of-Cardiovascular-Biology-Research.webp"
                    imageAlt="Applications of Cardiovascular Biology Research"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert Cardiovascular Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Cardiovascular Biology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}