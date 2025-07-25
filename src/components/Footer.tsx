import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "@/assets/company-logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Insurance Claims",
    "Family Law & Divorce", 
    "Fraud & Investigation",
    "Catastrophe Response",
    "Tax Services",
    "Small Business Consulting",
    "Financial Statement Services",
    "Accounting Services"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src={companyLogo} 
              alt="Cowheard, Singer & Company" 
              className="h-12 w-auto mb-6 filter brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Providing professional accounting, forensic, and consulting services with 
              unparalleled expertise and commitment to excellence for over decades.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-background/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-background/80">info@cowheard-singer.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-background/80">Professional Business Center</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 4).map((service) => (
                <li key={service}>
                  <a href="#" className="text-background/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-background">Specializations</h3>
            <ul className="space-y-3">
              {services.slice(4).map((service) => (
                <li key={service}>
                  <a href="#" className="text-background/80 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Cowheard, Singer & Company. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-background/60 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-background/60 hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}