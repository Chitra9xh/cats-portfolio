import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// `activePath` should be the current route, e.g. "/about" — pass it
// from each page (App Router has no built-in "current path" in a
// shared server component, so each page supplies its own).
export default function Nav({ activePath }: { activePath: string }) {
  return (
    <nav className={styles.nav} aria-label="Main">
      <ul className={styles.list}>
        {links.map((link) => {
          const isActive = link.href === activePath;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? `${styles.tab} ${styles.active}` : styles.tab}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
