import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import MenuCard from './MenuCard'
import { UserPreferencesProvider } from '../../../context/UserPreferencesContext'

// Mock test data
const mockMenuItem = {
  name: "Classic Pav Bhaji",
  description: "Traditional Mumbai street food with mixed vegetables",
  price: 120,
  image: null,
  isSpecial: false
}

const mockSpecialItem = {
  name: "Butter Pav Bhaji", 
  description: "Our classic pav bhaji topped with extra butter",
  price: 140,
  image: null,
  isSpecial: true
}

// Test wrapper component with necessary providers
function TestWrapper({ children }) {
  return (
    <BrowserRouter>
      <UserPreferencesProvider>
        {children}
      </UserPreferencesProvider>
    </BrowserRouter>
  )
}

describe('MenuCard', () => {
  it('renders menu item details correctly', () => {
    render(
      <TestWrapper>
        <MenuCard {...mockMenuItem} />
      </TestWrapper>
    )

    // Test that item name is displayed
    expect(screen.getByText('Classic Pav Bhaji')).toBeInTheDocument()
    
    // Test that description is displayed
    expect(screen.getByText('Traditional Mumbai street food with mixed vegetables')).toBeInTheDocument()
    
    // Test that price is displayed with rupee symbol
    expect(screen.getByText('₹120')).toBeInTheDocument()
    
    // Test that Add to Cart button is present
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument()
  })

  it('displays special badge for special items', () => {
    render(
      <TestWrapper>
        <MenuCard {...mockSpecialItem} />
      </TestWrapper>
    )

    // Test that special badge is displayed
    expect(screen.getByText(/chef's special/i)).toBeInTheDocument()
  })

  it('does not display special badge for regular items', () => {
    render(
      <TestWrapper>
        <MenuCard {...mockMenuItem} />
      </TestWrapper>
    )

    // Test that special badge is NOT displayed
    expect(screen.queryByText(/chef's special/i)).not.toBeInTheDocument()
  })

  it('displays correct emoji for pav bhaji items', () => {
    render(
      <TestWrapper>
        <MenuCard {...mockMenuItem} />
      </TestWrapper>
    )

    // Test that pav bhaji emoji is displayed (🍛)
    expect(screen.getByText('🍛')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <MenuCard {...mockMenuItem} />
      </TestWrapper>
    )

    // Test that button has proper accessibility
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    expect(addToCartButton).toBeInTheDocument()
    expect(addToCartButton).toBeEnabled()
  })
})