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
    ShieldAlert,
    BarChart3,
    PenTool,
    FileSearch,
    ChevronDown,
    Layers,
    Cpu,
    BookOpen
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";

export default function MedicinalChemistryPage() {
    const disciplines = [
        {
            title: "Pharmacogenomics & Personalized Medicine",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Pharmacogenomics-Personalized-Medicine.webp",
            description:
                "The study of how variations in genes are related to how patients respond differently to specific types of medications. By using this information, personalized medicine strategies have emerged. These strategies will allow physicians to personalize drugs based on an individual patient’s genetic fingerprint.",
            icon: Search,
        },
        {
            title: "Regulatory Affairs & Compliance",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Regulatory-Affairs-Compliance.webp",
            description: "Pharmaceutical products must comply with all applicable health authority regulations (i.e., FDA, EMA) and must be successfully navigated through the regulatory environment to obtain market approval.",
            icon: TrendingUp
        },
        {
            title: "Pharmaceutical Manufacturing & Process Optimization",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Pharmaceutical-Manufacturing-Process-Optimization.webp",
            description: "The focus of this division/organization is to produce drugs on a large scale, with maximized production efficiency, high-quality products at low cost, while being compliant with Good Manufacturing Practices (GMP).",
            icon: FileText
        },
        {
            title: "Analytical Chemistry & Quality Control",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Analytical-Chemistry-Quality-Control.webp",
            description: "Drugs must meet safety, efficacy and quality standards by using chromatography and mass spectrometry to determine the drug's identity and purity.",
            icon: Database
        },
        {
            title: "Pharmacology & Toxicology",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Pharmacology-Toxicology.webp",
            description: "Biological effects of drugs are studied to ensure the safety of drugs through both preclinical and clinical pharmacology. Toxicology assesses the safety of drugs by evaluating the potential for harmful (adverse) effects in the patient population.",
            icon: ShieldAlert
        },
        {
            title: "Clinical Trials & Development",
            iconSrc: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Clinical-Trials-Development.webp",
            description: "Clinical trials are conducted to determine the safety, efficacy, and dosage of new pharmaceutical products before they can be marketed. Conducting these studies is a prerequisite for securing regulatory approval.",
            icon: Layers
        }
    ];

    const services = [
        {
            title: "Literature Review and Gap Analysis",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Research-Services.png",
            icon: FileText,
            href: "/services/research-services"
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/editing-and-translation"
        },
        {
            title: "Peer-Reviewing Services",
            description: "Comprehensive review to refine and validate your research pre-submission.",
            image: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
            href: "/services/medical-data-collection"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.webp",
            icon: BookOpen,
            href: "/services/research-impact/graphical-abstract"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
            href: "/services/research-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Layers,
            href: "/services/research-services"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Medicinal Chemistry"
                description="Elevating medicinal chemistry research with expert analytical insight, clear scientific writing, and seamless journal submission assistance."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Elevating Medicinal Chemistry Excellence with End-to-End Research and Publication Services
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Medicinal chemistry is an interdisciplinary field that combines elements from chemistry, biology, and pharmacology to design, synthesize and optimize molecules with biologically active characteristics. Its primary purpose is to contribute to drug discovery research by converting the knowledge obtained through various types of chemical research into potential therapeutics. The Medicinal Chemistry Research Support Services provided by Pubrica provide researchers, scientists and other members of the pharmaceutical industry with everything they need in order to write and edit manuscript-style articles related to their medicinal chemistry research. The Medicinal Chemistry manuscript writing and editing services ensure that researchers have the tools and support needed to prepare their manuscripts for publication in high impact medicinal chemistry journals.
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
                                src="/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Medical-and-Pharmaceutical-Chemistry.webp"
                                alt="Medicinal Chemistry research visualization"
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
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] mb-4">
                            Our Core Disciplines In Medical and Pharmaceutical Chemistry
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our medicinal chemistry division at Pubrica provides professional, comprehensive support at every step of the drug discovery process. The Medicinal Chemistry division works closely with researchers and product developers to create the highest-quality and most effective technical writing, editorial support, and analytical services for both medicinal chemistry research and high-impact publishing.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Medical and Pharmaceutical Chemistry
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica provides full services of Medical and Pharmaceutical Chemistry, supporting Drug Delivery Systems, Research services , and Compliance with Regulatory Agencies. We provide the following expertise.
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