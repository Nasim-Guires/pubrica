import { constructMetadata } from "@/lib/metadata";
import ResearchPromotionPageClient from "@/components/academy/research-promotion/ResearchPromotionPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (a carousel of Pubrica Academy
// articles on journal-selection strategy and publication acceptance).
export const metadata = constructMetadata({
  title: "Research Promotion - Pubrica",
  description:
    "Pubrica Academy resources on research promotion, featuring guidance on journal selection, quartile rankings, and publication strategy.",
  slug: "/academy/research-promotion",
});

export default function Page() {
  return <ResearchPromotionPageClient />;
}
