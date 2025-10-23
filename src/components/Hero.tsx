import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Aranya Krishi
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-95 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-100">
            Cultivating Nature's Bounty with Sustainable Farming Practices
          </p>
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            <Button size="lg" variant="secondary" className="group">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
