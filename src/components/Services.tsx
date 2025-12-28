import { Globe, Layout, ShoppingCart, Briefcase } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional websites that establish credibility and drive business growth with clear messaging and calls-to-action.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "High-converting landing pages designed to capture leads and maximize your marketing campaign ROI.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sites",
    description:
      "Online stores with seamless shopping experiences, secure payments, and inventory management.",
  },
  {
    icon: Globe,
    title: "Portfolio Sites",
    description:
      "Stunning portfolio websites that showcase your work and help you stand out from the competition.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-28 bg-secondary/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Services
          </span>
          <h2 className="heading-lg mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web design services tailored to your needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
