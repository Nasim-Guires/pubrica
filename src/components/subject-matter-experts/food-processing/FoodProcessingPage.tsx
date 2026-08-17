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
    Cpu
} from 'lucide-react';

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
            iconSrc: "/images/subject-matter-experts/food-processing/Mass-Transfer-Models.webp",
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
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileText,
            href: "/services/editing-and-translation"
        },
        {
            title: "Artwork Editing",
            description: "Professional visuals for your figures, tables, and graphical abstracts",
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
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Food Processing
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Expert guidance for food processing research, writing, and journal submission, advancing innovation in nutrition, safety, and food technology.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Advancing Food Processing Research Through Expert Editing, Writing & Publication Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Food processing is essential for improving food quality and safety as well as extending the life of the food via the use of scientific methods. The processing technologies used in the food industry continue to grow and develop. It is important to use new methods and models in the application of processing technology to provide additional insights into the understanding of the food processing process, as well as increase the efficiency of processing and the integrity of the final product while providing conformance to industry standards. At Pubrica, we have a team of experts who can provide you with the necessary assistance to apply food processing models in your research so that it is accurate, organised, and ready for publication.
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
                                src="/images/subject-matter-experts/food-processing/Food-Processing.webp"
                                alt="Food processing research visualization"
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
                            Our Core Disciplines In Food Science
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            The experts at Pubrica can aid with many of the main food processing models, making sure that all research/publication done meets the highest level of accuracy and scientific innovation. The staff have many years of experience in these modelling areas:
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
                                                {"iconSrc" in item && (item as { iconSrc?: string }).iconSrc ? (
                                                <span className="relative w-6 h-6 shrink-0">
                                                    <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" fill className="object-contain" />
                                                </span>
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

            {/* SECTION 4: Expertise Grid */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Our Expertise in Food Processing Research and Modelling
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica has a wealth of experience providing support to food processing research through its full range of services available to researchers, academics and companies/industries involved in this field. Their expertise helps to provide the necessary translation to take complex processing model information and provide an understandable and structured output that is ready for publication.
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