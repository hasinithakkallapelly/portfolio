export interface wType {
    id: string;
    type: "terminal" | "safari" | "photos" | "projects" | "github" | "contact";
    minimized: boolean;
    maximized: boolean;
    position: { x: number; y: number };
    size: { width: number; height: number };
    zIndex: number;
  }