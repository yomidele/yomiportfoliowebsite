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
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Services
          </span>
          <h2 className="heading-lg mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web design services tailored to your needs and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground">
                {service.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-3xl rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
