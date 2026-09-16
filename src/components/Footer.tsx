import styles from "./Footer.module.css";
import { bio } from "@/lib/about-data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2026 Chitransh</span>
        <span className={styles.divider}>·</span>
        <span>{bio.paragraphs[0]}</span>
      </div>
    </footer>
  );
}
