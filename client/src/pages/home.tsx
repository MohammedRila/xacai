import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import Pricing from "@/components/sections/pricing";
import CTA from "@/components/sections/cta";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Lightbulb, Target } from "lucide-react";

const whyChoose = [
  {
    icon: CheckCircle,
    title: "Proven Trust",
    description: "Enterprise-grade security, transparency, and delivery. We've helped Fortune 500 companies transform their operations with confidence and reliability.",
    gradient: "from-emerald-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Speed to Value",
    description: "Weeks, not months—rapid pilots and measurable ROI. Our proven methodology gets you from concept to production faster than traditional consulting approaches.",
    gradient: "from-primary to-violet-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation Engine",
    description: "We ship, test, and iterate with you—continuously. Our agile approach means your AI solutions evolve with your business and stay ahead of the curve.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Outcome-Driven",
    description: "We align to KPIs: cost down, efficiency up, revenue unlocked. Every project has clear success metrics and measurable business impact from day one.",
    gradient: "from-rose-500 to-pink-500"
  }
];

export default function Home() {
  useEffect(() => {
    document.title = "XACAI - Transform Your Business with AI | AI Consulting & Implementation";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your business with XACAI\'s cutting-edge AI solutions. From competitive intelligence to market analysis, we deliver measurable results that compound over time.');
    }
  }, []);

  return (
    <div className="pt-16">
      <Hero />
      <Services />
      
      {/* Why Choose XACAI Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-secondary to-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose XACAI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another AI consultancy. We're your strategic partner in building an AI-powered future that actually delivers results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item, index) => (
              <Card key={index} className="glass-effect hover-lift border-border/50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
}
