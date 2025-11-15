import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import businessCardsImg from "@assets/generated_images/Business_cards_portfolio_52375b6c.png";
import brochuresImg from "@assets/generated_images/Brochures_portfolio_sample_b4690d23.png";
import bannerImg from "@assets/generated_images/Banner_portfolio_sample_3769e669.png";
import weddingImg from "@assets/generated_images/Wedding_invitations_portfolio_44293b59.png";
import packagingImg from "@assets/generated_images/Packaging_portfolio_sample_e4d40dcc.png";
import menuImg from "@assets/generated_images/Menu_printing_portfolio_b14f7e89.png";

const portfolioItems = [
  { id: 1, title: "Business Cards", category: "Business Cards", image: businessCardsImg },
  { id: 2, title: "Marketing Brochures", category: "Brochures", image: brochuresImg },
  { id: 3, title: "Outdoor Banner", category: "Banners", image: bannerImg },
  { id: 4, title: "Wedding Invitations", category: "Invitations", image: weddingImg },
  { id: 5, title: "Product Packaging", category: "Packaging", image: packagingImg },
  { id: 6, title: "Restaurant Menus", category: "Menus", image: menuImg },
];

const categories = ["All", "Business Cards", "Brochures", "Banners", "Invitations", "Packaging", "Menus"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of printing projects showcasing quality and creativity
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              className="cursor-pointer px-4 py-2 hover-elevate"
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`portfolio-item-${item.id}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" data-testid="button-view-all">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  );
}
