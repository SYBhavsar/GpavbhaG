import { Section, Container, Card } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'

function TermsOfServicePage() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)

  return (
    <Section>
      <Container className="max-w-4xl">
        <SmartGoBack />
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-charcoal font-heading mb-4">Terms of Service</h1>
          <p className="text-lg text-neutral-charcoal font-body">
            Terms and conditions for using our services
          </p>
          <p className="text-sm text-neutral-charcoal font-body mt-2">
            Last updated: August 31, 2025
          </p>
        </div>

        <div className="space-y-6">
          {/* Agreement to Terms */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              By accessing and using GpavbhaG Restaurant's website, mobile app, or services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-neutral-charcoal font-body">
              These terms apply to all visitors, users, customers, and others who access or use our services.
            </p>
          </Card>

          {/* Services Description */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              2. Description of Services
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              GpavbhaG Restaurant provides:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Online food ordering and delivery services</li>
              <li>Dine-in restaurant services at our locations</li>
              <li>Table reservation system</li>
              <li>Customer support and assistance</li>
              <li>Loyalty programs and promotional offers</li>
              <li>Information about our menu, locations, and services</li>
            </ul>
          </Card>

          {/* User Accounts */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              3. User Accounts and Registration
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Account Creation
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>You may create an account to access certain features</li>
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You must be at least 13 years old to create an account</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Account Responsibilities
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Keep your login credentials secure</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Update your information when it changes</li>
                  <li>Use your account in compliance with these terms</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Orders and Payments */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              4. Orders and Payments
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Order Placement
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Orders are subject to availability and acceptance</li>
                  <li>We reserve the right to refuse or cancel orders</li>
                  <li>Prices are subject to change without notice</li>
                  <li>All orders are final once confirmed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Payment Terms
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Payment is required at the time of order</li>
                  <li>We accept cash, cards, and digital payments</li>
                  <li>All prices include applicable taxes</li>
                  <li>Delivery charges may apply based on location</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Delivery and Service */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              5. Delivery and Service Terms
            </h2>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li><strong>Delivery Times:</strong> Estimated times are approximate and not guaranteed</li>
              <li><strong>Delivery Area:</strong> Limited to specified locations within our service area</li>
              <li><strong>Food Safety:</strong> Food should be consumed immediately upon delivery</li>
              <li><strong>Access:</strong> You must provide safe and accessible delivery location</li>
              <li><strong>Quality:</strong> We strive to maintain food quality but cannot guarantee perfection</li>
            </ul>
          </Card>

          {/* Cancellations and Refunds */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              6. Cancellations and Refunds
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Order Cancellation
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Orders can be cancelled within 5 minutes of placement</li>
                  <li>Cancellation may not be possible once food preparation begins</li>
                  <li>Cancellation requests must be made through official channels</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-charcoal font-heading mb-2">
                  Refund Policy
                </h3>
                <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-1">
                  <li>Refunds are provided for legitimate quality issues</li>
                  <li>Report issues within 24 hours of delivery</li>
                  <li>Refunds processed within 5-7 business days</li>
                  <li>We reserve the right to investigate refund requests</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* User Conduct */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              7. User Conduct
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              When using our services, you agree not to:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Harass, abuse, or harm our staff or other customers</li>
              <li>Provide false or misleading information</li>
              <li>Interfere with or disrupt our services</li>
              <li>Use our services for any unauthorized commercial purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Submit spam, fraudulent, or malicious content</li>
            </ul>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              All content on our website and services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Text, images, logos, and graphics</li>
              <li>Website design and layout</li>
              <li>Software and technology</li>
              <li>Trademarks and brand names</li>
              <li>Recipe information and menu descriptions</li>
            </ul>
            <p className="text-neutral-charcoal font-body mt-4">
              Are owned by GpavbhaG Restaurant and protected by intellectual property laws. You may not use, copy, or distribute our content without written permission.
            </p>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              9. Limitation of Liability
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              To the maximum extent permitted by law, GpavbhaG Restaurant shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages resulting from service interruptions</li>
              <li>Food allergies or dietary restrictions (unless properly disclosed)</li>
              <li>Third-party actions or services</li>
            </ul>
            <p className="text-neutral-charcoal font-body mt-4">
              Our total liability for any claim shall not exceed the amount you paid for the specific order in question.
            </p>
          </Card>

          {/* Termination */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              10. Termination
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              We may terminate or suspend your access to our services:
            </p>
            <ul className="list-disc list-inside text-neutral-charcoal font-body space-y-2">
              <li>For violation of these terms</li>
              <li>For fraudulent or abusive behavior</li>
              <li>For repeated order cancellations or refund abuse</li>
              <li>At our sole discretion with or without notice</li>
            </ul>
            <p className="text-neutral-charcoal font-body mt-4">
              Upon termination, your right to use our services ceases immediately.
            </p>
          </Card>

          {/* Contact Information */}
          <Card className="bg-primary-light border-primary">
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              11. Contact Information
            </h2>
            <p className="text-neutral-charcoal font-body mb-4">
              Questions about these Terms of Service? Contact us:
            </p>
            <div className="space-y-2 text-neutral-charcoal font-body">
              <p><strong>Email:</strong> legal@gpavbhag.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Main Street, Mumbai Central, Mumbai 400008</p>
              <p><strong>Business Hours:</strong> 9:00 AM - 10:00 PM (Monday to Sunday)</p>
            </div>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-neutral-charcoal font-body">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated "Last modified" date. 
              Continued use of our services after changes constitute acceptance of the new terms. We recommend reviewing these terms periodically.
            </p>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 p-6 bg-neutral-gray-light rounded-lg">
          <p className="text-sm text-neutral-charcoal font-body">
            These Terms of Service are effective as of August 31, 2025
          </p>
          <p className="text-sm text-neutral-charcoal font-body mt-2">
            GpavbhaG Restaurant - Serving Mumbai with authentic flavors
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default TermsOfServicePage