import { constructMetadata } from "@/lib/metadata";
import WebsiteTreeStructurePageClient from "@/components/website-tree-structure/WebsiteTreeStructurePageClient";

export const metadata = constructMetadata({
  title: "Website Tree Structure - Pubrica",
  description:
    "Website Tree Structure Menu Services Discovery & Intelligence Services Publication Support Services Editing & Translation Research Services",
  slug: "/website-tree-structure",
});

export default function Page() {
  return <WebsiteTreeStructurePageClient />;
}
