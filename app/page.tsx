import Image from 'next/image';

export default function Page() {
  return (
    <>
      <h1 id="about-me-section">About Me</h1>
      <img src="/images/rory-devane.jpeg" height="512" width="512"/>
      <p>Hi! I'm Rory, and I am a web developer based in London.</p>
      <p>Recently I've worked for a number of exciting start upsuch
        as <strong>CarbonRe</strong> and <strong>evroc</strong>, as well as high profile broadcast companies like
        the <strong>BBC</strong> and <strong>Sky Broadcasting</strong>.</p>
      <p>I have <strong>9 years</strong> experience working with Reactive frameworks such
        as <strong>React</strong> and <strong>Svelte</strong>, and over <strong>15 years</strong> experience working
        in <strong>Web Development</strong> in general</p>
      <p>For me, the best kind of work environment is an exciting and fast paced one.</p>
      <p>Scroll down if you want to learn more about me, or feel free to reach out if you want to get in touch!</p>
      <ul id="links-section">
        <li>
          <button>Download CV</button>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rory-devane-7b65724/" target="_blank">Linked In</a>
        </li>
        <li>
          <a href="https://github.com/Ashdown" target="_blank">Github</a></li>
      </ul>
    </>
  );
}
