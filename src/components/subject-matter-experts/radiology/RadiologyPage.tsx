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

export default function RadiologyPage() {
    const disciplines = [
        {
            title: "Diagnostic Radiology",
            iconSrc: "/images/subject-matter-experts/radiology/Diagnostic-Radiology.webp",
            description: "It is at the heart of medical imaging, focusing on the interpretation of imaging studies to diagnose disease. Our experts assist in writing and editing research papers, systematic reviews, and case reports covering X-rays, CT scans, MRI, and ultrasound modalities.",
            icon: ImageIcon,
        },
        {
            title: "Interventional Radiology (IR)",
            iconSrc: "/images/subject-matter-experts/radiology/Interventional-Radiology-IR.webp",
            description: "It combines imaging with minimally invasive procedures to diagnose and treat various conditions without major surgery. Pubrica provides expert support in writing and editing clinical research, procedure-based case series, and reviews focusing on novel IR techniques and outcomes.",
            icon: Activity,
        },
        {
            title: "Neuroradiology",
            iconSrc: "/images/subject-matter-experts/radiology/Neuroradiology.webp",
            description: "They focus on imaging the brain, spine, and nervous system. Our radiology writers and editors have extensive experience in neurological imaging research, including MRI, functional MRI, CT angiography, and diffusion imaging.",
            icon: Brain,
        },
        {
            title: "Musculoskeletal Radiology",
            iconSrc: "/images/subject-matter-experts/radiology/Musculoskeletal-Radiology.webp",
            description: "It specializes in imaging bones, joints, and soft tissues to assess trauma, sports injuries, arthritis, and tumours. Our editors provide tailored assistance for manuscripts and reviews involving MRI, ultrasound, and CT techniques used in orthopaedic and sports medicine research.",
            icon: Activity,
        },
        {
            title: "Cardiothoracic Radiology",
            iconSrc: "/images/subject-matter-experts/radiology/Cardiothoracic-Radiology.webp",
            description: "This field focuses on imaging the heart, lungs, and mediastinum, providing critical insights into cardiovascular and pulmonary diseases. We support research on advanced imaging modalities such as cardiac MRI, CT angiography, and dual-energy CT that improve diagnostic precision and patient outcomes.",
            icon: HeartHandshake,
        },
        {
            title: "Breast Imaging",
            iconSrc: "/images/subject-matter-experts/radiology/Breast-Imaging.webp",
            description: "It plays a vital role in the early detection and management of breast cancer. Our services extend to research papers on mammography, breast ultrasound, digital breast tomosynthesis, and MRI. We ensure scientific rigor, clarity, and adherence to international reporting standards such as BI-RADS.",
            icon: ShieldCheck,
        },
        {
            title: "Paediatric Radiology",
            iconSrc: "/images/subject-matter-experts/radiology/Paediatric-Radiology.webp",
            description: "Children’s imaging demands precision, safety, and sensitivity. Our paediatric radiology experts provide editorial and analytical support for studies addressing developmental abnormalities, congenital disorders, and paediatric oncology imaging, with attention to radiation safety and ethical standards.",
            icon: UserCheck,
        },
        {
            title: "Abdominal and Gastrointestinal Radiology",
            iconSrc: "/images/subject-matter-experts/radiology/Abdominal-and-Gastrointestinal-Radiology.webp",
            description: "This discipline focuses on imaging the abdominal organs, including the liver, pancreas, kidneys, and gastrointestinal tract. Our experts provide specialized support for abdominal CT, MRI, ultrasound, and nuclear imaging studies, ensuring scientific precision and compliance with publication standards.",
            icon: Microscope,
        },
        {
            title: "Emergency and Trauma Imaging",
            iconSrc: "/images/subject-matter-experts/radiology/Emergency-and-Trauma-Imaging.webp",
            description: "Emergency radiology plays a critical role in acute care. Our editorial team supports authors presenting imaging research on trauma, acute stroke, haemorrhage, and thoracic emergencies, emphasizing rapid diagnosis, evidence-based interventions, and clinical relevance.",
            icon: ShieldAlert,
        }
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileSearch,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            href: "/services/physician-writing-services/original-research-article",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BookOpen,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSpreadsheet,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Radiology"
                description="From diagnostic imaging to interventional radiology, we provide end-to-end support for research, writing, editing, and publication, helping radiologists and medical researchers transform data into impactful discoveries."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Medical Imaging and Diagnostic Research with Expert Radiology Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/radiology/Radiology.webp"
                                        alt="Radiology Research and Diagnostic Imaging"
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
                                        Radiology is the medical discipline that employs imaging technologies to diagnose and treat diseases within the human body. It lies at the intersection of medicine, technology, and data interpretation, playing an indispensable role in modern healthcare. From detecting subtle abnormalities to guiding complex surgical procedures, radiology enhances clinical decision-making and patient outcomes.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        As medical science evolves,{" "}
                                        <Link href="/academy/journals-templates/radiology/" className="text-blue-600 no-underline">
                                            radiology research support
                                        </Link>{" "}
                                        continues to expand with innovations such as artificial intelligence (AI), molecular imaging, and hybrid modalities like PET-CT and PET-MRI. For researchers and clinicians alike, staying current with the latest developments in medical imaging research is crucial to producing impactful, evidence-based studies.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we offer comprehensive{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            radiology research assistance
                                        </Link>
                                        ,{" "}
                                        <Link href="/services/editing-and-translation/" className="text-blue-600 no-underline">
                                            radiology editing services
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline">
                                            radiology publication help
                                        </Link>{" "}
                                        that empower professionals to communicate their findings effectively. Our team of radiology specialists, PhD editors, and publication experts ensures your work meets the highest academic and journal standards.
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
                            Our Core Disciplines In Radiology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Radiology is a dynamic and rapidly evolving medical field that integrates advanced imaging technologies with clinical expertise to diagnose, treat, and monitor diseases. At Pubrica, we offer specialized research, diagnostic imaging, and <Link href="/services/publication-support/" className="text-blue-600 hover:underline">publication support</Link> across all major disciplines of radiology. Our team of radiologists, imaging scientists, and medical editors ensures accuracy, scientific integrity, and clarity in every project.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Radiology Research and Publication"
                    description="At Pubrica, we offer a full range of radiology research and publication support services, ensuring that your work meets the expectations of high-impact journals and international conferences."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}