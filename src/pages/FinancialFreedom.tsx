import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, PiggyBank, BarChart3, Users, Sprout } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Income",
    description: "Our sustainable farming methods have helped farmers increase their income by 30-50% through better yields and premium pricing for organic produce.",
  },
  {
    icon: DollarSign,
    title: "Reduced Costs",
    description: "Cut farming costs by 40% through efficient water management, natural pest control, and elimination of expensive chemical inputs.",
  },
  {
    icon: PiggyBank,
    title: "Long-term Savings",
    description: "Build soil health and ecosystem resilience that reduces future investment needs and ensures sustainable productivity for years to come.",
  },
  {
    icon: BarChart3,
    title: "Market Access",
    description: "Connect directly with premium markets willing to pay higher prices for organically grown, sustainably produced agricultural products.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a network of successful farmers sharing knowledge, resources, and market opportunities to maximize collective prosperity.",
  },
  {
    icon: Sprout,
    title: "Diverse Income Streams",
    description: "Develop multiple revenue sources through crop diversification, value-added products, and year-round cultivation strategies.",
  },
];

const FinancialFreedom = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Financial Freedom Through Farming</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Achieve prosperity while nurturing the earth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6 text-center">The Path to Prosperity</h2>
              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                At Aranya Krishi, we believe that sustainable farming is not just good for the environment—it's excellent 
                for your financial health. Our proven methods help farmers achieve financial independence while contributing 
                to a healthier planet. We've helped numerous farmers transform their operations from barely breaking even 
                to thriving, profitable enterprises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                        <Icon className="w-7 h-7 text-secondary-foreground" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{benefit.description}</p>
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
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Success Stories</h2>
              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">From Debt to Profit in 18 Months</h3>
                    <p className="text-muted-foreground mb-4">
                      Rajesh, a farmer from the rural district, was struggling with mounting debts from chemical inputs 
                      and poor yields. After implementing our organic methods and irrigation systems, his costs dropped 
                      by 45% in the first year. By the second year, he was completely debt-free and earning 60% more 
                      than his previous best year.
                    </p>
                    <p className="text-primary font-semibold">Annual Income Increase: ₹4,50,000</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">Building a Sustainable Business</h3>
                    <p className="text-muted-foreground mb-4">
                      Priya started with just 2 acres and our consultation services. Through crop diversification and 
                      our market connections, she now manages 8 acres, employs 5 workers, and has established her own 
                      organic produce brand selling directly to urban consumers at premium prices.
                    </p>
                    <p className="text-primary font-semibold">Business Growth: 400% in 3 years</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialFreedom;
