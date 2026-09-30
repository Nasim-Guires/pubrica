import type { Metadata } from "next";
import { insightCardPages, type ZoomGridPage } from "@/lib/insights/cardPages";
import { ZoomGridCardPage } from "@/components/insight/InsightCardPages";

// All News "Research Service" card page — same layout and content as
// https://pubrica.com/insights/research-services/. (The Study Guide list that
// used to be here belongs at /insights/study-guide/, where it now lives.)
const page = insightCardPages["research-services"] as ZoomGridPage;

export const metadata: Metadata = {
  title: { absolute: page.docTitle },
  description: page.description,
};

export default function ResearchServicesPage() {
  return <ZoomGridCardPage page={page} />;
}
