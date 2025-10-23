import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const projects = [
  {
    title: "Organic Vegetable Farm",
    description: "5-acre organic vegetable cultivation with sustainable practices and drip irrigation systems",
    status: "Completed",
    location: "Rural District",
    duration: "6 months",
    team: "8 farmers",
    results: "40% yield increase, Chemical-free produce",
  },
  {
    title: "Herbal Garden Development",
    description: "Medicinal herb cultivation and processing facility with modern infrastructure",
    status: "Ongoing",
    location: "Hill Region",
    duration: "8 months",
    team: "5 farmers",
    results: "50+ herb varieties, Export quality",
  },
  {
    title: "Fruit Orchard Expansion",
    description: "Multi-variety fruit orchard with modern irrigation and organic pest management",
    status: "Ongoing",
    location: "Coastal Area",
    duration: "12 months",
    team: "12 farmers",
    results: "200+ fruit trees planted",
  },
  {
    title: "Smart Farm Initiative",
    description: "Technology-integrated farming with IoT sensors for precision agriculture",
    status: "Upcoming",
    location: "Urban Outskirts",
    duration: "10 months",
    team: "6 farmers",
    results: "Digital monitoring planned",
  },
  {
    title: "Community Garden Project",
    description: "Collaborative farming space for local community with training programs",
    status: "Upcoming",
    location: "Town Center",
    duration: "4 months",
    team: "15 farmers",
    results: "Community empowerment focus",
  },
  {
    title: "Greenhouse Complex",
    description: "Year-round controlled environment cultivation for premium vegetables",
    status: "Upcoming",
    location: "Agricultural Zone",
    duration: "14 months",
    team: "10 farmers",
    results: "All-season production planned",
  },
];

const ProjectsPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-primary text-primary-foreground";
      case "Ongoing":
        return "bg-secondary text-secondary-foreground";
      case "Upcoming":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-hero-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl max-w-3xl mx-auto opacity-95">
                Transforming agricultural landscapes across regions
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      {project.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      {project.team}
                    </div>
                    <div className="pt-3 border-t border-border">
                      <p className="text-sm font-medium text-foreground">{project.results}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
