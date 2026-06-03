import styles from './Paragraph.module.css';

export default function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className={styles.paragraph}>{children}</p>;
}
