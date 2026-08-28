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

export default function DentistryPage() {
    const disciplines = [
        {
            title: "Oral and Maxillofacial Surgery",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-Pathology-and-Microbiology.png",
            description: "This branch focuses on surgical interventions involving the mouth, jaws, and facial structures. Our experts assist in preparing manuscripts and case reports on dental implants, trauma management, reconstructive surgery, orthognathic procedures, and oral pathology.",
            icon: Search
        },
        {
            title: "Prosthodontics",
            iconSrc: "/images/subject-matter-experts/dentistry/Prosthodontics.png",
            description: "It deals with the restoration and replacement of missing teeth and oral structures. Our specialists offer research and publication support for topics such as implant prosthodontics, maxillofacial prosthetics, occlusion analysis, and aesthetic rehabilitation.",
            icon: TrendingUp
        },
        {
            title: "Endodontics",
            iconSrc: "/images/subject-matter-experts/dentistry/Endodontics.png",
            description: "It involves the study and treatment of dental pulp and periradicular tissues. We support publications related to root canal therapy, pulp regeneration, periapical diseases, and advances in instrumentation and biomaterials.",
            icon: FileText
        },
        {
            title: "Periodontology",
            iconSrc: "/images/subject-matter-experts/dentistry/Periodontology.png",
            description: "Explores the prevention, diagnosis, and treatment of periodontal diseases and peri-implant conditions. We help researchers present novel findings on periodontal regeneration, host modulation therapy, and microbiome analysis.",
            icon: Database
        },
        {
            title: "Orthodontics and Dentofacial Orthopaedics",
            iconSrc: "/images/subject-matter-experts/dentistry/Orthodontics-and-Dentofacial-Orthopaedics.png",
            description: "This discipline focuses on the diagnosis and correction of malocclusion and craniofacial abnormalities. We provide publication assistance in digital orthodontics, clear aligner technology, 3D imaging, growth modification, and biomechanics.",
            icon: AlertTriangle
        },
        {
            title: "Paediatric and Preventive Dentistry",
            iconSrc: "/images/subject-matter-experts/dentistry/Paediatric-and-Preventive-Dentistry.png",
            description: "Our paediatric dentistry experts specialize in behavioural management, caries prevention, pulp therapy, and special care dentistry for children. We support research on preventive protocols, fluoride therapies, and minimally invasive paediatric interventions, ensuring ethical and methodological accuracy.",
            icon: BarChart3
        },
        {
            title: "Oral Medicine and Radiology",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-Medicine-and-Radiology.png",
            description: "This branch deals with the diagnosis and medical management of oral diseases and the interpretation of radiographic findings. Our support includes systematic reviews, case studies, and imaging-based research.",
            icon: FileSearch
        },
        {
            title: "Public Health in Dentistry",
            iconSrc: "/images/subject-matter-experts/dentistry/Public-Health-in-DentistrY.png",
            description: "It addresses oral health promotion and disease prevention at the community level. Our writers and statisticians assist in epidemiological research, health policy analysis, survey design, and systematic reviews.",
            icon: Layers
        },
        {
            title: "Oral Pathology and Microbiology",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-and-Maxillofacial-Surgery.png",
            description: "We support research in oral histopathology, molecular diagnostics, carcinogenesis, and biomarker discovery. Our experts provide analytical and editorial guidance for laboratory-based studies, emphasizing scientific rigor and reproducibility.",
            icon: Cpu
        }
    ];

    const services = [
        {
            title: "Research Services",
            description: "Expert guidance on project planning, execution, and data analysis.",
            image: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
            href: "/services/research-services"
        },
        {
            title: "Scientific Writing",
            description: "Crafting clear, precise, and publication-ready research manuscripts.",
            image: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
            href: "/services/research-services/scientific-writing/"
        },
        {
            title: "Data Collection for AI & ML",
            description: "Structured data gathering tailored for artificial intelligence and machine learning.",
            image: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
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
            title: "Literature Review and",
            description: "Identifying research gaps and providing comprehensive literature reviews.",
            image: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileSearch,
            href: "/services/research-services/literature-review-and-gap"
        },
        {
            title: "Systematic Reviews",
            description: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            image: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
            href: "/services/research-services/systematic-review"
        },
        {
            title: "Journal Submission",
            description: "Helping select the right journals and manage the submission process seamlessly.",
            image: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
            href: "/services/publication-support/journal-submission"
        },
        {
            title: "Journal Selection",
            description: "Strategic journal selection to maximize publication success.",
            image: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Search,
            href: "/services/publication-support/journal-selection"
        }
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <header className="bg-[#0e2723] text-white py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto border border-gray-400/30 py-5 px-6 sm:px-12 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                        Dentistry
                    </h1>
                    <p className="text-sm sm:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        Empowering dental researchers, clinicians, and academicians with end-to-end assistance, from study design to high-impact publication.
                    </p>
                </div>
            </header>

            {/* SECTION 2: Hero Intro Content */}
            <section className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content */}
                    <div className="lg:col-span-7 space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0e3b32] leading-snug">
                            Comprehensive Research, Writing, and Publication Support in Dentistry
                        </h2>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Dentistry is the branch of medicine that focuses on the study, diagnosis, prevention, and treatment of oral and maxillofacial diseases, disorders, and conditions. Beyond maintaining oral hygiene, dentistry plays a significant role in overall health, aesthetics, and systemic well-being. Modern dentistry research and publishing bridges biology, materials science, technology, and patient-centred care to deliver advanced therapeutic and diagnostic solutions.
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            Navigating the complexities of publishing impactful clinical dentistry research can be daunting, especially when it involves cutting-edge methodologies and advancements in dental and oral medicine. At Pubrica, we provide dentistry research support and dental publication services for researchers, academicians, clinicians, and dental institutions in conducting high-quality, evidence-based studies that meet global publication standards. Our multidisciplinary team of dental scientists, biostatisticians, and publication experts assists you throughout your research journey, from conceptualization and literature review to <Link href="/services/research-services/scientific-writing" className="text-[#2b6cb0] hover:underline">scientific writing</Link> in dentistry, <Link href="/services/publication-support/journal-selection" className="text-[#2b6cb0] hover:underline">journal selection</Link>, and publication.
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
                                src="/images/subject-matter-experts/dentistry/Comprehensive-Research-Writing-and-Publication-Support-in-Dentistry.webp"
                                alt="Dentistry clinical examination visual"
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
                            Our Core Disciplines In Dentistry
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, our team comprises dental professionals, researchers, and subject-matter experts with advanced degrees (PhD, DDS, or MDS) across all dental specialties. Our experts have decades of combined experience in clinical research, <Link href="/services/research-services/scientific-writing" className="text-[#2b6cb0] hover:underline">scientific writing</Link>, peer review, and dental journal publication support. Our key disciplines include:
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
                            Our Dentistry Research Support Services
                        </h2>
                        <div className="hidden sm:block h-[2px] w-24 bg-[#0e3b32] mt-1" />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        At Pubrica, we recognize that publishing in dental sciences involves more than just writing; it's about communicating complex findings with clarity, accuracy, and scholarly excellence. Our dental research and publication services are designed to empower dental researchers, clinicians, and academicians to produce world-class manuscripts that meet international publication standards.
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