import SectionHeading from "@/app/_lib/SectionHeading";
import SubSectionHeading from "@/app/_lib/SubSectionHeading";
import Paragraph from "@/app/_lib/Paragraph";
import JobTitle from "@/app/_lib/JobTitle";
import HistorySkillList from "@/app/_lib/HistorySkillList";
import styles from './HistorySection.module.css';
import historyData from './HistoryData';

export default function HistorySection() {
  return (
    <div id="history-section">
      <SectionHeading>History</SectionHeading>
      <ul className={styles.list}>
        {historyData.map((dataItem) =>
          <li className={styles.item} key={dataItem.companyName}>
            <SubSectionHeading className={styles.companyHeading}>{dataItem.companyName}</SubSectionHeading>
            <Paragraph>{dataItem.companyDescription}</Paragraph>
            <JobTitle>{dataItem.role}</JobTitle>
            <Paragraph>{dataItem.duration}</Paragraph>
            <HistorySkillList skills={dataItem.skillList}/>
            <Paragraph>{dataItem.roleDescription}</Paragraph>
          </li>
        )}
      </ul>
    </div>
  )
}
