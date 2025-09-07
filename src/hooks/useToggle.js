import { useState, useCallback } from 'react'

/**
 * Custom hook for managing boolean toggle state
 * @param {boolean} initialValue - Initial toggle state (default: false)
 * @returns {[isToggled, toggle, setToggle]} - current state, toggle function, and setter
 */
export function useToggle(initialValue = false) {
  const [isToggled, setIsToggled] = useState(initialValue)

  // Toggle function that flips the current state
  const toggle = useCallback(() => {
    setIsToggled(prev => !prev)
  }, [])

  // Direct setter (same as useState setter)
  const setValue = useCallback((value) => {
    setIsToggled(value)
  }, [])

  return [isToggled, toggle, setValue]
}

/**
 * Advanced toggle hook with additional utilities
 * @param {boolean} initialValue - Initial toggle state
 * @returns {object} - Toggle state and utility functions
 */
export function useAdvancedToggle(initialValue = false) {
  const [isToggled, setIsToggled] = useState(initialValue)

  const toggle = useCallback(() => setIsToggled(prev => !prev), [])
  const setTrue = useCallback(() => setIsToggled(true), [])
  const setFalse = useCallback(() => setIsToggled(false), [])
  
  return {
    isToggled,
    toggle,
    setTrue,
    setFalse,
    setValue: setIsToggled
  }
}

export default useToggle