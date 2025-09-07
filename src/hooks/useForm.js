import { useState, useCallback } from 'react'

/**
 * Custom hook for form state management and validation
 * @param {object} config - Form configuration
 * @param {object} config.initialValues - Initial form values
 * @param {object} config.validation - Validation rules
 * @param {function} config.onSubmit - Submit handler
 * @returns {object} - Form state and handlers
 */
export function useForm({ initialValues = {}, validation = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle input changes
  const handleChange = useCallback((event) => {
    const { name, value, type, checked } = event.target
    const inputValue = type === 'checkbox' ? checked : value

    // Update values
    setValues(prev => ({
      ...prev,
      [name]: inputValue
    }))

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }, [errors])

  // Validate form
  const validate = useCallback(() => {
    const newErrors = {}

    Object.keys(validation).forEach(fieldName => {
      const rules = validation[fieldName]
      const value = values[fieldName]

      // Required validation
      if (rules.required && (!value || value.toString().trim() === '')) {
        newErrors[fieldName] = rules.required === true 
          ? `${fieldName} is required` 
          : rules.required
      }
      
      // Min length validation
      else if (rules.minLength && value && value.length < rules.minLength) {
        newErrors[fieldName] = `${fieldName} must be at least ${rules.minLength} characters`
      }
      
      // Max length validation  
      else if (rules.maxLength && value && value.length > rules.maxLength) {
        newErrors[fieldName] = `${fieldName} must not exceed ${rules.maxLength} characters`
      }
      
      // Pattern validation (regex)
      else if (rules.pattern && value && !rules.pattern.test(value)) {
        newErrors[fieldName] = rules.patternMessage || `${fieldName} format is invalid`
      }
      
      // Custom validation function
      else if (rules.validate && value) {
        const customError = rules.validate(value, values)
        if (customError) {
          newErrors[fieldName] = customError
        }
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [values, validation])

  // Handle form submission
  const handleSubmit = useCallback(async (event) => {
    if (event) {
      event.preventDefault()
    }

    const isValid = validate()
    
    if (!isValid) {
      return false
    }

    setIsSubmitting(true)
    
    try {
      if (onSubmit) {
        await onSubmit(values)
      }
      setIsSubmitted(true)
      return true
    } catch (error) {
      console.error('Form submission error:', error)
      return false
    } finally {
      setIsSubmitting(false)
    }
  }, [values, validate, onSubmit])

  // Reset form
  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({})
    setIsSubmitting(false)
    setIsSubmitted(false)
  }, [initialValues])

  // Set field value programmatically
  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  // Set field error programmatically  
  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }, [])

  return {
    // Form state
    values,
    errors,
    isSubmitting,
    isSubmitted,
    
    // Computed properties
    isValid: Object.keys(errors).length === 0,
    isDirty: JSON.stringify(values) !== JSON.stringify(initialValues),
    
    // Event handlers
    handleChange,
    handleSubmit,
    
    // Utility functions
    validate,
    reset,
    setFieldValue,
    setFieldError,
    
    // For manual control
    setValues,
    setErrors,
    setIsSubmitting,
    setIsSubmitted
  }
}

export default useForm