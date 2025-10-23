import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, TrendingUp, Clock, Shield, Droplets, Sun } from "lucide-react";

const features = [
  {
    icon: TreePine,
    title: "Premium Quality Wood",
    description: "Teakwood is renowned globally for its durability, strength, and beautiful golden-brown color that develops a rich patina over time.",
  },
  {
    icon: TrendingUp,
    title: "High Market Value",
    description: "Consistently high demand in furniture, construction, and shipbuilding industries ensures excellent returns on investment.",
  },
  {
    icon: Clock,
    title: "Long-term Investment",
    description: "While maturity takes 20-25 years, teakwood offers one of the best long-term returns in agriculture, with prices increasing annually.",
  },
  {
    icon: Shield,
    title: "Natural Resistance",
    description: "Naturally resistant to termites, fungi, and rot, requiring minimal maintenance and chemical treatments throughout its growth.",
  },
  {
    icon: Droplets,
    title: "Water Efficient",
    description: "Once established, teak trees are relatively drought-tolerant and can thrive with minimal irrigation in suitable climates.",
  },
  {
    icon: Sun,
    title: "Climate Benefits",
    description: "Teak plantations act as carbon sinks, improve local microclimates, prevent soil erosion, and support biodiversity.",
  },
];

const AboutTeakwood = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Teakwood Farming</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Sustainable timber investment for generations
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 text-center">Why Teakwood?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Teakwood (Tectona grandis) is one of the most valuable timber species in the world. Native to South 
                  and Southeast Asia, teak has been cultivated for centuries for its exceptional wood properties. At 
                  Aranya Krishi, we specialize in establishing and managing teakwood plantations using sustainable 
                  forestry practices.
                </p>
                <p>
                  Our teakwood farming program is designed for investors and landowners seeking long-term value creation 
                  while contributing to environmental conservation. We provide end-to-end support from site selection 
                  and plantation establishment to ongoing maintenance and eventual harvesting.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary mb-4">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Growth Timeline & Returns</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        5Y
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Years 1-5: Establishment Phase</h3>
                        <p className="text-muted-foreground">
                          Initial planting, regular maintenance, and monitoring. Trees grow 3-4 meters tall. First thinning 
                          can provide some revenue from smaller timber.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        12Y
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Years 6-12: Growth Phase</h3>
                        <p className="text-muted-foreground">
                          Rapid growth period with trees reaching 12-15 meters. Second thinning provides moderate timber revenue. 
                          Trees develop valuable heartwood.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        25Y
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Years 13-25: Maturity & Harvest</h3>
                        <p className="text-muted-foreground">
                          Trees reach optimal maturity at 20-25 years. Final harvest provides premium timber commanding highest 
                          market prices. Expected returns of 12-15% annually over the full cycle.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8 bg-primary/5">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground text-center">Investment Potential</h3>
                  <p className="text-center text-muted-foreground mb-4">
                    A well-managed teakwood plantation on 1 acre can yield returns of ₹20-30 lakhs at maturity, 
                    making it one of the most lucrative long-term agricultural investments.
                  </p>
                  <p className="text-center text-primary font-semibold text-lg">
                    Average Annual ROI: 12-15%
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

export default AboutTeakwood;
