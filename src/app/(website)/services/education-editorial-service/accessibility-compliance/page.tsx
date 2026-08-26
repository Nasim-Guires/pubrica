import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import { EditorialWorkflowSection } from '@/components/common/EditorialWorkflowSection'
import CommonFAQ from '@/components/common/FAQ'
import AccessibilityComplianceBannerPage from '@/components/services/education-editorial-service/accessibility-compliance/AccessibilityComplianceBannerPage'
import AccessibilityComplianceComprehensiveSection from '@/components/services/education-editorial-service/accessibility-compliance/AccessibilityComplianceComprehensiveSection'
import AccessibilityCompliancePage from '@/components/services/education-editorial-service/accessibility-compliance/AccessibilityCompliancePage'
import { accessibilityComplianceFaq, accessibilityComplianceTestimonials, accessibilityComplianceWhoWeServe, accessibilityComplianceWorkflow } from '@/lib/services/education-editorial-service/accessibility-compliance/accessibility-compliance'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from '@/lib/metadata'

export const metadata = constructMetadata({
    title: 'Accessibility Compliance Services for Academic Manuscripts',
    description: 'Ensure your research papers, theses, and academic manuscripts meet WCAG, Section 508, and publisher Accessibility Compliance standards.',
    keywords: ['Accessibility Compliance', 'publication support services', 'academic manuscript preparation', 'journal submission support', 'scientific publishing'],
    slug: '/services/education-editorial-service/accessibility-compliance',
})

const page = () => {
    return (
        <>
            <AccessibilityCompliancePage />
            <CommonWhoWeServe {...accessibilityComplianceWhoWeServe} />
            <AccessibilityComplianceBannerPage />
            <EditorialWorkflowSection
                heading={accessibilityComplianceWorkflow.heading}
                subheading={accessibilityComplianceWorkflow.subheading}
                description={accessibilityComplianceWorkflow.description}
                steps={accessibilityComplianceWorkflow.steps}
            />
            <AccessibilityComplianceComprehensiveSection />
            <CommonTestimonial {...accessibilityComplianceTestimonials} />
            <CommonFAQ {...accessibilityComplianceFaq} />
            <InsightsSection />
        </>
    )
}

export default page