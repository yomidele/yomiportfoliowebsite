import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import avatar from "@/assets/yomi.jpg";

const skills = [
  { name: "React & TypeScript", level: 95 },
  { name: "Webflow & WordPress", level: 90 },
  { name: "UI/UX Design", level: 85 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Figma", level: 80 },
  { name: "SEO Optimization", level: 85 },
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Creating visually stunning interfaces that captivate users.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimizing for speed to ensure the best user experience.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Putting your business goals at the center of every decision.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHero
        badge="About Me"
        title="Get to Know"
        highlight="Yomi Dele"
        description="A passionate web designer and developer dedicated to creating exceptional digital experiences."
      />

      {/* Main Content */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative group sticky top-28">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
              <img
                src={avatar}
                alt="Yomi Dele"
                className="relative rounded-xl shadow-lg w-full max-w-md mx-auto object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border border-border">
                <div className="text-3xl font-display font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-6">My Story</h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    I'm a web designer and developer based in Nigeria, specializing in creating modern, 
                    conversion-focused websites for businesses and creators. My journey into web development 
                    started with a simple curiosity about how websites work.
                  </p>
                  <p>
                    Over the years, I've honed my skills in various technologies and platforms, including 
                    React, Webflow, WordPress, and AI-assisted website builders. I believe in the power of 
                    clean design and efficient code to transform ideas into digital reality.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new design trends, learning about the 
                    latest web technologies, or helping fellow developers in online communities.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-border">
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "100%", label: "Client Satisfaction" },
                  { number: "24h", label: "Response Time" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-display font-semibold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Work With Me
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Expertise
            </span>
            <h2 className="heading-lg mb-4">
              Skills & <span className="text-primary">Technologies</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              My Approach
            </span>
            <h2 className="heading-lg mb-4">
              What Drives <span className="text-primary">My Work</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-primary transition-colors">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
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
              Let's Create Something <span className="text-primary">Amazing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to bring your vision to life? I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/portfolio">View My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
