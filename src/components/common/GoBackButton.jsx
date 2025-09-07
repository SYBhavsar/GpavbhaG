import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../ui/Button'

function GoBackButton({ 
  fallbackPath = '/', 
  className = '', 
  variant = 'ghost',
  size = 'small',
  children = '← Go Back'
}) {
  const navigate = useNavigate()
  const location = useLocation()
  
  const handleGoBack = () => {
    // Check if there's previous history
    if (window.history.length > 1) {
      // Go back to previous page
      navigate(-1)
    } else {
      // No history, go to fallback (usually home)
      navigate(fallbackPath)
    }
  }

  // Don't show go back button on home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <Button 
      onClick={handleGoBack}
      variant={variant}
      size={size}
      className={`mb-4 ${className}`}
    >
      {children}
    </Button>
  )
}

// Specialized go back buttons for different contexts
export function GoBackToMenu() {
  return (
    <GoBackButton 
      fallbackPath="/menu"
      className="text-primary hover:bg-primary hover:text-white"
    >
      ← Back to Menu
    </GoBackButton>
  )
}

export function GoBackToHome() {
  return (
    <GoBackButton 
      fallbackPath="/"
      className="text-primary hover:bg-primary hover:text-white"
    >
      ← Back to Home
    </GoBackButton>
  )
}

// Smart go back with context awareness
export function SmartGoBack() {
  const location = useLocation()
  
  // Determine appropriate fallback based on current page
  const getFallbackPath = () => {
    if (location.pathname.startsWith('/menu')) return '/menu'
    if (location.pathname.startsWith('/contact')) return '/'
    if (location.pathname.startsWith('/about')) return '/'
    return '/'
  }
  
  const getButtonText = () => {
    if (location.pathname.startsWith('/menu')) return '← Back to Menu'
    return '← Go Back'
  }
  
  return (
    <GoBackButton 
      fallbackPath={getFallbackPath()}
      className="text-neutral-charcoal hover:text-primary"
    >
      {getButtonText()}
    </GoBackButton>
  )
}

export default GoBackButton