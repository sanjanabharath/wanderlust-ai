import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Smartphone, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import forestScene from '@/assets/forest-scene.jpg';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main content
      gsap.fromTo('.cta-content', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate stats
      gsap.fromTo('.stat-item', 
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate buttons
      gsap.fromTo('.cta-button', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.cta-buttons',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '500K+', label: 'Downloads' },
    { number: '4.9', label: 'App Rating' },
    { number: '150+', label: 'Countries' },
    { number: '2M+', label: 'Trips Planned' }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${forestScene})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="cta-content max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start Your Next Adventure
            <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of travelers who trust TravelMate to turn their dream destinations 
            into unforgettable experiences. Download now and get your first personalized itinerary free.
          </p>

          {/* Stats */}
          <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="cta-button text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
            <Button size="lg" variant="outline" className="cta-button text-lg px-8 py-6">
              <Smartphone className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-primary fill-current" />
              ))}
            </div>
            <span>Rated 4.9/5 by 50,000+ users</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-nature-secondary/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default CTA;