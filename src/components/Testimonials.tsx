import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo('.testimonials-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.testimonials-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate testimonial cards
      gsap.fromTo('.testimonial-card', 
        { opacity: 0, y: 80, rotation: 2 },
        { 
          opacity: 1, 
          y: 0, 
          rotation: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Digital Nomad',
      location: 'Singapore',
      rating: 5,
      text: 'TravelMate completely transformed how I plan my trips. The AI recommendations led me to incredible hidden gems in Bali that I never would have found otherwise. It\'s like having a local friend in every city!',
      avatar: '👩‍💻'
    },
    {
      name: 'Marco Rodriguez',
      role: 'Adventure Seeker',
      location: 'Barcelona',
      rating: 5,
      text: 'The real-time updates and safety features gave me confidence to explore remote hiking trails in Patagonia. The app even suggested the perfect weather windows for my climbs. Absolutely incredible!',
      avatar: '🧗‍♂️'
    },
    {
      name: 'Emily Thompson',
      role: 'Family Traveler',
      location: 'Toronto',
      rating: 5,
      text: 'Planning family trips used to be overwhelming, but TravelMate makes it effortless. The AI understood our needs with two kids and suggested family-friendly activities that kept everyone happy.',
      avatar: '👨‍👩‍👧‍👦'
    },
    {
      name: 'David Kim',
      role: 'Business Traveler',
      location: 'Seoul',
      rating: 5,
      text: 'The smart itinerary planning saves me hours of research. TravelMate optimizes my business trips so efficiently that I actually have time to explore the cities I visit for work.',
      avatar: '💼'
    },
    {
      name: 'Luna Martinez',
      role: 'Solo Explorer',
      location: 'Mexico City',
      rating: 5,
      text: 'As a solo female traveler, the safety features and local insights are invaluable. TravelMate helped me discover authentic local experiences while keeping me informed about safe areas.',
      avatar: '✈️'
    },
    {
      name: 'Alex Johnson',
      role: 'Photography Enthusiast',
      location: 'New York',
      rating: 5,
      text: 'The photo recognition feature is mind-blowing! I can snap a picture of any landmark and instantly get its history, best viewing times, and nearby photo spots. Perfect for my travel photography.',
      avatar: '📸'
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-bold mb-6">
            Loved by Travelers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy travelers who have transformed their journeys with our AI companion.
          </p>
        </div>

        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="testimonial-card bg-card/50 backdrop-blur-sm border-white/10 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-primary/50 mb-4" />
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;