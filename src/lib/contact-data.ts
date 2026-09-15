// ─────────────────────────────────────────────────────────────
// CONTACT DATA — edit this file to change contact links.
// To add a new channel: add an object to `contactLinks` with a
// `kind` that has styling in Contact.module.css, or reuse "other".
// ─────────────────────────────────────────────────────────────

export interface ContactLink {
  kind: "email" | "linkedin" | "instagram" | "other";
  label: string;
  value: string; // display text
  href: string; // full URL or mailto:
}

export const contactLinks: ContactLink[] = [
  {
    kind: "email",
    label: "Email",
    value: "wx.chitransh@gmail.com",
    href: "mailto:wx.chitransh@gmail.com",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/chitra9xh",
    href: "https://linkedin.com/in/chitra9xh",
  },
  {
    kind: "instagram",
    label: "Instagram",
    value: "@chitra9xh",
    href: "https://instagram.com/chitra9xh",
  },
];
