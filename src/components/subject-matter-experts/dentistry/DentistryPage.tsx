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

export default function DentistryPage() {
    const disciplines = [
        {
            title: "Oral and Maxillofacial Surgery",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-Pathology-and-Microbiology.png",
            description: (
                <>
                    This branch focuses on surgical interventions involving the mouth, jaws, and facial structures. Our experts assist in preparing manuscripts and{" "}
                    <Link href="/services/physician-writing-services/case-report/" className="text-blue-600">
                        case reports
                    </Link>{" "}
                    on dental implants, trauma management, reconstructive surgery, orthognathic procedures, and oral pathology.
                </>
            ),
            icon: Search,
        },
        {
            title: "Prosthodontics",
            iconSrc: "/images/subject-matter-experts/dentistry/Prosthodontics.png",
            description: (
                <>
                    It deals with the restoration and replacement of missing teeth and oral structures. Our specialists offer research and{" "}
                    <Link href="/services/publishing-support/" className="text-blue-600">
                        publication support
                    </Link>{" "}
                    for topics such as implant prosthodontics, maxillofacial prosthetics, occlusion analysis, and aesthetic rehabilitation.
                </>
            ),
            icon: TrendingUp,
        },
        {
            title: "Endodontics",
            iconSrc: "/images/subject-matter-experts/dentistry/Endodontics.png",
            description: "It involves the study and treatment of dental pulp and periradicular tissues. We support publications related to root canal therapy, pulp regeneration, periapical diseases, and advances in instrumentation and biomaterials.",
            icon: FileText,
        },
        {
            title: "Periodontology",
            iconSrc: "/images/subject-matter-experts/dentistry/Periodontology.png",
            description: "Explores the prevention, diagnosis, and treatment of periodontal diseases and peri-implant conditions. We help researchers present novel findings on periodontal regeneration, host modulation therapy, and microbiome analysis.",
            icon: Database,
        },
        {
            title: "Orthodontics and Dentofacial Orthopaedics",
            iconSrc: "/images/subject-matter-experts/dentistry/Orthodontics-and-Dentofacial-Orthopaedics.png",
            description: "This discipline focuses on the diagnosis and correction of malocclusion and craniofacial abnormalities. We provide publication assistance in digital orthodontics, clear aligner technology, 3D imaging, growth modification, and biomechanics.",
            icon: AlertTriangle,
        },
        {
            title: "Paediatric and Preventive Dentistry",
            iconSrc: "/images/subject-matter-experts/dentistry/Paediatric-and-Preventive-Dentistry.png",
            description: "Our paediatric dentistry experts specialize in behavioural management, caries prevention, pulp therapy, and special care dentistry for children. We support research on preventive protocols, fluoride therapies, and minimally invasive paediatric interventions, ensuring ethical and methodological accuracy.",
            icon: BarChart3,
        },
        {
            title: "Oral Medicine and Radiology",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-Medicine-and-Radiology.png",
            description: (
                <>
                    This branch deals with the diagnosis and medical management of oral diseases and the interpretation of radiographic findings. Our support includes{" "}
                    <Link href="/services/research-services/systematic-review/" className="text-blue-600 ">
                        systematic reviews
                    </Link>
                    , case studies, and imaging-based research.
                </>
            ),
            icon: FileSearch,
        },
        {
            title: "Public Health in Dentistry",
            iconSrc: "/images/subject-matter-experts/dentistry/Public-Health-in-DentistrY.png",
            description: "It addresses oral health promotion and disease prevention at the community level. Our writers and statisticians assist in epidemiological research, health policy analysis, survey design, and systematic reviews.",
            icon: Layers,
        },
        {
            title: "Oral Pathology and Microbiology",
            iconSrc: "/images/subject-matter-experts/dentistry/Oral-and-Maxillofacial-Surgery.png",
            description: "We support research in oral histopathology, molecular diagnostics, carcinogenesis, and biomarker discovery. Our experts provide analytical and editorial guidance for laboratory-based studies, emphasizing scientific rigor and reproducibility.",
            icon: Cpu,
        },
    ];

    const expertiseCards = [
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Scientific Writing",
            desc: "Crafting clear, precise, and publication-ready research manuscripts.",
            href: "/services/research-services/scientific-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: PenTool,
        },
        {
            title: "Data Collection for AI & ML",
            desc: "Structured data gathering tailored for artificial intelligence and machine learning.",
            href: "/services/medical-data-collection/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Cpu,
        },
        {
            title: "Translation Services",
            desc: "Accurate scientific translations to broaden the reach of your research.",
            href: "/services/editing-and-translation",
            imageUrl: "/images/subject-matter-experts/animal-science/Translation-Services.png",
            icon: FileText,
        },
        {
            title: "Literature Review and",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: FileSearch,
        },
        {
            title: "Systematic Reviews",
            desc: "Comprehensive literature reviews and evidence synthesis for clinical and academic research.",
            href: "/services/research-services/systematic-review",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: FileText,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: Search,
        },
    ];

    return (
        <main className="w-full bg-[#FAFAFA] font-sans antialiased text-gray-800">

            {/* SECTION 1: Banner */}
            <HeroBanner
                title="Dentistry"
                description="Empowering dental researchers, clinicians, and academicians with end-to-end assistance, from study design to high-impact publication."
                headingAs="h1"
            />

            {/* SECTION 2: Hero Intro Content */}
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Comprehensive Research, Writing, and Publication Support in Dentistry
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Dentistry is the branch of medicine that focuses on the study, diagnosis, prevention, and treatment of oral and maxillofacial diseases, disorders, and conditions. Beyond maintaining oral hygiene, dentistry plays a significant role in overall health, aesthetics, and systemic well-being. Modern dentistry research and publishing bridges biology, materials science, technology, and patient-centred care to deliver advanced therapeutic and diagnostic solutions.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        Navigating the complexities of publishing impactful clinical dentistry research can be daunting, especially when it involves cutting-edge methodologies and advancements in dental and oral medicine. At Pubrica, we provide dentistry research support and dental publication services for researchers, academicians, clinicians, and dental institutions in conducting high-quality, evidence-based studies that meet global publication standards. Our multidisciplinary team of dental scientists, biostatisticians, and publication experts assists you throughout your research journey, from conceptualization and literature review to{" "}
                                        <Link href="/services/research-services/scientific-writing/" className="text-blue-600 no-underline">
                                            scientific writing
                                        </Link>{" "}
                                        in dentistry,{" "}
                                        <Link href="/services/publication-support/journal-selection/high-impact-academic-journals-guide/" className="text-blue-600 no-underline">
                                            journal selection
                                        </Link>, and publication.
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
                            Our Core Disciplines In Dentistry
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                            At Pubrica, our team comprises dental professionals, researchers, and <Link href="/subject-matter-experts/" className="text-blue-600 no-underline hover:no-underline">subject-matter experts</Link> with advanced degrees (PhD, DDS, or MDS) across all dental specialties. Our experts have decades of combined experience in clinical research, <Link href="/services/research-services/scientific-writing" className="text-blue-600 no-underline hover:no-underline">scientific writing</Link>, peer review, and dental journal publication support. Our key disciplines include:
                        </p>
                    </div>

                    <SmeCoreAreasGrid items={disciplines} />

                </div>
            </section>

            {/* SECTION 4: Expertise Grid */}
            <section className="py-7 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">

                <CommonExpertiseCards
                    title="Our Dentistry Research Support Services"
                    description="At Pubrica, we recognize that publishing in dental sciences involves more than just writing; it's about communicating complex findings with clarity, accuracy, and scholarly excellence. Our dental research and publication services are designed to empower dental researchers, clinicians, and academicians to produce world-class manuscripts that meet international publication standards."
                    cards={expertiseCards}
                />

            </section>

        </main>
    );
}