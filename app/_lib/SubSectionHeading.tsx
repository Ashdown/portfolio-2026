import styles from './SubSectionHeading.module.css';

export default function SubSectionHeading({children, className}: { children: React.ReactNode, className?: string }) {
  return <h3 className={`${styles.heading} ${className}`}>{children}</h3>
}
