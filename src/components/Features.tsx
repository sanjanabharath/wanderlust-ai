import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Map, Calendar, Camera, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import appMockup from '@/assets/app-mockup.jpg';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.features-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.features-title',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate feature cards
      gsap.fromTo('.feature-card', 
        { opacity: 0, y: 80, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate app mockup
      gsap.fromTo('.app-mockup', 
        { opacity: 0, x: 100, rotation: 5 },
        { 
          opacity: 1, 
          x: 0, 
          rotation: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: '.app-mockup',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms analyze millions of travel data points to provide personalized recommendations just for you.'
    },
    {
      icon: Map,
      title: 'Interactive Maps',
      description: 'Explore destinations with detailed, interactive maps featuring hidden gems, local hotspots, and real-time information.'
    },
    {
      icon: Calendar,
      title: 'Smart Itinerary Planning',
      description: 'Create optimized travel schedules that maximize your time and minimize travel stress with intelligent routing.'
    },
    {
      icon: Camera,
      title: 'Photo Recognition',
      description: 'Snap a photo of any landmark or location to instantly get detailed information, reviews, and nearby attractions.'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Real-time safety alerts, travel advisories, and emergency assistance to keep you secure throughout your journey.'
    },
    {
      icon: Zap,
      title: 'Instant Booking',
      description: 'Book flights, hotels, and activities directly through the app with exclusive deals and instant confirmation.'
    }
  ];

  return (
    <section ref={sectionRef} id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="features-title text-4xl md:text-5xl font-bold mb-6">
            Powered by Advanced AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of travel planning with cutting-edge artificial intelligence
            that understands your unique preferences and travel style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features Grid */}
          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Mockup */}
          <div className="app-mockup relative">
            <div className="relative">
              <img 
                src={appMockup} 
                alt="TravelMate App Interface" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary rounded-full animate-float opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/3 -left-8 w-6 h-6 bg-nature-secondary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;