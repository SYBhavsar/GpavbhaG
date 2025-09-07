import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import LoadingSpinner from './components/ui/LoadingSpinner'

// Code splitting: Pages load only when needed (lazy loading)
const HomePage = React.lazy(() => import('./pages/HomePage'))
const AboutPage = React.lazy(() => import('./pages/AboutPage'))
const MenuPage = React.lazy(() => import('./pages/MenuPage'))
const MenuItemPage = React.lazy(() => import('./pages/MenuItemPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const LocationsPage = React.lazy(() => import('./pages/LocationsPage'))
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'))
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'))
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'))

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Fixed at top */}
      <Header />
      
      {/* Main content area - Routes will render different pages here */}
      <main className="flex-1 bg-neutral-gray-light">
        {/* Suspense wrapper for lazy-loaded components */}
        <Suspense fallback={
          <div className="flex justify-center items-center h-64">
            <LoadingSpinner message="Loading page..." />
          </div>
        }>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:id" element={<MenuItemPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            {/* Catch-all route for 404 errors - must be last */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      
      {/* Footer - Fixed at bottom */}
      <Footer />
    </div>
  )
}

export default App
