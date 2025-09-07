import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import HeroBanner from '../components/features/banner/HeroBanner'
import OffersSection from '../components/features/offers/OffersSection'
import FeaturedMenu from '../components/features/menu/FeaturedMenu'
import WelcomePopup from '../components/features/popup/WelcomePopup'
import { Section, Container, SuccessAlert } from '../components/ui/UI'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'
import Icon from '../components/ui/Icon'

function HomePage() {
  const location = useLocation()
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Check if we were redirected here with a success message
  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message)
      setShowMessage(true)
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }
  }, [location.state])
  
  return (
    <div>
      {/* Welcome Popup - Shows on site open */}
      <WelcomePopup />
      
      {/* Hero Banner - Full Width */}
      <HeroBanner />
      
      {/* Offers Section - Full Width */}
      <OffersSection />
      
      {/* Featured Menu Section */}
      <FeaturedMenu />
      
      <Section>
        <Container>
          {/* Success message from form submission */}
          {showMessage && (
            <SuccessAlert className="mb-6">
              <Icon name="check" className="w-4 h-4 inline mr-1" /> {message}
            </SuccessAlert>
          )}
          
          {/* Hero Section for Home Page - Now with translations */}
          
        </Container>
      </Section>
    </div>
  )
}

export default HomePage