import Nav from "@/components/Nav";
import { contactLinks } from "@/lib/contact-data";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <Nav activePath="/contact" />

      <h1 className={styles.h1}>Get in touch</h1>
      <p className={styles.intro}>Reach out directly — always open to talking about AR/VR, web builds, or collaboration.</p>

      <div className={styles.list}>
        {contactLinks.map((link) => (
          <a
            key={link.kind}
            href={link.href}
            className={styles.entry}
            target={link.kind === "email" ? undefined : "_blank"}
            rel={link.kind === "email" ? undefined : "noreferrer"}
          >
            <span className={styles.label}>{link.label}</span>
            <span className={styles.value}>{link.value}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
