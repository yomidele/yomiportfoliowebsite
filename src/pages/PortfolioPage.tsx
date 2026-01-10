import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import projectMera from "@/assets/project-mera.png";
import projectRoastedRice from "@/assets/project-roastedrice.png";
import projectSimiAesthetic from "@/assets/project-simiaesthetic.png";
import projectJustGogo from "@/assets/project-justgogo.png";

const categories = ["All", "Web Apps", "E-commerce", "Restaurants", "Portfolio"];

const projects = [
  {
    id: 1,
    title: "Mera",
    description: "Social media platform for sharing moments and connecting with friends worldwide.",
    tech: "Lovable, React",
    category: "Web Apps",
    image: projectMera,
    link: "https://mera1.lovable.app",
  },
  {
    id: 2,
    title: "Roasted Rice NG",
    description: "Lagos-style smokey jollof rice and shawarma restaurant with online ordering.",
    tech: "React, Vercel",
    category: "Restaurants",
    image: projectRoastedRice,
    link: "https://roastedriceng.vercel.app/",
  },
  {
    id: 3,
    title: "Simi Aesthetic",
    description: "Premium lash extensions, brows, and tattoo services beauty studio in Lagos.",
    tech: "React, Vercel",
    category: "Portfolio",
    image: projectSimiAesthetic,
    link: "https://simiaestheticx.vercel.app/",
  },
  {
    id: 4,
    title: "JustGoGolicious",
    description: "African food delivery and catering service with delicious traditional dishes.",
    tech: "Web Development",
    category: "Restaurants",
    image: projectJustGogo,
    link: "https://bit.ly/justgogolicious",
  },
  {
    id: 5,
    title: "FlowFlask SaaS",
    description: "Modern SaaS landing page with animations and lead generation forms.",
    tech: "Lovable, React",
    category: "Web Apps",
    image: project1,
    link: "https://flow-flask.lovable.app",
  },
  {
    id: 6,
    title: "Urban Edge Clothing",
    description: "E-commerce fashion store with seamless checkout experience.",
    tech: "Lovable, React",
    category: "E-commerce",
    image: project2,
    link: "https://style-refinery-demo.lovable.app",
  },
  {
    id: 7,
    title: "Royal Trims",
    description: "Professional barbing salon website with sleek design.",
    tech: "Lovable, React",
    category: "Portfolio",
    image: project3,
    link: "https://yomideledemo2.lovable.app",
  },
  {
    id: 8,
    title: "WebDev Insight",
    description: "Web development blog and resource hub with modern design.",
    tech: "Lovable, React",
    category: "Web Apps",
    image: project4,
    link: "https://webdevdemo.lovable.app",
  },
  {
    id: 9,
    title: "Dele's Kitchen",
    description: "Restaurant website with online menu and reservation system.",
    tech: "Lovable, React",
    category: "Restaurants",
    image: project5,
    link: "https://deleskitchen.lovable.app",
  },
  {
    id: 10,
    title: "Dele's Reality Hub",
    description: "Real estate platform with property listings and search.",
    tech: "Lovable, React",
    category: "Web Apps",
    image: project6,
    link: "https://delereality.lovable.app",
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <PageHero
        badge="Portfolio"
        title="My Creative"
        highlight="Work"
        description="A curated collection of websites I've designed and developed for clients and demo projects."
      />

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/80 backdrop-blur-lg z-40">
        <div className="section-container">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-xl ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[21/9]" : "aspect-video"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Live
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{project.tech}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">
              Have a Project in <span className="text-primary">Mind?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how I can help bring your vision to life.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
