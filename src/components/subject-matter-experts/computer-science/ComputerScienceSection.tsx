"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

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
        title: 'IT',
        description: 'Developing software, creating systems and managing IT infrastructure.'
    },
    {
        title: 'Health Care',
        description: 'Using AI to diagnose a disease, use medical imaging, and analyse health-related datasets (such as blood sugar levels).'
    },
    {
        title: 'Finance',
        description: 'Using algorithms to trade on the stock market (algorithmic trading), detect fraud, and create financial projections.'
    },
    {
        title: 'Education',
        description: 'Developing e-learning platforms and using advanced technologies (intelligent tutoring).'
    },
    {
        title: 'Research and Innovation',
        description: 'Establishing new technologies (AI, robotics, and Data Science).'
    }
];

const areasOfStudy = [
    'Artificial Intelligence',
    'Machine Learning',
    'Data Science',
    'Computer Networks',
    'Cloud Computing',
    'Database Systems',
    'Cybersecurity',
    'Software Engineering',
    'Blockchain',
    'Human-Computer Interaction',
    'Quantum Computing',
    'Big Data Analytics'
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
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Applications of Computer Science
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg max-w-5xl leading-relaxed">
                        Computer science has thousands of applications in three distinct fields:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        {applicationsData.map((app, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="mt-1 text-[#0e3b32]">
                                    <ChevronRight className="w-5 h-5" />
                                </div>
                                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                    <strong className="text-gray-900 font-bold">{app.title}: </strong>
                                    {app.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden shadow-md border border-gray-200">
                        <Image
                            src="/images/subject-matter-experts/computer-science/Applications-of-Computer-Science.webp"
                            alt="Applications of Computer Science"
                            fill
                            sizes="(max-width: 768px) 100vw, 320px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 3: Areas of Study */}
            <section className="w-full bg-[#0e3b32] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/3 space-y-4">
                        {/* <div className="relative">
                            <img
                                src="/images/subject-matter-experts/computer-science/Applications-of-Computer-Science.webp"
                                alt="Areas of Study Monitor"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div> */}
                        {/* <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                            Pubrica's team of experts supports all areas of computer science research:
                        </p> */}
                    </div>

                    <div className="lg:w-2/3 space-y-6">
                        <div className="text-left space-y-2">
                            <h2 className="text-3xl sm:text-4xl font-bold">
                                Areas of Study
                            </h2>
                            <div className="w-16 h-1 bg-white rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {areasOfStudy.map((area, index) => (
                                <div
                                    key={index}
                                    className="bg-white text-gray-800 rounded-md px-4 py-3 flex items-center space-x-2 text-sm font-semibold shadow-sm"
                                >
                                    <ChevronRight className="w-4 h-4 text-[#0e3b32] shrink-0" />
                                    <span>{area}</span>
                                </div>
                            ))}
                        </div>
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