import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8" />
              <span className="text-2xl font-bold">Aranya Krishi</span>
            </div>
            <p className="opacity-90">
              Cultivating sustainable agriculture for a greener tomorrow
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 opacity-90">
              <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Projects</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 opacity-90">
              <li>Email: info@aranyakrishi.com</li>
              <li>Phone: +91 XXXX XXXX XX</li>
              <li>Location: Agricultural Zone</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; 2025 Aranya Krishi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
