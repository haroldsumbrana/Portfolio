import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  paxyroll,
  growingmarijuana,
  okumura,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: reactjs,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Wordpress Developer",
    icon: web,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Asp.net",
    icon: web,
  },
];

const experiences = [
  {
    title: "Web Builder",
    company_name: "Mopro phlippines",
    icon: web,
    iconBg: "#383E56",
    date: "April 2017 - October 2018",
    points: [
      "Utilize Mopro's proprietary platform to develop digital products for Mopro and clients, including landing pages, training sites, microsites, and client websites, while meeting team objectives and maintaining content quality. Adhere to formatting standards and stay updated on systems and services for delivering top-notch information. Comply with company policies and standards, meeting performance expectations and attendance requirements.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Intagent",
    icon: web,
    iconBg: "#E6DEDD",
    date: "October 2018 - October 2019",
    points: [
      "Experienced WordPress Developer proficient in creating and customizing websites using the WordPress CMS. Skilled in developing responsive themes, custom plugins, and implementing unique functionalities. Proficient in PHP, HTML, CSS, and JavaScript for seamless website development. Strong troubleshooting abilities to address issues and ensure optimal performance. Dedicated to delivering high-quality websites that meet client requirements.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Npax Cebu Corporation",
    icon: backend,
    iconBg: "#383E56",
    date: "November 2019 - Current",
    points: [
      "Design and develop software solutions using C#, ASP.NET, and the repository pattern, while following best practices and the interface repository model. Write clean and efficient code to ensure optimal performance. Additionally, proficient in React.js, creating interactive and responsive user interfaces. Collaborate with cross-functional teams to deliver high-quality software products that meet client requirements.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HRMS",
    description:
      "Web-based ASP.NET Core MVC-based HRMS platform for streamlined management of employee onboarding, attendance, leave, performance evaluations, and payroll. Simplify HR operations and enhance productivity with a user-friendly interface.",
    tags: [
      {
        name: "asp.netcore",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "js/jquery",
        color: "pink-text-gradient",
      },
    ],
    image: paxyroll,
    source_code_link: "https://paxyroll.com/#home",
  },
  {
    name: "CMS",
    description:
      "This web app features a forum for social interaction, along with a messaging system for chat and mail. Users can post status updates and it is built using WordPress, PHP, and utilizes the BBPress plugin for forums.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "bbpress",
        color: "pink-text-gradient",
      },
    ],
    image: growingmarijuana,
    source_code_link: "https://staging.growingmarijuana.com/login/",
  },
  {
    name: "Stable Manager",
    description:
      "The web app is dedicated to stable management, offering a range of tools, resources, and information for efficient stable operations. It provides features such as stable management tools, equestrian resources, event listings, and possibly a stable directory.",
    tags: [
      {
        name: "asp.netcore",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "js/jquery",
        color: "pink-text-gradient",
      },
    ],
    image: okumura,
    source_code_link: "https://stable-manager.jp/",
  },
];

export { services, technologies, experiences, testimonials, projects };
