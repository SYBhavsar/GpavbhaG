import { memo, useMemo } from 'react'
import { useMumbaiWeather, weatherUtils } from '../../../hooks/useWeather'
import { Card, FlexBetween } from '../../ui/UI'
import LoadingSpinner, { InlineLoader } from '../../ui/LoadingSpinner'
import Button from '../../ui/Button'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

// Memoized WeatherWidget to prevent unnecessary re-renders
function WeatherWidget({ className = "" }) {
  const { weather, loading, error, retry, isFromCache } = useMumbaiWeather()
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Loading state
  if (loading) {
    return (
      <Card className={`${className} p-4`}>
        <div className="text-center">
          <InlineLoader />
          <p className="text-sm text-neutral-charcoal mt-2">
            Getting Mumbai weather...
          </p>
        </div>
      </Card>
    )
  }
  
  // Error state with retry
  if (error) {
    return (
      <Card className={`${className} p-4 border-red-200 bg-red-50`}>
        <div className="text-center">
          <div className="text-4xl mb-2">🌡️</div>
          <h3 className="text-lg font-semibold text-red-700 mb-2">
            Weather Unavailable
          </h3>
          <p className="text-sm text-red-600 mb-3">
            {error}
          </p>
          <Button 
            onClick={retry}
            variant="outline" 
            size="small"
            className="border-red-300 text-red-700 hover:bg-red-100"
          >
            🔄 {t('retry')}
          </Button>
        </div>
      </Card>
    )
  }
  
  // No weather data
  if (!weather) {
    return null
  }
  
  // Memoize expensive weather calculations to prevent recalculation on every render
  const weatherCalculations = useMemo(() => {
    if (!weather) return null
    
    return {
      restaurantMessage: weatherUtils.getRestaurantMessage(weather),
      isGoodDelivery: weatherUtils.isGoodForDelivery(weather),
      iconUrl: weatherUtils.getIconUrl(weather)
    }
  }, [weather]) // Only recalculate when weather data changes
  
  const { restaurantMessage, isGoodDelivery, iconUrl } = weatherCalculations || {}
  
  return (
    <Card className={`${className} overflow-hidden`}>
      {/* Weather Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4">
        <FlexBetween>
          <div className="flex items-center space-x-3">
            {iconUrl && !weather.isMocked && (
              <img 
                src={iconUrl} 
                alt={weather.weather[0].description}
                className="w-12 h-12"
              />
            )}
            {weather.isMocked && <span className="text-3xl">☀️</span>}
            
            <div>
              <h3 className="text-lg font-semibold">
                {t('mumbaiWeather')}
              </h3>
              <p className="text-blue-100 text-sm">
                {weather.weather[0].description}
              </p>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="text-blue-100 text-sm">
              Feels like {Math.round(weather.main.feels_like)}°C
            </div>
          </div>
        </FlexBetween>
      </div>
      
      {/* Restaurant Message */}
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <span className="text-2xl">{restaurantMessage.emoji}</span>
          <div className="flex-1">
            <p className="text-neutral-charcoal font-medium mb-2">
              {restaurantMessage.message}
            </p>
            <p className="text-sm text-primary font-medium">
              💡 {restaurantMessage.recommendation}
            </p>
          </div>
        </div>
      </div>
      
      {/* Delivery Status */}
      <div className="px-4 pb-4">
        <div className={`p-3 rounded-lg ${
          isGoodDelivery 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-orange-50 border border-orange-200'
        }`}>
          <FlexBetween>
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                {isGoodDelivery ? '🚚' : '⚠️'}
              </span>
              <span className={`text-sm font-medium ${
                isGoodDelivery ? 'text-green-700' : 'text-orange-700'
              }`}>
                {isGoodDelivery 
                  ? t('deliveryAvailable') 
                  : t('limitedDelivery')
                }
              </span>
            </div>
            
            <div className="text-xs text-neutral-charcoal">
              Humidity: {weather.main.humidity}%
            </div>
          </FlexBetween>
        </div>
      </div>
      
      {/* Debug Info */}
      {(weather.isMocked || isFromCache) && (
        <div className="px-4 pb-2">
          <div className="text-xs text-neutral-gray-light bg-gray-50 p-2 rounded">
            {weather.isMocked && '🧪 Demo data (Add API key for live weather)'}
            {isFromCache && !weather.isMocked && '💾 Cached data (updates every 10 min)'}
          </div>
        </div>
      )}
    </Card>
  )
}

// Compact weather widget for header/sidebar
export function WeatherBadge({ className = "" }) {
  const { weather, loading, error } = useMumbaiWeather()
  
  if (loading || error || !weather) return null
  
  const temp = Math.round(weather.main.temp)
  const condition = weather.weather[0].main
  
  return (
    <div className={`inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm ${className}`}>
      <span>🌡️</span>
      <span>{temp}°C</span>
      <span>•</span>
      <span>{condition}</span>
    </div>
  )
}

// Export memoized WeatherWidget for performance optimization
export default memo(WeatherWidget)