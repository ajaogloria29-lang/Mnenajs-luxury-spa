import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Star, Crown, Droplets, Wind } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      name: "Swedish Massage",
      description: "Relax and unwind with our classic Swedish massage technique for ultimate relaxation.",
    },
    {
      icon: Droplets,
      name: "Deep Tissue Massage",
      description: "Target chronic pain and muscle tension with therapeutic deep tissue massage.",
    },
    {
      icon: Wind,
      name: "Aroma Therapy Massage",
      description: "Harmonize your body and mind with our aromatherapy massage using premium essential oils.",
    },
    {
      icon: Star,
      name: "Hot Stone Massage",
      description: "Experience the healing power of heated stones combined with therapeutic massage.",
    },
    {
      icon: Heart,
      name: "Couple Massage",
      description: "Share a relaxing experience with your partner in our couple massage suite.",
    },
    {
      icon: Sparkles,
      name: "Erotic Massage",
      description: "Intimate and sensual massage experience for adults.",
    },
    {
      icon: Heart,
      name: "N*ru Massage",
      description: "Traditional Japanese body-to-body massage technique.",
    },
    {
      icon: Wind,
      name: "Thai Massage",
      description: "Ancient Thai massage combining stretching and pressure points.",
    },
    {
      icon: Sparkles,
      name: "Lingam Massage",
      description: "Specialized therapeutic massage focusing on energy and relaxation.",
    },
    {
      icon: Heart,
      name: "4 Hands N*ru Massage",
      description: "Luxurious four-handed massage experience.",
    },
    {
      icon: Crown,
      name: "N*ru Plus Massage",
      description: "Enhanced N*ru massage with premium treatment.",
    },
    {
      icon: Droplets,
      name: "Back Massage",
      description: "Focused massage targeting back muscles and tension relief.",
    },
    {
      icon: Heart,
      name: "Shoulder Massage",
      description: "Relieve shoulder tension and stress with targeted massage.",
    },
    {
      icon: Sparkles,
      name: "Pedicure and Manicure",
      description: "Complete nail care for hands and feet with luxury treatment.",
    },
    {
      icon: Star,
      name: "Deep Cleaning Facial",
      description: "Thorough facial treatment for deep cleansing and rejuvenation.",
    },
    {
      icon: Sparkles,
      name: "Mini Facial",
      description: "Quick and refreshing facial treatment for all skin types.",
    },
  ];

  const packages = [
    {
      name: "Wellness Package",
      description: "Perfect for first-time visitors. Includes Swedish massage, signature facial, and aromatherapy session.",
      price: "₦75,000",
      savings: "Save ₦17,000",
    },
    {
      name: "Luxury Retreat",
      description: "Our premium experience. Hot stone therapy, royal gold facial, and full body treatment with refreshments.",
      price: "₦120,000",
      savings: "Save ₦30,000",
    },
    {
      name: "Monthly Membership",
      description: "Unlimited access to basic services plus 20% off all premium treatments. Perfect for regular self-care.",
      price: "₦60,000/month",
      savings: "Best Value",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Premium Services</h1>
            <p className="text-xl text-muted-foreground">
              Discover our range of luxury spa treatments designed to rejuvenate your body, 
              refresh your mind, and restore your natural glow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="gold" size="lg">
                Book Your Treatment Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Save more with our curated spa packages. Perfect for special occasions or regular self-care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-card hover:shadow-gold transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
                      {pkg.savings}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{pkg.name}</h3>
                    <p className="text-muted-foreground mb-6">{pkg.description}</p>
                    <div className="text-4xl font-bold text-accent mb-6">{pkg.price}</div>
                  </div>
                  <Link to="/contact">
                    <Button variant="luxury" className="w-full">
                      Book Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Sure Which Service to Choose?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our professional spa consultants are here to help you select the perfect treatment 
            for your needs. Contact us for personalized recommendations.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Get a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
