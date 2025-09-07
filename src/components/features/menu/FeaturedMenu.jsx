import { Link } from 'react-router-dom'
import { SectionTitle } from '../../ui/UI'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'
import { specialMenuItems } from '../../../data/menu'
import Icon from '../../ui/Icon'
import Button from '../../ui/Button'

function FeaturedMenu() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Transform special menu items with translations
  const translatedMenuItems = specialMenuItems.map(item => ({
    ...item,
    name: t(item.nameKey)
  }))

  return (
    <div className="bg-neutral-gray-light py-8 px-6">
      <div className="">
        {/* Section Title */}
        <SectionTitle>
          {t('ourSpecial')}
        </SectionTitle>
        
        {/* Menu Items - Mobile: Stack vertically, Desktop: Horizontal scroll */}
        <div className="grid grid-cols-1 md:flex md:overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {translatedMenuItems.map((item) => (
            <div key={item.id} className="w-full md:w-80 md:flex-shrink-0">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow shadow-md h-full flex flex-col">
                {/* Food Image */}
                <div className="h-48 bg-amber-100 relative overflow-hidden">
                  {item.isSpecial && (
                    <div className="absolute top-3 right-3 bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                      <Icon name="star" className="w-3 h-3 filter invert" /> {t('chefSpecial')}
                    </div>
                  )}
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to emoji if image fails to load
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden w-full h-full bg-amber-100 items-center justify-center">
                    <span className="text-6xl">{item.name.includes('Pav Bhaji') ? '🍛' : item.name.includes('Chai') ? '🍵' : '🥤'}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Item Name */}
                  <h3 className="text-xl font-bold text-neutral-charcoal font-heading mb-2">
                    {item.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-charcoal text-sm font-body mb-4 flex-1">
                    {item.description}
                  </p>
                  
                  {/* Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ₹{item.price}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                   
                   <Link to={`/menu/${item.id}`} className="w-full">
                      <Button variant="outline" size="small" className="w-full">
                        {t('viewDetails')}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedMenu