import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import RevisioningAndLocalisationComplete from '@/components/services/academic-editorial-services/revisioning-and-localisation-service/RevisioningAndLocalisationComplete'
import RevisioningAndLocalisationService from '@/components/services/academic-editorial-services/revisioning-and-localisation-service/RevisioningAndLocalisationService'
import { revisioningAndLocalisationServiceFaqData, revisioningAndLocalisationServiceTestimonialData, revisioningAndLocalisationServiceWhoWeServeData } from '@/lib/services/academic-editorial-services/revisioning-and-localisation-service/revisioning-and-localisation-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <RevisioningAndLocalisationService />
            <CommonWhoWeServe
                {...revisioningAndLocalisationServiceWhoWeServeData}
            />
            <RevisioningAndLocalisationComplete />
            <CommonTestimonial
                {...revisioningAndLocalisationServiceTestimonialData}
            />
            <CommonFAQ
                {...revisioningAndLocalisationServiceFaqData}
            />
            <InsightsSection/>
        </>
    )
}

export default page