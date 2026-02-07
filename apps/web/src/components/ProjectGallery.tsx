import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

interface ProjectGalleryProps {
  projects: Project[];
}

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <section id="projects" className="py-16 md:py-24" aria-label="Selected projects">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-16">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-4">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-foreground mb-6">
              Projects
            </h2>
            <div className="w-[60px] h-px bg-accent" />
          </div>
        </ScrollReveal>

        {projects.length === 0 ? (
          <p className="text-muted font-sans font-light">No projects yet.</p>
        ) : (
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
