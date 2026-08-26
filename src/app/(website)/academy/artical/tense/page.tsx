import { constructMetadata } from "@/lib/metadata";
import TensePageClient from "@/components/academy/artical/tense/TensePageClient";

export const metadata = constructMetadata({
  title: "Tense - Pubrica",
  description:
    "The tenses 'past, present and future', might sound very easy but making sense out of tense in writing can prove to be a challenge. Can you blend all three",
  slug: "/academy/artical/tense",
});

export default function Page() {
  return <TensePageClient />;
}
