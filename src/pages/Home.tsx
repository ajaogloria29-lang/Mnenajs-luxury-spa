import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Star, Award } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import massageImage from "@/assets/massage-therapy.jpg";
import wellnessImage from "@/assets/wellness-setup.jpg";

const Home = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Luxury Facials",
      description: "Rejuvenate your skin with our signature facial treatments using premium skincare products.",
      image: facialImage,
    },
    {
      icon: Heart,
      title: "Body Massage",
      description: "Experience deep relaxation with our professional massage therapy sessions tailored to your needs.",
      image: massageImage,
    },
    {
      icon: Star,
      title: "Wellness Treatments",
      description: "Holistic spa treatments designed to restore balance and promote overall wellbeing.",
      image: wellnessImage,
    },
  ];

  const testimonials = [
    {
      name: "Chioma Adebayo",
      text: "The best spa experience I've ever had! The therapists are so professional and the atmosphere is absolutely divine.",
      rating: 5,
    },
    {
      name: "Fatima Mohammed",
      text: "I visit Mnenaja's every month for my facial treatment. My skin has never looked better. Highly recommend!",
      rating: 5,
    },
    {
      name: "Ngozi Okafor",
      text: "Pure luxury from start to finish. The massage therapy here is exceptional. I always leave feeling completely refreshed.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background/90" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Glow from Within
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Rejuvenate Your Body and Mind at Mnenaja's Luxury Spa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="lg" className="text-lg px-8">
                Book Your Session Today
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-background/90 hover:bg-background">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Signature Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Experience the finest luxury spa treatments in Lagos, Nigeria. Each service is crafted to deliver pure relaxation and beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-gold transition-all duration-300 group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to="/services">
                    <Button variant="link" className="p-0 h-auto">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Mnenaja's?</h2>
            <p className="text-muted-foreground text-lg">
              The best spa in Lagos, trusted by hundreds of satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5+ Years Experience</h3>
              <p className="text-muted-foreground">Trusted expertise in luxury spa treatments</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Products</h3>
              <p className="text-muted-foreground">Only the finest skincare and wellness products</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Therapists</h3>
              <p className="text-muted-foreground">Certified and experienced spa professionals</p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Experience</h3>
              <p className="text-muted-foreground">Elegant ambiance for complete relaxation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from our valued clients in Lagos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card hover:shadow-soft transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/testimonials">
              <Button variant="outline">Read More Reviews</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Pure Relaxation?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your appointment today and discover why we're the best spa in Lagos, Nigeria. 
            Let our professional therapists take care of your body and mind.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg" className="text-lg px-8">
              Reserve Your Appointment Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
