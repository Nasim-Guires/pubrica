import { constructMetadata } from "@/lib/metadata";
import OrderNowPageClient from "@/components/order-now/OrderNowPageClient";

export const metadata = constructMetadata({
  title: "Order Now - Pubrica",
  description: "Unlock Your Research Potential - Order Now with Pubrica!",
  slug: "/order-now",
});

export default function Page() {
  return <OrderNowPageClient />;
}
