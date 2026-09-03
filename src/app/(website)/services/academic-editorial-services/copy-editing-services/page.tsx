import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import DevelopmentEditingComprehensive from '@/components/services/academic-editorial-services/copy-editing-services/DevelopmentEditingComprehensive'
import DevelopmentEditingServicePage from '@/components/services/academic-editorial-services/copy-editing-services/DevelopmentEditingServicePage'
import { copyEditingServiceTestimonialData, copyEditingServiceWhoWeServeData } from '@/lib/services/academic-editorial-services/copy-editing-services/copy-editing-services'
import { developmentEditingServiceFaqData } from '@/lib/services/academic-editorial-services/development-editing-service/development-editing-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'
import CopyEditingSectionRecenPublication from '@/components/services/academic-editorial-services/copy-editing-services/CopyEditingSectionRecenPublication'

export const metadata = constructMetadata({
    title: 'Expert Manuscript Copy Editing Services | Pubrica',
    description: "Improve manuscript quality with Pubrica’s Expert Copy Editing Services, ensuring clarity, precision, and adherence to journal guidelines.",
    slug: '/services/academic-editorial-services/copy-editing-services',
})

const page = () => {
    return (
        <>
            <DevelopmentEditingServicePage />
            <CommonWhoWeServe {...copyEditingServiceWhoWeServeData} />
            <DevelopmentEditingComprehensive />
            <CopyEditingSectionRecenPublication />
            <CommonTestimonial {...copyEditingServiceTestimonialData} />
            <CommonFAQ {...developmentEditingServiceFaqData} />
            <InsightsSection />
        </>
    )
}

export default page