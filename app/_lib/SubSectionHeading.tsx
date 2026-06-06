import styles from './SubSectionHeading.module.css';

export default function SubSectionHeading({children}: { children: React.ReactNode }) {
  return <h3 className={styles.heading}>{children}</h3>
}
