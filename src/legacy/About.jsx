import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Profile from './Profile'

function About() {
  return (
    <div className="max-w-6xl mx-auto">
      
      {/* About Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-charcoal font-heading mb-4">
          About GpavbhaG Restaurant
        </h1>
        <p className="text-xl text-neutral-charcoal font-body max-w-3xl mx-auto mb-8">
          Bringing authentic Mumbai street food flavors to your table since 2010. 
          Our passion for traditional recipes and quality ingredients makes every dish special.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="primary" size="large">
            🛒 Order Now
          </Button>
          <Button variant="outline" size="large">
            📅 Book Table
          </Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-charcoal font-heading mb-6 text-center">
          Our Story
        </h2>
        <div className="bg-white rounded-lg p-8 shadow-md">
          <p className="text-neutral-charcoal font-body leading-relaxed mb-4">
            GpavbhaG started as a small street food stall in Mumbai Central, where our founder 
            Chef Rajesh Kumar served authentic Pav Bhaji to local workers and students. The love 
            and appreciation for our food inspired us to expand and bring the same authentic 
            flavors to more locations across Mumbai.
          </p>
          <p className="text-neutral-charcoal font-body leading-relaxed mb-4">
            Today, we operate 4 outlets across Mumbai, but our commitment to quality and 
            authenticity remains unchanged. Every dish is prepared using traditional recipes 
            passed down through generations, with fresh ingredients sourced daily.
          </p>
          <div className="text-center">
            <Button variant="ghost">
              📖 Read Full Story
            </Button>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-charcoal font-heading mb-6 text-center">
          📍 Visit Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="Mumbai Central"
            address="123 Food Street, Mumbai Central, Mumbai 400001"
            phone="+91 98765 43210"
            hours="11:00 AM - 11:00 PM"
            isPopular={true}
          />
          <Card
            title="Andheri"
            address="456 Market Road, Andheri West, Mumbai 400058"
            phone="+91 98765 43211"
            hours="11:00 AM - 11:00 PM"
          />
          <Card
            title="Bandra"
            address="789 Linking Road, Bandra West, Mumbai 400050"
            phone="+91 98765 43212"
            hours="11:00 AM - 11:00 PM"
          />
          <Card
            title="Juhu"
            address="321 Beach Road, Juhu, Mumbai 400049"
            phone="+91 98765 43213"
            hours="11:00 AM - 11:00 PM"
          />
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-charcoal font-heading mb-6 text-center">
          👨‍🍳 Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Profile
            name="Chef Rajesh Kumar"
            role="Founder & Head Chef"
            image="/chef-placeholder.jpg"
            description="Started GpavbhaG with a dream to serve authentic Mumbai street food. Master of traditional recipes."
            experience="15"
            speciality="Signature Pav Bhaji, Tawa Pulav"
          />
          <Profile
            name="Priya Sharma"
            role="Operations Manager"
            image="/manager-placeholder.jpg"
            description="Ensures consistent quality and service across all outlets. Customer satisfaction is her priority."
            experience="8"
            speciality="Operations, Customer Service"
          />
          <Profile
            name="Arjun Patel"
            role="Sous Chef"
            image="/sous-chef-placeholder.jpg"
            description="Innovative chef who adds modern touches while preserving traditional flavors."
            experience="6"
            speciality="Fusion Dishes, Beverages"
          />
        </div>
      </section>

      {/* Customer Love */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-neutral-charcoal font-heading mb-6 text-center">
          💝 Customer Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Profile
            name="Meera Shah"
            role="Food Blogger @MumbaiEats"
            image="/meera.png"
            description="Best Pav Bhaji in Mumbai! The authentic taste reminds me of my childhood days. The butter melts perfectly with the bhaji. Must visit!"
            rating={5}
            isTestimonial={true}
          />
          <Profile
            name="Rohit Gupta"
            role="Software Engineer"
            image="/customer2-placeholder.jpg"
            description="I've been coming here for 3 years. The Cheese Pav Bhaji is my favorite! Great quality, reasonable prices, friendly staff."
            rating={5}
            isTestimonial={true}
          />
          <Profile
            name="Anjali Desai"
            role="College Student"
            image="/customer3-placeholder.jpg"
            description="Perfect place for students! Delicious food that doesn't break the bank. The Tawa Pulav is amazing!"
            rating={4}
            isTestimonial={true}
          />
          <Profile
            name="Vikram Singh"
            role="Local Resident"
            image="/customer4-placeholder.jpg"
            description="Family-friendly restaurant with authentic taste. My kids love the food here. Highly recommended for families."
            rating={5}
            isTestimonial={true}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-12">
        <div className="bg-primary-light rounded-lg p-8">
          <h2 className="text-2xl font-bold text-neutral-charcoal font-heading mb-4">
            Ready to Experience Authentic Mumbai Flavors?
          </h2>
          <p className="text-neutral-charcoal font-body mb-6">
            Visit any of our outlets or order online for home delivery!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="primary" size="large">
              🍽️ Order Online
            </Button>
            <Button variant="secondary" size="large">
              📍 Find Nearest Outlet
            </Button>
            <Button variant="tertiary" size="large">
              📞 Call Us Now
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About