import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Quote, Send, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const reviewSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  role: z.string().trim().max(100, "Role must be less than 100 characters").optional().or(z.literal("")),
  quote: z.string().trim().min(10, "Review must be at least 10 characters").max(1000, "Review must be less than 1000 characters"),
});

interface Review {
  id: string;
  name: string;
  role: string | null;
  quote: string;
  created_at: string;
}

const staticTestimonials = [
  {
    id: "static-1",
    quote: "Yomi transformed our outdated website into a modern, professional platform that our clients love. Our inquiries have increased by 40% since launch!",
    name: "Adebayo Johnson",
    role: "CEO, TechVentures Nigeria",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "static-2",
    quote: "Working with Yomi was a breeze. He understood our vision immediately and delivered a website that exceeded our expectations. Highly recommended!",
    name: "Funke Akindele",
    role: "Founder, StyleHub Fashion",
    created_at: "2024-01-02T00:00:00Z",
  },
  {
    id: "static-3",
    quote: "The attention to detail and speed of delivery was impressive. Our e-commerce store now converts visitors at twice the previous rate.",
    name: "Chidi Okafor",
    role: "Owner, Savory Kitchen Restaurant",
    created_at: "2024-01-03T00:00:00Z",
  },
];

const TestimonialsPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", quote: "" });

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      if (import.meta.env.DEV) console.error("Error fetching reviews:", error);
      return;
    }
    setReviews(data || []);
  };

  useEffect(() => {
    fetchReviews();

    const channel = supabase
      .channel("reviews-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "reviews" }, (payload) => {
        setReviews((prev) => [payload.new as Review, ...prev]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationResult = reviewSchema.safeParse(formData);

    if (!validationResult.success) {
      toast.error(validationResult.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("reviews").insert({
      name: validationResult.data.name,
      role: validationResult.data.role || null,
      quote: validationResult.data.quote,
    });

    if (error) {
      if (import.meta.env.DEV) console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } else {
      toast.success("Thank you for your review!");
      setFormData({ name: "", role: "", quote: "" });
    }
    setIsSubmitting(false);
  };

  const allTestimonials = [...reviews, ...staticTestimonials];

  return (
    <Layout>
      <PageHero
        badge="Testimonials"
        title="What Clients"
        highlight="Say"
        description="Don't just take my word for it. Here's what my clients have to say about working with me."
      />

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group relative bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                {!testimonial.id.startsWith("static-") && (
                  <div className="absolute -top-3 -right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      <Star className="w-3 h-3" />
                      New
                    </span>
                  </div>
                )}

                <div className="absolute -top-4 left-8">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      {testimonial.role && (
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-20 bg-secondary/50">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Share Your Experience
              </span>
              <h2 className="heading-lg mb-4">
                Leave a <span className="text-primary">Review</span>
              </h2>
              <p className="text-muted-foreground">
                Your feedback helps me improve and helps others make informed decisions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name *</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Role/Company</label>
                    <Input
                      placeholder="CEO, Company Name"
                      value={formData.role}
                      onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                      className="bg-background"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Review *</label>
                  <Textarea
                    placeholder="Share your experience working with me..."
                    value={formData.quote}
                    onChange={(e) => setFormData((prev) => ({ ...prev, quote: e.target.value }))}
                    className="bg-background min-h-[150px]"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Review
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="heading-lg mb-4">
              Ready to Join My <span className="text-primary">Happy Clients?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something amazing together.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
