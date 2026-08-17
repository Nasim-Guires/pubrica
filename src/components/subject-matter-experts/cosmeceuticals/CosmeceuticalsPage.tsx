"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FlaskConical,
    Sparkles,
    Dna,
    Activity,
    ShieldCheck,
    CheckCircle2,
    Microscope,
    FileText,
    Database,
    PenTool,
    Wrench,
    FileSpreadsheet,
    BookMarked,
    ChevronDown
} from 'lucide-react';

export default function CosmeceuticalsPage() {
    const disciplines = [
        {
            title: "Cosmeceutical Formulation Science",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Cosmeceutical-Formulation-Science.webp",
            description: "The development and optimization of stable, effective, and safe skincare formulations.",
            icon: FlaskConical
        },
        {
            title: "Dermatological Science & Skin Biology",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Dermatological-Science-Skin-Biology.webp",
            description: "The purpose of this project is to provide an overview of research into how the skin is formed and its function, how it changes in appearance, and how diseases develop in the body through time.",
            icon: Dna
        },
        {
            title: "Active Ingredients & Bioactive",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Active-Ingredients-Bioactive.webp",
            description: "Investigation of Peptides, Antioxidants, Botanicals, Growth Factors, and Novel Compounds.",
            icon: Sparkles
        },
        {
            title: "Clinical Evaluation & Efficacy Studies",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Clinical-Evaluation-Efficacy-Studies-1.webp",
            description: "In Vitro, In Vivo, and Clinical Studies Establishing the Efficacy of a Cosmeceutical Product.",
            icon: Activity
        },
        {
            title: "Regulatory Affairs & Product Compliance",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Regulatory-Affairs-Product-Compliance.webp",
            description: "Guidance on Global Cosmetic Regulatory Requirements and Safety Evaluation Procedures, as well as Making Valid Product Claims.",
            icon: ShieldCheck
        },
        {
            title: "Quality Control & Safety Assessment",
            iconSrc: "/images/subject-matter-experts/cosmeceuticals/Quality-Control-Safety-Assessment.webp",
            description: "Perform Toxicity Studies, Conduct Stability Testing, and Ensure Product Quality.",
            icon: CheckCircle2
        },
        {
            title: "Cosmetic Biotechnology",
            iconSrc: "/images/subject-matter-experts/animal-science/Biotechnology-and-Emerging-Technologies.png",
            description: "Using Biotechnology to Develop New Ingredients and Produce Cosmetic Products in a Sustainable Manner.",
            icon: Microscope
        }
    ];

    const services = [
        {
            title: "Editing & Proofreading",
            description: "As a result of improved wording and sentence structure, scientific clarity and precise use of language will help improve how readers view and understand professional documents related to cosmeceutical products.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: FileText
        },
        {
            title: "Data Collection for AI & ML",
            description: "Collect, organize, and store structured and curated datasets to facilitate the use of artificial intelligence (AI) and machine learning (ML) for skin research, ingredient discovery, and formulation optimization.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Database
        },
        {
            title: "Grant Writing",
            description: "Use persuasive writing skills to develop research proposals that aim to gain funders’ support for new products in the cosmeceuticals market as well as.",
            image: "/images/subject-matter-experts/biotechnology/Grant-writing-.webp",
            icon: PenTool
        },
        {
            title: "Artwork Editing",
            description: "Create high-quality scientific figures, diagrams of formulations, illustrations of the biology of the skin, and graphical abstracts that will meet publication standards.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: Wrench
        },
        {
            title: "Journal Formatting",
            description: "Format your manuscript following the guidelines of both your selected journal and the regulations of any government agencies that require submission of your manuscript before publication.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileSpreadsheet
        },
        {
            title: "Journal Selection",
            description: "Identify the most appropriate journals in the areas of dermatology, cosmetic science, and cosmeceuticals that will maximize publication rates and provide the highest potential for earning a high impact factor.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: BookMarked
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Cosmeceutical
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        A cosmeceutical is a science backed skincare product that combines cosmetic benefits with therapeutic, skin improving effects.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Empowering Research Excellence in Cosmeceutical through Expert Guidance and Support
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Cosmeceuticals are an interdisciplinary collaboration between dermatologists, chemists, biotechnologists, and <Link href="/services/pharmaceutical-science" className="text-blue-600 hover:underline">pharmaceutical scientists</Link> that are leading the charge for how we view skin care, personal care, and aesthetics. Cosmeceuticals demonstrate the combination of looking good with treating skin problems like aging, pigmentation issues, acne, and improving barriers to purchase. New developments are being made in all areas of development; for example, developing actives, building formulations, understanding how skin grows, shaping the formulation of the product, verifying how well it works in a clinic, and taking scientific findings and turning them into skincare products that are state-of-the-art.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            There are now numerous <Link href="/services/cosmeceutical-products" className="text-blue-600 hover:underline">cosmeceutical products</Link> created worldwide containing bioactive, peptides, antioxidants, and growth factors for clinical and consumer skincare that treat skin health. New technologies used in formulation have been instrumental in the movement to use targeted delivery methods, improved stability, better performance, safety, and measurable results in skincare product development.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide researchers, scholars, and members of the cosmeceutical industry with the guidance, support, and research assistance necessary to promote and facilitate success in the development of cosmeceuticals.
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
                        <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden shadow-lg border-4 border-white bg-[#0e2723]">
                            <Image
                                src="/images/subject-matter-experts/cosmeceuticals/Transforming-Ideas-into-Market-Ready-Cosmeceutical-Innovations.webp"
                                alt="Cosmeceutical Laboratory Research"
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
                            Our Core Disciplines In Cosmeceutical
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Pubrica aids all types of cosmeceutical-related research and development. These include all areas of pure and applied <Link href="/services/scientific-research" className="text-blue-600 hover:underline">scientific research</Link> related to cosmeceuticals.
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
                                                <Image src={(item as { iconSrc?: string }).iconSrc!} alt="" width={24} height={24} className="object-contain w-6 h-6 shrink-0" />
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

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32]">
                            Why Choose Pubrica for Cosmeceutical Research and Publishing?
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        Pubrica is recognized as a reliable partner in providing cosmeceutical research and <Link href="/services/publishing-services" className="text-blue-600 hover:underline">publishing services</Link>. Our wide range of services allows us to assist researchers, formulators, clinicians, and other industry stakeholders with all aspects associated with their scientific endeavours. From <Link href="/services/preparing-manuscripts" className="text-blue-600 hover:underline">preparing manuscripts</Link>, compiling regulatory submission documents, <Link href="/services/selecting-journals" className="text-blue-600 hover:underline">selecting journals</Link>, and developing a publishing strategy, we help cosmeceutical innovators clearly, credibly, and effectively share their research:
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Bottom White Overlay Card (Slides up on Hover) */}
                                <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                    {/* Floating Circle Icon */}
                                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0 text-[#0e3b32]">
                                        <IconComponent className="w-5 h-5" />
                                    </div>

                                    {/* Card Title */}
                                    <h3 className="text-sm font-bold text-[#0e3b32] mt-4 mb-2">
                                        {service.title}
                                    </h3>

                                    {/* Hidden Description (Appears on Hover) */}
                                    <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        {service.description}
                                    </p>

                                </div>
                            </article>
                        );
                    })}
                </div>

            </section>

        </main>
    );
}