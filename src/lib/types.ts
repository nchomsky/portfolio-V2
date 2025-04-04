export interface Experience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    skills: string[];
}

export interface Project {
    title: string;
    description: string;
    link: string;
    repoLink?: string; // Optional, in case the repo is private
    technologies: string[];
    imageUrl?: string; // Optional, in case there's no image
    date?: string; // Optional, for project completion date
}