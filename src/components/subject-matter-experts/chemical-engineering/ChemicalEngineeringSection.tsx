"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import {
    Briefcase,
    FileText,
    ChevronDown,
    Pill,
    Zap,
    Droplets,
    Utensils,
    Layers,
    Flame,
    Dna,
    Leaf
} from 'lucide-react';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const emergingTrendsData = [
    "AI & ML tools are ever more common in industry for operations enhancement, calculating when equipment will need service, and developing intelligent systems.",
    "Process intensification is the next area of innovation that focuses on the development of small, energy-efficient processes which result in increased productivity and less energy consumed.",
    "Green/Sustainability Engineering emphasises the use of environmentally conscious manufacturing methods and processes, using renewable energy to operate and minimising waste in production.",
    "Advanced Materials and Nanotechnology deal with creating new classes of materials with unique physical properties used in industrial and healthcare applications.",
    "CCU, or Carbon Capture and Utilisation Technologies, work to limit carbon emissions from all sources and enable the conversion of CO₂ by-products into usable materials.",
    "Digital Twins of Chemical Plants allow for the virtual representation of chemical facilities and aid in monitoring, controlling, and optimising the chemical process in \"real-time\"."
];

const applicationsData = [
    {
        icon: Pill,
        title: "Pharmaceuticals",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Reaction-Engineering.webp",
        desc: "developing and manufacturing drug and biopharmaceutical products",
    },
    {
        icon: Zap,
        title: "Energy",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Separation-Processes.webp",
        desc: "developing fuel, alternative energy technologies, and storage",
    },
    {
        icon: Droplets,
        title: "Environmental engineering",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Environmental-engineering.webp",
        desc: "waste treatment, water purification, and pollution",
    },
    {
        icon: Utensils,
        title: "Food processing",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Food-processing-1.webp",
        desc: "improving the process for producing and preserving food",
    },
    {
        icon: Layers,
        title: "Materials science",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Materials-science.webp",
        desc: "developing new materials such as polymers and nanomaterials",
    },
    {
        icon: Flame,
        title: "Petrochemical industry",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Petrochemical-industry.webp",
        desc: "developing processes for refining crude oil, producing petrochemical products, and producing fuels",
    },
    {
        icon: Dna,
        title: "Biotechnology",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Biotechnology-1.webp",
        desc: "developing products such as enzymes and vaccines",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        iconSrc:
            "/images/subject-matter-experts/chemical-engineering/Sustainability.webp",
        desc: "developing new processes that are sustainable and have a lower effect on the environment",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Robert Williams",
        degree: "PhD in Chemical Engineering",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/chemical-engineering/Dr.-Robert-Williams.webp",
    },
    {
        name: "Dr. Anjali Rao",
        degree: "PhD in Process Engineering",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/chemical-engineering/Dr.-Anjali-Rao.webp",
    },
    {
        name: "Dr. David Lee",
        degree: "PhD in Reaction Engineering",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/chemical-engineering/Dr.-David-Lee.webp",
    },
];

export default function ChemicalEngineeringSection() {
    // Collapsible accordion state for Future Trends (closed by default)
    const [isTrendsOpen, setIsTrendsOpen] = useState(false);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Chemical Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Chemical Engineering
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Trends in Health Care, Biotechnology, and Sustainability through Cutting-Edge Molecular Engineering.
                    </p>
                </div>

                {/* Collapsible Accordion Box */}
                <div className="border border-gray-200 rounded-md overflow-hidden">
                    <button
                        onClick={() => setIsTrendsOpen(!isTrendsOpen)}
                        className="w-full bg-[#0e3b32] text-white px-6 py-3.5 flex items-center justify-between font-semibold text-sm sm:text-base transition-colors duration-150 hover:bg-[#0a2f28]"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-xl font-bold">{isTrendsOpen ? '−' : '+'}</span>
                            <span>Future Trends in Molecular Engineering & Sustainable Technologies</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isTrendsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isTrendsOpen && (
                        <div className="p-6 bg-[#fafafa] border-t border-gray-200 space-y-3">
                            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                                {emergingTrendsData.map((trend, idx) => (
                                    <li key={idx} className="pl-1">
                                        <span className="text-gray-800">{trend}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTION 2: Applications of Chemical Engineering */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ApplicationsSection
                    title="Applications of Chemical Engineering"
                    description="Chemical engineering is used to solve several problems in different industries, including:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/chemical-engineering/Applications-of-Chemical-Engineering.webp"
                    imageAlt="Applications of Chemical Engineering"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximising recognition and impact."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/chemical-engineering/sample-works-14.webp",
                    imageAlt: "Chemical Engineering Journal Cover",
                    paperTitle:
                        "Advances in Process Intensification for Chemical Manufacturing",
                    author: "John A. Smith, Laura Chen",
                    journalName: "Chemical Engineering Journal",
                    publisher: "Elsevier",
                    impactFactor: "15.1",
                }}
            />
            {/* SECTION 4: Our Expert Chemical Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Chemical Engineering Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}