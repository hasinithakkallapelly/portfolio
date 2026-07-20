import { writable } from 'svelte/store';
import type { ProjectData } from '../types/projectType';

const initialProjects: ProjectData[] = [
  {
    id: 'aadhaar-parser',
    name: 'Aadhaar Parser',
    icon: 'go',
    shortDescription: 'A tool that parses and extracts data from Aadhaar documents.',
    readmeUrl: 'https://raw.githubusercontent.com/hasinithakkallapelly/aadhaar-parser-Vyre/main/README.md',
    technologies: ['Python'],
    githubUrl:'https://github.com/hasinithakkallapelly/aadhaar-parser-Vyre',
    type: 'application'
  },
];

export const projects = writable<ProjectData[]>(initialProjects);