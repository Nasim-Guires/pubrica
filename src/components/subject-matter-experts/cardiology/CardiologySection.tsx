"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    Microscope,
    Dna,
    Syringe,
    FlaskConical,
    Stethoscope,
    Activity
} from 'lucide-react';
import EmergingTrendsSection from '@/components/common/EmergingTrendsSection';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import CardiologySectioncard from './CardiologySectioncard';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

// Tabbed Data for Emerging Research Trends in Cell Biology
const emergingTrendsData = [
    {
        id: "single-cell-omics",
        title: "Coronary Artery Disease (CAD)",
        description:
            "This condition occurs when the arteries that supply blood to the heart become narrowed or blocked, often due to plaque buildup. CAD can lead to chest pain (angina), heart attacks, and heart failure.",
    },
    {
        id: "organoid-technology",
        title: "Heart Failure",
        description:
            "This condition occurs when the arteries that supply blood to the heart become narrowed or blocked, often due to plaque buildup. CAD can lead to chest pain (angina), heart attacks, and heart failure.",
    },
    {
        id: "systems-cell-biology",
        title: "Arrhythmias",
        description:
            "These are abnormal heart rhythms, which can range from harmless to life-threatening. Common types include atrial fibrillation, ventricular tachycardia, and bradycardia.",
    },
    {
        id: "cell-mechanics",
        title: "Valvular Heart Disease",
        description:
            "Damage to one or more of the heart valves can disrupt blood flow and cause symptoms such as breathlessness, palpitations, and fatigue. Valve repair or replacement may be necessary in severe cases.",
    },
    {
        id: "ai-cell-imaging",
        title: "Congenital Heart Defects",
        description:
            "These are structural abnormalities of the heart present from birth. They can vary from simple defects, such as small holes in the heart, to complex malformations that require surgical intervention.",
    },
    // {
    //     id: "synthetic-biology",
    //     title: "Synthetic Biology",
    //     description:
    //         "Engineering cells to perform novel functions for therapeutic and industrial applications.",
    // },
];

// Applications List Data (2-Column Icon + Text layout matching screenshot)
// const applicationsList = [
//     {
//         icon: Stethoscope,
//         title: "Disease Mechanism Elucidation",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Interventional-Car-diology.png",
//         description:
//             "Understanding how cellular dysfunction leads to diseases such as cancer, neurodegenerative disorders, diabetes, and cardiovascular conditions.",
//     },
//     {
//         icon: Microscope,
//         title: "Drug Discovery and Development",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Electrophysiology.png",
//         description:
//             "Utilizing cellular assays and models to identify drug targets, assess efficacy, and predict toxicity.",
//     },
//     {
//         icon: Activity,
//         title: "Regenerative Medicine",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Heart-Failure-and-Transplantation.png",
//         description:
//             "Harnessing stem cell biology to regenerate damaged tissues and organs.",
//     },
//     {
//         icon: Dna,
//         title: "Genetic Engineering",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Cardiac-Surgery.png",
//         description:
//             "Applying cellular-level insights for gene editing using CRISPR-Cas9 and other molecular tools.",
//     },
//     {
//         icon: Syringe,
//         title: "Vaccine Development",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Paediatric-Cardiology.png",
//         description:
//             "Exploring cellular immune responses to design effective vaccines against infectious diseases.",
//     },
//     {
//         icon: FlaskConical,
//         title: "Tissue Engineering",
//         iconSrc:
//             "/images/subject-matter-experts/cardiology/Cardiovascular-Imaging.png",
//         description:
//             "Integrating cell biology with materials science to develop biomimetic scaffolds for tissue reconstruction.",
//     },
// ];

// Cell Biology Editors Data
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Samuel Hart",
        degree: "PhD in Cardiology",
        experience: "12 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/cardiology/Dr.-Samuel-Hart.webp",
    },
    {
        name: "Dr. Rakesh Menon",
        degree: "PhD in Cardiovascular Medicine",
        experience: "15 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cardiology/Dr.-Rakesh-Menon.webp",
    },
    {
        name: "Dr. Alicia Verma",
        degree: "MD, Cardiology Specialist",
        experience: "10 years of experience",
        manuscripts: "90+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cardiology/Dr.-Alicia-Verma.webp",
    },
];

export default function SubjectMatterExpertsCellBiology() {
    // Active Tab State for Emerging Research Trends in Cell Biology
    const [activeTab, setActiveTab] = useState('single-cell-omics');

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Research Trends in Cell Biology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Research Trends in Cell Biology"
                    description="With the advent of advanced tools and technologies, Cell Biology is transforming precision and integration. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Cell Biology Research (Exact Match Design) */}

            <CardiologySectioncard />

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/cardiology/sample-works-3.webp",
                    imageAlt: "Nature Cell Biology Journal Cover",
                    paperTitle:
                        "Bioactive Compounds and Cardiac Fibrosis: Current Insight and Future Prospect. ",
                    author: " Majid A, Hassan FO, Hoque MM, Gbadegoye JO, Lebeche D. ",
                    journalName: "Journal of Cardiovascular Development and Disease",
                    publisher: "MDPI",
                    impactFactor: "2.3",
                }}
            />

            {/* SECTION 4: Our Expert Cell Biology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Cardiology Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}