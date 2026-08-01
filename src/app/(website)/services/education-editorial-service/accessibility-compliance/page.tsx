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