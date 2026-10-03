/**
 * Page-specific data for the /insights/check-list/ card listing and the
 * /insights/checklist/<slug>/ card detail pages. Only these two pages read it.
 *
 * ORDER — the card order on the live pubrica.com listing.
 * TITLES — live pubrica.com page titles (<h1>) that differ from the CMS post
 * title. Keyed by post slug. Slugs not listed here use the CMS title, which
 * already matches the live page.
 */
export const CHECKLIST_CARD_ORDER: string[] = [
  "agree-ii-checklist",
  "srqr-checklist-introduction",
  "esmo-grow-checklist-introduction",
  "moose-checklist-meta-analysis-observational-studies",
  "evidence-based-practice-quality-improvement-checklist",
  "spirit-clinical-trial-protocol-checklist",
  "coreq-qualitative-research-reporting-guideline",
  "tidier-checklist-intervention-reporting",
  "prisma-2020-reporting-checklist",
  "strobe-observational-studies-checklist",
  "preliminary-planning-meta-analysis-checklist",
  "conserve-2021-reporting-checklist",
  "strobe-cohort-study-checklist",
  "stard-2015-reporting-checklist",
  "gwas-literature-review-checklist",
  "consort-2010-reporting-checklist",
  "squire-quality-improvement-checklist",
  "strobe-cross-sectional-studies-checklist",
  "strobe-case-control-study-checklist",
  "agree-clinical-practice-guidelines-checklist",
  "care-case-report-checklist",
  "srqr-qualitative-research-checklist",
  "cheers-health-economic-evaluation-checklist",
  "cochrane-dissemination-checklist",
  "arrive-animal-research-checklist",
];

export const CHECKLIST_CARD_TITLES: Record<string, string> = {
  "coreq-qualitative-research-reporting-guideline": "COREQ Checklist",
  "strobe-observational-studies-checklist": "STROBE checklists for Observational",
  "preliminary-planning-meta-analysis-checklist": "Preliminary Checklist",
  "strobe-cohort-study-checklist": "STROBE Checklist",
  "gwas-literature-review-checklist": "Literature Review Checklist",
  "strobe-cross-sectional-studies-checklist": "STROBE Checklist",
  "strobe-case-control-study-checklist": "STROBE Checklist",
  "care-case-report-checklist": "CARE Checklist",
  "cochrane-dissemination-checklist": "Cochrane Dissemination Checklist",
};

/** Live-page title for a card, falling back to the CMS title. */
export function checklistCardTitle(slug: string, cmsTitle: string): string {
  return CHECKLIST_CARD_TITLES[slug] ?? cmsTitle;
}
