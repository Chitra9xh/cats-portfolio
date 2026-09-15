// ─────────────────────────────────────────────────────────────
// ABOUT PAGE DATA — edit this file to update bio/experience/
// volunteer content. The About page just renders these.
// ─────────────────────────────────────────────────────────────

export const bio = {
  headline: "Building AR, VR, and web experiences, one project at a time.",
  paragraphs: ["I know I can do it, I just have to panic first. Trust me it is part of the process.",],
};

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Freelance / Intern",
    org: "The Eye Wear Project",
    period: "June 2026 – Present",
    bullets: [
      "Building a web-based virtual try-on application for eyewear",
      "Modeling custom 3D glasses assets in Blender",
    ],
  },
  {
    role: "Freelance / Intern",
    org: "Shyara Tech Solution (OPC) Pvt. Ltd.",
    period: "June 2026 – Present",
    bullets: [
      "Built optimized multiplayer web games with real-time state sync for 2–6 concurrent players",
      "Built customizable wedding templates in Figma, integrated for the web",
    ],
  },
];

export interface VolunteerEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const volunteer: VolunteerEntry[] = [
  {
    role: "Community Lead",
    org: "Developer Student Clubs — VR-AR-MR, Guna",
    period: "June 2024 – Present",
    bullets: ["Contributed to club projects: VR Golf, AR Escape Room, AR Dart Shooter, AR Zombie Shooter"],
  },
  {
    role: "Community Lead",
    org: "Developer Student Clubs — Rospinot, ISF Guna",
    period: "June 2024 – Present",
    bullets: ["Built club projects with EV3, Arduino, and Raspberry Pi", "Hosted the CodeSrijan hackathon"],
  },
];

export const skills = {
  Languages: ["Python", "C", "C++", "C#", "SQL", "Java"],
  Frameworks: ["8th Wall", "XR Interaction Toolkit", "Scikit-learn", "TensorFlow", "AR Core"],
  Tools: ["Vuforia", "Docker", "Git", "MySQL", "Figma"],
  Platforms: ["Linux", "Web", "Windows", "Arduino", "Raspberry Pi", "AWS", "Blender"],
};
