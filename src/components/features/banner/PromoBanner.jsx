import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

function PromoBanner() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)

  return (
    <div className="relative bg-gradient-to-r from-orange-800 to-red-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Main Content */}
      <div className="relative mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Promotional Text */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                <span className="text-yellow-300">Prepared</span><br/>
                <span className="text-white">Authentically,</span><br/>
                <span className="text-orange-200">Freshly Served</span>
              </h1>
              
              <p className="text-xl text-orange-100 mb-6">
                We have 6 amazing pav bhaji varieties for your unending pav bhaji love
              </p>
            </div>
            
            {/* Quality Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                🌱 100% Vegetarian
              </div>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                🔥 Fresh & Hot
              </div>
              <div className="bg-white bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium">
                ⭐ Mumbai Style
              </div>
            </div>
            
            {/* Special Message */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg p-4 border-l-4 border-yellow-300">
              <p className="text-sm font-medium">
                <span className="text-yellow-200">Made with</span> <span className="font-bold text-white">Fresh Vegetables</span> <span className="text-yellow-200">& Authentic Mumbai Spices</span>
              </p>
            </div>
          </div>
          
          {/* Right Side - Food Images Placeholder */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Classic Pav Bhaji */}
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-400 to-red-600 rounded-xl p-8 h-48 flex flex-col justify-center items-center text-center shadow-xl transform rotate-2">
                  <div className="text-4xl mb-2">🍛</div>
                  <h3 className="font-bold text-lg">Classic</h3>
                  <p className="text-sm opacity-90">Pav Bhaji</p>
                </div>
              </div>
              
              {/* Butter Pav Bhaji */}
              <div className="relative mt-8">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl p-8 h-48 flex flex-col justify-center items-center text-center shadow-xl transform -rotate-2">
                  <div className="text-4xl mb-2">🧈</div>
                  <h3 className="font-bold text-lg">Butter</h3>
                  <p className="text-sm opacity-90">Special</p>
                </div>
              </div>
              
              {/* Cheese Pav Bhaji */}
              <div className="relative -mt-4">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-8 h-48 flex flex-col justify-center items-center text-center shadow-xl transform rotate-1">
                  <div className="text-4xl mb-2">🧀</div>
                  <h3 className="font-bold text-lg">Cheese</h3>
                  <p className="text-sm opacity-90">Loaded</p>
                </div>
              </div>
              
              {/* Paneer Special */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-xl p-8 h-48 flex flex-col justify-center items-center text-center shadow-xl transform -rotate-1">
                  <div className="text-4xl mb-2">🥘</div>
                  <h3 className="font-bold text-lg">Paneer</h3>
                  <p className="text-sm opacity-90">Special</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black rounded-full p-3 shadow-lg transform rotate-12">
              <div className="text-center">
                <div className="text-xs font-bold">FRESH</div>
                <div className="text-xs font-bold">DAILY</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white rounded-full p-3 shadow-lg transform -rotate-12">
              <div className="text-center">
                <div className="text-xs font-bold">MUMBAI'S</div>
                <div className="text-xs font-bold">BEST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[1,2,3,4,5].map((dot) => (
            <div 
              key={dot}
              className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white bg-opacity-40'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PromoBanner