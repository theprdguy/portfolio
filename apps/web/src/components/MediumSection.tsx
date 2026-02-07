import { Article } from "@/types";
import MediumCard from "./MediumCard";
import ScrollReveal from "./ScrollReveal";

interface MediumSectionProps {
  articles: Article[];
}

export default function MediumSection({ articles }: MediumSectionProps) {
  return (
    <section id="articles" className="py-16 md:py-24" aria-label="Articles and writings">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-border mb-16" />

        <ScrollReveal>
          <div className="mb-12">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Writings
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
              Articles
            </h2>
            <div className="w-[60px] h-px bg-accent" />
          </div>
        </ScrollReveal>

        {articles.length === 0 ? (
          <p className="text-muted font-sans font-light">No articles yet.</p>
        ) : (
          <div>
            {articles.map((article, index) => (
              <MediumCard key={article.id} article={article} index={index} />
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://medium.com/@theprdguy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-xs uppercase tracking-[0.3em] text-accent hover:text-foreground transition-colors duration-300"
            aria-label="View all articles on Medium"
          >
            View all on Medium &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
