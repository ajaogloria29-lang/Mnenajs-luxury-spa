import { Award, Heart, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About MJT Luxury Spa</h1>
            <p className="text-xl text-muted-foreground">
              Where Excellence Meets Relaxation in the Heart of Lagos
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Founded with a passion for wellness and beauty, MJT Luxury Spa began as a vision to bring 
                world-class spa experiences to Lagos, Nigeria. Our founder, inspired by international spa cultures 
                and a deep commitment to holistic wellness, created a sanctuary where clients could escape the 
                stresses of daily life and immerse themselves in pure luxury.
              </p>
              <p className="text-lg leading-relaxed">
                Over the years, we have grown from a small boutique spa to become one of Lagos's most trusted 
                names in luxury spa treatments. Our success is built on three pillars: exceptional service, 
                premium products, and a genuine dedication to each client's wellbeing.
              </p>
              <p className="text-lg leading-relaxed">
                Every treatment at MJT is crafted with precision and care, using only the finest products 
                sourced from around the world. Our team of professional therapists undergoes rigorous training 
                to ensure that every visit exceeds expectations, leaving you refreshed, rejuvenated, and glowing 
                from within.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for perfection in every treatment, ensuring the highest standards of service.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Care</h3>
                <p className="text-muted-foreground">
                  Your comfort and wellbeing are at the heart of everything we do.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through reliability and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-shadow">
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Continuously evolving our treatments with the latest wellness techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-secondary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide exceptional luxury spa experiences that promote holistic wellness, beauty, 
                  and relaxation. We are committed to helping every client achieve their personal wellness 
                  goals through professional treatments, premium products, and unwavering dedication to service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/10">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be recognized as Nigeria's premier luxury spa destination, setting the standard for 
                  excellence in wellness and beauty treatments. We aspire to expand our reach while maintaining 
                  the intimate, personalized service that makes MJT truly special.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">5+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-lg opacity-90">Professional Therapists</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">20+</div>
              <div className="text-lg opacity-90">Premium Services</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
