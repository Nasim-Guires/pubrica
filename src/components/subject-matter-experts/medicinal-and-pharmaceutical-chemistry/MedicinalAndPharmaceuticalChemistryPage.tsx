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
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

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

    const expertiseCards = [
        {
            title: "Literature Review and Gap Analysis",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/Research-Services.png",
            icon: FileText,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Peer-Reviewing Services",
            desc: "Comprehensive review to refine and validate your research pre-submission.",
            href: "/services/publication-support/peer-review-pre-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Peer-Review.webp",
            icon: Cpu,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/medicinal-and-pharmaceutical-chemistry/How-Should-Physicians-Choose-the-Right-Journal-for-Submitting-a-Case-Report.webp",
            icon: BookOpen,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Layers,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileSearch,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Medical and Pharmaceutical Chemistry"
                description="Bridges the gap between chemistry and healthcare by designing, developing, and optimizing pharmaceutical compounds to ensure the safety, efficacy, and quality of new drugs and treatments."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-3 leading-tight">
                                Transforming Healthcare Through Advanced Medical and Pharmaceutical Chemistry
                            </h2>
                            <p className="text-base text-slate-700 leading-relaxed">
                                From drug discovery to formulation, Pubrica empowers medical and pharmaceutical chemistry professionals to publish high-impact research with clarity and precision.
                            </p>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        
                                            Medical and Pharmaceutical Chemistry  is leading the transformation of health care through drug discovery, drug formulation and creation of new therapeutic strategies. As the chemical, biological and technological innovations develop, both researchers and providers will depend on well written, high quality scientific communication to communicate their timely findings that influence patient care. Medical and Pharmaceutical Chemistry influences all progress within clinical medicine, biomedical research and the{" "}
                                        <Link href="/industries/pharmaceutical/" className="text-blue-600 no-underline">
                                            pharmaceutical industry
                                        </Link>{" "}
                                        through all avenues of drug design, targeted therapy, Nanomedicine and Clinical Trials.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we understand medical and pharmaceutical chemistry research requires accuracy, scientific integrity and complete publication assistance. Whether you are creating the next generation of drug delivery systems, creating a new compound, validating a clinical research outcome or developing new mechanisms of action, we will provide the expert writing and{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            publishing services
                                        </Link>{" "}
                                        you need to assure your work meets global standards. We provide services for pharmaceutical scientists, chemists, clinicians and academic institutions to effectively communicate their findings through{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer reviewed journals services
                                        </Link>
                                        , conference presentations and regulatory submissions.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2 mb-2">
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
                            Our Core Disciplines In Medical and Pharmaceutical Chemistry
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            Our medicinal chemistry division at Pubrica provides professional, comprehensive support at every step of the drug discovery process. The Medicinal Chemistry division works closely with researchers and product developers to create the highest-quality and most effective technical writing, editorial support, and analytical services for both medicinal chemistry research and high-impact publishing.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>
            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Medical and Pharmaceutical Chemistry"
                    description="Pubrica provides full services of Medical and Pharmaceutical Chemistry, supporting Drug Delivery Systems, Research services , and Compliance with Regulatory Agencies. We provide the following expertise."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}