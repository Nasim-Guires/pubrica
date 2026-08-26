import { constructMetadata } from "@/lib/metadata";
import PublicationEthicsPageClient from "@/components/academy/publication-ethics/PublicationEthicsPageClient";

export const metadata = constructMetadata({
  title: "Publication Ethics for Research Integrity | Pubrica",
  description:
    "Pubrica ensures ethical, transparent, and responsible research practices by guiding authors through every stage of publication",
  slug: "/academy/publication-ethics",
});

export default function Page() {
  return <PublicationEthicsPageClient />;
}
