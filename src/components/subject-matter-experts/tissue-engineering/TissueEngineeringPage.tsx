"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React, { useState } from 'react';
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
    ChevronUp,
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
    TrendingUp,
    Heart,
    Scissors,
    Sparkles,
    Baby,
    Stethoscope,
    Radio,
    Watch,
    CheckSquare
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function TissueEngineeringPage() {
    const [openDisciplineItems, setOpenDisciplineItems] = useState<{ [key: number]: boolean }>({});

    const toggleDisciplineItem = (index: number) => {
        setOpenDisciplineItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const disciplines = [
        {
            title: "Cell Biology",
            iconSrc: "/images/subject-matter-experts/tissue-engineering/Cell-Biology.webp",
            description: "Cell behaviour, proliferation and differentiation are keys to building effective engineered tissues, including the use of stem cells, primary cells, and cell-lines to stimulate the regeneration of tissues.",
            icon: Dna,
        },
        {
            title: "Materials Science",
            iconSrc: "/images/subject-matter-experts/tissue-engineering/Materials-Science.webp",
            description: "Biomaterials and scaffolds mimicking the structures of the natural extracellular matrix are essential to support cell proliferation and tissue creation; materials science is responsible for creating those scaffolds that are compatible with the body, biodegradable, and have the potential to support tissue function for the long-term.",
            icon: FlaskConical,
        },
        {
            title: "Bioengineering",
            iconSrc: "/images/subject-matter-experts/tissue-engineering/Bioengineering.webp",
            description: "Integrates the principles of engineering with the creation of functional tissue constructs. Examples of bioengineering advances include the design and optimization of bioreactors; mechanical stimulation systems and the methods used in the integration of engineered tissue.",
            icon: Cpu,
        },
        {
            title: "Genetic Engineering",
            iconSrc: "/images/subject-matter-experts/cell-biology/Genetic-Engineering.webp",
            description: "Genetic engineering utilizes manipulation techniques to enhance cell function, encourage cellular behaviour, and expedite cellular growth. The includes the utilization of gene editing and genetic therapies to enhance tissue engineering results.",
            icon: Microscope,
        },
        {
            title: "Vascular Biology",
            iconSrc: "/images/subject-matter-experts/tissue-engineering/Vascular-Biology.webp",
            description: "While the development of engineered tissues may be successful, the vascularization (blood supply) of the tissues being engineered is essential to providing nutrients and oxygen. Research in Vascular Biology addresses problems related to vascularizing engineered tissues.",
            icon: Heart,
        },
        {
            title: "Regenerative Medicine",
            iconSrc: "/images/subject-matter-experts/cell-biology/Regenerative-Medicine.webp",
            description: (
                <>
                    Regenerative Medicine is a medical field that focuses on repairing or replacing damaged tissues and organs through{" "}
                    <Link
                        href="/subject-matter-experts/tissue-engineering/"
                        className="text-blue-600 no-underline"
                    >
                        Tissue Engineering
                    </Link>
                    . Tissue Engineering emphasizes the clinical application of engineered tissues for therapeutic purposes.
                </>
            ),
            icon: Activity,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: BookOpen,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/agriculture/Editing-Proofreading.webp",
            icon: PenTool,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileSpreadsheet,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/biotechnology/Data-Collection-for-AI-ML.webp",
            icon: Database,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article",
            imageUrl: "/images/subject-matter-experts/nuclear-chemistry/Pain-points-in-Writing-Original-Research-Articles.webp",
            icon: FileText,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Tissue Engineering"
                description="Tissue engineering blends biology and engineering to create or repair tissues. It offers new possibilities for regenerative medicine and organ transplantation."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Tissue Engineering Research Through Expert Editing and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/tissue-engineering/Tissue-Engineering-480x480.webp"
                                        alt="Tissue Engineering Research"
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
                                        For tissue engineering research to have the largest and most positive impact on regenerative medicine, it must be effectively published. By effectively publishing tissue engineering research, the scientific community will be aware of and benefit from innovative discoveries made by researchers within the field of tissue engineering. The provision of Expert Editing and{" "}
                                        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 no-underline">
                                            Publication Support services
                                        </Link>{" "}
                                        gives researchers access to the resources they need to present their findings professionally, and clearly.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Expert Editing and Publication Support services assist researchers with every step of publishing their work, from manuscript preparation through to editorial review. By assisting researchers with{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline">
                                            manuscript preparation
                                        </Link>, language refinement, and adhering to journal guidelines, these services enable researchers to maximize the potential impact of their work. Researchers can also receive guidance regarding their research through the publication support services on the{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer-review process
                                        </Link>{" "}
                                        to achieve higher acceptance rates and enhanced visibility within reputable journals. As such, the Expert Editing and Publication Support services accelerate the translation of the innovations being developed within the field of tissue engineering into practical applications, either in the areas of drug testing or organ regeneration.
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
                            Our Core Disciplines In Tissue Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Tissue Engineering is an interdisciplinary area of research that incorporates multiple disciplines to help create and repair human tissue and organs. The core disciplines which drive tissue engineering are.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Cards Grid with title & description passed directly */}
                    <CommonExpertiseCards
                        title="Our Expertise in Tissue Engineering Research and Publication"
                        description={
                            <>
                                At the forefront of <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600">tissue engineering research</Link>, our expertise lies in advancing innovative solutions that bridge the gap between scientific discovery and real-world application. We specialize in providing comprehensive research support, from conceptualization to publication, ensuring high-impact contributions to the field.
                            </>
                        }
                        cards={expertiseCards}
                    />

                </div>
            </section>

        </main>
    );
}