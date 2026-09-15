"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Cloud,
    Shield,
    Cpu,
    Database,
    Boxes,
    Server,
    Brain,
    Settings,
    Network,
    Search,
    FileText,
    PenTool,
    FileSearch,
    Send,
    FileSpreadsheet,
    BookMarked,
    Languages,
    ChevronDown,
    ArrowRight
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function CloudComputingPage() {
    const disciplines = [
        {
            title: "Cloud Architecture & Infrastructure",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Cloud-Architecture-Infrastructure.webp",
            description:
                "The architecture and infrastructure of a cloud environment refer to the overall design and optimization of scalable, and fault tolerant cloud architectures deployed across public, private, and hybrid environments.",
            icon: Cloud,
        },
        {
            title: "Cloud security and privacy",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Cloud-security-and-privacy.webp",
            description:
                "refer to the methods used to protect user data when it is being stored and accessed within a cloud environment. These include control of user access to that data, compliance with applicable regulations and protection from cyber-attacks.",
            icon: Shield,
        },
        {
            title: "Distributed computing/ high performance computing",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Distributed-computing_high.webp",
            description:
                "performance computing refers to the ability for developers to create systems that allow multiple computers to work together to process large volumes of data and provide high-performance computing services.",
            icon: Cpu,
        },
        {
            title: "Cloud Security & Data Privacy",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Cloud-Security-Data-Privacy.webp",
            description:
                "Cloud Storage refers to the use of a public cloud to manage, store and retrieve vast amounts of both structured and unstructured information.",
            icon: Database,
        },
        {
            title: "Virtualization/ Containerization",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Virtualization_-Containerization.webp",
            description:
                "refers to the virtualization of servers and the containerization of applications. Virtualization and containerization enable customers to deploy their applications in a scalable and flexible manner.",
            icon: Boxes,
        },
        {
            title: "Edge computing/fog computing",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Edge-computing_fog-computing.webp",
            description:
                "Moved closer to where data is generated (i.e., edge or fog), edge computing helps eliminate latency issues and improves the ability to process data in real-time.",
            icon: Server,
        },
        {
            title: "Cloud-based AI machine learning",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Cloud-based-AI-machine-learning.webp",
            description:
                "Developers will be able to leverage the cloud to build, train and deploy AI/machine learning models that will be able to process large amounts of data and deliver at scale.",
            icon: Brain,
        },
        {
            title: "DevOps cloud automation",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/DevOps-cloud-automation.webp",
            description:
                "Automating the deployment, monitoring, and maintenance of cloud applications and services is made possible by using the capabilities of Continuous Integration/Continuous Delivery (CI/CD) pipelines and Infrastructure-As-Code (IaC) methodologies",
            icon: Settings,
        },
        {
            title: "Cloud Networking Infrastructural Management",
            iconSrc:
                "/images/subject-matter-experts/cloud-computing/Cloud-Networking-Infrastructural-Management.webp",
            description:
                "The infrastructure, application, and user requirements of a system are combined into a single design for creating a robust, highly reliable, and scalable networks for cloud systems",
            icon: Network,
        },
    ];
    const expertiseCards = [
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileSpreadsheet,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Cloud Computing"
                description="Powering innovation through scalable, secure, and intelligent cloud technologies. Transforming the way data, systems, and businesses operate."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming Scientific Ideas into Breakthrough Cloud Computing Research
                            </h2>
                        </div>

                        <div className="flow-root">
                            {/* Right Circular Image */}
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723] flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/cloud-computing/Cloud-Computing.webp"
                                        alt="Cloud Computing Research Concept"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        The Cloud Computing area is a rapidly growing area that will enable businesses to have immediate access to computer services, storage, and advanced digital services; cloud computing enables businesses to perform computations and access services that previously could only occur locally because of the availability of scalable and flexible technology resources. Cloud Computing has been developed to integrate technologies such as computer science, networking, Information Technology, and Data Analytics into an area that allows Cloud Computing to create opportunities for creating, managing, and utilizing an efficient data management system while improving operational efficiency by providing High-Performance Computing capabilities and the integration of Intelligent Systems.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Cloud Computing enables businesses from large corporate enterprises that require IT infrastructure and Big Data Analytics to create <Link href="/services/ai-ml-support/" className="text-blue-600">Artificial Intelligence applications</Link>, Cybersecurity solutions, and Internet of Things (IoT) products and services through cloud-based systems. Cloud Computing provides a foundational structure for the rapid adoption of cloud-based architecture and technology, including Virtualization, Edge Computing, Containerization, and Distributed Systems; these technologies are changing the way that data is processed, stored, and secured within the Global Network of computers.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides researchers, academicians, and industry experts with specialized Cloud Computing-related support services to aid in their success in publishing their research in International Academic Journals.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica's support services include providing guidance and resources throughout the entire process of developing research ideas, writing technical documents, selecting an appropriate journal for publication, and ensuring that all published work meets the highest standards of Clarity, Accuracy, and Excellence in Research. We will assist in converting your innovative Cloud Computing Research into fruits for successful research publication in leading International Journals.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <GetFreeQuoteButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <CoreAreasSection
                        title="Our Core Disciplines In Cloud Computing"
                        description="At Pubrica, we support advanced research and innovation across the key domains of cloud computing, enabling scalable, secure, and high-performance digital solutions:"
                        items={disciplines}
                    />
                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Our Expertise in Cloud Computing Research and Publication"
                    description="At Pubrica, we provide comprehensive support for cloud computing research, helping scholars and professionals transform innovative ideas into high-impact publications. Our expertise spans the full research lifecycle from conceptual development and experimental design to manuscript preparation and journal submission:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}