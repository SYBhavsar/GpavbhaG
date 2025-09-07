import About from '../legacy/About'
import { Section } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'

function AboutPage() {
  return (
    <Section>
      <SmartGoBack />
      <About />
    </Section>
  )
}

export default AboutPage