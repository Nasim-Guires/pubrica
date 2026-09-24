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
  title: 'Conference Presentation and Scientific Poster Services',
  description: 'Transform your research into a professional scientific poster with Pubrica’s expert design, content editing, data visualization, formatting, and support',
  keywords: ['Poster preparation,Scientific research poster preparation design services', 'Visual Poster Preparation Services,Academic poster presentation design services', 'poster preparation service',],
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