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

export const metadata = constructMetadata({
    title: 'Learning Design & Pedagogy Services | Pubrica',
    description: 'Strengthen learning outcomes with expert learning design and pedagogical development services for academic, and digital education content.',
    keywords: ['Learning Design & Pedagogy', 'Learning Design and Pedagogy', 'Instructional design services', 'Pedagogical framework development', 'Curriculum design services'],
    slug: '/services/education-editorial-service/learning-design-and-pedagogy',
})

const page = () => {
    return (
        <>
            <LearningDesignPedagogyComprehensiveSection />
            <CommonWhoWeServe {...learningDesignAndPedagogyWhoWeServe} />
            <LearningDesignBanner />
            <EditorialWorkflowSection {...learningDesignAndPedagogyWorkflow} />
            <LearningDesignSampleSection />
            <CommonPackages {...learningDesignAndPedagogyPackages} />
            <CommonTestimonial {...learningDesignAndPedagogyTestimonials} />
            <InsightsSection />
        </>
    )
}

export default page