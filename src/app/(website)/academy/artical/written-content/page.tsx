import { constructMetadata } from "@/lib/metadata";
import WrittenContentPageClient from "@/components/academy/artical/written-content/WrittenContentPageClient";

export const metadata = constructMetadata({
  title: "Written Content - Pubrica",
  description:
    "Strange as it may sound but written content does have voices, yes. As a matter of fact, there have been endless debates on which voice (active or passive)",
  slug: "/academy/artical/written-content",
});

export default function Page() {
  return <WrittenContentPageClient />;
}
