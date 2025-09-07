import { useState, useEffect } from 'react'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(true)
  const [countdown, setCountdown] = useState(5) // 5 second countdown
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // useEffect to hide welcome message after 5 seconds
  useEffect(() => {
    console.log('👋 Setting up welcome message auto-hide...')
    
    // Timer to update countdown every second
    const countdownTimer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsVisible(false) // Hide message when countdown reaches 0
          console.log('👋 Welcome message hidden!')
          return 0
        }
        return prev - 1
      })
    }, 1000) // Update every second
    
    // Cleanup function
    return () => {
      console.log('🧹 Cleaning up welcome message timer...')
      clearInterval(countdownTimer)
    }
  }, []) // Empty array = run once on mount
  
  // Function to manually dismiss welcome message
  const dismissMessage = () => {
    setIsVisible(false)
    console.log('👋 Welcome message manually dismissed!')
  }
  
  // Don't render anything if not visible
  if (!isVisible) {
    return null
  }
  
  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 rounded-lg shadow-lg mb-6 relative">
      {/* Dismiss Button */}
      <button 
        onClick={dismissMessage}
        className="absolute top-2 right-2 text-white hover:text-gray-200 text-xl font-bold"
        aria-label="Close welcome message"
      >
        ✕
      </button>
      
      {/* Welcome Content - Now with translations */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">
          🎉 {t('welcome')}!
        </h2>
        <p className="text-lg mb-4">
          {t('subtitle')}!
        </p>
        
        {/* Special Offer */}
        <div className="bg-white bg-opacity-20 rounded-lg p-3 mb-4">
          <p className="font-semibold">
            🎊 Special Offer: Get 20% off on your first order!
          </p>
          <p className="text-sm">
            Use code: WELCOME20
          </p>
        </div>
        
        {/* Auto-hide countdown */}
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span>⏰</span>
          <span>This message will auto-hide in {countdown} seconds</span>
        </div>
      </div>
    </div>
  )
}

export default WelcomeMessage