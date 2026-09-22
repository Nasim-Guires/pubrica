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
    Cpu
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function FoodSciencePage() {
    const disciplines = [
        {
            title: "Food Chemistry",
            iconSrc: "/images/subject-matter-experts/food-science/Food-Chemistry.webp",
            description: "Understanding the chemical composition, reactions, and interactions of food components is fundamental to food science. Our services cover research on nutrients, additives, flavours, preservatives, and bioactive compounds, ensuring accurate analysis, data interpretation, and manuscript preparation.",
            icon: Search
        },
        {
            title: "Food Microbiology",
            iconSrc: "/images/subject-matter-experts/food-science/Food-Microbiology.webp",
            description: "Food safety and quality are closely linked to microbial activity. We support research in microbial identification, foodborne pathogens, probiotics, fermentation processes, and the prevention of spoilage. Our experts help ensure that your studies meet global publication standards in microbiological analysis, while offering reliable food microbiology editing services.",
            icon: TrendingUp
        },
        {
            title: "Food Processing and Engineering",
            iconSrc: "/images/subject-matter-experts/food-science/Food-Processing-and-Engineering.webp",
            description: "Innovation in food processing and engineering is crucial for enhancing shelf life, texture, flavour, and nutritional quality. Our team assists in research related to thermal processing, preservation techniques, packaging, and novel processing technologies, transforming complex experiments into clear, scientifically robust publications.",
            icon: FileText
        },
        {
            title: "Nutrition and Functional Foods",
            iconSrc: "/images/subject-matter-experts/food-science/Nutrition-and-Functional-Foods.webp",
            description: "Research on dietary impact, bioavailability of nutrients, and functional foods is central to advancing human health. Our team assists in analysing nutritional profiles, functional bioactive compounds, and health claims, ensuring manuscripts are scientifically accurate and publication-ready.",
            icon: Database
        },
        {
            title: "Food Safety and Regulatory Compliance",
            iconSrc: "/images/subject-matter-experts/food-science/Food-Safety-and-Regulatory-Compliance.webp",
            description: "Compliance with national and international food safety standards is critical. We guide researchers on hazard analysis, risk assessment, food legislation, labelling, and regulatory compliance, helping ensure that your publications meet ethical and legal requirements.",
            icon: AlertTriangle
        },
        {
            title: "Food Biotechnology",
            iconSrc: "/images/subject-matter-experts/food-science/Food-Biotechnology.webp",
            description: "Emerging technologies in biotechnology are revolutionizing the food industry. We provide guidance in food biotechnology, including genetic engineering, enzyme technology, and fermentation science, helping researchers explore innovative solutions for sustainable and functional food products.",
            icon: Layers
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
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing",
            imageUrl: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts.",
            href: "/services/publication-support/art-work-preparation",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
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
                title="Food Science"
                description="Expert guidance for food science research, writing, and journal submission, advancing innovation in nutrition, safety, and food technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Food Science Research Through Expert Editing, Writing & Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/food-science/Food-Science.webp"
                                        alt="Food science research visualization"
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
                                        Food science plays a vital role in improving global nutrition, enhancing food safety, and developing sustainable food technologies. As the field continues to evolve with advancements in biotechnology, nutrition science, sensory evaluation, functional foods, and food processing technologies, researchers need reliable support to communicate their findings with precision and clarity.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we understand the pivotal role food science research plays in enhancing global health, nutrition, food safety, and sustainable food systems. Whether your research focuses on food chemistry, microbiology, nutrition, biotechnology, or processing technologies, our{" "}
                                        <Link href="/services/editing-and-translation/" className="text-blue-600 no-underline">
                                            food science editing services
                                        </Link>{" "}
                                        ensure that your work is publication-ready. Our specialized team of experts is here to support every stage of your research journey, from conceptualization and manuscript preparation to high-impact journal publication.
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
                            Our Core Disciplines In Food Science
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we offer expert guidance and support across the key disciplines of Food Science, ensuring that your research, manuscripts, and publications meet the highest standards of scientific rigor. Our team of experienced professionals specializes in the following core areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="bg-white py-7 px-4 sm:px-6 lg:px-8 font-['Poppins',sans-serif]">
                <div className="max-w-6xl mx-auto">

                    {/* Cards Grid with title & description passed directly */}
                    <CommonExpertiseCards
                        title="Our Expertise in Food Science Research and Publication"
                        description={
                            <>
                                Pubrica has extensive experience in supporting food science research, offering end-to-end services tailored for academicians, researchers, and industry professionals. Our services are designed to enhance the quality, clarity, and impact of research manuscripts, making them suitable for publication in high-impact journals through our comprehensive{' '}
                                <Link
                                    href="/services/publication-support/"
                                    className="text-blue-600 "
                                >
                                    food science publication assistance
                                </Link>
                                .
                            </>
                        }
                        cards={expertiseCards}
                    />

                </div>
            </section>

        </main>
    );
}