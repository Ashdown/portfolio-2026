import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  download?: string;
}

export default function Button({ children, href, onClick, download }: ButtonProps) {
  if (href) {
    return <a href={href} className={styles.button} download={download}>{children}</a>;
  }
  return <button onClick={onClick} className={styles.button}>{children}</button>;
}
