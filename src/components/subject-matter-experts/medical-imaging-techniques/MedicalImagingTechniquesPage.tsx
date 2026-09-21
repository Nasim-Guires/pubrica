"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
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
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function MedicalImagingTechniquesPage() {
    const disciplines = [
        {
            title: "Radiology and Diagnostic Imaging",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Radiology-and-Diagnostic-Imaging.webp",
            description: "Radiology remains a cornerstone of medical diagnostics, encompassing X-rays, computed tomography (CT), and fluoroscopy. Our specialists provide expert guidance in both clinical research and manuscript preparation related to radiology, from evaluating image quality to interpreting complex pathologies.",
            icon: Search
        },
        {
            title: "Magnetic Resonance Imaging (MRI)",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Magnetic-Resonance-Imaging-MRI.webp",
            description: "MRI is indispensable for high-resolution, non-invasive imaging of soft tissues, the brain, musculoskeletal system, and internal organs. Our team assists in refining research studies involving functional MRI (fMRI), diffusion tensor imaging (DTI), and advanced contrast techniques.",
            icon: TrendingUp
        },
        {
            title: "Ultrasound Imaging",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Ultrasound-Imaging.webp",
            description: "It offers real-time visualization of organs, blood flow, and foetal development. Pubrica supports research in areas including Doppler studies, echocardiography, and elastography. We guide authors in presenting ultrasound methodologies, optimizing image interpretation, and articulating clinical significance.",
            icon: FileText
        },
        {
            title: "Nuclear Medicine and Molecular Imaging",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Nuclear-Medicine-and-Molecular-Imaging.webp",
            description: "Nuclear medicine combines the power of radioactive tracers with advanced imaging technologies to investigate physiological processes at the molecular level. Our experts assist researchers in PET, SPECT, and hybrid imaging studies, ensuring accurate representation of tracer kinetics, quantification methods, and clinical relevance.",
            icon: Database
        },
        {
            title: "Oncologic Imaging",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Oncologic-Imaging.webp",
            description: "Medical imaging is pivotal in oncology, enabling early detection, staging, and treatment monitoring of cancer. Our team supports studies utilizing CT, MRI, PET, and hybrid imaging for tumour evaluation. We help authors highlight imaging biomarkers, response assessment criteria, and clinical correlations, enhancing the translational impact of oncologic research.",
            icon: AlertTriangle
        },
        {
            title: "Interventional Imaging",
            iconSrc: "/images/subject-matter-experts/medical-imaging-techniques/Interventional-Imaging.webp",
            description: "It integrates imaging techniques such as CT, fluoroscopy, and ultrasound to guide minimally invasive procedures. Pubrica provides insights into study design, procedural documentation, and outcome reporting for interventional research.",
            icon: ShieldAlert
        }
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileSearch,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Layers,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];
    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Medical Imaging Techniques"
                description="Expert guidance for medical imaging research, writing, and publication support, bridging technology, medicine, and innovation for precise diagnosis and improved patient care."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-3 leading-tight">
                                Transforming Healthcare Through Advanced Medical Imaging Techniques
                            </h2>
                            <p className="text-base text-slate-700 leading-relaxed">
                                From diagnosis to research, Pubrica empowers medical imaging professionals to publish high-impact findings with clarity and precision.
                            </p>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/medical-imaging-techniques/Medical-Imaging-Techniques.webp"
                                        alt="Medical Imaging research visualization"
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
                                        Medical imaging stands at the heart of modern healthcare, serving as a critical tool for disease diagnosis, treatment planning, and therapeutic monitoring. As advancements in engineering, physics,{" "}
                                        <Link href="/subject-matter-experts/computer-science/" className="text-blue-600 no-underline">
                                            computer science
                                        </Link>
                                        , and biomedical innovation reshape the imaging landscape, researchers and clinicians rely on accurate, high-quality{" "}
                                        <Link href="/services/scientific-communication/" className="text-blue-600 no-underline">
                                            scientific communication
                                        </Link>{" "}
                                        to share discoveries that can transform patient care. Medical imaging techniques, from radiography and ultrasound to advanced modalities like MRI, PET-CT, and AI-driven image analytics, continue to drive progress across clinical medicine, biomedical research, and translational healthcare.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we recognize that{" "}
                                        <Link href="/services/research-services/" className="text-blue-600 no-underline">
                                            medical imaging research
                                        </Link>{" "}
                                        requires clarity, technical precision, and strong scientific rigor. Whether you are developing a new imaging sequence, evaluating machine learning algorithms for automated classification, validating radiomics biomarkers, or reporting clinical trial outcomes, our expert writing and{" "}
                                        <Link href="/services/publication-support/" className="text-blue-600 no-underline">
                                            publication support
                                        </Link>{" "}
                                        ensures your work meets international standards. We assist researchers, radiologists, biomedical engineers, and academic institutions in communicating imaging findings effectively across peer-reviewed journals, conferences, and regulatory submissions.
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
                            Our Core Disciplines In Medical Imaging Techniques
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-full">
                            Medical imaging is a cornerstone of modern healthcare, bridging clinical diagnostics, treatment planning, and research innovations. At Pubrica, we provide expert support across the spectrum of medical imaging disciplines, empowering researchers, clinicians, and industry professionals to achieve precision, clarity, and impactful outcomes.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Medical Imaging Techniques"
                    description="At Pubrica, we specialize in providing comprehensive support for researchers, clinicians, and academicians in the field of medical imaging techniques. Medical imaging plays a pivotal role in modern healthcare, aiding in accurate diagnosis, treatment planning, and monitoring of diseases."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}