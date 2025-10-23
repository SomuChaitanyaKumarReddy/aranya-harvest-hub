import { Leaf, Droplets, Settings, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Complete organic farming solutions from seed to harvest, ensuring chemical-free, nutritious produce.",
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Modern drip and sprinkler irrigation systems designed for water efficiency and optimal crop growth.",
  },
  {
    icon: Settings,
    title: "Farm Management",
    description: "End-to-end farm management services including planning, execution, and maintenance of agricultural projects.",
  },
  {
    icon: TrendingUp,
    title: "Agricultural Consulting",
    description: "Expert consultation on crop selection, soil health, pest management, and sustainable farming practices.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive agricultural solutions tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
