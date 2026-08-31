import faqQuestionOverrides from "./faqQuestionOverrides.json";

/**
 * Recovered FAQ question text, keyed by post urlPath — see
 * fixBrokenFaqSection in lexical.tsx for why this exists. Built by scraping
 * the live pubrica.com page for each affected post and matching its
 * accordion question order 1:1 against the post's own answer-paragraph
 * order; only posts where the counts matched exactly were included.
 */
export function getFaqQuestionOverrides(urlPath?: string): string[] | undefined {
  if (!urlPath) return undefined;
  return (faqQuestionOverrides as Record<string, string[]>)[urlPath];
}
