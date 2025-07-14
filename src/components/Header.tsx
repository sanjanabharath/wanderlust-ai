import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.header-logo', 
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );
    gsap.fromTo('.nav-link', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.4 }
    );
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="header-logo flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-background">AI</span>
            </div>
            <span className="text-xl font-bold text-foreground">TravelMate</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="nav-link text-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="#testimonials" className="nav-link text-foreground hover:text-primary transition-colors">Reviews</a>
            <Button variant="outline" className="nav-link">Download</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#features" className="block text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="block text-foreground hover:text-primary transition-colors">How it Works</a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-colors">Reviews</a>
            <Button variant="outline" className="w-full">Download</Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;