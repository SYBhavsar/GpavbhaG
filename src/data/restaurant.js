// Restaurant business information and configuration
export const restaurantInfo = {
  name: "GpavbhaG Restaurant",
  tagline: "Authentic Mumbai Pav Bhaji Experience",
  description: "Serving the most authentic and delicious Pav Bhaji in Mumbai since 2020",
  
  // Contact information
  contact: {
    email: "info@gpavbhag.com",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    supportHours: "9:00 AM - 10:00 PM"
  },
  
  // Social media links
  social: {
    facebook: "https://facebook.com/gpavbhag",
    instagram: "https://instagram.com/gpavbhag",
    twitter: "https://twitter.com/gpavbhag",
    zomato: "https://zomato.com/gpavbhag",
    swiggy: "https://swiggy.com/gpavbhag"
  },
  
  // Business hours
  hours: {
    weekdays: "11:00 AM - 11:00 PM",
    weekends: "10:00 AM - 12:00 AM",
    holidays: "10:00 AM - 10:00 PM"
  },
  
  // Features and amenities
  features: [
    'Free WiFi',
    'Air Conditioning', 
    'Home Delivery',
    'Takeaway',
    'Online Ordering',
    'Digital Payments',
    'Family Friendly',
    'Wheelchair Accessible'
  ],
  
  // Available locations list (for dropdowns, etc.)
  availableLocations: [
    'Mumbai Central',
    'Andheri West', 
    'Bandra',
    'Powai',
    'Thane'
  ],

  // App/Site information
  app: {
    version: "V 0.1.0",
    copyright: "© 2025 GpavbhaG PVT. LTD. All Rights Reserved."
  },

  // Social media display info (for footer)
  socialLinks: {
    facebook: { name: "Facebook", url: "#facebook" },
    linkedin: { name: "LinkedIn", url: "#linkedin" },
    instagram: { name: "Instagram", url: "#instagram" },
    twitter: { name: "Twitter", url: "#twitter" },
    youtube: { name: "YouTube", url: "#youtube" }
  }
}

// Quick location data for header popup (simplified)
export const quickLocations = [
  {
    title: "Mumbai Central",
    address: "123 Main Street, Mumbai Central, Mumbai 400008",
    phone: "+91 98765 43210",
    hours: "11:00 AM - 11:00 PM",
    isPopular: true
  },
  {
    title: "Andheri West",
    address: "456 Market Road, Andheri West, Mumbai 400058", 
    phone: "+91 98765 43211",
    hours: "11:00 AM - 11:00 PM"
  }
]

// Testimonials and reviews
export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai Central",
    rating: 5,
    text: "Best Pav Bhaji I've ever had! The butter pav bhaji is absolutely divine.",
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Rahul Mehta", 
    location: "Andheri West",
    rating: 5,
    text: "Authentic taste and great service. The cheese pav bhaji is a must-try!",
    date: "2024-03-20"
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Bandra",
    rating: 4,
    text: "Love the atmosphere and the food quality. Perfect place for family dinner.",
    date: "2024-03-25"
  }
]