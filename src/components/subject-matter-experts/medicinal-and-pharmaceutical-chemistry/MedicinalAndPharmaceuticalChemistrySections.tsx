"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { BookOpen, Award, Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const importanceData = [
    {
        title: "Drug Discovery",
        description: "Creates drugs to treat conditions using drug candidates"
    },
    {
        title: "Optimizing Drug Formulations",
        description: "Drug Products are optimally formulated so that drugs are targeted and delivered effectively"
    },
    {
        title: "Safety Assessment",
        description: "To reduce the occurrence of drug side effects, toxicity testing will be conducted to promote patient safety."
    },
    {
        title: "Personalized Medicine",
        description: "Defines drugs for specific users by creating pharmacotherapy based on their genetic makeup, as well as their race and gender."
    },
    {
        title: "Improved Therapeutic Outcomes",
        description: "This improvement will increase the potential therapeutic value of a drug and its usefulness in the management of disease."
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "ai-drug-discovery",
        title: "Artificial Intelligence in Drug Discovery",
        description:
            "AI and machine learning accelerate the process of developing drugs. They do this by predicting how molecules interact with one another, helping researchers to find and optimize potential drugs. AI and machine learning also help researchers identify potential drug candidates, thereby allowing drug discovery to occur in less time than traditional methods.",
    },
    {
        id: "regenerative-medicine",
        title: "Regenerative Medicine and Stem Cell Therapy",
        description:
            "Research and development of stem cell therapies and regenerative medicine provide new treatment options to aid in the growth of tissue and provide hope to those affected with genetic diseases. The future of these types of medical interventions is promising with the advancement of modern medicine.",
    },
    {
        id: "3d-printing",
        title: "3D Printing in Pharmaceuticals",
        description:
            "With the invention of 3D printing technology, it is possible to create medication that is specifically designed for a patient's needs in terms of dosage, shape, and combination of medications.",
    },
    {
        id: "green-chemistry",
        title: "Green Chemistry in Drug Development",
        description:
            "The emphasis on environmentally friendly production methods within pharmaceutical manufacturing; developing a more sustainable system of producing medicines with minimal harm to the environment.",
    },
    {
        id: "organs-on-chips",
        title: "Organs-on-Chips for Drug Testing",
        description:
            "Using Organs-on-chip technology, researchers can analyze how human tissues and organs react to test drugs (or other types of therapies). This will not only improve the accuracy of preclinical testing but also result in less need for animal testing.",
    },
    {
        id: "biologics-biosimilars",
        title: "Biologics and Biosimilars",
        description:
            "Biologics (monoclonal antibody-based treatments) are becoming popular means of treatment. Biosimilar drugs and other types of biologic treatment also provide alternatives to current disease therapies.",
    },
];

