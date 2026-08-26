import { constructMetadata } from "@/lib/metadata";
import CollaborativeProcessPageClient from "@/components/academy/manuscript-guidelines/collaborative-process/CollaborativeProcessPageClient";

export const metadata = constructMetadata({
  title: "Overleaf's Collaborative process - Pubrica",
  description:
    "Collaboration in scientific academia is the norm. Overleaf makes writing and publishing tasks quicker. So let's discuss about harnessing the power of this",
  slug: "/academy/manuscript-guidelines/collaborative-process",
});

export default function Page() {
  return <CollaborativeProcessPageClient />;
}
