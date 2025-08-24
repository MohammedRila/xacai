
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe } from "lucide-react";
import { useCurrency } from "@/hooks/use-currency";
import { convertPrice, formatCurrency, getPeriodText } from "@/lib/currency";

const basePlans = [
  {
    name: "AI Foundation",
    priceUSD: 2000,
    period: "foundation",
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
    priceUSD: 166,
    period: "acceleration",
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
  const { currencyInfo, isLoading } = useCurrency();
  const periodTexts = getPeriodText(currencyInfo);

  const plans = basePlans.map(plan => ({
    ...plan,
    price: isLoading 
      ? `$${plan.priceUSD.toLocaleString()}` 
      : formatCurrency(convertPrice(plan.priceUSD, currencyInfo), currencyInfo),
    periodText: periodTexts[plan.period]
  }));

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Packages & Instant <span className="text-gradient">Onboarding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Choose the plan that matches your ambition. Upgrade anytime as your AI needs grow.
          </p>
          {!isLoading && currencyInfo.code !== 'USD' && (
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span>Prices shown in {currencyInfo.code} based on your location</span>
            </div>
          )}
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
                  <span className="text-lg font-normal text-muted-foreground ml-2">{plan.periodText}</span>
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
              </CardContent>
            </Card>
          ))}
        </div>
        
        {!isLoading && (
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              All prices are converted from USD base rates. Final pricing may vary based on current exchange rates.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
