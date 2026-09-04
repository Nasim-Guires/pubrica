"use client";
import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Stethoscope,
    Sparkles,
    Scissors,
    Baby,
    Microscope,
    ShieldAlert,
    Smartphone,
    Search,
    CheckCircle,
    BookOpen,
    PenTool,
    FileText,
    ChevronDown,
    ArrowRight,
    Send,
    BarChart2
} from 'lucide-react';
import HeroBanner from "@/components/common/HeroBanner";

export default function DermatologyPage() {
    const disciplines = [
        {
            title: "Clinical Dermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/Clinical-Dermatology.png",
            description: "Focused on diagnosing and managing skin, hair, and nail disorders such as psoriasis, eczema, acne, and dermatitis. Pubrica assists with clinical study design, case report development, and systematic reviews to advance dermatologic care.",
            icon: Stethoscope
        },
        {
            title: "Cosmetic Dermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/Cosmetic-Dermatology.png",
            description: "Encompassing aesthetic procedures including laser therapy, chemical peels, and anti-aging treatments. We support research manuscripts, white papers, and reviews that explore the safety, efficacy, and innovation of cosmetic interventions.",
            icon: Sparkles
        },
        {
            title: "Surgical Dermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/490.png",
            description: "Covering dermatologic surgeries such as excisions, Mohs micrographic surgery, and skin cancer management. Our team provides end-to-end writing and editing support for surgical case studies and clinical trials.",
            icon: Scissors
        },
        {
            title: "Pediatric Dermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/Pediatric-Dermatology.png",
            description: "Addressing skin diseases in infants and children, including genetic and infectious conditions. Pubrica aids in paediatric-focused research, protocol development, and journal submissions.",
            icon: Baby
        },
        {
            title: "Dermatopathology",
            iconSrc: "/images/subject-matter-experts/dermatology/Dermatopathology.png",
            description: "Integrating dermatology and pathology for microscopic diagnosis of skin diseases. Our subject-matter experts assist with manuscript preparation, image analysis, and histopathological data interpretation.",
            icon: Microscope
        },
        {
            title: "Immunodermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/Immunodermatology.png",
            description: "Exploring autoimmune and inflammatory skin disorders such as lupus erythematosus, pemphigus, and dermatitis herpetiformis. Pubrica supports original research and review articles in immunopathogenesis and novel therapies.",
            icon: ShieldAlert
        },
        {
            title: "Teledermatology & Digital Dermatology",
            iconSrc: "/images/subject-matter-experts/dermatology/Teledermatology-Digital-Dermatology.png",
            description: "Advancing the use of AI, imaging, and remote diagnostics in dermatology. We help authors publish cutting-edge work in digital dermatology innovations.",
            icon: Smartphone
        }
    ];

    const services = [
        {
            title: "Medical Writing",
            description: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool
        },
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send
        },
        {
            title: "Journal Formatting",
            description: "Tailored manuscript formatting to meet specific journal guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen
        },
        {
            title: "Graphical Abstract",
            description: "Engaging summaries of your research in a single, informative graphic.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText
        },
        {
            title: "Statistical Analysis",
            description: "Rigorous quantitative and biostatistical analysis tailored for clinical trials and study data.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BarChart2
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart2
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Dermatology"
                description="Comprehensive research, publication, and editing support for dermatology scholars, clinicians, and healthcare professionals, advancing skin health through science and innovative care."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Dermatology Research and Innovation through Expert Guidance and Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Navigating the complexities of publishing impactful research in dermatology can be challenging, especially when it involves cutting-edge methodologies and advancements in understanding skin health and diseases. Researchers and clinicians in this sector often face challenges in effectively communicating their findings and ensuring their work reaches the right audience with meaningful impact.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we recognize the critical role dermatology plays in improving human health and quality of life. Dermatology, the branch of medicine focused on the diagnosis, treatment, and prevention of skin, hair, and nail disorders, is constantly evolving with groundbreaking research and clinical innovations. Our services are designed to support researchers, clinicians, and industry professionals at every stage of their journey, from concept development and clinical study design to manuscript preparation, publication, and post-publication impact enhancement.
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
                                src="/images/subject-matter-experts/dermatology/Empowering-Dermatology-Research-and-Innovation-through-Expert-Guidance-and-Support.webp"
                                alt="Dermatology and skin healthcare research visual"
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
                            Our Core Disciplines In Dermatology
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive research and publication support across the diverse disciplines of dermatology. Our expertise spans clinical, cosmetic, surgical, and investigative dermatology, helping researchers, clinicians, and academicians publish impactful work in high-impact journals. Our Core Areas Include:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Dermatology Research and Publication?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica offers a full spectrum of dermatology research and publication services to ensure that your study achieves scientific rigor, clinical relevance, and publication success. Our experts collaborate with dermatology researchers across the globe, providing tailored solutions that meet the unique requirements of your project. We provide services such as:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <article
                                key={index}
                                className="relative h-[260px] rounded-lg overflow-hidden border border-gray-200 shadow-sm group cursor-pointer"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom Conclusion Text */}
                <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
                        Whether you are a researcher, clinician, or medical professional, Pubrica bridges the gap between dermatological research findings and clinical applications, supporting your publishing journey.
                    </p>
                </div>

            </section>

        </main>
    );
}