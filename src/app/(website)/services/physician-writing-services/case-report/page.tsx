import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import CaseReportDetails from "@/components/services/physician-writing-services/case-report/CaseReportDetails";
import CaseReportPackagesAndSamples from "@/components/services/physician-writing-services/case-report/CaseReportPackagesAndSamples";
import CaseReportServicesAndCompliance from "@/components/services/physician-writing-services/case-report/CaseReportServicesAndCompliance";
import CaseReportWorkflowAndDisciplines from "@/components/services/physician-writing-services/case-report/CaseReportWorkflowAndDisciplines";
import CaseReportWritingService from "@/components/services/physician-writing-services/case-report/CaseReportWritingService";
import {
  caseReportFaqs,
  caseReportWritingTestimonials,
} from "@/lib/services/data/research-services/caseReportWritingTestimonials";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";
import { constructMetadata } from "@/lib/metadata";

import React from "react";

export const metadata = constructMetadata({
  title: "Medical Case Report Writing Service | Journal Publication",
  description: "Publish clinically relevant case reports with expert writing support aligned with CARE, ICMJE, and journal requirements for successful publication.",
  keywords: ["clinical case report writing service", "Case report writing service", "SCARE guidelines", "Journal-compliant case reports", "Clinical documentation service"],
  slug: "/services/physician-writing-services/case-report",
});

const page = () => {
  return (
    <>
      <CaseReportWritingService />
      <CaseReportDetails />
      <CaseReportWorkflowAndDisciplines />
      <CaseReportServicesAndCompliance />
      <CaseReportPackagesAndSamples />
      <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's case report writing service has enabled clinicians to publish rare and novel clinical observations in leading journals with structured, CARE-compliant manuscripts. Here is what our clients say:"
        testimonials={caseReportWritingTestimonials}
      />
      <CommonFAQ title="Frequently Asked Questions" faqs={caseReportFaqs} />
      <InsightsSection/>
    </>
  );
};

export default page;
