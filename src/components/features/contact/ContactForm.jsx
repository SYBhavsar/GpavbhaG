import { useNavigate } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import Button from '../../ui/Button'
import { useUserPreferences } from '../../../context/UserPreferencesContext'
import { useTranslation } from '../../../utils/translations'
import { 
  Section, 
  SectionTitle, 
  SectionSubtitle, 
  Container, 
  Card,
  FormField,
  FormLabel,
  FormInput,
  FormTextarea,
  ErrorText,
  SuccessAlert 
} from '../../ui/UI'

function ContactForm() {
  const navigate = useNavigate()
  
  // Get user preferences and translation function
  const { preferences } = useUserPreferences()
  const { t } = useTranslation(preferences.language)
  
  // Use our custom useForm hook instead of manual state management
  const {
    values: formData,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange: handleInputChange,
    handleSubmit,
    setIsSubmitted
  } = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    },
    validation: {
      name: { 
        required: 'Name is required' 
      },
      email: { 
        required: 'Email is required',
        pattern: /\S+@\S+\.\S+/,
        patternMessage: 'email format is invalid'
      },
      phone: { 
        required: 'Phone number is required',
        pattern: /^\d{10}$/,
        patternMessage: 'phone format is invalid'
      },
      message: { 
        required: 'Message is required',
        minLength: 10,
        patternMessage: 'Message must be at least 10 characters'
      }
    },
    onSubmit: async (values) => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate successful submission
      return true
    }
  })
  
  // Handle successful form submission
  const handleFormSubmit = async (event) => {
    const success = await handleSubmit(event)
    
    if (success) {
      // Hide success message after 3 seconds, then redirect to home
      setTimeout(() => {
        setIsSubmitted(false)
        navigate('/', { 
          state: { 
            message: 'Thank you for contacting us! We\'ll get back to you soon.' 
          }
        })
      }, 3000)
    }
  }
  
  return (
    <Section>
      <Container className="max-w-2xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <SectionTitle>{t('contactUs')}</SectionTitle>
          <SectionSubtitle>
            {t('contactSubtitle')}
          </SectionSubtitle>
        </div>
        
        {/* Success Message */}
        {isSubmitted && (
          <SuccessAlert className="mb-6">
            🎉 Thank you! Your message has been sent successfully. We'll get back to you soon!
          </SuccessAlert>
        )}
        
        {/* Contact Form */}
        <Card>
          <form onSubmit={handleFormSubmit}>
            
            {/* Name Field */}
            <FormField>
              <FormLabel htmlFor="name">
                {t('fullName')} *
              </FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                error={errors.name}
                placeholder="Enter your full name"
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </FormField>
          
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-neutral-charcoal mb-2">
              {t('emailAddress')} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.email ? 'border-red-500' : 'border-neutral-gray-light'
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-charcoal mb-2">
              {t('phoneNumber')} *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.phone ? 'border-red-500' : 'border-neutral-gray-light'
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
          
          {/* Subject Dropdown */}
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-neutral-charcoal mb-2">
              {t('subject')}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-neutral-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="complaint">Complaint</option>
              <option value="catering">Catering Request</option>
              <option value="franchise">Franchise Opportunity</option>
            </select>
          </div>
          
          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-neutral-charcoal mb-2">
              {t('message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="5"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                errors.message ? 'border-red-500' : 'border-neutral-gray-light'
              }`}
              placeholder="Tell us how we can help you..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>
          
          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? `📤 ${t('sending')}` : `📧 ${t('sendMessage')}`}
          </Button>
          
          </form>
        </Card>
      </Container>
    </Section>
  )
}

export default ContactForm