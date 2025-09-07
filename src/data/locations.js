// Restaurant location data
export const restaurantLocations = [
  {
    id: 1,
    title: "Mumbai Central",
    address: "123 Food Street, Mumbai Central, Mumbai 400001",
    phone: "+91 98765 43210",
    hours: "11:00 AM - 11:00 PM",
    isPopular: true,
    coordinates: {
      lat: 18.9697, // Mumbai Central coordinates
      lng: 72.8206
    },
    description: "Our flagship location with the original pav bhaji recipe",
    amenities: ["Parking Available", "AC Seating", "Takeaway", "Online Ordering"],
    image: null
  },
  {
    id: 2,
    title: "Andheri West",
    address: "456 Market Road, Andheri West, Mumbai 400058",
    phone: "+91 98765 43211",
    hours: "11:00 AM - 11:00 PM",
    isPopular: false,
    coordinates: {
      lat: 19.1368, // Andheri West coordinates
      lng: 72.8297
    },
    description: "Modern location with extended menu and family seating",
    amenities: ["Family Seating", "Kids Play Area", "Parking", "Home Delivery"],
    image: null
  },
  {
    id: 3,
    title: "Bandra",
    address: "789 Hill Road, Bandra West, Mumbai 400050", 
    phone: "+91 98765 43212",
    hours: "11:00 AM - 12:00 AM",
    isPopular: true,
    coordinates: {
      lat: 19.0544, // Bandra coordinates
      lng: 72.8194
    },
    description: "Trendy location popular with young crowd and celebrities",
    amenities: ["Late Night", "Valet Parking", "Live Music", "Rooftop Seating"],
    image: null
  }
]

// Center point for map (Mumbai city center)
export const mumbaiCenter = {
  lat: 19.0760,
  lng: 72.8777
}

// Map configuration
export const mapConfig = {
  defaultZoom: 11,
  defaultCenter: mumbaiCenter,
  styles: [
    // Custom map styling (optional)
    {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{ visibility: "off" }]
    }
  ]
}