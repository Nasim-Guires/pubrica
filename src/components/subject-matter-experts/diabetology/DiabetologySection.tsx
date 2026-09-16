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
        id: "digital-health-cgm",
        title: "Digital Health and Continuous Glucose Monitoring (CGM)",
        description:
            "Devices and wearable technology allow real-time glucose tracking, improving disease management and patient engagement.",
    },
    {
        id: "ai-diabetes-management",
        title: "Artificial Intelligence in Diabetes Management",
        description:
            "AI algorithms assist in predicting complications, personalizing treatment, and analyzing large datasets for research purposes.",
    },
    {
        id: "regenerative-medicine-beta-cell",
        title: "Regenerative Medicine and Beta-Cell Therapy",
        description:
            "Cutting-edge research on pancreatic islet cell transplantation and stem cell therapy offers promising avenues for long-term diabetes remission.",
    },
    {
        id: "personalized-nutrition-lifestyle",
        title: "Personalized Nutrition and Lifestyle Interventions",
        description:
            "Integration of genomics, metabolomics, and patient lifestyle data to customize therapy plans.",
    },
    {
        id: "novel-therapeutics",
        title: "Novel Therapeutics",
        description:
            "Development of GLP-1 receptor agonists, SGLT2 inhibitors, and other targeted therapies with improved efficacy and safety profiles.",
    },
];

const applicationsData = [
    {
        title: "Type 1 and Type 2 Diabetes Mellitus",
        desc: "Pathophysiology, insulin resistance, beta-cell function, and genetic predisposition",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Type-1-and-Type-2-Diabetes-Mellitus.png",
    },
    {
        title: "Gestational Diabetes Mellitus (GDM)",
        desc: "Diagnosis, screening, and management protocols",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Gestational-Diabetes-Mellitus-GDM.png",
    },
    {
        title: "Diabetic Complications",
        desc: "Neuropathy, nephropathy, retinopathy, and cardiovascular risk",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Diabetic-Complications.png",
    },
    {
        title: "Obesity and Metabolic Syndrome",
        desc: "Pathways linking adiposity, insulin signalling, and metabolic dysregulation",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Obesity-and-Metabolic-Syndrome.png",
    },
    {
        title: "Therapeutic Advances",
        desc: "Insulin analogues, GLP-1 receptor agonists, SGLT2 inhibitors, DPP-4 inhibitors, and combination therapies",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Therapeutic-Advances.png",
    },
    {
        title: "Lifestyle and Nutrition Research",
        desc: "Exercise physiology, glycaemic index studies, and weight management strategies",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Lifestyle-and-Nutrition-Research.png",
    },
    {
        title: "Diabetes Epidemiology and Public Health",
        desc: "Population-based studies, prevention programs, and screening strategies",
        iconSrc:
            "/images/subject-matter-experts/diabetology/Diabetes-Epidemiology-and-Public-Health.png",
    },
];;

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sameer Joshi",
        degree: "PhD in Molecular Diabetology",
        experience: "13 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/animal-science/warvien.png",
    },
    {
        name: "Dr. Rohan Verma",
        degree: "PhD in Endocrinology & Metabolism",
        experience: "12 years of experience",
        manuscripts: "90+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/animal-science/victor.png",
    },
    {
        name: "Dr. Anika Mehra",
        degree: "PhD in Diabetology",
        experience: "14 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/diabetology/Dr.-Anika-Mehra.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/diabetology/sample-works.webp",
    imageAlt: "Diabetology Journal Cover",
    paperTitle:
        "A Study on Risk Factors Associated with Gestational Diabetes Mellitus",
    author:
        "Lorenzo IS, Pineda-Pineda JJ, Parra Inza E, Sigarreta Ricardo S, Torralbas Fitz SJ.",
    publisher: "MDPI",
    journalName: "Diabetology",
    impactFactor: "2.2",
};
export default function DiabetologySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Diabetology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Diabetology"
                    description="The field of diabetology is rapidly evolving, with technological advancements and precision medicine transforming patient care:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Our Expertise in Diabetology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Our Expertise in Diabetology"
                    description="Pubrica's diabetology experts possess advanced degrees (PhD/MD/MSc) and clinical research experience across all domains of diabetes research. We specialize in a range of topics, including:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/diabetology/Our-Expertise-in-Diabetology.webp"
                    imageAlt="Our Expertise in Diabetology"
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

            {/* SECTION 4: Our Expert Diabetology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Diabetology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}