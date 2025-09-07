import { useState } from 'react'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'
import { restaurantInfo } from '../../../data/restaurant'
import { Card, FlexBetween } from '../../ui/UI'
import Button from '../../ui/Button'
import Icon from '../../ui/Icon'

function PreferencesPanel({ className = "" }) {
  const {
    preferences,
    toggleTheme,
    toggleLanguage,
    setPreferredLocation,
    setUserName,
    resetPreferences,
    isDarkMode,
    isHindi,
    getGreeting,
    firstName,
    isFirstVisit,
    preferredLocation
  } = useUserPreferences()

  const { t } = useTranslation(preferences.language)
  const [isOpen, setIsOpen] = useState(false)
  const [tempName, setTempName] = useState(firstName)

  const locations = restaurantInfo.availableLocations

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim())
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Preferences Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="small"
        className="flex items-center space-x-2"
      >
        <Icon name="setting" className="w-6 h-6" />
        <span className="hidden sm:inline">{t('preferences')}</span>
      </Button>

      {/* Preferences Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <Card className="absolute right-0 top-full mt-2 w-80 z-50 p-0 overflow-hidden">
            {/* Header */}
            <div className="bg-primary text-white p-4">
              <FlexBetween>
                <div>
                  <h3 className="text-lg font-semibold">{t('preferences')}</h3>
                  <p className="text-primary-light text-sm">
                    {getGreeting()}{firstName && `, ${firstName}`}!
                  </p>
                </div>
                <Button
                  onClick={() => setIsOpen(false)}
                  variant="ghost"
                  size="small"
                  className="text-white hover:bg-primary-dark"
                >
                  ✕
                </Button>
              </FlexBetween>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              
              {/* Welcome Name Input - First Visit */}
              {isFirstVisit && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-amber-800 mb-2">
                    👋 Welcome! What should we call you?
                  </h4>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      placeholder="Your name"
                      className="flex-1 px-2 py-1 border border-amber-300 rounded text-sm"
                    />
                    <Button
                      onClick={handleSaveName}
                      variant="primary"
                      size="small"
                      className="text-xs"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}

              {/* Theme Toggle */}
              <div>
                <label className="block text-sm font-medium text-neutral-charcoal mb-2">
                  🎨 {t('theme')}
                </label>
                <FlexBetween className="bg-neutral-gray-light p-2 rounded-lg">
                  <span className="text-sm">
                    {isDarkMode ? t('darkMode') : t('lightMode')}
                  </span>
                  <Button
                    onClick={toggleTheme}
                    variant={isDarkMode ? "primary" : "outline"}
                    size="small"
                    className="min-w-[80px]"
                  >
                    {isDarkMode ? '🌙 Dark' : '☀️ Light'}
                  </Button>
                </FlexBetween>
              </div>

              {/* Language Toggle */}
              <div>
                <label className="block text-sm font-medium text-neutral-charcoal mb-2">
                  🌐 {t('language')}
                </label>
                <FlexBetween className="bg-neutral-gray-light p-2 rounded-lg">
                  <span className="text-sm">
                    {isHindi ? t('hindi') : t('english')}
                  </span>
                  <Button
                    onClick={toggleLanguage}
                    variant={isHindi ? "primary" : "outline"}
                    size="small"
                    className="min-w-[80px]"
                  >
                    {isHindi ? '🇮🇳 हिंदी' : '🇺🇸 EN'}
                  </Button>
                </FlexBetween>
              </div>

              {/* Preferred Location */}
              <div>
                <label className="block text-sm font-medium text-neutral-charcoal mb-2">
                  📍 Preferred Location
                </label>
                <select
                  value={preferredLocation}
                  onChange={(e) => setPreferredLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current Preferences Display */}
              <div className="text-xs text-neutral-charcoal bg-gray-50 p-2 rounded">
                <strong>Current Settings:</strong><br/>
                Theme: {isDarkMode ? 'Dark' : 'Light'} • 
                Language: {isHindi ? 'Hindi' : 'English'} • 
                Location: {preferredLocation}
              </div>

              {/* Reset Button */}
              <div className="pt-2 border-t">
                <Button
                  onClick={() => {
                    resetPreferences()
                    setTempName('')
                  }}
                  variant="ghost"
                  size="small"
                  className="w-full text-red-600 hover:bg-red-50"
                >
                  🔄 Reset All Preferences
                </Button>
              </div>
            </div>
          </Card>
        </>
      )}
    </div>
  )
}

// Quick theme toggle component for header
export function QuickThemeToggle({ className = "" }) {
  const { toggleTheme, isDarkMode } = useUserPreferences()
  
  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="small"
      className={`${className}`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </Button>
  )
}

// Language toggle component
export function QuickLanguageToggle({ className = "" }) {
  const { toggleLanguage, isHindi } = useUserPreferences()
  
  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="small"
      className={`${className}`}
      title={`Switch to ${isHindi ? 'English' : 'Hindi'}`}
    >
      {isHindi ? 'EN' : 'हि'}
    </Button>
  )
}

export default PreferencesPanel