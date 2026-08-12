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
    TrendingUp
} from 'lucide-react';

export default function RadiologyPage() {
    const disciplines = [
        {
            title: "Diagnostic Radiology",
            description: "It is at the heart of medical imaging, focusing on the interpretation of imaging studies to diagnose disease. Our experts assist in writing and editing research papers, systematic reviews, and case reports covering X-rays, CT scans, MRI, and ultrasound modalities.",
            icon: ImageIcon,
        },
        {
            title: "Interventional Radiology (IR)",
            description: "It combines imaging with minimally invasive procedures to diagnose and treat various conditions without major surgery. Pubrica provides expert support in writing and editing clinical research, procedure-based case series, and reviews focusing on novel IR techniques and outcomes.",
            icon: Activity,
        },
        {
            title: "Neuroradiology",
            description: "They focus on imaging the brain, spine, and nervous system. Our radiology writers and editors have extensive experience in neurological imaging research, including MRI, functional MRI, CT angiography, and diffusion imaging.",
            icon: Brain,
        },
        {
            title: "Musculoskeletal Radiology",
            description: "It specializes in imaging bones, joints, and soft tissues to assess trauma, sports injuries, arthritis, and tumours. Our editors provide tailored assistance for manuscripts and reviews involving MRI, ultrasound, and CT techniques used in orthopaedic and sports medicine research.",
            icon: Activity,
        },
        {
            title: "Cardiothoracic Radiology",
            description: "This field focuses on imaging the heart, lungs, and mediastinum, providing critical insights into cardiovascular and pulmonary diseases. We support research on advanced imaging modalities such as cardiac MRI, CT angiography, and dual-energy CT that improve diagnostic precision and patient outcomes.",
            icon: HeartHandshake,
        },
        {
            title: "Breast Imaging",
            description: "It plays a vital role in the early detection and management of breast cancer. Our services extend to research papers on mammography, breast ultrasound, digital breast tomosynthesis, and MRI. We ensure scientific rigor, clarity, and adherence to international reporting standards such as BI-RADS.",
            icon: ShieldCheck,
        },
        {
            title: "Paediatric Radiology",
            description: "Children’s imaging demands precision, safety, and sensitivity. Our paediatric radiology experts provide editorial and analytical support for studies addressing developmental abnormalities, congenital disorders, and paediatric oncology imaging, with attention to radiation safety and ethical standards.",
            icon: UserCheck,
        },
        {
            title: "Abdominal and Gastrointestinal Radiology",
            description: "This discipline focuses on imaging the abdominal organs, including the liver, pancreas, kidneys, and gastrointestinal tract. Our experts provide specialized support for abdominal CT, MRI, ultrasound, and nuclear imaging studies, ensuring scientific precision and compliance with publication standards.",
            icon: Microscope,
        },
        {
            title: "Emergency and Trauma Imaging",
            description: "Emergency radiology plays a critical role in acute care. Our editorial team supports authors presenting imaging research on trauma, acute stroke, haemorrhage, and thoracic emergencies, emphasizing rapid diagnosis, evidence-based interventions, and clinical relevance.",
            icon: ShieldAlert,
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
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
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
            icon: FileText,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: Layers,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: Send,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
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
                        Radiology
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        From diagnostic imaging to interventional radiology, we provide end-to-end support for research, writing, editing, and publication, helping radiologists and medical researchers transform data into impactful discoveries.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Medical Imaging and Diagnostic Research with Expert Radiology Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Radiology is the medical discipline that employs imaging technologies to diagnose and treat diseases within the human body. It lies at the intersection of medicine, technology, and data interpretation, playing an indispensable role in modern healthcare. From detecting subtle abnormalities to guiding complex surgical procedures, radiology enhances clinical decision-making and patient outcomes.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            As medical science evolves, radiology research support continues to expand with innovations such as artificial intelligence (AI), molecular imaging, and hybrid modalities like PET-CT and PET-MRI. For researchers and clinicians alike, staying current with the latest developments in medical imaging research is crucial to producing impactful, evidence-based studies.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we offer comprehensive radiology research assistance, radiology editing services, and radiology publication help that empower professionals to communicate their findings effectively. Our team of radiology specialists, PhD editors, and publication experts ensures your work meets the highest academic and journal standards.
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
                                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                                alt="Radiology Research and Diagnostic Imaging"
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
                            Our Core Disciplines In Radiology
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Radiology is a dynamic and rapidly evolving medical field that integrates advanced imaging technologies with clinical expertise to diagnose, treat, and monitor diseases. At Pubrica, we offer specialized research, diagnostic imaging, and publication support across all major disciplines of radiology. Our team of radiologists, imaging scientists, and medical editors ensures accuracy, scientific integrity, and clarity in every project.
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
                            Our Expertise in Radiology Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we offer a full range of radiology research and publication support services, ensuring that your work meets the expectations of high impact journals and international conferences.
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