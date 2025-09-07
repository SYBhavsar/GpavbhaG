import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { restaurantLocations, mapConfig } from '../../../data/locations'
import Button from '../../ui/Button'

// Fix for Leaflet default markers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Custom restaurant icon
const restaurantIcon = L.divIcon({
  html: `<div style="
    background-color: #f59e0b;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    border: 3px solid white;
  ">🍛</div>`,
  className: 'custom-div-icon',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20]
})

function RestaurantMap({ 
  selectedLocation = null,
  onLocationSelect = () => {},
  height = "400px",
  className = ""
}) {
  const [activeMarker, setActiveMarker] = useState(selectedLocation)
  
  const handleMarkerClick = (location) => {
    setActiveMarker(location.id)
    onLocationSelect(location)
  }
  
  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={[mapConfig.defaultCenter.lat, mapConfig.defaultCenter.lng]}
        zoom={mapConfig.defaultZoom}
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        {/* OpenStreetMap tiles - completely free */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Restaurant markers */}
        {restaurantLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={restaurantIcon}
            eventHandlers={{
              click: () => handleMarkerClick(location)
            }}
          >
            <Popup>
              <RestaurantInfoCard location={location} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

// Info card component for map popup
function RestaurantInfoCard({ location }) {
  if (!location) return null
  
  const getDirectionsUrl = (location) => {
    const address = encodeURIComponent(location.address)
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`
  }
  
  return (
    <div className="p-4 max-w-sm">
      {/* Popular badge */}
      {location.isPopular && (
        <div className="inline-block bg-primary text-white px-2 py-1 rounded-full text-xs font-medium mb-2">
          ⭐ Most Popular
        </div>
      )}
      
      {/* Location title */}
      <h3 className="text-lg font-bold text-neutral-charcoal mb-2">
        📍 {location.title}
      </h3>
      
      {/* Address */}
      <p className="text-sm text-neutral-charcoal mb-2">
        🏢 {location.address}
      </p>
      
      {/* Phone */}
      <p className="text-sm text-neutral-charcoal mb-2">
        📞 {location.phone}
      </p>
      
      {/* Hours */}
      <p className="text-sm text-neutral-charcoal mb-3">
        🕒 {location.hours}
      </p>
      
      {/* Description */}
      <p className="text-sm text-neutral-charcoal mb-3">
        {location.description}
      </p>
      
      {/* Action buttons */}
      <div className="flex space-x-2">
        <a
          href={getDirectionsUrl(location)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button variant="primary" size="small" className="w-full text-xs">
            🧭 Directions
          </Button>
        </a>
        <a
          href={`tel:${location.phone}`}
          className="flex-1"
        >
          <Button variant="outline" size="small" className="w-full text-xs">
            📞 Call
          </Button>
        </a>
      </div>
    </div>
  )
}

export default RestaurantMap