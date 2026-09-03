import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import ThoughtLeadershipEditorialDesignView from '@/components/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/ThoughtLeadershipEditorialDesignView'
import ThoughtLeadershipEditorialServicePage from '@/components/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/ThoughtLeadershipContentEditorialDesign'
import {  thoughtLeadershipContentEditorialDesignTestimonialData, thoughtLeadershipContentEditorialDesignWhoWeServeData } from '@/lib/services/data/data-analytics-machine-learning/thought-leadership-content-editorial-design/thought-leadership-content-editorial-design'
import React from 'react'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Thought Leadership Content & Editorial Design - Pubrica',
    description: "Pubrica’s subject experts create curated, unique content that transforms rich insights into measurable growth for your audience.",
    slug: '/services/data-analytics-machine-learning/thought-leadership-content-editorial-design',
})

const faqs = [
    {
        question: "1. What types of content do you create?",
        answer: "We specialize in a wide range of formats, including:",
        points: [
            "Executive Reports for investors and stakeholders",
            "Strategic Reports for informed decision-making",
            "White Papers on industry trends and innovations",
            "Blogs & Authored Articles for brand visibility",
            "Ghost Writing for thought leaders",
            "Customized Content & Reports tailored to your objectives",
        ],
    },
    {
        question: "2. Who can benefit from these services?",
        answer: "Our services are ideal for:",
        points: [
            "Corporate executives and business leaders",
            "Healthcare and pharmaceutical professionals",
            "Researchers and academic institutions",
            "Marketing and communications teams seeking authoritative content",
        ],
    },
    {
        question: "3. What is your content development process?",
        answer: "We follow a structured workflow:",
        points: [
            "Collaboration & Brainstorming: Identify topics aligned with your brand and audience.",
            "Content Creation: Develop engaging narratives and evidence-based insights.",
            "Editorial Design: Craft visually appealing layouts to enhance readability.",
            "Review & Refinement: Ensure accuracy, coherence, and strategic alignment before publication.",
        ],
    },
    {
        question: "4. How do you ensure compliance and quality?",
        answer:
            "All content adheres to strict editorial standards and industry compliance guidelines, ensuring accuracy, credibility, and ethical communication.",
    },
    {
        question: "5. How do you ensure the content aligns with our brand?",
        answer:
            "We collaborate closely with your team to understand your brand voice, goals, and audience. Each piece of content is tailored to maintain consistency and strengthen your brand identity.",
    },
    {
        question: "6. What is editorial design, and why is it important?",
        answer:
            "Editorial design involves crafting visually appealing layouts that enhance readability, engagement, and comprehension. Good design reinforces your brand, communicates professionalism, and ensures your content is impactful.",
    },
    {
        question: "7. Can you help with content strategy?",
        answer:
            "Yes. We assist in brainstorming thought-provoking topics, developing content plans, and designing content workflows to ensure strategic alignment and maximum audience engagement.",
    },
];

const page = () => {
    return (
        <>
            <ThoughtLeadershipEditorialDesignView />
            <CommonWhoWeServe
                {...thoughtLeadershipContentEditorialDesignWhoWeServeData}
            />
            <ThoughtLeadershipEditorialServicePage />
            <CommonTestimonial
                {...thoughtLeadershipContentEditorialDesignTestimonialData}
            />
            <CommonFAQ
                title="Frequently Asked Questions – Thought Leadership Content & Editorial Design"
                faqs={faqs}
            />
            <InsightsSection />
        </>
    )
}

export default page