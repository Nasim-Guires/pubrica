import ContactPage from '../contact/page';
import { constructMetadata } from '@/lib/metadata';

export const metadata = constructMetadata({
  title: 'contact us - Pubrica',
  description: 'Experts are ready to collaborate with you.',
  slug: '/contact',
});

export default function ContactUsPage() {
  return <ContactPage />;
}
