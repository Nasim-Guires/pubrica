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
            description: "Regenerative Medicine is a medical field that focuses on repairing or replacing damaged tissues and organs through Tissue Engineering. Tissue Engineering emphasizes the clinical application of engineered tissues for therapeutic purposes.",
            icon: Activity,
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/agriculture/Journal-Formatting.webp",
            icon: BookOpen,
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
            href: "/services/editing-and-translation"
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
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/biotechnology/Data-Collection-for-AI-ML.webp",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/nuclear-chemistry/Pain-points-in-Writing-Original-Research-Articles.webp",
            icon: FileText,
            href: "/services/physician-writing-services/original-research-article"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: Search,
            href: "/services/publication-support/peer-review-pre-submission"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Tissue Engineering
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Tissue engineering blends biology and engineering to create or repair tissues. It offers new possibilities for regenerative medicine and organ transplantation.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Tissue Engineering Research Through Expert Editing and Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            For tissue engineering research to have the largest and most positive impact on regenerative medicine, it must be effectively published. By effectively publishing tissue engineering research, the scientific community will be aware of and benefit from innovative discoveries made by researchers within the field of tissue engineering. The provision of Expert Editing and Publication Support services gives researchers access to the resources they need to present their findings professionally, and clearly.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Expert Editing and Publication Support services assist researchers with every step of publishing their work, from manuscript preparation through to editorial review. By assisting researchers with manuscript preparation, language refinement, and adhering to journal guidelines, these services enable researchers to maximize the potential of their work. Researchers can also receive guidance regarding their research through the publication support services on the peer-review process to achieve higher acceptance rates and enhanced visibility within reputable journals. As such, the Expert Editing and Publication Support services accelerate the translation of the innovations being developed within the field of tissue engineering into practical applications, either in the areas of drug testing or organ regeneration.
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
                                src="/images/subject-matter-experts/tissue-engineering/Tissue-Engineering-480x480.webp"
                                alt="Tissue Engineering Research"
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
                            Our Core Disciplines In Tissue Engineering
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Tissue Engineering is an interdisciplinary area of research that incorporates multiple disciplines to help create and repair human tissue and organs. The core disciplines which drive tissue engineering are.
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
                            Our Expertise in Tissue Engineering Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At the forefront of tissue engineering research, our expertise lies in advancing innovative solutions that bridge the gap between scientific discovery and real-world application. We specialize in providing comprehensive research support, from conceptualization to publication, ensuring high-impact contributions to the field.
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