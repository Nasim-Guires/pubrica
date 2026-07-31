import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import EducationEditorialServiceHeroSection from '@/components/services/education-editorial-service/EducationEditorialServiceHeroSection'
import EducationEditorialServiceWorksSection from '@/components/services/education-editorial-service/EducationEditorialServiceWorksSection'
import { educationEditorialServiceFaqData, educationEditorialTestimonialData, educationEditorialWhoWeServeData } from '@/lib/education-editorial-service/education-editorial-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

const page = () => {
    return (
        <>
            <EducationEditorialServiceHeroSection />
            <CommonWhoWeServe
                {...educationEditorialWhoWeServeData}
            />
            <EducationEditorialServiceWorksSection />
            <CommonTestimonial
                {...educationEditorialTestimonialData}
            />
            <CommonFAQ
                title={educationEditorialServiceFaqData.title}
                faqs={educationEditorialServiceFaqData.faqs}
            />
            <InsightsSection/>
        </>
    )
}

export default page