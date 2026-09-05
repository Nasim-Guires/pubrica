import CommonTestimonial from '@/components/common/CommonTestimonials'
import AlgorithmSMEPage from '@/components/subject-matter-experts/algorithm/AlgorithmSMEPage'
import EmergingTrendsAndApplications from '@/components/subject-matter-experts/algorithm/EmergingTrendsAndApplications'
import { aiMlSupportTestimonials } from '@/lib/subject-matter-experts/algorithm'
import React from 'react'

import { constructMetadata } from '@/lib/metadata';
import WhatClientsSays, { Testimonial } from '@/components/common/WhatClientsSays'

export const metadata = constructMetadata({
    title: "Algorithm Research for Design, Analysis & System Performance",
    description: "Explore algorithm research focused on design, analysis, and optimization to solve complex problems with efficient, scalable and high-performance solutions.",
    keywords: ["algorithm"],
    slug: "/subject-matter-experts/algorithm",
});

const testimonials: Testimonial[] = [
    {
        id: "hiroshi-tanaka",
        quote:
            "The team demonstrated deep expertise in algorithm optimization. Their revisions significantly improved both performance clarity and technical accuracy.",
        authorName: "Dr. Hiroshi Tanaka",
        authorRole: "Computational Scientist",
        authorLocation: "Japan",
        avatarLabel: "Dr. Hiroshi Tanaka",
        flagLabel: "Japan flag",
        avatarSrc:
            "/images/subject-matter-experts/algorithm/Dr.-Hiroshi-Tanaka-1.webp",
        flagSrc: "/images/editing-and-translation/japan.png",
    },
    {
        id: "elena-petrova",
        quote:
            "Pubrica helped refine our machine learning models and documentation. Their editing ensured our research met international standards.",
        authorName: "Dr. Elena Petrova",
        authorRole: "Data Scientist",
        authorLocation: "Russia",
        avatarLabel: "Dr. Elena Petrova",
        flagLabel: "Russia flag",
        avatarSrc:
            "/images/subject-matter-experts/algorithm/Dr.-Elena-Petrova-1.webp",
        flagSrc: "/images/subject-matter-experts/algorithm/russsia.webp",
    },
    {
        id: "michael-anderson",
        quote:
            "Their understanding of complex algorithm structures and scalability was outstanding. They enhanced both the clarity and impact of our research.",
        authorName: "Prof. Michael Anderson",
        authorRole: "AI Researcher",
        authorLocation: "USA",
        avatarLabel: "Prof. Michael Anderson",
        flagLabel: "USA flag",
        avatarSrc:
            "/images/subject-matter-experts/algorithm/Prof.-Michael-Anderson.webp",
        flagSrc: "/images/subject-matter-experts/algorithm/usa-.png",
    },
];

const page = () => {
    return (
        <>
            <AlgorithmSMEPage />
            <EmergingTrendsAndApplications />
            <WhatClientsSays
                heading="What Our Clients Say About Us"
                testimonials={testimonials}
                itemsPerPage={2}
                autoPlay={true}
                autoPlayInterval={6000}
            />
        </>
    )
}

export default page