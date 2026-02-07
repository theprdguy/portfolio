import { Project } from "@/types";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const isEven = index % 2 === 1;

  return (
    <ScrollReveal delay={index * 100}>
      <article
        className={`flex flex-col md:flex-row gap-8 md:gap-12 ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="group relative w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden bg-[#EEECE9]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="font-serif text-6xl lg:text-7xl text-accent/30 leading-none mb-4">
            {number}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-[28px] text-foreground mb-4">
            {project.title}
          </h3>
          <p className="font-sans text-sm sm:text-base font-light text-muted leading-[1.7] mb-6">
            {project.description}
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {project.tags.join(" / ")}
          </p>
          <div className="flex gap-6">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-accent hover:text-foreground transition-colors duration-300"
                aria-label={`View ${project.title} project`}
              >
                View Project &rarr;
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-sm text-accent hover:text-foreground transition-colors duration-300"
                aria-label={`View ${project.title} source code`}
              >
                View Code &rarr;
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}
