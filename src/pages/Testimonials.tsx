import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "CWN",
      location: "Lagos, Nigeria",
      service: "Spa Treatment",
      rating: 5,
      text: "very nice place, Joy is so kind and good at what she does, highly recommended",
      date: "April 2025",
    },
    {
      name: "Chioma Adebayo",
      location: "Lagos, Nigeria",
      service: "Signature Facial Treatment",
      rating: 5,
      text: "Absolutely incredible experience! From the moment I walked in, I felt welcomed and pampered. The facial treatment was divine - my skin has never looked or felt better. The therapist was so knowledgeable and professional. I've tried many spas in Lagos, but MJT is truly in a league of its own.",
      date: "March 2025",
    },
    {
      name: "Fatima Mohammed",
      location: "Victoria Island, Lagos",
      service: "Swedish Massage",
      rating: 5,
      text: "I visit MJT every month for my regular massage therapy, and each time I leave feeling completely renewed. The therapists here really understand body mechanics and know exactly where to focus. The ambiance is so peaceful and luxurious. This is my sanctuary in the busy city of Lagos!",
      date: "February 2025",
    },
    {
      name: "Ngozi Okafor",
      location: "Lekki, Lagos",
      service: "Hot Stone Therapy",
      rating: 5,
      text: "Pure luxury from start to finish! The hot stone massage was absolutely heavenly. I've been struggling with back pain for months, and after just one session, I felt such relief. The entire experience was so relaxing - from the calming music to the aromatherapy oils. Worth every naira!",
      date: "March 2025",
    },
    {
      name: "Adewale Johnson",
      location: "Ikoyi, Lagos",
      service: "Deep Tissue Massage",
      rating: 5,
      text: "As someone who works long hours at a desk, I developed chronic shoulder and neck pain. The deep tissue massage at MJT has been life-changing. The therapist was highly skilled and professional. The facility is pristine and the service is top-notch. Highly recommend for anyone dealing with muscle tension.",
      date: "January 2025",
    },
    {
      name: "Blessing Chukwu",
      location: "Ajah, Lagos",
      service: "Royal Gold Facial",
      rating: 5,
      text: "Treated myself to the Royal Gold Facial for my birthday, and wow! It was the most luxurious spa experience I've ever had. My skin was glowing for weeks afterward. The attention to detail and the quality of products used is exceptional. MJT sets the standard for luxury spa treatments in Nigeria.",
      date: "February 2025",
    },
    {
      name: "Ibrahim Bello",
      location: "Surulere, Lagos",
      service: "Aromatherapy Session",
      rating: 5,
      text: "I was stressed from work and needed to unwind. The aromatherapy massage was exactly what I needed. The blend of essential oils they used was perfect, and I slept better than I have in months. The staff is friendly and the environment is so calming. This is now my go-to place for relaxation.",
      date: "March 2025",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "5+", label: "Years of Excellence" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Read what our valued clients have to say about their experiences at 
              MJT Luxury Spa - the best spa in Lagos, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-gold transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-accent/30 mb-4" />
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-sm text-accent font-medium mt-1">{testimonial.service}</p>
                    <p className="text-xs text-muted-foreground mt-2">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Clients Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center bg-card">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">Premium Products Used</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-card">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-2">15+</div>
                  <p className="text-muted-foreground">Certified Therapists</p>
                </CardContent>
              </Card>

              <Card className="text-center bg-card">
                <CardContent className="p-6">
                  <div className="text-5xl font-bold text-accent mb-2">24/7</div>
                  <p className="text-muted-foreground">Booking Available</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Happy Clients
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the same luxury and professional care that our clients rave about. 
            Book your appointment today and discover why we're Lagos' top-rated spa.
          </p>
          <Link to="/contact">
            <Button variant="gold" size="lg">
              Book Your Experience Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
