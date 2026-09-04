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

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
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
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: FileSearch,
            href: "/services/medical-data-collection/"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: Cpu,
            href: "/services/research-services/scientific-writing   "
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Cpu,
            href: "/services/publication-support/art-work-preparation"
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: Layers,
            href: "/services/publication-support/journal-manuscript-formatting-services"
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart3,
            href: "/services/research-impact/graphical-abstract"
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
                title="Food Science"
                description="Expert guidance for food science research, writing, and journal submission, advancing innovation in nutrition, safety, and food technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Food Science Research Through Expert Editing, Writing & Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Food science plays a vital role in improving global nutrition, enhancing food safety, and developing sustainable food technologies. As the field continues to evolve with advancements in biotechnology, nutrition science, sensory evaluation, functional foods, and food processing technologies, researchers need reliable support to communicate their findings with precision and clarity.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we understand the pivotal role food science research plays in enhancing global health, nutrition, food safety, and sustainable food systems. Whether your research focuses on food chemistry, microbiology, nutrition, biotechnology, or processing technologies, our food science editing services ensure that your work is publication-ready. Our specialized team of experts is here to support every stage of your research journey, from conceptualization and manuscript preparation to high-impact journal publication.
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
                                src="/images/subject-matter-experts/food-science/Food-Science.webp"
                                alt="Food science research visualization"
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
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Food Science Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica has extensive experience in supporting food science research, offering end-to-end services tailored for academicians, researchers, and industry professionals. Our services are designed to enhance the quality, clarity, and impact of research manuscripts, making them suitable for publication in high-impact journals through our comprehensive food science publication assistance.
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