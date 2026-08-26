import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import ScientificGrantReviewExtendedPage from '@/components/services/editing-and-translation/scientific-grant-review/ScientificGrantReviewExtendedPage'
import ScientificGrantReviewPage from '@/components/services/editing-and-translation/scientific-grant-review/ScientificGrantReviewPage'
import { scientificGrantReviewFAQData, scientificGrantReviewWorkflowData } from '@/lib/services/editing-and-translation/scientific-grant-review'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Expert review service for all scientific grant proposal & researches',
    description: 'Need to get that grant for your research, need someone to review to make it better? Contact us for all scientific grant proposal review.',
    slug: '/services/editing-and-translation/scientific-grant-review',
})

const page = () => {
    return (
        <>
            <ScientificGrantReviewPage />
            <EditorialWorkflowSection
                heading={scientificGrantReviewWorkflowData.heading}
                subheading={scientificGrantReviewWorkflowData.subheading}
                description={scientificGrantReviewWorkflowData.description}
                steps={scientificGrantReviewWorkflowData.steps}
            />
            <ScientificGrantReviewExtendedPage />
            <CommonFAQ
                title={scientificGrantReviewFAQData.title}
                faqs={scientificGrantReviewFAQData.faqs}
            />
        </>
    )
}

export default page