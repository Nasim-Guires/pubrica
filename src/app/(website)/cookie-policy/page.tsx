import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/seo/Breadcrumb';

export const metadata: Metadata = {
  title: 'Cookie Policy - Pubrica',
  description: 'Pubrica Cookie Policy — how we use cookies, web beacons, and similar tracking technologies across our sites.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Cookie Policy', href: '/cookie-policy' }]} />

      <section className="bg-[#1b2e2b] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto border border-gray-600 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie Policy</h1>
        </div>
      </section>

      <div className="bg-white py-16 font-sans">
        <Container className="max-w-4xl prose prose-primary">
          <p className="text-gray-600 leading-relaxed text-sm mb-8">
            Pubrica &amp; Company, along with its subsidiaries and affiliates, recognizes the significance of your privacy and is dedicated to providing transparency regarding the technologies it employs. This Cookie Policy elucidates the storage and access of cookies, web beacons, pixels, clear gifs, and other comparable technologies (collectively referred to as &ldquo;Cookies and Other Tracking Technologies&rdquo;) on your device when you utilize or visit any website or app containing a link to this Policy (collectively referred to as &ldquo;the Sites&rdquo;). It is advisable to review this Cookie Policy in conjunction with our <Link href="/privacy-policy" className="text-[#004d40] underline">Privacy Policy</Link> for a comprehensive understanding.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">What do Cookies and Other Tracking Technologies entail?</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            Cookies, small text files placed on your device, and similar technologies work to enrich your online experience. They help tailor preferences and settings, sparing you from entering your details repeatedly on our Company websites or online platform. Additionally, they streamline sign-ins, enable interest-based advertising, and contribute to analyzing the performance of our online services. Importantly, cookies do not run programs or transmit viruses to your computer. For further information, visit allaboutcookies.org and youronlinechoices.eu.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">How are Cookies and other Tracking Technologies utilized on our websites?</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Every cookie is assigned uniquely to users and can only be accessed by a Web server within its issuing domain. Their main purpose is to enhance convenience by saving time. Both us and our third-party providers utilize technologies like Web Beacons to analyze trends, administer the site, track user movements, and gather demographic data about our user base. This data aids in site traffic analysis, generating reports on how these technologies are used, both individually and in an aggregated manner. Log files automatically collect and store certain demographic information, including IP addresses, browser types, ISPs, referring/exit pages, operating systems, timestamps, and clickstream data. At Pubrica, we use this data to maintain service quality and understand general statistics about website usage.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            You can manage cookies, web beacons, and similar tools using various options and tools available. Browser controls allow you to block and delete cookies. Yet, if you decline cookies, it might restrict your access to the interactive features on Pubrica&rsquo;s Service or other websites you visit. Regarding &ldquo;Do Not Track&rdquo; (DNT), our technology does not recognize signals from your browser expressing preferences about tracking by advertisers or third parties.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            We work with a third-party advertising network to either show ads on our site or manage our ads on other sites. This network uses cookies and Web beacons to collect non-personal information about your activities across various websites. Their goal is to offer targeted advertising that aligns with your interests.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-300 text-gray-900">
                  <th className="p-2 border border-gray-300">Cookie Type</th>
                  <th className="p-2 border border-gray-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Strictly Necessary / Technical</td>
                  <td className="p-2 border border-gray-300">These essential cookies are crucial for the operation of our sites, enabling your requested access. For instance, they recognize your logged-in account status, allowing access to site content. They also retain memory of your recent actions in the same browsing session and contribute to the security of our sites.</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Analytical / Performance</td>
                  <td className="p-2 border border-gray-300">We or third-party service providers utilize these cookies to analyze the usage and performance of the Sites. They track the most visited pages and the geographical locations of our visitors. If you subscribe to a newsletter or register with the Sites, these cookies might be linked to you. Examples include Adobe Analytics cookies.</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Functionality</td>
                  <td className="p-2 border border-gray-300">These cookies enable us to align the operation of the Sites with your preferences. They allow us to remember your choices across visits — recognizing your username and retaining customizations such as text size, fonts, and languages — ensuring the same personalized experience during subsequent visits.</td>
                </tr>
                <tr>
                  <td className="p-2 border border-gray-300 font-semibold">Third Party Advertising</td>
                  <td className="p-2 border border-gray-300">These cookies gather data about your actions on these and other websites to deliver personalized advertising. We permit third-party service providers, like Adobe, LinkedIn, Twitter (X), and Facebook, to utilize cookies on the Sites for similar purposes. These providers have their own privacy policies and might employ their own cookies to tailor advertising based on your visits to our Sites.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">How can I decline or retract my consent for the utilization of Cookies?</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            If you prefer not to have cookies placed on your device, you can modify your Internet browser settings to reject all or certain cookies and receive notifications when a cookie is placed on your device. For more detailed instructions, consult the &lsquo;help,&rsquo; &lsquo;tool,&rsquo; or &lsquo;edit&rsquo; section of your browser. Keep in mind that if you choose to block all cookies, including essential ones, you may encounter limitations in accessing or utilizing certain parts or functionalities of our Sites.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Should you wish to delete previously-stored cookies, you can manually remove them at any time. Yet, doing so won&rsquo;t prevent further cookie placement on your device by the Sites unless you adjust your Internet browser settings as outlined above.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            To learn more about the creation of user-profiles and the utilization of targeting/advertising cookies, visit youronlinechoices.eu if you&rsquo;re in Europe, or aboutads.info/choices if you&rsquo;re in the United States.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">How are Other Tracking Technologies utilized in our communications?</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Pubrica might gather information using web beacons to determine whether you open or click on any links in the knowledge, research, or event communications that we send to you.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            A web beacon, a graphic image found on a website or in an email, either independently or with cookies, gathers data on your usage or interaction with Pubrica&rsquo;s website or email. This analysis aids in enhancing the efficiency of our website content, format, and email communications.
          </p>

          <h2 className="text-xl font-bold text-gray-900 font-display mt-8 mb-4">How can I decline or retract my consent for the utilization of Web Beacons?</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            To prevent web beacons, you can disable the option that loads remote images in your email reader program and refrain from clicking on links within email messages.
          </p>
        </Container>
      </div>
    </>
  );
}
