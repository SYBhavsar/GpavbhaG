import { useState, useEffect } from 'react'

// Custom hook for weather data - demonstrates API integration patterns
export function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastFetch, setLastFetch] = useState(null)
  
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  
  // Cache weather data for 10 minutes (600,000 ms)
  const CACHE_DURATION = 10 * 60 * 1000
  
  useEffect(() => {
    // Skip if no coordinates
    if (!lat || !lon) {
      setLoading(false)
      return
    }
    
    // Check cache - avoid unnecessary API calls
    if (lastFetch && Date.now() - lastFetch < CACHE_DURATION && weather) {
      console.log('Using cached weather data')
      setLoading(false)
      return
    }
    
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Handle missing API key gracefully
        if (!API_KEY || API_KEY === 'YOUR_OPENWEATHER_API_KEY_HERE') {
          // Mock weather data for development
          const mockWeather = {
            main: {
              temp: 28,
              feels_like: 32,
              humidity: 65
            },
            weather: [
              {
                main: 'Clear',
                description: 'clear sky',
                icon: '01d'
              }
            ],
            wind: {
              speed: 3.5
            },
            name: 'Mumbai',
            isMocked: true
          }
          
          await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay
          setWeather(mockWeather)
          setLastFetch(Date.now())
          return
        }
        
        // Real API call
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        )
        
        if (!response.ok) {
          throw new Error(`Weather API error: ${response.status}`)
        }
        
        const data = await response.json()
        setWeather(data)
        setLastFetch(Date.now())
        
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchWeather()
  }, [lat, lon, API_KEY]) // Re-fetch when coordinates or API key change
  
  // Retry function for error handling
  const retry = () => {
    setLastFetch(null) // Clear cache
    setError(null)
  }
  
  return { weather, loading, error, retry, isFromCache: lastFetch && weather }
}

// Mumbai weather hook - pre-configured for your restaurant
export function useMumbaiWeather() {
  const lat = import.meta.env.VITE_MUMBAI_LAT || 19.0760
  const lon = import.meta.env.VITE_MUMBAI_LON || 72.8777
  
  return useWeather(parseFloat(lat), parseFloat(lon))
}

// Weather utility functions
export const weatherUtils = {
  // Convert weather to restaurant-appropriate messages
  getRestaurantMessage: (weather) => {
    if (!weather) return null
    
    const condition = weather.weather[0].main.toLowerCase()
    const temp = Math.round(weather.main.temp)
    
    const messages = {
      clear: {
        emoji: '☀️',
        message: `Beautiful ${temp}°C weather! Perfect for our outdoor seating.`,
        recommendation: 'Try our refreshing Lime Soda with your meal!'
      },
      clouds: {
        emoji: '☁️',
        message: `Pleasant ${temp}°C with clouds. Great day for comfort food!`,
        recommendation: 'Our hot Pav Bhaji will warm you up perfectly.'
      },
      rain: {
        emoji: '🌧️',
        message: `Rainy day (${temp}°C) - Perfect for hot, spicy food!`,
        recommendation: 'Stay cozy with our signature Butter Pav Bhaji.'
      },
      thunderstorm: {
        emoji: '⛈️',
        message: `Stormy weather! Delivery available for safe dining at home.`,
        recommendation: 'Order our family combo for a perfect rainy day meal.'
      },
      snow: {
        emoji: '❄️',
        message: `Rare snow in Mumbai! Warm up with our hot specialties.`,
        recommendation: 'Hot Masala Chai and Pav Bhaji combo recommended!'
      },
      mist: {
        emoji: '🌫️',
        message: `Misty ${temp}°C morning. Great atmosphere for dining!`,
        recommendation: 'Start your day with our breakfast special.'
      },
      default: {
        emoji: '🌤️',
        message: `Current temperature: ${temp}°C. Perfect dining weather!`,
        recommendation: 'Visit us for the best Pav Bhaji experience in Mumbai.'
      }
    }
    
    return messages[condition] || messages.default
  },
  
  // Determine if good for delivery
  isGoodForDelivery: (weather) => {
    if (!weather) return true
    
    const condition = weather.weather[0].main.toLowerCase()
    const windSpeed = weather.wind?.speed || 0
    
    // Avoid delivery in severe weather
    return !(condition === 'thunderstorm' && windSpeed > 10)
  },
  
  // Get weather icon URL
  getIconUrl: (weather) => {
    if (!weather || !weather.weather[0]) return null
    return `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  }
}