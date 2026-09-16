
"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Stethoscope,
    Dna,
    Apple,
    Pill,
    Globe,
    Search,
    PenTool,
    Database,
    Languages,
    FileText,
    Send,
    FileSearch,
    CheckCircle2,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function DiabetologyPage() {
    const disciplines = [
        {
            title: "Clinical Diabetology",
            iconSrc: "/images/subject-matter-experts/diabetology/Clinical-Diabetology.png",
            description: (
                <>
                    We provide comprehensive support for studies exploring diabetes pathophysiology, diagnosis, and management. Our expertise includes Type 1 and Type 2 diabetes, gestational diabetes, diabetic ketoacidosis, and comorbid metabolic disorders. Pubrica’s team assists in developing clinical protocols,{" "}
                    <Link href="/services/physician-writing-services/case-report/" className="text-blue-600 ">
                        case reports
                    </Link>
                    , and outcome-based studies tailored for top-tier journals in diabetology and endocrinology.
                </>
            ),
            icon: Stethoscope,
        },
        {
            title: "Molecular and Cellular Diabetes Research",
            iconSrc: "/images/subject-matter-experts/diabetology/Molecular-and-Cellular-Diabetes-Research.png",
            description: (
                <>
                    Our experts assist researchers investigating molecular mechanisms underlying insulin secretion, pancreatic β-cell function, glucose metabolism, and insulin resistance. We provide{" "}
                    <Link href="/services/editing-and-translation/scientific-editing/" className="text-blue-600 ">
                        scientific editing
                    </Link>{" "}
                    and publication support for research manuscripts in genetics, molecular signalling pathways, and therapeutic targets.
                </>
            ),
            icon: Dna,
        },
        {
            title: "Nutrition and Lifestyle Medicine",
            iconSrc: "/images/subject-matter-experts/diabetology/Nutrition-and-Lifestyle-Medicine.png",
            description: (
                <>
                    We support research focused on nutritional interventions, physical activity, and behavioural strategies in diabetes prevention and management. Our experts provide evidence synthesis, meta-analyses, and{" "}
                    <Link href="/services/research-services/systematic-review/" className="text-blue-600 ">
                        systematic reviews
                    </Link>{" "}
                    aligned with global guidelines such as ADA, EASD, and WHO recommendations.
                </>
            ),
            icon: Apple,
        },
        {
            title: "Pharmacological and Therapeutic Research",
            iconSrc: "/images/subject-matter-experts/diabetology/Pharmacological-and-Therapeutic-Research.png",
            description: "We specialize in diabetes pharmacotherapy, including insulin analogues, GLP-1 receptor agonists, SGLT2 inhibitors, DPP-4 inhibitors, and emerging biologics. Our scientific writers ensure your manuscripts meet regulatory and ethical publication standards while emphasizing translational value and clinical impact.",
            icon: Pill,
        },
        {
            title: "Epidemiology and Public Health in Diabetes",
            iconSrc: "/images/subject-matter-experts/diabetology/Epidemiology-and-Public-Health-in-Diabetes.png",
            description: "Pubrica offers analytical and editorial assistance for population-based studies, disease burden analyses, and health economics research. We help researchers convey the significance of global diabetes trends, screening programs, and policy-driven interventions with scientific precision.",
            icon: Globe,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: FileSearch,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: Send,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: CheckCircle2,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Diabetology"
                description="Comprehensive research, publication, and editing support for diabetology scholars, clinicians, and healthcare professionals, bridging scientific insights and innovative diabetes management."
                headingAs="h1"
            />
            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Diabetology
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/diabetology/Comprehensive-Research-Writing-and-Publication-Support-in-Diabetology.webp"
                                        alt="Diabetology blood glucose measurement visual"
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
                                        Diabetology, a specialized branch of endocrinology, focuses on the study, prevention, and management of diabetes mellitus (DM), a chronic metabolic disorder characterized by elevated blood glucose levels, which leads over time to serious damage to the heart, blood vessels, eyes, kidneys, and nerves. With the global prevalence of diabetes rising sharply, there is an urgent need for advanced research and clinical strategies to improve patient outcomes.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        About 830 million people worldwide have diabetes, the majority living in low- and middle-income countries. More than half of the people living with diabetes are not receiving treatment. In India, there are an estimated 77 million people above the age of 18 years who are suffering from diabetes (type 2), and nearly 25 million are prediabetics (at a higher risk of developing diabetes in the near future).
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we empower researchers, clinicians, and industry professionals in the field of diabetology with unparalleled support for scientific publication, research analysis, and academic writing. Our expert team bridges the gap between cutting-edge diabetes research and its effective dissemination, ensuring your work reaches the right audience with clarity, accuracy, and impact.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="pt-2">
                                        <Link
                                            href="/order-now"
                                            className="inline-block bg-[#C4161C] hover:bg-[#a31217] text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
                                        >
                                            Get a Free Quote
                                        </Link>
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
                            Our Core Disciplines In Diabetology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we specialize in providing comprehensive research, writing, and publication support across all core disciplines of Diabetology, the science that explores the mechanisms, management, and prevention of diabetes mellitus and its related metabolic disorders. Our multidisciplinary team of experts, including endocrinologists, clinical researchers, statisticians, and medical writers, collaborates to advance high-impact diabetes research and publications that shape global healthcare outcomes.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Why Choose Pubrica for Diabetology Research and Publishing?"
                    description="At Pubrica, we combine scientific precision with editorial excellence to support researchers, clinicians, and academicians in advancing the field of diabetology. Our end-to-end research and publication support services are designed to help you develop high-quality manuscripts that meet the rigorous standards of leading journals in diabetes care, endocrinology, and metabolic research."
                    cards={expertiseCards}
                />
            </section>

        </main>
    );
}