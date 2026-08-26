import { constructMetadata } from "@/lib/metadata";
import PhrasingItRightPageClient from "@/components/academy/artical/phrasing-it-right/PhrasingItRightPageClient";

export const metadata = constructMetadata({
  title: "phrasing it Right - Pubrica",
  description:
    "Avoiding plagiarism is one of the biggest challenges that students and research scholars face when they have to use information and facts that have been",
  slug: "/academy/artical/phrasing-it-right",
});

export default function Page() {
  return <PhrasingItRightPageClient />;
}
