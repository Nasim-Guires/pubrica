"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import EmergingTrendsSection from '@/components/common/EmergingTrendsSection';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Amelia Roberts",
        degree: "PhD in Neuroscience",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/neurology/Dr.-Amelia-Roberts-1.webp",
    },
    {
        name: "Dr. Kenji Tanaka",
        degree: "MD, Neurology",
        experience: "16 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/neurology/Dr.-Kenji-Tanaka-1.webp",
    },
    {
        name: "Dr. Maria González",
        degree: "PhD in Molecular Neurobiology",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/neurology/Dr.-Maria-Gonzalez-1.webp",
    },
];

const applicationsData = [
    {
        title: "Artificial Intelligence and Machine Learning in Neurology",
        desc: "AI-driven diagnostic tools improve the accuracy of detecting neurodegenerative diseases through MRI, EEG, and CT scans.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Artificial-Intelligence-and-Machine-Learning-in-Neurology.webp",
    },
    {
        title: "Neurogenomics",
        desc: "Genetic mapping reveals the hereditary nature of disorders like Alzheimer’s and Huntington’s disease.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Neurogenomics.webp",
    },
    {
        title: "Neuroinformatics and Big Data Analytics",
        desc: "Integration of massive datasets facilitates biomarker discovery and personalized neurology treatment.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Neuroinformatics-and-Big-Data-Analytics.webp",
    },
    {
        title: "Brain–Computer Interfaces (BCI)",
        desc: "These devices enable communication and control for individuals with paralysis.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Brain–Computer-Interfaces-BCI.webp",
    },
    {
        title: "Regenerative Neurology",
        desc: "Stem cell therapy and neuroplasticity research show promise for repairing damaged neurons.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Regenerative-Neurology.webp",
    },
    {
        title: "Tele-neurology",
        desc: "Remote consultations and AI-based monitoring expand access to neurological care worldwide.",
        iconSrc:
            "/images/subject-matter-experts/neurology/Tele-neurology.webp",
    },
];

const expertEditors = [
    {
        name: "Dr. Amelia Roberts",
        qualification: "PhD in Neuroscience",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        image: "/images/Dr.-Amelia-Roberts-1.webp",
        flag: "/images/country/gb.png",
    },
    {
        name: "Dr. Kenji Tanaka",
        qualification: "MD, Neurology",
        experience: "16 years of experience",
        manuscripts: "200+ manuscripts edited",
        image: "/images/Dr.-Kenji-Tanaka-1.webp",
        flag: "/images/country/us.png",
    },
    {
        name: "Dr. Maria González",
        qualification: "PhD in Molecular Neurobiology",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        image: "/images/Dr.-Maria-Gonzalez-1.webp",
        flag: "/images/country/us.png",
    },
];

export default function NeurologySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Applications of Neurology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Neurology Research"
                    description="The field of neurology is witnessing transformative innovations. Major trends include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/neurology/Emerging-Trends-in-Neurology-Research.webp"
                    imageAlt="Emerging Trends in Neurology Research"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/neurology/sample-works-6-3.webp",
                    imageAlt: "Neurology Journal Cover",
                    paperTitle:
                        "Autism Spectrum Disorder: The Cerebellum, Genes, and Pathways",
                    author: "D’Mello, S. R.",
                    journalName: "Neurology International",
                    publisher: "MDPI",
                    impactFactor: " 3.0 (2024)",
                }}
            />

            {/* SECTION: Our Expert Neurology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Neurology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}