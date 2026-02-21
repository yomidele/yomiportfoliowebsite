import { Link } from "react-router-dom";
import { Globe, Layout, ShoppingCart, Briefcase, ArrowRight, Check, Rocket, HeartHandshake, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutWrapper from "@/components/Layout";
import PageHero from "@/components/PageHero";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional websites that establish credibility and drive business growth with clear messaging and calls-to-action.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts",
      "SEO optimization",
      "Contact forms and lead capture",
      "Analytics integration",
    ],
    price: "From ₦150,000+",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and maximize your marketing campaign ROI.",
    features: [
      "Conversion-focused design",
      "A/B testing ready",
      "Fast loading speeds",
      "Integration with email tools",
      "Clear call-to-action",
    ],
    price: "From ₦80,000+",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description: "Online stores with seamless shopping experiences, secure payments, and inventory management.",
    features: [
      "Product catalog setup",
      "Secure payment integration",
      "Inventory management",
      "Order tracking",
      "Customer accounts",
    ],
    price: "From ₦250,000+",
  },
  {
    icon: Globe,
    title: "Portfolio Sites",
    description: "Stunning portfolio websites that showcase your work and help you stand out from the competition.",
    features: [
      "Visual gallery layouts",
      "Project case studies",
      "Testimonial sections",
      "Contact integration",
      "Social media links",
    ],
    price: "From ₦100,000+",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We discuss your goals, target audience, and vision for the project.",
  },
  {
    step: "02",
    title: "Design",
    description: "I create wireframes and mockups for your approval before development.",
  },
  {
    step: "03",
    title: "Development",
    description: "Your website is built with clean code and optimized for performance.",
  },
  {
    step: "04",
    title: "Launch",
    description: "After testing, your site goes live and I provide ongoing support.",
  },
];

const whyChooseMe = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Most projects completed within 1-2 weeks.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Focused",
    description: "Your satisfaction is my top priority.",
  },
  {
    icon: Clock,
    title: "Ongoing Support",
    description: "Free support for 30 days after launch.",
  },
];

const ServicesPage = () => {
  return (
    <LayoutWrapper>
      <PageHero
        badge="Services"
        title="What I"
        highlight="Offer"
        description="Comprehensive web design services tailored to your needs and goals."
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium text-sm">{service.price}</p>
                    <p className="text-muted-foreground text-xs">*Final price may vary based on project scope</p>
                  </div>
                </div>
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

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              My Process
            </span>
            <h2 className="heading-lg">
              How I <span className="text-primary">Work</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-display font-bold text-primary">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Why Work With Me
              </span>
              <h2 className="heading-lg mb-6">
                Your Success is <span className="text-primary">My Priority</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm committed to delivering exceptional results that exceed your expectations. 
                From the first consultation to post-launch support, I'm with you every step of the way.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              {whyChooseMe.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-5 bg-card p-6 rounded-xl border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">
              Ready to Get <span className="text-primary">Started?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/portfolio">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default ServicesPage;
