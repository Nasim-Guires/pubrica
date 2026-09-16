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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Peer-Review",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
        },
        {
            title: "Responding to Reviewer",
            desc: "Assistance in addressing reviewer comments to enhance your manuscript's chances of acceptance.",
            href: "/services/publication-support/responding-to-reviewers",
            imageUrl: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: FileText,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: FileSearch,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: FileText,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Search,
        },
    ];;

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="E Learning"
                description="The term e-learning denotes the modern use of electronic technology to provide students with learning opportunities at any time and place in a flexible and accessible manner. Students can access information through additional resources via the Internet or other electronic technologies, including multimedia tools."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Sustainability Through Expert Research, Innovation, Insight, and E-Learning
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        The field of E-learning is changing rapidly, so you need to understand how to use digital educational technology and create instructional design. As L&D (Learning & Development) has grown a lot since the internet was first introduced, Educational Professionals have had a lot of trouble knowing how to create and implement{" "}
                                        <Link href="/subject-matter-experts/e-learning/" className="text-blue-600 no-underline">
                                            e-Learning
                                        </Link>{" "}
                                        methods, platforms and outcomes.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Pubrica provides comprehensive support for Researchers who are Writing in e-learning and Digital Education. We provide the link between Education Innovation and <Link href="/services/publication-support/journal-selection/" className="text-blue-600 no-underline">the Publication Process</Link>. Your Research may vary from online learning systems to Instructional Design, to Digital Pedagogy, and beyond. We are here to help you through all the steps, from Manuscript Preparation to Data Presentation to{" "}
                                        <Link href="/services/publication-support/journal-selection/" className="text-blue-600 no-underline">
                                            Journal Selection and Submission
                                        </Link>. We will ensure that your Research reaches a Worldwide Academic Audience with Clarity, Impact and Academic Excellence.
                                    </p>

                                    <div className="pt-2">
                                        <h3 className="text-base font-bold text-[#0c2e3a] mb-2">
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
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Why Choose Pubrica for E Learning Research and Publishing?"
                    description="Pubrica empowers educators, researchers, and institutions with expert-driven e-learning research and publication support designed to meet the evolving demands of digital education:"
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}