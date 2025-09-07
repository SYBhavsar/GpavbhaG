import { useState, useEffect } from 'react'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'
import { useMumbaiWeather } from '../../../hooks/useWeather'

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  const { weather, loading: weatherLoading } = useMumbaiWeather()

  // Check if restaurant is open (11 AM to 11 PM)
  const isRestaurantOpen = () => {
    const now = new Date()
    const hour = now.getHours()
    return hour >= 11 && hour < 23
  }

  // Get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return t('goodMorning')
    if (hour < 17) return t('goodAfternoon')
    return t('goodEvening')
  }

  // Show popup when component mounts (site opens)
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('welcomePopupSeen')
    if (!hasSeenPopup) {
      setTimeout(() => setIsOpen(true), 1000) // Show after 1 second
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem('welcomePopupSeen', 'true') // Don't show again in this session
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative transform transition-all duration-300 ease-out scale-100 opacity-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-primary mb-2">
            {getGreeting()}! 👋
          </h2>
          <h3 className="text-xl font-semibold text-gray-800">
            {t('welcome')}
          </h3>
        </div>

        {/* Restaurant Status */}
        <div className="mb-6">
          <div className={`rounded-lg p-4 text-center ${
            isRestaurantOpen() 
              ? 'bg-green-100 border-2 border-green-300' 
              : 'bg-red-100 border-2 border-red-300'
          }`}>
            <div className="flex items-center justify-center mb-2">
              <span className={`w-3 h-3 rounded-full mr-2 ${
                isRestaurantOpen() ? 'bg-green-500' : 'bg-red-500'
              }`}></span>
              <span className={`font-bold text-lg ${
                isRestaurantOpen() ? 'text-green-800' : 'text-red-800'
              }`}>
                {isRestaurantOpen() ? "WE'RE OPEN!" : "WE'RE CLOSED"}
              </span>
            </div>
            <p className={`text-sm ${
              isRestaurantOpen() ? 'text-green-700' : 'text-red-700'
            }`}>
              {t('dailyHours')}
            </p>
          </div>
        </div>

        {/* Weather Info */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
            🌤️ {t('mumbaiWeather')}
          </h4>
          {weatherLoading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="text-sm text-gray-500 mt-2">{t('loading')}</p>
            </div>
          ) : weather ? (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-blue-800">
                  {Math.round(weather.temperature)}°C
                </span>
                <span className="text-blue-600 capitalize">
                  {weather.condition}
                </span>
              </div>
              <div className="text-sm text-blue-700">
                <p className="mb-1">Feels like {Math.round(weather.feelsLike)}°C</p>
                <p>Humidity: {weather.humidity}%</p>
              </div>
              
              {/* Delivery Recommendation */}
              <div className="mt-3 p-2 bg-white rounded border-l-4 border-primary">
                <p className="text-sm font-medium text-gray-800">
                  {weather.temperature > 30 || weather.condition.includes('rain')
                    ? `🚚 ${t('deliveryAvailable')} - Perfect weather for hot pav bhaji delivery!`
                    : `🌟 ${t('deliveryAvailable')} - Great weather for a visit!`
                  }
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-600 text-sm">Weather information unavailable</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleClose}
            className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
          >
            🍛 View Menu
          </button>
          <button
            onClick={handleClose}
            className="flex-1 border-2 border-primary text-primary py-3 px-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            📞 Call Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePopup