import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export function LatestNews() {
  const newsItems = [
    {
      title: "BP Oil Spill – The Monumental Job (Revisited)",
      date: "Jul 2, 2015",
      excerpt: "Examining the forensic accounting challenges and complexities involved in one of the largest environmental disasters in US history."
    },
    {
      title: "Forensic Accounting and Financial Crime: Defined",
      date: "Jun 15, 2015",
      excerpt: "Understanding the critical role of forensic accounting in detecting, investigating, and preventing financial crimes in modern business."
    },
    {
      title: "Aplin Peer & Associates 10th Annual Golf Tournament",
      date: "May 20, 2015",
      excerpt: "Celebrating our partnership and community involvement through professional networking and charitable contributions."
    },
    {
      title: "IRS is Open for Business",
      date: "Apr 8, 2015",
      excerpt: "Important updates on IRS operations and what it means for your tax planning and compliance strategies."
    },
    {
      title: "Mortgage Debt Forgiveness Act Extended",
      date: "Mar 12, 2015",
      excerpt: "Key implications of the act extension for homeowners and how it affects your tax obligations and financial planning."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed with our latest updates on industry trends, regulatory changes, 
            and professional insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.slice(0, 3).map((item, index) => (
            <Card key={item.title} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-xl font-semibold leading-tight hover:text-primary transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary font-medium hover:text-primary-accent">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">More Recent Updates</h3>
          <div className="space-y-4">
            {newsItems.slice(3).map((item, index) => (
              <div key={item.title} className="flex items-start space-x-4 py-4 border-b border-border last:border-b-0 animate-slide-in" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}