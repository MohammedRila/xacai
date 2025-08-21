import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const sections = [
  {
    title: "1. Agreement to Terms",
    content: "By accessing and using XACAI's services, you agree to be bound by these Terms & Conditions. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and others who access or use our AI consulting services."
  },
  {
    title: "2. Services Description",
    content: "XACAI provides artificial intelligence consulting services, including but not limited to:",
    list: [
      "AI competitive intelligence and market analysis",
      "Business process automation implementation",
      "Predictive analytics and forecasting solutions",
      "Custom AI model development and deployment",
      "Regulatory monitoring and compliance AI tools"
    ]
  },
  {
    title: "3. Payment Terms",
    content: "Payment is required before service delivery begins. We accept the following payment methods:",
    list: [
      "Credit cards (Visa, MasterCard, American Express)",
      "Bank transfers for enterprise accounts",
      "Net-30 terms for qualified enterprise clients"
    ],
    additionalContent: "All prices are in USD and exclude applicable taxes unless otherwise stated. Refunds are available within 30 days of service initiation, subject to our refund policy."
  },
  {
    title: "4. Intellectual Property",
    content: "All custom AI models, algorithms, and solutions developed specifically for your business remain your intellectual property upon full payment. XACAI retains ownership of our proprietary methodologies, frameworks, and general AI techniques used in service delivery. You grant us permission to use anonymized insights from your project to improve our services."
  },
  {
    title: "5. Data Privacy & Security",
    content: "We take data security seriously and implement industry-standard security measures:",
    list: [
      "End-to-end encryption for all data transmission",
      "SOC 2 Type II compliant infrastructure",
      "Regular security audits and penetration testing",
      "GDPR and CCPA compliance for applicable clients"
    ],
    additionalContent: "Your data will not be shared with third parties without explicit consent, except as required by law or to provide the contracted services."
  },
  {
    title: "6. Service Level Agreements",
    content: "We commit to the following service levels:",
    list: [
      "99.9% uptime for deployed AI systems during business hours",
      "24-hour response time for critical support issues",
      "Weekly progress reports during active project phases",
      "30-day onboarding completion for standard packages"
    ]
  },
  {
    title: "7. Limitation of Liability",
    content: "XACAI's liability is limited to the amount paid for services in the 12 months preceding any claim. We are not liable for indirect, incidental, or consequential damages. While we strive for accuracy in AI predictions and recommendations, results may vary based on data quality and market conditions."
  },
  {
    title: "8. Termination",
    content: "Either party may terminate services with 30 days written notice. Upon termination, you retain access to all deliverables and AI systems already deployed. Ongoing monitoring and support services will cease unless separately contracted."
  },
  {
    title: "9. Governing Law",
    content: "These terms are governed by the laws of the State of California, USA. Any disputes will be resolved through binding arbitration in San Francisco, California, except for claims that can be brought in small claims court."
  }
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions - XACAI | Legal Terms for AI Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read XACAI\'s comprehensive terms and conditions for AI consulting services. Learn about our service agreements, data privacy policies, and legal framework.');
    }
  }, []);

  return (
    <div className="pt-16">
      <section className="py-24 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground">
              Last updated: December 2024
            </p>
          </div>
          
          <div className="space-y-8">
            {sections.map((section, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                      {section.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.additionalContent && (
                    <p className="text-muted-foreground leading-relaxed">
                      {section.additionalContent}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
            
            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-primary/5 to-violet-500/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For questions about these Terms & Conditions, please contact us:
                </p>
                <div className="text-muted-foreground space-y-1">
                  <p><strong className="text-foreground">Email:</strong> legal@xacai.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong className="text-foreground">Address:</strong> 123 Innovation Drive, San Francisco, CA 94105</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
