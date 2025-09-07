import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Card from '../ui/Card'
import { WeatherBadge } from '../features/weather/WeatherWidget'
import PreferencesPanel from '../features/preferences/PreferencesPanel'
import { useUserPreferences } from '../../context/UserPreferencesContext'
import { useTranslation } from '../../utils/translations'
import { quickLocations } from '../../data/restaurant'
import Icon from '../ui/Icon'

function Header() {
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const popupRef = useRef(null)
  const location = useLocation() // Get current route for active styling
  
  // User preferences
  const { preferredLocation, setPreferredLocation, preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  const [selectedLocation, setSelectedLocation] = useState(preferredLocation)

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  // Import location data
  // Import locations from centralized data

  const toggleLocationPopup = () => {
    setShowLocationPopup(!showLocationPopup)
  }

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  // Close popups when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLocationPopup(false)
      }
    }

    if (showLocationPopup) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLocationPopup])

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false)
  }, [location.pathname])

  return (
    <header className="bg-white shadow-md w-full relative">
      <div className="px-6 py-3">
        {/* Mobile & Desktop Header */}
        <div className="flex items-center justify-between">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-16 md:h-20" />
              <div>
                <div className="mt-1 hidden md:block">
                  <WeatherBadge />
                </div>
              </div>
            </Link>
            {/* Location selector - hidden on mobile */}
            <div className="relative hidden md:block" ref={popupRef}>
            <button
  onMouseEnter={toggleLocationPopup}
  className="flex items-center space-x-2 text-neutral-charcoal hover:text-primary transition-colors cursor-pointer"
>
  <img src="/select_location.svg" alt="Location" className="w-6 h-6" />
  <span className="text-sm font-medium font-body">{selectedLocation}</span>
  <span className="text-xs">▼</span>
</button>


              {/* Location Popup */}
              {showLocationPopup && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-neutral-gray-light rounded-lg shadow-xl z-50 p-4 max-h-screen overflow-y-auto">
                  <h3 className="text-lg font-bold text-neutral-charcoal font-heading mb-4">
                    📍 Choose Your Location
                  </h3>
                  <div className="space-y-4 w-80">
                    {quickLocations.map((location) => (
                      <div
                        key={location.title}
                        onClick={() => {
                          setSelectedLocation(location.title)
                          setPreferredLocation(location.title) // Save to preferences
                          setShowLocationPopup(false)
                        }}
                        className="cursor-pointer"
                      >
                        <Card {...location} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Right side - Desktop nav + Mobile hamburger */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
            {/* Home Link - Now with translation */}
            <Link
              to="/"
              className={`flex items-center space-x-2 font-semibold transition-colors font-body ${
                isActive('/') ? 'text-primary' : 'text-neutral-charcoal hover:text-primary'
              }`}
            >
             <Icon name="home" className="w-7 h-7" />

              <span> {t('home')}</span>
            </Link>

            {/* Search - Now with translation */}
            <a
              href="#search"
              className="flex items-center space-x-2 font-semibold transition-colors font-body text-neutral-charcoal hover:text-primary"
            >
              <img src="/search.svg" alt="Search" className="w-6 h-6" />
              <span>{t('search')}</span>
            </a>

            {/* Locations - Now with translation */}
            <Link
              to="/locations"
              className={`flex items-center space-x-2 font-semibold transition-colors font-body ${
                isActive('/locations') ? 'text-primary' : 'text-neutral-charcoal hover:text-primary'
              }`}
            >
              <img src="/outlets.svg" alt="Locations" className="w-6 h-6" />
              <span>{t('locations')}</span>
            </Link>

            {/* Menu - Now with translation */}
            <Link
              to="/menu"
              className={`flex items-center space-x-2 font-semibold transition-colors font-body ${
                isActive('/menu') ? 'text-primary' : 'text-neutral-charcoal hover:text-primary'
              }`}
            >
              <img src="/manu.svg" alt="Menu" className="w-6 h-6" />
              <span>{t('menu')}</span>
            </Link>

            {/* Bulk Order - Now with translation */}
            <a
              href="#bulk-order"
              className="flex items-center space-x-2 font-semibold transition-colors font-body text-neutral-charcoal hover:text-primary"
            >
              <img src="/bulk.png" alt="Bulk Order" className="w-6 h-6" />
              <span>{t('bulkOrder')}</span>
            </a>

            {/* Book Table - Now with translation */}
            <a
              href="#book-table"
              className="flex items-center space-x-2 font-semibold transition-colors font-body text-neutral-charcoal hover:text-primary"
            >
              <img src="/table.svg" alt="Book Table" className="w-6 h-6" />
              <span>{t('bookTable')}</span>
            </a>

            {/* Contact - Already using translation */}
            <Link
              to="/contact"
              className={`flex items-center space-x-2 font-semibold transition-colors font-body ${
                isActive('/contact') ? 'text-primary' : 'text-neutral-charcoal hover:text-primary'
              }`}
            >
             <img src="/contact.svg" alt="Book Table" className="w-6 h-6" />

              <span> {t('contact')}</span>
            </Link>

              {/* Preferences Panel */}
              <PreferencesPanel />
            </nav>
            
            {/* Mobile Cart + Hamburger */}
            <div className="flex items-center space-x-3 md:hidden">
              <Icon name="cart" className="w-6 h-6" />
              <button
                onClick={toggleMobileMenu}
                className="p-2 hover:bg-neutral-gray-light rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <Icon 
                  name={showMobileMenu ? "close" : "hamburger"} 
                  className="w-6 h-6" 
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Overlay */}
        {showMobileMenu && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMobileMenu}>
            <div className="bg-white w-4/5 max-w-sm h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-2">
                  <Logo className="h-8" />
                </div>
                <button onClick={toggleMobileMenu} className="p-2">
                  <Icon name="close" className="w-6 h-6" />
                </button>
              </div>
              
              {/* Mobile Menu Items */}
              <nav className="p-6 space-y-4">
                <Link
                  to="/"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive('/') ? 'bg-primary-light text-primary' : 'hover:bg-neutral-gray-light'
                  }`}
                >
                                <Icon name="home" className="w-6 h-6" />
              <span className="font-medium">{t('home')}</span>
                </Link>
                
                <Link
                  to="/menu"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive('/menu') ? 'bg-primary-light text-primary' : 'hover:bg-neutral-gray-light'
                  }`}
                >
                  <Icon name="manu" className="w-5 h-5" />
                  <span className="font-medium">{t('menu')}</span>
                </Link>
                
                <Link
                  to="/locations"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive('/locations') ? 'bg-primary-light text-primary' : 'hover:bg-neutral-gray-light'
                  }`}
                >
                  <Icon name="outlets" className="w-5 h-5" />
                  <span className="font-medium">{t('locations')}</span>
                </Link>
                
                <Link
                  to="/contact"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive('/contact') ? 'bg-primary-light text-primary' : 'hover:bg-neutral-gray-light'
                  }`}
                >
                  <Icon name="phone" className="w-5 h-5" />
                  <span className="font-medium">{t('contact')}</span>
                </Link>
                
                <a
                  href="#search"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-gray-light transition-colors"
                >
                  <Icon name="search" className="w-5 h-5" />
                  <span className="font-medium">{t('search')}</span>
                </a>
                
                <a
                  href="#bulk-order"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-gray-light transition-colors"
                >
                  <img src="/bulk.png" alt="Bulk Order" className="w-5 h-5" />
                  <span className="font-medium">{t('bulkOrder')}</span>
                </a>
                
                <a
                  href="#book-table"
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-gray-light transition-colors"
                >
                  <Icon name="table" className="w-5 h-5" />
                  <span className="font-medium">{t('bookTable')}</span>
                </a>
              </nav>
              
              {/* Mobile Weather Badge */}
              <div className="p-6 border-t">
                <WeatherBadge />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header