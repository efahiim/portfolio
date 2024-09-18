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
      "Consistently integrated content on an average of 60 websites per month (doubling the initial company target of 30 per employee) and set a personal record of 80 websites in one month.",
      "Led a team of 10-12 webmasters, boosting overall productivity by 60%, increasing the team's monthly output from 110 websites to 175.",
      "Introduced process innovations that improved content integration efficiency by 25%, laying the groundwork for automating future processes.",
      "Led discussions and initiated accessibility improvements from a design perspective, improving the usability of websites for users with disabilities, in line with WCAG standards.",
      "Trained interns in HTML, CSS, and JavaScript through the Linkeo Academy program, facilitating their progression into permanent positions, with an 80% conversion rate from intern to full-time employee.",
    ],
  },
  {
    title: "Freelance (Full Stack Engineer)",
    company_name: "404 Squad",
    icon: freelance,
    iconBg: "#bec1ff",
    date: "Feb 2019 - Feb 2022",
    points: [
      "Developed robust web applications for small to medium enterprises using Symfony for backend and Twig for frontend, improving operational efficiency by 20%.",
      "Implemented ‘EasyAdmin’ for back-office management, significantly reducing the time required for content management by 30%.",
      "Built cross-platform mobile applications using Flutter, delivering a 40% faster time-to-market compared to native app development.",
      "Integrated Firebase for real-time data and authentication in mobile apps, leading to a seamless user experience across iOS and Android platforms, increasing user retention by 25%.",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company_name: "RAPP Indian Ocean",
    icon: rapp,
    iconBg: "#ffcdaa",
    date: "Feb 2022 - Jan 2024",
    points: [
      "Successfully led a team of 5 frontend engineers in enhancing the accessibility of the Pampers https://www.pampers.co.uk/ web application for Procter & Gamble, resulting in a 15% increase in the number of users.",
      "Orchestrated and mentored two junior frontend developers on a new project for Cosentyx https://www.experience-cosentyx.com/pso/, utilising technologies such as Next.js, Contentful, and GraphQL, along with a CI/CD pipeline on Azure. Our efforts resulted in the web application going live ahead of schedule.",
      "Reviewed pull requests across multiple projects, including Pampers, Novartis, and Volkswagen UK. I executed rollbacks when necessary and resolved major issues to maintain the stability and performance of each project.",
      "Collaborated with Tribal Worldwide London on the Volkswagen UK https://www.volkswagen.co.uk/en.html project to maintain and enhance its performance. I utilised tools such as React ‘DevTools’, React Profiler, and React Hooks to implement optimisations, resulting in a substantial improvement in the Lighthouse score, from 60 to 80+.",
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
      "Spearheaded the migration from React 16 to 18 for the ‘Abilis’ project, ensuring seamless integration and drastically improving performance. This resulted in faster build times, improving by 9-13 minutes on average.",
      "Collaborated closely with the project manager to ensure smooth and successful releases every Thursday, consistently overseeing all aspects to guarantee everything proceeded as planned.",
      "Contributed to ‘ELCAcademy’ by leading discussions and demonstrations for interns on various technologies, including React Hooks, which ultimately facilitated their transition to full-time positions.",
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
