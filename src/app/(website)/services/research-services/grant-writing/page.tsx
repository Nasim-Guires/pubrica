// import CommonTestimonial from "@/components/common/CommonTestimonials";
import CommonFAQ from "@/components/common/FAQ";
import ComplianceAndPackagesSection from "@/components/services/research-services/grant-writing/ComplianceAndPackagesSection";
import GrantWritingOverviewSection from "@/components/services/research-services/grant-writing/GrantWritingOverviewSection";
import GrantWritingServicesOfferedSection from "@/components/services/research-services/grant-writing/GrantWritingServicesOfferedSection";
import WhoWeServeAndServiceDetailsSection from "@/components/services/research-services/grant-writing/WhoWeServeAndServiceDetailsSection";
import {
  grantWritingFAQ,
  grantWritingTestimonials,
} from "@/lib/services/data/research-services/grant-writing";
import InsightsSection from "@/components/services/medical-data-collection/InsightsSection";

import React from "react";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Research Grant Proposal Writing Services | Get Expert Help",
  description: "Create high-quality grant proposals with expert guidance, strategic planning, and funding agency compliance support to improve funding success.",
  keywords: ["Grant Writing", "grant writing services", "research grant writing services", "grant writing help", "professional grant writing services"],
  slug: "/services/research-services/grant-writing",
});

const page = () => {
  return (
    <>
      <GrantWritingOverviewSection />
      <GrantWritingServicesOfferedSection />
      <WhoWeServeAndServiceDetailsSection />
      <ComplianceAndPackagesSection />
      {/* <CommonTestimonial
        title="Testimonials"
        description="Learn how Pubrica's grant writing service has empowered researchers and institutions to secure competitive funding by delivering well-structured, compelling proposals that meet agency standards and advance impactful research. Here is what our clients say:"
        testimonials={grantWritingTestimonials}
      /> */}
      <CommonFAQ
        title="Frequently Asked Questions – Grant Writing Service"
        faqs={grantWritingFAQ}
      />
      <InsightsSection />
    </>
  );
};

export default page;
