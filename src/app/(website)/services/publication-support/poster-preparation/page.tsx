import TestimonialsAndFAQSections from '@/components/services/publication-support/poster-preparation/TestimonialsAndFaqSection'
import ComplianceAndSampleSections from '@/components/services/publication-support/poster-preparation/ComplianceAndSampleSections'
import PosterPreparationService from '@/components/services/publication-support/poster-preparation/PosterPreparationService'
import PosterProcessAndCompliance from '@/components/services/publication-support/poster-preparation/PosterProcessAndCompliance'
import PosterServicePackagesSection from '@/components/services/publication-support/poster-preparation/PosterServicePackagesSection'
import WhoWeServeSection from '@/components/services/publication-support/poster-preparation/WhoWeServeSection'
// import ComplianceAndSampleSection from '@/components/services/publication-support/poster-preparation/'

import React from 'react'

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