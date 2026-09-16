import Nav from "@/components/Nav";
import { bio, experience, volunteer, skills } from "@/lib/about-data";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Nav activePath="/about" />

      <h1 className={styles.h1}>{bio.headline}</h1>

      <section className={styles.bio}>
        {bio.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>
      
      <section className={styles.section}>
        <h2 className={styles.h2}>Skills</h2>
        <div className={styles.skillsGrid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.skillGroup}>
              <div className={styles.skillCategory}>{category}</div>
              <div className={styles.skillList}>{items.join(", ")}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Experience</h2>
        <div className={styles.entries}>
          {experience.map((e) => (
            <div key={e.org} className={styles.entry}>
              <div className={styles.entryHead}>
                <span className={styles.entryRole}>{e.role}</span>
                <span className={styles.entryPeriod}>{e.period}</span>
              </div>
              <div className={styles.entryOrg}>{e.org}</div>
              <ul>
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Community</h2>
        <div className={styles.entries}>
          {volunteer.map((v) => (
            <div key={v.org} className={styles.entry}>
              <div className={styles.entryHead}>
                <span className={styles.entryRole}>{v.role}</span>
                <span className={styles.entryPeriod}>{v.period}</span>
              </div>
              <div className={styles.entryOrg}>{v.org}</div>
              <ul>
                {v.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      
    </main>
  );
}
