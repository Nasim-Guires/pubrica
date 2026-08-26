import { constructMetadata } from "@/lib/metadata";
import BusinessSourcesPageClient from "@/components/academy/referencing-style/business-sources/BusinessSourcesPageClient";

export const metadata = constructMetadata({
  title: "Specific business sources cited in APA style - Pubrica",
  description:
    "Let's discuss how to cite a few specific sources in APA style. Examples comprise annual reports, public reports, company reports, SWOT, and surveys.",
  slug: "/academy/referencing-style/business-sources",
});

export default function Page() {
  return <BusinessSourcesPageClient />;
}
