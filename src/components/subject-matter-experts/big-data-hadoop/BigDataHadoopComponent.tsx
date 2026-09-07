"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Leaf,
    Users,
    Shield,
    Activity,
    Cpu,
    FileText,
    PenTool,
    Languages,
    BookOpen,
    CheckCircle,
    Compass,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection, { SmeCoreAreaItem } from "@/components/common/CoreAreasSection";
import { Database, BarChart3, Layers, Zap, Server, ShieldCheck } from "lucide-react";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function BiomonitoringPage() {
    const coreDisciplines: SmeCoreAreaItem[] = [
        {
            title: "Big Data Architecture & Management",
            highlight: "Big Data",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Architecture-Management.webp",
            desc: "Creating and implementing large-scale data architectures using components such as Hadoop, HDFS, mainstream/open-source distributed computing systems for the management of large amounts of both structured and unstructured data.",
            icon: Database,
        },
        {
            title: "Data Analytics & Mining",
            highlight: "Data Analytics",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Analytics-Mining.webp",
            desc: "Utilising advanced techniques for analysis of data to identify patterns, trends, and insights through statistical methods, machine learning techniques and predictive modelling.",
            icon: BarChart3,
        },
        {
            title: "Hadoop Ecosystem Technology",
            highlight: "Hadoop Ecosystem",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/471.webp",
            desc: "Extensive experience in many of the tools contained in the Hadoop Ecosystem such as Hive, Pig, HBase, Spark, and MapReduce for efficient and effective processing and management of data.",
            icon: Layers,
        },
        {
            title: "Real-time & Streaming Analytics",
            highlight: "Real-time",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Real-time-Streaming-Analytics.webp",
            desc: "Utilisation of rapid data stream analytics to create an immediate response to high-velocity data by using real-time frameworks.",
            icon: Zap,
        },
        {
            title: "Data Integration & Warehousing",
            highlight: "Data Integration",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Integration-Warehousing.webp",
            desc: "Combining multiple sources of data into a single centralised repository for storage, retrieval and analysis purposes.",
            icon: Server,
        },
        {
            title: "Big Data Security & Governance",
            highlight: "Big Data Security",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Security-Governance.webp",
            desc: "The implementation of data integrity, privacy and compliance standards are maintained through secure data management and governance frameworks.",
            icon: ShieldCheck,
        },
    ];

    const bigDataHadoopCards: ExpertiseCardItem[] = [
        {
            title: "Research Design & Data Analysis",
            desc: "Assist you in developing an effective approach for conducting your study, selecting appropriate methods for use in your study, and analysing large datasets.",
            href: "/services/research-services/medical-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Journal Submission & Formatting",
            desc: "preparation and submission of your manuscript to the journal and with the formatting of the manuscript based on the specific requirements of that journal.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool,
        },
        {
            title: "Systematic Reviews & Literature Gap Analysis",
            desc: "Complete systematic literature reviews and conduct a thorough analysis of research gaps within the field of data mining.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Languages,
        },
        {
            title: "Manuscript Preparation",
            desc: "writing and editing services to help you prepare a manuscript of the highest quality that can be successfully published.",
            href: "/services/editing-and-translation/manuscript-editing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: BookOpen,
        },
        {
            title: "Data Visualization & Reporting",
            desc: "Create professional visualizations and graphics that enhance and effectively depict complex findings.",
            href: "/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: CheckCircle,
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
            <style>{`
        .card-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .card-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .card-scrollbar::-webkit-scrollbar-thumb {
          background: #0d3630;
          border-radius: 4px;
        }
      `}</style>

            {/* HEADER HERO BANNER */}
            <HeroBanner
                title="Big Data & Hadoop"
                description="Big Data and Hadoop have revolutionized the way organizations store, process, and analyze massive volumes of data that traditional systems can no longer handle."
                headingAs="h1"
            />

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">

                {/* INTRO SECTION */}
                <section className="max-w-7xl mx-auto px-4 py-4">
                    <div className="space-y-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight max-w-4xl">
                            Empowering Big Data &amp; Hadoop research and practice through expert analysis, data interpretation, and publication support
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Hadoop and Big Data technologies will continue to represent the future of the computing industry. Both technologies are required to convert data sets that are too large and complex into actionable information that can drive innovation within industries. In fact, using the power of distributed computing frameworks, advanced analytics, and scalable storage architectures, organizations can efficiently manage and analyse huge amounts of structured and unstructured data using Big Data technologies. The Hadoop Ecosystem allows organizations to implement high-performance data processing, real-time analytics, and data-driven decision-making across all sectors including Healthcare, Finance, Retail, and <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600">Scientific Research.</Link>
                                </p>
                                <p>
                                    At Pubrica, we provide complete <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600">publication support services</Link> to assist with Big Data and Hadoop research projects. Our experienced team of writers will work closely with researchers and industry professionals to ensure they can efficiently analyse the data and draw conclusions that can be published with academic integrity (i.e. technical clarity) and meet the laws and regulations governing the publishing industry (i.e. International Standards for Research and Publishing).
                                </p>
                            </div>

                            <div className="pt-4">
                                <GetFreeQuoteButton />
                            </div>
                        </div>

                        {/* Right Circular Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                                <Image
                                    src="/images/subject-matter-experts/big-data-hadoop/Big-Data-Hadoop--480x480.webp"
                                    alt="Big Data and Hadoop Technology Circuit"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CORE DISCIPLINES SECTION */}
                <CoreAreasSection
                    title="Our Core Disciplines in Big Data & Hadoop"
                    description="We provide expertise in all areas of Big Data Technologies & Analytics, helping organizations derive insights from large and complicated data sets in many different industries:"
                    items={coreDisciplines}
                />

                {/* EXPERTISE IN BIG DATA & HADOOP RESEARCH AND PUBLICATION */}
                <section className="max-w-7xl mx-auto px-4 py-4 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Expertise in Big Data & Hadoop Research and Publication
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            We offer full service for research on Big Data and Hadoop, allowing researchers to take their complex datasets and turn them into meaningful, publication quality findings. Our knowledge base covers analytics, distributed computing and processing of massive amounts of data, so we can help researchers produce high quality research that complies with the guidelines to submit to{" "}
                            <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                peer-reviewed journals
                            </Link>{" "}
                            around the world. We provide expert help with all aspects of the research process including analysis, validation of models, technical writing and{" "}
                            <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline">
                                journal submission
                            </Link>{" "}
                            to assist Researchers to present their results effectively in the top tier of scientific and industry periodicals.
                        </p>
                    </div>

                    {/* Common Expertise Cards Component */}
                    <CommonExpertiseCards
                        title=""
                        description=""
                        cards={bigDataHadoopCards}
                    />
                </section>

            </main>
        </div>
    );
}