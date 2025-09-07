// Reusable Logo component for GpavbhaG Restaurant
import logo from '../../assets/logo-rm-1.png'

function Logo({ className = "" }) {
  return (
    <img 
      src={logo} 
      alt="GpavbhaG Restaurant - Authentic Pav Bhaji" 
      className={`object-contain ${className}`}
    />
  )
}

export default Logo