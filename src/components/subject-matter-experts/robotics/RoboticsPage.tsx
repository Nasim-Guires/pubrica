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

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: BookOpen,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Palette,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch,
            href: "/services/research-services"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Robotics
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Robotics is the intersection between creativity and accuracy as machines develop the ability to reason, act, and shape our world. Whether it is in an industrial setting or at home, robots are helping to redefine the boundaries of human capability and creativity.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Robotics – Bridging Biology and Physics for Breakthrough Scientific Innovation
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The advances in robotics are taking place so fast that people involved in robotic innovation will need to incorporate knowledge from multiple fields, including Engineering, Computer Science, Physics, Artificial Intelligence and Biology to create robots and robotic systems that can sense, learn, and interact with the world. Using a combination of machines and advanced technology, robotics has enabled a variety of innovative approaches to solve problems such as autonomous vehicles, industrial automation, medical robotic applications, and Human-Machine Collaboration. Due to the integration of many different disciplines, robotics has created a foundation for innovation in Healthcare, Manufacturing, Space Exploration and our day-to-day lives.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica has identified that Robotics Research will require precise Technical Accuracy, Multifaceted Interdisciplinary Perspectives, and Effective Scientific Communication. Thus, we provide the best support options for researchers, engineers, and innovators to turn their complex Robotics Concepts into High-Impact Research Publications. Our experienced Editorial Staff and Subject Matter Experts offer a complete suite of services to our clients including Research Planning, Technical Writing, Peer Review Support, and Journal Submission. As a result, every client's robotic research will meet or exceed the highest global academic and industry standards.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#a3c9bd]/30 flex items-center justify-center">
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

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Robotics Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        The focus of our robotics research and publication service is to provide top-quality, technically correct, publishable content for researchers. Our mission is to assist researchers in turning their convoluted research and creative concepts into concise and dynamic manuscripts that meet the rigorous global standards of publishing. By having an in-depth understanding of the topic at hand, we provide an accurate, clear, and improved visibility of the research at every phase of the writing process:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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