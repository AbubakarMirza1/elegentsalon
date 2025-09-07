import { Scissors, Palette, Sparkles, Hand, Eye, Heart, Clock, Star, Award } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Professional cuts, colors, and styling to create your perfect look. Our expert stylists stay up-to-date with the latest trends and techniques.",
    price: "Starting at $80",
    duration: "1-3 hours",
    features: ["Consultation", "Wash & Cut", "Styling", "Product Application"]
  },
  {
    icon: Palette,
    title: "Makeup Artistry",
    description: "Expert makeup application for any occasion, from natural everyday looks to glamorous evening makeup. Perfect for special events and photoshoots.",
    price: "Starting at $120",
    duration: "1-2 hours",
    features: ["Skin Prep", "Color Matching", "Application", "Touch-up Kit"]
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments for healthy, glowing skin. Customized to your skin type and concerns for optimal results.",
    price: "Starting at $95",
    duration: "60-90 minutes",
    features: ["Deep Cleansing", "Exfoliation", "Mask Treatment", "Moisturizing"]
  },
  {
    icon: Hand,
    title: "Nail Care",
    description: "Complete manicure and pedicure services with premium products. Choose from classic polish or gel options for long-lasting results.",
    price: "Starting at $45",
    duration: "45-90 minutes",
    features: ["Nail Shaping", "Cuticle Care", "Polish Application", "Hand/Foot Massage"]
  },
  {
    icon: Eye,
    title: "Eyebrow Shaping",
    description: "Perfect eyebrow shaping and tinting to frame your face beautifully. Includes consultation to find the best shape for your face.",
    price: "Starting at $35",
    duration: "30-45 minutes",
    features: ["Shape Consultation", "Precision Trimming", "Tinting", "Aftercare"]
  },
  {
    icon: Heart,
    title: "Bridal Packages",
    description: "Complete bridal beauty packages for your special day. Includes trial sessions and day-of services for the bride and bridal party.",
    price: "Starting at $300",
    duration: "3-6 hours",
    features: ["Trial Session", "Hair & Makeup", "Touch-up Kit", "Bridal Party Services"]
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty 
            and help you feel confident and radiant.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale border border-border">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      
                      <div className="flex items-center space-x-6 mb-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-secondary" />
                          <span className="font-semibold text-secondary">{service.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{service.duration}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-secondary">What's Included:</h4>
                        <ul className="grid grid-cols-2 gap-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="mt-6 bg-secondary text-secondary-foreground px-6 py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors w-full sm:w-auto">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Why Choose Elegance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service and outstanding results for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Expert Professionals</h3>
              <p className="text-muted-foreground">Our team consists of licensed professionals with years of experience and ongoing training.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-muted-foreground">We use only the highest quality products from trusted brands to ensure the best results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-muted-foreground">Every service is customized to your unique needs, preferences, and lifestyle.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
