import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Printer, Zap, Grid3x3 } from "lucide-react";
import offsetImage from "@assets/generated_images/Offset_printing_service_aa173642.png";
import digitalImage from "@assets/generated_images/Digital_printing_service_6e77e433.png";
import flexImage from "@assets/generated_images/Flex_printing_service_a3f8a7e6.png";

const services = [
  {
    title: "Offset Printing",
    icon: Printer,
    description: "High-volume, cost-effective printing with exceptional color accuracy and consistency for all your commercial needs.",
    image: offsetImage,
  },
  {
    title: "Digital Printing",
    icon: Zap,
    description: "Fast turnaround for short-run projects with vivid colors and sharp details. Perfect for personalized materials.",
    image: digitalImage,
  },
  {
    title: "Flex Printing",
    icon: Grid3x3,
    description: "Large format printing for banners, signage, and outdoor advertising with weather-resistant, vibrant results.",
    image: flexImage,
  },
];

export default function Services() {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printing solutions designed to meet all your business and personal needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <CardHeader className="space-y-4">
                  <div
                    className="w-full h-48 bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={scrollToContact}
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
