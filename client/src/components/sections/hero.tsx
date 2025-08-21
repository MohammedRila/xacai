import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Play, Star } from "lucide-react";
import { useState, useEffect } from "react";

function CountUpNumber({ target, suffix = "", prefix = "", duration = 2000 }: { target: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      setCount(current);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return <span>{prefix}{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-violet-500/10"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20">
                <Star className="w-4 h-4 text-amber-500 mr-2" />
                Trusted by 500+ enterprises worldwide
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">Transform Your</span><br />
                <span className="text-gradient">Business with AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We don't just implement AI—we craft intelligent solutions that adapt, learn, and evolve with your business. From competitive intelligence to predictive analytics, XACAI delivers measurable results that compound over time.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-violet-500 hover:from-primary-600 hover:to-violet-600 text-lg px-8 py-4"
                data-testid="button-start-journey"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Your AI Journey
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 hover:bg-primary hover:text-primary-foreground"
                data-testid="button-watch-demo"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex justify-center pt-8">
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="metric-retention">
                    <CountUpNumber target={92} suffix="%" duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="metric-savings">
                    <CountUpNumber target={1.2} prefix="$" suffix="M" duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground">Costs Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary" data-testid="metric-integrations">
                    <CountUpNumber target={85} suffix="+" duration={2500} />
                  </div>
                  <div className="text-sm text-muted-foreground">AI Integrations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaborating on AI solutions" 
              className="rounded-2xl shadow-2xl hover-lift"
              data-testid="img-hero-team"
            />
            <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">AI Systems Active</span>
              </div>
              <div className="text-2xl font-bold text-primary mt-2">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
