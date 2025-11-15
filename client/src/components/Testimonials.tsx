import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Kumar Textiles",
    content: "Outstanding quality and service! Pranav Enterprises delivered our business cards and brochures on time with exceptional print quality. Highly recommended!",
    rating: 5,
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    business: "Sharma Events",
    content: "They handled all our wedding invitation printing beautifully. The attention to detail and customer service was excellent. Will definitely use again!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Amit Patel",
    business: "Patel Motors",
    content: "Great experience with their flex printing service. The outdoor banners came out vibrant and weather-resistant. Perfect for our showroom!",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Sneha Desai",
    business: "Desai Sweets",
    content: "Professional team and competitive pricing. Our menu cards and packaging materials are always printed to perfection. Thank you!",
    rating: 5,
    initials: "SD",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses across Mudhol and beyond for quality printing services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
