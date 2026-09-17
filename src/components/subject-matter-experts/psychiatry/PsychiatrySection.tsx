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
        id: "digital-psychiatry",
        title: "Digital Psychiatry",
        description: "Telepsychiatry and mental health care through apps.",
    },
    {
        id: "ai-in-mental-health",
        title: "Artificial Intelligence in Mental Health",
        description: "AI-based diagnosis and predictive analysis",
    },
    {
        id: "personalised-psychiatry",
        title: "Personalised Psychiatry",
        description:
            "Personalised treatment approaches based on genetic and biological factors",
    },
    {
        id: "neuroimaging-advancements",
        title: "Neuroimaging Advancements",
        description: "Brain mapping for better diagnosis and treatment",
    },
    {
        id: "psychedelic-assisted-therapy",
        title: "Psychedelic-Assisted Therapy",
        description: "New approaches for depression and PTSD treatment",
    },
    {
        id: "integrative-mental-health",
        title: "Integrative Mental Health",
        description:
            "Combination of pharmacological and psychotherapeutic approaches",
    },
    {
        id: "mental-health-awareness",
        title: "Mental Health Awareness",
        description: "Increasing global focus on mental health care",
    },
    {
        id: "preventive-psychiatry",
        title: "Preventive Psychiatry",
        description: "Preventive approaches for mental health disorders.",
    },
];

const applicationsData = [
    {
        title: "Mental Health Treatment",
        desc: "The treatment of psychiatric conditions",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Mental-Health-Treatment.webp",
    },
    {
        title: "Healthcare Systems",
        desc: "The integration of mental health services into the general healthcare system",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Healthcare-Systems.webp",
    },
    {
        title: "Rehabilitation",
        desc: "Recovery from mental illness",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Rehabilitation.webp",
    },
    {
        title: "Workplace Mental Health",
        desc: "Managing stress in the workplace",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Workplace-Mental-Health.webp",
    },
    {
        title: "Forensic Psychiatry",
        desc: "The legal aspect of psychiatry",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Forensic-Psychiatry.webp",
    },
    {
        title: "Public Health",
        desc: "Promoting awareness of mental health, including the prevention of mental illness",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Public-Health-1.webp",
    },
    {
        title: "Education",
        desc: "Behavioural support in the classroom",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Education-1.webp",
    },
    {
        title: "Research and Development",
        desc: "Developing new forms of treatment in psychiatry.",
        iconSrc:
            "/images/subject-matter-experts/psychiatry/Research-and-Development.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Michael Roberts",
        degree: "PhD in Psychiatry",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/psychiatry/Dr.-Michael-Roberts.webp",
    },
    {
        name: "Dr. Priya Narayanan",
        degree: "PhD in Clinical Psychology",
        experience: "12 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/psychiatry/Dr.-Priya-Narayanan.webp",
    },
    {
        name: "Dr. Daniel Lee",
        degree: "PhD in Neuropsychiatry",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/chemical-engineering/Dr.-David-Lee.webp",
    },
];

export default function PsychiatrySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Psychiatry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Psychiatry"
                    description="Trends in the future of mental health care and research:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Psychiatry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Psychiatry"
                    description="The field of psychiatry uses clinical and scientific knowledge to enhance the outcomes of mental health in various fields, including:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/psychiatry/Applications-of-Psychiatry.webp"
                    imageAlt="Applications of Psychiatry"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/psychiatry/sample-works-14-1.webp",
                    imageAlt: "Journal of Psychiatric Research Cover",
                    paperTitle:
                        "Advances in Digital Psychiatry and AI-Based Mental Health Interventions",
                    author: "Dr Sarah Williams",
                    journalName: "Journal of Psychiatric Research",
                    publisher: "Elsevier",
                    impactFactor: "5.2",
                }}
            />

            {/* SECTION: Our Expert Psychiatry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Psychiatry Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialisation, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}