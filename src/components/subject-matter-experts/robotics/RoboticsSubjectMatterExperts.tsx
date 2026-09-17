"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import Link from "next/link";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "robotics",
        title: "Robotics",
        description: (
            <>
                The expansion of{" "}
                <Link
                    href="/services/ai-ml-support/"
                    className="text-blue-600"
                >
                    artificial intelligence and machine learning
                </Link>{" "}
                allows machines to perceive, learn, and make decisions in changing environments without the need for human assistance.
            </>
        ),
    },
    {
        id: "cobots",
        title: "Cobots",
        description:
            "Cobots are changing the manufacturing, healthcare, and service sectors by providing an alternative to the traditional human-robot interface. Cobots have been designed to work safely side-by-side with humans, offering many advantages in terms of flexibility and increased speed.",
    },
    {
        id: "soft-robotics",
        title: "Soft Robotics",
        description:
            "Soft robots use flexible materials to accomplish tasks that are typically performed using hard robots, resulting in the ability to perform delicate tasks safely and therefore have the potential to facilitate human contact (in all fields) and have applications in medicine and exploration.",
    },
    {
        id: "swarm-robotics",
        title: "Swarm Robotics",
        description:
            "The use of multiple robots working together through decentralized control systems creates scalable solutions for tasks such as search and rescue, environmental monitoring, and supply chain management.",
    },
    {
        id: "robotics-computer-vision",
        title: "Robotics with Computer Vision",
        description:
            "Advanced vision systems enable robots to recognize and respond to visual information in complex environments. By improving object recognition, navigation, and real-time decision-making, vision-based robotics can improve the efficiency and effectiveness of several critical functions.",
    },
    {
        id: "human-robot-interaction",
        title: "Human-Robot Interaction",
        description:
            "Various technologies, including intuitive interfaces and wearable robotics, assistive devices, and other wearable technologies, are improving human capabilities and enhancing the quality of life for people with disabilities and others requiring long-term rehabilitation.",
    },
];
const clinicalApplicationsData = [
    {
        title: 'Industrial Automation:',
        description: 'Robotic systems streamline production lines, increase throughput, and lower operational error rates across advanced manufacturing.'
    },
    {
        title: 'Healthcare & Surgery:',
        description: 'Medical robots enable high-precision minimally invasive surgeries, targeted rehabilitation, and automated pharmacy processing.'
    },
    {
        title: 'Field & Exploration:',
        description: 'Autonomous drones and rovers navigate harsh environments for deep-sea exploration, space missions, and disaster recovery.'
    },
    {
        title: 'Logistics & Supply Chain:',
        description: 'AGVs and automated sorting systems optimize warehouse storage, inventory movement, and last-mile delivery mechanisms.'
    },
    {
        title: 'Agriculture:',
        description: 'Precision farming techniques leverage autonomous harvesters and robotic crop monitoring to maximize yield efficiency.'
    }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Michael Anderson",
        degree: "PhD in Robotics Engineering",
        experience: "15 years of experience",
        manuscripts: "190+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biophysics/Dr.-Alexander-Weiss.webp",
    },
    {
        name: "Dr. Sofia Martinez",
        degree: "PhD in Artificial Intelligence and Robotics",
        experience: "12 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/robotics/Dr.-Sofia-Martinez-1.webp",
    },
    {
        name: "Dr. Daniel Kovacs",
        degree: "PhD in Mechatronics and Automation",
        experience: "18 years of experience",
        manuscripts: "210+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/bioinformatics/Dr.-Karrel.webp",
    },
];

export default function RoboticsSubjectMatterExperts() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Robotics */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Robotics"
                    description="Robotics is rapidly evolving with advancements in artificial intelligence, machine learning, and sensor technologies driving smarter and more autonomous systems. Key trends include collaborative:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/robotics/sample-works-11-14.webp",
                    imageAlt: "Robotics and Autonomous Systems Cover",
                    paperTitle: "Visually extracting the network topology of drone swarms",
                    author: "Nisha Kumari, Kevin Lee, Chathuri Ranaweera Show more",
                    journalName: "Robotics and Autonomous Systems",
                    publisher: "Elsevier",
                    impactFactor: "5.2",
                }}
            />
            {/* SECTION: Our Expert Robotics Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Robotics Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}