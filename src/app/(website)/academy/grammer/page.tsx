import type { Metadata } from "next";
import ArticalIndexPage from "../artical/page";

export const metadata: Metadata = {
  title: "Grammar - Pubrica Academy",
  description: "Writing and grammar guidance for researchers — parallel construction, tense, phrasing, and more from Pubrica Academy.",
};

export default function GrammarPage() {
  return <ArticalIndexPage />;
}
