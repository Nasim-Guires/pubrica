import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import EducationEditorialServiceHeroSection from '@/components/services/education-editorial-service/EducationEditorialServiceHeroSection'
import EducationEditorialServiceWorksSection from '@/components/services/education-editorial-service/EducationEditorialServiceWorksSection'
import { educationEditorialServiceFaqData, educationEditorialTestimonialData, educationEditorialWhoWeServeData } from '@/lib/education-editorial-service/education-editorial-service'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Education Editorial Services | Pubrica Editing Experts',
    description: 'Professional education editorial services for research, curriculum, and EdTech content with expert accuracy and global standards.',
    keywords: ['Education Editorial Services', 'academic editing', 'curriculum editing', 'educational content editing', 'pedagogy editing'],
    slug: '/services/education-editorial-service',
})

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