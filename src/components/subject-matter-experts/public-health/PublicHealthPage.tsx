"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Activity,
    BarChart2,
    Globe,
    FileText,
    Apple,
    ShieldAlert,
    Heart,
    Users,
    Search,
    PenTool,
    Database,
    Languages,
    BookOpen,
    Layers,
    Send,
    UserCheck,
    ChevronDown
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function PublicHealthPage() {
    const disciplines = [
        {
            title: "Epidemiology",
            iconSrc: "/images/subject-matter-experts/public-health/Epidemiology.webp",
            description: "Epidemiologists assess disease patterns and cause to enable effective prevention and controlling illnesses using epidemiological data.",
            icon: Activity,
        },
        {
            title: "Biostatistics",
            iconSrc: "/images/subject-matter-experts/public-health/Biostatistics.webp",
            description: "Biostatistics uses statistical techniques to evaluate data related to health and help researchers with their evidence-based decision-making.",
            icon: BarChart2,
        },
        {
            title: "Environmental Health",
            iconSrc: "/images/subject-matter-experts/public-health/Environmental-Health.webp",
            description: "Environmental Health assesses environmental factors and how they affect the health of individuals, including exposure to air pollutants, water sources, and other occupational hazards.",
            icon: Globe,
        },
        {
            title: "Global Health",
            iconSrc: "/images/subject-matter-experts/public-health/Global-Health.webp",
            description: "Global Health provides solutions for addressing health-related challenges among different populations with a focus on addressing health inequities, developing health policies, and improving international health systems.",
            icon: Users,
        },
        {
            title: "Health Policy and Management",
            iconSrc: "/images/subject-matter-experts/public-health/Health-Policy-and-Management.webp",
            description: "Health Policy and Management perform research related to health systems, developing health policies, understanding the economics of healthcare, and evaluating healthcare programs.",
            icon: FileText,
        },
        {
            title: "Nutrition and Public Health",
            iconSrc: "/images/subject-matter-experts/public-health/Nutrition-and-Public-Health.webp",
            description: "Nutrition and Public Health examine how a person's diet and nutritional intake influence a population's overall health.",
            icon: Apple,
        },
        {
            title: "Epidemiology and Disease Prevention",
            iconSrc: "/images/subject-matter-experts/public-health/Epidemiology-and-Disease-Prevention.webp",
            description: "Epidemiology and Disease Prevention evaluate the trends in disease and establish systems for the surveillance of diseases, and to develop preventive measures to reduce risk to the population at large.",
            icon: ShieldAlert,
        },
        {
            title: "Health Promotion and Behavioural Sciences",
            iconSrc: "/images/subject-matter-experts/public-health/Health-promotion-and-education.webp",
            description: "Health Promotion and Behavioural Sciences focus on the behaviours that contribute to an individual's health status, and to develop interventions that improve these types of behaviours.",
            icon: Heart,
        },
        {
            title: "Maternal and Child Health and Community Health",
            iconSrc: "/images/subject-matter-experts/public-health/Maternal-and-Child-Health-and-Community-Health.webp",
            description: "Maternal and Child Health and Community Health work to enhance the quality of life for mothers, infants, children, and low-income populations living in poverty.",
            icon: Users,
        }
    ];
    const expertiseCards = [
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: PenTool,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: Search,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: Languages,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/biomolecular-engineering/Research-Services.webp",
            icon: Layers,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: Send,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: UserCheck,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Public health"
                description="Advancing healthier communities through prevention, research, and evidence based solutions that improve lives worldwide."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Public health Research Through Expert Editing, Writing & Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
                                    <Image
                                        src="/images/subject-matter-experts/public-health/Public-health.webp"
                                        alt="Public health medical research"
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
                                        Through continued development in the areas of epidemiology, health policy, biostatistics, environmental health, and health promotion, the research of public health will continue to grow. For example, the introduction of more sophisticated methods of evaluation (e.g., dual use evaluations or aggregate effects) will enable researchers to gather accurate data over longer periods of time and provide more reliable comparisons between groups. It will also give them additional tools to refine their methods and enhance the accuracy of their findings.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Your article has been prepared with the understanding of the importance of{" "}
                                        <Link href="/services/research-services/literature-review-and-gap/" className="text-blue-600 no-underline">
                                            public health research
                                        </Link>{" "}
                                        and how you can use this knowledge to make a difference in the world. We help you with the entire process of producing high-quality and informative manuscripts starting from your initial study design through to submission to the appropriate{" "}
                                        <Link href="/services/publication-support/peer-review-pre-submission/" className="text-blue-600 no-underline">
                                            peer-reviewed journals
                                        </Link>
                                        . Your research will have maximum visibility and scientific impact.
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
                            Our Core Disciplines In Public Health
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed max-w-full">
                            The following are the areas of focus that we at Pubrica have to offer when it comes to improving the lifestyles of people around the world through public health efforts:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <CommonExpertiseCards
                    title="Our Expertise in Public health Research and Publication"
                    description="At Pubrica, we offer fully integrated support for the entire public health research process to ensure that scholars, organizations, and practitioners have the means necessary to generate their studies into high-quality audio or video records that are suitable for publication in peer-reviewed journals. We are committed to aiding at every stage of this process - from conception to realization of a project (preliminary research question formulation) through to submission of your final manuscript."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}