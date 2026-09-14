import styles from "./page.module.css";
import PixelCat from "@/components/PixelCat";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrap}>
        <div className={styles.stage}>
          <div className={styles.sprite}>
            <PixelCat />
          </div>
          <p className={styles.spriteCaption}>{siteConfig.spriteCaption}</p>
        </div>

        <div className={styles.textPanel}>
          <h1 className={styles.headline}>{siteConfig.headline}</h1>
          <p className={styles.intro}>{siteConfig.intro}</p>
          <p className={styles.status}>{siteConfig.status}</p>
          <p className={styles.byline}>
            {siteConfig.name} — {siteConfig.role}
          </p>
        </div>
      </div>
    </main>
  );
}
