"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import Link from "next/link";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "integrated-photonics",
        title: "Integrated Photonics and Silicon Photonics",
        description:
            "Silicon and Integrated Photonics Minimising of optical components used in electronics has led to improved data transmission speeds, reduced requirements to power usage and performing better overall for Optical Communications systems.",
    },
    {
        id: "advanced-optoelectronic",
        title: "Advanced Optoelectronic Devices",
        description:
            "Advancements in Optoelectronic Components Improving the quality of imaging sensing, Enhanced Optical Sensors will enable advances in future products by providing better quality images and sensor data to use for other electronic systems.",
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence-Enabled Optical Systems",
        description: (
            <>
                <Link
                    href="/services/ai-ml-support/"
                    className="text-blue-600 no-underline hover:no-underline"
                >
                    Artificial Intelligence
                </Link>{" "}
                in Optical Systems Combining Ai and optical electronic systems will allow for greater accuracy, faster analysis of images and the ability to recognize patterns of data in real time.
            </>
        ),
    },
    {
        id: "flexible-wearable",
        title: "Flexible and Wearable Electronics",
        description:
            "Flexible and Wearable Electronics Flexible electronic and Optical Technologies have opened many new possibilities for usage of Wearable Health Monitoring Systems, Smart Textiles, and Human-Machine Interaction applications.",
    },
    {
        id: "nanophotonic-metamaterials",
        title: "Nanophotonic and Metamaterials",
        description:
            "Nanophotonic and Metamaterials The invention of Nanostructured materials is allowing for the creation of new materials that enable stunningly precise control over the use of Light for Sensing, Imaging, as well as Energy Efficiency.",
    },
    {
        id: "energy-efficient",
        title: "Energy-Efficient and Sustainable Technologies",
        description:
            "Sustainable, Energy Efficient Technology Development of Low Power Electronics and Smart Energy Harvesting Systems are creating many new opportunities for the development of Green, Sustainable, and Long-Lasting Electronic Technologies.",
    },
];
const applicationsData = [
    {
        title: "Personalised Learning Facilitated by Artificial Intelligence",
        desc: "More rapid development of learner skills through micro-learning.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/More-rapid-development.webp",
    },
    {
        title: "Gamification and Engagement",
        desc: "Ability to increase engagement through gamification.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Ability-to-increase-engagement.webp",
    },
    {
        title: "Immersive Technologies",
        desc: "Use of A.R. and V.R. to enhance the learner experience.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Use-of-A.R.-and-V.R.webp",
    },
    {
        title: "Mobile-First Accessibility",
        desc: "Creation of mobile-first learning opportunities.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/mobile-first-learning-opportunities.webp",
    },
    {
        title: "Learning Analytics",
        desc: "Use of data analytics to improve student learning outcomes.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/data-analytics.webp",
    },
    {
        title: "Adaptive Learning Pathways",
        desc: "Creation of individualised and adaptive learning paths.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Creation-of-individualised.webp",
    },
    {
        title: "Collaborative Social Tools",
        desc: "Creation of collaborative and social technology tools for learners.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Creation-of-collaborative.webp",
    },
    {
        title: "Micro-Certifications",
        desc: "Creation of micro-certifications and digital credentials.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Creation-of-micro-certifications.webp",
    },
    {
        title: "Automated Assessment",
        desc: "Creation of automated assessment and feedback processes.",
        iconSrc:
            "/images/subject-matter-experts/e-learning/Creation-of-automated-assessment.webp",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Arjun Rao",
        degree: "PhD in Educational Technology",
        experience: "16 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/e-learning/Dr.-Arjun-Rao-1.webp",
    },
    {
        name: "Dr. Kavita Nair",
        degree: "PhD in Instructional Design & Learning Sciences",
        experience: "14 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/e-learning/Dr.-Kavita-Nair-1.webp",
    },
    {
        name: "Dr. Meera Iyer",
        degree: "PhD in Educational Psychology",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/e-learning/Dr.-Meera-Iyer-1.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/e-learning/sample-works-11-11.webp",
    imageAlt: "Computers & Education Open Book Cover",
    paperTitle:
        "Differential effects of student and parental mobile phone use on academic procrastination trajectories: Machine learning evidence",
    author: "Jiabin Liu, Ru-De Liu, Wei Hong, Jingmin Lin.",
    publisher: "Elsevier",
    journalName: "Computers & Education",
    impactFactor: "10.5",
};
export default function ELearningSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Optics and Electronics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Optics and Electronics"
                    description="Advancements in optics and electronics are driving innovation across healthcare, communication, manufacturing, and scientific research. Key emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Emerging Trends in E Learning */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Emerging Trends in E Learning"
                    description="E-learning continues to evolve rapidly with advancements in technology, pedagogy, and learner engagement strategies. The following trends are shaping the future of digital education:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/e-learning/Dr.-Jane-Matthews.webp"
                    imageAlt="Emerging Trends in E Learning"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert E Learning Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert E Learning Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}