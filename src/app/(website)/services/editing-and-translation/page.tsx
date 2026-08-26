import { constructMetadata } from "@/lib/metadata";
import EditingAndTranslationPageClient from "@/components/services/editing-and-translation/EditingAndTranslationPageClient";

export const metadata = constructMetadata({
  title: "Editing and Translation Services by Subject Specialists",
  description:
    "Pubrica offers expert editing and translation services for academic, medical, and scientific papers, ensuring clarity, accuracy, and journal-ready quality.",
  slug: "/services/editing-and-translation",
});

export default function Page() {
  return <EditingAndTranslationPageClient />;
}
