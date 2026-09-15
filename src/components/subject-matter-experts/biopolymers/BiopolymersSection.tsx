"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";


const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "biodegradable-plastics",
        title: "Biodegradable Plastics for the Circular Economy",
        description:
            "Growing concerns about plastic accumulation have accelerated the demand for PLA, PHAs, starch blends, and other biodegradable materials. Research emphasizes enhancing mechanical strength, degradation rates, and competitive manufacturing costs.",
    },
    {
        id: "nano-structured-biopolymers",
        title: "Nano-Structured Biopolymers",
        description:
            "Nanocomposites, nano-cellulose, chitosan nanoparticles, and polymer nanocarriers are paving the way for new material functionalities in environmental cleanup, tissue engineering, drug delivery, and military applications.",
    },
    {
        id: "microbial-enzymatic-production",
        title: "Microbial and Enzymatic Polymer Production",
        description:
            "Microbiological synthesis is gaining prominence due to low energy input and high scalability. Novel microbial strains are being engineered to produce tailor-made biopolymers using fermentation waste, agricultural residues, and industrial by-products.",
    },
    {
        id: "bio-inspired-material-design",
        title: "Bio-Inspired Material Design",
        description:
            "Researchers are adapting polymer structures from nature, such as spider silk and plant fibres, to develop strong, lightweight, and multifunctional materials.",
    },
    {
        id: "smart-responsive-biopolymers",
        title: "Smart and Responsive Biopolymers",
        description:
            "Hydrogels and shape-memory polymers that respond to pH, temperature, light, or biological triggers are becoming critical in wearable electronics, biosensors, regenerative medicine, and controlled drug release.",
    },
    {
        id: "ai-computational-engineering",
        title: "AI and Computational Engineering in Biopolymer Design",
        description:
            "Machine learning and molecular simulation tools now accelerate the prediction of polymer properties, biodegradation behaviour, and optimal synthesis pathways, shortening development cycles and improving performance outcomes",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Krishnan",
        degree: "PhD in Biopolymers",
        experience: "12 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biopolymers/Dr.-Ananya-Krishnan-1.webp",
    },
    {
        name: "Dr. Aarav Mehta",
        degree: "PhD in Biopolymer Science",
        experience: "11 years of experience",
        manuscripts: "110+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Ananya-Patel.webp",
    },
    {
        name: "Dr. Shreya Nambiar",
        degree: "PhD in Biomedical Polymers",
        experience: "9 years of experience",
        manuscripts: "80 manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biopolymers/Dr.-Shreya-Nambiar.webp",
    },
];

const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/biopolymers/sample-works-8-2.webp",
    imageAlt: "Biopolymers Journal Cover",
    paperTitle: "Emerging Roles of Biopolymers in Seed Science and Technology",
    author:
        "Anu, Velusamy, M., Rathinavelu, S., Shanmugam, V., Gnanadhas, P., & Karre, S",
    publisher: "Wiley",
    journalName: "Biopolymers",
    impactFactor: "3.2",
};


export default function BiopolymersSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Biopolymer Research Trends */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Biopolymer Research Trends"
                    description="The field of biopolymers is evolving rapidly due to technological advancements, environmental policies, and increased investment in sustainable manufacturing. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={whereAuthorsPublishData}
                />
            </section>

            {/* SECTION 3: Our Expert Biopolymers Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Biopolymers Editors"
                    description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}