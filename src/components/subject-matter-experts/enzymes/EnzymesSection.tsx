"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const commonEnzymesConditionsData: EmergingTrendItem[] = [
    {
        id: "enzyme-deficiency-disorders",
        title: "Enzyme Deficiency Disorders",
        description:
            "G6PD deficiency: Causes red blood cells to break down under stress (certain foods, infections, drugs). Leads to jaundice and haemolytic anaemia.",
    },
    {
        id: "metabolic-enzyme-disorders",
        title: "Metabolic Enzyme Disorders",
        description:
            "Glycogen Storage Diseases (e.g., GSD I, III, V): Enzyme deficiencies affecting glycogen metabolism; cause low blood sugar, muscle pain, or liver enlargement.",
    },
    {
        id: "digestive-enzyme-disorders",
        title: "Digestive Enzyme Disorders",
        description:
            "Exocrine pancreatic enzyme deficiency (Chronic pancreatitis): Reduced amylase, lipase, protease → indigestion and nutrient deficiencies.",
    },
    {
        id: "mitochondrial-enzyme-defects",
        title: "Mitochondrial Enzyme Defects",
        description:
            "Mitochondrial myopathy: Deficient oxidative phosphorylation enzymes → muscle weakness, exercise intolerance, and lactic acidosis.",
    },
    {
        id: "liver-enzyme-imbalance-conditions",
        title: "Liver Enzyme Imbalance Conditions",
        description:
            "Hepatitis: Inflammation of the liver → elevated ALT and AST, jaundice, fatigue.",
    },
    {
        id: "lysosomal-enzyme-disorders",
        title: "Lysosomal Enzyme Disorders",
        description:
            "Deficiency of glucocerebrosidase → accumulation of glucocerebroside in organs, causing enlarged liver/spleen and bone problems.",
    },
];

const applicationsData = [
    {
        title: "Therapeutic Enzyme Inhibitors",
        desc: "Researching Enzyme Inhibitors for possible treatment of cancer, diabetes, neurodegenerative disorders, etc.",
        iconSrc:
            "/images/subject-matter-experts/enzymes/Therapeutic-Enzyme.webp",
    },
    {
        title: "Enhancing Enzyme Production and Activity with CRISPR-Cas9 Gene Editing Tools",
        desc: "The ability to enhance enzyme production and enzyme activity will allow the list of Industrial/Biotechnology applications to greatly expand (Example- enzyme produced by yeast vs Enzyme produced by CRISPR).",
        iconSrc:
            "/images/subject-matter-experts/enzymes/Enhancing-Enzyme-Production.webp",
    },
    {
        title: "Medical Diagnostics biosensors",
        desc: "(driven by enzymes) that allow rapid and low-cost check-ups for a variety of diseases.",
        iconSrc:
            "/images/subject-matter-experts/enzymes/Medical-Diagnostics-Biosensors.webp",
    },
    {
        title: "Biofuel and Chemical Metabolic Engineering",
        desc: "Developing enzymes and improving chemical production efficiency, to further enable the development of sustainable biotechnology solutions (i.e. Enzymes and Biofuels).",
        iconSrc:
            "/images/subject-matter-experts/enzymes/Biofuel-and-Chemical-Metabolic-Engineering.webp",
    },
    {
        title: "Reusing Enzymes",
        desc: "Using enzymes multiple times during production, to reduce the overall cost and environmental impact of production.",
        iconSrc:
            "/images/subject-matter-experts/enzymes/Reusing-Enzymes.webp",
    },
    // {
    //     title: "Improving Enzymes Engineered (customised) Enzymes via Synthetic Biology",
    //     desc: "to create more stable zymes with higher efficiency, for use in chemicals (biobased fuels) and pharmaceutical industries.",
    //     iconSrc:
    //         "/images/subject-matter-experts/enzymes/Improving-Enzymes-Engineered.webp",
    // },
];

