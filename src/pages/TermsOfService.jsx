import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
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
            Terms and Conditions
          </h1>
          <p className="text-[14px] text-text-muted mb-12">Last updated: March 2, 2026</p>

          <p className="text-[15px] text-text-body leading-[1.8] mb-10">
            Welcome to Cybersphere ("we," "our," or "us"). These Terms and Conditions ("Terms") govern your use of our website getcybersphere.com, products, and services.
          </p>
          <p className="text-[15px] text-text-body leading-[1.8] mb-10">
            By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please do not use our website or services.
          </p>

          <div className="prose prose-gray max-w-none">
            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">1. Use of Our Website and Services</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                You agree to use our website and services only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                You are responsible for ensuring that your use complies with all applicable laws and regulations.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8] mb-3">You must not:</p>
              <ul className="list-disc list-inside space-y-2 text-[15px] text-text-body leading-[1.8]">
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use our content or materials for commercial purposes without written permission</li>
                <li>Upload or transmit viruses, spam, or malicious code</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">2. Accounts and Purchases</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                When you create an account or make a purchase, you agree to provide accurate, complete, and up-to-date information.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                You are responsible for maintaining the confidentiality of your account and password.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We reserve the right to refuse or cancel any order at any time for reasons including suspected fraud, unauthorized use, or product/service availability.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">3. Payment and Refund Policy</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                All payments must be made in full at the time of purchase unless otherwise stated.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                Refunds, if applicable, are handled according to our Refund Policy.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                If you fail to pay for services rendered, we reserve the right to suspend or terminate access to your account or services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">4. Intellectual Property</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                All content on this website—including text, graphics, logos, videos, and software—is the property of Cybersphere or its licensors and is protected by copyright and trademark laws.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                You may not reproduce, distribute, or modify any materials from our website without our express written consent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                Our website and services are provided "as is" and "as available."
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We make no warranties, express or implied, regarding the operation of the website, accuracy of information, or suitability for a particular purpose.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">6. Limitation of Liability</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                To the fullest extent permitted by law, Cybersphere and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use or inability to use our website or services.
              </p>
              <p className="text-[15px] text-text-body leading-[1.8]">
                Our total liability for any claim shall not exceed the amount you paid to us, if any, for the services in question.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">7. Indemnification</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                You agree to indemnify and hold harmless Cybersphere, its officers, employees, and partners from any claims, damages, or expenses (including legal fees) arising from your use of our website or violation of these Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">8. Third-Party Links</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                Our website may contain links to external websites not operated by us. We are not responsible for the content or privacy practices of these third-party sites.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">9. Termination</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We may suspend or terminate your access to our website or services at any time, without notice, if we believe you have violated these Terms or engaged in fraudulent activity.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">10. Governing Law</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                These Terms shall be governed by and interpreted in accordance with the laws of the State of Delaware, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">11. Changes to These Terms</h2>
              <p className="text-[15px] text-text-body leading-[1.8]">
                We may update or modify these Terms from time to time. Updates will be posted on this page with the "Last updated" date. Your continued use of our website signifies acceptance of the revised Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-heading font-semibold text-[22px] text-text-primary mb-4">12. Contact Us</h2>
              <p className="text-[15px] text-text-body leading-[1.8] mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="text-[15px] text-text-body leading-[1.8]">
                <p className="font-semibold text-text-primary">Cybersphere</p>
                <p>
                  Email:{' '}
                  <a href="mailto:hello@getcybersphere.com" className="text-blue hover:underline">
                    hello@getcybersphere.com
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
