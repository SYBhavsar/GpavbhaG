import { Link } from 'react-router-dom'
import { Section, Container, Card } from '../components/ui/UI'
import Button from '../components/ui/Button'

function NotFoundPage() {
  return (
    <Section>
      <Container className="max-w-2xl text-center">
        <Card className="py-12">
          {/* 404 Visual */}
          <div className="text-8xl mb-6">🍽️</div>
          
          {/* Error Message */}
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-neutral-charcoal mb-4">
            Oops! This dish is not on our menu
          </h2>
          
          <p className="text-lg text-neutral-charcoal mb-8">
            Sorry, the page you're looking for doesn't exist. 
            But don't worry, we have plenty of delicious options waiting for you!
          </p>
          
          {/* Navigation Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/">
              <Button variant="primary" className="w-full sm:w-auto">
                🏠 Back to Home
              </Button>
            </Link>
            
            <Link to="/menu">
              <Button variant="outline" className="w-full sm:w-auto">
                🍽️ View Our Menu
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button variant="ghost" className="w-full sm:w-auto">
                📞 Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Fun Restaurant-themed Message */}
          <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              💡 <strong>Did you know?</strong> Our chef recommends trying the 
              <Link to="/menu" className="text-primary hover:underline font-semibold"> Butter Pav Bhaji</Link> - 
              it's our most popular dish!
            </p>
          </div>
          
          {/* Error Details for Development */}
          <details className="mt-6 text-left">
            <summary className="text-sm text-neutral-charcoal cursor-pointer hover:text-primary">
              Technical Details (for developers)
            </summary>
            <div className="mt-2 text-xs text-neutral-charcoal bg-gray-50 p-3 rounded">
              <p><strong>Error:</strong> 404 - Page Not Found</p>
              <p><strong>Requested URL:</strong> {window.location.pathname}</p>
              <p><strong>Available Routes:</strong> /, /about, /menu, /contact</p>
            </div>
          </details>
        </Card>
      </Container>
    </Section>
  )
}

export default NotFoundPage