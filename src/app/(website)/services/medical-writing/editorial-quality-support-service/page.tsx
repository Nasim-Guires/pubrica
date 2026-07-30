import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import EditorialProcessAndCompliance from '@/components/services/medical-writing/editorial-quality-support-service/EditorialProcessAndCompliance'
import EditorialQualitySupportPage from '@/components/services/medical-writing/editorial-quality-support-service/EditorialQualitySupportPage'
import { editorialQualitySupportFAQs, editorialQualitySupportWhoWeServe, editorialQualityTestimonials } from '@/lib/services/data/medical-writing/editorial-quality-support-service/editorialQualitySupportTestimonialse'
import { regulatoryWritingTestimonials } from '@/lib/services/data/regulatory-writing/regulatoryWritingTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <EditorialQualitySupportPage />
            <CommonWhoWeServe
                title={editorialQualitySupportWhoWeServe.title}
                description={editorialQualitySupportWhoWeServe.description}
                data={editorialQualitySupportWhoWeServe.data}
            />
            <EditorialProcessAndCompliance />
            <CommonTestimonial
                title={editorialQualityTestimonials.title}
                description={editorialQualityTestimonials.description}
                testimonials={editorialQualityTestimonials.testimonials}
            />
            <CommonFAQ
                title={editorialQualitySupportFAQs.title}
                faqs={editorialQualitySupportFAQs.faqs}
            />
            <InsightsSection/>
        </>
    )
}

export default page