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
        id: "teledermatology",
        title: "Teledermatology",
        description:
            "Enhancing remote diagnosis and management through digital imaging and AI-based tools.",
    },
    {
        id: "personalized-dermatology",
        title: "Personalized Dermatology",
        description:
            "Utilizing genomic, proteomic, and biomarker research for individualized treatment approaches.",
    },
    {
        id: "regenerative-dermatology",
        title: "Regenerative Dermatology",
        description:
            "Advances in stem cell therapy, wound healing, and tissue engineering for skin regeneration.",
    },
    {
        id: "ai-ml",
        title: "Artificial Intelligence and Machine Learning",
        description:
            "Applying AI for diagnostic accuracy, image analysis, and predictive modelling in dermatology research.",
    },
    {
        id: "cosmeceutical-research",
        title: "Cosmeceutical and Dermatocosmetic Research",
        description:
            "Scientific validation of cosmetic products, natural formulations, and novel dermatological interventions.",
    },
];

const applicationsData = [
    {
        title: "Clinical Applications",
        desc: "Enhancing patient outcomes by supporting dermatologists in diagnosis, treatment planning, and post-treatment monitoring.",
        iconSrc:
            "/images/subject-matter-experts/dermatology/Clinical-Applications.png",
    },
    {
        title: "Research Applications",
        desc: "Guiding in designing studies, conducting clinical trials, and publishing research findings in high-impact journals.",
        iconSrc:
            "/images/subject-matter-experts/dermatology/Research-Applications.png",
    },
    {
        title: "Educational Support",
        desc: "Assisting in the creation of educational materials, training modules, and CME (Continuing Medical Education) content for healthcare professionals.",
        iconSrc:
            "/images/subject-matter-experts/dermatology/Educational-Support.png",
    },
    {
        title: "Regulatory and Compliance Support",
        desc: "Offering expertise in navigating ethical approvals, clinical protocols, and regulatory guidelines for dermatology studies.",
        iconSrc:
            "/images/subject-matter-experts/dermatology/Regulatory-and-Compliance-Support.png",
    },
    {
        title: "Cosmetic and Aesthetic Innovations",
        desc: "Supporting studies and publications related to anti-aging, skincare formulations, and aesthetic procedures.",
        iconSrc:
            "/images/subject-matter-experts/dermatology/Cosmetic-and-Aesthetic-Innovations.png",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Priya Sharma",
        degree: "PhD in Clinical Dermatology",
        experience: "10 years of experience",
        manuscripts: "90+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/dermatology/Dr.-Priya-Sharma-1.webp",
    },
    {
        name: "Dr. Rohan Kapoor",
        degree: "MD in Dermatology",
        experience: "15 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/dermatology/Dr.-Rohan-Kapoor.webp",
    },
    {
        name: "Dr. Ananya Mehra",
        degree: "PhD in Dermatology",
        experience: "12 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/dermatology/Dr.-Ananya-Mehra.webp",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/dermatology/sample-works-4.webp",
    imageAlt: "International Journal of Dermatology Cover",
    paperTitle: "Review: Ultraviolet radiation and skin cancer",
    author: "Narayanan, D. L., Saladi, R. N., & Fox, J. L.",
    publisher: "Wiley",
    journalName: "International Journal of Dermatology",
    impactFactor: "3.2",
};
export default function DermatologySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Supporting Emerging Dermatology Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Supporting Emerging Dermatology Research Trends"
                    description="Dermatology is witnessing rapid innovation through the integration of new technologies and research methodologies. Pubrica helps researchers stay ahead of emerging trends such as:"
                    trends={emergingTrendsData}
                    footerText=""
                />

                <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed pt-2">
                    Pubrica's team is well-equipped to guide researchers in designing studies that align with these innovations, providing methodological support, regulatory guidance, and publication strategies.
                </p>
            </section>

            {/* SECTION 2: Applications of Dermatology Services */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Dermatology Services"
                    description="Pubrica's dermatology services have multiple applications that impact clinical practice, research, and education:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/dermatology/Applications-of-Dermatology-Services.webp"
                    imageAlt="Applications of Dermatology Services"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={publication}
            />
            {/* SECTION 4: Our Expert Dermatology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Dermatology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}