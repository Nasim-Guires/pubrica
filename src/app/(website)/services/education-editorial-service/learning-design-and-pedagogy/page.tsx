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