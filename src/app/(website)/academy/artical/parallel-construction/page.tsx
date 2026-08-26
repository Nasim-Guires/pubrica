import { constructMetadata } from "@/lib/metadata";
import ParallelConstructionPageClient from "@/components/academy/artical/parallel-construction/ParallelConstructionPageClient";

export const metadata = constructMetadata({
  title: "Parallel Construction - Pubrica",
  description:
    "Whew! Ain't the English language a tough nut to crack? There are so many different aspects that need to be kept in mind when writing in English. With this",
  slug: "/academy/artical/parallel-construction",
});

export default function Page() {
  return <ParallelConstructionPageClient />;
}
