"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "Single-Molecule Techniques",
        title: "Artificial Intelligence & Machine Learning",
        description:
            "AI algorithms support early diagnosis, automate segmentation, assist in anomaly detection, and enhance image quality. Deep learning models are particularly impactful in radiomics and quantitative imaging.",
    },
    {
        id: "quantum-materials",
        title: "Radiomics & Quantitative Imaging",
        description:
            "Radiomics converts images into high-dimensional data, enabling advanced tumour characterization, personalized treatment prediction, and biomarker development.",
    },
    {
        id: "ai-materials",
        title: "Hybrid Imaging Systems",
        description:
            "Technologies like PET/CT, PET/MRI, and SPECT/CT combine structural and functional data in a single scan, offering better disease characterization and higher diagnostic confidence, particularly in neurology and oncology.",
    },
    {
        id: "sustainable-materials",
        title: "Portable & Point-of-Care Imaging Devices",
        description:
            "Handheld ultrasound, portable MRI systems, and wearable imaging sensors are expanding access to underserved regions..",
    },
    {
        id: "smart-materials",
        title: "3D & 4D Imaging",
        description:
            "High-resolution 4D imaging allows visualization of dynamic physiological processes such as cardiac motion and blood flow.",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biomedical-imaging/sample-works-13-6.webp",
    imageAlt: "Journal of Imaging Journal Cover",
    paperTitle:
        "Typical and Local Diagnostic Reference Levels for Chest and Abdomen Radiography Examinations in Dubai Health Sector",
    author:
        "Dalah EZ, Zarooni MMA, Binismail FY, Beevi HA, Siraj M, Pottybindu S",
    publisher: "MDPI",
    journalName: "Journal of Imaging",
    impactFactor: "3.3",
};

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Evelyn Carter",
        degree: "PhD in Biomedical Imaging",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Evelyn-Carter-3.webp",
    },
    {
        name: "Dr. Maya Chen",
        degree: "PhD in Radiological Sciences",
        experience: "10 years of experience",
        manuscripts: "145+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Maya-Chen-3.webp",
    },
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Medical Imaging",
        experience: "13 years of experience",
        manuscripts: "170+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Dr.-David-Chen.webp",
    },
];

export default function BioMedicalImagineSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Material Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Biomedical Imaging"
                    description="Biomedical imaging is rapidly advancing with new technologies that improve diagnostic accuracy, treatment planning, and patient outcomes. Some of the most important emerging trends include:"
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

            {/* SECTION 3: Our Expert Material Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biomedical Imaging Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}