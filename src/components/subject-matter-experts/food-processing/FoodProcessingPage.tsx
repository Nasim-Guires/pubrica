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

export default function FoodProcessingPage() {
    const disciplines = [
        {
            title: "Heat Transfer Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Heat-Transfer-Models.webp",
            description: "To guarantee the quality of food and ensure its safety during its production process, you need to know the temperature distribution throughout the food or ingredients' surface. This temperature distribution is determined by mathematical models that are based on Fourier's Law of Heat Conduction and Newton's Law of Cooling. These models are widely utilised in the evaluation of thermal processing techniques such as pasteurisation and cooking to guarantee proper penetration of heat and survival of bacterium.",
            icon: Search
        },
        {
            title: "Mass Transfer Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Mass-Transfer-Models.webp",
            description: "Mass transfer models form an integral part in processes that involve the movement of moisture or solute. Models that follow Fick’s laws of diffusion apply in drying, extraction, and osmotic dehydration.",
            icon: TrendingUp
        },
        {
            title: "Kinetic models",
            iconSrc: "/images/subject-matter-experts/food-processing/Kinetic-models.webp",
            description: "Kinetic models can be used to assess the rate of chemical and biochemical changes in food systems. These models can support the study of the degradation of nutrients, enzymes, and the inactivation of microorganisms, which can be used to make accurate predictions.",
            icon: FileText
        },
        {
            title: "Microbial Growth Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Microbial-Growth-Models.webp",
            description: "Models of microorganisms' growth are very important in helping to maintain safe and high-quality food products. Predictive models of the growth of microorganisms (the logistic growth model) are used to determine the possibilities for the growth, survival and inactivation of microorganisms due to various environmental conditions and are used to assist in hazard analysis as well as in risk assessment.",
            icon: Database
        },
        {
            title: "Drying Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Drying-Models.webp",
            description: "Moisture is an important aspect of drying food products, and drying models provide a way to understand how moisture is removed from food products. Thin-layer and diffusion drying models help optimise drying processes while maintaining the texture and nutritional value of the finished product.",
            icon: AlertTriangle
        },
        {
            title: "Rheological Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Rheological-Models.webp",
            description: "Rheological models are used to characterise the flow and deformation of food materials. The models are often used in the processing of liquid and semi-solid food products, where control of viscosity, texture, and consistency of food products is required.",
            icon: Layers
        },
        {
            title: "Computational Fluid Dynamics (CFD) Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Computational-Fluid-Dynamics-CFD-Models.webp",
            description: "Computational Fluid Dynamics (CFD) models are sophisticated computer models used in the analysis of fluid flow, heat transfer, and mass transfer in food processing operations.",
            icon: Cpu
        },
        {
            title: "Process Optimisation Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Process-Optimisation-Models.webp",
            description: "Response Surface Methodology (RSM) and Artificial Neural Networks (ANN) are optimisation models that are used in determining the processing conditions. These models increase efficiency, reduce costs, and improve the quality of products.",
            icon: BarChart3
        },
        {
            title: "Packaging and Shelf Life Models",
            iconSrc: "/images/subject-matter-experts/food-processing/Packaging-and-Shelf-Life-Models.webp",
            description: "These models are used in predicting the stability of the product under various storage conditions. The models are important in the development of an effective packaging system.",
            icon: PenTool
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
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileText,
        },
        {
            title: "Artwork Editing",
            desc: "Professional visuals for your figures, tables, and graphical abstracts",
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
                title="Food Processing"
                description="Expert guidance for food processing research, writing, and journal submission, advancing innovation in nutrition, safety, and food technology."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Advancing Food Processing Research Through Expert Editing, Writing & Publication Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
                                    <Image
                                        src="/images/subject-matter-experts/food-processing/Food-Processing.webp"
                                        alt="Food processing research visualization"
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
                                        Food processing is essential for improving food quality and safety as well as extending the life of the food via the use of scientific methods. The processing technologies used in the food industry continue to grow and develop. It is important to use new methods and models in the application of processing technology to provide additional insights into the understanding of the food processing process, as well as increase the efficiency of processing and the integrity of the final product while providing conformance to industry standards. At Pubrica, we have a team of experts who can provide you with the necessary assistance to apply food processing models in your research so that it is accurate, organised, and ready for publication.
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
                            The experts at Pubrica can aid with many of the main food processing models, making sure that all research/publication done meets the highest level of accuracy and scientific innovation. The staff have many years of experience in these modelling areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Expertise in Food Processing Research and Modelling"
                    description="Pubrica has a wealth of experience providing support to food processing research through its full range of services available to researchers, academics and companies/industries involved in this field. Their expertise helps to provide the necessary translation to take complex processing model information and provide an understandable and structured output that is ready for publication."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}