import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, href, onClick }: ButtonProps) {
  if (href) {
    return <a href={href} className={styles.button}>{children}</a>;
  }
  return <button onClick={onClick} className={styles.button}>{children}</button>;
}