import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import FaqSection from '@/components/services/publication-support/peer-review-pre-submission/FaqSection'
import OutcomeAccordionSection from '@/components/services/publication-support/peer-review-pre-submission/OutcomeAccordionSection'
import PackagesAndTestimonialsSection from '@/components/services/publication-support/peer-review-pre-submission/PackagesAndTestimonialsSection'
import PeerReviewOverviewSection from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewOverviewSection'
import PeerReviewPreSubmissionClient from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewPreSubmissionClient'
// import BottomSections from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewSection
import PeerReviewSection from '@/components/services/publication-support/peer-review-pre-submission/PeerReviewSection'
import ReviewerProcessSection from '@/components/services/publication-support/peer-review-pre-submission/ReviewerProcessSection'
import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Pre-Submission Manuscript Review Service | Pharma & Research',
  description: 'Improve your Pharma & Research manuscript before submission. Our pre-submission review service offers expert feedback to enhance quality and acceptance.',
  keywords: ['Pre-Submission Peer Review', 'Peer review Pre submissison', 'Journal Peer Reviewing Process', 'sciencetific journal peer review service', 'journal article peer review process'],
  slug: '/services/publication-support/peer-review-pre-submission',
})

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