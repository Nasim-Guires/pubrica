import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import ScientificGrantReviewExtendedPage from '@/components/services/editing-and-translation/scientific-grant-review/ScientificGrantReviewExtendedPage'
import ScientificGrantReviewPage from '@/components/services/editing-and-translation/scientific-grant-review/ScientificGrantReviewPage'
import { scientificGrantReviewFAQData, scientificGrantReviewWorkflowData } from '@/lib/services/editing-and-translation/scientific-grant-review'
import React from 'react'

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