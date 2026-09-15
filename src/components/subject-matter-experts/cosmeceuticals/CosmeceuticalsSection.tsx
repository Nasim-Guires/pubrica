"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "personalized-cosmeceuticals",
        title: "Personalized cosmeceuticals",
        description:
            "Customized skincare formulations are created from genetics, skin microbiome testing, and lifestyle factors.",
    },
    {
        id: "microbiome-based-skincare",
        title: "Microbiome-based skincare",
        description:
            "Development of prebiotics, probiotics, and postbiotics to restore and maintain skin barrier health.",
    },
    {
        id: "advanced-delivery-systems",
        title: "Advanced delivery systems",
        description:
            "Enhanced efficacy through nanotechnology, liposomes, exosomes, and microneedle-based delivery systems.",
    },
    {
        id: "ai-driven-ingredient-discovery",
        title: "AI-driven ingredient discovery",
        description:
            "The use of artificial intelligence/machine learning for bioactive screening and/or formulation optimization.",
    },
    {
        id: "clinical-validation",
        title: "Clinical validation and evidence-based claims",
        description:
            "More stringent requirements for clinical studies, efficacy studies and safety assessments to support product claims.",
    },
    {
        id: "regulatory-science",
        title: "Regulatory science and compliance innovation",
        description:
            "New regulatory structures that support claims substantiation and provide the basis for regulatory approvals from around the world.",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sofia Martinez",
        degree: "PhD in Industrial Biotechnology",
        experience: "14 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/cosmeceuticals/Dr.-Sophia-Martinez-1.webp",
    },
    {
        name: "Dr. Ananya Verma",
        degree: "PhD in Biotechnology",
        experience: "12 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp",
    },
    {
        name: "Dr. Michael Thompson",
        degree: "PhD in Molecular Biotechnology",
        experience: "16 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/cosmeceuticals/sample-works-11.webp",
    imageAlt: "International Journal of Cosmetic Science Cover",
    paperTitle:
        "Cosmetic creams with caprylic acid-based Natural Eutectic Solvents: Stability, rheology and user perception",
    author:
        "Verger, A., Grard, R., Pradel, C., Perse, X., Bouderbala, S., Despres, A., Boudesocque-Delaye, L., & Munnier, E. (2025)",
    publisher: "Wiley",
    journalName: "International Journal of Cosmetic Science",
    impactFactor: "2.5",
};
export default function CosmeceuticalsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Cosmeceutical */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Cosmeceutical"
                    description="At Pubrica, we support researchers and industry professionals in exploring, validating, and publishing cutting-edge developments shaping the future of cosmeceuticals. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />

            {/* SECTION 3: Our Expert Cosmeceutical Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Cosmeceutical Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}