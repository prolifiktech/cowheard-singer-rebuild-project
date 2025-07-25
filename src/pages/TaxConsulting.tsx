import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import taxImage from "@/assets/tax-consulting.jpg";

const TaxConsulting = () => {
  const services = [
    {
      title: "Tax Services",
      description: "Comprehensive tax preparation, planning, and compliance for individuals and businesses."
    },
    {
      title: "Small Business Consulting",
      description: "Strategic guidance and financial consulting for small business growth and success."
    },
    {
      title: "Management Consulting",
      description: "Operational efficiency and strategic planning services for organizations of all sizes."
    }
  ];

  const taxTypes = [
    "Individual Tax Returns",
    "Corporate Tax Returns", 
    "Partnership Returns",
    "Estate & Trust Returns",
    "Tax Planning & Strategy",
    "IRS Representation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-secondary/10 to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Tax & Consulting Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Dedicated and up-to-date professionals for all your tax and consulting needs. 
                  We stay current with ever-changing tax laws to maximize your benefits.
                </p>
                <div className="space-y-4 text-foreground">
                  <p>• Strategic tax planning</p>
                  <p>• Business consulting</p>
                  <p>• Compliance services</p>
                  <p>• IRS representation</p>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={taxImage} 
                  alt="Tax & Consulting Services"
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
              Our Tax & Consulting Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
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

        {/* Tax Types Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Tax Preparation Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {taxTypes.map((type, index) => (
                <div 
                  key={type} 
                  className="flex items-center space-x-3 p-4 bg-background rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Choose Our Tax Services?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our experienced tax professionals stay current with the latest tax law changes 
              and work year-round to ensure you receive maximum benefits and remain compliant.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Years of Tax Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Returns Prepared Annually</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Accuracy Guarantee</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TaxConsulting;