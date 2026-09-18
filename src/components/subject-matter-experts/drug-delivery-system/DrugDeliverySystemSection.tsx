"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "nanotechnology-based-drug-delivery",
        title: "Nanotechnology-Based Drug Delivery",
        description:
            "Targeting Drugs Precisely - Nanoparticles and nanocarriers offer a new method for targeting drugs to specific tissues or cells. They also reduce systemic side effects from drugs and improve their effectiveness, particularly for diseases that are difficult to treat, such as cancer.",
    },
    {
        id: "gene-delivery-systems",
        title: "Gene Delivery Systems",
        description:
            "Advances in gene therapy are enabling the delivery of genetic material (DNA/RNA) to treat genetic disorders and cancers. The development of safe, efficient gene delivery vectors, such as viral and non-viral nanoparticles, is a key trend.",
    },
    {
        id: "ai-machine-learning-in-dds",
        title: "Artificial Intelligence (AI) and Machine Learning in DDS",
        description:
            "AI is being used to design and optimize drug delivery systems by predicting how drugs interact with biological systems. Machine learning algorithms help streamline the design process, improving the efficiency and success rates of DDS development.",
    },
    {
        id: "biodegradable-polymers",
        title: "Biodegradable Polymers for Controlled Release",
        description:
            "Development of biodegradable and biocompatible polymers that gradually release drugs over time, reducing the need for frequent doses.",
    },
    {
        id: "3d-printing-personalized-drug-delivery",
        title: "3D Printing for Personalized Drug Delivery",
        description:
            "Leveraging 3D printing technology to design customized drug delivery devices or formulations tailored to individual patient needs.",
    },
    {
        id: "combination-drug-delivery",
        title: "Combination Drug Delivery",
        description:
            "Integration of multiple drugs or therapies in a single delivery system to enhance the synergistic effects, such as in cancer treatment combining chemotherapy and immunotherapy.",
    },
];
const applicationsData = [
    {
        title: "Targeted Drug Delivery",
        desc: "Targeted Drug Delivery: Provides medications directly at the location required to be effective while decreasing the likelihood of side effects, particularly used as an effective means of treating cancer.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Targeted-Drug-Delivery.webp",
    },
    {
        title: "Controlled Release Drug Delivery",
        desc: "Controlled Release Drug Delivery: Provides gradual release of medications over an extended period, ensuring that medication levels in a chronic disease remain stable, e.g., diabetes.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Controlled-Release-Drug-Delivery.webp",
    },
    {
        title: "Nanomedicine Drug Delivery",
        desc: "Nanomedicine Drug Delivery: Nanoparticles are used to precisely target and release medications to treat a variety of diseases, including Cancer, Window, & Neurological Disorders.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Nanomedicine-Drug-Delivery.webp",
    },
    {
        title: "Biologics Drug Delivery",
        desc: "Biologics Drug Delivery: Enhance the stability and absorption of biologics; monoclonal antibodies and gene therapies for the treatments of autoimmune & genetically mediated diseases; biotherapeutic agents.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Biologics-Drug-Delivery.webp",
    },
    {
        title: "Transdermal Drug Delivery",
        desc: "Transdermal Drug Delivery: Deliver medications via the skin; Many patients prefer non-invasive means of reaching their prescription medications.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Transdermal-Drug-Delivery.webp",
    },
    {
        title: "Vaccines",
        desc: "Vaccines: Provides more effective antigen delivery for the prevention of disease and to enhance the immune response to the disease.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/Vaccines.webp",
    },
    {
        title: "CNS Targeting",
        desc: "CNS Targeting: Develops systems that enable drugs to be delivered across the blood-brain barrier; develop systems to target areas of the brain that are affected by diseases such as Alzheimer’s & Parkinson’s Disease.",
        iconSrc:
            "/images/subject-matter-experts/drug-delivery-system/CNS-Targeting.webp",
    },
];

