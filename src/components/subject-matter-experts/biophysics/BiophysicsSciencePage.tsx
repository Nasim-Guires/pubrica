import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BiophysicsSciencePage() {
    const disciplines = [
        {
            title: "Molecular Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Molecular-Biophysics.webp",
            description: "Focuses on the physical principles underlying biomolecular structures and interactions. Techniques such as X-ray crystallography, nuclear magnetic resonance (NMR) spectroscopy, and cryo-electron microscopy allow researchers to explore protein folding, ligand binding, and molecular dynamics in unprecedented detail.",
            icon: (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            )
        },
        {
            title: "Cellular Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Cellular-Biophysics.webp",
            description: "Investigates the mechanical, electrical, and biochemical properties of cells. This discipline helps elucidate cellular processes such as signalling pathways, membrane transport, and cytoskeletal dynamics, providing critical insights for understanding diseases like cancer and neurodegeneration.",
            icon: (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            title: "Structural Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Structural-Biophysics.webp",
            description: "Examines the three-dimensional architecture of biomolecules. Understanding molecular structures at atomic resolution enables rational drug design, enzyme engineering, and the development of targeted therapies.",
            icon: (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            )
        },
        {
            title: "Computational Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Computational-Biophysics.webp",
            description: "Utilizes computational models and simulations to predict biomolecular behaviour, study complex biological networks, and analyze large datasets from experiments. Molecular dynamics simulations, Monte Carlo methods, and bioinformatics tools are central to this domain.",
            icon: (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28 2.28 5.941" />
                </svg>
            )
        },
        {
            title: "Medical Biophysics",
            iconSrc: "/images/subject-matter-experts/biophysics/Medical-Biophysics.webp",
            description: "Applies biophysical principles to medical diagnostics and therapeutics. Techniques such as medical imaging (MRI, CT, PET) and radiation therapy benefit from biophysical analyses to improve disease detection and patient care.",
            icon: (
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
            )
        },
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
         {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/agriculture/Journal-Submission.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            )
        },
         {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/material-science/Systematic-Reviews.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m0 0l3.03-2.496a2.25 2.25 0 01.766-1.208" />
                </svg>
            )
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.06 9.06 0 0112 15a9.06 9.06 0 01-6.23.693L4.2 15.3m15.6 0L21 21M4.2 15.3L3 21" />
                </svg>
            )
        },
       
        
        {
            title: "Original Research Article",
            description: "End-to-end writing, statistical analysis, and formatting tailored to journal-specific guidelines.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
        {
            title: "Literature Review and Gap Analysis",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Literature-Review-and-Gap-Analysis-image-1.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
            )
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
                </svg>
            )
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#1C2C2E] text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-500/50 py-10 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Biophysics
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Pubrica provides expert support for biophysics research and publication, helping scientists transform complex discoveries into high-impact publications.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-5">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] leading-snug">
                            Biophysics – Bridging Biology and Physics for Breakthrough Scientific Innovation
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biophysics is a rapidly growing interdisciplinary field that bridges the gap between biology, physics, chemistry, engineering, mathematics, and computational sciences. By analysing biological systems through the lens of physical principles, biophysics helps researchers understand the structure, dynamics, and mechanisms of living organisms at molecular, cellular, and systemic levels. From protein folding and DNA mechanics to neural signalling and biomedical instrumentation, biophysics drives modern scientific discovery and medical innovation.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we understand that the complexities of biophysical research demand clarity, precision, and scientifically rigorous presentation. Our services are designed to support students, researchers, healthcare practitioners, and{" "}
                            <Link href="#" className="text-sky-600 hover:underline">
                                academic institutions
                            </Link>{" "}
                            in producing impactful publications and research outputs that meet the highest global editorial standards. With a team of{" "}
                            <Link href="#" className="text-sky-600 hover:underline">
                                subject-matter experts
                            </Link>
                            , professional editors, and research specialists, Pubrica delivers end-to-end support throughout the research cycle, from proposal development to{" "}
                            <Link href="#" className="text-sky-600 hover:underline">
                                journal submission
                            </Link>
                            .
                        </p>
                        <div className="pt-2">
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
                                src="/images/subject-matter-experts/biophysics/Biophysics.webp"
                                alt="Material Science Research Laboratory"
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] mb-4">
                            Our Core Disciplines In Biomonitoring
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biomonitoring integrates multiple scientific disciplines, drawing from biology, toxicology, environmental science, public health, and analytical chemistry. These interconnected fields ensure a comprehensive understanding of how pollutants or toxic agents influence biological systems. Our biomonitoring expertise spans the following core areas:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B]">
                            Our Expertise in Material Science Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0F393B] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        As a trusted global research partner, Pubrica delivers structured scientific support tailored to researchers at all stages, from concept development to final publication. Our team includes experienced scientists, PhDs,{" "}
                        <Link href="#" className="text-sky-600 hover:underline">
                            subject matter experts
                        </Link>
                        , and publication strategists with deep domain expertise in material science, nanotechnology, chemical engineering, and applied physics. Our services include:
                    </p>
                </div>

                {/* 4x2 Responsive Card Grid with Hover Slide Overlay Effect */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
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

                            {/* Bottom White Overlay Card (Slides up on Hover) */}
                            <div className="absolute inset-x-0 bottom-0 bg-white border-t border-gray-100 p-4 transition-transform duration-300 ease-in-out transform translate-y-[calc(100%-4rem)] group-hover:translate-y-0 shadow-lg flex flex-col items-center text-center">

                                {/* Floating Circle Icon */}
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center shrink-0">
                                    {service.icon}
                                </div>

                                {/* Card Title */}
                                <h3 className="text-sm font-bold text-[#0F393B] mt-4 mb-2">
                                    {service.title}
                                </h3>

                                {/* Hidden Description (Appears on Hover) */}
                                <p className="text-gray-600 text-[11px] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    {service.description}
                                </p>

                            </div>
                        </article>
                    ))}
                </div>

            </section>

        </main>
    );
}