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
import GetFreeQuoteButton from "@/components/common/GetFreeQuoteButton";
import CommonExpertiseCards from "@/components/common/CommonExpertiseCards";

export default function DermatologyPage() {
  const disciplines = [
  {
    title: "Clinical Dermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/Clinical-Dermatology.png",
    description: (
      <>
        Focused on diagnosing and managing skin, hair, and nail disorders such as psoriasis, eczema, acne, and dermatitis. Pubrica assists with clinical study design, case report development, and{" "}
        <Link href="/services/research-services/systematic-review/" className="text-blue-600 ">
          systematic reviews
        </Link>{" "}
        to advance dermatologic care.
      </>
    ),
    icon: Stethoscope,
  },
  {
    title: "Cosmetic Dermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/Cosmetic-Dermatology.png",
    description: "Encompassing aesthetic procedures including laser therapy, chemical peels, and anti-aging treatments. We support research manuscripts, white papers, and reviews that explore the safety, efficacy, and innovation of cosmetic interventions.",
    icon: Sparkles,
  },
  {
    title: "Surgical Dermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/490.png",
    description: "Covering dermatologic surgeries such as excisions, Mohs micrographic surgery, and skin cancer management. Our team provides end-to-end writing and editing support for surgical case studies and clinical trials.",
    icon: Scissors,
  },
  {
    title: "Pediatric Dermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/Pediatric-Dermatology.png",
    description: (
      <>
        Addressing skin diseases in infants and children, including genetic and infectious conditions. Pubrica aids in paediatric-focused research, protocol development, and{" "}
        <Link href="/services/publication-support/journal-submission/" className="text-blue-600 ">
          journal submissions
        </Link>
        .
      </>
    ),
    icon: Baby,
  },
  {
    title: "Dermatopathology",
    iconSrc: "/images/subject-matter-experts/dermatology/Dermatopathology.png",
    description: (
      <>
        Integrating dermatology and pathology for microscopic diagnosis of skin diseases. Our{" "}
        <Link href="/subject-matter-experts/" className="text-blue-600 ">
          subject-matter experts
        </Link>{" "}
        assist with manuscript preparation, image analysis, and histopathological data interpretation.
      </>
    ),
    icon: Microscope,
  },
  {
    title: "Immunodermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/Immunodermatology.png",
    description: (
      <>
        Exploring autoimmune and inflammatory skin disorders such as lupus erythematosus, pemphigus, and dermatitis herpetiformis. Pubrica supports{" "}
        <Link href="/services/physician-writing-services/original-research-articles/" className="text-blue-600 ">
          original research
        </Link>{" "}
        and review articles in immunopathogenesis and novel therapies.
      </>
    ),
    icon: ShieldAlert,
  },
  {
    title: "Teledermatology & Digital Dermatology",
    iconSrc: "/images/subject-matter-experts/dermatology/Teledermatology-Digital-Dermatology.png",
    description: "Advancing the use of AI, imaging, and remote diagnostics in dermatology. We help authors publish cutting-edge work in digital dermatology innovations.",
    icon: Smartphone,
  },
];

    const expertiseCards = [
        {
            title: "Medical Writing",
            desc: "Our medical writers create high-quality manuscripts and case reports for dermatology journals.",
            href: "/services/medical-writing/",
            imageUrl: "/images/subject-matter-experts/algorithm/Artwork-Editing.png",
            icon: PenTool,
        },
        {
            title: "Research Services",
            desc: "Expert guidance on project planning, execution, and data analysis.",
            href: "/services/research-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Research-Services.png",
            icon: Search,
        },
        {
            title: "Editing & Proofreading",
            desc: "Enhance clarity, grammar, and style for polished, professional manuscripts.",
            href: "/services/editing-and-translation/",
            imageUrl: "/images/subject-matter-experts/algorithm/Editing-Proofreading.png",
            icon: CheckCircle,
        },
        {
            title: "Journal Submission",
            desc: "Helping select the right journals and manage the submission process seamlessly.",
            href: "/services/publication-support/journal-submission/",
            imageUrl: "/images/subject-matter-experts/algorithm/Data-Collection-for-AI-ML.png",
            icon: Send,
        },
        {
            title: "Journal Formatting",
            desc: "Tailored manuscript formatting to meet specific journal guidelines.",
            href: "/services/publication-support/journal-manuscript-formatting-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BookOpen,
        },
        {
            title: "Graphical Abstract",
            desc: "Engaging summaries of your research in a single, informative graphic.",
            href: "/services/research-impact/graphical-abstract/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: PenTool,
        },
        {
            title: "Journal Selection",
            desc: "Strategic journal selection to maximize publication success.",
            href: "/services/publication-support/journal-selection/",
            imageUrl: "/images/subject-matter-experts/animal-science/Journal-Selection.png",
            icon: FileText,
        },
        {
            title: "Statistical Analysis",
            desc: "Rigorous quantitative and biostatistical analysis tailored for clinical trials and study data.",
            href: "/services/research-services/biostatistics-and-statistical-programming-services/",
            imageUrl: "/images/subject-matter-experts/algorithm/Journal-Formatting.png",
            icon: BarChart2,
        },
        {
            title: "Literature Review and Gap Analysis",
            desc: "Identifying research gaps and providing comprehensive literature reviews.",
            href: "/services/research-services/literature-review-and-gap/",
            imageUrl: "/images/subject-matter-experts/algorithm/Graphical-Abstract.png",
            icon: BarChart2,
        },
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
            <section className="pt-6 border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-5">
                            <h2 className="text-3xl font-bold text-[#0c2e3a] mb-5 leading-tight">
                                Empowering Dermatology Research and Innovation through Expert Guidance and Support
                            </h2>
                        </div>

                        <div className="flow-root">
                            <div className="lg:float-right lg:ml-8 lg:mb-4 mb-6 flex justify-center w-full lg:w-[420px]">
                                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden shadow-lg border-4 border-white flex-shrink-0 mx-auto">
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

                            <div className="space-y-5 text-slate-700">
                                <div className="space-y-5">
                                    <p className="text-base leading-relaxed">
                                        Navigating the complexities of publishing impactful research in dermatology can be challenging, especially when it involves cutting-edge methodologies and advancements in understanding skin health and diseases. Researchers and clinicians in this sector often face challenges in effectively communicating their findings and ensuring their work reaches the right audience with meaningful impact.
                                    </p>

                                    <p className="text-base leading-relaxed">
                                        At Pubrica, we recognize the critical role dermatology plays in improving human health and quality of life. Dermatology, the branch of medicine focused on the diagnosis, treatment, and prevention of skin, hair, and nail disorders, is constantly evolving with groundbreaking research and clinical innovations. Our services are designed to support researchers, clinicians, and industry professionals at every stage of their journey, from concept development and clinical study design to manuscript preparation, publication, and post-publication impact enhancement.
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

                <CommonExpertiseCards
                    title="Why Choose Pubrica for Dermatology Research and Publication?"
                    description="Pubrica offers a full spectrum of dermatology research and publication services to ensure that your study achieves scientific rigor, clinical relevance, and publication success. Our experts collaborate with dermatology researchers across the globe, providing tailored solutions that meet the unique requirements of your project. We provide services such as:"
                    cards={expertiseCards}
                />

                {/* Bottom Conclusion Text */}
                {/* <div className="mt-12 text-center max-w-4xl mx-auto">
                    <p className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
                        Whether you are a researcher, clinician, or medical professional, Pubrica bridges the gap between dermatological research findings and clinical applications, supporting your publishing journey.
                    </p>
                </div> */}

            </section>

        </main>
    );
}