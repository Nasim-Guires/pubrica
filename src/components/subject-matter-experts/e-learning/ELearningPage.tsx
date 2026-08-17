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
    Cpu
} from 'lucide-react';

export default function ELearningPage() {
    const disciplines = [
        {
            title: "Curriculum Development & Instructional Design",
            iconSrc: "/images/subject-matter-experts/e-learning/Curriculum-Development-Instructional-Design.webp",
            description: "Providing a structured and outcome-based framework for the development of educational programmes that are developed to support learners and their professional aspirations.",
            icon: Search
        },
        {
            title: "Digital Content Development",
            iconSrc: "/images/subject-matter-experts/e-learning/Digital-Content-Development.webp",
            description: "Providing interactive multimedia digital content such as video, simulation, assessment tools, micro-learning modules.",
            icon: TrendingUp
        },
        {
            title: "LMS (Learning Management System)",
            iconSrc: "/images/subject-matter-experts/e-learning/LMS-Learning-Management-System.webp",
            description: "Developing and managing a Learning Management System to facilitate the seamless delivery of courses, tracking of learner progress, and engagement with learners.",
            icon: FileText
        },
        {
            title: "Corporate & Professional Development Training",
            iconSrc: "/images/subject-matter-experts/e-learning/Corporate-Professional-Development-Training.webp",
            description: "Providing customised eLearning solutions for organisations to develop their workforce, provide workforce compliance training and/or leadership development training.",
            icon: Database
        },
        {
            title: "Academic E-Learning Support",
            iconSrc: "/images/subject-matter-experts/e-learning/Academic-E-Learning-Support.webp",
            description: "Providing support to academic institutions by producing online courses, virtual classroom experiences, and providing training and education through blended delivery of courses and /or virtual classrooms.",
            icon: AlertTriangle
        },
        {
            title: "Assessment & Evaluation Tools",
            iconSrc: "/images/subject-matter-experts/e-learning/Assessment-Evaluation-Tools.webp",
            description: "Creating quizzes, certifications, and educational analytics to Assess and evaluate a learner's progression and success.",
            icon: BarChart3
        },
        {
            title: "Mobile & Adaptable Learning",
            iconSrc: "/images/subject-matter-experts/e-learning/Mobile-Adaptable-Learning.webp",
            description: "Create responsive and flexible learning experiences based on Individual Learning Styles.",
            icon: FileSearch
        },
        {
            title: "Educational Technology Integration",
            iconSrc: "/images/subject-matter-experts/e-learning/Educational-Technology-Integration.webp",
            description: "Implementing AI, analytics, and adaptive learning technologies to enhance learner engagement and performance.",
            icon: Layers
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
            href: "/services/research-services/literature-review-and-gap/"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Peer-Review",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
            href: "/services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Responding to Reviewer",
            description: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
            image: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: FileText,
            href: "/services/publication-support/responding-to-reviewers"
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch,
            href: "/services/research-services"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Search,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        E Learning
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        The term e-learning denotes the modern use of electronic technology to provide students with learning opportunities at any time and place in a flexible and accessible manner. Students can access information through additional resources via the Internet or other electronic technologies, including multimedia tools.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Sustainability Through Expert Research, Innovation, Insight, and E-Learning
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            The field of E-learning is changing rapidly, so you need to understand how to use digital educational technology and create instructional design. As L&D (Learning & Development) has grown a lot since the internet was first introduced, Educational Professionals have had a lot of trouble knowing how to create and implement e-Learning methods, platforms and outcomes.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica provides comprehensive support for Researchers who are Writing in e-learning and Digital Education. We provide the link between Education Innovation and the Publication Process. Your Research may vary from online learning systems to Instructional Design, to Digital Pedagogy, and beyond. We are here to help you through all the steps, from Manuscript Preparation to Data Presentation to <Link href="/services/publication-support/journal-selection" className="text-[#2b6cb0] hover:underline">Journal Selection and Submission</Link>. We will ensure that your Research reaches a Worldwide Academic Audience with Clarity, Impact and Academic Excellence.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-base font-bold text-[#0e3b32] mb-2">
                                Our Expertise In E Learning Includes:
                            </h3>
                            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>LMS Development & Design:</strong> Evaluate and Develop LMS for Digital Education</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Instructional Design:</strong> Develop Digital Content Centered on User Needs & Goals</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Content Development:</strong> Develop Multimedia Content, Video Content, And Digital Learning Modules</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Learning Analytics Tracking:</strong> Learn analyze user-related information to Improve Engagement and Performance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Mobile Learning / Remote Learning Technologies:</strong> Support for Mobile Learning Remote Learning Technologies.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Educational Technology Research:</strong> Emerging Tools Models in Digital Learning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#C4161C] font-bold mr-2">→</span>
                                    <span><strong>Digital Assessment Systems:</strong> Create Digital Quizzes Tests Along with Automated Evaluation Systems.</span>
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
                                src="/images/subject-matter-experts/e-learning/E-Learning.webp"
                                alt="E-learning computer setup visual"
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
                            Our Core Disciplines In E Learning
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Pubrica offers eLearning solutions that support innovative and engaging forms of knowledge transfer as well as facilitate skill development in a variety of industries by utilizing technology and developing and delivering learner-based solutions.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for E Learning Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica empowers educators, researchers, and institutions with expert-driven e-learning research and publication support designed to meet the evolving demands of digital education:
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