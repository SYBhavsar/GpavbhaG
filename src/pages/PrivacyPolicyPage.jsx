import { Section, Container, Card } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'

function PrivacyPolicyPage() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)

  return (
    <Section>
      <Container className="max-w-4xl">
        <SmartGoBack />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-charcoal font-heading mb-4">Privacy Policy</h1>
          <p className="text-lg text-neutral-charcoal font-body">
            How we collect, use, and protect your information
          </p>
          <p className="text-sm text-neutral-charcoal font-body mt-2">
            Last updated: August 31, 2025
          </p>
        </div>

        <div className="space-y-6">
          {/* Information We Collect */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              1. Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Personal Information
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Delivery address and location preferences</li>
                  <li>Order history and food preferences</li>
                  <li>Payment information (processed securely by our payment providers)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Website usage data and analytics</li>
                  <li>Device information and IP address</li>
                  <li>Location data (with your permission)</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* How We Use Information */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Process and fulfill your food orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send order confirmations and delivery updates</li>
              <li>Improve our services and website functionality</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Ensure food safety and quality standards</li>
              <li>Comply with legal requirements</li>
            </ul>
          </Card>

          {/* Information Sharing */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              3. Information Sharing
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              We do not sell your personal information. We may share your information only in these circumstances:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li><strong>Delivery Partners:</strong> Name, phone, and address for order delivery</li>
              <li><strong>Payment Processors:</strong> Secure payment processing (we don't store payment details)</li>
              <li><strong>Service Providers:</strong> Analytics, customer support, and technical services</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </Card>

          {/* Data Security */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              4. Data Security
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              We implement appropriate security measures to protect your information:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal information</li>
              <li>Staff training on data protection</li>
            </ul>
          </Card>

          {/* Your Rights */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              5. Your Rights
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct your information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Portability:</strong> Export your data in a readable format</li>
              <li><strong>Marketing:</strong> Opt-out of promotional communications</li>
              <li><strong>Cookies:</strong> Manage cookie preferences in your browser</li>
            </ul>
          </Card>

          {/* Cookies */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              6. Cookies and Tracking
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and recommendations</li>
              <li>Ensure website security and functionality</li>
            </ul>
            <p className="text-neutral-charcoal font-body mt-4">
              You can control cookies through your browser settings, but some website features may not work properly if cookies are disabled.
            </p>
          </Card>

          {/* Data Retention */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              7. Data Retention
            </h2>
            <p className="text-neutral-charcoal font-body">
              We retain your information for as long as necessary to provide services and comply with legal obligations:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2 mt-4">
              <li><strong>Account Data:</strong> Until you delete your account</li>
              <li><strong>Order History:</strong> 7 years for tax and legal purposes</li>
              <li><strong>Marketing Data:</strong> Until you unsubscribe</li>
              <li><strong>Analytics Data:</strong> Up to 2 years in aggregated form</li>
            </ul>
          </Card>

          {/* Contact */}
          <Card className="bg-primary-light border-primary">
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              8. Contact Us
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              If you have questions about this Privacy Policy or want to exercise your rights, contact us:
            </p>
            <div className="space-y-2 text-neutral-charcoal font-body">
              <p><strong>Email:</strong> privacy@gpavbhag.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Main Street, Mumbai Central, Mumbai 400008</p>
              <p><strong>Business Hours:</strong> 9:00 AM - 10:00 PM (Monday to Sunday)</p>
            </div>
          </Card>

          {/* Updates */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              9. Policy Updates
            </h2>
            <p className="text-neutral-charcoal font-body">
              We may update this Privacy Policy from time to time. We'll notify you of significant changes by email or through our website. 
              Your continued use of our services after changes become effective means you accept the updated policy.
            </p>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 p-6 bg-neutral-gray-light rounded-lg">
          <p className="text-sm text-neutral-charcoal">
            This Privacy Policy is effective as of August 31, 2025
          </p>
          <p className="text-sm text-neutral-charcoal mt-2">
            GpavbhaG Restaurant - Committed to protecting your privacy
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default PrivacyPolicyPage