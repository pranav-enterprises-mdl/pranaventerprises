import { Check } from "lucide-react";
import facilityImage from "@assets/generated_images/Offset_printing_service_aa173642.png";

const benefits = [
  {
    title: "All Services Under One Roof",
    description: "From offset to digital to flex printing, we handle every printing need without outsourcing.",
  },
  {
    title: "Latest Printing Technology",
    description: "State-of-the-art equipment ensures the highest quality output for all your projects.",
  },
  {
    title: "Fast Turnaround Times",
    description: "Quick delivery without compromising on quality. We value your time and deadlines.",
  },
  {
    title: "Competitive Pricing",
    description: "Affordable rates with transparent pricing and no hidden costs for all our services.",
  },
  {
    title: "Quality Guaranteed",
    description: "Every project undergoes strict quality control to ensure exceptional results every time.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div
              className="w-full h-96 lg:h-full rounded-lg bg-cover bg-center shadow-lg"
              style={{ backgroundImage: `url(${facilityImage})` }}
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the difference of working with a printing partner that combines expertise, technology, and dedication to deliver outstanding results.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4" data-testid={`benefit-${index}`}>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
