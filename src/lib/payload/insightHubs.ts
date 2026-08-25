export interface InsightHub {
  slug: string;
  label: string;
  description: string;
}

/**
 * Insight posts encode their section via a urlPath prefix (e.g. "sample-work/some-post").
 * These are the known sections on pubrica.com/insights — each is a hub listing page,
 * not a single article, at /insights/<slug>.
 */
export const INSIGHT_HUBS: InsightHub[] = [
  { slug: "sample-work", label: "Sample Work", description: "A look at the quality of work created by Pubrica writers across subjects and domains." },
  { slug: "study-guide", label: "Study Guide", description: "Guides covering research methods, study designs, and academic best practices." },
  { slug: "experimental-methodology", label: "Experimental Methodology", description: "Explainers on research and experimental design methodologies." },
  { slug: "research-services", label: "Research Service", description: "An overview of Pubrica's research support services." },
  { slug: "checklist", label: "Checklist", description: "Checklists to support you throughout the research and reporting process." },
  { slug: "proof-reading", label: "Proof Reading", description: "Guidance on proofreading and editing academic manuscripts." },
  { slug: "r-and-d", label: "R&D", description: "Insights on research and development topics." },
  { slug: "news-and-industry", label: "News & Industry", description: "Latest news and industry updates in academic publishing." },
  { slug: "medical-journey", label: "Medical Journey", description: "Insights into patient journeys and medical research analytics." },
  { slug: "news", label: "News", description: "Latest news from Pubrica and the research community." },
];

export function getInsightHub(slug: string): InsightHub | undefined {
  return INSIGHT_HUBS.find((h) => h.slug === slug);
}

export interface StaticInsightHub {
  slug: string;
  label: string;
  description: string;
}

/**
 * These sections exist as real hub pages on pubrica.com (e.g. /insights/infographics/)
 * but have no corresponding content migrated into Payload — no matching category, tag,
 * or post urlPath prefix exists anywhere in the CMS. They're rendered from the same
 * static curated list already shown on the main Insights page, matching the reference
 * site's own behaviour where individual cards are plain images, not links.
 */
export const STATIC_INSIGHT_HUBS: StaticInsightHub[] = [
  {
    slug: "infographics",
    label: "Infographics",
    description:
      "Infographics are the way to go when it comes to presenting new or trending topics of interest in the academic research community.",
  },
  {
    slug: "storyboard",
    label: "Storyboards",
    description:
      "Storyboarding is how we dialogue with you; we want to communicate news, views, trends, and technology via storyboarding.",
  },
  {
    slug: "fact-sheet",
    label: "Fact Sheet",
    description: "Our factsheets are designed to help you enhance your knowledge across subjects.",
  },
];

export function getStaticInsightHub(slug: string): StaticInsightHub | undefined {
  return STATIC_INSIGHT_HUBS.find((h) => h.slug === slug);
}
