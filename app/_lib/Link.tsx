import styles from './Link.module.css';

export default function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className={styles.link}>{children}</a>;
}
