import CommonTestimonial from '@/components/common/CommonTestimonials'
import CommonWhoWeServe from '@/components/common/CommonWhoWeServe'
import CommonFAQ from '@/components/common/FAQ'
import HealthEconomicsOutcomeResearch from '@/components/services/data-analytics-machine-learning/health-economics-outcome-research/HealthEconomicsOutcomeResearch'
import HealthEconomicsPackages from '@/components/services/data-analytics-machine-learning/health-economics-outcome-research/HealthEconomicsPackages'
import OurApproachSectionHealthEconomicsOutcomeResearch from '@/components/services/data-analytics-machine-learning/health-economics-outcome-research/OurApproachSection-HealthEconomicsOutcomeResearch'
import { HealthEconomicsOutcomeFaqs, HealthEconomicsOutcomeResearchWhoWeServe, HealthEconomicsOutcomeTestimonials } from '@/lib/services/data/data-analytics-machine-learning/HealthEconomicsOutcomeResearchTestimonials'
import React from 'react'
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";


const page = () => {
    return (
        <>
            <HealthEconomicsOutcomeResearch />
            <CommonWhoWeServe
                title="Who We Serve"
                description="At Pubrica, our Health Economics & Outcomes Research (HEOR) services support stakeholders across healthcare, life sciences, academia, and public policy by delivering robust, evidence-based insights for market access, reimbursement, and healthcare decision-making."
                data={HealthEconomicsOutcomeResearchWhoWeServe}
            />
            <OurApproachSectionHealthEconomicsOutcomeResearch />
            <CommonTestimonial
                title="Testimonials"
                description="Learn how Pubrica’s Health Economics & Outcomes Research (HEOR) services have empowered researchers and healthcare stakeholders to generate evidence-based insights that drive value, improve patient outcomes, and support policy and reimbursement decisions. Our solutions strengthen decision-making, demonstrate cost-effectiveness, and enhance visibility in both academia and the healthcare industry. Here is what our clients say:"
                testimonials={HealthEconomicsOutcomeTestimonials}
            />
            <HealthEconomicsPackages />

            <CommonFAQ
                title="Frequently Asked Questions – Health Economics & Outcomes Research"
                faqs={HealthEconomicsOutcomeFaqs}
            />
            <InsightsSection/>
        </>
    )
}

export default page