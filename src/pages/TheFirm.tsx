import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import firmImage from "@/assets/the-firm.jpg";

const TheFirm = () => {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our professional relationships and work."
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every engagement, delivering superior results for our clients."
    },
    {
      title: "Experience",
      description: "Our team brings decades of combined experience across multiple industries and disciplines."
    },
    {
      title: "Innovation",
      description: "We embrace technology and innovative approaches to solve complex financial challenges."
    }
  ];

  const teamStats = [
    { label: "Years in Business", value: "35+" },
    { label: "Professional Staff", value: "25+" },
    { label: "Clients Served", value: "1000+" },
    { label: "Industries Covered", value: "20+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-accent/10 to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  The Firm
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The team at Cowheard, Singer & Company provides unparalleled leadership 
                  in forensic accounting, tax services, and financial consulting.
                </p>
                <p className="text-lg text-foreground mb-6">
                  Founded on principles of integrity, excellence, and client service, 
                  we have built lasting relationships with clients across diverse industries.
                </p>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <img 
                  src={firmImage} 
                  alt="The Firm"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg text-muted-foreground mb-6">
                Cowheard, Singer & Company has been serving clients for over three decades, 
                building a reputation for excellence in forensic accounting, tax services, 
                and financial consulting. What started as a small practice has grown into 
                a full-service firm while maintaining our commitment to personalized service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our success is built on the expertise of our team and our dedication to 
                staying at the forefront of industry developments. We invest in continuing 
                education, technology, and professional development to ensure our clients 
                receive the most current and effective solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={value.title} className="text-center hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <CardTitle className="text-primary">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground">
                Our leadership team brings together decades of experience in accounting, 
                forensic analysis, tax planning, and business consulting. Each partner 
                is committed to delivering exceptional results and maintaining the highest 
                professional standards.
              </p>
            </div>
            
            {/* Professional Credentials */}
            <div className="bg-background border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                Professional Credentials & Memberships
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Certified Public Accountants (CPA)</li>
                  <li>• Certified Fraud Examiners (CFE)</li>
                  <li>• Accredited Business Valuators (ABV)</li>
                </ul>
                <ul className="space-y-2">
                  <li>• American Institute of CPAs (AICPA)</li>
                  <li>• Association of Certified Fraud Examiners</li>
                  <li>• National Association of Forensic Accountants</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {teamStats.map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team today to discuss how we can help with your accounting, 
              tax, or forensic needs. We're here to provide the expertise and service you deserve.
            </p>
            <div className="text-foreground">
              <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Email:</strong> info@cowheard-singer.com</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TheFirm;