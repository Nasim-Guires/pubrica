"use client";
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

export default function CloudComputingPage() {
    const disciplines = [
        {
            title: "Cloud Architecture & Infrastructure",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Cloud-Architecture-Infrastructure.webp",
            description: "The architecture and infrastructure of a cloud environment refer to the overall design and optimization of scalable, and fault tolerant cloud architectures deployed across public, private, and hybrid environments.",
            icon: Cloud
        },
        {
            title: "Cloud security and privacy",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Cloud-security-and-privacy.webp",
            description: "refer to the methods used to protect user data when it is being stored and accessed within a cloud environment. These include control of user access to that data, compliance with applicable regulations and protection from cyber-attacks.",
            icon: Shield
        },
        {
            title: "Distributed computing/ high performance computing",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Distributed-computing_high.webp",
            description: "performance computing refers to the ability for developers to create systems that allow multiple computers to work together to process large volumes of data and provide high-performance computing services.",
            icon: Cpu
        },
        {
            title: "Cloud Security & Data Privacy",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Cloud-Security-Data-Privacy.webp",
            description: "Cloud Storage refers to the use of a public cloud to manage, store and retrieve vast amounts of both structured and unstructured information.",
            icon: Database
        },
        {
            title: "Virtualization/ Containerization",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Virtualization_-Containerization.webp",
            description: "refers to the virtualization of servers and the containerization of applications. Virtualization and containerization enable customers to deploy their applications in a scalable and flexible manner.",
            icon: Boxes
        },
        {
            title: "Edge computing/fog computing",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Edge-computing_fog-computing.webp",
            description: "Moved closer to where data is generated (i.e., edge or fog), edge computing helps eliminate latency issues and improves the ability to process data in real-time.",
            icon: Server
        },
        {
            title: "Cloud-based AI machine learning",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Cloud-based-AI-machine-learning.webp",
            description: "Developers will be able to leverage the cloud to build, train and deploy AI/machine learning models that will be able to process large amounts of data and deliver at scale.",
            icon: Brain
        },
        {
            title: "DevOps cloud automation",
            iconSrc: "/images/subject-matter-experts/cloud-computing/DevOps-cloud-automation.webp",
            description: "Automating the deployment, monitoring, and maintenance of cloud applications and services is made possible by using the capabilities of Continuous Integration/Continuous Delivery (CI/CD) pipelines and Infrastructure-As-Code (IaC) methodologies",
            icon: Settings
        },
        {
            title: "Cloud Networking Infrastructural Management",
            iconSrc: "/images/subject-matter-experts/cloud-computing/Cloud-Networking-Infrastructural-Management.webp",
            description: "The infrastructure, application, and user requirements of a system are combined into a single design for creating a robust, highly reliable, and scalable networks for cloud systems",
            icon: Network
        }
    ];

    const services = [
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages
        },
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileSpreadsheet
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSearch
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cloud Computing
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Powering innovation through scalable, secure, and intelligent cloud technologies. Transforming the way data, systems, and businesses operate.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Scientific Ideas into Breakthrough Cloud Computing Research
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The Cloud Computing area is a rapidly growing area that will enable businesses to have immediate access to computer services, storage, and advanced digital services; cloud computing enables businesses to perform computations and access services that previously could only occur locally because of the availability of scalable and flexible technology resources. Cloud Computing has been developed to integrate technologies such as computer science, networking, Information Technology, and Data Analytics into an area that allows Cloud Computing to create opportunities for creating, managing, and utilizing an efficient data management system while improving operational efficiency by providing High-Performance Computing capabilities and the integration of Intelligent Systems.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cloud Computing enables businesses from large corporate enterprises that require IT infrastructure and Big Data Analytics to create Artificial Intelligence applications, Cybersecurity solutions, and Internet of Things (IoT) products and services through cloud-based systems. Cloud Computing provides a foundational structure for the rapid adoption of cloud-based architecture and technology, including Virtualization, Edge Computing, Containerization, and Distributed Systems; these technologies are changing the way that data is processed, stored, and secured within the Global Network of computers.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides researchers, academicians, and industry experts with specialized Cloud Computing-related support services to aid in their success in publishing their research in International Academic Journals.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica's support services include providing guidance and resources throughout the entire process of developing research ideas, writing technical documents, selecting an appropriate journal for publication, and ensuring that all published work meets the highest standards of Clarity, Accuracy, and Excellence in Research. We will assist in converting your innovative Cloud Computing Research into fruits for successful research publication in leading International Journals.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723]">
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

                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Cloud Computing
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we support advanced research and innovation across the key domains of cloud computing, enabling scalable, secure, and high-performance digital solutions:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {disciplines.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-base font-bold text-[#9E1B1E] group-hover:text-[#7d1417] transition-colors pr-2">
                                                {item.title}
                                            </h3>
                                            <div className="p-2 bg-gray-50 rounded-lg shrink-0 text-[#0e3b32]">
                                                {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
                                            ) : (
                                                <IconComponent className="w-6 h-6" />
                                            )}
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (4 Cards per Row) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Cloud computing Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we provide comprehensive support for cloud computing research, helping scholars and professionals transform innovative ideas into high-impact publications. Our expertise spans the full research lifecycle from conceptual development and experimental design to manuscript preparation and journal submission:
                    </p>
                </div>

                {/* 4 Cards Per Row Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={index}
                                className="relative h-[260px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card (Slides up on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description (Appears on Hover) */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}