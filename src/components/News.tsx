import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const News = () => {
  const news = [
    {
      date: "Nov 15, 2025",
      category: "Market Insights",
      title: "Navigating Q4 2025: Key Investment Strategies",
      excerpt: "Expert analysis on market trends and opportunities for the final quarter of 2025.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    },
    {
      date: "Nov 10, 2025",
      category: "Company News",
      title: "Smart Investment Solutions Expands Services to New Cities",
      excerpt: "We're thrilled to announce our expansion to Mumbai, Delhi, and Bangalore.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      date: "Nov 5, 2025",
      category: "Financial Planning",
      title: "Tax Saving Strategies for 2025-26",
      excerpt: "Maximize your savings with these expert tax planning tips before year-end.",
      image: "https://images.unsplash.com/photo-1554224311-beee460c201f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="news" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              News & Updates
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            Stay informed with our latest insights, market updates, and company news.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-foreground/60 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <p className="text-foreground/70 mb-4">{item.excerpt}</p>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto hover:bg-transparent hover:text-primary"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground hover:border-primary">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;
