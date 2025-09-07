import ContactForm from '../components/features/contact/ContactForm'
import { Section } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'

function ContactPage() {
  return (
    <Section>
      <SmartGoBack />
      <ContactForm />
    </Section>
  )
}

export default ContactPage