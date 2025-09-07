import Button from '../components/ui/Button'

function Profile({ 
  name, 
  role, 
  image, 
  description, 
  experience, 
  speciality,
  rating,
  isTestimonial = false 
}) {
  
  if (isTestimonial) {
    // Customer testimonial layout
    return (
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
        <div className="flex items-start space-x-4">
          <img 
            src={image || '/default-avatar.png'} 
            alt={name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-neutral-charcoal font-heading">
                {name}
              </h3>
              <div className="flex text-secondary">
                {[...Array(rating || 5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-neutral-charcoal text-sm font-body mb-3">
              "{description}"
            </p>
            <p className="text-xs text-neutral-charcoal font-body">
              {role || 'Verified Customer'}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Staff profile layout
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      
      {/* Profile Image */}
      <div className="relative">
        <img 
          src={image || '/default-chef.png'} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {experience && (
          <div className="absolute top-4 right-4 bg-primary text-neutral-white px-3 py-1 rounded-full text-sm font-medium">
            {experience} years
          </div>
        )}
      </div>
      
      {/* Profile Content */}
      <div className="p-6">
        
        {/* Name and Role */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-neutral-charcoal font-heading mb-1">
            {name}
          </h3>
          <p className="text-secondary font-medium font-body">
            {role}
          </p>
        </div>
        
        {/* Speciality */}
        {speciality && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-neutral-charcoal mb-2">
              🍳 Speciality:
            </h4>
            <p className="text-neutral-charcoal text-sm font-body">
              {speciality}
            </p>
          </div>
        )}
        
        {/* Description */}
        {description && (
          <div className="mb-4">
            <p className="text-neutral-charcoal text-sm font-body leading-relaxed">
              {description}
            </p>
          </div>
        )}
        
        {/* Action Button */}
        <div className="text-center">
          <Button variant="outline" size="small">
            View Profile
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Profile