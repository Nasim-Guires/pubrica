import { constructMetadata } from "@/lib/metadata";
import JournalSelectionPageClient from "@/components/academy/articles/journal-selection/JournalSelectionPageClient";

// Live pubrica.com page at this URL has no meta description tag, so the description
// below is written from this page's own real content (a carousel of Pubrica Academy
// journal-selection guides).
export const metadata = constructMetadata({
  title: "Journal Selection - Pubrica",
  description:
    "A curated collection of Pubrica Academy articles on choosing the right journal, covering scope, quartile, indexing, and avoiding predatory journals.",
  slug: "/academy/articles/journal-selection",
});

export default function Page() {
  return <JournalSelectionPageClient />;
}
