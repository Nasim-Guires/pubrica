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

export default function BiomonitoringPage() {
    const coreDisciplines = [
        {
            title: "Big Data Architecture & Management",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Architecture-Management.webp",
            subtitle: "Big Data Architecture & Management",
            desc: "Creating and implementing large-scale data architectures using components such as Hadoop, HDFS, mainstream/open-source distributed computing systems for the management of large amounts of both structured and unstructured data.",
            icon: Leaf,
        },
        {
            title: "Data Analytics & Mining",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Analytics-Mining.webp",
            subtitle: "Biochemical Matrices",
            desc: "Utilising advanced techniques for analysis of data to identify patterns, trends, and insights through statistical methods, machine learning techniques and predictive modelling.",
            icon: Users,
        },
        {
            title: "Hadoop Ecosystem Technology",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/471.webp",
            subtitle: "Workplace Exposure",
            desc: "Extensive experience in many of the tools contained in the Hadoop Ecosystem such as Hive, Pig, HBase, Spark, and MapReduce for efficient and effective processing and management of data.",
            icon: Shield,
        },
        {
            title: "Real-time & Streaming Analytics",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Real-time-Streaming-Analytics.webp",
            subtitle: "Bioindicator Species",
            desc: "Utilisation of rapid data stream analytics to create an immediate response to high-velocity data by using real-time frameworks.",
            icon: Activity,
        },
        {
            title: "Data Integration & Warehousing",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Data-Integration-Warehousing.webp",
            subtitle: "Chemical Absorption",
            desc: "Combining multiple sources of data into a single centralised repository for storage, retrieval and analysis purposes.",
            icon: Cpu,
        },
        {
            title: "Big Data Security & Governance",
            iconSrc: "/images/subject-matter-experts/big-data-hadoop/Big-Data-Security-Governance.webp",
            subtitle: "Chemical Absorption",
            desc: "The implementation n of data integrity, privacy and compliance standards are maintained through secure data management and governance frameworks.",
            icon: Cpu,
        },
    ];

    const services = [
        {
            title: "Research Design & Data Analysis",
            subtitle: "Assist you in developing an effective approach for conducting your study, selecting appropriate methods for use in your study, and analysing large datasets.",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Journal Submission & Formatting",
            subtitle: "preparation and submission of your manuscript to the journal and with the formatting of the manuscript based on the specific requirements of that journal.",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool,
        },
        {
            title: "Systematic Reviews & Literature Gap Analysis",
            subtitle: "Complete systematic literature reviews and conduct a thorough analysis of research gaps within the field of data mining.",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Languages,
        },
        {
            title: "Manuscript Preparation",
            subtitle: "writing and editing services to help you prepare a manuscript of the highest quality that can be successfully published.",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: BookOpen,
        },
        {
            title: "Data Visualization & Reporting",
            subtitle: "Create professional visualizations and graphics that enhance and effectively depict complex findings.",
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
            <header className="w-full bg-[#0d3630] text-white py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto border border-gray-500/40 py-8 px-6 bg-[#0a2c27]/40 backdrop-blur-sm rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
                        Biomonitoring
                    </h1>
                    <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for biomonitoring professionals, researchers, and environmental scientists, advancing the assessment of human and ecological exposure for a healthier and sustainable future.
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

                {/* INTRO SECTION */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
                            Empowering biomonitoring research and practice through expert analysis, data interpretation, and publication support
                        </h2>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <p>
                                Biomonitoring is an advanced scientific method used to measure and evaluate the levels of chemicals, toxins, or biological agents within human tissues or biological fluids such as blood, urine, or saliva. It serves as a vital tool in understanding environmental exposure, occupational safety, and public health risks. By directly assessing the internal dose of contaminants, biomonitoring data analysis provides a realistic picture of how external factors affect human health over time. This technique is widely used to monitor the presence of excessive toxins and to conduct clinical trials and public health research, aiming to understand the exposure and metabolic changes of chemicals in the human body. Key applications of biomonitoring services include breath analysers, urine analysis, and lead or arsenic detection.
                            </p>
                            <p>
                                At Pubrica, we offer end-to-end research and publication support in the domain of biomonitoring, helping scientists, clinicians, environmental researchers, and toxicologists produce high-quality, data-driven studies. Our team combines expertise in epidemiology, toxicology studies, analytical chemistry, and public health to support your research objectives, from study design to publication in high-impact journals.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link
                                href="#quote"
                                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/big-data-hadoop/sample-works-11-13.webp"
                                alt="Biomonitoring Laboratory Microscope"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* CORE DISCIPLINES SECTION */}
                <section className="space-y-10">
                    <div className="text-center space-y-3 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630]">
                            Our Core Disciplines In Biomonitoring
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            Biomonitoring integrates multiple scientific disciplines, drawing from biology, toxicology, environmental science, public health, and analytical chemistry. These interconnected fields ensure a comprehensive understanding of how pollutants or toxic agents influence biological systems. Our biomonitoring expertise spans the following core areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={coreDisciplines} />
                </section>

                {/* EXPERTISE IN BIOMONITORING RESEARCH AND PUBLICATION */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Expertise in Big Data & Hadoop Research and Publication
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            We offer full service for research on Big Data and Hadoop, allowing researchers to take their complex datasets and turn them into meaningful, publication quality findings. Our knowledge base covers analytics, distributed computing and processing of massive amounts of data, so we can help researchers produce high quality research that complies with the guidelines to submit to peer-reviewed journals around the world. We provide expert help with all aspects of the research process including analysis, validation of models, technical writing and journal submission to assist Researchers to present their results effectively in the top tier of scientific and industry periodicals.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, idx) => {
                            const ServiceIcon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-72"
                                >
                                    <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-gray-100">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-72px)] group-hover:translate-y-0 flex flex-col h-44 z-10 shadow-lg">
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full border border-gray-200 shadow-md group-hover:bg-[#0d3630] group-hover:text-white transition-colors duration-300">
                                            <ServiceIcon className="w-4 h-4 text-[#0d3630] group-hover:text-white" />
                                        </div>

                                        <div className="pt-3 text-center">
                                            <h3 className="text-xs font-bold text-[#0d3630] leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <div className="mt-3 text-center overflow-hidden flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                            <p className="text-[11px] text-gray-600 leading-relaxed px-1">
                                                {service.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>
        </div>
    );
}