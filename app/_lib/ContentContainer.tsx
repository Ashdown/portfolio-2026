import styles from './ContentContainer.module.css';

export default function ContentContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles.contentContainer}>{children}</div>;
}
