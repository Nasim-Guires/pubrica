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
        id: "deep-learning-neural-networks",
        title: "Deep Learning & Neural Networks",
        description:
            "structured data into using the same techniques on highly unstructured datasets, such as images, audio files, and video, for example, identifying patterns to analyze the opinions of individuals and then make predictions on future actions.",
    },
    {
        id: "big-data-analytics",
        title: "Big Data Analytics",
        description:
            "As Big Data progresses, so does the requirement for scalable, distributed solutions (e.g., Hadoop or Spark). Data miners must extract valuable knowledge from the immense data sets in real-time using big data technologies across multiple industries",
    },
    {
        id: "real-time-data-mining",
        title: "Real-Time Data Mining",
        description:
            'Analytics in "real-time" are allowing companies and other types of organisations to be able to make decisions very quickly. Data mining in "real-time" is essential across a variety of areas including fraud detection; cybersecurity; as well as autonomous systems.',
    },
    {
        id: "nlp",
        title: "Natural Language Processing (NLP)",
        description:
            "Data miners with the ability to analyze massive amounts of data in the form of textual content and obtain valuable information about their business or organization. These improvements will be beneficial for companies that conduct customer sentiment assessments using NLP, monitor social media activity and classify documents based upon their content.",
    },
    {
        id: "predictive-prescriptive-analytics",
        title: "Predictive Analytics & Prescriptive Analytics",
        description: (
            <>
                As{" "}
                <Link
                    href="/academy/predictive-analysis/predictive-analytics-how-it-works-uses/"
                    className="text-blue-600 no-underline hover:no-underline"
                >
                    predictive analytics
                </Link>{" "}
                is growing in sophistication using increasingly advanced modelling techniques, we are beginning to see a shift towards prescriptive analytics, which not only predict the likely future outcome of an activity, but also offer recommendations for action based on the insights developed
            </>
        ),
    },
    {
        id: "automated-data-mining",
        title: "Automated Data Mining",
        description:
            "With advancements in AI, automated data mining tools are becoming more accessible, allowing non-experts to perform sophisticated analyses without needing deep technical knowledge.",
    },
];

const applicationsData = [
    {
        title: "Healthcare Analytics",
        desc: "Healthcare Analytics – To find patterns among patients who are suffering from similar diseases, to predict how patients will react physically to their respective disease processes, and to tailor treatment plans for each patient.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Healthcare-Analytics.webp",
    },
    {
        title: "Fraud Detection",
        desc: "Fraud Detection – Identify fraudulent transactions or activity based on patterns; includes banking, insurance, and e-commerce.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Fraud-Detection.webp",
    },
    {
        title: "Risk Management",
        desc: "Risk Management – Assist businesses in identifying and mitigating risk relating to financial institutions, insurance agencies, and other business operations.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Risk-Management.webp",
    },
    {
        title: "Social Media and Sentiment Analysis",
        desc: "Social Media and Sentiment Analysis: Utilize social media to monitor and determine how public sentiment is currently trending concerning a specific brand as well as other attributes used in marketing.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Social-Media-and-Sentiment-Analysis.webp",
    },
    {
        title: "Recommendation Systems Services",
        desc: "Recommendation Systems Services – Create customized product recommendations for consumers using the e-commerce industry (Amazon), video streaming service companies such as Netflix, or other online businesses.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Recommendation-Systems-Services.webp",
    },
    {
        title: "Manufacturing and Quality Control",
        desc: "Manufacturing and Quality Control – Monitor production processes, identify defects, and improve the quality of manufactured goods through quality control.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Manufacturing-and-Quality-Control.webp",
    },
    {
        title: "Education and E-Learning",
        desc: "Education and E-Learning – Use performance data from students to personalize the learning experience of each student and improve academic success for students.",
        iconSrc:
            "/images/subject-matter-experts/data-mining/Education-and-E-Learning.webp",
    },
];
const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sarah Thompson",
        degree: "PhD in Computer Science (Data Mining)",
        experience: "12 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/data-mining/Dr.-Sarah-Thompson.webp",
    },
    {
        name: "Dr. Michael Roberts",
        degree: "PhD in Data Science",
        experience: "10 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/computer-science/Dr.-Kevin-Marshall.webp",
    },
    {
        name: "Dr. Jane Matthews",
        degree: "PhD in Artificial Intelligence & Data Mining",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/data-mining/Dr.-Jane-Matthews.webp",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/data-mining/sample-works-11.webp",
    imageAlt: "Data Mining: A Knowledge Discovery Approach Book Cover",
    paperTitle:
        "Entity completion for industrial knowledge graph based on zero-shot learning",
    author: "Yin Cai, Zhijun Fang, Zheyi Cheng.",
    publisher: "Springer Nature",
    journalName: "Data Mining and Knowledge Discovery",
    impactFactor: "6.5",
};

export default function DataMiningSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Data Mining */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Data Mining"
                    description="Data mining is constantly evolving to meet the growing challenges of big data and complex analytics. Key emerging trends in data mining include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Data Mining */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Data Mining"
                    description="Several industries utilize data mining to find hidden patterns, predict future trends, and assist with making decisions. Some of the more prominent applications of data mining are:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/data-mining/Applications-of-Data-Mining.webp"
                    imageAlt="Applications of Data Mining"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Data Mining publications in top-tier journals, conferences, and platforms, maximizing and amplifying their recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert Data Mining Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Data Mining Editors"
                    description="At Pubrica, our staff of professional editors specializing in data mining will edit manuscripts to make them suitable for publication with the highest level of clarity, precision and impact. The editors have earned higher degrees and/or possess domain-specific experience in data mining, machine learning, big data analytics, and computational modelling."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}