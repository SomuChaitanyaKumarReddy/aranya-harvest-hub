import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Droplets, Settings, TrendingUp, Sprout, Users, Shield, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Complete organic farming solutions from seed to harvest, ensuring chemical-free, nutritious produce.",
    features: ["Soil health management", "Natural pest control", "Organic certification support", "Crop rotation planning"],
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Modern drip and sprinkler irrigation systems designed for water efficiency and optimal crop growth.",
    features: ["Drip irrigation setup", "Sprinkler systems", "Water conservation techniques", "Automated irrigation"],
  },
  {
    icon: Settings,
    title: "Farm Management",
    description: "End-to-end farm management services including planning, execution, and maintenance of agricultural projects.",
    features: ["Project planning", "Resource allocation", "Progress monitoring", "Quality control"],
  },
  {
    icon: TrendingUp,
    title: "Agricultural Consulting",
    description: "Expert consultation on crop selection, soil health, pest management, and sustainable farming practices.",
    features: ["Crop advisory", "Soil testing", "Market analysis", "Profit optimization"],
  },
  {
    icon: Sprout,
    title: "Plant Nursery",
    description: "High-quality seedlings and plants for various crops, all grown using organic methods.",
    features: ["Vegetable seedlings", "Fruit saplings", "Medicinal plants", "Native species"],
  },
  {
    icon: Users,
    title: "Training & Workshops",
    description: "Educational programs for farmers to learn modern and sustainable farming techniques.",
    features: ["Hands-on training", "Online workshops", "Field demonstrations", "Certification courses"],
  },
  {
    icon: Shield,
    title: "Crop Protection",
    description: "Natural and eco-friendly crop protection solutions to ensure healthy, disease-free plants.",
    features: ["Organic pesticides", "Disease prevention", "Pest monitoring", "Bio-control methods"],
  },
  {
    icon: Truck,
    title: "Supply Chain Support",
    description: "Assistance with marketing, distribution, and connecting farmers to the right markets.",
    features: ["Market linkages", "Price negotiation", "Transport coordination", "Storage solutions"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Comprehensive agricultural solutions tailored to your needs
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Leaf className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
