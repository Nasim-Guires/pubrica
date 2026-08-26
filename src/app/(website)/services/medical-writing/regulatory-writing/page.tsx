import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import RegulatoryServicesSection from '@/components/services/medical-writing/regulatory-writing/RegulatoryServicesSection'
import RegulatoryWritingPackages from '@/components/services/medical-writing/regulatory-writing/RegulatoryWritingPackages'
import RegulatoryWritingPage from '@/components/services/medical-writing/regulatory-writing/RegulatoryWritingPage'
import { regulatoryWritingFAQ, regulatoryWritingTestimonials, regulatoryWritingWhoWeServe } from '@/lib/services/data/regulatory-writing/regulatoryWritingTestimonials'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Regulatory Writing Services for Pharma, Life Sciences',
    description: 'Pubrica offers expert regulatory writing services for pharma, biotech, and medical devices—compliant, accurate, and ready for global submission.',
    keywords: ['regulatory writing services', 'regulatory medical writing', 'pharma regulatory documentation writing', 'clinical study report writing', 'medical device CER writing'],
    slug: '/services/medical-writing/regulatory-writing',
})

const page = () => {
    return (
        <>
            <RegulatoryWritingPage />
            <CommonWhoWeServe
                title={regulatoryWritingWhoWeServe.title}
                description={regulatoryWritingWhoWeServe.description}
                data={regulatoryWritingWhoWeServe.data}
            />
            <RegulatoryServicesSection />
            <CommonTestimonial
                title={regulatoryWritingTestimonials.title}
                description={regulatoryWritingTestimonials.description}
                testimonials={regulatoryWritingTestimonials.testimonials}
            />
            <RegulatoryWritingPackages />
            <CommonFAQ
                title={regulatoryWritingFAQ.title}
                faqs={regulatoryWritingFAQ.faqs}
            />;
        </>
    )
}

export default page