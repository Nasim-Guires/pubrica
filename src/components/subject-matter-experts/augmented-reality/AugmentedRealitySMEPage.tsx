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

export default function AugmentedRealitySMEPage() {
    // --- 1. CORE AREAS OF AUGMENTED REALITY (9 CARDS) ---
    const coreAreas = [
        {
            title: "AR Applications Designing and Developing",
            iconSrc: "/images/subject-matter-experts/augmented-reality/AR-Applications-Designing-and-Developing.webp",
            desc: "Create applications that use AR technology in order to enhance users' experience by providing interactive elements.",
            icon: Smartphone,
        },
        {
            title: "Computer Vision and Object Tracking",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Computer-Vision-and-Object-Tracking.webp",
            desc: "Use different methods to track and recognize images and objects in real-time so that we can provide accurate placements.",
            icon: Eye,
        },
        {
            title: "Building and Visualizing 3D Models",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Building-and-Visualizing-3D-Models.webp",
            desc: "Build high-quality 3D assets and environments that can be used within immersive AR experiences.",
            icon: Box,
        },
        {
            title: "Spatial Computing",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Spatial-Computing.webp",
            desc: "Combine digital content and the real world, allowing users to interact with digital content within their real world.",
            icon: Layers,
        },
        {
            title: "Designing the User Experiences (UX/UI) for AR",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Designing-the-User-Experiences-UX_UI-for-AR.webp",
            desc: "Create user interfaces (UI) and user experiences (UX) that allow users to interact with AR fluidly.",
            icon: Layout,
        },
        {
            title: "Simulating and Rendering in Real-time",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Simulating-and-Rendering-in-Real-time.webp",
            desc: "Use advanced tools to both simulate environments and to render content in an efficient manner.",
            icon: Cpu,
        },
        {
            title: "Wearable AR Technologies",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Wearable-AR-Technologies.webp",
            desc: "Create AR technologies specifically designed for wearables (i.e. Smart Glasses, Head Mounted Displays).",
            icon: Watch,
        },
        {
            title: "AR Cloud and Networking",
            iconSrc: "/images/subject-matter-experts/augmented-reality/AR-Cloud-and-Networking.webp",
            desc: "Create a cloud-based infrastructure where AR can be experienced collectively (and/or) continuously.",
            icon: Cloud,
        },
        {
            title: "Environmental Mapping and SLAM",
            iconSrc: "/images/subject-matter-experts/augmented-reality/Environmental-Mapping-and-SLAM.webp",
            desc: "We create efficient algorithms for processing and analysing large volumes of data sets.",
            icon: Globe,
        },
    ];

    // --- 2. EXPERTISE IN AR RESEARCH AND PUBLICATION (9 SERVICE CARDS) ---
    const services = [
        {
            title: "Research Services",
            subtitle: "Expert guidance on project planning, execution, and data analysis.",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            subtitle: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileCheck,
        },
        {
            title: "Publication Support",
            subtitle: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
        },
        {
            title: "Scientific Writing",
            subtitle: "Crafting clear, precise, and publication-ready research manuscripts.",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Artwork Editing",
            subtitle: "Professional visuals for your figures, tables, and graphical abstracts.",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: ImageIcon,
        },
        {
            title: "Journal Formatting",
            subtitle: "Tailored manuscript formatting to meet specific journal guidelines.",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
        },
        {
            title: "Graphical Abstract",
            subtitle: "Engaging summaries of your research in a single, informative graphic.",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PieChart,
        },
        {
            title: "Systematic Reviews",
            subtitle: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Literature Review and Gap Analysis",
            subtitle: "Identifying research gaps and providing comprehensive literature reviews.",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: HelpCircle,
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
            <header className="w-full bg-[#0d3630] text-white py-10 px-4 text-center">
                <div className="max-w-4xl mx-auto border border-gray-500/40 py-8 px-6 bg-[#0a2c27]/40 backdrop-blur-sm rounded-sm">
                    <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-3">
                        Augmented Reality
                    </h1>
                    <p className="text-xs md:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Focuses on designing and developing immersive AR applications across industries. Covers user interaction, real-time rendering, and deployment strategies. Supports enhanced engagement through interactive digital experience.
                    </p>
                </div>
            </header>

            {/* MAIN CONTENT CONTAINER */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

                {/* SECTION 1: HERO INTRO & CIRCLE IMAGE */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d3630] leading-tight">
                            Transforming Digital Experiences into Real-World Solutions with Precision Augmented Reality (AR).
                        </h2>

                        <div className="space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
                            <p>
                                Because of the growing demand for immersive experiences, interactive visualization, and the real-time integration of digital information into our day-to-day lives, Augmented Reality (AR) has developed rapidly as an area of research over the past few years. To support these advanced and evolving technologies in addition to furthering innovation in AR, Pubrica offers specialised solutions to Augmented Reality researchers by providing services such as 3D modelling, AR application development, and complete academic solutions to AR designers, developers, and specialists. Our entire family of AR solutions are designed to increase the calibre, accuracy, and long-term impact of the final deliverables from research across the entire spectrum of Augmented Reality.
                            </p>
                            <p>
                                Overall, Augmented Reality research consists of the following core technical subjects: Computer Vision, 3D Modelling, Human-Computer Interaction, and Spatial Computing. Each of these subjects focuses on how to seamlessly integrate digital content with the real world. Engineering principles are applied to image recognition, object tracking, rendering, and how users will interact with the system. Engineering principles include computational modelling, simulation tools, real-time processing methods, and AR optimisation techniques which serve to allow developers to address complex problems in the area of immersive technology.
                            </p>
                            <p>
                                Additionally, computational AR projects allow researchers to create simulated environments for user interaction, create simulation maps of the environment and monitor system performance using predictive modelling techniques to generate greater levels of insight and innovation related to AR technology.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="#quote"
                                className="inline-block bg-[#b81c1c] hover:bg-[#a01818] text-white text-xs font-semibold px-6 py-2.5 rounded-sm shadow-sm transition-colors duration-150"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </div>

                    {/* Right Circular VR/AR Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="/images/subject-matter-experts/augmented-reality/Augmented-Reality.webp"
                                alt="Person experiencing Augmented Reality with Headset"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION 2: OUR CORE AREAS OF AUGMENTED REALITY */}
                <section className="space-y-8">
                    <div className="text-center space-y-2 max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#0d3630]">
                            Our Core Areas Of Augmented Reality
                        </h2>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            We have extensive knowledge in a number of key fields of AR; Innovation for Education, Health Care, Entertainment, and Industrial:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={coreAreas} />
                </section>

                {/* SECTION 3: OUR EXPERTISE IN AR RESEARCH AND PUBLICATION */}
                <section className="space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-[#0d3630] flex items-center gap-2">
                            <span>Our Expertise in Augmented Reality Research and Publication</span>
                            <span className="h-0.5 w-24 bg-gray-400 inline-block"></span>
                        </h2>
                        <p className="text-xs md:text-sm text-gray-600">
                            At Pubrica, we offer specialized expertise in Augmented Reality research and publication, supporting scientists, researchers, and industry professionals in advancing their work. Our services include:
                        </p>
                    </div>

                    {/* GRID OF SERVICE CARDS (With Hover Slide Reveal Matching Reference Image) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => {
                            const ServiceIcon = service.icon;

                            return (
                                <div
                                    key={idx}
                                    className="group relative bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-72"
                                >
                                    {/* Image Container taking up full top height by default */}
                                    <div className="absolute inset-0 h-full w-full z-0 overflow-hidden bg-gray-100">
                                        <Image
                                            src={service.imageUrl}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Dark overlay that appears/deepens on hover for contrast if needed */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                                    </div>

                                    {/* Static White Bottom Banner / Floating Card Portion */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-72px)] group-hover:translate-y-0 flex flex-col h-44 z-10 shadow-lg">

                                        {/* Centered Circular Icon overlapping top border of the banner */}
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white p-2.5 rounded-full border border-gray-200 shadow-md">
                                            <ServiceIcon className="w-4 h-4 text-[#0d3630]" />
                                        </div>

                                        {/* Title always visible at top of card */}
                                        <div className="pt-3 text-center">
                                            <h3 className="text-xs font-bold text-[#0d3630] leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Subtitle description revealed upon cursor hover */}
                                        <div className="mt-3 text-center overflow-hidden flex-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                            <p className="text-[11px] text-gray-600 leading-relaxed px-1">
                                                {service.subtitle}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

            </main>
        </div>
    );
}