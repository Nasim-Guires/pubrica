import { constructMetadata } from "@/lib/metadata";
import ReferAFriendPageClient from "@/components/refer-a-friend/ReferAFriendPageClient";

export const metadata = constructMetadata({
  title: "Refer a Friend - Pubrica",
  description:
    "Refer a Friend – Pubrica lets users share Pubrica's research and publication support services with peers and earn referral benefits.",
  slug: "/refer-a-friend",
});

export default function Page() {
  return <ReferAFriendPageClient />;
}
