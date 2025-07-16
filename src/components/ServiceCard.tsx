import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

export function ServiceCard({ title, description, image, href, reverse = false }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-2">
      <div className={`grid md:grid-cols-2 gap-0 ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
        <div className={`relative h-64 md:h-auto ${reverse ? 'md:col-start-2' : ''}`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        </div>
        <CardContent className={`p-8 flex flex-col justify-center ${reverse ? 'md:col-start-1' : ''}`}>
          <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
          <Button variant="professional" className="self-start">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}