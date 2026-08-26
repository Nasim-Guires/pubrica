import { constructMetadata } from "@/lib/metadata";
import IndustryNewsPageClient from "@/components/academy/industry-news/IndustryNewsPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (industry news articles on
// publication ethics and peer review).
export const metadata = constructMetadata({
  title: "Industry News - Pubrica",
  description:
    "Browse Pubrica Academy's industry news covering publication ethics, peer review, and manuscript evaluation in scientific journals.",
  slug: "/academy/industry-news",
});

export default function Page() {
  return <IndustryNewsPageClient />;
}
