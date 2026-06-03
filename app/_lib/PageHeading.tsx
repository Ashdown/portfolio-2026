import styles from './PageHeading.module.css';

export default function PageHeading({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.pageHeading}>{children}</h1>;
}
