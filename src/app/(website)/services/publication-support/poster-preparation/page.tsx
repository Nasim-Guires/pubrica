import TestimonialsAndFAQSections from '@/components/services/publication-support/poster-preparation/TestimonialsAndFaqSection'
import ComplianceAndSampleSections from '@/components/services/publication-support/poster-preparation/ComplianceAndSampleSections'
import PosterPreparationService from '@/components/services/publication-support/poster-preparation/PosterPreparationService'
import PosterProcessAndCompliance from '@/components/services/publication-support/poster-preparation/PosterProcessAndCompliance'
import PosterServicePackagesSection from '@/components/services/publication-support/poster-preparation/PosterServicePackagesSection'
import WhoWeServeSection from '@/components/services/publication-support/poster-preparation/WhoWeServeSection'
// import ComplianceAndSampleSection from '@/components/services/publication-support/poster-preparation/'

import React from 'react'
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
  title: 'Scientific Poster & Presentation Design and Creation Service',
  description: 'Poster preparation for your research findings is handled by Pubrica experts, with visual artists managing layout, pagination, and graphics.',
  keywords: ['Poster preparation', 'Scientific research poster preparation design services', 'Visual Poster Preparation Services', 'Academic poster presentation design services', 'poster preparation service'],
  slug: '/services/publication-support/poster-preparation',
})

const page = () => {
  return (
   <>
   <PosterPreparationService/>
   <WhoWeServeSection/>
   <PosterProcessAndCompliance/>
   <ComplianceAndSampleSections/>
   <PosterServicePackagesSection/>
   <TestimonialsAndFAQSections/>
   </>
  )
}

export default page