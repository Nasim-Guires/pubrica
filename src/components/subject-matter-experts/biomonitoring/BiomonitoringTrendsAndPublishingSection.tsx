"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Users,
    Leaf,
    ShieldAlert,
    FlaskConical,
    FileCheck,
    Trees,
    Globe2,
} from "lucide-react";
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function BiomonitoringTrendsAndPublishingSection() {
    const [activeTab, setActiveTab] = useState(1);

    const biomonitoringTrends: EmergingTrendItem[] = [
        {
            id: 1,
            title: "High-Resolution Metabolomics and Proteomics",
            description: "These techniques allow for the discovery of new biomarkers that reflect subtle physiological changes induced by low-level exposures.",
        },
        {
            id: 2,
            title: "Non-invasive Sampling Methods",
            description: "The use of hair, saliva, nails, and exhaled breath condensate is gaining popularity due to ease of collection and reduced ethical concerns.",
        },
        {
            id: 3,
            title: "Remote Monitoring Technologies",
            description: "Portable biosensors and wearable devices now enable continuous exposure tracking, offering a dynamic understanding of exposure variability.",
        },
        {
            id: 4,
            title: "Omics-Based Biomonitoring",
            description: "Integration of genomics, transcriptomics, proteomics, and metabolomics facilitates a holistic assessment of exposure-related biological changes.",
        },
        {
            id: 5,
            title: "Biomonitoring for Emerging Contaminants",
            description: "Increasing attention is being paid to microplastics, pharmaceuticals, and per- and polyfluoroalkyl substances (PFAS), which are now recognized as persistent and bioaccumulative.",
        },
        {
            id: 6,
            title: "Global Biomonitoring Networks",
            description: "International collaborations, such as the Human Biomonitoring for Europe (HBM4EU) initiative, promote standardized methodologies and data sharing for cross-country comparisons.",
        },
    ];

    const applicationsData = [
        {
            title: "Public Health Surveillance",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Environmental-Biomonitoring.webp",
            desc: "Used to detect population-level exposure trends, such as blood lead levels or pesticide residues, supporting preventive health policies.",
            icon: Users,
        },
        {
            title: "Environmental Impact Assessment",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Human-Feed-Biomonitoring.webp",
            desc: "Biomonitoring helps evaluate pollution sources, ecological damage, and recovery following remediation programs.",
            icon: Leaf,
        },
        {
            title: "Occupational Health Management",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Occupational-Health-Management.webp",
            desc: "Regular biomonitoring of workers in industries like mining, agriculture, and manufacturing ensures safety and compliance with exposure limits.",
            icon: ShieldAlert,
        },
        {
            title: "Drug and Chemical Safety Evaluation",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Ecological-Biomonitoring.webp",
            desc: "Used in preclinical and post-market studies to assess the bioavailability and potential toxicity of chemicals and pharmaceuticals.",
            icon: FlaskConical,
        },
        {
            title: "Risk Communication and Policy Development",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Pharmacokinetic-and-Toxicological-Research.webp",
            desc: "Provides evidence for policymakers to establish or revise environmental and occupational standards.",
            icon: FileCheck,
        },
        {
            title: "Wildlife Conservation and Ecosystem Protection",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Wildlife-Conservation-and-Ecosystem-Protection.webp",
            desc: "Monitoring bioindicators such as fish, amphibians, and lichens helps assess ecosystem health and biodiversity changes due to pollution.",
            icon: Trees,
        },
        {
            title: "Climate and Global Change Studies",
            iconSrc: "/images/subject-matter-experts/biomonitoring/Climate-and-Global-Change-Studies.webp",
            desc: "Tracks the impact of global environmental changes, such as temperature shifts and pollution transport, on biological systems.",
            icon: Globe2,
        },
    ];

    const editors = [
        {
            name: "Dr. Emily Carter",
            role: "PhD in Environmental Toxicology",
            experience: "15 years of experience",
            manuscripts: "200+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp",
        },
        {
            name: "Dr. Rajesh Nair",
            role: "PhD in Biochemistry",
            experience: "12 years of experience",
            manuscripts: "170+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Rajesh-Nair.webp",
        },
        {
            name: "Dr. Laura Mitchell",
            role: "PhD in Environmental Health Sciences",
            experience: "18 years of experience",
            manuscripts: "210+ manuscripts edited",
            avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Laura-Fischer.webp",
        },
    ];

    const publicationData: AuthorPublicationData = {
        imageSrc: "/images/subject-matter-experts/biomonitoring/sample-works-7-3.webp",
        imageAlt: "Atmosphere Journal Cover",
        paperTitle: "Biomonitoring of Air Pollution",
        author: "Giordano S, Spagnuolo V, Capozzi F",
        publisher: "MDPI",
        journalName: "Atmosphere",
        impactFactor: "2.3",
    };


    const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Emily Carter",
        degree: "PhD in Environmental Toxicology",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Emily-Carter-1.webp",
        flag: "/images/country/gb.png", // Add your flag image path here
    },
    {
        name: "Dr. Rajesh Nair",
        degree: "PhD in Biochemistry",
        experience: "12 years of experience",
        manuscripts: "170+ manuscripts edited",
        avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Rajesh-Nair.webp",
        flag: "/images/country/us.png", // Add your flag image path here
    },
    {
        name: "Dr. Laura Mitchell",
        degree: "PhD in Environmental Health Sciences",
        experience: "18 years of experience",
        manuscripts: "210+ manuscripts edited",
        avatar: "/images/subject-matter-experts/biomonitoring/Dr.-Laura-Fischer.webp",
        flag: "/images/country/us.png", // Add your flag image path here
    },
];

    return (
        <div className="max-w-6xl mx-auto px-4 py-6 bg-white font-sans text-gray-800 space-y-16">

            {/* SECTION 1: EMERGING TRENDS IN BIOMONITORING */}
            <EmergingTrendsSection
                title="Emerging Trends in Biomonitoring"
                description="The field of biomonitoring is rapidly evolving, driven by technological innovation, interdisciplinary collaboration, and growing environmental concerns. Several emerging trends are reshaping how scientists and policymakers approach exposure assessment and health protection."
                trends={biomonitoringTrends}
                footerText="These innovations are transforming biomonitoring from a purely analytical tool into a dynamic, predictive science that informs policy decisions, personal health management, and environmental sustainability."
            />

            {/* SECTION 2: APPLICATIONS OF BIOMONITORING */}
            <ApplicationsSection
                title="Applications of Biomonitoring"
                description="Biomonitoring has a wide range of applications across scientific, industrial, and policy domains. Its data serve as a cornerstone for understanding exposure patterns, identifying vulnerable populations, and improving health outcomes."
                applications={applicationsData}
                imageSrc="/images/subject-matter-experts/biomonitoring/Applications-of-Biomonitoring.webp" // Update with your actual workspace image path
                imageAlt="Biomonitoring workspace illustration"
            />


            {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share biomonitoring publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={publicationData}
            />
            {/* SECTION 4: OUR EXPERT BIOMONITORING EDITORS */}
            <ExpertEditorsSection
                    title="Our Expert Biomonitoring Editors"
                    description="Pubrica's team of biomonitoring experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
        </div>
    );
}