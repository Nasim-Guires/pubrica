import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import MarketingCommunicationContentDevelopment from '@/components/services/marketing-communication-content-development-service/MarketingCommunicationContentDevelopment'
import MarketingCommunicationProcessAndPackages from '@/components/services/marketing-communication-content-development-service/MarketingCommunicationProcessAndPackages'
import { marketingCommunicationContentDevelopmentServiceFaqData, marketingCommunicationContentDevelopmentServiceTestimonialData, marketingCommunicationWhoWeServeData } from '@/lib/services/marketing-communication/marketing-communication'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Marketing Communication Content Development Services - Pubrica',
    description: 'Expert marketing communication content for healthcare & life sciences to engage audiences and boost brand impact.',
    keywords: ['Marketing Communication Content Development', 'marketing content writing services', 'professional marketing communication services', 'content development for marketing campaigns', 'digital marketing communication content'],
    slug: '/services/marketing-communication-content-development-service',
})

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