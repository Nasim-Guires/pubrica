import type { Metadata } from "next";
import ManuscriptGuidelinesPage from "../manuscript-guidelines/page";

export const metadata: Metadata = {
  title: "Manuscript Submission - Pubrica Academy",
  description: "Guidance on manuscript preparation — copyediting, peer review, rejection reasons, reporting guidelines, and submission best practices.",
  // Renders the same content as /academy/manuscript-guidelines (its primary URL) — canonicalized
  // there rather than to itself, since this page has no distinct content of its own.
  alternates: {
    canonical: "https://pubrica.com/academy/manuscript-guidelines",
  },
};

export default function ManuscriptSubmissionPage() {
  return <ManuscriptGuidelinesPage />;
}
