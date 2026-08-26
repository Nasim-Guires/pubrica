import { constructMetadata } from "@/lib/metadata";
import MyTrystPageClient from "@/components/academy/referencing-style/my-tryst/MyTrystPageClient";

export const metadata = constructMetadata({
  title: "My tryst with Mendeley - Pubrica",
  description: "Mendeley: A Standout Among Citation Tools",
  slug: "/academy/referencing-style/my-tryst",
});

export default function Page() {
  return <MyTrystPageClient />;
}
