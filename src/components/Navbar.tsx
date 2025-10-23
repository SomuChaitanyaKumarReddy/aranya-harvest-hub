import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Aranya Krishi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="/projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
            <a href="/team" className="text-foreground hover:text-primary transition-colors">Team</a>
            <a href="/financial-freedom" className="text-foreground hover:text-primary transition-colors text-sm">Financial Freedom</a>
            <a href="/teakwood" className="text-foreground hover:text-primary transition-colors text-sm">Teakwood</a>
            <a href="/faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
            <Button asChild>
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
