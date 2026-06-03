import Button from './Button';
import styles from './LinksSection.module.css';

export default function LinksSection() {
  return (
    <ul id="links-section" className={styles.linksSection}>
      <li className={styles.item}>
        <Button>Download CV</Button>
      </li>
      <li className={styles.item}>
        <Button href="https://www.linkedin.com/in/rory-devane-7b65724/">Linked In</Button>
      </li>
      <li className={styles.item}>
        <Button href="https://github.com/Ashdown">Github</Button>
      </li>
    </ul>
  );
}
