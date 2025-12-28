import avatar from "@/assets/avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-28 bg-secondary/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500" />
            <img
              src={avatar}
              alt="Yomi Dele - Web Designer"
              className="relative rounded-xl shadow-lg w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              About Me
            </span>

            <h2 className="heading-lg mb-8">
              Turning Ideas Into
              <span className="text-primary"> Digital Reality</span>
            </h2>

            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I help businesses and personal brands create fast, modern websites that convert visitors into customers. With expertise in Webflow, WordPress, and AI-assisted website builders, I deliver solutions that are both beautiful and functional.
              </p>
              <p>
                My approach combines clean design principles with strategic thinking to ensure your website not only looks great but also achieves your business goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl font-display font-semibold text-primary">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
