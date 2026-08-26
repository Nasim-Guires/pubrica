import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import AbstractServicePackages from '@/components/services/research-impact/simplified-abstract-services/AbstractServicePackages'
import SimplifiedAbstractPage from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractPage'
import SimplifiedAbstractServices from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractServices'
import SimplifiedAbstractTypesAndWorkflow from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractWorkflowProcess'
import SimplifiedAbstractWorkflowProcess from '@/components/services/research-impact/simplified-abstract-services/SimplifiedAbstractWorkflowProcess'
import { simplifiedAbstractServicesFaqData, simplifiedAbstractServicesTestimonialData, simplifiedAbstractServicesWhoWeServeData } from '@/lib/services/data/research-impact/simplified-abstract-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Simplified Abstract Services for Research – Pubrica',
  description: 'Get clear, jargon-free research summaries with our expert abstract writing services. Ideal for journal submissions, academic publishing, and wider reach.',
  keywords: ['Simplified abstracts service', 'research abstract', 'simplified abstracts'],
  slug: '/services/research-impact/simplified-abstract-services',
})


const page = () => {
    return (
        <>
            <SimplifiedAbstractServices />
            <CommonWhoWeServe {...simplifiedAbstractServicesWhoWeServeData} />
            {/* <SimplifiedAbstractTypesAndWorkflow /> */}
            <SimplifiedAbstractPage />
            <CommonTestimonial {...simplifiedAbstractServicesTestimonialData} />
            <AbstractServicePackages />
            <CommonFAQ {...simplifiedAbstractServicesFaqData} />
            <InsightsSection />
        </>
    )
}

export default page