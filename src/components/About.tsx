import avatar from "@/assets/avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
            <img
              src={avatar}
              alt="Yomi Dele - Web Designer"
              className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Me
            </span>

            <h2 className="heading-lg mb-6">
              Turning Ideas Into
              <span className="text-primary"> Digital Reality</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I help businesses and personal brands create fast, modern websites that convert visitors into customers. With expertise in Webflow, WordPress, and AI-assisted website builders, I deliver solutions that are both beautiful and functional.
              </p>
              <p>
                My approach combines clean design principles with strategic thinking to ensure your website not only looks great but also achieves your business goals.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "3+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">
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
