import { ServiceCard } from "./ServiceCard";
import forensicImage from "@/assets/forensic-dispute.jpg";
import taxImage from "@/assets/tax-consulting.jpg";
import financialImage from "@/assets/financial-accounting.jpg";
import firmImage from "@/assets/the-firm.jpg";

export function Services() {
  const services = [
    {
      title: "Forensic & Dispute",
      description: "A multidisciplinary team with industry leadership and experience in forensic accounting, fraud investigation, and litigation support.",
      image: forensicImage,
      href: "/forensic-dispute"
    },
    {
      title: "Tax & Consulting",
      description: "Dedicated and up-to-date professionals for all your tax and consulting needs, providing strategic guidance for businesses and individuals.",
      image: taxImage,
      href: "/tax-consulting"
    },
    {
      title: "Financial Statements & Accounting",
      description: "This brand of customized service provides a distinct advantage to our clients with comprehensive accounting and financial reporting solutions.",
      image: financialImage,
      href: "/financial-accounting"
    },
    {
      title: "The Firm",
      description: "The team at Cowheard, Singer & Company provides unparalleled leadership with decades of combined experience in professional services.",
      image: firmImage,
      href: "/the-firm"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your business needs with expertise, 
            integrity, and professional excellence.
          </p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard 
                {...service} 
                reverse={index % 2 === 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}