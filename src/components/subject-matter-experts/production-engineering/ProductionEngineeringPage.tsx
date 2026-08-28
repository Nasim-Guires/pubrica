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

export default function ProductionEngineeringPage() {
    const disciplines = [
        {
            title: "Manufacturing Methods & Technology",
            iconSrc: "/images/subject-matter-experts/production-engineering/Manufacturing-Methods-Technology.webp",
            description: "This area encompasses selecting, analysing, and optimizing manufacturing methods for converting raw material into finished goods. Selecting processes such as casting, forming, tooling, machining, joining, and additive manufacturing; then developing these processes for stable, high-quality, and consistent production.",
            icon: Settings,
        },
        {
            title: "Production planning and control",
            iconSrc: "/images/subject-matter-experts/production-engineering/Production-Planning-Controls.webp",
            description: "involves planning, scheduling, routing, and controlling production activities for timely delivery of products to customers, optimally using available resources and being cost-effective. It covers inventory management, demand forecasting, capacity planning, and workflow coordination.",
            icon: Clock,
        },
        {
            title: "Process Design and Optimisation",
            iconSrc: "/images/subject-matter-experts/production-engineering/Process-Design-and-Optimisation.webp",
            description: "The Process Design and Optimisation area focuses on designing production processes to be as efficient as possible. These activities include Process Modelling, Layout Planning, Time Study and Continuous Improvement Techniques. Optimisation Methods are used to minimise waste, cycle time, and improve productivity.",
            icon: Sliders,
        },
        {
            title: "Manufacturing systems and automation",
            iconSrc: "/images/subject-matter-experts/production-engineering/Manufacturing-systems-and-automation.webp",
            description: "The goal of automation is to automate tasks using technologies like CNC machine tools, Robotics, Programmable Logic Controller (PLC) System), as well as the use of Flexible Manufacturing System (FMS). The use of automation in the manufacturing processes increases production accuracy repeatability and allows for greater scale of operation.",
            icon: Bot,
        },
        {
            title: "Quality Engineering & Reliability",
            iconSrc: "/images/subject-matter-experts/production-engineering/Quality-Engineering-Reliability.webp",
            description: "Quality Engineering and Reliability is the process of ensuring products conform to both Engineering and Customer requirements by way of Quality Planning, Inspection, and Control. Statistical Quality Control, Six Sigma Methodology, Reliability Testing, and Failure Prevention are all part of Quality Engineering and Reliability.",
            icon: Shield,
        },
        {
            title: "Asset Management and Maintenance",
            iconSrc: "/images/subject-matter-experts/production-engineering/Asset-Management-and-Maintenance.webp",
            description: "There are three aspects to Maintaining & Improving Equipment Performance – Preventive, Predictive and Condition Based Maintenance Manager (CBM). Asset management allows for greater operational safety, decreases or eliminates equipment downtime (i.e., less wasted time), and increases longer equipment lifespan.",
            icon: Wrench,
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis",
            image: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
            href: "/services/editing-and-translation/translation-with-editing"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: BookOpen,
            href: "/services/publication-support"
        },
        {
            title: "Graphical Abstract",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: ImageIcon,
            href: "/services/research-services/literature-review-and-gap"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Production Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Production Engineering is an area of study that creates optimization of manufacturing processes through application of engineering principles and established practices. The principles utilize mechanical, industrial, and systems engineering to create the optimal manufacturing system.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming molecules into real-world solutions through innovation, precision, and advanced Production engineering.
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biomolecular Engineering is a scientific discipline combining the principles of both biomolecular science and production engineering to create a structured procedure by which molecular research can be converted into an efficient and reproducible manufacturing process. The focus is primarily on process modelling, design and optimisation of production systems, quality assurance (QA) in both biomolecular and bioprocess applications, to facilitate the development of academics/research-based learning opportunities at the molecular level and align this understanding with the methods used in the development of production engineering at a macro or industrial level. At Pubrica, we offer production engineering services, Production engineering research support, and comprehensive academic solutions for scholars, scientists, and industry professionals engaged in this multidisciplinary domain. Our services are designed to enhance the quality, accuracy, and impact of research deliverables across all areas of Production engineering.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Production Engineering is a grouping of disciplines (Bioprocessing, Chemical Engineering, etc.) that support the transformation of molecular innovations into scalable, real-world outcomes. Principles such as Process Design, Process Optimization, and Production Quality are critical to successful Producing Molecular Innovations.
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
                                src="/images/subject-matter-experts/production-engineering/Production-Engineering.webp"
                                alt="Production Engineering Research Support"
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
                            Our Core Areas Of Production Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            The goal of Production Engineering is to design, plan, optimise and control all parts of the manufacturing and production systems to produce efficient, high-quality and low-cost results. Production Engineering applies engineering principles combined with management processes to convert resources into finished product through an orderly and scalable manner:
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
                            Our Expertise in Production Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Our organization offers professionals in production engineering assistance in both research and writing. By combining a high level of technical expertise in production engineering with a high level of ability to write scholarly articles, we assist researchers create and publish high-quality research papers that meet or exceed accepted standards of academic and industry practice:
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