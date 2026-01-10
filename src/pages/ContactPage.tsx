import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Send, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "yomidele2120@gmail.com", href: "mailto:yomidele2120@gmail.com" },
    { icon: Phone, label: "Phone", value: "07037874377", href: "tel:+2347037874377" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/2347037874377" },
    { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: "#" },
  ];

  return (
    <Layout>
      <PageHero
        badge="Contact"
        title="Let's Build Something"
        highlight="Amazing"
        description="Have a project in mind? I'd love to hear about it. Get in touch and let's discuss."
      />

      {/* Contact Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="heading-md mb-4">Get In Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to start your project? Send me a message and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div>
                      <div className="font-medium group-hover:text-primary transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Response Time</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  I typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-sm">
                <h3 className="text-xl font-display font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Common Questions
            </span>
            <h2 className="heading-lg mb-8">
              Frequently <span className="text-primary">Asked</span>
            </h2>

            <div className="text-left space-y-6">
              {[
                {
                  q: "How long does a typical project take?",
                  a: "Most projects are completed within 1-3 weeks, depending on complexity and requirements.",
                },
                {
                  q: "What information do you need to get started?",
                  a: "I'll need details about your business, goals, target audience, preferred style, and any specific features you want.",
                },
                {
                  q: "Do you offer ongoing support after launch?",
                  a: "Yes! I provide 30 days of free support after launch, with optional ongoing maintenance packages.",
                },
              ].map((faq) => (
                <div key={faq.q} className="bg-card p-6 rounded-xl border border-border">
                  <h4 className="font-semibold mb-2">{faq.q}</h4>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">
              Not Ready to Start? <span className="text-primary">No Problem</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Check out my portfolio to see my previous work, or read what clients say about me.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/testimonials">Read Testimonials</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
