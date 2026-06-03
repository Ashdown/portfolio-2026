import {FaDownload, FaLinkedin, FaGithub} from 'react-icons/fa';
import Button from './Button';
import styles from './LinksSection.module.css';
import SectionHeading from "./SectionHeading";

export default function LinksSection() {
  return (
    <>
      <SectionHeading>Links</SectionHeading>
      <ul id="links-section" className={styles.linksSection}>
        <li className={styles.item}>
          <Button><FaDownload className={styles.icon}/> Download CV</Button>
        </li>
        <li className={styles.item}>
          <Button href="https://www.linkedin.com/in/rory-devane-7b65724/"><FaLinkedin className={styles.icon}/> Linked
            In</Button>
        </li>
        <li className={styles.item}>
          <Button href="https://github.com/Ashdown"><FaGithub className={styles.icon}/> Github</Button>
        </li>
      </ul>
    </>
  );
}
