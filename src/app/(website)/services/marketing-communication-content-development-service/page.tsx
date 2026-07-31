import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import MarketingCommunicationContentDevelopment from '@/components/services/marketing-communication-content-development-service/MarketingCommunicationContentDevelopment'
import MarketingCommunicationProcessAndPackages from '@/components/services/marketing-communication-content-development-service/MarketingCommunicationProcessAndPackages'
import { marketingCommunicationContentDevelopmentServiceFaqData, marketingCommunicationContentDevelopmentServiceTestimonialData, marketingCommunicationWhoWeServeData } from '@/lib/services/marketing-communication/marketing-communication'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <MarketingCommunicationContentDevelopment />
            <CommonWhoWeServe {...marketingCommunicationWhoWeServeData} />
            <MarketingCommunicationProcessAndPackages />
            <CommonTestimonial
                {...marketingCommunicationContentDevelopmentServiceTestimonialData}
            />
            <CommonFAQ
                {...marketingCommunicationContentDevelopmentServiceFaqData}
            />
            <InsightsSection />
        </>
    )
}

export default page