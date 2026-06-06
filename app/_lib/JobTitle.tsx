import styles from './JobTitle.module.css';

export default function JobTitle({ children }: { children: React.ReactNode }) {
  return <h4 className={styles.paragraph}>{children}</h4>;
}
