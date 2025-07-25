import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import financialImage from "@/assets/financial-accounting.jpg";

const FinancialAccounting = () => {
  const services = [
    {
      title: "Financial Statement Services",
      description: "Compilation, review, and audit services for comprehensive financial reporting."
    },
    {
      title: "Accounting Services", 
      description: "Full-service bookkeeping, payroll, and accounting solutions for businesses."
    }
  ];

  const offerings = [
    {
      category: "Financial Statements",
      items: [
        "Audited Financial Statements",
        "Reviewed Financial Statements", 
        "Compiled Financial Statements",
        "Internal Financial Reports"
      ]
    },
    {
      category: "Accounting Services",
      items: [
        "Monthly Bookkeeping",
        "Payroll Processing",
        "QuickBooks Setup & Training",
        "Cash Flow Management"
      ]
    },
    {
      category: "Specialized Services",
      items: [
        "Non-Profit Accounting",
        "Construction Accounting",
        "Professional Services Accounting",
        "Manufacturing Cost Accounting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Financial Statements & Accounting
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  This brand of customized service provides a distinct advantage to our clients. 
                  We deliver accurate, timely financial information to support your business decisions.
                </p>
                <div className="space-y-4 text-foreground">
                  <p>• Comprehensive financial reporting</p>
                  <p>• Monthly accounting services</p>
                  <p>• Industry-specific expertise</p>
                  <p>• Technology integration</p>
                </div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={financialImage} 
                  alt="Financial Statements & Accounting"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Our Financial & Accounting Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={service.title} className="hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-primary text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Offerings Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Complete Service Offerings
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {offerings.map((offering, index) => (
                <Card key={offering.category} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader>
                    <CardTitle className="text-primary">{offering.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {offering.items.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">Why Our Approach Works</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We understand that every business has unique needs. Our customized approach ensures 
              you receive financial information that's relevant, accurate, and actionable for your specific industry and situation.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Online Access to Records</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">48hr</div>
                <div className="text-muted-foreground">Report Turnaround</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FinancialAccounting;