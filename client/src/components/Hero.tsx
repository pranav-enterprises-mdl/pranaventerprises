import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_printing_press_facility_146d9273.png";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <Badge
          variant="secondary"
          className="mb-6 backdrop-blur-md bg-white/10 border-white/20 text-white"
          data-testid="badge-location"
        >
          <MapPin className="h-3 w-3 mr-1" />
          Serving Mudhol, Karnataka
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Creativity and Precision
          <br />
          <span className="text-primary">Under One Roof</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          High-quality offset, digital, and flex printing solutions tailored to bring your vision to life
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("#contact")}
            className="backdrop-blur-md bg-primary hover:bg-primary/90 border border-primary-border"
            data-testid="button-request-quote"
          >
            Request Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("#portfolio")}
            className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20"
            data-testid="button-view-portfolio"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
