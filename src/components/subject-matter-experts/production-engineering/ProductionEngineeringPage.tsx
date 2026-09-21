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

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis",
            href: "/services/research-services",
            imageUrl:
                "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/translation-with-editing",
            imageUrl:
                "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileSpreadsheet,
        },
        {
            title: "Publication Support",
            desc: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            href: "/services/publication-support",
            imageUrl:
                "/images/subject-matter-experts/agriculture/Responding-to-Reviewers.webp",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: ImageIcon,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl:
                "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: ImageIcon,
        },
    ];
    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Production Engineering"
                description="Production Engineering is an area of study that creates optimization of manufacturing processes through application of engineering principles and established practices. The principles utilize mechanical, industrial, and systems engineering to create the optimal manufacturing system."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Transforming molecules into real-world solutions through innovation, precision, and advanced Production engineering.
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Biomolecular Engineering is a scientific discipline combining the principles of both biomolecular science and production engineering to create a structured procedure by which molecular research can be converted into an efficient and reproducible manufacturing process. The focus is primarily on process modelling, design and optimisation of production systems, quality assurance (QA) in both biomolecular and bioprocess applications, to facilitate the development of academics/research-based learning opportunities at the molecular level and align this understanding with the methods used in the development of production engineering at a macro or industrial level. At Pubrica, we offer production engineering services,{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            Production engineering research support
                                        </Link>
                                        , and comprehensive academic solutions for scholars, scientists, and industry professionals engaged in this multidisciplinary domain. Our services are designed to enhance the quality, accuracy, and{" "}
                                        <Link href="/services/research-impact/" className="text-blue-600 no-underline">
                                            impact of research
                                        </Link>{" "}
                                        deliverables across all areas of Production engineering.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Production Engineering is a grouping of disciplines (Bioprocessing, Chemical Engineering, etc.) that support the transformation of molecular innovations into scalable, real-world outcomes. Principles such as Process Design, Process Optimization, and Production Quality are critical to successful Producing Molecular Innovations.
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Centered Section Header */}
                    <div className="text-center max-w-5xl mx-auto mb-10 space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Core Areas Of Production Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            The goal of Production Engineering is to design, plan, optimise and control all parts of the manufacturing and production systems to produce efficient, high-quality and low-cost results. Production Engineering applies engineering principles combined with management processes to convert resources into finished product through an orderly and scalable manner:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Production Engineering Research and Publication"
                    description="Our organization offers professionals in production engineering assistance in both research and writing. By combining a high level of technical expertise in production engineering with a high level of ability to write scholarly articles, we assist researchers create and publish high-quality research papers that meet or exceed accepted standards of academic and industry practice:"
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}