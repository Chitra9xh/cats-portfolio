// ─────────────────────────────────────────────────────────────
// PROJECTS DATA — this is the ONLY file you edit to add/update/
// remove a project. The Projects page (src/app/projects/page.tsx)
// just maps over this array — no page code changes needed.
//
// To add a project: copy an existing object below, edit the
// fields, done. Order in this array = display order on the page.
//
// `link` is optional. Leave it `null` until a project has a live
// demo/repo — the page already knows how to render both states
// (no dead links ship either way).
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = "completed" | "in-development" | "selected";

export interface Project {
  name: string;
  tagline: string; // short one-line description
  description: string; // longer description, 1–3 sentences
  techStack: string[];
  status: ProjectStatus;
  statusLabel?: string; // optional override, e.g. "Selected — SIH 2025"
  link?: string | null; // live demo / repo URL, or null if none yet
}

export const projects: Project[] = [
  {
    name: "NCERT AR — Interactive 3D Study Companion",
    tagline: "Augmented reality study tool for NCERT textbook diagrams",
    description:
      "Educational AR app that augments NCERT diagrams with interactive 3D models via image-target and plane-tracking, with rotation, zoom, multi-model placement, and an in-app AR physics calculator.",
    techStack: ["Unity3D", "C#", "Vuforia", "AR Core", "3D Modeling"],
    status: "completed",
    statusLabel: "Won 2 national exhibitions",
    link: null,
  },
  {
    name: "WebAR ID Card",
    tagline: "QR-to-AR identity reveal, no app install required",
    description:
      "Browser-based AR experience that displays contextual web AR content when a physical ID's QR code is scanned, delivering cross-platform AR without a native app.",
    techStack: ["WebXR", "JavaScript", "8th Wall", "QR Integration"],
    status: "completed",
    link: null,
  },
  {
    name: "AR Distance Calculator",
    tagline: "Real-world distance measurement in AR",
    description:
      "Utility AR app that calculates real-world distance between two user-marked points in physical space using plane tracking.",
    techStack: ["Unity3D", "C#", "AR Core", "Plane Tracking"],
    status: "completed",
    link: null,
  },
  {
    name: "VR Escape Room",
    tagline: "Immersive multi-room VR puzzle experience",
    description:
      "VR escape room with multiple maze environments and embedded puzzles, built end-to-end including level and 3D environment design.",
    techStack: ["Unity VR", "C#", "Unity XR Plugin", "Level Design"],
    status: "completed",
    link: null,
  },
  {
    name: "DharohAR — Heritage Exploration in AR",
    tagline: "AR reconstructions of historical monuments",
    description:
      "AR app overlaying 3D historical monument reconstructions onto real environments, using chunk-based asset loading and caching for mobile optimization.",
    techStack: ["Unity 2022", "C#", "AR Core", "AWS", "3D Optimization"],
    status: "selected",
    statusLabel: "Selected — SIH 2025 Internal Round",
    link: null,
  },
  {
    name: "Geomaze",
    tagline: "Location-based collection game for real-world exploration",
    description:
      "Location-based mobile game integrating live map data for real-world exploration and virtual item collection, aimed at event and marathon engagement.",
    techStack: ["Unity3D", "C#", "OpenStreetMap API", "Geolocation"],
    status: "in-development",
    link: null,
  },
];
