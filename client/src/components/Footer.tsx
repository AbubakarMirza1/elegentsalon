import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
              <span className="font-display font-bold text-xl">Elegance</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Transform your beauty with our expert stylists and premium services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors">Hair Styling</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors">Makeup Artistry</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors">Facial Treatments</Link></li>
              <li><Link href="/services" className="hover:text-secondary-foreground transition-colors">Nail Care</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-secondary-foreground transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-secondary-foreground transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-secondary-foreground transition-colors">Book Appointment</Link></li>
              <li><a href="#" className="hover:text-secondary-foreground transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>123 Beauty Street</p>
              <p>New York, NY 10001</p>
              <p>(555) 123-4567</p>
              <p>info@elegancebeauty.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 Elegance Beauty Salon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