const areasOfStudyData = [
    { title: 'Molecular Biology' },
    { title: 'Enzyme Engineering' },
    { title: 'Pharmacology' },
    { title: 'Gene Expression' },
    { title: 'Enzyme Design' },
    { title: 'Enzyme Synthesis' },
    { title: 'Enzyme Mutagenesis' },
    { title: 'Enzyme Bioremediation' },
    { title: 'Biomarkers' },
    { title: 'Enzyme as Drug Targets' },
    { title: 'Industrial Applications of Enzymes' },
    { title: 'Enzyme Replacement Therapy' }
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ethan Matthews",
        degree: "PhD in Biochemistry",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp",
    },
    {
        name: "Dr. Olivia Harris",
        degree: "PhD in Enzyme Engineering",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/ceramic-engineering/Dr.-Olivia-Harris.webp",
    },
    {
        name: "Dr. Lucas Carter",
        degree: "MD, Biotechnology",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/enzymes/Dr.-Lucas-Carter.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc: "/images/subject-matter-experts/enzymes/sample-works.webp",
    imageAlt: "Nature Journal Cover",
    paperTitle:
        "Structure of the ATP-driven methyl-coenzyme M reductase activation complex",
    author:
        "Ramirez-Amador, F., Paul, S., Kumar, A., Lorent, C., Keller, S., Bohn, S., Nguyen, T., Lometto, S., Viegels, D., Kahnt, J., Deobald, D., Abendroth, F., Vázquez, O., Hochberg, G., Scheller, S., Stripp, S. T., & Schuller, J. M. (2025)",
    publisher: "Springer Nature",
    journalName: "Nature",
    impactFactor: "48.5 (2024)",
};

export default function EnzymesSection() {
    const [activeConditionTab, setActiveConditionTab] = useState(0);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Common Enzymes Conditions */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Common Enzymes Conditions"
                    description=""
                    trends={commonEnzymesConditionsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Emerging Trends in Enzymes Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in Enzymes Research"
                    description="Improving Enzymes Engineered (customised) Enzymes via Synthetic Biology to create more stable zymes with higher efficiency, for use in chemicals (biobased fuels) and pharmaceutical industries:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/enzymes/Emerging-Trends-in-Enzymes-Research.webp"
                    imageAlt="Applications of Enzymes Research"
                />
            </section>

            {/* SECTION 3: Areas of Study */}
            <section className="w-full relative flex flex-col lg:flex-row min-h-[380px] overflow-hidden">
                {/* Left Side: Full-bleed Image Container */}
                <div className="w-full lg:w-5/12 relative flex items-center p-6 sm:p-8 min-h-[260px] lg:min-h-full">
                    {/* Next.js Image Component */}
                    <Image
                        src="/images/enzym.webp"
                        alt="Areas of Study"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Dark Overlay for Readability */}
                    <div className="absolute inset-0 bg-black/40 z-10" />

                    {/* Text Overlay on Left Side Image */}
                    <p className="relative z-20 text-xs sm:text-sm md:text-base text-white font-medium max-w-sm leading-relaxed">
                        Pubrica's team of experts supports all areas of computer science research:
                    </p>
                </div>

                {/* Right Side: Full-bleed Dark Green Content Box */}
                <div className="w-full lg:w-7/12 bg-[#0e3b32] text-white py-8 px-6 sm:px-8 lg:px-10 flex flex-col justify-center space-y-5 z-20">
                    <div className="text-left space-y-1.5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Areas of Study
                        </h2>
                        <div className="w-12 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Compact Name Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
                        {areasOfStudyData.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white text-gray-900 px-2.5 py-2 rounded-md shadow-xs flex items-center space-x-1.5 font-semibold text-xs"
                            >
                                <ChevronRight className="w-3.5 h-3.5 text-[#0e3b32] shrink-0" />
                                <span className="truncate">{area.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 5: Our Expert Enzymes Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Enzymes Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}