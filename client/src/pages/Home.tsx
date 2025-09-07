import HeroSection from "@/components/HeroSection";
import { Scissors, Palette, Sparkles, Hand, Eye, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Professional cuts, colors, and styling to create your perfect look.",
    price: "Starting at $80"
  },
  {
    icon: Palette,
    title: "Makeup Artistry",
    description: "Expert makeup application for any occasion, from natural to glamorous.",
    price: "Starting at $120"
  },
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Rejuvenating facial treatments for healthy, glowing skin.",
    price: "Starting at $95"
  },
  {
    icon: Hand,
    title: "Nail Care",
    description: "Complete manicure and pedicure services with premium products.",
    price: "Starting at $45"
  },
  {
    icon: Eye,
    title: "Eyebrow Shaping",
    description: "Perfect eyebrow shaping and tinting to frame your face beautifully.",
    price: "Starting at $35"
  },
  {
    icon: Heart,
    title: "Bridal Packages",
    description: "Complete bridal beauty packages for your special day.",
    price: "Starting at $300"
  }
];

const testimonials = [
  {
    text: "Absolutely amazing experience! The team at Elegance transformed my look completely. I felt like a completely new person walking out of there.",
    name: "Sarah Johnson",
    role: "Regular Client"
  },
  {
    text: "The bridal package was perfect for my wedding day. Professional, attentive, and the results were absolutely stunning. Highly recommend!",
    name: "Emily Chen",
    role: "Bride"
  },
  {
    text: "Best salon experience I've ever had. The staff is incredibly talented and the atmosphere is so relaxing. I always leave feeling beautiful and refreshed.",
    name: "Maria Rodriguez",
    role: "VIP Client"
  }
];

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our comprehensive beauty services designed to enhance your natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover-scale">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-secondary font-semibold">{service.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">About Elegance</h2>
              <p className="text-muted-foreground text-lg mb-6">
                With over 15 years of experience in the beauty industry, Elegance Beauty Salon has been transforming 
                lives through exceptional beauty services. Our team of skilled professionals is dedicated to helping 
                you look and feel your absolute best.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury beauty salon interior with modern styling stations and elegant décor" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Read about the amazing experiences our clients have had at Elegance Beauty Salon
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-semibold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
