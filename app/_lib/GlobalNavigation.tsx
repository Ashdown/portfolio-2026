import Link from './Link';
import styles from './GlobalNavigation.module.css';

export default function GlobalNavigation() {
  return (
    <ul className={styles.nav}>
      <li>
        <Link className={styles.link} href="#about-me-section">About Me</Link>
      </li>
      <li>
        <Link className={styles.link} href="#links-section">Links</Link>
      </li>
    </ul>
  );
}
