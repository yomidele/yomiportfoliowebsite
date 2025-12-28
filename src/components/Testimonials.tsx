import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Yomi transformed our outdated website into a modern, professional platform that our clients love. Our inquiries have increased by 40% since launch!",
    name: "Adebayo Johnson",
    role: "CEO, TechVentures Nigeria",
  },
  {
    id: 2,
    quote:
      "Working with Yomi was a breeze. He understood our vision immediately and delivered a website that exceeded our expectations. Highly recommended!",
    name: "Funke Akindele",
    role: "Founder, StyleHub Fashion",
  },
  {
    id: 3,
    quote:
      "The attention to detail and speed of delivery was impressive. Our e-commerce store now converts visitors at twice the previous rate.",
    name: "Chidi Okafor",
    role: "Owner, Savory Kitchen Restaurant",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
