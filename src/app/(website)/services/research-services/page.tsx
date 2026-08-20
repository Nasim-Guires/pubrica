import { ClinicalResearchProcessTabs } from '@/components/services/research-services/ClinicalResearchProcessTabs'
import { ResearchJourneyPhases } from '@/components/services/research-services/ResearchJourneyPhases'
import { ResearchPackagesSection } from '@/components/services/research-services/ResearchPackagesSection'
import ResearchServicesHero from '@/components/services/research-services/ResearchServicesHero'
import ResearchServicesSections from '@/components/services/research-services/ResearchServicesSections'
import { ResearchWorkflowProcess } from '@/components/services/research-services/ResearchWorkflowProcess'
import { WhoWeServeSection } from '@/components/services/research-services/WhoWeServeSection'
import { TestimonialsSection } from '@/components/services/research-services/TestimonialsSection'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import CommonFAQ from '@/components/common/FAQ'

export const professionalResearchFAQ = {
  title: "Frequently Asked Questions – Professional Research Services",
  faqs: [
    {
      question: "1. What are the common challenges faced in conducting professional research?",
      answer: "The common challenges include funding constraints, difficulties in collecting data, problems with methodology, ethical clearances, time constraints, difficulties in accessing literature, and ensuring research validity and reliability."
    },
    {
      question: "2. What role do research services play in academic and corporate studies?",
      answer: "The research services assist in improving study design, analysis, literature review, manuscript preparation, editing, formatting, and ensuring compliance, thereby improving the quality, efficiency, and overall outcome of research."
    },
    {
      question: "3. What are the ethical standards followed in professional research?",
      answer: "Professional research is guided by ethical principles such as obtaining consent, confidentiality, integrity of data, avoiding plagiarism, authorship, ethical approval, transparency, and reporting of results."
    },
    {
      question: "4. How do research services assist with data interpretation and insights?",
      answer: "Research services can help by using the right statistical analysis techniques, accurately interpreting the results, identifying patterns, creating visualizations, and explaining the information to facilitate meaningful conclusions."
    },
    {
      question: "5. What tools and methodologies are commonly used in advanced research?",
      answer: "Advanced research techniques involve the use of statistical software, qualitative analysis software, systematic review methodologies, experimental designs, surveys, regression analysis, data visualization tools, and evidence-based methodologies."
    }
  ]
};

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
    <CommonFAQ
        title={professionalResearchFAQ.title} 
        faqs={professionalResearchFAQ.faqs} 
      />
    <InsightsSection/>
    </>
  )
}

export default page