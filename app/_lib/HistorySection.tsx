import SectionHeading from "@/app/_lib/SectionHeading";
import SubSectionHeading from "@/app/_lib/SubSectionHeading";
import Paragraph from "@/app/_lib/Paragraph";
import JobTitle from "@/app/_lib/JobTitle";
import HistorySkillList from "@/app/_lib/HistorySkillList";
import styles from './HistorySection.module.css';

export default function HistorySection() {
  return (
    <div>
      <SectionHeading>History</SectionHeading>
      <ul>
        <li className={styles.item}>
          <SubSectionHeading className={styles.companyHeading}>evroc</SubSectionHeading>
          <Paragraph>
            Swedish-based technology company building and operating Europe’s first fully sovereign hyperscale cloud and
            AI services platform
          </Paragraph>
          <JobTitle>Lead Front End Engineer</JobTitle>
          <Paragraph>April 2025 - May 2026 (1 year)</Paragraph>
          <HistorySkillList
            skills={['Svelte', 'SvelteKit', 'NodeJS', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'evroc Cloud Services', 'Technical Leadership', 'Line Management', 'Product Ownership']}/>
          <Paragraph>
            Full Stack Development and technical leadership for the public facing front end of an ambitious start up. In
            this role I owned the codebase for the front end and managed a team of developers and designers. As the
            product owner of the console, I was also working closely with senior management within the company.
          </Paragraph>
        </li>
        <li className={styles.item}>
          <SubSectionHeading className={styles.companyHeading}>CarbonRe (Gigaton)</SubSectionHeading>
          <Paragraph>
            An industrial climate-tech company that uses machine learning to help energy-intensive, hard-to-abate
            sectors—such as cement reduce their greenhouse gas emissions and operational costs.
          </Paragraph>
          <JobTitle>Role: Senior Front End Engineer</JobTitle>
          <Paragraph>September 2022 to March 2025 (2.5 years)</Paragraph>
          <HistorySkillList skills={['React', 'TypeScript', 'JavaScript', 'JSS', 'CSS', 'AWS']}/>
          <Paragraph>
            In this role I built the console, which is client facing web product for CarbonRe (now Gigaton). The console
            consists of a series of dashboards and controls that allow our users to monitor and adjust the affect of our
            products on their cement plants. Working in this role required me to work closely with machine learning
            engineers, sales and senior managers within the business.
          </Paragraph>
        </li>
      </ul>
    </div>
  )
}
