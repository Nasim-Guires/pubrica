"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    Brain,
    Users,
    HeartHandshake,
    ShieldAlert,
    UserCheck,
    Pill,
    Cpu,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    ChevronDown,
    Palette,
    FileSpreadsheet,
    Image as ImageIcon,
    Dna,
    Microscope,
    FlaskConical,
    FileSearch,
    ShieldCheck,
    CheckCircle,
    Settings,
    Clock,
    Sliders,
    Bot,
    Shield,
    Wrench,
    FileText,
    TrendingUp
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function RoboticsPage() {
    const disciplines = [
        {
            title: "Robotics Engineering",
            iconSrc: "/images/subject-matter-experts/robotics/Robotics-Engineering.webp",
            description: "Robotics engineering is a field that focuses on designing, making and improving robotic systems. This includes everything from the mechanics of how robotic systems work to the mechanical structure, actuator and other hardware components used in building robots that can move accurately and reliably.",
            icon: Bot,
        },
        {
            title: "Artificial Intelligence and Machine Learning",
            iconSrc: "/images/subject-matter-experts/computer-science/Artificial-Intelligence-and-Machine-Learning.webp",
            description: "The field of artificial intelligence (AI) and machine learning (ML) includes developing algorithms that give robots the ability to observe and learn from their environment using sensor data, ask questions while in motion, and respond to changing situations while they are engaged in performing tasks.",
            icon: Brain,
        },
        {
            title: "Control Systems and Automation",
            iconSrc: "/images/subject-matter-experts/robotics/Control-Systems-and-Automation.webp",
            description: "Control systems and automation describe how to develop strategies for providing stability, accuracy, and efficiency to the motion of robots. Control systems and automation encompass everything from simply automating tasks to controlling complex autonomous robots in a variety of situations.",
            icon: Settings,
        },
        {
            title: "Computer Vision and Perception",
            iconSrc: "/images/subject-matter-experts/robotics/Computer-Vision-and-Perception.webp",
            description: 'Computer vision and perception enable robots to "see" their surroundings by interpreting sensor images from cameras. Robots use these visual data inputs to identify objects and navigate through environments, interacting in real-time with the physical world.',
            icon: Search,
        },
        {
            title: "Human-Robot Interaction (HRI)",
            iconSrc: "/images/subject-matter-experts/robotics/Biomedical-and-Healthcare-Robotics.webp",
            description: "HRI (Human-Robot Interaction) is dedicated to developing intuitive and safe methods for humans to work with robots. HRI emphasizes real-world usability and ethical considerations about how robots are used in people’s daily lives.",
            icon: Users,
        },
        {
            title: "Biomedical and Healthcare Robotics",
            iconSrc: "/images/subject-matter-experts/robotics/Biomedical-and-Healthcare-Robotics.webp",
            description: "Biomedical and healthcare robotics encompasses using robotic devices for medical purposes, including surgical systems, rehabilitation devices, prosthetics, and support devices that improve patient care.",
            icon: HeartHandshake,
        }
    ];

    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Palette,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl:
                "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly",
            href: "/services/publication-support/journal-submission",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl:
                "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Robotics"
                description="Robotics is the intersection between creativity and accuracy as machines develop the ability to reason, act, and shape our world. Whether it is in an industrial setting or at home, robots are helping to redefine the boundaries of human capability and creativity."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Robotics – Bridging Biology and Physics for Breakthrough Scientific Innovation
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/robotics/Robotics-1.webp"
                                        alt="Robotics Research and Development"
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
                                        The advances in robotics are taking place so fast that people involved in robotic innovation will need to incorporate knowledge from multiple fields, including Engineering, Computer Science, Physics,{" "}
                                        <Link href="/services/ai-ml-support/" className="text-blue-600 no-underline">
                                            Artificial Intelligence
                                        </Link>{" "}
                                        and Biology to create robots and robotic systems that can sense, learn, and interact with the world. Using a combination of machines and advanced technology, robotics has enabled a variety of innovative approaches to solve problems such as autonomous vehicles, industrial automation, medical robotic applications, and Human-Machine Collaboration. Due to the integration of many different disciplines, robotics has created a foundation for innovation in Healthcare, Manufacturing, Space Exploration and our day-to-day lives.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica has identified that Robotics Research will require precise Technical Accuracy, Multifaceted Interdisciplinary Perspectives, and{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            Effective Scientific Communication
                                        </Link>
                                        . Thus, we provide the best support options for researchers, engineers, and innovators to turn their complex Robotics Concepts into{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            High-Impact Research Publications
                                        </Link>
                                        . Our experienced Editorial Staff and Subject Matter Experts offer a complete suite of services to our clients including Research Planning, Technical Writing,{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            Peer Review Support
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline">
                                            Journal Submission
                                        </Link>
                                        . As a result, every client's robotic research will meet or exceed the highest global academic and industry standards.
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

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Robotics
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Robotics brings together multiple scientific and engineering domains to create intelligent, adaptive systems. Our core disciplines include:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-left max-w-4xl mb-12">
                    <div className="flex items-center justify-start gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] whitespace-nowrap">
                            Our Expertise in Robotics Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] shrink-0" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        The focus of our <Link href="/services/publication-support/journal-submission/" className="text-blue-600">robotics research and publication service</Link> is to provide top-quality, technically correct, publishable content for researchers. Our mission is to assist researchers in turning their convoluted research and creative concepts into concise and dynamic manuscripts that meet the rigorous global standards of publishing. By having an in-depth understanding of the topic at hand, we provide an accurate, clear, and improved visibility of the research at every phase of the writing process:
                    </p>
                </div>

                {/* Cards Grid */}

                <CommonExpertiseCards
                    title=""
                    description=""
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}