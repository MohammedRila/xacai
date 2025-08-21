import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "I was honestly skeptical about AI consulting at first, but XACAI completely changed my perspective. They didn't just give us fancy algorithms - they actually understood our manufacturing bottlenecks and built solutions that work in the real world. Our production planning is now automated and we're saving about $180K annually in overtime costs alone.",
    author: "David Park",
    role: "Operations Director, TechFlow Manufacturing",
    metric: "$180K saved in first year",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Working with XACAI felt like having a tech co-founder who actually gets business. They spent weeks understanding our customer journey before writing a single line of code. Now our recommendation engine drives 40% of our revenue and customers keep asking how we know exactly what they want.",
    author: "Rebecca Martinez",
    role: "CEO, StyleHub E-commerce",
    metric: "40% revenue from AI recommendations",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "Before XACAI, we were drowning in customer support tickets and hiring wasn't fast enough. Their AI support system handles the routine stuff flawlessly, and our team can focus on complex issues that actually need human touch. Our response times dropped from 6 hours to under 30 minutes.",
    author: "James Thompson",
    role: "Customer Success Lead, CloudSync Solutions",
    metric: "30-minute average response time",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Client Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real businesses, real results. See how XACAI's AI solutions drive measurable outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-card border-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.author} portrait`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-primary font-semibold" data-testid={`metric-${index}`}>
                  {testimonial.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
