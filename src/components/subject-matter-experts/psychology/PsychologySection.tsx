"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { Briefcase, FileText, ChevronRight } from 'lucide-react';
import EmergingTrendsSection, { EmergingTrendItem } from "@/components/common/EmergingTrendsSection";
import Link from "next/link";
import ApplicationsSection from "@/components/common/ApplicationsSection";
import WhereAuthorsPublish from "@/components/common/WhereAuthorsPublish";
import ExpertEditorsSection, { ExpertEditorItem } from "@/components/common/ExpertEditorsSection";

const emergingTrendsData: EmergingTrendItem[] = [
    {
        id: "digital-telepsychology",
        title: "Digital and Telepsychology",
        description:
            "Online therapy and digital mental health platforms are transforming access to psychological care.",
    },
    {
        id: "neurocognitive-research",
        title: "Neurocognitive Research",
        description:
            "Advances in neuroimaging are deepening the understanding of brain-behavior relationships.",
    },
    {
        id: "positive-psychology",
        title: "Positive Psychology",
        description:
            "Focused on well-being, resilience, and human strengths, this field promotes happiness and personal growth.",
    },
    {
        id: "cross-cultural-psychology",
        title: "Cross-Cultural Psychology",
        description:
            "Global research emphasizes the impact of culture on psychological processes and mental health.",
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence and Machine Learning",
        description: (
            <>
                The integration of AI into{" "}
                <Link
                    href="/services/research-services/"
                    className="text-blue-600"
                >
                    psychological research writing
                </Link>{" "}
                and prediction models is revolutionizing research methodologies.
            </>
        ),
    },
];

const applicationsData = [
    {
        title: "Mental Health",
        desc: "Psychologists provide therapy and counselling for individuals facing stress, anxiety, depression, and other mental health issues.",
        iconSrc:
            "/images/subject-matter-experts/psychology/Mental-Health.webp",
    },
    {
        title: "Education",
        desc: "Learning psychologists assist in developing inclusive educational systems and addressing learning disabilities.",
        iconSrc:
            "/images/subject-matter-experts/psychology/Education.webp",
    },
    {
        title: "Sports",
        desc: "Sports psychologists optimize athletic performance through motivation and focused training.",
        iconSrc:
            "/images/subject-matter-experts/psychology/Sport.webp",
    },
    {
        title: "Forensic Science",
        desc: "Forensic psychologists assist in criminal investigations, jury selection, and rehabilitation of offenders.",
        iconSrc:
            "/images/subject-matter-experts/psychology/Forensic-Science.webp",
    },
    {
        title: "Technology and AI",
        desc: "Cognitive and behavioural psychology guide the design of user-friendly digital interfaces and adaptive AI systems.",
        iconSrc:
            "/images/subject-matter-experts/psychology/Technology-and-AI.webp",
    },
];

const editorsData: ExpertEditorItem[] = [
    {
        name: "Dr. Sophia Bennett",
        degree: "PhD in Behavioral Psychology",
        experience: "14 years of experience",
        manuscripts: "180+ manuscripts edited",
        flag: "/images/country/gb.png",
        avatar:
            "/images/subject-matter-experts/biomedical-imaging/Dr.-Evelyn-Carter-3.webp",
    },
    {
        name: "Dr. Olivia Hughes",
        degree: "PhD in Developmental Psychology",
        experience: "8 years of experience",
        manuscripts: "100+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/biocatalysts/Dr.-Amanda-Lee.webp",
    },
    {
        name: "Dr. Ethan Carter",
        degree: "PhD in Clinical Psychology",
        experience: "10 years of experience",
        manuscripts: "120+ manuscripts edited",
        flag: "/images/country/us.png",
        avatar:
            "/images/subject-matter-experts/psychology/Dr.-Ethan-Carter.webp",
    },
];

export default function PsychologySection() {
    const [activeTrendTab, setActiveTrendTab] = useState(0);

    return (
        <div className="w-full bg-white text-gray-800 font-sans py-6 px-4 sm:px-6 lg:px-8 space-y-20">

            {/* SECTION: Emerging Trends in Psychology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <EmergingTrendsSection
                    title="Emerging Trends in Psychology"
                    description="The field of psychology is evolving rapidly in response to scientific and societal developments. Some emerging trends include:"
                    trends={emergingTrendsData}
                    footerText=""
                />
            </section>

            {/* SECTION: Applications of Psychology */}
            <section className="max-w-6xl mx-auto space-y-6">
                <ApplicationsSection
                    title="Applications of Psychology"
                    description="The application of psychology extends across numerous fields:"
                    applications={applicationsData}
                    imageSrc="/images/subject-matter-experts/psychology/Applications-of-Psychology.webp"
                    imageAlt="Applications of Psychology"
                />
            </section>

            {/* SECTION: Where Our Authors Publish */}
            <WhereAuthorsPublish
                title="Where Our Authors Publish"
                description="Our authors share Pubrica psychology services across top-tier journals, conferences, and platforms, maximizing its recognition and reach. Our placement will enhance our visibility and elevate our standing in an authoritative capacity."
                publication={{
                    imageSrc:
                        "/images/subject-matter-experts/psychology/sample-works-7-2.webp",
                    imageAlt: "Psychological Science Cover",
                    paperTitle:
                        "Reward Association With Mental States Shapes Empathy and Prosocial Behavior",
                    author: "Zhang, Y., & Hackel, L.",
                    journalName: "Psychological Science",
                    publisher: "Sage",
                    impactFactor: "5.1",
                }}
            />

            {/* SECTION: Our Expert Psychology Editors */}
            <section className="max-w-6xl mx-auto space-y-8">
                <ExpertEditorsSection
                    title="Our Expert Psychology Editors"
                    description="Pubrica's team of subject matter experts brings unparalleled expertise and diverse perspectives to deliver comprehensive solutions with precision and innovation. With a blend of experience and specialization, they ensure excellence in every project they undertake."
                    editors={editorsData}
                />
            </section>

        </div>
    );
}