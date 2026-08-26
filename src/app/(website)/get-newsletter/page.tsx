import { constructMetadata } from "@/lib/metadata";
import GetNewsletterPageClient from "@/components/get-newsletter/GetNewsletterPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (a newsletter archive covering
// Pubrica's manuscript, meta-analysis, journal selection, and grant review services).
export const metadata = constructMetadata({
  title: "Get Newsletter - Pubrica",
  description:
    "Browse Pubrica's newsletter archive featuring updates on manuscript editing, meta-analysis, journal selection, and other research support services.",
  slug: "/get-newsletter",
});

export default function Page() {
  return <GetNewsletterPageClient />;
}
