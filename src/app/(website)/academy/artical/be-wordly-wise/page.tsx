import { constructMetadata } from "@/lib/metadata";
import BeWordlyWisePageClient from "@/components/academy/artical/be-wordly-wise/BeWordlyWisePageClient";

export const metadata = constructMetadata({
  title: "Be Wordly Wise: Improve Vocabulary | Pubrica Guide",
  description:
    "Boost vocabulary, writing, and communication skills with Pubrica's Be Wordly Wise guide. Explore words and enhance language mastery effectively.",
  keywords: ["be wordly wise"],
  slug: "/academy/artical/be-wordly-wise",
});

export default function Page() {
  return <BeWordlyWisePageClient />;
}
