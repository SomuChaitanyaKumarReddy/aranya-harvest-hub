import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Organic Vegetable Farm",
    description: "5-acre organic vegetable cultivation with sustainable practices",
    status: "Completed",
    location: "Rural District",
  },
  {
    title: "Herbal Garden Development",
    description: "Medicinal herb cultivation and processing facility",
    status: "Ongoing",
    location: "Hill Region",
  },
  {
    title: "Fruit Orchard Expansion",
    description: "Multi-variety fruit orchard with modern irrigation",
    status: "Ongoing",
    location: "Coastal Area",
  },
  {
    title: "Smart Farm Initiative",
    description: "Technology-integrated farming with IoT sensors",
    status: "Upcoming",
    location: "Urban Outskirts",
  },
  {
    title: "Community Garden Project",
    description: "Collaborative farming space for local community",
    status: "Upcoming",
    location: "Town Center",
  },
  {
    title: "Greenhouse Complex",
    description: "Year-round controlled environment cultivation",
    status: "Upcoming",
    location: "Agricultural Zone",
  },
];

const Projects = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming agricultural landscapes across regions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
