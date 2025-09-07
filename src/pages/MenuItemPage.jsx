import { useParams, Navigate } from 'react-router-dom'
import { Section } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'
import { menuItems } from '../data/menu'
import Icon from '../components/ui/Icon'
import Button from '../components/ui/Button'

function MenuItemPage() {
  // Get the item ID from URL parameters
  const { id } = useParams()
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Find the menu item by ID
  const menuItem = menuItems.find(item => item.id === parseInt(id))
  
  // If item doesn't exist, redirect to menu page
  if (!menuItem) {
    return <Navigate to="/menu" replace />
  }

  return (
    <div className="min-h-screen">
      <div className="px-6 py-4">
        <SmartGoBack fallbackPath="/menu" />
      </div>
      
      {/* Header Section - Full Width */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-12 px-6">
        <div className="">
          <h1 className="text-4xl font-bold text-white font-heading mb-4">
            {t(menuItem.nameKey)}
          </h1>
          <div className="flex gap-3 mb-4">
            {menuItem.isSpecial && (
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Icon name="star" className="w-4 h-4 filter invert" /> {t('labels.special')}
              </span>
            )}
            {menuItem.isVegetarian && (
              <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1">
                <Icon name="leaf" className="w-4 h-4 filter invert" /> {t('labels.vegetarian')}
              </span>
            )}
          </div>
          <p className="text-xl text-white max-w-3xl">
            {menuItem.description}
          </p>
        </div>
      </div>

      {/* Main 2-Column Layout - Full Width */}
      <div className="px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12  mx-auto">
          {/* Left Column - Image & Price */}
          <div className="space-y-6">
            {/* Image */}
            <div className="bg-neutral-gray-light rounded-lg overflow-hidden h-96">
              <img 
                src={menuItem.image} 
                alt={t(menuItem.nameKey)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full bg-neutral-gray-light items-center justify-center">
                <div className="text-center text-neutral-gray">
                  <div className="text-6xl mb-4">🍽️</div>
                  <p className="text-lg">{t(menuItem.nameKey)}</p>
                  <p className="text-sm text-neutral-gray">Image not available</p>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-primary text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold">₹{menuItem.price}</div>
            </div>
          </div>

          {/* Right Column - All Details */}
          <div className="space-y-6">
            {/* Detailed Description */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                About This Dish
              </h2>
              <p className="text-neutral-gray-dark leading-relaxed text-base mb-6">
                {menuItem.detailedDescription}
              </p>
            </div>

            {/* Nutritional Info */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="chart" className="w-5 h-5" /> {t('labels.nutritionalInfo')}
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-gray-dark">{t('labels.calories')}:</span>
                  <span className="font-medium">{menuItem.calories} cal</span>
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <Icon name="tag" className="w-5 h-5" /> {t('labels.category')}
              </h3>
              <span className="bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full font-medium">
                {t(`categories.${menuItem.category}`)}
              </span>
            </div>

            {/* Allergens */}
            {menuItem.allergens && menuItem.allergens.length > 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                  <Icon name="warning" className="w-5 h-5" /> {t('labels.allergens')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {menuItem.allergens.map((allergen, index) => (
                    <span 
                      key={index}
                      className="bg-yellow-200 text-yellow-800 px-3 py-2 rounded-full text-sm"
                    >
                      {t(`allergens.${allergen}`)}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" /> No Known Allergens
                </h3>
                <p className="text-green-700">This dish is free from common allergens</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button variant="primary" size="large" className="w-full">
                {t('buttons.addToOrder')} - ₹{menuItem.price}
              </Button>
              <Button variant="outline" size="large" className="w-full">
                {t('buttons.customizeOrder')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Section - Full Width */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white py-8 px-6">
        <div className=" mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="lightbulb" className="w-6 h-6" /> {t('labels.chefRecommendation')}
          </h2>
          <p className="text-lg text-white">
            {menuItem.category === 'main' 
              ? t('recommendations.mainDish')
              : t('recommendations.beverage')
            }
          </p>
        </div>
      </div>
    </div>
  )
}

export default MenuItemPage