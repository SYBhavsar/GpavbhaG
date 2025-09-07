import Button from './Button'

function Card({ title, address, phone, hours, isPopular }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border">
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="inline-block bg-primary text-neutral-white px-3 py-1 rounded-full text-sm font-medium mb-4">
          ⭐ Most Popular
        </div>
      )}
      
      {/* Location Title */}
      <h3 className="text-xl font-bold text-neutral-charcoal font-heading mb-3">
        📍 {title}
      </h3>
      
      {/* Address */}
      <div className="mb-3">
        <p className="text-neutral-charcoal text-sm font-body">
          🏢 {address}
        </p>
      </div>
      
      {/* Phone */}
      <div className="mb-3">
        <p className="text-neutral-charcoal text-sm font-body">
          📞 {phone}
        </p>
      </div>
      
      {/* Hours */}
      <div className="mb-4">
        <p className="text-neutral-charcoal text-sm font-body">
          🕒 {hours}
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Button variant="ghost" size="small" className="flex-1">
          📍 Get Directions
        </Button>
        <Button variant="outline" size="small" className="flex-1">
          📞 Call Now
        </Button>
      </div>
    </div>
  )
}

export default Card