import { useState } from 'react'
import RestaurantMap from '../components/features/restaurant/RestaurantMap'
import { restaurantLocations } from '../data/locations'
import { Section, Container, SectionTitle, SectionSubtitle, Card, Grid } from '../components/ui/UI'
import { SmartGoBack } from '../components/common/GoBackButton'
import Button from '../components/ui/Button'
import { useUserPreferences } from '../context/UserPreferencesContext'
import { useTranslation } from '../utils/translations'

function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null)
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }
  
  const getDirectionsUrl = (location) => {
    const address = encodeURIComponent(location.address)
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`
  }
  
  return (
    <Section>
      <Container>
        <SmartGoBack />
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <SectionTitle>{t('ourLocations')}</SectionTitle>
          <SectionSubtitle>
            {t('locationsSubtitle')}
          </SectionSubtitle>
        </div>
        
        {/* Interactive Map */}
        <Card className="mb-8 p-0 overflow-hidden">
          <div className="p-4 bg-amber-50 border-b">
            <h3 className="text-lg font-semibold text-neutral-charcoal">
              📍 {t('findOnMap')}
            </h3>
            <p className="text-sm text-neutral-charcoal">
              Click on any location marker for details and directions
            </p>
          </div>
          
          <RestaurantMap
            selectedLocation={selectedLocation?.id}
            onLocationSelect={handleLocationSelect}
            height="500px"
            className="w-full"
          />
        </Card>
        
        {/* Location Cards */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-charcoal mb-6 text-center">
            {t('allLocations')}
          </h3>
          
          <Grid cols="1 md:2 lg:3">
            {restaurantLocations.map((location) => (
              <LocationCard 
                key={location.id}
                location={location}
                isSelected={selectedLocation?.id === location.id}
                onSelect={() => handleLocationSelect(location)}
              />
            ))}
          </Grid>
        </div>
        
        {/* Contact Information */}
        <Card className="text-center">
          <h3 className="text-xl font-bold text-neutral-charcoal mb-4">
            📞 Need Help Finding Us?
          </h3>
          <p className="text-neutral-charcoal mb-4">
            Call any of our locations or use the directions button for GPS navigation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="primary">
              📱 1800-212-2-212
            </Button>
            <Button variant="outline">
              💬 WhatsApp Support
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  )
}

// Individual location card component
function LocationCard({ location, isSelected, onSelect }) {
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  const getDirectionsUrl = (location) => {
    const address = encodeURIComponent(location.address)
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`
  }
  
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'ring-2 ring-primary bg-amber-50' : ''
      }`}
      onClick={onSelect}
    >
      {/* Popular Badge */}
      {location.isPopular && (
        <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
          ⭐ Most Popular
        </div>
      )}
      
      {/* Location Title */}
      <h3 className="text-xl font-bold text-neutral-charcoal font-heading mb-3">
        📍 {location.title}
      </h3>
      
      {/* Address */}
      <div className="mb-3">
        <p className="text-neutral-charcoal text-sm">
          🏢 {location.address}
        </p>
      </div>
      
      {/* Phone */}
      <div className="mb-3">
        <p className="text-neutral-charcoal text-sm">
          📞 {location.phone}
        </p>
      </div>
      
      {/* Hours */}
      <div className="mb-3">
        <p className="text-neutral-charcoal text-sm">
          🕒 {location.hours}
        </p>
      </div>
      
      {/* Description */}
      <p className="text-neutral-charcoal text-sm mb-4">
        {location.description}
      </p>
      
      {/* Amenities */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {location.amenities.slice(0, 2).map((amenity, index) => (
            <span 
              key={index}
              className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
            >
              {amenity}
            </span>
          ))}
          {location.amenities.length > 2 && (
            <span className="text-xs text-neutral-charcoal">
              +{location.amenities.length - 2} more
            </span>
          )}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-2">
        <a
          href={getDirectionsUrl(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="primary" size="small" className="w-full">
            🧭 {t('directions')}
          </Button>
        </a>
        <a
          href={`tel:${location.phone}`}
          className="flex-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Button variant="outline" size="small" className="w-full">
            📞 {t('callNow')}
          </Button>
        </a>
      </div>
    </Card>
  )
}

export default LocationsPage