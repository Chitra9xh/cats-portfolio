import Nav from "@/components/Nav";
import { projects } from "@/lib/projects-data";
import styles from "./page.module.css";

const statusText: Record<string, string> = {
  completed: "Completed",
  "in-development": "In development",
  selected: "Selected",
};

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <Nav activePath="/projects" />

      <h1 className={styles.h1}>Projects</h1>
      <p className={styles.intro}>
        AR, VR, and web builds — from finished exhibition pieces to things still taking shape.
      </p>

      <div className={styles.list}>
        {projects.map((project, i) => (
          <article
            key={project.name}
            // alternating offset keeps entries from reading as N
            // copies of one identical card — purely presentational,
            // driven by position, not by data you have to maintain
            className={i % 2 === 0 ? styles.entry : `${styles.entry} ${styles.entryOffset}`}
          >
            <div className={styles.entryHead}>
              <h2 className={styles.name}>{project.name}</h2>
              <span className={`${styles.status} ${styles[project.status]}`}>
                {project.statusLabel ?? statusText[project.status]}
              </span>
            </div>

            <p className={styles.tagline}>{project.tagline}</p>
            <p className={styles.description}>{project.description}</p>

            <div className={styles.techRow}>
              {project.techStack.map((t) => (
                <span key={t} className={styles.tech}>
                  {t}
                </span>
              ))}
            </div>

            {/* No dead links: only render a link if one actually
                exists in the data. Otherwise show the status as the
                closing line instead of a broken button. */}
            {project.link ? (
              <a href={project.link} className={styles.link} target="_blank" rel="noreferrer">
                View project
              </a>
            ) : (
              <span className={styles.noLink}>No live link yet</span>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
