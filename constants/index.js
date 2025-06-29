import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
 
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
   
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    // {
    //   name: "Styled-Components",
    //   icon: "/assets/tech/styled-components.png",
    //   link: "https://styled-components.com/",
    // },
    // {
    //   name: "Framer-motion",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    // {
    //   name: "NextAuth.js",
    //   icon: "/assets/tech/nextauthjs.png",
    //   link: "https://next-auth.js.org/",
    // },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    // {
    //   name: "Postman",
    //   icon: "/assets/tech/postman.svg",
    //   link: "https://www.postman.com/",
    // },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    // {
    //   name: "Docker",
    //   icon: "/assets/tech/docker.svg",
    //   link: "https://www.docker.com/",
    // },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: "/assets/tech/postgresql.png",
    //   link: "https://www.postgresql.org",
    // },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  
  {
    title: "Android Developer Virtual Internship",
    company_name: "Google for Developers (via EduSkills & AICTE)",
    icon: "/assets/company/aictee.jpeg",
    iconBg: "#E6DEDD",
    date: "Oct - Dec 2024",
    points: [
      "Completed a 10-week virtual internship focused on Android Development.",
    "Organized by EduSkills and AICTE under the India Edu Program.",
    "Internship conducted via the National Internship Portal.",
    "Gained practical experience in Android development using modern tools and practices.",
    "Successfully fulfilled all requirements outlined by the program."
    ],
  },
  // {
  //   title: "Full Stack Developer Intern",
  //   company_name: "Intern at DRDO CABS",
  //   icon: "/assets/company/images.jpeg",
  //   iconBg: "#E6DEDD",
  //   date: "November 2023",
  //   points: [
  //     "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
  //     "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
  //     "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
  //     "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
  //   ],
  // },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
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
    name: "Weather App",
    description:
      "Weather App is a web application that provides real-time weather information for any location worldwide. It is built using React, CSS, and OpenWeatherMap API, allowing users to search for weather conditions by city or coordinates.",
    tags: [
     
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      
    ],
    image:
      "/assets/projects/W4.jpg",
    // source_code_link: "https://github.com/Shivam-Sharma-1/QuickEdit",
    // deployed_link: "https://quick-edit-app.vercel.app",
  },
  {
    name: "Fashion Hub",
    description:
      "This is a visually captivating fashion e-commerce landing page created using pure HTML and CSS — with no JavaScript or frameworks involved. The design emphasizes a clean, modern aesthetic and responsive layout, ideal for showcasing fashion products.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      
    ],
    image: "/assets/projects/p3.webp",
    // source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
    // deployed_link: "https://fig-pro-github.vercel.app",
  },
  {
    name: "SpeedoType",
    description:
      "SpeedoType is a sleek and fully responsive typing speed test web application built using React.js. It allows users to test and improve their typing speed with real-time metrics and a clean user interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      
    ],
    image: "/assets/projects/P5.webp",
    source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
    deployed_link: "https://speedotype3110.web.app",
  },
  {
    name: "Virtual Bank System",
    description:
      "Virtual Bank System is a web-based banking application that allows users to perform various banking operations such as creating accounts, transferring money, viewing transaction history, and more. It is built using Java and MySQL.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      
    ],
    image: "/assets/projects/VBS.jpg",
    source_code_link:
      "https://github.com/Priya-3110/virtual-bank-system.git",
    // deployed_link:
    //   "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/Priya-3110",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/priyansha-yeole",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "Problem solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
