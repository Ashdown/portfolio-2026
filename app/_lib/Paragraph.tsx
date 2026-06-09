import styles from './Paragraph.module.css';

export default function Paragraph({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <p className={`${styles.paragraph} ${className}`}>{children}</p>;
}
