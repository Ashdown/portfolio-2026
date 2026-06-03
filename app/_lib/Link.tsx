import styles from './Link.module.css';

export default function Link({ href, className = "", children }: { href: string; className?: string, children: React.ReactNode }) {
  return <a href={href} className={`${styles.link} ${className}`}>{children}</a>;
}
