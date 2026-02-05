import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode support, and GitHub Pages deployment.',
    image: '/projects/portfolio.svg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://theprdguy.github.io',
    github: 'https://github.com/theprdguy/portfolio',
  },
  {
    id: '2',
    title: 'DevOS Framework',
    description: 'A multi-LLM vibe-coding operating system for managing SSOT files, contracts, and ticket queues in collaborative AI development.',
    image: '/projects/devos.svg',
    tags: ['Makefile', 'YAML', 'Documentation'],
    github: 'https://github.com/theprdguy/devos',
  },
  {
    id: '3',
    title: 'Sample Project',
    description: 'Add your own projects here! Edit the projects.ts file to customize your portfolio with real project data.',
    image: '/projects/sample.svg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
  },
];
