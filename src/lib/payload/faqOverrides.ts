import faqQuestionOverrides from "./faqQuestionOverrides.json";
import faqContentOverrides from "./faqContentOverrides.json";

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

export interface FaqContentOverrideItem {
  question: string;
  answer: string;
}

/**
 * Full recovered question+answer pairs, keyed by post urlPath — for posts
 * whose migrated Payload content doesn't line up with recovered questions
 * at all (answers missing entirely, or split/merged across a different
 * number of paragraphs than there are questions, e.g. one question's answer
 * was originally a bullet list that got flattened into several separate
 * paragraphs). Scraped directly from the live pubrica.com page since the
 * answer text itself — not just the question — had to be recovered.
 */
export function getFaqContentOverrides(urlPath?: string): FaqContentOverrideItem[] | undefined {
  if (!urlPath) return undefined;
  return (faqContentOverrides as Record<string, FaqContentOverrideItem[]>)[urlPath];
}
