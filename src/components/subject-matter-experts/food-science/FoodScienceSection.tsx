"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight, Plus, Minus } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish, { AuthorPublicationData } from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const trustItemsData = [
    {
        title: 'PhD Subject-Matter Experts',
        description: 'Specialists with deep expertise across food science, biotechnology, microbiology, nutrition, and food engineering.'
    },
    {
        title: '100% Confidential & Secure',
        description: 'Your data, research results, and manuscripts remain fully protected.'
    },
    {
        title: '15+ Years of Research Excellence',
        description: 'Trusted globally by researchers, academicians, and industry professionals.'
    },
    {
        title: 'End-to-End Support',
        description: 'From ideation to publication, we assist at every stage with consistency and precision.'
    },
    {
        title: 'Journal-Compliant Deliverables',
        description: 'We ensure adherence to the formatting and editorial standards of Scopus, SCI, and top food science journals.'
    }
];

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "alternative-proteins",
        title: "Alternative Proteins",
        description:
            "Development of plant-based proteins, lab-grown meats, and insect proteins to meet sustainability goals.",
    },
    {
        id: "food-nanotechnology",
        title: "Food Nanotechnology",
        description:
            "Application of nanomaterials for enhanced food safety, packaging, and nutrient delivery.",
    },
    {
        id: "personalized-nutrition",
        title: "Personalized Nutrition",
        description:
            "Tailoring diets based on genetic, microbiome, and lifestyle data.",
    },
    {
        id: "sustainable-packaging",
        title: "Sustainable Packaging",
        description:
            "Innovative biodegradable and recyclable packaging solutions to reduce environmental impact.",
    },
    {
        id: "functional-fortified-foods",
        title: "Functional and Fortified Foods",
        description:
            "Foods designed to provide specific health benefits, including immunity boosters and cognitive enhancers.",
    },
];

const applicationsData = [
    {
        title: "Food Industry",
        desc: "From product formulation to processing, packaging, and distribution, food science ensures products are safe, high-quality, and appealing to consumers.",
        iconSrc:
            "/images/subject-matter-experts/food-science/Food-Industry-1.webp",
    },
    {
        title: "Public Health",
        desc: "Research in food safety, fortification, and nutritional interventions contributes to preventing malnutrition, obesity, and diet-related diseases.",
        iconSrc:
            "/images/subject-matter-experts/food-science/Public-Health.webp",
    },
    {
        title: "Sustainable Practices",
        desc: "Food scientists develop eco-friendly packaging, reduce food waste, and innovate alternative protein sources to meet global sustainability goals.",
        iconSrc:
            "/images/subject-matter-experts/food-science/Sustainable-Practices.webp",
    },
    {
        title: "Research and Innovation",
        desc: "Advancements in molecular gastronomy, sensory science, and food nanotechnology continue to redefine the way we produce, consume, and enjoy food.",
        iconSrc:
            "/images/subject-matter-experts/food-science/Research-and-Innovation.webp",
    },
    {
        title: "Policy and Regulation",
        desc: "Food scientists provide critical insights for policy-making, food labelling, and regulatory compliance, ensuring public trust in the food supply.",
        iconSrc:
            "/images/subject-matter-experts/food-science/Policy-and-Regulation.webp",
    },
];

const areasOfStudyData = [
    { title: 'Food Chemistry and Biochemistry' },
    { title: 'Food Microbiology and Safety' },
    { title: 'Food Processing and Preservation' },
    { title: 'Nutritional Science and Dietetics' },
    { title: 'Food Packaging Technology' },
    { title: 'Sensory Evaluation and Consumer Science' },
    { title: 'Dairy and Meat Science' },
    { title: 'Cereal Science and Technology' },
    { title: 'Food Biotechnology and Enzymes' },
    { title: 'Quality Assurance and Control' },
    { title: 'Functional Foods and Nutraceuticals' },
    { title: 'Food Supply Chain Management' }
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sophia Bennett",
        degree: "PhD in Food Science & Technology",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Evelyn-Carter-3.webp",
    },
    {
        name: "Dr. Elena Garcia",
        degree: "PhD in Food Microbiology",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocatalysts/Dr.-Amanda-Lee.webp",
    },
    {
        name: "Dr. Arjun Mehta",
        degree: "PhD in Nutrition & Functional Foods",
        experience: "11 years of experience",
        manuscripts: "130+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/animal-science/karrel.png",
    },
];
const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/food-science/sample-works-9-3.webp",
    imageAlt: "Journal of Food Science Cover",
    paperTitle:
        "A review of taste-active compounds in meat: Identification, influencing factors, and taste transduction mechanism.",
    author: "You, Z., Bai, Y., Bo, D., Feng, Y., Shen, J., Wang, Y., Li, J., & Bai, Y.",
    publisher: "Wiley",
    journalName: "Journal of Food Science",
    impactFactor: "3.4",
};
export default function FoodScienceSection() {
    const [openTrustIndex, setOpenTrustIndex] = useState<number | null>(null);
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    const toggleTrustItem = (index: number) => {
        setOpenTrustIndex(openTrustIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Why Food Science Researchers Trust Pubrica */}
            <section className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-3 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0e3b32]">
                        Why Food Science Researchers Trust Pubrica
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                    {trustItemsData.map((item, index) => {
                        const isOpen = openTrustIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-[#0e3b32] text-white rounded-md border border-[#0e3b32] shadow-sm self-start"
                            >
                                <button
                                    onClick={() => toggleTrustItem(index)}
                                    className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-base sm:text-lg hover:bg-[#124b3f] transition-colors"
                                >
                                    <span>{item.title}</span>

                                    {isOpen ? (
                                        <Minus className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <Plus className="w-5 h-5 shrink-0" />
                                    )}
                                </button>

                                {isOpen && item.description && (
                                    <div className="px-6 pb-4 pt-2 border-t border-[#1a5548] text-gray-200 text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION: Emerging Trends in Food Science Research */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Food Science Research"
                    description="The field of food science is evolving rapidly, driven by technological advancements and consumer demands. Some emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
                    These trends highlight the importance of continuous research and knowledge dissemination to drive innovation and improve global food systems.
                </p>
            </section>

            {/* SECTION: Applications of Food Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Food Science"
                    description="Food science plays a pivotal role across various sectors:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/food-science/Applications-of-Food-Science.webp"
                    imageAlt="Applications of Food Science"
                />
            </section>


            {/* SECTION: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION: Our Expert Food Science Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Food Science Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}