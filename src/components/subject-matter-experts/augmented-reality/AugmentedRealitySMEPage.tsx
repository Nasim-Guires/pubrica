"use client";

import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import Image from "next/image";
import Link from "next/link";
import {
    Smartphone,
    Eye,
    Box,
    Layers,
    Layout,
    Cpu,
    Watch,
    Cloud,
    Globe,
    Search,
    FileCheck,
    Send,
    PenTool,
    Image as ImageIcon,
    FileText,
    PieChart,
    BookOpen,
    HelpCircle,
    ChevronUp,
    ChevronDown,
} from "lucide-react";
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CoreAreasSection from "@/components/common/CoreAreasSection";
import CommonExpertiseCards, { ExpertiseCardItem } from "@/components/common/CommonExpertiseCards";

export default function AugmentedRealitySMEPage() {
    // --- 1. CORE AREAS OF AUGMENTED REALITY (9 CARDS) ---
    const coreAreas = [
        {
            title: "AR Applications Designing and Developing",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/AR-Applications-Designing-and-Developing.webp",
            desc: "Create applications that use AR technology in order to enhance users' experience by providing better engagement, visualizations, and interaction.",
            icon: Smartphone,
        },
        {
            title: "Computer Vision and Object Tracking",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Computer-Vision-and-Object-Tracking.webp",
            desc: "Use different methods to track and recognize images and objects in real-time; so that we can provide users with AR experiences.",
            icon: Eye,
        },
        {
            title: "Building and Visualizing 3D Models",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Building-and-Visualizing-3D-Models.webp",
            desc: "Use different methods to track and recognize images and objects in real-time; so that we can provide users with AR experiences.",
            icon: Box,
        },
        {
            title: "Spatial Computing",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Spatial-Computing.webp",
            desc: "Combine digital content and the real world; allowing users to interact with digital content within their real world.",
            icon: Layers,
        },
        {
            title: "Designing the User Experiences (UX/UI) for AR",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Designing-the-User-Experiences-UX_UI-for-AR.webp",
            desc: "Create user interfaces (UI) and user experiences (UX) that allow users to interact with AR seamlessly.",
            icon: Layout,
        },
        {
            title: "Simulating and Rendering in Real-time",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Simulating-and-Rendering-in-Real-time.webp",
            desc: "Use advanced tools to both simulate environments and to render content in an efficient manner for AR.",
            icon: Cpu,
        },
        {
            title: "Wearable AR Technologies",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Wearable-AR-Technologies.webp",
            desc: "Create AR technologies specifically designed for wearables (i.e. Smart Glasses, Head Mounted Displays).",
            icon: Watch,
        },
        {
            title: "AR Cloud and Networking",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/AR-Cloud-and-Networking.webp",
            desc: "Create a cloud-based infrastructure where AR can be experienced collectively (and/or) continuously.",
            icon: Cloud,
        },
        {
            title: "Environmental Mapping and SLAM",
            iconSrc:
                "/images/subject-matter-experts/augmented-reality/Environmental-Mapping-and-SLAM.webp",
            desc: "We create efficient algorithms for processing and analysing large volumes of data sets.",
            icon: Globe,
        },
    ];

    // --- 2. EXPERTISE IN AR RESEARCH AND PUBLICATION (9 SERVICE CARDS) ---
    const expertiseCards: ExpertiseCardItem[] = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            icon: Search,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Research-Services.png",
            href: "/services/research-services/",
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            icon: FileCheck,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            href: "/services/editing-and-translation/",
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            icon: Send,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            href: "/services/publication-support/",
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            icon: PenTool,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            href: "/services/research-services/scientific-writing/",
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            icon: ImageIcon,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            href: "/services/publication-support/art-work-preparation/",
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            icon: FileText,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            icon: PieChart,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            href: "/services/research-impact/graphical-abstract/",
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            icon: BookOpen,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            href: "/services/research-services/systematic-review/",
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            icon: HelpCircle,
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            href: "/services/research-services/literature-review-and-gap/",
        },
    ];

    return (
        <div className="min-h-screen bg-[#fcfcfc] text-gray-800 font-sans">
            {/* Scrollbar styling for core cards */}
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
            <HeroBanner
                title="Augmented Reality"
                description="Focuses on designing and developing immersive AR applications across industries. Covers user interaction, real-time rendering, and deployment strategies. Supports enhanced engagement through interactive digital experience."
                headingAs="h1"
            />

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-16">

                {/* SECTION 1: HERO INTRO & CIRCLE IMAGE */}
                <section className="max-w-7xl mx-auto px-4 py-4">
                    {/* Header placed above everything */}
                    <div className="space-y-4 mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight max-w-4xl">
                            Transforming Digital Experiences into Real-World Solutions with Precision Augmented Reality (AR).
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-7 space-y-4">
                            <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Because of the growing demand for immersive experiences, interactive visualization, and the real-time integration of digital information into our day-to-day lives, Augmented Reality (AR) has developed rapidly as an area of research over the past few years. To support these advanced and evolving technologies in addition to furthering innovation in AR, Pubrica offers specialised solutions to Augmented Reality researchers by providing services such as 3D modelling, AR application development, and complete academic solutions to AR designers, developers, and specialists. Our entire family of AR solutions are designed to increase the calibre, accuracy, and long-term impact of the final deliverables from research across the entire spectrum of Augmented Reality.
                                </p>
                                <p>
                                    Overall, Augmented Reality research consists of the following core technical subjects: Computer Vision, 3D Modelling, Human-Computer Interaction, and Spatial Computing. Each of these subjects focuses on how to seamlessly integrate digital content with the real world. Engineering principles are applied to image recognition, object tracking, rendering, and how users will interact with the system. Engineering principles include computational modelling, simulation tools, real-time processing methods, and
                                </p>
                                <p>
                                    AR optimisation techniques which serve to allow developers to address complex problems in the area of immersive technology. Additionally, computational AR projects allow researchers to create simulated environments for user interaction, create simulation maps of the environment and monitor system performance using predictive modelling techniques to generate greater levels of insight and innovation related to AR technology.
                                </p>
                            </div>

                            <div className="pt-2">
                                <GetFreeQuoteButton />
                            </div>
                        </div>

                        {/* Right Circular VR/AR Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end pt-4">
                            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0">
                                <Image
                                    src="/images/subject-matter-experts/augmented-reality/Augmented-Reality.webp"
                                    alt="Person experiencing Augmented Reality with Headset"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: OUR CORE AREAS OF AUGMENTED REALITY */}
                <CoreAreasSection
                    title="Our Core Areas Of Augmented Reality"
                    description="We have extensive knowledge in a number of key fields of AR; Innovation for Education, Health Care, Entertainment, and Industrial:"
                    items={coreAreas}
                />

                {/* SECTION 3: OUR EXPERTISE IN AR RESEARCH AND PUBLICATION */}
                <CommonExpertiseCards
                    title="Our Expertise in Augmented Reality Research and Publication"
                    description="At Pubrica, we offer specialized expertise in Augmented Reality research and publication, supporting scientists, researchers, and industry professionals in advancing their work. Our services include:"
                    cards={expertiseCards}
                />

            </main>
        </div>
    );
}