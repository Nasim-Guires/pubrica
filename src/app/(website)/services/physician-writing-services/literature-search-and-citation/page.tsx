import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonFAQ from '@/components/common/FAQ'
import CoreAndTypesServices from '@/components/services/physician-writing-services/literature-search-and-citation/CoreAndTypesServices'
import LiteratureSearchAndCitationPage from '@/components/services/physician-writing-services/literature-search-and-citation/LiteratureSearchAndCitationPage'
import WhoWeServeAndProcessLitrarture from '@/components/services/physician-writing-services/literature-search-and-citation/WhoWeServeAndProcessLitrarture'
import { literatureSearchFaqs, literatureSearchTestimonials } from '@/lib/services/data/literature-search-and-citation/literatureSearchTestimonials '
import React from 'react'

const page = () => {
    return (
        <>
            <LiteratureSearchAndCitationPage />
            <CoreAndTypesServices />
            <WhoWeServeAndProcessLitrarture />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s Literature Search and Citation Service has supported researchers in strengthening their manuscripts with evidence-based references, journal-specific formatting, and high-quality literature reviews. Here is what our clients say:"
                testimonials={literatureSearchTestimonials}
            />
            <CommonFAQ
                title="Frequently Asked Questions"
                faqs={literatureSearchFaqs}
            />
        </>
    )
}

export default page
