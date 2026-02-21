import { Link } from "react-router-dom";
import { Instagram, PenTool, Palette, ArrowRight, Check, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutWrapper from "@/components/Layout";
import PageHero from "@/components/PageHero";

const socialServices = [
  {
    icon: Instagram,
    title: "Social Media Management",
    description: "Strategic social media management to grow your brand's online presence and engage your audience effectively.",
    features: [
      "Content planning & scheduling",
      "Community management",
      "Analytics & reporting",
      "Platform strategy",
      "Audience growth tactics",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "High-quality content that tells your brand story and resonates with your target audience.",
    features: [
      "Copywriting & captions",
      "Blog posts & articles",
      "Video scripts",
      "Brand storytelling",
      "SEO-optimized content",
    ],
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description: "Eye-catching visual designs that strengthen your brand identity across all platforms.",
    features: [
      "Social media graphics",
      "Brand identity design",
      "Flyers & banners",
      "Logo design",
      "Marketing materials",
    ],
  },
];

const SocialMediaPage = () => {
  return (
    <LayoutWrapper>
      <PageHero
        badge="Social Media Services"
        title="Grow Your Brand"
        highlight="Online"
        description="Social media management, content creation, and graphic design to elevate your digital presence."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8">
            {socialServices.map((service) => (
              <div
                key={service.title}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="heading-lg mb-4">
              Book via <span className="text-primary">WhatsApp</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              WhatsApp booking is coming soon! In the meantime, reach out through the contact page to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" disabled className="opacity-60 cursor-not-allowed">
                <MessageCircle className="mr-2 w-5 h-5" />
                Book on WhatsApp — Coming Soon
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  Contact Me Instead
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">
              Why Work <span className="text-primary">With Me?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I combine creativity with strategy to deliver results that matter for your brand.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/services">
                View Web Development Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default SocialMediaPage;
