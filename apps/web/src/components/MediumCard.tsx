import { Article } from "@/types";
import ScrollReveal from "./ScrollReveal";

interface MediumCardProps {
  article: Article;
  index: number;
}

export default function MediumCard({ article, index }: MediumCardProps) {
  const date = new Date(article.publishedAt);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
  const isoDate = date.toISOString().split("T")[0];

  return (
    <ScrollReveal delay={index * 100}>
      <article className="group py-8 border-b border-border">
        <time
          dateTime={isoDate}
          className="block font-sans text-xs uppercase tracking-[0.2em] text-accent mb-3"
        >
          {formattedDate}
        </time>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Read "${article.title}" on Medium`}
        >
          <h3 className="font-serif text-xl sm:text-2xl text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
            {article.title}
          </h3>
        </a>
        <p className="font-sans text-sm sm:text-base font-light text-muted leading-[1.7] mb-4">
          {article.description}
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm text-accent hover:text-foreground transition-colors duration-300"
        >
          Read on Medium &rarr;
        </a>
      </article>
    </ScrollReveal>
  );
}
