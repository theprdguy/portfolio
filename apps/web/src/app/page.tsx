import Hero from "@/components/Hero";
import ProjectGallery from "@/components/ProjectGallery";
import MediumSection from "@/components/MediumSection";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGallery projects={projects} />
      <MediumSection articles={articles} />
    </>
  );
}
