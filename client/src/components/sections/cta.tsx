import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-violet-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary-foreground mb-6">Get Your AI Strategy Now</h2>
        <p className="text-xl mb-8 text-primary-foreground/80">
          Book a 30-min discovery call — we'll map high-ROI AI use cases for you.
        </p>
        <Button 
          size="lg"
          className="bg-background text-primary hover:bg-background/90 text-lg px-8 py-4"
          onClick={() => window.open(`https://wa.me/12109758369?text=Hi%20XACAI,%20I'm%20ready%20to%20start%20and%20would%20like%20to%20get%20my%20AI%20strategy%20now.%20Please%20call%20me%20to%20discuss.`, '_blank')}
          data-testid="button-start-minutes"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Start in Minutes
        </Button>
      </div>
    </section>
  );
}
