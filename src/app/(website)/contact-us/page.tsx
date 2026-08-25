import type { Metadata } from 'next';
import ContactPage from '../contact/page';

export const metadata: Metadata = {
  title: 'Contact Us - Pubrica',
  description: 'Experts are ready to collaborate with you. Reach Pubrica in the UK, US, or India.',
};

export default function ContactUsPage() {
  return <ContactPage />;
}
