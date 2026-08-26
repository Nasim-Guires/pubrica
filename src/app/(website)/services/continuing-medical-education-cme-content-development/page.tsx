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
    title: 'CME Content Creation & Support for Healthcare | Pubrica',
    description: 'Pubrica delivers tailored CME content aligned to your medical education goals and audience needs, boosting learner engagement.',
    slug: '/services/continuing-medical-education-cme-content-development',
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
            <InsightsSection/>
        </>
    )
}

export default page