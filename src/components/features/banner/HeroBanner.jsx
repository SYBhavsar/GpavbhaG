import { useState, useEffect } from 'react'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

function HeroBanner() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Banner images array
  const bannerImages = [
    '/banner.png',
    '/banner3.png'
  ]
  
  const [currentBanner, setCurrentBanner] = useState(0)
  
  // Auto-slide banner every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [bannerImages.length])
  
  // Manual banner navigation
  const goToBanner = (index) => {
    setCurrentBanner(index)
  }
  
  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length)
  }
  
  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden bg-neutral-gray-light">
      
      {/* Banner Images */}
      <div className="relative w-full h-full">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            <div className="hidden w-full h-full bg-gradient-to-r from-primary to-secondary items-center justify-center">
              <div className="text-white text-center">
                <h2 className="text-3xl font-bold mb-2">GpavbhaG Restaurant</h2>
                <p className="text-xl">Authentic Mumbai Pav Bhaji</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={prevBanner}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all z-10"
        aria-label="Previous banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextBanner}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white rounded-full p-3 transition-all z-10"
        aria-label="Next banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToBanner(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentBanner 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-70'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
      
    </div>
  )
}

export default HeroBanner