const areasOfStudyData = [
    { title: 'Molecular Biology' },
    { title: 'Disease Mechanisms' },
    { title: 'Medical Devices' },
    { title: 'Surgical Procedures' },
    { title: 'Medical Procedures' },
    { title: 'Gene Therapy' },
    { title: 'Pharmacology and Drug Mechanisms' },
    { title: 'Anatomy and Physiology' }
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Alexander Lee",
        degree: "PhD in Pharmaceutical Sciences",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Dr.-Alexander-Lee.webp",
    },
    {
        name: "Dr. Maria Gonzalez",
        degree: "PhD in Medicinal Chemistry",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Dr.-Maria-Gonzalez.webp",
    },
    {
        name: "Dr. James Smith",
        degree: "PhD in Pharmacology",
        experience: "13 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Dr.-James-Smith.webp",
    },
];
const applicationsData = [
    {
        title: "Drug Formulation",
        desc: "Adjunct, drug form (oral, injectable, transdermal) to develop improved drug formulation for stability, effectiveness and compliance (adherence) with medication.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Drug-Formulation.webp",
    },
    {
        title: "Therapeutic Drug Monitoring",
        desc: "The process of quantitating drug levels in the bloodstream to provide safe and sufficient drug dosages while minimizing the risk of adverse drug reactions.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Therapeutic-Drug-Monitoring.webp",
    },
    {
        title: "Biomarker Discovery",
        desc: "The process used to identify molecular markers that can be used for diagnosis of disease as well as determining the efficacy of treatment to support the precision medicine model.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Biomarker-Discovery.webp",
    },
    {
        title: "Pharmacogenomics",
        desc: "The process of utilizing genetic data to customize drug therapy to the individual patient to minimize the potential for adverse drug reactions.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Pharmacogenomics-1.webp",
    },
    {
        title: "Toxicology & Adverse Drug Reactions",
        desc: "The study of the side effects of drugs (Adverse Drug Reactions) to optimize safety and manage the risks associated with using drugs clinically.",
        iconSrc:
            "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Toxicology-Adverse-Drug-Reactions.webp",
    },
];
export default function MedicinalAndPharmaceuticalChemistrySections() {
    const [activeTab, setActiveTab] = useState(0);
    const [openImportanceIndex, setOpenImportanceIndex] = useState<number | null>(null);

    const toggleImportance = (index: number) => {
        setOpenImportanceIndex(openImportanceIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Importance of Medical and Pharmaceutical Chemistry in Research and Healthcare */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Importance of Medical and Pharmaceutical Chemistry in Research and Healthcare
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Medical and Pharmaceutical Chemistry serves a fundamental purpose in enhancing the health of humanity by acting as a bridge between chemistry and medicine pharmacology. This discipline is essential to the development of new medications, therapeutic modalities (i.e., treatment strategies), and devices used to diagnose disease and improve the quality of care for patients. Below is an overview of how it is important to the medical field:
                    </p>
                </div>

                {/* 2. Added `items-start` to prevent cards in the same row from expanding together */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
                    {importanceData.map((item, index) => {
                        const isOpen = openImportanceIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-[#f0f7f5] border border-[#d1e5e0] rounded-lg overflow-hidden shadow-xs transition-all"
                            >
                                <button
                                    onClick={() => toggleImportance(index)}
                                    className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-[#0e3b32] hover:bg-[#e4f2ee] transition-colors"
                                >
                                    <span className="flex items-center space-x-2 text-base">
                                        <FileText className="w-5 h-5 text-[#0e3b32] shrink-0" />
                                        <span>{item.title}</span>
                                    </span>
                                    <span className="p-1 rounded-full bg-white shadow-xs text-[#0e3b32]">
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-4 pt-1 text-gray-700 text-sm sm:text-base bg-white border-t border-[#d1e5e0]">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 1: Emerging Trends in Medical and Pharmaceutical Chemistry */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Medical and Pharmaceutical Chemistry"
                    description="Medical and pharmaceutical chemistry is continuously evolving with the introduction of innovative techniques and methods as well as the identification of new medications, medicinal products and drug therapies, which ultimately impact drug development and health care in the future. A few of the significant emerging trends in medical and pharmaceutical chemistry are:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Clinical Applications of Medical and Pharmaceutical Chemistry */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Clinical Applications of Medical and Pharmaceutical Chemistry"
                    description="Clinical applications of Medical and Pharmaceutical Chemistry refer to how chemical principles are applied in real-world healthcare settings to optimize patient care and drug therapy. Key clinical applications include:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Clinical-Applications-of-Medical-and-Pharmaceutical-Chemistry.webp"
                    imageAlt="Clinical Applications of Medicinal Chemistry"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/sample-works-11-16.webp",
                    imageAlt: "Journal of Medicinal Chemistry Cover",
                    paperTitle:
                        "Recent Advances in Long-Acting Antiviral Agents: Innovations in Design and Strategies for Extended Duration.",
                    author:
                        "Wang, S., Ma, F., Lindsley, C. W., Xu, S., Liu, X., & Zhan, P.",
                    journalName: "Journal of Medicinal Chemistry",
                    publisher: "American Chemical Society",
                    impactFactor: "6.8 (2024)",
                }}
            />

            {/* SECTION 4: Our Expert Medical And Pharmaceutical Chemistry Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Medical And Pharmaceutical Chemistry Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}