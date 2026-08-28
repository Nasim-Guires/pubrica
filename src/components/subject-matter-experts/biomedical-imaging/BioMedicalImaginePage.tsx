import SmeCoreAreasGrid from "@/components/subject-matter-experts/SmeCoreAreasGrid";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BioMedicalImaginePage() {
    const disciplines = [
        {
            title: "X-ray Imaging",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/X-ray-Imaging.webp",
            description: "It is one of the oldest and most widely used diagnostic tools. It utilizes ionizing radiation to produce images of bones and certain tissues. Innovations such as digital radiography and computed tomography (CT) have significantly improved image quality, reduced exposure, and expanded clinical applications.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9l6 6m0-6l-6 6" />
                </svg>
            )
        },
        {
            title: "Computed Tomography (CT)",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/Computed-Tomography-CT.webp",
            description: "CT combines multiple X-ray images taken from different angles to produce cross-sectional views of the body. This technique allows precise visualization of internal organs, blood vessels, and skeletal structures. Modern CT imaging is critical for trauma assessment, cancer detection, and cardiovascular evaluations.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Magnetic Resonance Imaging (MRI)",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/Magnetic-Resonance-Imaging-MRI-1.webp",
            description: "MRI employs powerful magnetic fields and radio waves to generate detailed images of soft tissues. Unlike X-rays, MRI does not involve ionizing radiation, making it safe for repeated use. MRI is particularly valuable in neurological studies, musculoskeletal assessments, and cardiac imaging.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Ultrasound Imaging",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/Ultrasound-Imaging-1.webp",
            description: "Ultrasound uses high-frequency sound waves to create real-time images of organs and tissues. It is non-invasive, portable, and widely used in obstetrics, cardiology, and abdominal diagnostics. Advanced techniques like Doppler ultrasound can visualize blood flow and vascular health.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.352 3.612a3 3 0 00-3.32 2.76A10.037 10.037 0 003.04 12c0 5.523 4.477 10 10 10 2.457 0 4.71-.885 6.45-2.355M16.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
            )
        },
        {
            title: "Nuclear Medicine and PET Imaging",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/Nuclear-Medicine-and-PET-Imaging.webp",
            description: "Nuclear imaging involves the use of radioactive tracers to evaluate physiological processes. Positron Emission Tomography (PET) and Single Photon Emission Computed Tomography (SPECT) provide functional insights into metabolism, organ function, and disease activity, complementing structural imaging methods.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.6 15.12a2 2 0 00-1.022.547l-1.373 1.373a2 2 0 00-.547 1.022l-.12.602a2 2 0 001.99 2.387h15.084a2 2 0 001.99-2.387l-.12-.602a2 2 0 00-.547-1.022l-1.373-1.373zM12 3v9" />
                </svg>
            )
        },
        {
            title: "Optical Imaging",
            iconSrc: "/images/subject-matter-experts/biomedical-imaging/Optical-Imaging.webp",
            description: "Optical imaging techniques, including fluorescence and bioluminescence imaging, are predominantly used in research and preclinical studies. They enable the visualization of cellular and molecular processes in real-time, advancing our understanding of disease mechanisms.",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L12 6.75l5.571 3m0 0l4.179-2.25L17.571 6.75m0 5.25l4.179 2.25-4.179 2.25m0-4.5l-5.571 3-5.571-3m11.142 0L12 17.25l-5.571-3" />
                </svg>
            )
        }
    ];

    const services = [
        {
            title: "Editing & Proofreading",
            description: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Scientific-Writing.webp",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
            )
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m0 0l3.03-2.496a2.25 2.25 0 01.766-1.208" />
                </svg>
            )
        },
        {
            title: "Publication Support",
            description: "Complete support for publishing in high-impact journals, translating concepts into incisive reports.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.06 9.06 0 0112 15a9.06 9.06 0 01-6.23.693L4.2 15.3m15.6 0L21 21M4.2 15.3L3 21" />
                </svg>
            )
        },
        {
            title: "Case Report Writing",
            description: "Assistance in drafting and editing case reports for rare diseases.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: (
                <svg className="w-6 h-6 text-[#0F393B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            )
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#1C2C2E] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-500/50 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Biomedical Imaging
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Biomedical Imaging utilizes advanced technologies to visualize and analyze the internal structures and functions of the human body, aiding in medical diagnosis and treatment.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] leading-snug">
                            Biomedical Imaging Solutions for Advanced Research &amp; Clinical Innovation
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biomedical imaging is one of the most transformative pillars of modern healthcare and life sciences. By enabling the non-invasive visualization of internal organs, tissues, cells, and biological processes, biomedical imaging serves as a bridge between clinical medicine, engineering, physics, and computational sciences. From early disease detection to complex physiological assessments and advanced therapeutic planning, biomedical imaging technologies continue to redefine the standards of precision, accuracy, and patient-centred care.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            At Pubrica, we provide comprehensive biomedical imaging solutions that empower researchers, clinicians, pharmaceutical companies, and academic institutions to generate high-quality, publication-ready data. Our advanced medical imaging services are designed to enhance the clarity, precision, and scientific integrity of your imaging research, ensuring that your findings meet the highest global standards. Biomedical imaging provides crucial support to healthcare and research by:
                        </p>

                        {/* List Section */}
                        <div className="space-y-2 pt-2">
                            <h3 className="text-base font-bold text-[#0F393B]">
                                Our Expertise in Animal Science Includes
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#C4161C] font-bold">→</span>
                                    <span>Detecting disease at early stages</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#C4161C] font-bold">→</span>
                                    <span>Guiding clinicians in selecting optimal treatment strategies</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#C4161C] font-bold">→</span>
                                    <span>Measuring progress and treatment response</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#C4161C] font-bold">→</span>
                                    <span>Understanding structural and physiological abnormalities</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-[#C4161C] font-bold">→</span>
                                    <span>Supporting research discoveries and scientific publications</span>
                                </li>
                            </ul>
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
                                src="/images/subject-matter-experts/biomedical-imaging/Biomedical-Imaging.webp"
                                alt="Doctor inspecting medical scan"
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
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B] mb-4">
                           Our Core Modalities in Biomedical Imaging
                        </h2>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Biomedical imaging has revolutionized modern medicine by providing clinicians and researchers with non-invasive techniques to visualize the structure and function of the human body. These imaging modalities are fundamental in diagnostics, treatment planning, monitoring, and clinical imaging support, making them central to diagnostic imaging research.
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid with Hover Slide Overlay (3 Cards per Row) */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <div className="text-center max-w-4xl mx-auto mb-12">
                    <div className="flex items-center justify-center gap-4 mb-3">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F393B]">
                           Our Expertise in Biomedical Imaging Research and Publication
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0F393B] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we specialize in advancing biomedical imaging research by offering comprehensive support across all stages of study design, data interpretation, and scholarly publication. Our team of experts combines scientific rigor with technical proficiency to ensure that your research is presented clearly, accurately, and in alignment with the highest standards of the field.{" "}
                        <Link href="/subject-matter-experts" className="text-sky-600 hover:underline">
                            subject matter experts
                        </Link>
                        , and publication strategists with deep domain expertise in material science, nanotechnology, chemical engineering, and applied physics. Our services include:
                    </p>
                </div>

                {/* 3 Cards Per Row Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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