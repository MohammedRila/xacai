import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "XACAI cut our ops costs by 32% in 90 days. The speed and precision of their AI implementations transformed how we operate.",
    author: "Sarah Chen",
    role: "COO, Fintech Scaleup",
    metric: "32% cost reduction in 90 days",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b14c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "From chaos to clarity — we finally have predictive visibility into our supply chain and customer demand patterns.",
    author: "Marcus Rodriguez",
    role: "VP Strategy, Retail Enterprise",
    metric: "85% forecast accuracy improvement",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    quote: "They ship real outcomes. Our AI helpdesk now resolves 74% of tickets autonomously with higher satisfaction scores.",
    author: "Jennifer Walsh",
    role: "Head of CX, SaaS Unicorn",
    metric: "74% autonomous resolution rate",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
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
