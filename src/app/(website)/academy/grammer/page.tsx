import type { Metadata } from "next";
import ArticalIndexPage from "../artical/page";

export const metadata: Metadata = {
  title: "Grammar - Pubrica Academy",
  description: "Writing and grammar guidance for researchers — parallel construction, tense, phrasing, and more from Pubrica Academy.",
  // Renders the same content as /academy/artical (its primary URL) — canonicalized there
  // rather than to itself, since this page has no distinct content of its own.
  alternates: {
    canonical: "https://pubrica.com/academy/artical/",
  },
};

export default function GrammarPage() {
  return <ArticalIndexPage />;
}
