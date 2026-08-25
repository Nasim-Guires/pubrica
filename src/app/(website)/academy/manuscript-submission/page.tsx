import type { Metadata } from "next";
import ManuscriptGuidelinesPage from "../manuscript-guidelines/page";

export const metadata: Metadata = {
  title: "Manuscript Submission - Pubrica Academy",
  description: "Guidance on manuscript preparation — copyediting, peer review, rejection reasons, reporting guidelines, and submission best practices.",
};

export default function ManuscriptSubmissionPage() {
  return <ManuscriptGuidelinesPage />;
}
