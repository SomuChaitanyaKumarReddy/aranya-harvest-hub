import { Card, CardContent } from "@/components/ui/card";
import { Users, Leaf, BookOpen, Sprout } from "lucide-react";

const team = [
  {
    name: "Dr. Suresh Menon",
    role: "Chief Agricultural Consultant",
    icon: BookOpen,
    description: "20+ years in organic farming research",
  },
  {
    name: "Kavita Reddy",
    role: "Project Manager",
    icon: Users,
    description: "Expert in farm planning and execution",
  },
  {
    name: "Anil Joshi",
    role: "Irrigation Specialist",
    icon: Sprout,
    description: "Specialist in water management systems",
  },
  {
    name: "Meera Desai",
    role: "Sustainability Advisor",
    icon: Leaf,
    description: "Pioneer in eco-friendly farming methods",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals dedicated to agricultural excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <Card 
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary mb-4">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
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

export default Team;
