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
        id: "sustainable-agriculture",
        title: "Sustainable Agriculture and Food Security",
        description:
            "Precision Farming, and Vertical Farming, these advances are creating an agricultural revolution by enhancing crop yields with lower amounts of water and supporting sustainable food production, which also addresses some of the global Food Security Problems.",
    },
    {
        id: "circular-economies",
        title: "Circular Economies",
        description:
            "The circular economy reduces the amount of waste being produced, maximizes material reuse and increases the reuse of products materials which leads to increased sustainability of both production and consumption throughout all sectors of the world.",
    },
    {
        id: "environmental-biotechnology",
        title: "Environmental Biotechnology",
        description:
            "is being utilized to provide bioremediation, biofuels, and waste-to-energy processes to allow for a cleaner manufacturing process.",
    },
    {
        id: "green-infrastructure",
        title: "Green Infrastructure",
        description:
            'utilizes different urban tools, such as "green" roofs, permeable pavement, and stormwater management systems to improve the urban environment.',
    },
    {
        id: "ai-in-monitoring",
        title: "AI in Monitoring",
        description:
            "Artificial Intelligence (AI) technology is being used in conjunction with environmental data collection and analysis.",
    },
    {
        id: "plastic-pollution",
        title: "Plastic Pollution",
        description:
            "Biodegradable Plastics and advances in plastic recycling methods can reduce plastic pollution.",
    },
];
const applicationsData = [
    {
        title: "",
        desc: "Conserve Biodiversity and Restore Ecosystems",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Conserve-Biodiversity.webp",
    },
    {
        title: "",
        desc: "Reduce Greenhouse Gas Emissions and Adapt to Climate Change",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Reduce-Greenhouse-Gas-Emissions.webp",
    },
    {
        title: "",
        desc: "Develop Eco-Friendly Agricultural Practices",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Eco-Friendly-Agricultural.webp",
    },
    {
        title: "",
        desc: "Control Air, Water and Soil Pollution",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Control-Air-Water-and-Soil-Pollution.webp",
    },
    {
        title: "",
        desc: "Support the Research and Development of Wind, Solar and Bioenergy Sources",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Research-and-Development.webp",
    },
    {
        title: "",
        desc: "Manage Water by Using the Latest Technologies",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Manage-Water.webp",
    },
    {
        title: "",
        desc: "Promote Recycling and Waste for Energy Solutions",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Promote-Recycling.webp",
    },
    {
        title: "",
        desc: "Provide a Healthy Environment by Reducing Pollution Exposure to Human Health",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Provide-a-Healthy-Environment.webp",
    },
    {
        title: "",
        desc: "Develop Environmental Policies to Preserve Natural Resources",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Develop-Environmental-Policies.webp",
    },
    {
        title: "",
        desc: "Build Sustainable Urban Areas with Green Infrastructure",
        iconSrc:
            "/images/subject-matter-experts/environmental-science/Build-Sustainable-Urban-Areas.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Rajesh Kumar",
        degree: "Ph.D. in Climate Change and Policy",
        experience: "9 years of experience",
        manuscripts: "95+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/environmental-science/Dr.-Rajesh-Kumar.webp",
    },
    {
        name: "Dr. Neha Gupta",
        degree: "Ph.D. in Conservation Biology",
        experience: "7 years of experience",
        manuscripts: "80+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biochemistry/Dr.-Sophia-Patel.webp",
    },
    {
        name: "Dr. Maya Desai",
        degree: "Ph.D. in Environmental Science",
        experience: "11 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/algorithm/Dr.-Ananya-Iyer-1.webp",
    },
];

const publication: AuthorPublicationData = {
    imageSrc:
        "/images/subject-matter-experts/environmental-science/sample-works-11-3.webp",
    imageAlt: "Journal of Environmental Sciences Cover",
    paperTitle: "Prohexadione-Calcium Mitigates the Overgrowth of Corn Seedlings",
    author: "Duong MV, Chung J-W, Ha VG, Moon H, Yu J-K, So Y-S",
    publisher: "Elsevier",
    journalName: "Journal of Environmental Sciences",
    impactFactor: "6.3",
};

export default function EnvironmentalScienceSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION 1: Emerging Trends in Environmental Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Environmental Science"
                    description="The agricultural sector is witnessing rapid technological evolution. Some emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION 2: Applications of Environmental Science */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Environmental Science"
                    description="Environmental Science addresses many of the world’s most pressing issues such as global development, global health and natural resource management. Environmental Science is applied in virtually every industry to promote ceolin, sustainable solutions and reduce our negative impact on Ecological Balance/Ecological Limits. Environmental Science can be applied in several areas of focus:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/environmental-science/Applications-of-Environmental-Science.webp"
                    imageAlt="Applications of Environmental Science"
                />
            </section>

            {/* SECTION 3: Where Our Authors Publish */}
            <section className="max-w-6xl mx-auto space-y-6">
                <WhereAuthorsPublish
                    title="Where Our Authors Publish"
                    description="Our authors share Pubrica&apos;s expert content in top-tier journals, conferences, and platforms, maximizing and amplifying its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                    publication={publication}
                />
            </section>

            {/* SECTION 4: Our Expert Agrotechnology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Agrotechnology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}