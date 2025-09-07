import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useUserPreferences } from '../../context/UserPreferencesContext'
import { useTranslation } from '../../utils/translations'
import { restaurantInfo } from '../../data/restaurant'
import Icon from '../ui/Icon'

function Footer() {
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // useState hook - get stored count, increment by 1, and save back
  const [visitors, setVisitors] = useState(() => {
    // Get stored visitor count from browser storage, or start at 0
    const stored = localStorage.getItem('visitorCount') || '0'
    const newCount = parseInt(stored) + 1
    // Save the incremented count immediately
    localStorage.setItem('visitorCount', newCount.toString())
    return newCount
  })
  return (
    <footer className="bg-neutral-charcoal text-neutral-white">
      <div className="px-6 py-8">
        <div className="">

          {/* Terms & Conditions | Privacy Policy */}
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-4 text-sm text-neutral-gray-light">
              <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
              <span>|</span>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* 3-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            
            {/* Column 1: Logo */}
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <Logo className="h-12" />
              </div>
              <p className="text-sm text-neutral-gray-light">
                {t('subtitle')}
              </p>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 font-heading">Useful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-neutral-gray-light hover:text-secondary transition-colors">About GpavbhaG</a></li>
                <li><a href="#blog" className="text-neutral-gray-light hover:text-tertiary transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Column 3: Mobile App */}
            <div>
              <h4 className="font-semibold mb-3 font-heading">Mobile App</h4>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <a href="#google-play" className="hover:opacity-80 transition-opacity">
                  <img src="/google.webp" alt="Download on Google Play" className="h-10 w-auto" />
                </a>
                <a href="#app-store" className="hover:opacity-80 transition-opacity">
                  <img src="/apple.webp" alt="Download on App Store" className="h-10 w-auto" />
                </a>
              </div>
            </div>

          </div>

          {/* Social Media */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-semibold mb-3 font-heading">Connect with us</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {Object.entries(restaurantInfo.socialLinks).map(([key, social]) => (
                <a 
                  key={key} 
                  href={social.url} 
                  className="text-neutral-gray-light hover:text-primary transition-colors text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-neutral-gray-medium pt-4 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
                <p className="text-sm text-neutral-gray-light">
                  Version: {restaurantInfo.app.version}
                </p>
                <p className="text-sm text-neutral-gray-light">
                  Visitors Today: {visitors}
                </p>
              </div>
              <p className="text-sm text-neutral-gray-light">
                {restaurantInfo.app.copyright}
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer