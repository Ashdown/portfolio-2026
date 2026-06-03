import styles from './SectionHeading.module.css';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.heading}>{children}</h2>;
}
