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
            href: "/services/medical-data-collection",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: BookOpen,
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
                title="Medical Animation"
                description="Medical Animation explores three-dimensional representations of complex Health Care topics to make them easier for people to understand. The use of Medical Animation will improve patient Education, Medical Training, and Research Presentations by providing Visual Representations that can help people better comprehend the importance of Health Care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Research Excellence in Medical Animation through Expert Guidance
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto bg-[#a3c9bd]/30">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Medical Animation is a field that utilises three-dimensional visual representation of complex healthcare and medical concepts, procedures, and or treatments. At Pubrica, we provide support for health care professionals, researchers, educators and others who create and produce animated media for use in <Link className="text-blue-600" href="/services/patient-education-content/"> patient education</Link>, medical training and research presentation materials.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Our team of highly skilled professionals (animators, medical scientists and researchers) will provide complete assistance to ensure your animation meets the highest scientific, educational and ethical standards throughout the world, through institutions and platforms.
                                    </p>

                                    {/* Bullet Points */}
                                    <div className="space-y-2 pt-2">
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Three-dimensional representations of medical ideas, therapies, and surgical practices.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Custom Animated Solutions will address specific research and or medical specialties.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Enhanced User Engagement using Interactive and Visually Engaging Material.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Animations produced in accordance with Ethical and Regulatory Standards established by Global Medical Journals, Institutions and Platforms.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>The production of high-quality animated material for educating patients, medical professionals and researchers through audiovisual methods.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Collaborative Development Process for End-To-End Solutions through partnership with medical scientists, animators, and education-focused professionals.</span>
                                        </div>
                                        <div className="flex items-start space-x-2 text-base text-slate-700">
                                            <span className="text-[#C4161C] font-bold">→</span>
                                            <span>Animations achieved by using scientifically accurate methodologies will fulfil both Clinical Standards and Educational Requirements.</span>
                                        </div>
                                    </div>

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

                <CommonExpertiseCards
                    title="Why Choose Pubrica for Medical Animation Research and Publishing?"
                    description="Pubrica offers top-tier medical animation services, blending scientific expertise with cutting-edge technology. Whether you're in research, healthcare, or education, our custom animations help clarify and enhance your work, ensuring it meets all regulatory and educational requirements."
                    cards={expertiseCards}
                />

                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-left max-w-5xl mt-2">
                    Whether you are a researcher, student, or professional, Pubrica bridges the gap between research findings and practical applications, supporting your journey in Medical Animation.
                </p>

            </section>

        </main>
    );
}