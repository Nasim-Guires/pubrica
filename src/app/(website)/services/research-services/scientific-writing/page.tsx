import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import AcademicWritingServicePage from '@/components/services/research-services/scientific-writing/AcademicWritingServicePage'
import ScientificServicesAndPackages from '@/components/services/research-services/scientific-writing/ScientificServicesAndPackages'
import ScientificWritingPage from '@/components/services/research-services/scientific-writing/ScientificWritingPage'
import { researchWritingServicesFAQ, researchWritingServicesTestimonials, researchWritingServicesWhoWeServe } from '@/lib/services/data/scientific-writing/researchWritingServicesTestimonials'
import React from 'react'

const page = () => {
    return (
        <>
            <ScientificWritingPage />
            <CommonWhoWeServe
                title={researchWritingServicesWhoWeServe.title}
                description={researchWritingServicesWhoWeServe.description}
                data={researchWritingServicesWhoWeServe.data}
            />

            <ScientificServicesAndPackages />
            <AcademicWritingServicePage />
            <CommonTestimonial
                title={researchWritingServicesTestimonials.title}
                description={researchWritingServicesTestimonials.description}
                testimonials={researchWritingServicesTestimonials.testimonials}
            />
            <CommonFAQ
                title={researchWritingServicesFAQ.title}
                faqs={researchWritingServicesFAQ.faqs}
            />
        </>
    )
}

export default page