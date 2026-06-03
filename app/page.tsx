import ProfilePhoto from './_lib/ProfilePhoto';
import PageHeading from './_lib/PageHeading';
import Paragraph from './_lib/Paragraph';
import LinksSection from './_lib/LinksSection';

export default function Page() {
  return (
    <>
      <PageHeading>About Me</PageHeading>
      <ProfilePhoto src="/images/rory-devane.jpeg" />
      <Paragraph>Hi! I'm Rory, and I am a web developer based in London.</Paragraph>
      <Paragraph>Recently I've worked for a number of exciting start ups such
        as <strong>CarbonRe</strong> and <strong>evroc</strong>, as well as high profile broadcast companies like
        the <strong>BBC</strong> and <strong>Sky Broadcasting</strong>.</Paragraph>
      <Paragraph>I have <strong>9 years</strong> experience working with Reactive frameworks such
        as <strong>React</strong> and <strong>Svelte</strong>, and over <strong>15 years</strong> experience working
        in <strong>Web Development</strong> in general</Paragraph>
      <Paragraph>For me, the best kind of work environment is an exciting and fast paced one.</Paragraph>
      <Paragraph>Scroll down if you want to learn more about me, or feel free to reach out if you want to get in touch!</Paragraph>
      <LinksSection />
    </>
  );
}
