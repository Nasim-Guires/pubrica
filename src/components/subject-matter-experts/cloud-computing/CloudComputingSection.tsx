"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "edge-fog-computing",
        title: "Edge Computing & Fog Computing",
        description:
            "Using proximity to your information's source increases speed and makes it easy to process information immediately as it becomes available.",
    },
    {
        id: "ai-cloud-ml",
        title: "AI and Cloud Computing, ML",
        description:
            "Using AI and automation to maximise how well clouds work, to help scale clouds, and to make more informed decisions about their usage.",
    },
    {
        id: "serverless-computing",
        title: "Serverless Computing",
        description:
            "Serverless computing allows developers to write and implement applications without managing all the resources (server farms) required to run those applications, which results in better efficiency and scalability.",
    },
    {
        id: "hybrid-multi-cloud",
        title: "Hybrid and Multi-Cloud Architectures",
        description:
            "Using various types of cloud environments together increases the flexibility, reliability and independence of a business from a single vendor or environment.",
    },
    {
        id: "data-protection-security",
        title: "Data Protection and Cloud Security",
        description:
            "Zero Trust architecture strengthens our approach to protecting the data we keep by implementing advanced data encryption technology, protecting identity and implementing technology to create trust without requiring knowing who the person is.",
    },
    {
        id: "cloud-native-microservices",
        title: "Cloud-Native and Microservices",
        description:
            "Cloud-Native and microservices designs allow us to develop scalable and reliable applications using separate services that are designed to operate independently of one another and based on container technology.",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Sharma",
        degree: "PhD in Cloud Computing & Distributed Systems",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp",
    },
    {
        name: "Dr. Sneha Varghese",
        degree: "PhD in Cloud Architecture & Network Security",
        experience: "9 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Sneha-Varghese-2.webp",
    },
    {
        name: "Dr. Ayesha Kapoor",
        degree: "PhD in Cloud Computing & Data Engineering",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/cloud-computing/sample-works-11-12.webp",
    imageAlt: "Journal of Cloud Computing Cover",
    paperTitle:
        "Secure and personalized sports media recommendation via federated knowledge graph embedding in edge computing",
    author: "Ya Zhang, Song Qing, Hossein Ghayaumi Zadeh",
    publisher: "springer nature",
    journalName:
        "Journal of Cloud Computing: Advances, Systems and Applications",
    impactFactor: "4.3 (2024)",
};
export default function CloudComputingSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Cloud computing Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Cloud computing Research"
                    description="Cloud computing continues to evolve rapidly, driven by advances in scalability, intelligence, and security. Key emerging trends shaping the future of cloud research include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Our Expert Cloud Computing Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Cloud Computing Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />

        </div>
    );
}