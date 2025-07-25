import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import forensicImage from "@/assets/forensic-dispute.jpg";

const ForensicDispute = () => {
  const services = [
    {
      title: "Insurance Claims",
      description: "Expert analysis and documentation for insurance claim disputes and settlements."
    },
    {
      title: "Family Law & Divorce",
      description: "Financial analysis and asset valuation for divorce proceedings and family law matters."
    },
    {
      title: "Fraud & Investigation",
      description: "Comprehensive fraud detection, investigation, and expert testimony services."
    },
    {
      title: "Catastrophe Response",
      description: "Rapid response team for natural disasters and catastrophic events."
    },
    {
      title: "Dispute & Litigation Support",
      description: "Expert witness services and litigation support for complex financial disputes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Forensic & Dispute Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  A multidisciplinary team with industry leadership and experience providing comprehensive forensic accounting and dispute resolution services.
                </p>
                <div className="space-y-4 text-foreground">
                  <p>• Expert witness testimony</p>
                  <p>• Financial investigation</p>
                  <p>• Litigation support</p>
                  <p>• Damage quantification</p>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={forensicImage} 
                  alt="Forensic & Dispute Services"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Forensic Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={service.title} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Experience That Matters</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team has handled some of the most complex forensic accounting cases, 
              including major litigation matters, insurance claims, and financial investigations. 
              We provide clear, defensible analysis that stands up to scrutiny.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForensicDispute;