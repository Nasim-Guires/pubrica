import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import CMEContentDevelopmentPage from '@/components/services/continuing-medical-education-cme-content-development/CMEContentDevelopmentPage'
import CmeServicesMasterModule from '@/components/services/continuing-medical-education-cme-content-development/CmeServicesMasterModule'
import { continuingMedicalEducationCmeContentDevelopmentFaqData, continuingMedicalEducationCmeContentDevelopmentTestimonialData, continuingMedicalEducationCmeContentDevelopmentWhoWeServeData } from '@/lib/services/continuing-medical-education-cme-content-development/continuing-medical-education-cme-content-development'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


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