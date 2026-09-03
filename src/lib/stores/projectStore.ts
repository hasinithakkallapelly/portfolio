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
  {
    id: 'interview-face-recognition',
    name: 'Interview Proctoring System',
    icon: 'go',
    shortDescription: 'Real-time CV prototype that monitors interviews for face presence, identity, and prohibited objects.',
    readmeUrl: 'https://raw.githubusercontent.com/hasinithakkallapelly/interview-face-recognition-Vyre/main/README.md',
    technologies: ['Python'],
    githubUrl: 'https://github.com/hasinithakkallapelly/interview-face-recognition-Vyre',
    type: 'application'
  },
  {
    id: 'mock-interview-system',
    name: 'Real-Time Conversational AI Interviewer',
    icon: 'go',
    shortDescription: 'Voice-based interview prototype using Whisper transcription, an LLM evaluator, and local TTS.',
    readmeUrl: 'https://raw.githubusercontent.com/hasinithakkallapelly/mock-interview-system-Vyre/main/README.md',
    technologies: ['Python'],
    githubUrl: 'https://github.com/hasinithakkallapelly/mock-interview-system-Vyre',
    type: 'application'
  },
  {
    id: 'predictive-maintenance-lstm',
    name: 'Predictive Maintenance for Ball Bearings',
    icon: 'go',
    shortDescription: 'LSTM-based vibration forecasting system using an Arduino + ADXL345 accelerometer. Sangam 2025 finalist.',
    readmeUrl: 'https://raw.githubusercontent.com/hasinithakkallapelly/predictive-maintenance-lstm/main/README.md',
    technologies: ['Python'],
    githubUrl: 'https://github.com/hasinithakkallapelly/predictive-maintenance-lstm',
    type: 'application'
  },
  {
    id: 'browser-from-terminal',
    name: 'Browser from Terminal',
    icon: 'go',
    shortDescription: 'CLI tool that opens filtered Google searches in Safari directly from the terminal.',
    readmeUrl: 'https://raw.githubusercontent.com/hasinithakkallapelly/browser_from_terminal/main/README.md',
    technologies: ['Python'],
    githubUrl: 'https://github.com/hasinithakkallapelly/browser_from_terminal',
    type: 'tool'
  },
];

export const projects = writable<ProjectData[]>(initialProjects);