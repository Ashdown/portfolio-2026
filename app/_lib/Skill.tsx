import styles from './Skill.module.css';

export default function Skill({children, years}: { children: React.ReactNode, years: number }) {
  return (
    <li className={styles.skill}>
      <span className={styles.skillTitle}>{children}</span>: {years} years
    </li>
  )
}
