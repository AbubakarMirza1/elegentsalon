import { Award, Users, Clock, Heart, Star, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Isabella Martinez",
    role: "Master Stylist & Owner",
    experience: "15+ years",
    specialties: ["Hair Color", "Bridal Styling", "Keratin Treatments"]
  },
  {
    name: "Sophie Chen",
    role: "Senior Makeup Artist",
    experience: "12+ years",
    specialties: ["Bridal Makeup", "Editorial", "Special Effects"]
  },
  {
    name: "Emma Thompson",
    role: "Hair Stylist",
    experience: "8+ years",
    specialties: ["Cutting", "Balayage", "Extensions"]
  },
  {
    name: "Maria Rodriguez",
    role: "Esthetician",
    experience: "10+ years",
    specialties: ["Anti-Aging", "Acne Treatment", "Chemical Peels"]
  }
];

const values = [
  {
    icon: Heart,
    title: "Passion for Beauty",
    description: "We're passionate about helping our clients discover and enhance their natural beauty through expert techniques and personalized service."
  },
  {
    icon: Star,
    title: "Excellence in Service",
    description: "We maintain the highest standards in everything we do, from our techniques to our customer service and salon environment."
  },
  {
    icon: Users,
    title: "Client-Centered Approach",
    description: "Every client is unique, and we take the time to understand your individual needs, preferences, and lifestyle."
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "We stay current with the latest trends, techniques, and products to offer our clients the most advanced beauty services."
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary mb-6">
                About Elegance
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                With over 15 years of experience in the beauty industry, Elegance Beauty Salon has been 
                transforming lives through exceptional beauty services.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team of skilled professionals is dedicated to helping you look and feel your absolute best, 
                using the latest techniques and premium products to deliver outstanding results.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury beauty salon interior with modern styling stations and elegant décor" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">6</div>
              <div className="text-muted-foreground font-medium">Expert Stylists</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">20+</div>
              <div className="text-muted-foreground font-medium">Services Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Elegance Beauty Salon was founded in 2009 with a simple yet powerful vision: to create a space 
                where beauty, artistry, and exceptional service come together to transform not just how our clients look, 
                but how they feel about themselves.
              </p>
              <p>
                What started as a small neighborhood salon has grown into one of the city's most trusted beauty destinations. 
                Our success comes from our unwavering commitment to excellence, our passion for the latest beauty innovations, 
                and most importantly, our dedication to each and every client who walks through our doors.
              </p>
              <p>
                Today, we continue to evolve and expand our services while maintaining the personal touch and attention 
                to detail that has made us who we are. Every day, we're honored to be part of our clients' beauty journeys 
                and special moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the experience we create for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our talented team of beauty professionals brings years of experience and passion to every service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-secondary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{member.experience}</span>
                </div>
                <div className="space-y-1">
                  {member.specialties.map((specialty, idx) => (
                    <div key={idx} className="text-xs bg-secondary/5 text-secondary px-2 py-1 rounded-full inline-block mr-1">
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
