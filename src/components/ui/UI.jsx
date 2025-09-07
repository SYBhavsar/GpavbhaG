// Reusable UI components to eliminate repetitive styling

// Container components
export function Container({ children, className = "" }) {
  return (
    <div className={` mx-auto px-4 ${className}`}>
      {children}
    </div>
  )
}

export function Section({ children, className = "" }) {
  return (
    <section className={`py-8 ${className}`}>
      {children}
    </section>
  )
}

// Card components
export function Card({ children, className = "", noPadding = false, flex = false }) {
  const baseClasses = "bg-white rounded-lg shadow-md border"
  const paddingClasses = noPadding ? "" : "p-6"
  const flexClasses = flex ? "h-full flex flex-col" : ""
  
  return (
    <div className={`${baseClasses} ${paddingClasses} ${flexClasses} ${className}`}>
      {children}
    </div>
  )
}

export function BorderCard({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 border-2 border-primary ${className}`}>
      {children}
    </div>
  )
}

// Text components
export function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-4xl font-bold text-primary font-heading mb-6  ${className}`} >
      {children}
    </h2>

  )
}

export function SectionSubtitle({ children, className = "" }) {
  return (
    <p className={`text-neutral-charcoal ${className}`}>
      {children}
    </p>
  )
}

export function PageHeading({ children, className = "" }) {
  return (
    <h1 className={`text-4xl font-bold text-primary font-heading ${className}`}>
      {children}
    </h1>
  )
}

// Layout components
export function FlexCenter({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  )
}

export function FlexBetween({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  )
}

export function Grid({ children, cols = "3", className = "" }) {
  // Define predefined grid classes to ensure Tailwind includes them
  const gridClasses = {
    "1": "grid-cols-1",
    "2": "grid-cols-1 md:grid-cols-2", 
    "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    "1 md:2 lg:3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    "1 md:2 lg:4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }
  
  const gridClass = gridClasses[cols] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  
  return (
    <div className={`grid ${gridClass} gap-6 ${className}`}>
      {children}
    </div>
  )
}

// Status components
export function StatusBadge({ isOpen, children, className = "" }) {
  const baseClasses = "text-xl font-bold px-6 py-3 rounded-full inline-block"
  const statusClasses = isOpen 
    ? "bg-green-500 text-white" 
    : "bg-red-500 text-white"
  
  return (
    <div className={`${baseClasses} ${statusClasses} ${className}`}>
      {children}
    </div>
  )
}

export function SpecialBadge({ children, className = "" }) {
  return (
    <div className={`absolute top-2 left-2 bg-primary text-white px-3 py-1 text-sm font-medium rounded-full ${className}`}>
      {children}
    </div>
  )
}

// Form components
export function FormField({ children, className = "" }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  )
}

export function FormLabel({ children, htmlFor, className = "" }) {
  return (
    <label 
      htmlFor={htmlFor} 
      className={`block text-sm font-medium text-neutral-charcoal mb-2 ${className}`}
    >
      {children}
    </label>
  )
}

export function FormInput({ error, className = "", ...props }) {
  const baseClasses = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  const errorClasses = error ? "border-red-500" : "border-neutral-gray-light"
  
  return (
    <input 
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...props}
    />
  )
}

export function FormTextarea({ error, className = "", ...props }) {
  const baseClasses = "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
  const errorClasses = error ? "border-red-500" : "border-neutral-gray-light"
  
  return (
    <textarea 
      className={`${baseClasses} ${errorClasses} ${className}`}
      {...props}
    />
  )
}

export function ErrorText({ children, className = "" }) {
  return (
    <p className={`text-red-500 text-sm mt-1 ${className}`}>
      {children}
    </p>
  )
}

// Success/Alert components
export function SuccessAlert({ children, className = "" }) {
  return (
    <div className={`bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg ${className}`}>
      {children}
    </div>
  )
}