const areasOfStudyData = [
    "Molecular Biology",
    "Gene Therapy",
    "Immunology",
    "Surface Chemistry",
    "Microbiology",
    "Nanomedicine",
    "Tissue Engineering",
    "Formulation Science",
    "Pharmacogenomics",
    "In Vitro & In Vivo Studies",
    "Wound Healing & Regenerative Medicine",
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Emma Clark",
        degree: "PhD in Drug Delivery and Nanomedicine",
        experience: "7 years of experience",
        manuscripts: "80+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/drug-delivery-system/Dr.-Emma-Clark.webp",
    },
    {
        name: "Michael Lee",
        degree: "Master’s in pharmacology",
        experience: "8 years of experience",
        manuscripts: "60+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/ceramic-engineering/Michael-Lee.webp",
    },
    {
        name: "Dr. Sarah Johnson",
        degree: "PhD in Pharmaceutical Sciences",
        experience: "12 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/drug-delivery-system/Dr.-Sarah-Johnson.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/drug-delivery-system/sample-works-10-2.webp",
    imageAlt: "Drug Delivery and Translational Research Book Cover",
    paperTitle: "Topical delivery of Lidocaine using spicules for local anaesthesia",
    author: "Zhang, C., Yang, P., Lin, X.",
    publisher: "Springer nature",
    journalName: "Drug Delivery and Translational Research",
    impactFactor: "5.5",
};

export default function DrugDeliverySystemSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans space-y-20">

            {/* SECTION 1: Emerging Trends in Drug Delivery System */}
            <section className="max-w-6xl mx-auto pt-6 px-4 sm:px-6 lg:px-8 space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Drug Delivery System"
                    description="The field of animal science is rapidly evolving due to technological innovations and global challenges:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Drug Delivery System */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <ApplicationsSection
                    title="Applications of Drug Delivery System"
                    description="Drug Delivery System is applied in diverse sectors:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/drug-delivery-system/Applications-of-Drug-Delivery-System.webp"
                    imageAlt="Applications of Drug Delivery System"
                />
            </section>

            {/* SECTION 3: Areas of Study (Full-Width Dark Green Background) */}
            <section className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[420px] rounded-none overflow-hidden">
                {/* Left Side: Square Image Container */}
                <div className="lg:col-span-5 relative min-h-[300px] flex items-center p-8 sm:p-12 !rounded-none overflow-hidden">
                    {/* Next.js Image Component */}
                    <Image
                        src="/images/subject-matter-experts/drug-delivery-system/Areas-of-Study-1.webp"
                        alt="Drug Delivery System"
                        fill
                        sizes="(max-width: 1024px) 100vw, 41vw"
                        className="object-cover !rounded-none"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                        priority
                    />

                    {/* Dark Overlay */}
                    <div
                        className="absolute inset-0 bg-black/60 !rounded-none z-10"
                        style={{ clipPath: "none", borderRadius: "0px" }}
                    ></div>

                    {/* Text Overlay */}
                    <p className="relative z-20 text-white text-sm sm:text-base font-normal leading-relaxed max-w-md">
                        Pubrica's experts provide comprehensive support for drug delivery
                        system research, ensuring your work is accurate, impactful, and
                        reaches the right audience, from design to clinical application.
                    </p>
                </div>

                {/* Right Side: Dark Green Background with Header & Grid */}
                <div className="lg:col-span-7 bg-[#052b28] p-8 sm:p-12 flex flex-col justify-center space-y-6">
                    {/* Section Header */}
                    <div className="space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                            Areas of Study
                        </h2>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* Tag Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {areasOfStudyData.map((study, index) => (
                            <div
                                key={index}
                                className="bg-white text-black px-3 py-2.5 rounded-sm shadow-sm flex items-center space-x-2 text-xs font-semibold leading-snug"
                            >
                                <div className="w-4 h-4 rounded-full bg-[#052b28] flex items-center justify-center shrink-0">
                                    <ChevronRight className="w-3 h-3 text-white stroke-[3]" />
                                </div>
                                <span>{study}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 5: Our Expert Editors In Drug Delivery Systems */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Editors In Drug Delivery Systems"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}