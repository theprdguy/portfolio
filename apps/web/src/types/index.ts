export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  image?: string;
}
