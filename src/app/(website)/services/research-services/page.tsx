import { ClinicalResearchProcessTabs } from '@/components/services/research-services/ClinicalResearchProcessTabs'
import { FAQAndInsightsSection } from '@/components/services/research-services/FAQAndInsightsSection'
import { ResearchJourneyPhases } from '@/components/services/research-services/ResearchJourneyPhases'
import { ResearchPackagesSection } from '@/components/services/research-services/ResearchPackagesSection'
import ResearchServicesHero from '@/components/services/research-services/ResearchServicesHero'
import ResearchServicesSections from '@/components/services/research-services/ResearchServicesSections'
import { ResearchWorkflowProcess } from '@/components/services/research-services/ResearchWorkflowProcess'
import { WhoWeServeSection } from '@/components/services/research-services/WhoWeServeSection'
import { TestimonialsSection } from '@/components/services/research-services/TestimonialsSection'
import React from 'react'

const page = () => {
  return (
    <>
    <ResearchServicesHero/>
    <ResearchServicesSections/>
    <WhoWeServeSection/>
    <ResearchWorkflowProcess/>
    <ClinicalResearchProcessTabs/>
    <ResearchJourneyPhases/>
    <TestimonialsSection/>
    <ResearchPackagesSection/>
    <FAQAndInsightsSection/>
    </>
  )
}

export default page