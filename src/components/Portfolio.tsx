import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS",
    description: "Modern SaaS landing page with animations and lead generation forms.",
    tech: "Webflow, GSAP",
    image: project1,
    link: "#",
  },
  {
    id: 2,
    title: "StyleHaven Store",
    description: "E-commerce fashion store with seamless checkout experience.",
    tech: "WordPress, WooCommerce",
    image: project2,
    link: "#",
  },
  {
    id: 3,
    title: "Royal Trims",
    description: "Professional barbing salon website with sleek design.",
    tech: "Lovable, React",
    image: project3,
    link: "https://yomideledemo2.lovable.app",
  },
  {
    id: 4,
    title: "CloudSync App",
    description: "Tech startup landing page with modern gradient design.",
    tech: "Framer, React",
    image: project4,
    link: "#",
  },
  {
    id: 5,
    title: "Savory Kitchen",
    description: "Restaurant website with online menu and reservation system.",
    tech: "Webflow, Airtable",
    image: project5,
    link: "#",
  },
  {
    id: 6,
    title: "HomeQuest Realty",
    description: "Real estate platform with property listings and search.",
    tech: "WordPress, Custom Theme",
    image: project6,
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="heading-lg mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of websites I've designed and built for clients across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <Button variant="hero" size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-medium text-primary mb-2">
                  {project.tech}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
