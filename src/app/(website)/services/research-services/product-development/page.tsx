import CommonPackages from '@/components/common/CommonPackages'
import CommonTestimonial from '@/components/common/CommonTestimonials'
// import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import ComplianceAndSamplesProductDevelopment from '@/components/services/research-services/product-development/ComplianceAndSamplesProductDevelopment'
import IndustryVerticalsAndProcess from '@/components/services/research-services/product-development/IndustryVerticalsAndProcess'
import ProductDevelopmentIncludedFeatures from '@/components/services/research-services/product-development/ProductDevelopmentIncludedFeatures'
import ServicesResearchProductDevelopment from '@/components/services/research-services/product-development/ServicesResearchProductDevelopment'
import { productDevelopmentFaqs, productDevelopmentPackages, productDevelopmentTestimonials, productDevelopmentWhoWeServe, productDevelopmentWorkflow } from '@/lib/services/data/research-services/product-development'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'
import IndustryVerticals from '@/components/services/research-services/product-development/IndustryVerticals'

export const metadata = constructMetadata({
  title: 'Core Discovery & Intelligence Services for Pharma & Biotech',
  description: 'Pubrica provides evidence-based discovery and intelligence for pharma, nutra, biotech & devices, covering ingredients & patents.',
  keywords: ['discovery&intelligence', 'prior art search report', 'novelty search report', 'validity search report', 'patent invalidity search report'],
  slug: '/services/research-services/product-development',
})

const page = () => {
  return (

    <>
      <ServicesResearchProductDevelopment />
      {/* <CommonWhoWeServe
        title={productDevelopmentWhoWeServe.title}
        description={productDevelopmentWhoWeServe.description}
        data={productDevelopmentWhoWeServe.data}
      /> */}
      <IndustryVerticalsAndProcess />
      <IndustryVerticals />
      <EditorialWorkflowSection
        heading={productDevelopmentWorkflow.heading}
        subheading={productDevelopmentWorkflow.subheading}
        description={productDevelopmentWorkflow.description}
        steps={productDevelopmentWorkflow.steps}
      />
      <ComplianceAndSamplesProductDevelopment />
      <CommonPackages
        title={productDevelopmentPackages.title}
        subtitle={productDevelopmentPackages.subtitle}
        description={productDevelopmentPackages.description}
        packages={productDevelopmentPackages.packages}
      />
      <ProductDevelopmentIncludedFeatures />
      <CommonTestimonial
        title={productDevelopmentTestimonials.title}
        description={productDevelopmentTestimonials.description}
        testimonials={productDevelopmentTestimonials.testimonials}
      />
      <CommonFAQ
        title={productDevelopmentFaqs.title}
        faqs={productDevelopmentFaqs.faqs}
      />
      <InsightsSection />
    </>
  )
}

export default page