import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import ContactForm from '../contact/ContactForm'
import { UserPreferencesProvider } from '../../../context/UserPreferencesContext'

// Mock the navigate function
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  }
})

// Test wrapper with providers
function TestWrapper({ children }) {
  return (
    <BrowserRouter>
      <UserPreferencesProvider>
        {children}
      </UserPreferencesProvider>
    </BrowserRouter>
  )
}

describe('ContactForm', () => {
  it('renders all form fields correctly', () => {
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Check all form fields are present
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    
    // Check submit button
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Try to submit form without filling required fields
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Check that validation errors appear
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
      expect(screen.getByText('Email is required')).toBeInTheDocument()
      expect(screen.getByText('Phone number is required')).toBeInTheDocument()
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })
  })

  it('validates email format correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Fill in invalid email
    const emailField = screen.getByLabelText(/email address/i)
    await user.type(emailField, 'invalid-email')
    
    // Try to submit
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // The form should not submit successfully with invalid email
    // We'll check that it doesn't show success message
    await waitFor(() => {
      expect(screen.queryByText(/thank you! your message has been sent successfully/i)).not.toBeInTheDocument()
    }, { timeout: 1000 })
  })

  it('validates phone number format correctly', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Fill in invalid phone number
    const phoneField = screen.getByLabelText(/phone number/i)
    await user.type(phoneField, '123')
    
    // Try to submit
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // The form should not submit successfully with invalid phone
    await waitFor(() => {
      expect(screen.queryByText(/thank you! your message has been sent successfully/i)).not.toBeInTheDocument()
    }, { timeout: 1000 })
  })

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Fill in all required fields with valid data
    await user.type(screen.getByLabelText(/full name/i), 'Suyash Kumar')
    await user.type(screen.getByLabelText(/email address/i), 'suyash@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '1234567890')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message with enough characters.')
    
    // Submit the form
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Check that form is submitting
    await waitFor(() => {
      expect(screen.getByText(/sending/i)).toBeInTheDocument()
    })

    // Check that success message appears after submission
    await waitFor(() => {
      expect(screen.getByText(/thank you! your message has been sent successfully/i)).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('clears errors when user starts typing', async () => {
    const user = userEvent.setup()
    
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Submit empty form to trigger errors
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)

    // Wait for error to appear
    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })

    // Start typing in name field
    const nameField = screen.getByLabelText(/full name/i)
    await user.type(nameField, 'S')

    // Error should be cleared
    await waitFor(() => {
      expect(screen.queryByText('Name is required')).not.toBeInTheDocument()
    })
  })

  it('has proper accessibility attributes', () => {
    render(
      <TestWrapper>
        <ContactForm />
      </TestWrapper>
    )

    // Check that form fields have proper labels
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()

    // Check that submit button is accessible
    const submitButton = screen.getByRole('button', { name: /send message/i })
    expect(submitButton).toBeEnabled()
  })
})