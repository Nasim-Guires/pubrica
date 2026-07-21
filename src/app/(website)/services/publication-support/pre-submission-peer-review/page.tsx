import InsightsSection from '@/components/services/editing-translation/Insights/InsightsSection'
import FaqSection from '@/components/services/publication-support/peer-review-pre-submission/FaqSection'
import OutcomeAccordionSection from '@/components/services/publication-support/peer-review-pre-submission/OutcomeAccordionSection'
import PackagesAndTestimonialsSection from '@/components/services/publication-support/peer-review-pre-submission/PackagesAndTestimonialsSection'
import PeerReviewOverviewSection from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewOverviewSection'
import PeerReviewPreSubmissionClient from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewPreSubmissionClient'
// import BottomSections from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewSection
import PeerReviewSection from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewSection'
import ReviewerProcessSection from '@/components/services/publication-support/peer-review-pre-submission/ReviewerProcessSection'
import React from 'react'

const page = () => {
  return (
   <>
   <PeerReviewPreSubmissionClient/>
   <OutcomeAccordionSection/>
   <ReviewerProcessSection/>
   <PeerReviewOverviewSection/>
   <PackagesAndTestimonialsSection/>
   <FaqSection/>
   <InsightsSection/>
   </>
  )
}

export default page