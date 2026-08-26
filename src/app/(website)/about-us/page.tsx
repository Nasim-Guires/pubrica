import { constructMetadata } from "@/lib/metadata";
import AboutUsPageClient from "@/components/about/AboutUsPageClient";

export const metadata = constructMetadata({
  title: "About Us - Pubrica",
  description:
    "Pubrica is a trusted partner for leading publishers, organizations, and institutions worldwide. We have a team of experts in Science, Technology, Engineering,",
  slug: "/about-us",
});

export default function Page() {
  return <AboutUsPageClient />;
}
