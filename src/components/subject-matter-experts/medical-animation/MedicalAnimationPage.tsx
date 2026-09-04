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

export default function MedicalAnimationPage() {
    const disciplines = [
        {
            title: "Genetics & Heredity",
            iconSrc: "/images/subject-matter-experts/medical-animation/Genetics-Heredity.webp",
            description: "Understanding human genetics and how traits are inherited helps to visualise genetic conditions, how gene therapy works, and how to create a personalised medicine plan. Medical animation can help to visualise how genes are affected by mutations, how to alter genes using CRISPR technology, and how traits are passed from parent to child, amongst other things.",
            icon: Search
        },
        {
            title: "Human Nutrition & Metabolism",
            iconSrc: "/images/subject-matter-experts/medical-animation/Human-Nutrition-Metabolism.webp",
            description: "Medical animations can show how the body utilizes the food that it consumes, what nutrients contribute to a person's growth and immune response, and how a person's dietary choices impact their overall health. Medical animations may include visualisation of metabolic processes, absorption of nutrients, and metabolic pathway differences between carbohydrates, proteins and fats.",
            icon: TrendingUp
        },
        {
            title: "Medical Physiology and Health Management",
            iconSrc: "/images/subject-matter-experts/medical-animation/Medical-Physiology-and-Health-Management.webp",
            description: "Human anatomy and physiology as well as how a person maintain his/her health can be represented by using animations. There are also animations that show the human body's systems, such as the circulatory system, the respiratory system, and the immune system, and the medical treatments available to them and how the body responds to disease or injury.",
            icon: FileText
        },
        {
            title: "Medical Procedures and Interventions",
            iconSrc: "/images/subject-matter-experts/medical-animation/Medical-Procedures-and-Interventions.webp",
            description: "Animation is used to explain complicated medical procedures and interventions in an easy-to-follow, visual format. Whether a medical procedure involves performing surgery or performing non-invasive techniques, animations can visually depict procedures step-by-step, helping to improve a patient’s and a physician’s understanding of the procedures and the outcomes.",
            icon: Database
        },
        {
            title: "Pharmacology and Drug Action",
            iconSrc: "/images/subject-matter-experts/medical-animation/Pharmacology-and-Drug-Action.webp",
            description: "Medical animations can show how drugs interact with the body at the molecular level, including the mechanism of action, absorption, distribution, metabolism, and elimination of pharmaceuticals.",
            icon: ShieldAlert
        },
        {
            title: "Disease Mechanisms and Pathophysiology",
            iconSrc: "/images/subject-matter-experts/medical-animation/Disease-Mechanisms-and-Pathophysiology.webp",
            description: "Animations can represent how diseases progress within the body, highlighting cellular damage, immune responses, and the effects of disease on organs and systems. This aids in the understanding of chronic conditions, infections, and cancer development.",
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
            icon: Cpu,
            href: "/services/medical-data-collection"
        },
        {
            title: "Translation Services",
            description: "Accurate scientific translations to broaden the reach of your research.",
            image: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: BookOpen,
            href: "/services/editing-and-translation"
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
                title="Medical Animation"
                description="Medical Animation explores three-dimensional representations of complex Health Care topics to make them easier for people to understand. The use of Medical Animation will improve patient Education, Medical Training, and Research Presentations by providing Visual Representations that can help people better comprehend the importance of Health Care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Medical Animation through Expert Guidance
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Medical Animation is a field that utilises three-dimensional visual representation of complex healthcare and medical concepts, procedures, and or treatments. At Pubrica, we provide support for health care professionals, researchers, educators and others who create and produce animated media for use in patient education, medical training and research presentation materials.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Our team of highly skilled professionals (animators, medical scientists and researchers) will provide complete assistance to ensure your animation meets the highest scientific, educational and ethical standards throughout the world, through institutions and platforms.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-2 pt-2">
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Three-dimensional representations of medical ideas, therapies, and surgical practices.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Custom Animated Solutions will address specific research and or medical specialties.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Enhanced User Engagement using Interactive and Visually Engaging Material.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Animations produced in accordance with Ethical and Regulatory Standards established by Global Medical Journals, Institutions and Platforms.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>The production of high-quality animated material for educating patients, medical professionals and researchers through audiovisual methods.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Collaborative Development Process for End-To-End Solutions through partnership with medical scientists, animators, and education-focused professionals.</span>
                            </div>
                            <div className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-[#C4161C] font-bold">→</span>
                                <span>Animations achieved by using scientifically accurate methodologies will fulfil both Clinical Standards and Educational Requirements.</span>
                            </div>
                        </div>

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
                                src="/images/subject-matter-experts/medical-animation/Empowering-Research-Excellence-in-Medical-Animation-through-Expert-Guidance.webp"
                                alt="Medical Animation research visualization"
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
                            Core Disciplines In Medical Animation
                        </h2>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Medical Animation Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica offers top-tier medical animation services, blending scientific expertise with cutting-edge technology. Whether you're in research, healthcare, or education, our custom animations help clarify and enhance your work, ensuring it meets all regulatory and educational requirements.
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

                <div className="mt-12 text-center">
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        Whether you are a researcher, student, or professional, Pubrica bridges the gap between research findings and practical applications, supporting your journey in Medical Animation.
                    </p>
                </div>

            </section>

        </main>
    );
}