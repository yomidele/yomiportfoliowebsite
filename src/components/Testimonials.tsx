import { useState, useEffect } from "react";
import { Quote, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

// Validation schema with strict length limits
const reviewSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  role: z.string()
    .trim()
    .max(100, "Role must be less than 100 characters")
    .optional()
    .or(z.literal("")),
  quote: z.string()
    .trim()
    .min(10, "Review must be at least 10 characters")
    .max(1000, "Review must be less than 1000 characters"),
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
    quote:
      "Yomi transformed our outdated website into a modern, professional platform that our clients love. Our inquiries have increased by 40% since launch!",
    name: "Adebayo Johnson",
    role: "CEO, TechVentures Nigeria",
    created_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "static-2",
    quote:
      "Working with Yomi was a breeze. He understood our vision immediately and delivered a website that exceeded our expectations. Highly recommended!",
    name: "Funke Akindele",
    role: "Founder, StyleHub Fashion",
    created_at: "2024-01-02T00:00:00Z",
  },
  {
    id: "static-3",
    quote:
      "The attention to detail and speed of delivery was impressive. Our e-commerce store now converts visitors at twice the previous rate.",
    name: "Chidi Okafor",
    role: "Owner, Savory Kitchen Restaurant",
    created_at: "2024-01-03T00:00:00Z",
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    quote: "",
  });

  // Fetch reviews from database
  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      // Only log errors in development mode to prevent information leakage
      if (import.meta.env.DEV) {
        console.error("Error fetching reviews:", error);
      }
      return;
    }

    setReviews(data || []);
  };

  useEffect(() => {
    fetchReviews();

    // Set up realtime subscription
    const channel = supabase
      .channel("reviews-changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "reviews",
        },
        (payload) => {
          setReviews((prev) => [payload.new as Review, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data using zod schema
    const validationResult = reviewSchema.safeParse(formData);
    
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0];
      toast.error(firstError.message);
      return;
    }

    const validatedData = validationResult.data;
    setIsSubmitting(true);

    const { error } = await supabase.from("reviews").insert({
      name: validatedData.name,
      role: validatedData.role || null,
      quote: validatedData.quote,
    });

    if (error) {
      // Only log errors in development mode to prevent information leakage
      if (import.meta.env.DEV) {
        console.error("Error submitting review:", error);
      }
      toast.error("Failed to submit review. Please try again.");
    } else {
      toast.success("Thank you for your review!");
      setFormData({ name: "", role: "", quote: "" });
    }

    setIsSubmitting(false);
  };

  // Combine database reviews (new ones first) with static testimonials
  const allTestimonials = [...reviews, ...staticTestimonials];

  return (
    <section id="testimonials" className="py-28">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="heading-lg mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say.
          </p>
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-display font-semibold mb-6 text-center">
              Share Your Experience
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="bg-background"
                />
                <Input
                  placeholder="Your Role/Company (optional)"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, role: e.target.value }))
                  }
                  className="bg-background"
                />
              </div>
              <Textarea
                placeholder="Write your review... *"
                value={formData.quote}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, quote: e.target.value }))
                }
                className="bg-background min-h-[120px]"
              />
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Review
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative bg-card p-8 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* New badge for database reviews */}
              {!testimonial.id.startsWith("static-") && (
                <div className="absolute -top-2 -right-2">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Star className="w-3 h-3" />
                    New
                  </span>
                </div>
              )}

              {/* Quote icon */}
              <div className="absolute -top-3 left-8">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              <div className="mt-4">
                <p className="text-muted-foreground italic mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    {testimonial.role && (
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    )}
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
