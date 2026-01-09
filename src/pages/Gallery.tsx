import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import wellnessImage from "@/assets/wellness-setup.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, alt: "Luxury spa treatment room with massage table and candles", category: "Facilities" },
    { src: facialImage, alt: "Professional facial treatment in progress", category: "Treatments" },
    { src: massageImage, alt: "Relaxing body massage therapy session", category: "Treatments" },
    { src: wellnessImage, alt: "Premium spa products and hot stones", category: "Products" },
    { src: gallery1, alt: "Elegant spa reception area", category: "Facilities" },
    { src: gallery2, alt: "Serene treatment room setup", category: "Facilities" },
    { src: gallery3, alt: "Luxury spa product collection", category: "Products" },
    { src: gallery4, alt: "Comfortable relaxation lounge", category: "Facilities" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Take a virtual tour of MJT Luxury Spa. Experience the elegance, 
              tranquility, and attention to detail that makes us Lagos' premier spa destination.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer group hover:shadow-gold transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-primary-foreground">
                      <p className="text-sm font-medium">{image.category}</p>
                      <p className="text-xs opacity-90">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience It For Yourself
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Pictures can only capture so much. Visit MJT Luxury Spa and discover 
            the true meaning of relaxation and rejuvenation in Lagos, Nigeria.
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="/contact">Book Your Visit Today</a>
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
