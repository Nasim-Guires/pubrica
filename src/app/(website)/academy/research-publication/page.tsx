import { constructMetadata } from "@/lib/metadata";
import ResearchPublicationPageClient from "@/components/academy/research-publication/ResearchPublicationPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (a carousel of Pubrica Academy
// research articles on statistical analysis, drug development, and clinical trials).
export const metadata = constructMetadata({
  title: "Research Publication - Pubrica",
  description:
    "Explore Pubrica Academy's research publication articles covering statistical analysis, drug development, and clinical trial design.",
  slug: "/academy/research-publication",
});

export default function Page() {
  return <ResearchPublicationPageClient />;
}
