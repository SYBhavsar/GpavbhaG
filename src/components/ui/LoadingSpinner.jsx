import { FlexCenter } from './UI'

function LoadingSpinner({ message = "Loading delicious content..." }) {
  return (
    <div className="min-h-[400px]">
      <FlexCenter className="h-full flex-col">
        {/* Animated Spinner */}
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="w-16 h-16 border-4 border-amber-200 rounded-full animate-spin border-t-primary"></div>
          
          {/* Inner food emoji */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl animate-pulse">🍛</span>
          </div>
        </div>
        
        {/* Loading Message */}
        <p className="text-lg text-neutral-charcoal mt-4 animate-pulse">
          {message}
        </p>
        
        {/* Progress dots */}
        <div className="flex space-x-1 mt-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
        
        {/* Fun loading messages */}
        <div className="text-sm text-neutral-gray-light mt-4 text-center max-w-xs">
          <p>🔥 Heating up your favorite dishes...</p>
        </div>
      </FlexCenter>
    </div>
  )
}

// Simple inline loading for smaller components
export function InlineLoader() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
      <span className="text-neutral-charcoal">Loading...</span>
    </div>
  )
}

export default LoadingSpinner