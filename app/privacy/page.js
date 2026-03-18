import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — Spruce Residential',
  description: 'Privacy Policy and SMS Messaging Terms and Conditions for Spruce Residential LLC.',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-warm-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/" className="text-sage text-sm font-semibold uppercase tracking-wider hover:text-sage-dark transition-colors">
          ← Back to Home
        </Link>

        <h1 className="font-display text-4xl text-charcoal mt-8 mb-2">Privacy Policy</h1>
        <p className="text-sm text-warm-gray mb-2">Spruce Residential LLC</p>
        <p className="text-sm text-warm-gray mb-8">Effective Date: March 18, 2026 | Last Updated: March 18, 2026</p>
        <hr className="border-cream-dark mb-10" />

        <div className="prose prose-sm max-w-none text-charcoal-light leading-relaxed space-y-6">

          <p>Spruce Residential LLC ("Spruce Residential," "we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website at spruceresidential.com (the "Site"), use our resident portal, communicate with us via text message (SMS/MMS), email, phone, or any other means, or otherwise interact with our services. By using our Site or services, you agree to the terms of this Privacy Policy.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">1. Information We Collect</h2>

          <h3 className="font-semibold text-charcoal mt-6 mb-2">1.1 Information You Provide Directly</h3>
          <p>We may collect the following information when you fill out a contact form, apply for a rental, sign a lease, submit a maintenance request, or otherwise communicate with us:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name, email address, phone number, and mailing address</li>
            <li>Rental application information (employment history, income, references, Social Security Number for background/credit checks)</li>
            <li>Payment information (processed securely through our third-party property management platform, AppFolio)</li>
            <li>Maintenance request details and associated photographs</li>
            <li>Any other information you voluntarily provide through our Site, portal, forms, or communications</li>
          </ul>

          <h3 className="font-semibold text-charcoal mt-6 mb-2">1.2 Information Collected Automatically</h3>
          <p>When you visit our Site, certain information may be collected automatically, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>IP address, browser type, operating system, and device identifiers</li>
            <li>Pages visited, time spent on pages, referring URLs, and clickstream data</li>
            <li>Cookies and similar tracking technologies (see Section 6 below)</li>
          </ul>

          <h3 className="font-semibold text-charcoal mt-6 mb-2">1.3 Information from Third Parties</h3>
          <p>We may receive information about you from third-party sources, including credit reporting agencies, background check providers, previous landlords, employers, and our property management software provider (AppFolio).</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To process rental applications, execute leases, and manage tenant relationships</li>
            <li>To respond to inquiries, maintenance requests, and customer service communications</li>
            <li>To send transactional and informational messages, including via SMS/MMS text messaging</li>
            <li>To process rent payments and manage financial transactions through our property management platform</li>
            <li>To comply with legal obligations, enforce our agreements, and protect our rights</li>
            <li>To improve our Site, services, and overall user experience</li>
            <li>To send important notices related to your tenancy, including lease renewals, inspections, and community updates</li>
          </ul>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">3. Data Sharing and Disclosure</h2>
          <p><strong>Customer data is not shared with third parties for promotional or marketing purposes.</strong></p>
          <p><strong>Mobile opt-in and consent information is never shared with anyone for any purpose.</strong> Any information sharing described elsewhere in this policy explicitly excludes mobile opt-in data and messaging consent records.</p>
          <p>We may share your information only in the following circumstances:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (e.g., AppFolio for property management, payment processors, background check services).</li>
            <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request.</li>
            <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Spruce Residential, our tenants, or the public.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</li>
          </ul>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">4. SMS/MMS Messaging Terms and Conditions</h2>
          <p>By opting in to receive text messages from Spruce Residential, you agree to the following:</p>
          <ol className="list-decimal pl-6 space-y-3">
            <li>The Spruce Residential messaging program consists of general conversational messaging to answer questions, provide support, send transactional notifications (such as rent reminders, maintenance updates, and lease-related communications), and deliver other informational messages related to your tenancy or inquiry.</li>
            <li>You can cancel the SMS service at any time. Just text "STOP" to the phone number from which you received messages. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</li>
            <li>If you are experiencing issues with the messaging program you can reply with the keyword HELP for more assistance, or you can get help directly at hello@spruceresidential.com or by calling (316) 444-4365.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>As always, message and data rates may apply for any messages sent to you from us and to us from you. Message frequency will vary based on communication needs. If you have any questions about your text plan or data plan, it is best to contact your wireless provider.</li>
            <li>By providing your phone number and opting in to our messaging program — whether through our website contact form, resident portal activation (AppFolio), or other written or electronic means — you expressly consent to receive informational and transactional text messages from Spruce Residential LLC. Consent is not a condition of any purchase or tenancy.</li>
            <li>If you have any questions regarding privacy, please read the remainder of this privacy policy. Your mobile phone number and opt-in consent will never be shared with third parties for promotional or marketing purposes.</li>
          </ol>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">5. Messaging Consent and Opt-In Methods</h2>
          <p>We obtain consent to send text messages through the following methods:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Website Contact Form:</strong> When a visitor submits our contact form at spruceresidential.com and checks the box agreeing to receive informational text messages from Spruce Residential LLC.</li>
            <li><strong>Resident Portal Activation:</strong> When a tenant activates their AppFolio resident portal account, which includes consent to receive transactional and informational communications, including text messages, as part of the portal terms of service.</li>
            <li><strong>Verbal/Written Consent:</strong> When a prospective or current tenant provides their phone number and agrees to receive informational text messages during in-person or phone interactions.</li>
          </ul>
          <p>In all cases, the type of messages, approximate frequency, message and data rate disclosures, and instructions for STOP and HELP are provided at the point of opt-in.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">6. Cookies and Tracking Technologies</h2>
          <p>Our Site may use cookies, web beacons, and similar technologies to enhance your browsing experience, analyze Site traffic, and understand user behavior. You may control cookies through your browser settings. Disabling cookies may affect certain features of our Site.</p>
          <p>We do not respond to "Do Not Track" signals. We do not engage in cross-site tracking for advertising purposes.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">7. Data Security</h2>
          <p>We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">8. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Messaging consent records are retained for the duration of the messaging relationship and for a reasonable period thereafter as required for compliance purposes.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">9. Your Rights and Choices</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information, subject to certain exceptions.</li>
            <li><strong>Opt-Out of Communications:</strong> Unsubscribe from email communications or text STOP to opt out of SMS messages.</li>
            <li><strong>Do Not Sell:</strong> We do not sell your personal information.</li>
          </ul>
          <p>To exercise any of these rights, contact us at hello@spruceresidential.com or (316) 444-4365.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">10. Third-Party Links and Services</h2>
          <p>Our Site may contain links to third-party websites and services, including our AppFolio resident portal. We are not responsible for the privacy practices of these third parties.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">11. Children's Privacy</h2>
          <p>Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">12. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top. Continued use of our Site or services after any changes constitutes your acceptance of the updated policy.</p>

          <h2 className="font-display text-xl text-charcoal mt-10 mb-4">13. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
          <p>
            <strong>Spruce Residential LLC</strong><br />
            Email: hello@spruceresidential.com<br />
            Phone: (316) 444-4365<br />
            Wichita, Kansas
          </p>
        </div>
      </div>
    </main>
  );
}
