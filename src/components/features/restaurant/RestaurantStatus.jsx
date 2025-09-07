import { useState, useEffect } from 'react'
import { BorderCard, SectionTitle, StatusBadge } from '../../ui/UI'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

function RestaurantStatus() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isOpen, setIsOpen] = useState(false)
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // useEffect to update time and status every minute
  useEffect(() => {
    console.log('🏪 Setting up restaurant status checker...')
    
    // Function to check if restaurant is open
    const checkStatus = () => {
      const now = new Date()
      const hour = now.getHours()
      
      // Restaurant hours: 11 AM to 11 PM
      const restaurantOpen = hour >= 11 && hour < 23
      
      setCurrentTime(now)
      setIsOpen(restaurantOpen)
      
      console.log(`🏪 Status check: ${restaurantOpen ? 'OPEN' : 'CLOSED'} at ${hour}:00`)
    }
    
    // Check status immediately
    checkStatus()
    
    // Set up timer to check every minute
    const timer = setInterval(checkStatus, 60000) // 60000ms = 1 minute
    
    // Cleanup function
    return () => {
      console.log('🧹 Cleaning up restaurant status timer...')
      clearInterval(timer)
    }
  }, []) // Empty array = run once on mount
  
  return (
    <BorderCard className="text-center">
      <SectionTitle className="text-2xl mb-4">
        🏪 {t('restaurantStatus')}
      </SectionTitle>
      
      {/* Status Badge */}
      <StatusBadge isOpen={isOpen} className="mb-4">
        {isOpen ? `🟢 ${t('openStatus')}` : `🔴 ${t('closedStatus')}`}
      </StatusBadge>
      
      {/* Current Time */}
      <p className="text-lg text-neutral-charcoal mb-2">
        Current Time: {currentTime.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        })}
      </p>
      
      {/* Opening Hours */}
      <div className="bg-neutral-gray-light p-4 rounded-lg">
        <h3 className="font-semibold text-neutral-charcoal mb-2">
          📅 {t('openingHours')}
        </h3>
        <p className="text-sm text-neutral-charcoal">
          {t('dailyHours')}
        </p>
        {!isOpen && (
          <p className="text-sm text-primary font-medium mt-2">
            ⏰ We'll be open at 11:00 AM tomorrow!
          </p>
        )}
      </div>
    </BorderCard>
  )
}

export default RestaurantStatus