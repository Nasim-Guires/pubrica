import CommonPackages from '@/components/common/CommonPackages'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import LearningDesignBanner from '@/components/services/education-editorial-service/learning-design-and-pedagogy/LearningDesignBanner'
import LearningDesignPedagogyComprehensiveSection from '@/components/services/education-editorial-service/learning-design-and-pedagogy/LearningDesignPedagogyComprehensiveSection'
import LearningDesignSampleSection from '@/components/services/education-editorial-service/learning-design-and-pedagogy/LearningDesignSampleSection'
import { learningDesignAndPedagogyPackages, learningDesignAndPedagogyTestimonials, learningDesignAndPedagogyWhoWeServe, learningDesignAndPedagogyWorkflow } from '@/lib/services/education-editorial-service/learning-design-and-pedagogy/learning-design-and-pedagogy'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton'
import CommonFAQ from '@/components/common/FAQ'

export const metadata = constructMetadata({
    title: 'Learning Design & Pedagogy Services | Pubrica',
    description: 'Strengthen learning outcomes with expert learning design and pedagogical development services for academic, and digital education content.',
    keywords: ['Learning Design & Pedagogy', 'Learning Design and Pedagogy', 'Instructional design services', 'Pedagogical framework development', 'Curriculum design services'],
    slug: '/services/education-editorial-service/learning-design-and-pedagogy',
})

const faqData = [
    {
        question: "1. Why do I need Learning Design and Pedagogy services?",
        answer:
            "Well-designed learning materials improve comprehension, engagement, retention, and outcomes. Poor structure or weak pedagogy can reduce learning effectiveness.",
    },
    {
        question: "2. What types of learning materials do you design?",
        answer: "We design a wide range of learning materials, including:",
        points: [
            "Academic courses and curricula",
            "Training and professional development programs",
            "Online and blended learning modules",
            "Educational content and resources",
        ],
    },
    {
        question: "3. What pedagogical frameworks do you follow?",
        answer: "We follow established pedagogical frameworks, including:",
        points: [
            "Bloom’s Taxonomy",
            "Constructivist and experiential learning models",
            "Adult learning theory",
            "Institutional and accreditation standards",
        ],
    },
    {
        question: "4. Do you redesign existing courses?",
        answer:
            "Yes. We refine and restructure existing content while preserving subject expertise and intent.",
    },
    {
        question: "5. Do you customise learning design based on delivery mode?",
        answer:
            "Absolutely. We tailor learning design for in-person, online, blended, and hybrid formats.",
    },
];

const page = () => {
    return (
        <>
            <LearningDesignPedagogyComprehensiveSection />
            <CommonWhoWeServe {...learningDesignAndPedagogyWhoWeServe} />
            <LearningDesignBanner />
            <EditorialWorkflowSection {...learningDesignAndPedagogyWorkflow} />
            <LearningDesignSampleSection />
            <CommonPackages {...learningDesignAndPedagogyPackages} />
            <GetFreeQuoteButton />
            <CommonTestimonial {...learningDesignAndPedagogyTestimonials} />
            <CommonFAQ
                title="Frequently Asked Questions"
                faqs={faqData}
            />
            <InsightsSection />
        </>
    )
}

export default page