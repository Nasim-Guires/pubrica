"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "deep-learning-advancements",
        title: "Deep Learning Advancements",
        description:
            "Recent advances in deep learning Architecture with Transformers and Attention Mechanisms are enabling new breakthroughs and possibilities in Natural Language Processing, Computer Vision, and Speech Recognition.",
    },
    {
        id: "federated-learning",
        title: "Federated Learning",
        description:
            "The decentralisation of training a neural network on different devices without exposing user data, which helps to protect privacy and maintain security in industries such as healthcare and finance.",
    },
    {
        id: "explainable-ai",
        title: "Explainable AI (XAI)",
        description:
            "As AI becomes an integral part of business operation across all sectors, the need for AI systems that are developed and operated transparently will continue to rise.",
    },
    {
        id: "automated-machine-learning",
        title: "Automated Machine Learning (Auto ML)",
        description:
            "The development of Auto ML has made it possible for a layman to use machine learning technologies without being a data scientist by simplifying the processes of model selection, hyperparameter adjustments, and workflow optimization through automating them.",
    },
    {
        id: "reinforcement-learning",
        title: "Reinforcement Learning in Real-World Applications",
        description:
            "The development of reinforcement learning continues to evolve, giving rise to the emergence of more complex, resourceful autonomous systems; robotics, self-driving automobiles, and intelligent urban centres.",
    },
    {
        id: "ai-for-drug-discovery",
        title: "AI for Drug Discovery and Healthcare",
        description:
            "Machine learning is transforming healthcare, with models being used to predict drug efficacy, personalize treatment plans, and optimize diagnostic imaging techniques.",
    },
];
const applicationsOfLifeScienceData = [
    {
        title: 'Predictive Maintenance',
        description: 'Anticipating equipment failures and optimizing industrial operations before downtime occurs'
    },
    {
        title: 'Natural Language Processing',
        description: 'Extracting insights, automating text generation, and enhancing conversational systems'
    },
    {
        title: 'Computer Vision',
        description: 'Enabling automated visual inspection, object detection, and pattern recognition'
    },
    {
        title: 'Robotics and Automation',
        description: 'Improving autonomous navigation, smart logistics, and industrial manufacturing workflows'
    },
    {
        title: 'Financial Services',
        description: 'Detecting fraudulent transactions, assessing credit risk, and automating algorithmic trading'
    },
    {
        title: 'Healthcare and Diagnostics',
        description: 'Assisting medical imaging analysis and predicting patient outcome trajectories'
    },
    {
        title: 'Research and Development',
        description: 'Accelerating data analysis, simulation modeling, and complex algorithm optimization'
    },
    {
        title: 'Smart Cities and IoT',
        description: 'Optimizing energy consumption, traffic flow, and urban infrastructure management'
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Aria Bennett",
        degree: "PhD in Machine Learning",
        experience: "15 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/machine-learning/Dr.-Aria-Bennett.webp",
    },
    {
        name: "Dr. Ethan Morales",
        degree: "PhD in Data Science",
        experience: "10 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/machine-learning/Dr.-Ethan-Morales.webp",
    },
    {
        name: "Dr. Priya Nair",
        degree: "PhD in Computational Intelligence",
        experience: "12 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cancer-research/Dr.-Meera-Iyer-1.webp",
    },
];

export default function MachineLearningSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Machine Learning Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Machine Learning Research"
                    description="Emerging trends in machine learning research are transforming industries with innovations in deep learning, natural language processing, and AI-driven automation:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Machine Learning (Preserving Layout structure) */}
            {/* <section className="max-w-6xl mx-auto space-y-6">
                    <div className="space-y-3 text-left">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                            Applications of Machine Learning
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            Machine learning encompasses an interdisciplinary area of technology that applies algorithmic and computational concepts in a variety of fields. The main applications include:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            {applicationsOfLifeScienceData.map((item, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <div className="mt-1 text-[#0e3b32]">
                                        <ChevronRight className="w-5 h-5 shrink-0" />
                                    </div>
                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                        <strong className="text-gray-900 font-bold">{item.title} – </strong>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
                            <img
                                src="/images/subject-matter-experts/machine-learning/Comprehensive-Support-for-Machine-Learning-Research-Writing-and-Publication.webp"
                                alt="Machine learning research setup"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section> */}

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/machine-learning/sample-works-11-5.webp",
                    imageAlt: "Artificial Intelligence Journal Cover",
                    paperTitle:
                        "Probabilistically robust counterfactual explanations under model changes",
                    author:
                        "Luca Marzari, Francesco Leofante, Ferdinando Cicalese, Alessandro Farinelli",
                    journalName: "Artificial Intelligence",
                    publisher: "Elsevier",
                    impactFactor: "4.6",
                }}
            />

            {/* SECTION: Our Expert Machine Learning Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Machine Learning Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}