import { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { Card, SpecialBadge, FlexCenter, FlexBetween } from '../../ui/UI'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'

// MenuCard component - receives individual menu item data as props
// Wrapped with memo() to prevent re-renders when props haven't changed
function MenuCard({ id, name, description, price, image, isSpecial }) {
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  return (
    <Card noPadding flex className="overflow-hidden hover:shadow-lg transition-shadow">
      
      {/* Food Image */}
      <div className="h-48 bg-amber-100 relative overflow-hidden">
        {/* Special Badge - positioned absolute so it doesn't affect layout */}
        {isSpecial && (
          <SpecialBadge>
            ⭐ {t('chefSpecial')}
          </SpecialBadge>
        )}
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to emoji if image fails to load
            e.target.style.display = 'none'
            e.target.nextElementSibling.style.display = 'flex'
          }}
        />
        <div className="hidden w-full h-full bg-amber-100 items-center justify-center">
          <span className="text-6xl">{name.includes('Pav Bhaji') ? '🍛' : name.includes('Drink') ? '🥤' : '🥘'}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Item Name */}
        <h3 className="text-xl font-bold text-neutral-charcoal font-heading mb-2">
          {name}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-charcoal text-sm font-body mb-4 flex-1">
          {description}
        </p>
        
        {/* Price */}
        <FlexBetween className="mb-4">
          <span className="text-2xl font-bold text-primary">
            ₹{price}
          </span>
        </FlexBetween>
        
        {/* Action Buttons - Always at bottom */}
        <div className="flex flex-col gap-2 mt-auto">
          <Link to={`/menu/${id}`} className="w-full">
            <Button variant="secondary" size="small" className="w-full">
              {t('viewDetails')}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}

// Export memoized component for performance
// Only re-renders when name, description, price, image, or isSpecial change
export default memo(MenuCard)