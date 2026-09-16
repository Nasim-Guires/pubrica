"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Cpu,
    Brain,
    Code,
    ShieldCheck,
    Database,
    Network,
    Cloud,
    Monitor,
    Search,
    CheckCircle,
    UserCheck,
    ImageIcon,
    BookOpen,
    PenTool,
    FileText,
    ChevronDown,
    ArrowRight,
    Languages
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function ComputerSciencePage() {
    const disciplines = [
        {
            title: "Algorithms and Data Structures",
            iconSrc: "/images/subject-matter-experts/computer-science/Algorithms-and-Data-Structures.webp",
            description: "Without optimised data structures and the efficient use of algorithms, it is impossible to solve many types of computational problems. Research in this field includes examination of complexity, scalability, and methods to optimize the performance of algorithms and data structures.",
            icon: Cpu
        },
        {
            title: "Artificial Intelligence and Machine Learning",
            iconSrc: "/images/subject-matter-experts/computer-science/Artificial-Intelligence-and-Machine-Learning.webp",
            description: "Artificial intelligence (AI) uses data to create systems that can learn and change with the use of algorithms. For example, neural networks, deep learning, and reinforcement learning are transforming the way we operate in industries around the world.",
            icon: Brain
        },
        {
            title: "Software Engineering",
            iconSrc: "/images/subject-matter-experts/computer-science/Software-Engineering.webp",
            description: "Software engineering provides the tools necessary to create reliable, scalable, and maintainable systems. Software engineering covers structured systems development, testing, and lifecycle management.",
            icon: Code
        },
        {
            title: "Cybersecurity",
            iconSrc: "/images/subject-matter-experts/computer-science/Cybersecurity.webp",
            description: "Cybersecurity involves safeguarding systems and applications from attacks on the network, as well as protecting the data stored on those networks. Cybersecurity encompasses many different areas, including cryptography, authentication, and intrusion detection.",
            icon: ShieldCheck
        },
        {
            title: "Database Systems",
            iconSrc: "/images/subject-matter-experts/computer-science/Database-Systems.webp",
            description: "The goal of research in database systems is to develop efficient methods for storing, retrieving and managing large amounts of data (e.g., both relational and non-relational forms).",
            icon: Database
        },
        {
            title: "Computer Networks",
            iconSrc: "/images/subject-matter-experts/computer-science/Computer-Networks.webp",
            description: "The research and study of networking enable communication between numerous devices using various protocols and architectures, as well as the secure transmission of information.",
            icon: Network
        },
        {
            title: "Cloud Computing and Distributed Systems",
            iconSrc: "/images/subject-matter-experts/computer-science/Cloud-Computing-and-Distributed-Systems.webp",
            description: "Cloud computing and distributed systems enable the ability to provide scalable computing resources and distributed processing to effectively manage applications that require large amounts of resources.",
            icon: Cloud
        },
        {
            title: "Human-Computer Interaction",
            iconSrc: "/images/subject-matter-experts/computer-science/Human-Computer-Interaction.webp",
            description: "Research on human-computer interaction (HCI) strives to create interfaces that allow intuitive and friendly ways to interact with computer systems.",
            icon: Monitor
        }
    ];
    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: UserCheck,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: ImageIcon,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Computer Science"
                description="Comprehensive research, publication, and editing support for computer science scholars, researchers, and industry professionals, bridging technology and innovative digital solutions."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Research Excellence in Computer Science through Expert Guidance
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/computer-science/Empowering-Research-Excellence-in-Computer-Science-through-Expert-Guidance.webp"
                                        alt="Computer Science and programming research visual"
                                        fill
                                        priority
                                        className="object-cover"
                                        sizes="(max-width: 768px) 320px, 380px"
                                    />
                                </div>
                            </div>

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Computer Science is a continually evolving and multi-faceted discipline concerned with the study of computation, algorithms, data structures, artificial intelligence, and software engineering. Pubrica offers specialists that assist researchers, academics, and professionals in the creation of high-quality research papers, manuscripts, and projects that improve technology, create new innovations, and assist with digital transformation.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        A team of computer scientists, software engineers, data scientists, and research editors at Pubrica provide comprehensive support throughout the research project and ensures that your completed work is in compliance with scientific, technical, and publication guidelines from top journals and institutions worldwide.
                                    </p>

                                    {/* Bulleted List for Areas of Expertise */}
                                    <div className="space-y-3 pt-2">
                                        <h3 className="font-bold text-slate-900 text-base">
                                            Areas of Expertise in Computer Science are:
                                        </h3>
                                        <ul className="space-y-2.5 text-base text-slate-700">
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Data Science & Big Data Analytics:</strong> Use both disciplined and nondisciplined data to extract valuable information using statistical and computational methods.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Cybersecurity & Information Security:</strong> Conduct research on encryption standards, network security protocols, threat detection methods and securing confidential data.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><Link href="/services/ai-ml-support/" className="text-blue-600 font-bold hover:text-blue-700 no-underline">Artificial Intelligence & Machine Learning:</Link> Utilise algorithms and deep learning technology with the purpose of creating intelligent systems through the use of predictive analytics tools.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Software Engineering:</strong> Create and maintain dependable and efficient software applications/systems.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Cloud Computing & Distributed Systems:</strong> Manage large data storage capacities, virtual computing environments and supporting advanced computing environments.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Computer Networks & Communication:</strong> Improve communication systems by enhancing state-of-the-art communication protocols.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-1" />
                                                <span><strong className="text-slate-900">Human-Computer Interaction (HCI):</strong> Improve the usability of software applications/systems through the design of user interfaces.</span>
                                            </li>
                                        </ul>
                                    </div>

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

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Core Disciplines In Computer Science
                        </h2>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Why Choose Pubrica for Computer Science Research and Publishing?"
                    description="Pubrica is committed to advancing scientific knowledge in Computer Science through high-quality editorial support, research guidance, and publication assistance. Our team of experts ensures accuracy, clarity, and adherence to international research standards. We provide services such as:"
                    cards={expertiseCards}
                />

                {/* Bottom Conclusion Text */}
                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
                        Whether you are a researcher, student, or professional, Pubrica bridges the gap between research findings and practical applications, supporting your journey in Computer Science.
                    </p>
                </div>

            </section>

        </main>
    );
}