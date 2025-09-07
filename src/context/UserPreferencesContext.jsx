import { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// Create the context
const UserPreferencesContext = createContext(null)

// Theme options
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
}

// Language options
export const LANGUAGES = {
  ENGLISH: 'en',
  HINDI: 'hi'
}

// Default preferences
const DEFAULT_PREFERENCES = {
  theme: THEMES.LIGHT,
  language: LANGUAGES.ENGLISH,
  preferredLocation: 'Mumbai Central',
  firstName: '',
  isFirstVisit: true
}

// UserPreferences Provider Component
export function UserPreferencesProvider({ children }) {
  // Use our custom hook instead of manual localStorage management!
  const [preferences, setPreferences] = useLocalStorage('restaurantPreferences', DEFAULT_PREFERENCES)

  // Update theme and apply to document
  useEffect(() => {
    if (preferences.theme === THEMES.DARK) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [preferences.theme])

  // Helper functions for updating preferences
  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const toggleTheme = () => {
    const newTheme = preferences.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    updatePreference('theme', newTheme)
  }

  const toggleLanguage = () => {
    const newLanguage = preferences.language === LANGUAGES.ENGLISH ? LANGUAGES.HINDI : LANGUAGES.ENGLISH
    updatePreference('language', newLanguage)
  }

  const setPreferredLocation = (location) => {
    updatePreference('preferredLocation', location)
  }

  const setUserName = (name) => {
    updatePreference('firstName', name)
    updatePreference('isFirstVisit', false)
  }

  const resetPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES)
  }

  // Context value
  const contextValue = {
    preferences,
    // Preference getters
    theme: preferences.theme,
    language: preferences.language,
    preferredLocation: preferences.preferredLocation,
    firstName: preferences.firstName,
    isFirstVisit: preferences.isFirstVisit,
    // Preference setters
    updatePreference,
    toggleTheme,
    toggleLanguage,
    setPreferredLocation,
    setUserName,
    resetPreferences,
    // Utility functions
    isDarkMode: preferences.theme === THEMES.DARK,
    isHindi: preferences.language === LANGUAGES.HINDI,
    getGreeting: () => {
      const hour = new Date().getHours()
      if (preferences.language === LANGUAGES.HINDI) {
        if (hour < 12) return 'नमस्ते' // Good morning
        if (hour < 17) return 'नमस्ते' // Good afternoon  
        return 'नमस्ते' // Good evening
      } else {
        if (hour < 12) return 'Good Morning'
        if (hour < 17) return 'Good Afternoon'
        return 'Good Evening'
      }
    }
  }

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  )
}

// Custom hook to use the context
export function useUserPreferences() {
  const context = useContext(UserPreferencesContext)
  
  if (!context) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider')
  }
  
  return context
}

// HOC for components that need preferences
export function withUserPreferences(Component) {
  return function WrappedComponent(props) {
    const preferences = useUserPreferences()
    return <Component {...props} preferences={preferences} />
  }
}

export default UserPreferencesContext