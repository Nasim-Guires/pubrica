import CommonPackages from '@/components/common/CommonPackages'
import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import GetFreeQuoteButton from '@/components/common/GetFreeQuoteButton'
import AIDataPreparationBanner from '@/components/services/education-editorial-service/ai-and-data-preparation-services/AIDataPreparationBanner'
import AIDataPreparationComprehensiveSection from '@/components/services/education-editorial-service/ai-and-data-preparation-services/AIDataPreparationComprehensiveSection'
import AIDataPreparationSections from '@/components/services/education-editorial-service/ai-and-data-preparation-services/AIDataPreparationSections'
import { aiAndDataPreparationServicesPackages, aiAndDataPreparationServicesWhoWeServe, aiAndDataPreparationServicesWorkflow, aiAndDataTestimonials, educationEditorialAiAndDataPreparationFaq } from '@/lib/services/education-editorial-service/ai-and-data-preparation-services'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <AIDataPreparationComprehensiveSection />
            <CommonWhoWeServe {...aiAndDataPreparationServicesWhoWeServe} />
            <AIDataPreparationBanner />
            <EditorialWorkflowSection {...aiAndDataPreparationServicesWorkflow} />
            <AIDataPreparationSections />
            <CommonPackages {...aiAndDataPreparationServicesPackages} />
            <GetFreeQuoteButton />
            <CommonTestimonial {...aiAndDataTestimonials} />
            <CommonFAQ {...educationEditorialAiAndDataPreparationFaq} />
            <InsightsSection />
        </>
    )
}

export default page