export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: {
    url: string;
    caption?: string;
  }[];
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  gradient: string;
}

export type ProjectCategory = Project['category'];

export const projectCategories: { value: ProjectCategory; label: string }[] = [
  { value: 'frontend', label: 'Front-end' },
  { value: 'backend', label: 'Back-end' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'mobile', label: 'Mobile' },
];
