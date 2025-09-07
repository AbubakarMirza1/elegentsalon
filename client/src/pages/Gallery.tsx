import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Beautiful woman with professional makeup and sleek hairstyle transformation",
    category: "Hair & Makeup"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Elegant portrait showcasing bridal makeup artistry and sophisticated styling",
    category: "Bridal Makeup"
  },
  {
    url: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Professional hair cutting and styling tools arranged artistically",
    category: "Hair Styling"
  },
  {
    url: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Glamorous model with dramatic evening makeup and professional hair styling",
    category: "Evening Look"
  },
  {
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Professional manicure tools and nail art supplies arranged elegantly",
    category: "Nail Art"
  },
  {
    url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Sophisticated woman showcasing perfect eyebrow shaping and facial treatments",
    category: "Eyebrow Shaping"
  },
  {
    url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Professional salon styling showcasing color transformation",
    category: "Color Treatment"
  },
  {
    url: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Beautiful model with professional hairstyling and makeup",
    category: "Hair & Makeup"
  },
  {
    url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    alt: "Elegant facial treatment and skincare results",
    category: "Facial Treatment"
  }
];

const categories = ["All", "Hair & Makeup", "Bridal Makeup", "Hair Styling", "Evening Look", "Nail Art", "Eyebrow Shaping", "Color Treatment", "Facial Treatment"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-secondary mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Browse through our stunning transformations and see the artistry of our expert team. 
            Each image tells a story of beauty, confidence, and transformation.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-2xl hover-scale cursor-pointer"
                onClick={() => openLightbox(index)}
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🔍</span>
                    </div>
                    <p className="font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            data-testid="lightbox-close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            data-testid="lightbox-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            data-testid="lightbox-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="max-w-4xl max-h-full">
            <img
              src={filteredImages[lightboxImage].url}
              alt={filteredImages[lightboxImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filteredImages[lightboxImage].category}</p>
              <p className="text-white/70 text-sm mt-1">{lightboxImage + 1} of {filteredImages.length}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-light-pink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book your appointment today and let our expert team create a stunning look that's perfectly tailored to you.
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors text-lg">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
