import SectionHeading from "./SectionHeading";
import SubSectionHeading from "./SubSectionHeading";
import styles from './SkillsSection.module.css';
import Skill from "@/app/_lib/Skill";

export default function SkillsSection () {
  return (
    <>
      <SectionHeading>Key Skills</SectionHeading>
      <SubSectionHeading>Frontend Technologies</SubSectionHeading>
      <ul className={styles.list}>
        <Skill years={8}>React</Skill>
        <Skill years={3.5}>Redux</Skill>
        <Skill years={1}>Svelte</Skill>
        <Skill years={1}>SvelteKit</Skill>
        <Skill years={4.5}>Node JS</Skill>
        <Skill years={10}>JavaScript/Typescript</Skill>
        <Skill years={8}>JSS</Skill>
        <Skill years={7}>SCSS</Skill>
        <Skill years={15}>CSS</Skill>
        <Skill years={1}>Tailwind CSS</Skill>
        <Skill years={3}>Storybook</Skill>
      </ul>
      <SubSectionHeading>Backend Languages</SubSectionHeading>
      <ul className={styles.list}>
        <Skill years={1}>Ruby</Skill>
        <Skill years={2}>GraphQL</Skill>
        <Skill years={2.5}>MongoDB</Skill>
        <Skill years={3.5}>PHP</Skill>
      </ul>
      <SubSectionHeading>Cloud Services and Hosting Providers</SubSectionHeading>
      <ul className={styles.list}>
        <Skill years={2.5}>AWS (Amazon Web Services)</Skill>
        <Skill years={1}>GCP (Google Cloud Platform)</Skill>
        <Skill years={1}>evroc Cloud Services</Skill>
      </ul>
      <SubSectionHeading>Non Technical Skills</SubSectionHeading>
      <ul className={styles.list}>
        <Skill years={3}>Line Management</Skill>
        <Skill years={3}>Technical Leadership</Skill>
        <Skill years={1}>Product Ownership</Skill>
      </ul>
    </>
  )
}
