import {FaDownload, FaLinkedin, FaGithub} from 'react-icons/fa';
import Button from './Button';
import styles from './LinksSection.module.css';
import SectionHeading from "./SectionHeading";

export default function LinksSection() {
  return (
    <div id="links-section">
      <SectionHeading>Links</SectionHeading>
      <ul className={styles.linksSection}>
        <li className={styles.item}>
          <Button href="/docs/rory-devane-cv.pdf" download="rory-devane-cv.pdf"><FaDownload className={styles.icon}/> Download CV</Button>
        </li>
        <li className={styles.item}>
          <Button href="https://www.linkedin.com/in/rory-devane-7b65724/"><FaLinkedin className={styles.icon}/> Linked
            In</Button>
        </li>
        <li className={styles.item}>
          <Button href="https://github.com/Ashdown"><FaGithub className={styles.icon}/> Github</Button>
        </li>
      </ul>
    </div>
  );
}
