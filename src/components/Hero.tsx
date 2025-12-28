import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Web Designer & Developer
              </span>
            </div>

            <h1 className="heading-xl opacity-0 animate-fade-up animation-delay-100">
              Hi, I'm{" "}
              <span className="text-primary">Yomi Dele</span>
            </h1>

            <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up animation-delay-200 text-balance leading-relaxed">
              I build modern, conversion-focused websites for businesses and creators that turn visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start opacity-0 animate-fade-up animation-delay-300">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToPortfolio}
                className="group"
              >
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:flex justify-center opacity-0 animate-fade-up animation-delay-400">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/5 rounded-full blur-3xl" />
              <img
                src={heroIllustration}
                alt="Web development illustration"
                className="relative w-full max-w-md animate-float"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <span className="text-sm tracking-wide">Scroll to explore</span>
            <div className="w-5 h-8 border border-border rounded-full flex justify-center">
              <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;