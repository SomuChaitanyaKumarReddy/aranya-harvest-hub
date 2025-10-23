import { Shield, Sprout, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Sprout,
    title: "Organic & Sustainable",
    description: "We practice 100% organic farming methods that nurture the soil and protect the environment for future generations.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every plant is carefully cultivated and monitored to ensure the highest quality standards before reaching you.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Our experienced team provides comprehensive support and consultation throughout your agricultural journey.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of successful projects and satisfied clients speak to our commitment to excellence in agriculture.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choosing Us!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine traditional wisdom with modern techniques to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card 
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
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

export default WhyChooseUs;
