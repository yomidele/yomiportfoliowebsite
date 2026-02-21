import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Briefcase, Layout, ShoppingCart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LayoutWrapper from "@/components/Layout";
import heroIllustration from "@/assets/hero-illustration.png";
import avatar from "@/assets/gallery.jpg";
import projectMera from "@/assets/project-mera.png";
import projectRoastedRice from "@/assets/project-roastedrice.png";
import projectSimiAesthetic from "@/assets/project-simiaesthetic.png";
import projectEnjoyLifeTrips from "@/assets/project-enjoylifetrips.png";
import projectAmanaMarkets from "@/assets/project-amanamarkets.png";

const featuredProjects = [
  {
    id: 1,
    title: "Enjoy Life Trips",
    description: "Travel booking platform for exciting trips and adventures across Africa.",
    tech: "Lovable, React",
    image: projectEnjoyLifeTrips,
    link: "https://www.enjoylifetrips.site",
  },
  {
    id: 2,
    title: "Amana Markets",
    description: "Financial services platform for savings groups, contributions, and loan access.",
    tech: "Lovable, React",
    image: projectAmanaMarkets,
    link: "https://www.amanamarkets.org",
  },
  {
    id: 3,
    title: "Mera",
    description: "Social media platform for sharing moments and connecting with friends worldwide.",
    tech: "Lovable, React",
    image: projectMera,
    link: "https://mera1.lovable.app",
  },
  {
    id: 4,
    title: "Roasted Rice NG",
    description: "Lagos-style smokey jollof rice and shawarma restaurant with online ordering.",
    tech: "React, Vercel",
    image: projectRoastedRice,
    link: "https://roastedriceng.vercel.app/",
  },
  {
    id: 5,
    title: "Simi Aesthetic",
    description: "Premium lash extensions, brows, and tattoo services beauty studio.",
    tech: "React, Vercel",
    image: projectSimiAesthetic,
    link: "https://simiaestheticx.vercel.app/",
  },
];

const services = [
  { icon: Briefcase, title: "Business Websites", description: "Professional websites that establish credibility." },
  { icon: Layout, title: "Landing Pages", description: "High-converting pages for marketing campaigns." },
  { icon: ShoppingCart, title: "E-commerce", description: "Online stores with seamless checkout." },
  { icon: Globe, title: "Portfolio Sites", description: "Showcase your work beautifully." },
];

const Index = () => {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

        <div className="section-container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="opacity-0 animate-fade-up">
                <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                  Web Designer & Developer
                </span>
              </div>

              <h1 className="heading-xl opacity-0 animate-fade-up animation-delay-100">
                Hi, I'm <span className="text-primary">Yomi Dele</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-up animation-delay-200 text-balance leading-relaxed">
                I build modern, conversion-focused websites for businesses and creators that turn visitors into customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start opacity-0 animate-fade-up animation-delay-300">
                <Button variant="hero" size="lg" asChild className="group">
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

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
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-500">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
              <img
                src={avatar}
                alt="Yomi Dele"
                className="relative rounded-xl shadow-lg w-full max-w-sm mx-auto object-cover aspect-square"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                About Me
              </span>
              <h2 className="heading-lg mb-6">
                Turning Ideas Into <span className="text-primary">Digital Reality</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I help businesses and personal brands create fast, modern websites that convert visitors into customers. With expertise in Webflow, WordPress, and AI-assisted website builders.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: "50+", label: "Projects" },
                  { number: "3+", label: "Years" },
                  { number: "100%", label: "Satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-display font-semibold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button variant="hero" asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Portfolio
              </span>
              <h2 className="heading-lg">
                Featured <span className="text-primary">Projects</span>
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary mb-2 tracking-wide uppercase">
                    {project.tech}
                  </div>
                  <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="section-container">
          <div className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Services
            </span>
            <h2 className="heading-lg mb-4">
              What I <span className="text-primary">Offer</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="group bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-12 md:p-16 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="heading-lg mb-4">
                Ready to Start Your <span className="text-primary">Project?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's work together to create something amazing. Get in touch and let's discuss your ideas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/testimonials">Read Testimonials</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};

export default Index;
