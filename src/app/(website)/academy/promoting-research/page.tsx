import { constructMetadata } from "@/lib/metadata";
import PromotingResearchPageClient from "@/components/academy/promoting-research/PromotingResearchPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (a carousel of Pubrica Academy
// research articles on statistical analysis, drug development, and clinical trials).
export const metadata = constructMetadata({
  title: "Promoting Research - Pubrica",
  description:
    "Explore Pubrica Academy articles on promoting research, covering statistical analysis, drug development, and clinical trial design.",
  slug: "/academy/promoting-research",
});

export default function Page() {
  return <PromotingResearchPageClient />;
}
