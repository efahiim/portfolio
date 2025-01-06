import { linkeo, freelance, rapp, elca } from "@assets/images";
import {
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  pricewise,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threads,
  typescript,
  symfony,
  threejs,
  angular,
  gsap,
  flutter,
  graphql,
} from "@assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: symfony,
    name: "Symfony",
    type: "Backend",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Utility",
  },
  {
    imageUrl: angular,
    name: "Angular",
    type: "Frontend",
  },
  {
    imageUrl: gsap,
    name: "GSAP",
    type: "Utility",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Mobile Applications",
  },
  {
    imageUrl: graphql,
    name: "GraphQL",
    type: "Data Query",
  },
];

export const experiences = [
  {
    title: "Team Leader (Webmaster)",
    company_name: "Linkeo Web Agency",
    icon: linkeo,
    iconBg: "#a2d2ff",
    date: "Mar 2019 - Feb 2022",
    points: [
      "Consistently integrated content into approximately 60 websites a month, doubling the initial company goal of 30 per employee, with a personal best of 80 websites integrated in one month.",
      "Managed a team of 10-12 webmasters, increasing overall productivity 60%, with a monthly website output increase from 110 to 175.",
      "Introduced process innovations that improved content integration by 25%, laying the grounds for further process automation.",
      "Led discussions and initiated improvements regarding accessibility from a design point of view in a process following WCAG standards to make websites more usable by people with disabilities.",
      "Trained interns in HTML, CSS, and JavaScript through Linkeo Academy, thereby enabling them to take on full-time positions-80% of interns were promoted to full-time employees.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "RAPP Indian Ocean",
    icon: rapp,
    iconBg: "#ffcdaa",
    date: "Feb 2022 - Jan 2024",
    points: [
      "Mentored and led two junior frontend developers in a new project for Cosentyx https://www.experience-cosentyx.com/pso/. Technologies used: Next.js, Contentful, and GraphQL alongside a CI/CD pipeline on Azure. Because of this, the web app was launched before the planned launch date.",
      "Worked in a team of 5 front-end engineers improving the accessibility of the Pampers https://www.pampers.co.uk/ web app for Procter & Gamble. Because of this, this resulted in an 18% increase in PageSpeed Insights.",
      "Worked together with Tribal Worldwide London in the Volkswagen UK https://www.volkswagen.co.uk/en.html project to maintain and enhance its performance. I have utilized tools like React ‘DevTools’, React Profiler, and React Hooks to apply optimizations. Thereafter, this resulted in a great boost in the Lighthouse score from 60 to 80+.",
      "Review of pull requests in various projects, including but not limited to Pampers, Novartis, and Volkswagen UK. I did perform rollbacks whenever needed and resolved major issues to keep up the stability and performance of each project.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "ELCA Mauritius",
    icon: elca,
    iconBg: "#ffc5c1",
    date: "Jan 2024 - Aug 2024",
    points: [
      "Led the redesign and development of an award-winning Swiss e-commerce web application https://de.abilis.ch/.",
      "Utilised Redux for global state management and Redux Saga to manage complex, asynchronous flows, such as user authentication or even calling APIs, while maintaining efficiency in data handling and control of side effects without affecting performance.",
      "Led the migration of the ‘Abilis’ project from React 16 to 18. Ensured this migration was done seamlessly while vastly improving performance. Improved Build timing from 9-13 minutes.",
      "Worked with the project manager very closely on smooth and successful releases every Thursday, always overseeing to ensure everything goes as it is supposed to.",
      "Contributed to ‘ELCAcademy’ through leading discussions and demonstrations for interns on various technologies, including React Hooks, which eventually helped them in their transition to full-time positions.",
    ],
  },
  {
    title: "Freelance (Full Stack Engineer)",
    company_name: "404 Squad",
    icon: freelance,
    iconBg: "#bec1ff",
    date: "Feb 2019 - Jan 2025",
    points: [
      "Designed robust web applications for small to medium-sized enterprises using Symfony as the backend and Twig for the frontend, which increased operational efficiency by up to 20%.",
      "‘EasyAdmin’ was implemented for back-office management, reducing the content management time by up to 30%.",
      "Cross-platform mobile applications were developed using Flutter, which offers up to 40% faster time-to-market than native app development.",
      "Firebase was implemented in mobile apps for real-time data and authentication. This seamlessly integrated the user experience across both iOS and Android, resulting in improved user retention by up to 20%.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/efahiim",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/isfaaq-emambocus-mbcs/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "BCS PGD Dissertation",
    description:
      "Developed an e-commerce web application (Amazon-like), which is a shop that sells video games and consoles.",
    link: "https://github.com/efahiim/bcs-gm",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/efahiim/threads",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Apple iPhone 15 Clone",
    description:
      "Developed a replica of the iPhone 15 web application using Three.js, GSAP and other animation libraries.",
    link: "https://github.com/efahiim/apple",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Portfolio",
    description:
      "Developed my personal portfolio using Vite/React/Typescript/GSAP/Three.js to showcase my skills, projects and experience.",
    link: "https://github.com/efahiim/portfolio",
  },
];
