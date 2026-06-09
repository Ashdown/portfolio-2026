type HistoryDataItem = {
  companyName: string;
  companyDescription: string;
  role: string;
  duration: string;
  skillList: string[];
  roleDescription: string;
}

type HistoryData = HistoryDataItem[];

const historyData: HistoryData = [
  {
    companyName: "evroc",
    companyDescription:
      "Swedish-based technology company building and operating Europe’s first fully sovereign hyperscale cloud and AI services platform",
    role: "Lead Front End Engineer",
    duration: "April 2025 - May 2026 (1 year)",
    skillList: [
      'Svelte', 'SvelteKit', 'NodeJS', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'evroc Cloud Services', 'Technical Leadership', 'Line Management', 'Product Ownership'
    ],
    roleDescription:
      "Full Stack Development and technical leadership for the public facing front end of an ambitious start up. In this role I owned the codebase for the front end and managed a team of developers and designers. As the product owner of the console, I was also working closely with senior management within the company."
  },
  {
    companyName: "CarbonRe (Gigaton)",
    companyDescription:
      "An industrial climate-tech company that uses machine learning to help energy-intensive, hard-to-abate sectors—such as cement reduce their greenhouse gas emissions and operational costs.",
    role: "Senior Front End Engineer",
    duration: "September 2022 to March 2025 (2.5 years)",
    skillList: ['React', 'TypeScript', 'JavaScript', 'JSS', 'CSS', 'AWS'],
    roleDescription:
      "In this role I built the console, which is client facing web product for CarbonRe (now Gigaton). The console consists of a series of dashboards and controls that allow our users to monitor and adjust the affect of our products on their cement plants. Working in this role required me to work closely with machine learning engineers, sales and senior managers within the business."
  },
  {
    companyName: "Hummingbird Technologies",
    companyDescription:
      "A London-based Machine Learning and remote-sensing agricultural technology startup",
    role: "Lead Front End Engineer",
    duration: "November 2020 to August 2022 (2 years)",
    skillList: ['React', 'TypeScript', 'JavaScript', 'JSS', 'CSS', 'SCSS', 'GCP', 'Storybook', 'GraphQL'],
    roleDescription:
      "As the manager of the Front End team I was leading the development of the front end product and worked closely with senior stakeholers and the Machine Learning team."
  },
  {
    companyName: "Tempo",
    companyDescription:
      "A recruitment platform and technology startup company",
    role: "Senior Developer / Lead Front End Developer",
    duration: "June 2017 to October 2020 (3.5 years)",
    skillList: ['React', 'Redux', 'NodeJS', 'TypeScript', 'JavaScript', 'CSS', 'SCSS', 'Storybook', 'GraphQL'],
    roleDescription:
      "Lead the development of the production ready version of the Front End product for Tempo.  I was also the development lead for UI library"
  },
  {
    companyName: "Jamie Oliver",
    companyDescription:
      "Jamie Oliver's official website servers as a hub for recipes, promotional events and an online marketplace",
    role: "Senior Developer / Lead Front End Developer",
    duration: "January 2016 to December 2016 (1 year)",
    skillList: ['JavaScript', 'CSS', 'PHP'],
    roleDescription:
      "Front end developer for the main website, contributing to features and improving code quality.  Lead the development of Jamie's Food revolution for 2016"
  },
  {
    companyName: "Sky Broadcasting",
    companyDescription:
      "Europe's largest media company and pay-TV broadcaster by revenue",
    role: "Senior Developer",
    duration: "May 2013 to July 2015 (2 years)",
    skillList: ['JavaScript', 'CSS', 'Ruby'],
    roleDescription:
      "Leading front end development for the My Sky team.  Building new features and dashboards to support customer management"
  },
  {
    companyName: "Betfair",
    companyDescription:
      "A major online gaming company",
    role: "Web Developer",
    duration: "May 2012 to May 2013 (1 year)",
    skillList: ['JavaScript', 'CSS', 'Ruby'],
    roleDescription:
      "Desktop and Mobile developer for Betfair homepage"
  },
  {
    companyName: "BBC",
    companyDescription:
      "The United Kingdom's primary national public service broadcaster",
    role: "Web Developer",
    duration: "December 2009 to April 2012 (2.5 years)",
    skillList: ['JavaScript', 'CSS', 'PHP'],
    roleDescription:
      "Full stack developer contributing features for the BBC food and BBC Recipe binder websites.  Development lead of mobile Olympic torch relay site.  Interim team leas for mobile BBC Sport 2012 site."
  },

]

export default historyData;
