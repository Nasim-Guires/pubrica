import { constructMetadata } from "@/lib/metadata";
import TablesFiguresPageClient from "@/components/academy/tables-figures/TablesFiguresPageClient";

export const metadata = constructMetadata({
  title: "Tables, Figures - Pubrica",
  description:
    "Learn how to design, format, and present tables and figures effectively to improve clarity and impact in research manuscripts.",
  slug: "/academy/tables-figures",
});

export default function Page() {
  return <TablesFiguresPageClient />;
}
