import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Custom hook to simulate route loading
export function useRouteLoading(delay = 500) {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    // Start loading when route changes
    setIsLoading(true)
    
    // Simulate loading delay (in real app, this would be API calls)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)
    
    // Cleanup timer
    return () => clearTimeout(timer)
  }, [location.pathname, delay])
  
  return isLoading
}

// Hook for simulating component loading
export function useComponentLoading(initialDelay = 300) {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, initialDelay)
    
    return () => clearTimeout(timer)
  }, [initialDelay])
  
  return isLoading
}