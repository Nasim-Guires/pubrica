"use client";
import React, { useState } from 'react';
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
    CheckCircle2
} from 'lucide-react';

export default function DrugDeliverySystemPage() {
    const [openExpertise, setOpenExpertise] = useState<number | null>(null);

    const toggleExpertise = (index: number) => {
        setOpenExpertise(openExpertise === index ? null : index);
    };

    const disciplines = [
        {
            title: "Pharmaceutical Sciences",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Pharmaceutical-Science.webp",
            description: "Pharmaceutical Sciences focuses on designing, developing, and delivering drugs. It covers areas like pharmacology, medicinal chemistry, and drug formulation to improve drug efficacy, safety, and targeted delivery.",
            icon: Search
        },
        {
            title: "Nanotechnology",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Nanotechnology.webp",
            description: "Nanotechnology involves using tiny materials, typically at the nanoscale, to improve drug delivery. It enhances precision in targeting specific areas of the body, increasing drug efficacy while minimizing side effects.",
            icon: TrendingUp
        },
        {
            title: "Biotechnology",
            iconSrc: "/images/subject-matter-experts/biotechnology/Biotechnology.webp",
            description: "Biotechnology uses biological systems and techniques to develop innovative drug delivery methods. It focuses on harnessing living organisms or biological processes to create more effective, targeted, and sustainable treatments.",
            icon: FileText
        },
        {
            title: "Molecular Biology",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Molecular-Biology.webp",
            description: "Molecular Biology studies the structure and function of molecules essential for life, such as DNA, RNA, and proteins. It plays a key role in understanding disease mechanisms and developing targeted therapies in drug discovery.",
            icon: Database
        },
        {
            title: "Biopharmaceutics",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Biopharmaceutics.webp",
            description: "Biopharmaceutics is the study of how the physical and chemical properties of drugs affect their absorption, distribution, and overall therapeutic effectiveness in the body. It bridges pharmacology and pharmaceutical sciences to optimize drug delivery and ensure the best clinical outcomes.",
            icon: AlertTriangle
        },
        {
            title: "Regulatory Science",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Regulatory-Science.webp",
            description: "Regulatory Science is the field focused on ensuring that drugs, medical devices, and other health products are safe, effective, and of high quality. It involves developing and implementing regulations, standards, and procedures for the approval, manufacturing, and monitoring of healthcare products.",
            icon: BarChart3
        },
        {
            title: "Pharmacology",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Pharmacology.webp",
            description: "Pharmacology is the study of how drugs interact with the body and affect biological systems. It focuses on understanding drug actions, their therapeutic effects, side effects, and mechanisms of action to optimize their use in treating diseases.",
            icon: Cpu
        },
        {
            title: "Toxicology",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Toxicology.webp",
            description: "Toxicology is the study of the harmful effects of substances on living organisms. It focuses on identifying toxic agents, understanding their mechanisms, and assessing their risks to health and the environment.",
            icon: Layers
        },
        {
            title: "Clinical Research",
            iconSrc: "/images/subject-matter-experts/drug-delivery-system/Clinical-Research.webp",
            description: "Clinical Research involves studying and testing new treatments, drugs, or medical devices in human subjects. It aims to assess their safety, efficacy, and optimal use, contributing to evidence-based medicine and regulatory approvals.",
            icon: FileSearch
        }
    ];

    const expertiseItems = [
        {
            title: "Formulation Development",
            description: "Optimizing formulation development ensures drugs are more bioavailable, allowing for better absorption and efficacy in the body."
        },
        {
            title: "Nanotechnology",
            description: "By harnessing the power of nanomaterials, we can significantly improve drug efficacy and reduce adverse reactions, leading to safer treatments."
        },
        {
            title: "Controlled Release Systems",
            description: "Creating systems that regulate the rate and timing of drug release for maximum therapeutic effect."
        },
        {
            title: "Guidance on Regulatory Compliance",
            description: "Our experts help clients to understand and comply with the regulatory requirements in multiple countries for drug delivery systems.  "
        },
        {
            title: "Preclinical and Clinical Research",
            description: "We help researchers in all stages of product development, beginning with preclinical studies, regulatory compliance, clinical trials and product approval ensuring scientific integrity at every step.  "
        },
        {
            title: "Patent and Intellectual Property Support",
            description: "We provide researchers with guidance and assistance to help them protect and monetize their innovative DDS technology."
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/drug-delivery-system/Research-Services-1.webp",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
            href: "/services/research-services/scientific-writing"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/biotechnology/Data-Collection-for-AI-ML.webp",
            icon: Cpu,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/drug-delivery-system/Translation-Services.webp",
            icon: FileText,
            href: "/services/editing-and-translation"
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
            href: "//services/research-services/literature-review-and-gap"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: FileText,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/drug-delivery-system/Graphical-Abstract-1.webp",
            icon: Search,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/agriculture/Journal-Selection.webp",
            icon: FileText,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Drug Delivery System
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Drug Delivery Systems (DDS) are a form of technology meant to provide drugs directly at their target location within the human body. DDS optimizes both the effectiveness and safety of the drug, while simultaneously controlling the release rate of the drug and improving its bioavailability.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Drug Delivery System through Expert Guidance
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            A drug delivery system is an approach that delivers a drug to the body. The goal is to provide benefits to patients by providing controlled and specific delivery of drugs to the targeted locations where they are needed and ultimately improve the results of treatment provided to patients.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            To achieve these benefits, Pubrica provides support to scientists, researchers, and healthcare professionals to create{" "}
                            <Link href="/services/medical-data-collection" className="text-blue-600 hover:underline font-medium">
                                high quality manuscripts
                            </Link>{" "}
                            and projects that lead to innovation in the development of Drug Delivery Systems.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our team consists of pharmacy scientists, biochemists, pharmacologists, and professional editors who collaborate to help ensure that your work is scientifically sound, ethically appropriate, and compliant with regulatory requirements. In addition, we help you navigate through the many global{" "}
                            <Link
                                href="/services/publication-support/"
                                className="text-blue-600 hover:underline font-medium"
                            >
                                publishers and journals
                            </Link>,{" "}
                            so that your work reaches the proper community of prospective collaborators and continues to contribute to the development of the Drug Delivery System on a worldwide basis.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            We specialize in areas such as pharmaceutical research, drug formulation, targeted therapy, nanomedicine, research service, and publishing services related to drug delivery systems
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
                                src="/images/subject-matter-experts/drug-delivery-system/Drug-Delivery-System.webp"
                                alt="Drug delivery system analysis visual"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 320px, 380px"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* SECTION NEW: Our Expertise in Drug Delivery System Includes */}
            <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        {/* Left Image */}
                        <div className="lg:col-span-5 flex justify-center">
                            <div className="relative w-full h-[350px] sm:h-[420px] rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src="/images/subject-matter-experts/drug-delivery-system/Applications-of-Drug-Delivery-System.webp"
                                    alt="Expertise in Drug Delivery System"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Content & Accordion */}
                        <div className="lg:col-span-7 space-y-6">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                                    Our Expertise in Drug Delivery System Includes
                                </h2>
                                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                    Our expertise in drug delivery systems supports the development of safe, effective, and innovative therapies. We combine advanced formulation science, nanotechnology, and controlled release strategies to enhance drug performance. With end-to-end support across preclinical and clinical stages, we ensure scientific rigor and regulatory readiness. Our team also provides guidance on global compliance and intellectual property protection to maximize research impact.
                                </p>
                            </div>

                            {/* Accordion list */}
                            <div className="space-y-3">
                                {expertiseItems.map((item, index) => {
                                    const isOpen = openExpertise === index;
                                    return (
                                        <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                            <button
                                                onClick={() => toggleExpertise(index)}
                                                className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#0e3b32] hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="flex items-center gap-2 text-sm sm:text-base">
                                                    <span className="font-bold text-lg">{isOpen ? '−' : '+'}</span> {item.title}
                                                </span>
                                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {isOpen && (
                                                <div className="px-4 pb-4 text-gray-600 text-xs sm:text-sm leading-relaxed border-t border-gray-100 pt-3">
                                                    {item.description}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Core Disciplines Grid */}
            <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Core Disciplines In Drug Delivery System
                        </h2>
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
                                                {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
                                            ) : (
                                                <IconComponent className="w-6 h-6" />
                                            )}
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

            {/* SECTION 4: Why Choose Pubrica */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                        Why Choose Pubrica for Research and Publishing in Drug Delivery Systems?
                    </h2>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica’s expertise in providing end-to-end support for scientific research, from the initial conceptualisation to the final publication, makes it an excellent partner for all your drug delivery system research and publishing needs. Here are the reasons you should select Pubrica:
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