import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import VisualAndAccessibilityEditingComplete from '@/components/services/academic-editorial-services/visual-and-accessibility-editing-services/VisualAndAccessibilityEditingComplete'
import VisualAndAccessibilityEditingService from '@/components/services/academic-editorial-services/visual-and-accessibility-editing-services/VisualAndAccessibilityEditingService'
import { visualAndAccessibilityEditingServicesFaqData, visualAndAccessibilityEditingServicesTestimonialData, visualAndAccessibilityEditingServicesWhoWeServeData } from '@/lib/services/academic-editorial-services/visual-and-accessibility-editing-services/visual-and-accessibility-editing-services.ts'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Visual & Accessibility Editing Services | Research Impact',
    description: 'Expert editing improves research documents, figures, tables, and layouts to meet global accessibility standards for clearer, stronger publications.',
    keywords: ['Visual & Accessibility Editing,Visual and Accessibility Editing,Accessible document editing,Academic accessibility services,Manuscript visual enhancement'],
    slug: '/services/academic-editorial-services/visual-and-accessibility-editing-services/',
})


const page = () => {
    return (
        <>
            <VisualAndAccessibilityEditingService />
            <CommonWhoWeServe
                {...visualAndAccessibilityEditingServicesWhoWeServeData}
            />
            <VisualAndAccessibilityEditingComplete />
            <CommonTestimonial
                {...visualAndAccessibilityEditingServicesTestimonialData}
            />
            <CommonFAQ
                {...visualAndAccessibilityEditingServicesFaqData}
            />
            <InsightsSection />
        </>
    )
}

export default page