function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false,
  className = '' 
}) {
  // Base styles that all buttons share
  const baseStyles = 'font-medium transition-colors rounded-lg font-body focus:outline-none focus:ring-2'
  
  // Different button variants (colors/styles)
  const variants = {
    primary: 'bg-primary text-neutral-white hover:bg-primary-hover focus:ring-primary',
    secondary: 'bg-secondary text-neutral-white hover:bg-secondary-hover focus:ring-secondary',
    tertiary: 'bg-tertiary text-neutral-white hover:bg-tertiary-hover focus:ring-tertiary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-neutral-white focus:ring-primary',
    ghost: 'text-primary hover:bg-primary-light focus:ring-primary'
  }
  
  // Different button sizes
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  }
  
  // Disabled state
  const disabledStyles = 'opacity-50 cursor-not-allowed hover:bg-current'
  
  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledStyles : ''}
    ${className}
  `.trim()
  
  return (
    <button
      className={buttonStyles}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button