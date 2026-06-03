import Link from './Link';
import styles from './GlobalNavigation.module.css';

export default function GlobalNavigation() {
  return (
    <ul className={styles.nav}>
      <li>
        <Link href="#about-me-section">About Me</Link>
      </li>
      <li>
        <Link href="#links-section">Links</Link>
      </li>
    </ul>
  );
}
