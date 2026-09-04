"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    TrendingUp,
    FileText,
    Database,
    AlertTriangle,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    CheckCircle2
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";

export default function DataMiningPage() {
    const disciplines = [
        {
            title: "Descriptive & Exploratory Data Mining",
            iconSrc: "/images/subject-matter-experts/data-mining/Descriptive-Exploratory-Data-Mining.webp",
            description: "Focuses on summarising and analysing dataset contents to discover patterns, trends or relationships. Techniques such as data profiling, clustering and association rule mining are used along with data visualisation techniques to enable an informed decision-making process.",
            icon: Search
        },
        {
            title: "Predictive Data Mining",
            iconSrc: "/images/subject-matter-experts/data-mining/Predictive-Data-Mining.webp",
            description: "The application of classification, regression and time-series analysis as a way of forecasting future outcomes. Predictive data mining has been applied across many different domains including health analytics, finance, marketing, and risk assessment.",
            icon: TrendingUp
        },
        {
            title: "Text Mining and Natural Language Processing (NLP)",
            iconSrc: "/images/subject-matter-experts/data-mining/Text-Mining-and-Natural-Language-Processing-NLP.webp",
            description: "Analyze Unstructured Data (such as Documents, Reports, and social media) Using Methods Including Sentiment Analysis, Topic Modelling, and Information Extraction from a Large Collection or Dataset of Text Files.",
            icon: FileText
        },
        {
            title: "Big Data and Scalable Data Mining",
            iconSrc: "/images/subject-matter-experts/data-mining/Big-Data-and-Scalable-Data-Mining.webp",
            description: "Broadly encompass the use of Distributed Computing Frameworks to control extremely large time series datasets. Both areas of study are primarily concerned with optimizing performance, expanding capability, and analysing data in real time.",
            icon: Database
        },
        {
            title: "Anomaly & Outlier Detection",
            iconSrc: "/images/subject-matter-experts/data-mining/Anomaly-Outlier-Detection.webp",
            description: "Anomalies and outliers are important tools for determining a change in behaviour or unexpected behaviours that have been identified in various industries, including cybersecurity, healthcare monitoring, and financial systems.",
            icon: AlertTriangle
        },
        {
            title: "Data Mining for Decision Support",
            iconSrc: "/images/subject-matter-experts/data-mining/Data-Mining-for-Decision-Support.webp",
            description: "Based strategies for their businesses or research, create automated recommendations about how to operate within their chosen industry or research area, and produce intelligent business solutions and/or intelligent research solutions.",
            icon: BarChart3
        }
    ];

    const services = [
        {
            title: "Research Design & Data Analysis",
            description: "Assist you in developing an effective approach for conducting your study, selecting appropriate methods for use in your study, and analysing large datasets.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
            href: "/services/research-services/medical-writing"
        },
        {
            title: "Manuscript Preparation",
            description: "writing and editing services to help you prepare a manuscript of the highest quality that can be successfully published.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation/manuscript-editing"
        },
        {
            title: "Data Visualization & Reporting",
            description: "Create professional visualizations and graphics that enhance and effectively depict complex findings.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
            href: "/services/data-analytics-machine-learning/interpretation-reporting-and-visualisation"
        },
        {
            title: "Journal Submission & Formatting",
            description: "preparation and submission of your manuscript to the journal and with the formatting of the manuscript based on the specific requirements of that journal.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileText,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Systematic Reviews & Literature Gap Analysis",
            description: "Complete systematic literature reviews and conduct a thorough analysis of research gaps within the field of data mining.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Data Mining"
                description="We empower supports data mining research and applications through rigorous analysis, precise data interpretation, and high-quality publication assistance."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Data Mining research and practice through expert analysis, data interpretation, and publication support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Data Mining is an advanced field of analysis that helps identify patterns, trends, and actionable insights in the complex{" "}
                            <Link href="/services/medical-data-collection" className="text-blue-600 font-medium no-underline hover:no-underline">
                                data collection
                            </Link>{" "}
                            and processed by many diverse industries, as well as their associated decision-making methods based on statistical principles and machine learning methods, using both computer based techniques and manpower.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Structured & unstructured data can be analysed through data mining research to identify hidden links between the various data types, improve existing processes, provide predictive models, and more. Major uses of data mining services include but are not limited to pattern recognition, anomaly detection, analysing customer behaviour, risk assessment, medical analytics, and creating real time decision support systems.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide complete{" "}
                            <Link
                                href="/services/publication-support/"
                                className="text-blue-600 font-medium no-underline hover:no-underline"
                            >
                                Publication support services
                            </Link>{" "}
                            related to Data Mining, enabling researchers industrial professionals to conduct high-quality, effective research and successfully publish through our full range of support from data analysis, interpretation, and manuscript writing.
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/order-now"
                                className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/data-mining/Data-Mining.webp"
                                alt="Data mining analysis visual"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 320px, 380px"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines in Data Mining
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Data mining is the process of integrating sciences and technologies, including substantial parts of statistics, computer science, and machine learning with artificial intelligence. The combined knowledge of these areas results in a thorough understanding of the complexities associated with datasets through which data mining can produce actionable insights:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Data Mining Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica provides a full range of support for your data mining research, including conceptual development, data analysis, and publication in leading research journals. A team of Ph.D.-qualified professionals throughout Pubrica specialize in areas such as: Big Data Analytics; Machine Learning; Statistical Modelling; and Computational Methods to assist researchers and data scientists to generate valid, reliable, and impactful results:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="relative h-[280px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group block bg-white"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-[65%]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Bottom Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-4.5rem)] group-hover:translate-y-0 group-hover:h-full shadow-lg flex flex-col items-center justify-center text-center">

                                    {/* Floating Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32] group-hover:top-4 transition-all duration-300">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2 group-hover:mt-12 transition-all duration-300">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 px-2">
                                        {service.description}
                                    </p>

                                </div>
                            </Link>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}