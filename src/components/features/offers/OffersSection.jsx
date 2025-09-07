import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'
import Icon from '../../ui/Icon'
import { SectionTitle } from '../../ui/UI'
import { offers } from '../../../data/offers'

function OffersSection() {
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)

  return (
    <div className="py-8 px-6">
      <div className="">
        {/* Section Title */}
        <SectionTitle>
          Offers
        </SectionTitle>
        
        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`${offer.bgColor} ${offer.textColor} rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <div className="flex items-start space-x-3">
                {/* Icon */}
                <div className="bg-white rounded-full pb-1 flex-shrink-0">
                <Icon name="offers" className="w-12 h-12" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-sm mb-1 leading-tight">
                    {offer.title}
                  </h3>
                  <p className="text-xs opacity-90 leading-relaxed">
                    {offer.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
       
      </div>
    </div>
  )
}

export default OffersSection