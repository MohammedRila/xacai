import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "AI Foundation",
    price: "$2,000",
    period: "one-time",
    description: "Perfect for getting started with AI implementation",
    features: [
      "AI audit & roadmap development",
      "Single AI implementation sprint",
      "30-day Slack support included",
      "Performance analytics dashboard"
    ],
    buttonText: "",
    buttonVariant: "outline" as const
  },
  {
    name: "AI Acceleration",
    price: "$166",
    period: "/mo · 12 months",
    description: "Comprehensive AI transformation for scaling businesses",
    features: [
      "Dedicated AI lead & team access",
      "Ongoing AI automations & optimization",
      "Advanced predictive dashboards",
      "24/7 monitoring & support",
      "Custom AI model development"
    ],
    buttonText: "",
    buttonVariant: "default" as const,
    popular: true
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Packages & Instant <span className="text-gradient">Onboarding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that matches your ambition. Upgrade anytime as your AI needs grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`hover-lift relative ${
                plan.popular ? 'border-primary bg-gradient-to-br from-primary/5 to-violet-500/5' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-violet-500 text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-foreground">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-foreground mb-2">
                  {plan.price}
                  <span className="text-lg font-normal text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.buttonVariant === 'default' 
                      ? 'bg-gradient-to-r from-primary to-violet-500 hover:from-primary-600 hover:to-violet-600' 
                      : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                  variant={plan.buttonVariant}
                  size="lg"
                  data-testid={`button-plan-${index}`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
