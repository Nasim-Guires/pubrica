"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from '@/components/common/EmergingTrendsSection';
import ApplicationsSection from '@/components/common/ApplicationsSection';
import WhereAuthorsPublish from '@/components/common/WhereAuthorsPublish';
import ExpertEditorsSection, { ExpertEditorItem } from '@/components/common/ExpertEditorsSection';

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "small-modular-reactors",
        title: "Small Modular Reactors (SMRs)",
        description:
            "Small, modular nuclear reactors that are economical to build and flexible in their ability to produce energy.",
    },
    {
        id: "nuclear-fusion",
        title: "Nuclear Fusion",
        description:
            "The development of fusion-based energy systems that are clean and virtually unlimited in supply.",
    },
    {
        id: "ai-nuclear-systems",
        title: "Artificial Intelligence (AI) for Nuclear Systems",
        description:
            "The use of artificial intelligence for predictive maintenance, safety monitoring, and optimisation of nuclear reactors.",
    },
    {
        id: "advanced-reactor-designs",
        title: "Advanced Reactor Designs",
        description:
            "Generation IV nuclear reactors designed with safety and efficiency goals, as well as sustainability in mind.",
    },
    {
        id: "recycling-nuclear-waste",
        title: "Recycling of Nuclear Waste",
        description:
            "New methods for reducing and recycling radioactive waste using advanced nuclear technologies.",
    },
    {
        id: "digital-twin-technology",
        title: "Digital Twin Technology",
        description:
            "The use of computer models of nuclear power plants to monitor and control operations in real-time.",
    },
    {
        id: "radiation-applications",
        title: "Radiation Applications in Medicine",
        description:
            "The use of nuclear technology in the diagnosis and treatment of cancer.",
    },
    {
        id: "sustainable-energy-integration",
        title: "Sustainable Energy Integration",
        description:
            "The utilization of nuclear energy in conjunction with renewable energy sources to provide a balanced energy mix.",
    },
];

const applicationsData = [
    {
        title: "",
        desc: "Electricity Generation - The generation of electricity through the use of nuclear power plants.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Electricity-Generation.webp",
    },
    {
        title: "",
        desc: "Medical Use - Medical imaging, radiation therapy (for the treatment of cancer), and other medical applications.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Medical-Use.webp",
    },
    {
        title: "",
        desc: "Industrial Use - Non-destructive testing, material properties analysis, and radiation processing.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Industrial-Use.webp",
    },
    {
        title: "",
        desc: "Environmental Protection - Monitoring and controlling radioactive materials in the environment.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Environmental-Protection.webp",
    },
    {
        title: "",
        desc: "Space Exploration - Providing power systems for spacecraft (including power systems used for deep space missions).",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Space-Exploration.webp",
    },
    {
        title: "",
        desc: "Research and Development - Researching the development of nuclear reactor technologies and nuclear materials.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Research-and-Development-1.webp",
    },
    {
        title: "",
        desc: "Agriculture - Use of radiation techniques to increase crop production or to medicate crops from pests.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Agriculture.webp",
    },
    {
        title: "",
        desc: "Security and Defence - The use of radiation detection systems and nuclear safety systems.",
        iconSrc:
            "/images/subject-matter-experts/nuclear-engineering/Security-and-Defence.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Robert Klein",
        degree: "PhD in Nuclear Engineering",
        experience: "15 years of experience",
        manuscripts: "200+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/enzymes/Dr.-Ethan-Matthews.webp",
    },
    {
        name: "Dr. Ananya Iyer",
        degree: "PhD in Reactor Physics",
        experience: "12 years of experience",
        manuscripts: "160+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/cosmeceuticals/Dr.-Laura-Kim-1.webp",
    },
    {
        name: "Dr. David Chen",
        degree: "PhD in Nuclear Systems Engineering",
        experience: "11 years of experience",
        manuscripts: "150+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/nuclear-engineering/Dr.-David-Chen-1-1.webp",
    },
];

export default function NuclearEngineeringSection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Nuclear Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Nuclear Engineering"
                    description="Nuclear engineering is at the forefront of innovation and development within the energy industry. As we move toward an age of cleaner and more efficient energy, we can use many emerging technologies to change the way we think about generating, using, and storing energy through nuclear engineering. The following emerging trends in Energy, Sustainability, and Advanced technologies will continue to evolve."
                    trends={emergingTrendsData}
                    footerText=""
                />

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-2">
                    The above trends represent how we are constantly changing our approach to achieving cleaner sources of energy and improving safety and sustainability through advanced nuclear engineering.
                </p>
            </section>

            {/* SECTION: Applications of Nuclear Engineering */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Nuclear Engineering"
                    description="Nuclear Engineering is a multi-disciplinary study that explores many aspects of using the energy generated from the fission process within power reactors and uses this energy for many purposes. Some examples of areas where N.E. is used are:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/nuclear-engineering/Applications-of-Nuclear-Engineering.webp"
                    imageAlt="Applications of Nuclear Engineering"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica's expert content in top-tier journals, conferences, and platforms, maximising recognition and global reach."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/nuclear-engineering/Nuclear-Engineering-and-Design.webp",
                    imageAlt: "Nuclear Engineering and Design Journal Cover",
                    paperTitle:
                        "Advances in Small Modular Reactor Design and Safety Analysis",
                    author: "John R. Anderson",
                    journalName: "Nuclear Engineering and Design",
                    publisher: "Elsevier",
                    impactFactor: "4.0",
                }}
            />

            {/* SECTION: Our Expert Nuclear Engineering Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Nuclear Engineering Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}