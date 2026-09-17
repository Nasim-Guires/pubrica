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
    TrendingUp,
    Heart,
    Scissors,
    Sparkles,
    Baby,
    Stethoscope
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function SurgeryPage() {
    const disciplines = [
        {
            title: "General Surgery",
            iconSrc: "/images/subject-matter-experts/surgery/General-Surgery.webp",
            description: (
                <>
                    It is the foundation of surgical practice, focusing on the diagnosis, preoperative, operative, and postoperative management of a broad spectrum of conditions. Research in this discipline often spans gastrointestinal, hepatobiliary, endocrine, and trauma surgery. Our services support clinical research editing, manuscript preparation, literature review, data analysis, and{" "}
                    <Link
                        href="/academy/journal-submission/choosing-right-journal-for-manuscript-type-guide/#common-types"
                        className="text-blue-600"
                    >
                        journal submission services
                    </Link>{" "}
                    to ensure rigorous and impactful publications.
                </>
            ),
            icon: Stethoscope,
        },
        {
            title: "Cardiothoracic Surgery",
            iconSrc: "/images/subject-matter-experts/surgery/Cardiothoracic-Surgery.webp",
            description: "These surgery deals with the surgical treatment of diseases affecting the heart, lungs, oesophagus, and thoracic cavity. Precision and technical expertise are critical in this discipline. Pubrica assists authors in presenting complex procedures, case studies, and clinical trials in a clear and scientifically robust manner, enhancing the chances of publication in top-tier journals.",
            icon: Heart,
        },
        {
            title: "Neurosurgery",
            iconSrc: "/images/subject-matter-experts/surgery/Neurosurgery.webp",
            description: (
                <>
                    They focus on the surgical management of neurological disorders affecting the brain, spinal cord, and peripheral nerves. Research in this field requires meticulous data presentation and interpretation. Our experts help structure manuscripts, refine imaging and procedural data, and optimize{" "}
                    <Link
                        href="/subject-matter-experts/"
                        className="text-blue-600"
                    >
                        neurosurgery editing
                    </Link>{" "}
                    to meet the stringent standards of neurosurgical journals.
                </>
            ),
            icon: Brain,
        },
        {
            title: "Orthopaedic Surgery",
            iconSrc: "/images/subject-matter-experts/surgery/Orthopaedic-Surgery.webp",
            description: "It specializes in the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles. From trauma management to reconstructive and arthroscopic procedures, orthopaedic research demands detailed reporting of techniques and outcomes. Pubrica’s editorial team ensures accuracy, clarity, and adherence to journal guidelines, facilitating the successful dissemination of innovative research and orthopaedic manuscript",
            icon: Activity,
        },
        {
            title: "Paediatric Surgery",
            iconSrc: "/images/subject-matter-experts/surgery/Paediatric-Surgery.webp",
            description: (
                <>
                    Paediatric Surgery addresses surgical care in neonates, infants, and children, often involving delicate and highly specialized procedures. Manuscripts in this discipline require a combination of clinical precision and compassionate care presentation. Our services include editing, formatting, and submission support tailored to{" "}
                    <Link
                        href="/insights/sample-work/management-of-neurogenic-shock-outside-of-the-hospital/"
                        className="text-blue-600"
                    >
                        paediatric surgery editing
                    </Link>
                    .
                </>
            ),
            icon: Baby,
        },
        {
            title: "Plastic and Reconstructive Surgery",
            iconSrc: "/images/subject-matter-experts/surgery/Plastic-and-Reconstructive-Surgery.webp",
            description: "It encompasses aesthetic, reconstructive, and microsurgical procedures. Research often emphasizes technique innovation, outcomes analysis, and case series reporting. Pubrica assists in refining technical descriptions, enhancing visual presentation, and ensuring manuscripts meet the publication standards of high-impact surgical journals.",
            icon: Sparkles,
        },
    ];

    const expertiseCards = [
        {
            title: "Editorial Comment Addressal",
            desc: "Expert responses to enhance your manuscript based on reviewer comments.",
            href: "/services/publication-support/responding-to-reviewers",
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
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Search,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Layers,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Send,
        },
        {
            title: "Original Research Article",
            desc: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
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
    ];;

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Surgery"
                description="Comprehensive research, publication, and editing support for surgery scholars, clinicians, and researchers, advancing innovations in surgical science, clinical practice, and patient care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Surgical Science Through Expert Editing and Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/surgery/Advancing-Surgical-Science.webp"
                                        alt="Surgical Science and Clinical Research"
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
                                        Surgery is a rapidly evolving medical field that integrates advanced clinical practice, innovative technologies, and evidence-based research to improve patient outcomes. From general surgery to specialized disciplines such as neurosurgery, orthopaedics, cardiovascular surgery, and minimally invasive techniques, the demand for high-quality, well-documented research is greater than ever. However, publishing in high-impact surgical journals requires not only scientific rigor but also impeccable presentation, formatting, and adherence to journal-specific guidelines.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we specialize in providing{" "}
                                        <Link href="/services/editing-and-translation/manuscript-editing/" className="text-blue-600 no-underline">
                                            surgery manuscript editing
                                        </Link>
                                        ,{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            surgical research support
                                        </Link>
                                        , and{" "}
                                        <Link href="/services/publication-support/journal-submission/complete-guide-to-writing-cover-letter-for-medical-journals/" className="text-blue-600 no-underline">
                                            journal submission services
                                        </Link>{" "}
                                        tailored for surgeons, clinical researchers, and academicians. Our goal is to help your research make an impact by ensuring your manuscript meets the highest standards of clarity, accuracy, and professionalism.
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Surgery
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We offer expert editorial and publication support across a wide spectrum of surgical disciplines. Whether your research focuses on innovative surgical techniques, clinical trials, or translational surgery, our specialists ensure precision, accuracy, and scientific impact in every manuscript.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Surgery Research and Publication"
                    description="We specialize in end-to-end support for surgical researchers, spanning every phase of research development and publication. Our expert team comprises surgeons, clinical researchers, biostatisticians, and publication specialists who understand the nuances of surgical research and medical writing."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}