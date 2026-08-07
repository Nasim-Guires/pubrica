"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Search,
    TrendingUp,
    FileText,
    Database,
    AlertTriangle,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    ShieldAlert,
    BookOpen
} from 'lucide-react';

export default function MedicalImagingTechniquesPage() {
    const disciplines = [
        {
            title: "Radiology and Diagnostic Imaging",
            description: "Radiology remains a cornerstone of medical diagnostics, encompassing X-rays, computed tomography (CT), and fluoroscopy. Our specialists provide expert guidance in both clinical research and manuscript preparation related to radiology, from evaluating image quality to interpreting complex pathologies.",
            icon: Search
        },
        {
            title: "Magnetic Resonance Imaging (MRI)",
            description: "MRI is indispensable for high-resolution, non-invasive imaging of soft tissues, the brain, musculoskeletal system, and internal organs. Our team assists in refining research studies involving functional MRI (fMRI), diffusion tensor imaging (DTI), and advanced contrast techniques.",
            icon: TrendingUp
        },
        {
            title: "Ultrasound Imaging",
            description: "It offers real-time visualization of organs, blood flow, and foetal development. Pubrica supports research in areas including Doppler studies, echocardiography, and elastography. We guide authors in presenting ultrasound methodologies, optimizing image interpretation, and articulating clinical significance.",
            icon: FileText
        },
        {
            title: "Nuclear Medicine and Molecular Imaging",
            description: "Nuclear medicine combines the power of radioactive tracers with advanced imaging technologies to investigate physiological processes at the molecular level. Our experts assist researchers in PET, SPECT, and hybrid imaging studies, ensuring accurate representation of tracer kinetics, quantification methods, and clinical relevance.",
            icon: Database
        },
        {
            title: "Oncologic Imaging",
            description: "Medical imaging is pivotal in oncology, enabling early detection, staging, and treatment monitoring of cancer. Our team supports studies utilizing CT, MRI, PET, and hybrid imaging for tumour evaluation. We help authors highlight imaging biomarkers, response assessment criteria, and clinical correlations, enhancing the translational impact of oncologic research.",
            icon: AlertTriangle
        },
        {
            title: "Interventional Imaging",
            description: "It integrates imaging techniques such as CT, fluoroscopy, and ultrasound to guide minimally invasive procedures. Pubrica provides insights into study design, procedural documentation, and outcome reporting for interventional research.",
            icon: ShieldAlert
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            icon: FileText,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: PenTool,
            href: "/services/editing-and-proofreading"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
            icon: Cpu,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/editing-and-translation"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80",
            icon: Layers,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: BookOpen,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Medical Imaging Techniques
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Expert guidance for medical imaging research, writing, and publication support, bridging technology, medicine, and innovation for precise diagnosis and improved patient care.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Transforming Healthcare Through Advanced Medical Imaging Techniques
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            From diagnosis to research, Pubrica empowers medical imaging professionals to publish high-impact findings with clarity and precision.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Medical imaging stands at the heart of modern healthcare, serving as a critical tool for disease diagnosis, treatment planning, and therapeutic monitoring. As advancements in engineering, physics, computer science, and biomedical innovation reshape the imaging landscape, researchers and clinicians rely on accurate, high-quality scientific communication to share discoveries that can transform patient care. Medical imaging techniques, from radiography and ultrasound to advanced modalities like MRI, PET-CT, and AI-driven image analytics, continue to drive progress across clinical medicine, biomedical research, and translational healthcare.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we recognize that medical imaging research requires clarity, technical precision, and strong scientific rigor. Whether you are developing a new imaging sequence, evaluating machine learning algorithms for automated classification, validating radiomics biomarkers, or reporting clinical trial outcomes, our expert writing and publication support ensures your work meets international standards. We assist researchers, radiologists, biomedical engineers, and academic institutions in communicating imaging findings effectively across peer-reviewed journals, conferences, and regulatory submissions.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                                alt="Medical Imaging research visualization"
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
                            Our Core Disciplines In Medical Imaging Techniques
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            Medical imaging is a cornerstone of modern healthcare, bridging clinical diagnostics, treatment planning, and research innovations. At Pubrica, we provide expert support across the spectrum of medical imaging disciplines, empowering researchers, clinicians, and industry professionals to achieve precision, clarity, and impactful outcomes.
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
                            Our Expertise in Medical Imaging Techniques
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we specialize in providing comprehensive support for researchers, clinicians, and academicians in the field of medical imaging techniques. Medical imaging plays a pivotal role in modern healthcare, aiding in accurate diagnosis, treatment planning, and monitoring of diseases.
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