import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Leaf, BookOpen, Sprout, Droplets, Shield, TrendingUp, Settings } from "lucide-react";

const team = [
  {
    name: "Dr. Suresh Menon",
    role: "Chief Agricultural Consultant",
    icon: BookOpen,
    description: "20+ years in organic farming research and development",
    expertise: "Soil Science, Organic Methods, Research",
  },
  {
    name: "Kavita Reddy",
    role: "Project Manager",
    icon: Users,
    description: "Expert in farm planning, execution and team coordination",
    expertise: "Project Management, Team Leadership",
  },
  {
    name: "Anil Joshi",
    role: "Irrigation Specialist",
    icon: Droplets,
    description: "Specialist in water management and irrigation systems",
    expertise: "Drip Systems, Water Conservation",
  },
  {
    name: "Meera Desai",
    role: "Sustainability Advisor",
    icon: Leaf,
    description: "Pioneer in eco-friendly and sustainable farming methods",
    expertise: "Sustainable Practices, Environmental Impact",
  },
  {
    name: "Rahul Sharma",
    role: "Crop Protection Expert",
    icon: Shield,
    description: "Specialist in organic pest control and crop health",
    expertise: "Natural Pesticides, Disease Prevention",
  },
  {
    name: "Priya Nair",
    role: "Market Analyst",
    icon: TrendingUp,
    description: "Expert in agricultural markets and business planning",
    expertise: "Market Research, Business Strategy",
  },
  {
    name: "Vijay Kumar",
    role: "Farm Operations Manager",
    icon: Settings,
    description: "Oversees day-to-day operations across all projects",
    expertise: "Operations, Process Optimization",
  },
  {
    name: "Anjali Patel",
    role: "Plant Nursery Head",
    icon: Sprout,
    description: "Manages plant production and quality control",
    expertise: "Plant Propagation, Quality Assurance",
  },
];

const TeamPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Meet the experts driving agricultural innovation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => {
                const Icon = member.icon;
                return (
                  <Card 
                    key={index}
                    className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
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
                      <p className="text-muted-foreground text-sm mb-4">
                        {member.description}
                      </p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">Expertise:</span> {member.expertise}
                        </p>
                      </div>
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

export default TeamPage;
