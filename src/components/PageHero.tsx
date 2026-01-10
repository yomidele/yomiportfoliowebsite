interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const PageHero = ({ badge, title, highlight, description }: PageHeroProps) => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-up">
              {badge}
            </span>
          )}
          <h1 className="heading-xl mb-6 animate-fade-up animation-delay-100">
            {title}
            {highlight && <span className="text-primary"> {highlight}</span>}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up animation-delay-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
