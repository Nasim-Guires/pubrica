"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
    Building2,
    Landmark,
    ShoppingCart,
    Radio,
    Cpu,
    Factory,
} from "lucide-react";
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

export default function BigDataTrendsAndPublishingSection() {
    const [activeTab, setActiveTab] = useState(0);

    const bigDataTrends: EmergingTrendItem[] = [
        {
            id: 1,
            title: "Cloud-Based Big Data Platforms",
            description: "Cloud-based big data platforms enable scalable, flexible and cost-effective storage, processing and analysis by using Cloud Computing and Big Data together through platforms such as Amazon Web Services (AWS), Microsoft Azure and Google Cloud.",
        },
        {
            id: 2,
            title: "Real-time data processing",
            description: "Apache Spark and Kafka provide real-time data analytics, which supports Timely Data-Driven Decision-Making and Real-Time Insights across All Industries.",
        },
        {
            id: 3,
            title: "AI and ML Integration",
            description: "Through the combination of Big Data and AI and Machine Learning (ML) resources; businesses and researchers can create predictive analytics and build automated and automated decision support systems that improve their performance and/or reach placed throughout their industry.",
        },
        {
            id: 4,
            title: "Data Governance and Security",
            description: "The increase in Data Governance, Regulatory Compliance and Privacy legislations is creating greater emphasis on providing secure handling of large-scale data sets.",
        },
        {
            id: 5,
            title: "Edge Computing and IoT Integration",
            description: "By processing data closer to the point of origin, Edge Computing reduces latency and enhances performance of IoT driven applications and real-time data analytics.",
        },
        {
            id: 6,
            title: "Advanced Data Visualization and Analytics",
            description: "Interactive dashboards and Advanced Visualizations enable data users to visualize and understand complex data sets to make timely and informed decisions.",
        },
    ];

    const applicationsData = [
        {
            title: "Hospital's Information",
            desc: "Diagnosis, Monitoring and Analytics are Based on Data",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Architecture-Management.webp",
            icon: Building2,
        },
        {
            title: "Banks and Insurance",
            desc: "Fraud Detection, Risk Management and Real-time Analytics",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Analytics-Mining.webp",
            icon: Landmark,
        },
        {
            title: "Retailers",
            desc: "Analysis of Consumer Behaviour and Forecasting Demand",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/471.webp",
            icon: ShoppingCart,
        },
        {
            title: "Telecoms",
            desc: "Network Optimisation and Use Analytics",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Real-time-Streaming-Analytics.webp",
            icon: Radio,
        },
        {
            title: "Smart Cities",
            desc: "Traffic Management, Energy Optimisation and Analytics of IoT",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Integration-Warehousing.webp",
            icon: Cpu,
        },
        {
            title: "Manufacturing",
            desc: "Predictive Maintenance and Optimisation of Processes",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Security-Governance.webp",
            icon: Factory,
        },
    ];
    const bigDataEditorsData: ExpertEditorItem[] = [
        {
            name: "Dr. Rajesh Kumar",
            degree: "PhD in Big Data Analytics",
            experience: "14 years of experience",
            manuscripts: "100+ manuscripts edited",
            avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-Rajesh-Kumar-1.webp",
            flag: "/images/country/gb.webp", // Add your flag path here
        },
        {
            name: "Dr. Ananya Verma",
            degree: "PhD in Data Science and Hadoop Technologies",
            experience: "11 years of experience",
            manuscripts: "140+ manuscripts edited",
            avatar: "/images/subject-matter-experts/big-data-hadoop/Dr.-Ananya-Verma-1.webp",
            flag: "/images/country/us.png", // Add your flag path here
        },
        {
            name: "Dr. Michael Thompson",
            degree: "PhD in Distributed Computing and Big Data Systems",
            experience: "16 years of experience",
            manuscripts: "150+ manuscripts edited",
            avatar: "/images/subject-matter-experts/augmented-reality/Dr.-Robert-Klein-1.webp",
            flag: "/images/country/us.png", // Add your flag path here
        },
    ];

    const publicationData: AuthorPublicationData = {
        imageSrc: "/images/subject-matter-experts/big-data-hadoop/sample-works-11-13.webp",
        imageAlt: "Big Data Research Journal Cover",
        paperTitle: "Novel V2X-based traffic congestion prediction system",
        author: "Norman Bereczki, Vilmos Simon.",
        publisher: "Elsevier",
        journalName: "Big Data Research",
        impactFactor: "4.2",
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-6 bg-white font-sans text-gray-800 space-y-16">

            {/* SECTION 1: EMERGING TRENDS IN BIG DATA & HADOOP */}
            <EmergingTrendsSection
                title="Emerging Trends in Big Data & Hadoop"
                description="As industries around the world continue to evolve due to the increasing use of data-driven technologies such as Big Data and Hadoop, the ability to perform huge amounts of data processing with a highly scalable way, perform advanced analysis and make decisions in real-time has arrived. Here are some of the main trends emerging from these technologies:"
                trends={bigDataTrends}
                footerText=""
            />

            {/* SECTION 2: APPLICATIONS OF BIG DATA & HADOOP */}
            <ApplicationsSection
                title="Applications of Big Data & Hadoop"
                description="Big Data and Hadoop technologies are widely used across industries to manage, analyze, and extract valuable insights from massive datasets. Key application areas include:"
                applications={applicationsData}
                imageSrc="/images/subject-matter-experts/big-data-hadoop/Applications-of-Big-Data-Hadoop-.webp" // Update with your actual workspace image path
                imageAlt="Big Data and Hadoop workspace illustration"
            />

            {/* SECTION 3: WHERE OUR AUTHORS PUBLISH */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Big Data & Hadoop, in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={publicationData}
            />

            {/* SECTION 4: OUR EXPERT BIG DATA & HADOOP EDITORS */}
            <ExpertEditorsSection
                title="Our Expert Big Data & Hadoop Editors"
                description="At Pubrica, our staff of professional editors specialising in data mining will edit manuscripts to make them suitable for publication with the highest level of clarity, precision and impact. The editors have earned higher degrees or possess domain-specific experience in data mining, machine learning, big data analytics, and computational modelling."
                editors={bigDataEditorsData}
            />

        </div>
    );
}