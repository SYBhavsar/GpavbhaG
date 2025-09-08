# 🍽️ GPAVBHAG Restaurant Website

A modern React web application for a restaurant featuring menu browsing, location finder, contact forms, and interactive features. Built with React 19, Vite, and Tailwind CSS.

## ✨ Features

### 🏠 **Core Pages**
- **Home Page**: Hero banner, featured menu items, offers section
- **Menu Page**: Complete food menu with categories and detailed item pages
- **Contact Page**: Interactive contact form with validation
- **About Page**: Restaurant information and story
- **Locations Page**: Interactive map with restaurant locations

### 🚀 **Modern React Features**
- **React Router**: Multi-page navigation with lazy loading
- **Context API**: User preferences and global state management
- **Custom Hooks**: Reusable logic for forms, localStorage, weather, and API calls
- **Component Architecture**: Organized feature-based component structure
- **Code Splitting**: Lazy-loaded pages for better performance

### 🎨 **UI/UX**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Weather widget, welcome popup, preference panel
- **Loading States**: Suspense boundaries with custom loading spinners
- **Error Handling**: 404 pages and form validation

### 🧪 **Testing & Quality**
- **Vitest**: Modern testing framework setup
- **React Testing Library**: Component testing utilities
- **ESLint**: Code quality and consistency
- **Custom Fonts**: Baloo 2 and Poppins typography

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1, React Router DOM 7.8.2
- **Build Tool**: Vite 6.3.5 with HMR
- **Styling**: Tailwind CSS 3.4.17, PostCSS, Autoprefixer
- **Maps**: React Leaflet 5.0.0 with Leaflet 1.9.4
- **Testing**: Vitest 3.2.4, Testing Library, jsdom
- **Linting**: ESLint 9.33.0 with React hooks and refresh plugins

## 🚀 Getting Started

### Prerequisites
- Node.js (16+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd react-practice

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint on all files

# Testing
npm test            # Run tests with Vitest
npm run test:ui     # Run tests with Vitest UI
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (Header, Footer, etc.)
│   ├── features/        # Feature-specific components
│   │   ├── banner/      # Hero and promo banners
│   │   ├── contact/     # Contact form components
│   │   ├── menu/        # Menu-related components
│   │   ├── offers/      # Offers and promotions
│   │   ├── popup/       # Modal and popup components
│   │   ├── preferences/ # User preference components
│   │   ├── restaurant/  # Restaurant info components
│   │   └── weather/     # Weather widget
│   └── ui/             # Base UI components (Button, Card, etc.)
├── context/            # React Context providers
├── data/              # Static data and configurations
├── hooks/             # Custom React hooks
├── pages/             # Page components (lazy-loaded)
├── styles/            # CSS files
├── utils/             # Utility functions
└── __tests__/         # Test files
```

## 🧩 Key Components

### **Custom Hooks**
- `useApi`: API data fetching with loading states
- `useForm`: Form handling with validation
- `useLocalStorage`: Persistent local storage management
- `useWeather`: Weather data integration
- `useToggle`: Boolean state management

### **Context Providers**
- `UserPreferencesContext`: Global user preferences and settings

### **Feature Components**
- `MenuCard`: Interactive menu item cards
- `ContactForm`: Validated contact form
- `RestaurantMap`: Interactive location finder
- `WeatherWidget`: Real-time weather display
- `WelcomePopup`: First-visit greeting modal

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

# Run tests with UI
npm run test:ui
```

### Test Structure
- Component tests in `__tests__/` directories
- Custom hook tests alongside hook files
- Setup file: `src/__tests__/setupTests.js`

## 🎨 Styling

### Tailwind CSS Configuration
- Custom color palette for brand consistency
- Responsive breakpoints
- Custom component classes
- PostCSS processing with autoprefixer

### Typography
- **Baloo 2**: Display and heading fonts
- **Poppins**: Body text and UI elements

## 🌍 Features in Detail

### **Navigation**
- Multi-page routing with React Router
- Lazy-loaded pages for performance
- Breadcrumb navigation
- Mobile-responsive menu

### **Menu System**
- Categorized menu items
- Detailed item pages with descriptions
- Search and filtering capabilities
- Featured items highlighting

### **Location Services**
- Interactive map with React Leaflet
- Multiple restaurant locations
- Address and contact information
- Directions integration

### **User Experience**
- Welcome popup for new visitors
- User preference persistence
- Loading states and error boundaries
- Responsive design across devices

## 🔧 Development Notes

### **Performance Optimizations**
- Code splitting with React.lazy()
- Suspense boundaries for loading states
- Optimized bundle size with Vite
- Image optimization and lazy loading

### **Code Quality**
- ESLint configuration for React best practices
- Consistent component structure
- Custom hooks for reusable logic
- TypeScript-ready configuration

## 🚀 Deployment

```bash
# Build for production
npm run build

# The dist/ folder contains the production build
# Deploy the contents of dist/ to your hosting platform
```

### Recommended Hosting
- Vercel (zero-config React deployment)
- Netlify (drag-and-drop deployment)
- GitHub Pages (with build action)



## 📄 License

This project is licensed under the MIT License.


**Built with ❤️ for learning React development**
