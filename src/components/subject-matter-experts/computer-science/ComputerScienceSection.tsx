"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";

const emergingTrendsData = [
    {
        id: 'ai-ml',
        title: 'Artificial Intelligence - Machine Learning',
        description: 'Advanced AI systems with the potential for automation, decision-making, and intelligent systems.'
    },
    {
        id: 'quantum-computing',
        title: 'Quantum Computing',
        description: 'Next Generation Computer Models that will solve very complex issues that are currently unsolvable using traditional computing methodologies.'
    },
    {
        id: 'edge-computing',
        title: 'Edge Computing',
        description: 'Data processing at the nearest location to the source for faster response times and lower latency.'
    },
    {
        id: 'blockchain',
        title: 'Blockchain',
        description: 'Systems governed by highly secure and decentralized technology ensure your data\'s integrity and transparency.'
    },
    {
        id: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'New AI-based detection methods and encrypted methods of storing and securing your data have been developed.'
    }
];

const applicationsData = [
    {
        title: "",
        desc: "IT: Developing software, creating systems and managing IT infrastructure.",
        iconSrc:
            "/images/subject-matter-experts/computer-science/IT.webp",
    },
    {
        title: "",
        desc: "Health Care: Using AI to diagnose a disease, use medical imaging, and analyse health-related datasets (such as blood sugar levels).",
        iconSrc:
            "/images/subject-matter-experts/computer-science/Health-Care.webp",
    },
    {
        title: "",
        desc: "Finance: Using algorithms to trade on the stock market (algorithmic trading), detect fraud, and create financial projections.",
        iconSrc:
            "/images/subject-matter-experts/computer-science/Finance.webp",
    },
    {
        title: "",
        desc: "Education: Developing e-learning platforms and using advanced technologies (intelligent tutoring).",
        iconSrc:
            "/images/subject-matter-experts/computer-science/Education.webp",
    },
    {
        title: "",
        desc: "Research and Innovation: Establishing new technologies (AI, robotics, and Data Science).",
        iconSrc:
            "/images/subject-matter-experts/computer-science/Research-and-Innovation.webp",
    },
];

const areasOfStudy = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Computer Networks',
    'Cloud Computing',
    'Database Systems',
    'Cybersecurity Software Engineering Blockchain',
    'Human-Computer Interaction Quantum Computing Big Data Analytics',
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Kevin Marshall",
        degree: "PhD in Computer Science",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/computer-science/Dr.-Kevin-Marshall.webp",
    },
    {
        name: "Dr. Ananya Iyer",
        degree: "PhD in Artificial Intelligence",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Prof.-Michael-Anderson.webp",
    },
    {
        name: "Dr. David Kim",
        degree: "PhD in Data Science",
        experience: "10 years of experience",
        manuscripts: "140+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/animal-science/karrel.png",
    },
];
const whereAuthorsPublishData = {
    title: "Where Our Authors Publish",
    description:
        "Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximising and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity.",
    publication: {
        imageSrc:
            "/images/subject-matter-experts/computer-science/Institute-of-Electrical-and-Electronics-Engineers.webp",
        imageAlt:
            "IEEE Journal of Electrical and Electronics Engineering Cover",
        paperTitle:
            "A Survey on Deep Learning Techniques for Image Recognition",
        author: "John D. Smith",
        journalName:
            "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        publisher:
            "Institute of Electrical and Electronics Engineers",
        impactFactor: "24.3",
    },
};
export default function ComputerScienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Computer Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Emerging Trends in Computer Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        The field of Computer science is rapidly evolving due to technological innovations and global challenges:
                    </p>
                </div>

                {/* Tab Buttons Container */}
                <div className="bg-[#f7f8f8] border border-gray-200 rounded-lg p-1 sm:p-2">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-1 border-b border-gray-200">
                        {emergingTrendsData.map((tab, idx) => {
                            const isActive = activeTab === idx;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(idx)}
                                    className={`px-3 py-3 text-xs sm:text-sm font-semibold transition-colors duration-150 border-r border-gray-200 last:border-r-0 flex items-center justify-center text-center ${isActive
                                        ? 'bg-[#0e3b32] text-white shadow-sm'
                                        : 'bg-[#eef2f1] text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Tab Content Box */}
                    <div className="p-6 sm:p-8 bg-white border border-t-0 border-gray-200 mt-0 rounded-b-md shadow-xs">
                        <h3 className="text-xl font-bold text-[#0e3b32] mb-3">
                            {emergingTrendsData[activeTab].title}
                        </h3>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {emergingTrendsData[activeTab].description}
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Applications of Computer Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Computer Science"
                    description="Computer science has thousands of applications in three distinct fields:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/computer-science/Applications-of-Computer-Science.webp"
                    imageAlt="Applications of Computer Science"
                />
            </section>

            {/* SECTION 3: Areas of Study */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px] rounded-none overflow-hidden">
                {/* Left Side: Image with Dark Overlay */}
                <div className="lg:col-span-5 relative min-h-[300px] flex items-center p-8 sm:p-12 !rounded-none overflow-hidden">
                    <Image
                        src="/images/Areas-of-Study-1.webp"
                        alt="Areas of Study Monitor"
                        fill
                        sizes="(max-width: 1024px) 100vw, 41vw"
                        className="object-cover !rounded-none"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                        priority
                    />

                    {/* Dark Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 !rounded-none z-10"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                    ></div>

                    {/* Text Overlay */}
                    <p className="relative z-20 text-sm sm:text-base text-gray-200 leading-relaxed max-w-md">
                        Pubrica&apos;s team of experts supports all areas of computer science research:
                    </p>
                </div>

                {/* Right Side: Dark Green Background with Header & Grid */}
                <div className="lg:col-span-7 bg-[#052b28] p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    {/* Section Header */}
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Areas of Study
                        </h2>

                        <div className="w-16 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Tag Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {areasOfStudy.map((area, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-3 py-2.5 rounded-sm shadow-sm flex items-center space-x-2 text-xs font-semibold leading-snug"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#052b28] flex items-center justify-center shrink-0">
                                    <ChevronRight className="w-3 h-3 text-white stroke-[3]" />
                                </div>

                                <span>{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title={whereAuthorsPublishData.title}
                    description={whereAuthorsPublishData.description}
                    publication={whereAuthorsPublishData.publication}
                />
            </section>

            {/* SECTION 5: Our Expert Computer Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Computer Science Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialisation, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}