import { constructMetadata } from "@/lib/metadata";
import FaqPageClient from "@/components/faq/FaqPageClient";

export const metadata = constructMetadata({
  title: "FAQ - Pubrica",
  description:
    "Pubrica's FAQ provides comprehensive answers to frequently asked questions about their academic and scientific research services.",
  slug: "/faq",
});

export default function Page() {
  return <FaqPageClient />;
}
