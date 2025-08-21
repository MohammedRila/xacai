import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Settings, Brain, Shield, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "AI Competitive Intelligence",
    description: "Track rivals, markets, and trends with real-time AI insight. We analyze millions of data points so you can make decisions with confidence, not guesswork.",
    gradient: "from-primary to-violet-500",
    bgGradient: "from-primary/5 to-violet-500/5"
  },
  {
    icon: Settings,
    title: "AI Business Automation",
    description: "Automate processes end-to-end to cut costs and scale operations. From customer service to supply chain, we build automation that actually works.",
    gradient: "from-violet-500 to-primary",
    bgGradient: "from-violet-500/5 to-primary/5"
  },
  {
    icon: Brain,
    title: "Predictive Market Analysis",
    description: "Forecast demand and pricing with high-confidence predictions. Our models learn from your data to deliver insights that drive revenue growth.",
    gradient: "from-emerald-500 to-cyan-500",
    bgGradient: "from-emerald-500/5 to-cyan-500/5"
  },
  {
    icon: Shield,
    title: "AI News & Regulation Monitoring",
    description: "Stay compliant and informed with proactive alerts. We monitor regulatory changes and industry news so you can adapt before your competitors.",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/5 to-orange-500/5"
  },
  {
    icon: Rocket,
    title: "Custom AI Implementation",
    description: "From strategy to deployment—tailored AI for your stack. We don't do cookie-cutter solutions. Every implementation is designed for your specific business needs.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/5 to-pink-500/5"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Services Built for an <span className="text-gradient">AI-First Advantage</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From automation to analytics, we deliver outcomes that compound. Our human-centered approach ensures AI solutions that actually work for real businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`group bg-gradient-to-br ${service.bgGradient} hover-lift border-border hover:border-primary/50 transition-all duration-300`}>
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex items-center text-primary font-semibold group-hover:text-primary-600 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
