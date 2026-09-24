import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import CMEContentDevelopmentPage from '@/components/services/continuing-medical-education-cme-content-development/CMEContentDevelopmentPage'
import CmeServicesMasterModule from '@/components/services/continuing-medical-education-cme-content-development/CmeServicesMasterModule'
import { continuingMedicalEducationCmeContentDevelopmentFaqData, continuingMedicalEducationCmeContentDevelopmentTestimonialData, continuingMedicalEducationCmeContentDevelopmentWhoWeServeData } from '@/lib/services/continuing-medical-education-cme-content-development/continuing-medical-education-cme-content-development'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Thought Leadership Content & Editorial Design - Pubrica',
    description: 'Pubrica’s subject experts create curated, unique content that transforms rich insights into measurable growth for your audience.',
    keywords: ['Thought Leadership Content & Editorial Design,Scientific thought leadership development,leadership development program content,thought leadership editorial support,thought leadership content creation'],
    slug: '/services/data-analytics-machine-learning/thought-leadership-content-editorial-design/',
})


const page = () => {
    return (
        <>
            <CMEContentDevelopmentPage />
            <CommonWhoWeServe
                {...continuingMedicalEducationCmeContentDevelopmentWhoWeServeData}
            />
            <CmeServicesMasterModule />
            <CommonTestimonial
                {...continuingMedicalEducationCmeContentDevelopmentTestimonialData}
            />
            <CommonFAQ
                {...continuingMedicalEducationCmeContentDevelopmentFaqData}
            />
            <InsightsSection />
        </>
    )
}

export default page