import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col gap-1.5 p-1.5">
      <section className="bg-white rounded-[20px] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[13px] text-text-muted hover:text-text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-heading font-bold text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-text-muted mb-12">Last updated: March 2, 2026</p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">1. Introduction</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                Welcome to Cybersphere ("we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website getcybersphere.com, use our services, or interact with us in any other way.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                By using our website or services, you agree to the terms of this Privacy Policy.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">2. Information We Collect</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">We may collect the following types of information:</p>
              <ul className="list-none space-y-4">
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Personal Information:</strong> Name, email address, phone number, billing information, or other details you provide when making a purchase or filling out a form.
                </li>
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Usage Data:</strong> Information about how you access and use our website, such as IP address, browser type, device information, and pages visited.
                </li>
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Cookies and Tracking:</strong> We use cookies, pixels, and similar tracking technologies to improve your experience and analyze website traffic.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-[15px] text-text-body leading-[1.8]">
                <li>Operate, and improve our products and services</li>
                <li>Process payments and complete transactions</li>
                <li>Communicate with you about updates, offers, or support</li>
                <li>Analyze usage to enhance site performance and marketing</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">4. How We Share Your Information</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">We do not sell your personal data. However, we may share it with:</p>
              <ul className="list-none space-y-4">
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Service Providers:</strong> Third-party vendors who help us operate our business (e.g., payment processors, email marketing platforms).
                </li>
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Legal Compliance:</strong> When required by law, or to protect our rights, property, or safety.
                </li>
                <li className="text-[15px] text-text-body leading-[1.8]">
                  <strong className="text-text-primary">Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">5. Data Security</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                We take appropriate measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                However, no system is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">6. Your Rights and Choices</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-[15px] text-text-body leading-[1.8]">
                <li>Access, update, or delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Disable cookies in your browser settings</li>
              </ul>
              <p className="text-[15px] text-text-body leading-[1.8] mt-4">
                To exercise these rights, contact us at{' '}
                <a href="mailto:archie@getcybersphere.com" className="text-blue hover:underline">
                  archie@getcybersphere.com
                </a>.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">7. Retention of Data</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">8. Links to Other Websites</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">9. Changes to This Policy</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Last updated" date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">10. Contact Us</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                If you have questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <div className="text-[15px] text-text-body leading-[1.8]">
                <p className="font-semibold text-text-primary">Cybersphere</p>
                <p>
                  Email:{' '}
                  <a href="mailto:archie@getcybersphere.com" className="text-blue hover:underline">
                    archie@getcybersphere.com
                  </a>
                </p>
                <p>
                  Website:{' '}
                  <a href="https://getcybersphere.com" className="text-blue hover:underline">
                    getcybersphere.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
