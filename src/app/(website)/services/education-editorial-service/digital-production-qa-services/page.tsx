import CommonPackages from '@/components/common/CommonPackages'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import DigitalProductionQABanner from '@/components/services/education-editorial-service/digital-production-qa-services/DigitalProductionQABanner'
import DigitalProductionQABeyondComponent from '@/components/services/education-editorial-service/digital-production-qa-services/DigitalProductionQABeyondComponent'
import DigitalProductionQaServices from '@/components/services/education-editorial-service/digital-production-qa-services/DigitalProductionQAServicesPage'
import { educationEditorialDigitalProductionQaFaq, educationEditorialDigitalProductionQaPackages, educationEditorialDigitalProductionQaTestimonials, educationEditorialDigitalProductionQaWhoWeServe, educationEditorialDigitalProductionQaWorkflow } from '@/lib/services/education-editorial-service/digital-production-qa-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Expert Digital Production QA Services | Pubrica',
    description: "Ensure accuracy, consistency, and quality across digital academic outputs with Pubrica’s expert Digital Production QA services.",
    keywords: ['Digital Production QA', 'academic production quality assurance', 'XML QA services', 'typesetting QA', 'digital publishing quality control'],
    slug: '/services/education-editorial-service/digital-production-qa-services',
})

const page = () => {
    return (
        <>
            <DigitalProductionQaServices />
            <CommonWhoWeServe {...educationEditorialDigitalProductionQaWhoWeServe} />
            <DigitalProductionQABanner />
            <EditorialWorkflowSection {...educationEditorialDigitalProductionQaWorkflow} />
            <DigitalProductionQABeyondComponent />
            <CommonPackages {...educationEditorialDigitalProductionQaPackages} />
            <CommonTestimonial {...educationEditorialDigitalProductionQaTestimonials} />
            <CommonFAQ {...educationEditorialDigitalProductionQaFaq} />
            <InsightsSection />
        </>
    )
}

export default page