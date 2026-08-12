"use client";
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

export default function SurgeryPage() {
    const disciplines = [
        {
            title: "General Surgery",
            description: "It is the foundation of surgical practice, focusing on the diagnosis, preoperative, operative, and postoperative management of a broad spectrum of conditions. Research in this discipline often spans gastrointestinal, hepatobiliary, endocrine, and trauma surgery. Our services support clinical research editing, manuscript preparation, literature review, data analysis, and journal submission services to ensure rigorous and impactful publications.",
            icon: Stethoscope,
        },
        {
            title: "Cardiothoracic Surgery",
            description: "These surgery deals with the surgical treatment of diseases affecting the heart, lungs, oesophagus, and thoracic cavity. Precision and technical expertise are critical in this discipline. Pubrica assists authors in presenting complex procedures, case studies, and clinical trials in a clear and scientifically robust manner, enhancing the chances of publication in top-tier journals.",
            icon: Heart,
        },
        {
            title: "Neurosurgery",
            description: "They focus on the surgical management of neurological disorders affecting the brain, spinal cord, and peripheral nerves. Research in this field requires meticulous data presentation and interpretation. Our experts help structure manuscripts, refine imaging and procedural data, and optimize neurosurgery editing to meet the stringent standards of neurosurgical journals.",
            icon: Brain,
        },
        {
            title: "Orthopaedic Surgery",
            description: "It specializes in the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles. From trauma management to reconstructive and arthroscopic procedures, orthopaedic research demands detailed reporting of techniques and outcomes. Pubrica’s editorial team ensures accuracy, clarity, and adherence to journal guidelines, facilitating the successful dissemination of innovative research and orthopaedic manuscript",
            icon: Activity,
        },
        {
            title: "Paediatric Surgery",
            description: "Paediatric Surgery addresses surgical care in neonates, infants, and children, often involving delicate and highly specialized procedures. Manuscripts in this discipline require a combination of clinical precision and compassionate care presentation. Our services include editing, formatting, and submission support tailored to paediatric surgery editing.",
            icon: Baby,
        },
        {
            title: "Plastic and Reconstructive Surgery",
            description: "It encompasses aesthetic, reconstructive, and microsurgical procedures. Research often emphasizes technique innovation, outcomes analysis, and case series reporting. Pubrica assists in refining technical descriptions, enhancing visual presentation, and ensuring manuscripts meet the publication standards of high-impact surgical journals.",
            icon: Sparkles,
        }
    ];

    const services = [
        {
            title: "Editorial Comment Addressal",
            description: "Expert responses to enhance your manuscript based on reviewer comments.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/publication-support/responding-to-reviewers"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: Database,
            href: "/services/medical-data-collection"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
            icon: Search,
            href: "/services/publication-support/peer-review-pre-submission"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: BookOpen,
            href: "/services/physician-writing-services/original-research-article"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            icon: FileSpreadsheet,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Surgery
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive research, publication, and editing support for surgery scholars, clinicians, and researchers, advancing innovations in surgical science, clinical practice, and patient care.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Surgical Science Through Expert Editing and Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Surgery is a rapidly evolving medical field that integrates advanced clinical practice, innovative technologies, and evidence-based research to improve patient outcomes. From general surgery to specialized disciplines such as neurosurgery, orthopaedics, cardiovascular surgery, and minimally invasive techniques, the demand for high-quality, well-documented research is greater than ever. However, publishing in high-impact surgical journals requires not only scientific rigor but also impeccable presentation, formatting, and adherence to journal-specific guidelines.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we specialize in providing surgery manuscript editing, surgical research support, and journal submission services tailored for surgeons, clinical researchers, and academicians. Our goal is to help your research make an impact by ensuring your manuscript meets the highest standards of clarity, accuracy, and professionalism.
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
                                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
                                alt="Surgical Science and Clinical Research"
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
                            Our Core Disciplines In Surgery
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We offer expert editorial and publication support across a wide spectrum of surgical disciplines. Whether your research focuses on innovative surgical techniques, clinical trials, or translational surgery, our specialists ensure precision, accuracy, and scientific impact in every manuscript.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {disciplines.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={index}
                                    className="bg-white border border-gray-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between group"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-4">
                                            <h3 className="text-base font-bold text-[#9E1B1E] group-hover:text-[#7d1417] transition-colors pr-2">
                                                {item.title}
                                            </h3>
                                            <div className="p-2 bg-gray-50 rounded-lg shrink-0 text-[#0e3b32]">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-xs leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Surgery Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        We specialize in end-to-end support for surgical researchers, spanning every phase of research development and publication. Our expert team comprises surgeons, clinical researchers, biostatisticians, and publication specialists who understand the nuances of surgical research and medical writing.
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