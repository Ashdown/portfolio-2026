import styles from './HistorySkillList.module.css';

export default function HistorySkillList({skills}: { skills: string[] }) {
  return <ul className={styles.list}>
    {skills.map((skill, index) =>
      <li key={skill} className={styles.skill}>
        {skill}
      </li>
    )}
  </ul>;
}
