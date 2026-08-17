"use client";
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

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: UserCheck
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: ImageIcon
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Computer Science
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for computer science scholars, researchers, and industry professionals, bridging technology and innovative digital solutions.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Computer Science through Expert Guidance
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Computer Science is a continually evolving and multi-faceted discipline concerned with the study of computation, algorithms, data structures, artificial intelligence, and software engineering. Pubrica offers specialists that assist researchers, academics, and professionals in the creation of high-quality research papers, manuscripts, and projects that improve technology, create new innovations, and assist with digital transformation.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            A team of computer scientists, software engineers, data scientists, and research editors at Pubrica provide comprehensive support throughout the research project and ensures that your completed work is in compliance with scientific, technical, and publication guidelines from top journals and institutions worldwide.
                        </p>

                        {/* Bulleted List for Areas of Expertise */}
                        <div className="space-y-2 pt-2">
                            <h3 className="font-bold text-gray-900 text-sm">
                                Areas of Expertise in Computer Science are:
                            </h3>
                            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Data Science & Big Data Analytics:</strong> Use both disciplined and nondisciplined data to extract valuable information using statistical and computational methods.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Cybersecurity & Information Security:</strong> Conduct research on encryption standards, network security protocols, threat detection methods and securing confidential data.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-[#0284c7]">Artificial Intelligence & Machine Learning:</strong> Utilise algorithms and deep learning technology with the purpose of creating intelligent systems through the use of predictive analytics tools.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Software Engineering:</strong> Create and maintain dependable and efficient software applications/systems.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Cloud Computing & Distributed Systems:</strong> Manage large data storage capacities, virtual computing environments and supporting advanced computing environments.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Computer Networks & Communication:</strong> Improve communication systems by enhancing state-of-the-art communication protocols.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                                    <span><strong className="text-gray-900">Human-Computer Interaction (HCI):</strong> Improve the usability of software applications/systems through the design of user interfaces.</span>
                                </li>
                            </ul>
                        </div>

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
                                src="/images/subject-matter-experts/computer-science/Empowering-Research-Excellence-in-Computer-Science-through-Expert-Guidance.webp"
                                alt="Computer Science and programming research visual"
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
                            Core Disciplines In Computer Science
                        </h2>
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
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
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

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Computer Science Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica is committed to advancing scientific knowledge in Computer Science through high-quality editorial support, research guidance, and publication assistance. Our team of experts ensures accuracy, clarity, and adherence to international research standards. We provide services such as:
                    </p>
                </div>

                {/* Cards Grid */}
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

                                {/* Bottom White Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

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