export interface Project {
  title: string;
  company?: string;
  duration?: string;

  description: string;
  overview?: string;

  responsibilities?: string[];
  technologies: string[];

  gifs?: string[];

  image?: string;
  video?: string; 
  youtubeId?: string;  

  github?: string;
  demo?: string;

  featured?: boolean;
}