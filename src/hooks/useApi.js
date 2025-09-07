import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for API calls with loading, error, and retry functionality
 * @param {string|function} urlOrFetcher - API endpoint URL or custom fetch function
 * @param {object} options - Configuration options
 * @returns {object} - API state and utility functions
 */
export function useApi(urlOrFetcher, options = {}) {
  const {
    immediate = true,        // Auto-fetch on mount
    cacheTime = 0,          // Cache duration in milliseconds
    retryAttempts = 0,      // Number of retry attempts
    retryDelay = 1000,      // Delay between retries
    onSuccess,              // Success callback
    onError                 // Error callback
  } = options

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(immediate)
  const [error, setError] = useState(null)
  const [lastFetched, setLastFetched] = useState(null)

  // Create the fetch function
  const fetchData = useCallback(async (retryCount = 0) => {
    try {
      setLoading(true)
      setError(null)

      let response
      
      // Handle URL string vs custom fetcher function
      if (typeof urlOrFetcher === 'string') {
        response = await fetch(urlOrFetcher)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        setData(result)
        
        if (onSuccess) onSuccess(result)
      } else if (typeof urlOrFetcher === 'function') {
        const result = await urlOrFetcher()
        setData(result)
        
        if (onSuccess) onSuccess(result)
      }

      setLastFetched(Date.now())
      
    } catch (err) {
      // Retry logic
      if (retryCount < retryAttempts) {
        setTimeout(() => {
          fetchData(retryCount + 1)
        }, retryDelay)
        return
      }

      setError(err.message || 'An error occurred')
      if (onError) onError(err)
      
    } finally {
      setLoading(false)
    }
  }, [urlOrFetcher, retryAttempts, retryDelay, onSuccess, onError])

  // Check if data is cached and valid
  const isCacheValid = useCallback(() => {
    if (!lastFetched || cacheTime === 0) return false
    return (Date.now() - lastFetched) < cacheTime
  }, [lastFetched, cacheTime])

  // Main fetch function that respects cache
  const refetch = useCallback(() => {
    if (isCacheValid()) {
      return Promise.resolve(data)
    }
    return fetchData()
  }, [fetchData, isCacheValid, data])

  // Auto-fetch on mount if immediate is true
  useEffect(() => {
    if (immediate) {
      fetchData()
    }
  }, [immediate, fetchData])

  // Manual retry function
  const retry = useCallback(() => {
    fetchData()
  }, [fetchData])

  // Clear cache
  const clearCache = useCallback(() => {
    setLastFetched(null)
    setData(null)
  }, [])

  return {
    // State
    data,
    loading,
    error,
    lastFetched,
    
    // Computed
    isStale: !isCacheValid(),
    hasData: data !== null,
    
    // Functions
    refetch,
    retry,
    clearCache,
    
    // For manual control
    setData,
    setError,
    setLoading
  }
}

/**
 * Simplified API hook for basic GET requests
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {object} - API state
 */
export function useSimpleApi(url, options = {}) {
  return useApi(url, {
    immediate: true,
    cacheTime: 5 * 60 * 1000, // 5 minutes default cache
    ...options
  })
}

export default useApi