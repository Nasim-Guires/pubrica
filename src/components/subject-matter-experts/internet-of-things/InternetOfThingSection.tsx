"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText } from 'lucide-react';
import Link from "next/link";
import EmergingTrendsSection from "@/components/common/EmergingTrendsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";
const emergingTrendsData = [
    {
        id: "aiot",
        title: "AIoT (Artificial Intelligence of Things)",
        description: (
            <>
                is defined as the integration of{" "}
                <Link
                    href="/services/ai-ml-support/"
                    className="text-blue-600 no-underline hover:no-underline"
                >
                    artificial intelligence
                </Link>{" "}
                into the Internet of Things (IoT). With this technology, devices equipped with sensors and data processing capabilities will have the ability to process data, analyze that data, make decisions based on that data and learn from their own experiences. As such, AIoT improves automation, predictive maintenance and real-time analytics in areas such as smart cities, healthcare, and manufacturing.
            </>
        ),
    },
    {
        id: "edge-fog-computing",
        title: "Edge and Fog Computing",
        description:
            "As devices generate and send more data over the air, it's necessary to move processing from farther away to be as close to the source as possible, which also helps minimize bandwidth use and latency. The IoT can use edge and fog computing models to process data locally rather than rely only on cloud servers and data storage, which are not conducive to real-time processing for applications such as autonomous vehicles and industrial automation processes.",
    },
    {
        id: "5g-connectivity",
        title: "5G Implementation and cutting-edge connectivity",
        description:
            "An improved understanding of peptide/protein interaction models will allow for the creation of peptides to modulate complex cellular networks for the treatment of diseases that affect multiple cell types (e.g., cancer and autoimmune disorders).",
    },
    {
        id: "enhanced-security",
        title: "Enhanced Security and Privacy Solutions",
        description:
            "Due to the expiration of patents, the number of companies developing biosimilars for peptides is growing rapidly. These biosimilars provide similar therapeutic benefits to those produced under the patent, but at significantly lower costs.",
    },
    {
        id: "digital-twins",
        title: "Digital Twins",
        description:
            "Methods for creating peptide therapeutics is quickly gaining popularity in personalized medicine. Scientists take the genetic profile of a patient, and from this they create peptides specifically designed for that patient. This process substantially increases the accuracy and success of the treatment",
    },
    {
        id: "energy-efficient-iot",
        title: "Energy-Efficient and Sustainable IoT",
        description:
            "can produce new, engineered peptides that have improved stability, specificity and activity. Engineered peptides can be used as either therapeutic agents or to aid in diagnosis, as they represent an entirely new direction for applications of Peptides outside of their traditionally known uses.",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Ananya Sharma",
        degree: "PhD in Internet of Things and Smart Systems",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp",
    },
    {
        name: "Dr. Sneha Varghese",
        degree: "PhD in IoT and Embedded Systems",
        experience: "9 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Sneha-Varghese-2.webp",
    },
    {
        name: "Dr. Ayesha Kapoor",
        degree: "PhD in IoT and Wireless Sensor Networks",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/material-science/Dr.-Ayesha-Kapoor-2.webp",
    },
];
const whereAuthorsPublishData: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/internet-of-things/Journal-on-Internet-of-Things.webp",
    imageAlt: "Internet of Things Journal Cover",
    paperTitle:
        "Cost and Time Optimization of Cloud Services in Arduino-Based Internet of Things Systems for Energy Applications",
    author: "Reza Nadimi*, Maryam Hashemi, Koji Tokimatsu",
    publisher: "Tech Science Press",
    journalName: "Journal on Internet of Things (Tech Science Press)",
    impactFactor: "1.7 (2024)",
};

export default function InternetOfThingsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Internet of Things Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Internet of Things Research"
                    description="The Internet of Things (IoT) is an area of rapid evolution and development that is changing many industries with new and improved ways to connect and interact with things. Research looks at increasing efficiency, security, scalability and intelligence in IoT environments, and the most notable trends are:"
                    trends={emergingTrendsData}
                />
            </section>

            {/* SECTION 2: Where Our Authors Publish */}

            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica’s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={whereAuthorsPublishData}
            />

            {/* SECTION 3: Our Expert Internet Of Things Editors */}
            <ExpertEditorsSection
                title="Our Expert Internet Of Things Editors"
                description="Pubrica’s team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                editors={editorsData}
            />

        </div>
    );
}