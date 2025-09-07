// Menu items data for GpavbhaG Restaurant

// Default image for all menu items (can be customized later)
const DEFAULT_MENU_IMAGE = "/favicon.png"

export const menuItems = [
  // Main Pav Bhaji Variants
  {
    id: 1,
    nameKey: 'menuItems.classicPavBhaji',
    description: "Traditional Mumbai street food with mixed vegetables, served with buttered pav bread",
    detailedDescription: "Authentic Mumbai street food! Our Classic Pav Bhaji features spiced mashed vegetables served with toasted buttered pav buns.",
    price: 120,
    image: '/classicpavbhaji.png',
    isSpecial: false,
    category: 'main',
    allergens: ['gluten'],
    isVegetarian: true,
    calories: 450
  },
  {
    id: 2,
    nameKey: 'menuItems.butterPavBhaji',
    description: "Classic pav bhaji topped with extra butter for indulgence",
    detailedDescription: "A rich, creamy version of our Classic Pav Bhaji topped with extra butter for a luxurious taste.",
    price: 140,
    image: '/butterpavbhaji.webp',
    isSpecial: true,
    category: 'main',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 520
  },
  {
    id: 3,
    nameKey: 'menuItems.cheesePavBhaji',
    description: "Loaded with melted cheese on top of our signature pav bhaji",
    detailedDescription: "Cheese Pav Bhaji is topped with generous mozzarella cheese that melts over the spiced bhaji, creating a gooey, indulgent treat.",
    price: 160,
    image: '/cheesepavbhaji.png',
    isSpecial: true,
    category: 'main',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 580
  },
  {
    id: 4,
    nameKey: 'menuItems.specialPaneerPavBhaji',
    description: "Our signature dish with chunks of paneer and extra vegetables",
    detailedDescription: "Special Paneer Pav Bhaji features pan-fried cubes of paneer with extra vegetables in our classic bhaji.",
    price: 180,
    image: 'paneerpavbhaji.png',
    isSpecial: true,
    category: 'main',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 650
  },
  {
    id: 5,
    nameKey: 'menuItems.jainPavBhaji',
    description: "Classic pav bhaji prepared Jain style (no onion & garlic)",
    detailedDescription: "Jain Pav Bhaji skips onion and garlic but keeps bold, authentic flavors intact.",
    price: 140,
    image: '/classicpavbhaji.png',
    isSpecial: false,
    category: 'main',
    allergens: ['gluten'],
    isVegetarian: true,
    calories: 440
  },
  {
    id: 6,
    nameKey: 'menuItems.masalaPav',
    description: "Pav cooked with a special masala spread",
    detailedDescription: "Masala Pav is toasted pav generously coated with a spicy, buttery masala mix, perfect as a starter or snack.",
    price: 50,
    image: '/masalapav.png',
    isSpecial: false,
    category: 'main',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 220
  },
  {
    id: 7,
    nameKey: 'menuItems.wheatPavBhaji',
    description: "Healthy pav bhaji made with whole wheat pav",
    detailedDescription: "Whole Wheat Pav Bhaji made with high-fiber pav buns and our signature spiced bhaji, ideal for health-conscious customers.",
    price: 150,
    image: '/wheetpavbhaji.png',
    isSpecial: false,
    category: 'main',
    allergens: ['gluten'],
    isVegetarian: true,
    calories: 430
  },
  {
    id: 8,
    nameKey: 'menuItems.spicyPavBhaji',
    description: "Extra spicy pav bhaji for heat lovers",
    detailedDescription: "Spicy Pav Bhaji with added chili and special spices for those who love fiery flavors.",
    price: 150,
    image: '/spicypavbhaji.png',
    isSpecial: false,
    category: 'main',
    allergens: ['gluten'],
    isVegetarian: true,
    calories: 480
  },

  // Fusion Pav Bhaji Variants
  {
    id: 9,
    nameKey: 'menuItems.pavBhajiPizza',
    description: "Fusion of pav bhaji and pizza topped with cheese and herbs",
    detailedDescription: "Pav Bhaji Pizza combines the classic bhaji spread on a pizza base, topped with mozzarella, tomatoes, and herbs for a cheesy street food twist.",
    price: 220,
    image: '/cheesepizza.png',
    isSpecial: true,
    category: 'fusion',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 600
  },
  {
    id: 10,
    nameKey: 'menuItems.cheesePavBhajiPizza',
    description: "Cheesy pav bhaji pizza loaded with extra cheese",
    detailedDescription: "Cheese Pav Bhaji Pizza features a rich layer of cheese on top of our pav bhaji pizza base, perfect for cheese lovers.",
    price: 250,
    image: '/pizza.png',
    isSpecial: false,
    category: 'fusion',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 650
  },
  {
    id: 11,
    nameKey: 'menuItems.schezuanPavBhaji',
    description: "Indo-Chinese style pav bhaji with schezuan sauce",
    detailedDescription: "Schezwan Pav Bhaji adds a fiery Indo-Chinese twist to classic pav bhaji with schezuan sauce and extra veggies.",
    price: 180,
    image: '/schezwanpavbhaji.png',
    isSpecial: false,
    category: 'fusion',
    allergens: ['gluten'],
    isVegetarian: true,
    calories: 500
  },
  {
    id: 12,
    nameKey: 'menuItems.mexicanPavBhaji',
    description: "Pav bhaji with Mexican flavors like jalapeno, corn & cheese",
    detailedDescription: "Mexican Pav Bhaji is loaded with corn, jalapenos, bell peppers, and topped with melted cheese for a fun, fusion street food experience.",
    price: 200,
    image: '/mexicanpavbhaji.png',
    isSpecial: false,
    category: 'fusion',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 550
  },

  // Sides
  {
    id: 15,
    nameKey: 'menuItems.masalaButterRoti',
    description: "Indian flatbread with masala butter, a great alternative to pav",
    detailedDescription: "Soft rotis slathered with spiced butter to scoop up bhaji. Adds a rustic flavor twist.",
    price: 35,
    image: '/roti.webp',
    isSpecial: false,
    category: 'sides',
    allergens: ['gluten', 'dairy'],
    isVegetarian: true,
    calories: 200
  },

  // Beverages
  {
    id: 16,
    nameKey: 'menuItems.masalaChai',
    description: "Authentic Indian spiced tea, perfectly brewed with aromatic spices",
    detailedDescription: "Premium Assam tea brewed with spices, milk, and sugar for the perfect masala chai experience.",
    price: 25,
    image: '/chai.jpg',
    isSpecial: false,
    category: 'beverages',
    allergens: ['dairy'],
    isVegetarian: true,
    calories: 80
  },
  {
    id: 17,
    nameKey: 'menuItems.freshLimeSoda',
    description: "Refreshing lime soda with a hint of mint, perfect with spicy pav bhaji",
    detailedDescription: "Fresh lime soda made with hand-squeezed limes, soda, black salt, and mint leaves.",
    price: 35,
    image: '/limesoda.png',
    isSpecial: false,
    category: 'beverages',
    allergens: [],
    isVegetarian: true,
    calories: 95
  },
  {
    id: 18,
    nameKey: 'menuItems.sweetLassi',
    description: "Traditional Indian yogurt drink, sweet and refreshing",
    detailedDescription: "Creamy yogurt blended with a touch of sugar and cardamom, served chilled.",
    price: 40,
    image: 'lassi.jpg',
    isSpecial: false,
    category: 'beverages',
    allergens: ['dairy'],
    isVegetarian: true,
    calories: 150
  },

  // Desserts
  {
    id: 19,
    nameKey: 'menuItems.gulabJamun',
    description: "Soft, spongy milk dumplings soaked in rose-flavored syrup",
    detailedDescription: "A classic Indian dessert that's sweet, indulgent, and perfect after a hearty meal of pav bhaji.",
    price: 50,
    image: '/jamun.png',
    isSpecial: false,
    category: 'desserts',
    allergens: ['dairy', 'gluten'],
    isVegetarian: true,
    calories: 200
  },
  {
    id: 20,
    nameKey: 'menuItems.rasMalai',
    description: "Soft paneer patties soaked in sweet, creamy saffron-flavored milk",
    detailedDescription: "Light, fragrant, and decadent, our Ras Malai is a perfect way to end your Mumbai street food feast.",
    price: 60,
    image: '/rasmalai.png',
    isSpecial: true,
    category: 'desserts',
    allergens: ['dairy'],
    isVegetarian: true,
    calories: 220
  }
];


// Menu categories
export const menuCategories = [
  { id: 'all', nameKey: 'categories.all' },
  { id: 'main', nameKey: 'categories.main' },
  { id: 'beverages', nameKey: 'categories.beverages' },
  { id: 'specials', nameKey: 'categories.specials' }
]

// Separate exports for different use cases
export const specialMenuItems = menuItems.filter(item => item.isSpecial)
export const completeMenu = menuItems

// Helper functions
export const getMenuItemsByCategory = (category) => {
  if (category === 'all') return menuItems
  if (category === 'specials') return menuItems.filter(item => item.isSpecial)
  return menuItems.filter(item => item.category === category)
}