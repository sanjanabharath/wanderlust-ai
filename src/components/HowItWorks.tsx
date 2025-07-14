import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Search, Route, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.how-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.how-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate step cards with stagger
      gsap.fromTo('.step-card', 
        { opacity: 0, y: 100, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate connection lines
      gsap.fromTo('.connection-line', 
        { scaleX: 0 },
        { 
          scaleX: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: MessageCircle,
      step: '01',
      title: 'Tell Us Your Dreams',
      description: 'Share your travel preferences, interests, and budget. Our AI listens and learns what makes your perfect trip.'
    },
    {
      icon: Search,
      step: '02',
      title: 'AI Analyzes & Discovers',
      description: 'Advanced algorithms search through millions of data points to find hidden gems and experiences tailored to you.'
    },
    {
      icon: Route,
      step: '03',
      title: 'Smart Itinerary Creation',
      description: 'Get a perfectly optimized itinerary with routes, timings, and alternatives that maximize your travel experience.'
    },
    {
      icon: Check,
      step: '04',
      title: 'Travel with Confidence',
      description: 'Enjoy real-time updates, instant support, and seamless booking while our AI ensures everything goes smoothly.'
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="how-title text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From dream to reality in four simple steps. Let our AI transform your travel ideas
            into unforgettable experiences.
          </p>
        </div>

        <div className="steps-container relative max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="step-card bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-background" />
                    </div>
                    <div className="text-sm font-bold text-primary mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="connection-line absolute top-20 left-full w-8 h-0.5 bg-gradient-hero transform origin-left"></div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="step-card bg-card/50 backdrop-blur-sm border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6 text-background" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary mb-1">{step.step}</div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Vertical Connection Line */}
                {index < steps.length - 1 && (
                  <div className="connection-line w-0.5 h-8 bg-gradient-hero mx-auto transform origin-top"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;