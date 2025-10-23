import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Aranya Krishi</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Pioneering sustainable agriculture for over a decade
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Aranya Krishi was founded with a vision to transform traditional farming practices into sustainable, 
                  eco-friendly agricultural solutions. What started as a small initiative has grown into a comprehensive 
                  agricultural service provider, helping farmers across multiple regions.
                </p>
                <p>
                  Our journey began with a simple belief: that farming should work in harmony with nature, not against it. 
                  Through years of research, experimentation, and collaboration with local farmers, we've developed methods 
                  that increase yields while protecting the environment.
                </p>
                <p>
                  Today, we're proud to serve 14 happy clients, having sold over 244 plants and managing multiple ongoing 
                  and upcoming projects that showcase the power of sustainable agriculture.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To revolutionize agriculture through sustainable practices that benefit both farmers and the environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    A future where every farm operates in perfect harmony with nature, ensuring food security for generations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-4">
                    <Heart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, sustainability, innovation, and a deep commitment to the agricultural community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
