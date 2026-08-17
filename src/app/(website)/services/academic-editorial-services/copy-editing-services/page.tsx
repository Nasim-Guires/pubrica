import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import DevelopmentEditingComprehensive from '@/components/services/academic-editorial-services/copy-editing-services/DevelopmentEditingComprehensive'
import DevelopmentEditingServicePage from '@/components/services/academic-editorial-services/copy-editing-services/DevelopmentEditingServicePage'
import { copyEditingServiceTestimonialData, copyEditingServiceWhoWeServeData } from '@/lib/services/academic-editorial-services/copy-editing-services/copy-editing-services'
import { developmentEditingServiceFaqData } from '@/lib/services/academic-editorial-services/development-editing-service/development-editing-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <DevelopmentEditingServicePage />
            <CommonWhoWeServe {...copyEditingServiceWhoWeServeData} />
            <DevelopmentEditingComprehensive />
            <CommonTestimonial {...copyEditingServiceTestimonialData} />
            <CommonFAQ {...developmentEditingServiceFaqData} />
            <InsightsSection />
        </>
    )
}

export default page